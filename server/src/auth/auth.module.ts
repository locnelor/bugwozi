import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '@app/prisma';
import { HashModule } from '@app/hash';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/system/user/user.module';

@Module({
  imports: [
    PrismaModule,
    HashModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return ({
          secret: configService.get("JWT_SECRET"),
          signOptions: {
            expiresIn: configService.get("EXPIRES_IN")
          }
        })
      },
      inject: [ConfigService]
    }),
    UserModule
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [JwtStrategy, AuthService]
})
export class AuthModule { }
