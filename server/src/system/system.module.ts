import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { RoleModule } from './role/role.module';
import { SystemResolver } from './system.resolver';
import { UserModule } from './user/user.module';

@Module({
  imports: [MenuModule, RoleModule, UserModule],
  providers: [SystemResolver]
})
export class SystemModule {}
