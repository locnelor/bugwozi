import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { RoleModule } from './role/role.module';
import { SystemResolver } from './system.resolver';
import { SystemService } from './system.service';
import { PrismaModule } from '@app/prisma';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UserModule, MenuModule, RoleModule, AuthModule, PrismaModule],
  providers: [SystemResolver, SystemService]
})
export class SystemModule { }
