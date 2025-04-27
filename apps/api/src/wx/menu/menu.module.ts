import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { WxService } from '../wx.service';

@Module({
  providers: [MenuResolver, MenuService],
  exports: [MenuService],
})
export class MenuModule {}
