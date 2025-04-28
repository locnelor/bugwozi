import { Module } from '@nestjs/common';
import { WxService } from './wx.service';

@Module({
  imports: [
  ],
  providers: [WxService],
})
export class WxModule { }
