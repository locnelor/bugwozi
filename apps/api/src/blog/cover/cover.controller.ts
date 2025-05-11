import { FileService } from '@app/file';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cover')
export class CoverController {
  constructor(
    private readonly file: FileService
  ) { }

  @Get(":uid/posts")
  getPostsCover(
    @Param("uid") uid: string,
    @Res() res: Response
  ) {
    return res.sendFile(this.file.getRenderPostsCoverPath(uid));
  }

  @Get(":uid/user")
  getUserCover(
    @Param("uid") uid: string,
    @Res() res: Response
  ) {
    return res.sendFile(this.file.getRenderUserAvatarPath(uid));
  }

  @Get(":uid/categories")
  getCategoriesCover(
    @Param("uid") uid: string,
    @Res() res: Response
  ) {
    return res.sendFile(this.file.getRenderCategoriesCoverPath(uid))
  }

  @Get(":uid/link")
  getLinkCover(
    @Param("uid") uid: string,
    @Res() res: Response
  ) {
    return res.sendFile(this.file.getRenderLinksCoverPath(uid))
  }
}
