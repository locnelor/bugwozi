import { NotFoundGoodsException } from '@app/error/http.error';
import { HashService } from '@app/hash';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { SysGoodsEntity } from '@app/prisma/entity/sys/sys.goods.entity';
import { SysOrderEntity } from '@app/prisma/entity/sys/sys.order.entity';
import { RedisCacheService } from '@app/redis-cache';
import { WeChatService } from '@app/wechat';
import { Injectable } from '@nestjs/common';
import { order_state, order_trade_type } from '@pkg/database';
import { ConfigureService } from 'src/configure/configure.service';

@Injectable()
export class OrderService {
  findOne(out_trade_no: string) {
    return this.prisma.sys_order.findUnique({
      where:{
        out_trade_no
      }
    })
  }

  constructor(
    private readonly wechatService: WeChatService,
    private readonly prisma: PrismaService,
    private readonly hash: HashService,
    private readonly redis: RedisCacheService
  ) { }

  async handleOrder({
    out_trade_no,
    transaction_id,
    trade_state,
    bank_type,
    attach,
    payer
  }) {
    if (!out_trade_no) return;
    //更改订单状态
    const result = await this.prisma.sys_order.update({
      where: {
        out_trade_no
      },
      data: {
        transaction_id,
        bank_type,
        attach,
        payOpenId: payer?.openid,
        state: trade_state
      }
    })
    //更改redis
    await this.setOrderByKey(
      this.getGoodsOnUserUidKey(result.goodsId, result.userId),
      result
    )
  }

  //创建一个订单
  private async createOrder(
    goods: SysGoodsEntity,
    user: SysUserEntity,
    trade_type: order_trade_type
  ) {
    const out_trade_no = this.makeOrderTradeNo()
    const notify_url = `https://api.bugwozi.top/order/handle`
    let url: string
    switch (trade_type) {
      case "NATIVE":
        const nativeResult = await this.wechatService.pay.transactions_native({
          notify_url,
          amount: {
            total: goods.amount
          },
          description: goods.description,
          out_trade_no
        })
        url = nativeResult.data.code_url
        break;
    }
    const order = await this.prisma.sys_order.create({
      data: {
        userId: user.uid,
        out_trade_no,
        url,
        amount: goods.amount,
        description: goods.description,
        trade_type,
        state: order_state.NOTPAY,
        goodsId: goods.uid
      }
    })
    await this.setOrder(goods, user, order);
    return order;
  }
  /**
   * 商品与用户id为key，value为订单号与状态
   */
  private getGoodsOnUserUidKey(goodsId: string, userId: string) {
    //检验
    return this.hash.md5(`${goodsId}_${userId}`)
  }

  private async hasOrder(goodsId: string, user: SysUserEntity) {
    const key = this.getGoodsOnUserUidKey(goodsId, user.uid);
    const res = await this.redis.get(key);
    let out_trade_no: string;
    let state: order_state
    if (!!res) {
      [out_trade_no, state] = res.split("_") as any
    }
    return { out_trade_no, state };
  }

  public scanOrder(goodId: string, user: SysUserEntity) {
    return this.hasOrder(goodId, user);
  }

  private setOrderByKey(key: string, order: SysOrderEntity) {
    return this.redis.set(key, `${order.out_trade_no}_${order.state}`, "EX", ConfigureService.ORDER_QR_CODE_EXPIRE);
  }

  public async setOrder(goods: SysGoodsEntity, user: SysUserEntity, order: SysOrderEntity) {
    const key = this.getGoodsOnUserUidKey(goods.uid, user.uid);
    //设置十分钟，将订单id与状态保存
    await this.redis.set(key, `${order.out_trade_no}_${order.state}`, "EX", ConfigureService.ORDER_QR_CODE_EXPIRE);
  }

  public makeOrderTradeNo() {
    return this.hash.createUid()
  }

  //发起native支付
  async createNativeOrder(
    user: SysUserEntity,
    uid: string
  ) {
    const goods = await this.prisma.sys_goods.findUnique({
      where: {
        uid
      }
    })
    if (!goods) throw NotFoundGoodsException
    //检查订单
    const { out_trade_no } = await this.hasOrder(goods.uid, user);
    if (!!out_trade_no) {
      return await this.prisma.sys_order.findUnique({ where: { out_trade_no } })
    }
    return await this.createOrder(goods, user, order_trade_type.NATIVE);
  }

}
