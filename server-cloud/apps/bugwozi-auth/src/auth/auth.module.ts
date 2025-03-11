import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@app/prisma';
import { HashModule } from '@app/hash';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    HashModule,
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
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy]
})
export class AuthModule { }
