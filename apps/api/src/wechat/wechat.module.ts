import { Module } from '@nestjs/common';
import { WechatService } from './wechat.service';
import { WechatResolver } from './wechat.resolver';
import { ConfigModule } from './config/config.module';
import { MenuModule } from './menu/menu.module';
import { MediaModule } from './media/media.module';
import { MessageModule } from './message/message.module';

@Module({
  providers: [WechatResolver, WechatService],
  imports: [ConfigModule, MenuModule, MediaModule, MessageModule],
})
export class WechatModule {}
