import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() { }
  validate(
    payload: any
  ) {


    // return user
  }

  // getToken(user: ) {
  //   const payload = {
  //     crypto: this.hash.md5(`${user.password}`),
  //     sub: user.id
  //   };
  //   return {
  //     access_token: this.jwt.sign(payload, {
  //       expiresIn: this.config.getOrThrow('JWT_EXPIRES'),
  //       secret: this.config.get("JWT_SECRET")
  //     }),
  //   };
  // }
}
