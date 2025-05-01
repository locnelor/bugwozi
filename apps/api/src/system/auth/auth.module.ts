import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@app/prisma';
import { HashModule } from '@app/hash';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [
    PrismaModule,
    HashModule,
    ConfigModule,
    UserModule,
    UtilsModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return ({
          secret: configService.get("JWT_SECRET"),
          signOptions: {
            expiresIn: 1000 * 60 * 60 * 24 * 7,
          }
        })
      },
      inject: [ConfigService]
    })
  ],
  providers: [JwtStrategy, AuthService, AuthResolver],
  exports: [JwtStrategy, AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
