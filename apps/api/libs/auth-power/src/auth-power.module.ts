import { Module } from '@nestjs/common';
import { AuthPowerService } from './auth-power.service';

@Module({
  providers: [AuthPowerService],
  exports: [AuthPowerService],
})
export class AuthPowerModule {}
