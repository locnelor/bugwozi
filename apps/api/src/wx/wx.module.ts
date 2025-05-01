import { Module } from '@nestjs/common';
import { WxService } from './wx.service';
import { WxController } from './wx.controller';

@Module({
  imports: [
  ],
  providers: [WxService],
  controllers: [WxController],
})
export class WxModule { }
