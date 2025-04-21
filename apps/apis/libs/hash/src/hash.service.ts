import { Inject, Injectable } from "@nestjs/common";
import { BinaryLike, createHash, randomBytes, pbkdf2Sync } from "crypto";
import {
  MODULE_OPTIONS_TOKEN,
  HashModuleOptions,
} from "./hash.module-defintion";

@Injectable()
export class HashService {
  constructor(
    @Inject("MODULE_OPTIONS_TOKEN") private options: HashModuleOptions,
  ) {}

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
      `password=${password}&SECRET_KEY=${this.options.SECRET_KEY}`,
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
      `password=${password}&SECRET_KEY=${this.options.SECRET_KEY}`,
      salt,
      iterations,
      keyLength,
      "sha512",
    ).toString("hex");
    return hash === storedHash;
  }

  public createUid(args = [] as string[]) {
    return this.md5(
      this.sha1(`${Math.random()}_${Date.now()}_${args.join("_")}`),
    );
  }
}
