import { HttpException } from "@nestjs/common";


export class HttpError extends HttpException {
  constructor(
    public readonly code = 403,
    message = ""
  ) {
    super(message, 403)
  }
  getCode() {
    return this.code
  }
  getMessage() {
    return this.message
  }
}


/**
 * 找不到账号
 */
export const NotFoundAccountException = new HttpError(
  1000,
  "未找到账号"
)

/**
 * 密码错误
 */
export const WrongPasswordException = new HttpError(
  1001,
  "密码错误"
)

/**
 * 验证码获取过于频繁
 */
export const CodeGetTooFrequentlyException = new HttpError(
  1002,
  "验证码获取过于频繁"
)

/**
 * 验证码生成失败
 */
export const CodeGenerateFailedException = new HttpError(
  1003,
  "验证码生成失败"
)

/**
 * 邮箱格式错误
 */
export const WrongEmailFormatException = new HttpError(
  1004,
  "邮箱格式错误"
)

/**
 * 网站初始化失败
 */
export const WebsiteInitFailedException = new HttpError(
  1005,
  "网站初始化失败"
)


/**
 * 找不到商品
 */

export const NotFoundGoodsException = new HttpError(
  1006,
  "找不到商品"
)