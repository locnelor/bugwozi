import { FileService } from '@app/file';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly file: FileService
  ) { }
  @Get(":uid/cover")
  getCover(
    @Param("uid") uid: string,
    @Res() res: Response
  ) {
    const path = this.file.getRenderPostsCoverPath(uid);
    return res.sendFile(path);
  }
}
