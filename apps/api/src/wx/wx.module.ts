import { Module } from '@nestjs/common';
import { WxService } from './wx.service';
import { WxController } from './wx.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/system/auth/auth.module';
import { FileModule } from '@app/file';
import { WxResolver } from './wx.resolver';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    FileModule,
  ],
  providers: [WxService, WxResolver],
  controllers: [WxController],
})
export class WxModule { }
