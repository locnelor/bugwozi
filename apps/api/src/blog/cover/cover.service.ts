import { FileService } from '@app/file';
import { UtilsService } from '@app/utils';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoverService {
  constructor(
    private readonly file: FileService,
    private readonly util: UtilsService
  ) { }
  public saveCover(path: string, base64: string) {
    this.file.writeFile(path, this.util.base64ToBuffer(base64));
  }
  public savePostCover(uid: string, base64: string) {
    this.saveCover(this.file.getPostsCoverPath(uid), base64);
  }
  public savePostDefaultCover(base64: string) {
    this.saveCover(this.file.defaultPostsCoverPath, base64);
  }


  public saveCategoriesCover(uid: string, base64: string) {
    this.saveCover(this.file.getCategoriesCoverPath(uid), base64);
  }
  public saveCategoriesDefaultCover(base64: string) {
    this.saveCover(this.file.defaultCategoriesCoverPath, base64);
  }


  public saveLinkCover(uid: string, base64: string) {
    this.saveCover(this.file.getLinksCoverPath(uid), base64);
  }
  public saveLinkDefaultCover(base64: string) {
    this.saveCover(this.file.defaultLinksCoverPath, base64);
  }


  public saveUserAvatar(uid: string, base64: string) {
    this.saveCover(this.file.getUserAvatarPath(uid), base64);
  }
  public saveUserDefaultAvatar(base64: string) {
    this.saveCover(this.file.defaultUserAvatarPath, base64);
  }
}
