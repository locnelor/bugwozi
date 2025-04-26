import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { MediaModule } from './media/media.module';
import { MessageModule } from './message/message.module';
import { WxService } from './wx.service';

@Module({
  imports: [
    MenuModule,
    MediaModule,
    MessageModule,
  ],
  providers: [WxService],
})
export class WxModule { }
