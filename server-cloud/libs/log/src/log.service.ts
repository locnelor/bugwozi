import { FileService } from '@app/file';
import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { appendFile } from 'fs';
import { join } from 'path';

@Injectable()
export class LogService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly file: FileService,
  ) { }
  private loggerDir = this.file.makeAssets("logs")
  private getLoggerPath() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return join(this.loggerDir, `${year.toString()}-${month.toString()}-${day.toString()}`);
  }


  public success(data: any) {
    this.write("success", data)
  }
  public error(data: any) {
    data.error = data.error?.message || data.error?.toString() || "未知错误"
    this.write("error", data);
  }

  private write(type: string, data: any) {
    appendFile(this.getLoggerPath(), JSON.stringify({
      type,
      data,
      time: new Date().toLocaleString()
    }), (error) => {
      if (!!error) {
        console.error(`lib(log.service) write: ${error.message}`)
      }
    })
  }
}
