import { Inject, Injectable } from '@nestjs/common';
import { REQUEST_MODULE_OPTIONS_TOKEN } from './request.module-definition';
import { RequestModuleOptions } from './request.module.interface';
import { post, get } from 'superagent';
import { resolve } from 'url';


@Injectable()
export class RequestService {
  constructor(
    @Inject(REQUEST_MODULE_OPTIONS_TOKEN) private options: RequestModuleOptions,
  ) { }
  private getUrl(url: string) {
    if (!!this.options.baseUrl) return resolve(this.options.baseUrl, url);
    return url;
  }
  public get(url: string) {
    return get(this.getUrl(url));
  }
  public post(url: string) {
    console.log(this.getUrl(url))
    return post(this.getUrl(url));
  }
}
