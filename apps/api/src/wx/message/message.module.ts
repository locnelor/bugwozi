import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { WxService } from '../wx.service';

@Module({
  providers: [MessageResolver, MessageService],
  exports: [MessageService],
})
export class MessageModule {}
