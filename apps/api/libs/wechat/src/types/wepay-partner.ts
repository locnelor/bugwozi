import { RequireOnlyOne } from '.';
import { CreateCardTemplateRequest, DevelopmentConfigRequest, FapiaoNotifyResult, IssueFapiaoRequest, RefundNotifyResult, RefundParameters, ReverseFapiaoRequest, Trade, TransactionOrder } from './wepay';

/**
 * 微信支付服务务下单数据结构
 * WePay Transaction Order Data
 */
export interface TransactionOrderOfPartner extends Omit<TransactionOrder, 'appid' | 'mchid' | 'payer'> {

  /**
   * 【服务商应用ID】 由微信生成的应用ID，全局唯一。请求基础下单接口时请注意AppID的应用属性，例如公众号场景下，需使用应用属性为公众号的服务号AppID
   * 
   * 长度：32位
   */
  sp_appid: string;

  /**
   * 【服务商户号】 服务商户号，由微信支付生成并下发
   * 
   * 长度：32位
   */
  sp_mchid: string;
  /**
   * 【子商户/二级商户应用ID】 子商户/二级商户在开放平台申请的应用AppID，全局唯一。
   * 请求基础下单接口时请注意AppID的应用属性，例如公众号场景下，需使用应用属性为公众号的APPID若sub_openid有传的情况下，sub_appid必填，且sub_appid需与sub_openid对应
   * 
   * 长度：32位
   */
  sub_appid?: string;
  /**
   * 【子商户号/二级商户号】 子商户/二级商户的商户号，由微信支付生成并下发。
   * 
   * 长度：32位
   */
  sub_mchid: string;

  /**
   * 【支付者 】 支付者信息。
   * sp_openid 和 sub_openid 两个字段必须要填一个
   */
  payer: RequireOnlyOne<{
    /**
     * 【用户服务标识】 用户在服务商AppID下的唯一标识。 下单前需获取到用户的OpenID，
     */
    sp_openid: string;
    /**
     * 【用户子标识】 用户在子商户AppID下的唯一标识。若传sub_openid，那sub_appid必填。
     */
    sub_openid: string;
  }>;
}

/**
 * 微信支付服务商订单数据结构
 */
export interface TradeOfPartner extends Omit<Trade, 'payer' | 'appid' | 'mchid'> {
  sp_appid: string;
  sp_mchid: string;
  sub_appid: string;
  sub_mchid: string;
  payer: {
    sp_openid: string;
    sub_openid: string;
  };
}

/**
 * 服务端退款请求参数
 */
export interface RefundParametersOfPartner extends RefundParameters {
  /**
   * 【子商户号】 子商户的商户号，由微信支付生成并下发。服务商模式下必须传递此参数
   * 长度：32位
   */
  sub_mchid: string;
}

/**
 * 服务商退款通知数据结构
 */
export interface RefundNotifyResultOfPartner extends Omit<RefundNotifyResult, 'mchid'> {
  /**
   * 服务商户号，由微信支付生成并下发
   */
  sp_mchid: string;
  /**
   * 子商户的商户号，由微信支付生成并下发
   */
  sub_mchid: string;
}

/** 电子发票 **/

/**
 * 配置开发选项
 */
export interface DevelopmentConfigRequestOfPartner extends DevelopmentConfigRequest {
  /**
   * 【子商户号】 微信支付分配的子商户号，服务商为子商户设置全部账单展示发票入口开关时必填
   */
  sub_mch_code?: string;
}

export interface FapiaoNotifyResultOfPartner extends FapiaoNotifyResult {
  /**
   * 微信支付分配的子商户号，服务商模式下存在
   */
  sub_mchid: string;
}

export interface IssueFapiaoRequestOfPartner extends IssueFapiaoRequest {
  sub_mchid: string;
}

export interface ReverseFapiaoRequestOfPartner extends ReverseFapiaoRequest {
  sub_mchid: string;
}

export interface CreateCardTemplateRequestOfPartner extends CreateCardTemplateRequest {
  sub_mchid: string;
}

/** 电子发票 **/














/**
 * Native支付订单查询返回参数
 */
// export interface TransactionNativeResponse {
//   /**
//    * 【公众账号ID】商户下单时传入的公众账号ID
//    */
//   appid: string;

//   /**
//    * 【商户号】商户下单时传入的商户号
//    */
//   mchid: string;

//   /**
//    * 【商户订单号】商户下单时传入的商户系统内部订单号
//    */
//   out_trade_no: string;

//   /**
//    * 【微信支付订单号】微信支付侧订单的唯一标识
//    */
//   transaction_id: string;

//   /**
//    * 【交易类型】返回当前订单的交易类型
//    */
//   trade_type: 'JSAPI' | 'NATIVE' | 'APP' | 'MICROPAY' | 'MWEB' | 'FACEPAY';

//   /**
//    * 【交易状态】返回订单当前交易状态
//    */
//   trade_state: 'SUCCESS' | 'REFUND' | 'NOTPAY' | 'CLOSED' | 'REVOKED' | 'USERPAYING' | 'PAYERROR';

//   /**
//    * 【交易状态描述】对交易状态的详细说明
//    */
//   trade_state_desc: string;

//   /**
//    * 【银行类型】用户支付方式说明
//    */
//   bank_type?: string;

//   /**
//    * 【商户数据包】商户下单时传入的自定义数据包
//    */
//   attach?: string;

//   /**
//    * 【支付完成时间】遵循rfc3339标准格式
//    */
//   success_time?: string;

//   /**
//    * 【支付者信息】订单的支付者信息
//    */
//   payer?: {
//     /**
//      * 【用户标识】用户在商户下单的appid下唯一标识
//      */
//     openid: string;
//   };

//   /**
//    * 【订单金额】订单金额信息
//    */
//   amount?: {
//     /**
//      * 【总金额】订单总金额，单位为分
//      */
//     total: number;
//     /**
//      * 【用户支付金额】用户实际支付金额，单位为分
//      */
//     payer_total: number;
//     /**
//      * 【货币类型】固定返回：CNY
//      */
//     currency: string;
//     /**
//      * 【用户支付币种】固定返回：CNY
//      */
//     payer_currency: string;
//   };

//   /**
//    * 【场景信息】支付场景描述
//    */
//   scene_info?: {
//     /**
//      * 【商户端设备号】商户下单时传入的商户端设备号
//      */
//     device_id: string;
//   };

//   /**
//    * 【优惠功能】代金券信息
//    */
//   promotion_detail?: Array<{
//     /**
//      * 【券ID】代金券id
//      */
//     coupon_id: string;
//     /**
//      * 【优惠名称】优惠名称
//      */
//     name: string;
//     /**
//      * 【优惠范围】GLOBAL:全场代金券,SINGLE:单品优惠
//      */
//     scope?: 'GLOBAL' | 'SINGLE';
//     /**
//      * 【优惠类型】CASH:预充值,NOCASH:免充值
//      */
//     type?: 'CASH' | 'NOCASH';
//     /**
//      * 【优惠券面额】代金券优惠的金额
//      */
//     amount: number;
//     /**
//      * 【活动ID】批次号
//      */
//     stock_id?: string;
//     /**
//      * 【微信出资】微信出资类型的优惠券面额
//      */
//     wechatpay_contribute?: number;
//     /**
//      * 【商户出资】商户出资类型的优惠券面额
//      */
//     merchant_contribute?: number;
//     /**
//      * 【其他出资】其他出资类型的优惠券面额
//      */
//     other_contribute?: number;
//     /**
//      * 【优惠币种】固定为：CNY
//      */
//     currency?: string;
//     /**
//      * 【单品列表】单品优惠时返回
//      */
//     goods_detail?: Array<{
//       /**
//        * 【商品编码】商品编码
//        */
//       goods_id: string;
//       /**
//        * 【商品数量】商品数量
//        */
//       quantity: number;
//       /**
//        * 【商品单价】商品单价，单位为分
//        */
//       unit_price: number;
//       /**
//        * 【商品优惠金额】商品优惠金额
//        */
//       discount_amount: number;
//       /**
//        * 【商品备注】商品备注
//        */
//       goods_remark?: string;
//     }>;
//   }>;
// }

// /**
//  * Native支付下单请求参数
//  */
// export interface TransactionNativeOrder {
//   /**
//    * 【公众账号ID】APPID是微信开放平台或微信公众平台为开发者的应用程序提供的唯一标识
//    */
//   appid: string;

//   /**
//    * 【商户号】是由微信支付系统生成并分配给每个商户的唯一标识符
//    */
//   mchid: string;

//   /**
//    * 【商品描述】商品信息描述，用户微信账单的商品字段中可见
//    */
//   description: string;

//   /**
//    * 【商户订单号】商户系统内部订单号
//    */
//   out_trade_no: string;

//   /**
//    * 【支付结束时间】遵循rfc3339标准格式
//    */
//   time_expire?: string;

//   /**
//    * 【商户数据包】商户自定义数据包
//    */
//   attach?: string;

//   /**
//    * 【商户回调地址】商户接收支付成功回调通知的地址
//    */
//   notify_url: string;

//   /**
//    * 【订单优惠标记】代金券标记
//    */
//   goods_tag?: string;

//   /**
//    * 【电子发票入口开放标识】
//    */
//   support_fapiao?: boolean;

//   /**
//    * 【订单金额】订单金额信息
//    */
//   amount: {
//     /**
//      * 【总金额】订单总金额，单位为分
//      */
//     total: number;
//     /**
//      * 【货币类型】固定传：CNY
//      */
//     currency?: string;
//   };

//   /**
//    * 【优惠功能】优惠功能
//    */
//   detail?: {
//     /**
//      * 【订单原价】商户侧一张小票订单可能被分多次支付的原价
//      */
//     cost_price?: number;
//     /**
//      * 【商品小票ID】商家小票ID
//      */
//     invoice_id?: string;
//     /**
//      * 【单品列表】单品列表信息
//      */
//     goods_detail?: Array<{
//       /**
//        * 【商户侧商品编码】
//        */
//       merchant_goods_id: string;
//       /**
//        * 【微信支付商品编码】
//        */
//       wechatpay_goods_id?: string;
//       /**
//        * 【商品名称】
//        */
//       goods_name?: string;
//       /**
//        * 【商品数量】
//        */
//       quantity: number;
//       /**
//        * 【商品单价】单位为分
//        */
//       unit_price: number;
//     }>;
//   };
// }