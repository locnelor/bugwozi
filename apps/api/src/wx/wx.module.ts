import { Module } from '@nestjs/common';
import { WxService } from './wx.service';
import { WxController } from './wx.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/system/auth/auth.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule
  ],
  providers: [WxService],
  controllers: [WxController],
})
export class WxModule { }
