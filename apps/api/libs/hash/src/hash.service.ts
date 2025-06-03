import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { BinaryLike, createHash, randomBytes, pbkdf2Sync, randomUUID } from "crypto";
// import {
//   MODULE_OPTIONS_TOKEN,
//   HashModuleOptions,
// } from "./hash.module-defintion";

@Injectable()
export class HashService {
  constructor(
    // @Inject("MODULE_OPTIONS_TOKEN") private options: HashModuleOptions,
    private readonly config: ConfigService,
  ) {
  }
  private readonly secret = this.config.get("SECRET_KEY")

  public md5(data: BinaryLike) {
    return createHash("md5").update(data.toString()).digest("hex");
  }

  public sha1(data: BinaryLike) {
    return createHash("sha1").update(data.toString()).digest("hex");
  }

  public cryptoPassword(password: BinaryLike) {
    const salt = randomBytes(16).toString("hex");
    const iterations = 16;
    const keyLength = 64;
    const hash = pbkdf2Sync(
      `password=${password}&SECRET_KEY=${this.secret}`,
      salt,
      iterations,
      keyLength,
      "sha512",
    ).toString("hex");
    return { salt, hash };
  }

  public verifyPassword(
    password: BinaryLike,
    salt: string,
    storedHash: string,
  ) {
    const iterations = 16;
    const keyLength = 64;
    const hash = pbkdf2Sync(
      `password=${password}&SECRET_KEY=${this.secret}`,
      salt,
      iterations,
      keyLength,
      "sha512",
    ).toString("hex");
    return hash === storedHash;
  }

  public createUid() {
    return randomUUID()
  }
}
