import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

@Injectable()
export class FileService {
  constructor() {
    console.log(FileService.Root)
  }
  public static readonly Root = cwd();
  private readonly Assets = join(FileService.Root, "assets")
  public makeAssets(path: string) {
    const s = join(this.Assets, path)
    if (!existsSync(s)) {
      mkdirSync(s, { recursive: true })
    }
    return s;
  }
  public static getSSLKey() {
    return readFileSync(join(this.Root, "keys", "ssh.key"))
  }
  public static getSSLPem() {
    return readFileSync(join(this.Root, "keys", "ssh.pem"))
  }
  public getCert() {
    return join(this.Assets, "cert")
  }

  // publicKey: fs.readFileSync('./apiclient_cert.pem'), // 公钥
  // privateKey: fs.readFileSync('./apiclient_key.pem'), // 秘钥
  public getPublicKey() {
    return readFileSync(join(this.getCert(), "apiclient_cert.pem"))
  }
  public getPrivateKey() {
    return readFileSync(join(this.getCert(), "apiclient_key.pem"))

  }
  private readonly configFile = join(this.Assets, "config.json")
  public getConfig() {
    try {
      return JSON.parse(readFileSync(this.configFile).toString());
    } catch (err: any) {
      console.log(`lib(file.service): ${err.message}`)
    }
    return null;
  }
  public setConfig(config: Object) {
    if (!existsSync(this.configFile)) {
      mkdirSync(join(this.configFile, ".."), { recursive: true })
    }
    writeFileSync(this.configFile, JSON.stringify(config))
  }
  public writeFile(path: string, data: any) {
    if (!existsSync(path)) {
      mkdirSync(join(path, ".."), { recursive: true })
    }
    writeFileSync(path, data)
  }
  public exists(path: string) {
    return existsSync(path)
  }
}
