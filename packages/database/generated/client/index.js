
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Sys_userScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  roleId: 'roleId',
  account: 'account'
};

exports.Prisma.Sys_accountScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  provider: 'provider',
  value: 'value',
  userId: 'userId'
};

exports.Prisma.Sys_menuScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  path: 'path',
  sort: 'sort',
  powers: 'powers',
  comment: 'comment',
  parentId: 'parentId'
};

exports.Prisma.Sys_user_ban_menuScalarFieldEnum = {
  userId: 'userId',
  menuId: 'menuId'
};

exports.Prisma.Sys_menu_on_roleScalarFieldEnum = {
  roleId: 'roleId',
  menuId: 'menuId',
  power: 'power'
};

exports.Prisma.Sys_roleScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  status: 'status',
  comment: 'comment',
  sort: 'sort'
};

exports.Prisma.Sys_mediaScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  size: 'size',
  hash: 'hash',
  mimeType: 'mimeType',
  extension: 'extension',
  path: 'path',
  url: 'url',
  isWechat: 'isWechat',
  wechat_id: 'wechat_id',
  enabled: 'enabled',
  type: 'type',
  width: 'width',
  height: 'height',
  duration: 'duration'
};

exports.Prisma.Sys_user_mediaScalarFieldEnum = {
  userId: 'userId',
  mediaId: 'mediaId'
};

exports.Prisma.Sys_orderScalarFieldEnum = {
  out_trade_no: 'out_trade_no',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  url: 'url',
  transaction_id: 'transaction_id',
  amount: 'amount',
  description: 'description',
  payOpenId: 'payOpenId',
  trade_type: 'trade_type',
  state: 'state',
  bank_type: 'bank_type',
  attach: 'attach',
  userId: 'userId',
  goodsId: 'goodsId'
};

exports.Prisma.Sys_goodsScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  amount: 'amount',
  description: 'description'
};

exports.Prisma.Blog_categoriesScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  description: 'description'
};

exports.Prisma.Blog_postsScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  excerpt: 'excerpt',
  coverImage: 'coverImage',
  status: 'status',
  published: 'published',
  publishedAt: 'publishedAt',
  views: 'views',
  likes: 'likes',
  userId: 'userId',
  categoriesId: 'categoriesId',
  slug: 'slug'
};

exports.Prisma.Blog_posts_on_tagsScalarFieldEnum = {
  postsId: 'postsId',
  tagId: 'tagId'
};

exports.Prisma.Blog_tagScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  description: 'description'
};

exports.Prisma.Blog_commentsScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  content: 'content',
  status: 'status',
  userId: 'userId',
  postId: 'postId',
  parentId: 'parentId'
};

exports.Prisma.Blog_linksScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  url: 'url',
  logo: 'logo',
  description: 'description',
  sort: 'sort',
  status: 'status',
  clicks: 'clicks'
};

exports.Prisma.Blog_announcementsScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  sort: 'sort',
  status: 'status',
  startTime: 'startTime',
  endTime: 'endTime',
  important: 'important',
  author: 'author'
};

exports.Prisma.Bookkeep_recordScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  type: 'type',
  amount: 'amount',
  category: 'category',
  description: 'description',
  date: 'date',
  userId: 'userId',
  mediaId: 'mediaId'
};

exports.Prisma.Bookkeep_tagScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name'
};

exports.Prisma.Bookkeep_record_on_tagsScalarFieldEnum = {
  recordId: 'recordId',
  tagId: 'tagId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.sys_userOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  roleId: 'roleId',
  account: 'account'
};

exports.Prisma.sys_accountOrderByRelevanceFieldEnum = {
  uid: 'uid',
  value: 'value',
  userId: 'userId'
};

exports.Prisma.sys_menuOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  path: 'path',
  comment: 'comment',
  parentId: 'parentId'
};

exports.Prisma.sys_user_ban_menuOrderByRelevanceFieldEnum = {
  userId: 'userId',
  menuId: 'menuId'
};

exports.Prisma.sys_menu_on_roleOrderByRelevanceFieldEnum = {
  roleId: 'roleId',
  menuId: 'menuId'
};

exports.Prisma.sys_roleOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.sys_mediaOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  hash: 'hash',
  mimeType: 'mimeType',
  extension: 'extension',
  path: 'path',
  url: 'url',
  wechat_id: 'wechat_id',
  type: 'type'
};

exports.Prisma.sys_user_mediaOrderByRelevanceFieldEnum = {
  userId: 'userId',
  mediaId: 'mediaId'
};

exports.Prisma.sys_orderOrderByRelevanceFieldEnum = {
  out_trade_no: 'out_trade_no',
  url: 'url',
  transaction_id: 'transaction_id',
  description: 'description',
  payOpenId: 'payOpenId',
  bank_type: 'bank_type',
  attach: 'attach',
  userId: 'userId',
  goodsId: 'goodsId'
};

exports.Prisma.sys_goodsOrderByRelevanceFieldEnum = {
  uid: 'uid',
  userId: 'userId',
  description: 'description'
};

exports.Prisma.blog_categoriesOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  description: 'description'
};

exports.Prisma.blog_postsOrderByRelevanceFieldEnum = {
  uid: 'uid',
  title: 'title',
  content: 'content',
  excerpt: 'excerpt',
  coverImage: 'coverImage',
  userId: 'userId',
  categoriesId: 'categoriesId',
  slug: 'slug'
};

exports.Prisma.blog_posts_on_tagsOrderByRelevanceFieldEnum = {
  postsId: 'postsId',
  tagId: 'tagId'
};

exports.Prisma.blog_tagOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  description: 'description'
};

exports.Prisma.blog_commentsOrderByRelevanceFieldEnum = {
  uid: 'uid',
  content: 'content',
  userId: 'userId',
  postId: 'postId',
  parentId: 'parentId'
};

exports.Prisma.blog_linksOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  url: 'url',
  logo: 'logo',
  description: 'description'
};

exports.Prisma.blog_announcementsOrderByRelevanceFieldEnum = {
  uid: 'uid',
  title: 'title',
  content: 'content',
  author: 'author'
};

exports.Prisma.bookkeep_recordOrderByRelevanceFieldEnum = {
  uid: 'uid',
  category: 'category',
  description: 'description',
  userId: 'userId',
  mediaId: 'mediaId'
};

exports.Prisma.bookkeep_tagOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name'
};

exports.Prisma.bookkeep_record_on_tagsOrderByRelevanceFieldEnum = {
  recordId: 'recordId',
  tagId: 'tagId'
};
exports.sys_account_provider = exports.$Enums.sys_account_provider = {
  we_chat: 'we_chat',
  github: 'github',
  qq: 'qq',
  email: 'email',
  phone: 'phone',
  account: 'account'
};

exports.order_trade_type = exports.$Enums.order_trade_type = {
  SYSTEM: 'SYSTEM',
  NATIVE: 'NATIVE',
  JSAPI: 'JSAPI',
  APP: 'APP',
  MICROPAY: 'MICROPAY',
  MWEB: 'MWEB',
  FACEPAY: 'FACEPAY'
};

exports.order_state = exports.$Enums.order_state = {
  SUCCESS: 'SUCCESS',
  REFUND: 'REFUND',
  NOTPAY: 'NOTPAY',
  CLOSED: 'CLOSED',
  REVOKED: 'REVOKED',
  USERPAYING: 'USERPAYING',
  PAYERROR: 'PAYERROR'
};

exports.bookkeep_type = exports.$Enums.bookkeep_type = {
  income: 'income',
  expense: 'expense'
};

exports.Prisma.ModelName = {
  sys_user: 'sys_user',
  sys_account: 'sys_account',
  sys_menu: 'sys_menu',
  sys_user_ban_menu: 'sys_user_ban_menu',
  sys_menu_on_role: 'sys_menu_on_role',
  sys_role: 'sys_role',
  sys_media: 'sys_media',
  sys_user_media: 'sys_user_media',
  sys_order: 'sys_order',
  sys_goods: 'sys_goods',
  blog_categories: 'blog_categories',
  blog_posts: 'blog_posts',
  blog_posts_on_tags: 'blog_posts_on_tags',
  blog_tag: 'blog_tag',
  blog_comments: 'blog_comments',
  blog_links: 'blog_links',
  blog_announcements: 'blog_announcements',
  bookkeep_record: 'bookkeep_record',
  bookkeep_tag: 'bookkeep_tag',
  bookkeep_record_on_tags: 'bookkeep_record_on_tags'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/wangwenhui/files/code/bugwozi/packages/database/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/wangwenhui/files/code/bugwozi/packages/database/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n//********************* system\n//账号类型\nenum sys_account_provider {\n  we_chat\n  github\n  qq\n  email\n  phone\n  account\n}\n\n//系统角色\nmodel sys_user {\n  uid              String              @id @default(uuid())\n  createdAt        DateTime            @default(now())\n  updatedAt        DateTime            @default(now()) @updatedAt\n  name             String\n  roleId           String?\n  account          String              @unique\n  accounts         sys_account[]\n  role             sys_role?           @relation(fields: [roleId], references: [uid])\n  ban_menus        sys_user_ban_menu[]\n  user_media       sys_user_media[]\n  blog_posts       blog_posts[]\n  blog_comments    blog_comments[]\n  bookkeep_records bookkeep_record[]\n  orders           sys_order[]\n  goods            sys_goods[]\n}\n\n//系统账号\n/**\n * 通过provider与value快速查询。\n * 但password需要单独设置。\n * 例如：${user_id}_account_${password}\n * we_chat_${openid}\n */\nmodel sys_account {\n  uid       String               @id @default(uuid())\n  createdAt DateTime             @default(now())\n  updatedAt DateTime             @default(now()) @updatedAt\n  provider  sys_account_provider\n  value     String\n  userId    String\n  user      sys_user             @relation(fields: [userId], references: [uid])\n\n  @@unique([provider, value])\n  @@index([userId])\n}\n\n//菜单\nmodel sys_menu {\n  uid       String              @id @default(uuid())\n  createdAt DateTime            @default(now())\n  updatedAt DateTime            @default(now()) @updatedAt\n  name      String\n  path      String              @unique\n  sort      Int                 @default(10)\n  powers    Int\n  comment   String?             @db.Text\n  parentId  String?\n  parent    sys_menu?           @relation(\"SysMenuParent\", fields: [parentId], references: [uid])\n  children  sys_menu[]          @relation(\"SysMenuParent\")\n  roles     sys_menu_on_role[]\n  user_bans sys_user_ban_menu[]\n}\n\n//用户黑名单\nmodel sys_user_ban_menu {\n  user   sys_user @relation(fields: [userId], references: [uid])\n  menu   sys_menu @relation(fields: [menuId], references: [uid])\n  userId String\n  menuId String\n\n  @@id([userId, menuId])\n}\n\n//角色菜单\nmodel sys_menu_on_role {\n  roleId String\n  menuId String\n  power  Int      @default(0)\n  menu   sys_menu @relation(fields: [menuId], references: [uid])\n  role   sys_role @relation(fields: [roleId], references: [uid])\n\n  @@id([roleId, menuId])\n}\n\nmodel sys_role {\n  uid       String             @id @default(uuid())\n  createdAt DateTime           @default(now())\n  updatedAt DateTime           @default(now()) @updatedAt\n  name      String             @unique\n  status    Boolean            @default(true)\n  comment   String?            @db.LongText\n  menus     sys_menu_on_role[]\n  users     sys_user[]\n  sort      Int                @default(10)\n}\n\nmodel sys_media {\n  uid              String            @id @default(uuid())\n  createdAt        DateTime          @default(now())\n  updatedAt        DateTime          @default(now()) @updatedAt\n  name             String // 文件名\n  size             Int // 文件大小(字节)\n  hash             String            @unique // 文件hash值\n  mimeType         String // 文件MIME类型\n  extension        String // 文件扩展名\n  path             String // 文件存储路径\n  url              String? // 文件访问URL\n  isWechat         Boolean           @default(false) // 是否为微信素材\n  wechat_id        String?           @unique // 微信素材ID\n  enabled          Boolean           @default(true) // 是否可用\n  type             String            @default(\"file\") // 文件类型:file,image,video,audio等\n  width            Int? // 图片/视频宽度\n  height           Int? // 图片/视频高度\n  duration         Int? // 音视频时长(秒)\n  users            sys_user_media[]\n  bookkeep_records bookkeep_record[]\n}\n\nmodel sys_user_media {\n  user    sys_user  @relation(fields: [userId], references: [uid])\n  media   sys_media @relation(fields: [mediaId], references: [uid])\n  userId  String\n  mediaId String\n\n  @@id([userId, mediaId])\n}\n\nenum order_trade_type {\n  SYSTEM //系统生成\n  NATIVE // 二维码\n  JSAPI //公众号支付、小程序支付\n  APP //APP支付\n  MICROPAY //付款码支付\n  MWEB //H5支付\n  FACEPAY //刷脸支付\n}\n\nenum order_state {\n  SUCCESS //支付成功\n  REFUND //转入退款\n  NOTPAY //未支付\n  CLOSED //已关闭\n  REVOKED //已撤销（仅付款码支付会返回）\n  USERPAYING //用户支付中（仅付款码支付会返回）\n  PAYERROR //支付失败（仅付款码支付会返回）\n}\n\n//系统订单\nmodel sys_order {\n  out_trade_no   String           @id\n  createdAt      DateTime         @default(now())\n  updatedAt      DateTime         @default(now()) @updatedAt\n  url            String?\n  transaction_id String?          @unique //微信订单号\n  amount         Int\n  description    String\n  payOpenId      String? //支付人openid\n  trade_type     order_trade_type // 支付方式\n  state          order_state      @default(NOTPAY) //状态\n  bank_type      String? //支付方式\n  attach         String?\n\n  user   sys_user? @relation(fields: [userId], references: [uid])\n  userId String?\n\n  goods   sys_goods @relation(fields: [goodsId], references: [uid])\n  goodsId String\n}\n\n/**\n * 商品，由用户创建。\n */\nmodel sys_goods {\n  uid       String   @id @default(uuid())\n  createdAt DateTime @default(now())\n  updatedAt DateTime @default(now()) @updatedAt\n  user      sys_user @relation(fields: [userId], references: [uid])\n  userId    String\n\n  amount      Int\n  description String\n  orders      sys_order[]\n}\n\n//*********************** 博客系统\n// 博客分类\nmodel blog_categories {\n  uid         String       @id @default(uuid())\n  createdAt   DateTime     @default(now())\n  updatedAt   DateTime     @default(now()) @updatedAt\n  name        String\n  description String?\n  posts       blog_posts[]\n}\n\n// 博客文章\nmodel blog_posts {\n  uid          String               @id @default(uuid())\n  createdAt    DateTime             @default(now())\n  updatedAt    DateTime             @default(now()) @updatedAt\n  title        String\n  content      String               @db.Text\n  excerpt      String?              @db.Text // 文章摘要\n  coverImage   String? // 封面图片URL\n  status       Boolean              @default(true)\n  published    Boolean              @default(false) // 是否已发布\n  publishedAt  DateTime? // 发布时间\n  views        Int                  @default(0) // 浏览量\n  likes        Int                  @default(0) // 点赞数\n  userId       String\n  categoriesId String?\n  slug         String?              @unique // URL友好的标识\n  categories   blog_categories?     @relation(fields: [categoriesId], references: [uid])\n  user         sys_user             @relation(fields: [userId], references: [uid])\n  tags         blog_posts_on_tags[]\n  comments     blog_comments[]\n\n  @@index([slug])\n  @@index([publishedAt])\n  @@index([status, published])\n}\n\n// 博客标签\nmodel blog_posts_on_tags {\n  postsId String\n  tagId   String\n  posts   blog_posts @relation(fields: [postsId], references: [uid])\n  tag     blog_tag   @relation(fields: [tagId], references: [uid])\n\n  @@id([postsId, tagId])\n}\n\n// 博客标签\nmodel blog_tag {\n  uid         String               @id @default(uuid())\n  createdAt   DateTime             @default(now())\n  updatedAt   DateTime             @default(now()) @updatedAt\n  name        String\n  description String? // 标签描述\n  blogs       blog_posts_on_tags[]\n}\n\n// 博客评论\nmodel blog_comments {\n  uid       String          @id @default(uuid())\n  createdAt DateTime        @default(now())\n  updatedAt DateTime        @default(now()) @updatedAt\n  content   String          @db.Text\n  status    Boolean         @default(true)\n  userId    String\n  postId    String\n  parentId  String? // 父评论ID，用于回复\n  user      sys_user        @relation(fields: [userId], references: [uid])\n  post      blog_posts      @relation(fields: [postId], references: [uid])\n  parent    blog_comments?  @relation(\"CommentReplies\", fields: [parentId], references: [uid])\n  replies   blog_comments[] @relation(\"CommentReplies\")\n}\n\n// 友情链接\nmodel blog_links {\n  uid         String   @id @default(uuid())\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @default(now()) @updatedAt\n  name        String // 链接名称\n  url         String // 链接地址\n  logo        String? // logo地址\n  description String? // 链接描述\n  sort        Int      @default(0) // 排序\n  status      Boolean  @default(true) // 是否显示\n  clicks      Int      @default(0) // 点击次数\n}\n\n// 公告\nmodel blog_announcements {\n  uid       String    @id @default(uuid())\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @default(now()) @updatedAt\n  title     String // 公告标题\n  content   String    @db.Text // 公告内容\n  sort      Int       @default(0) // 排序\n  status    Boolean   @default(true) // 是否显示\n  startTime DateTime? // 开始时间\n  endTime   DateTime? // 结束时间\n  important Boolean   @default(false) // 是否重要\n  author    String? // 作者\n}\n\n//*********************** 记账系统\n// 记账类型\nenum bookkeep_type {\n  income\n  expense\n}\n\n// 记账记录\nmodel bookkeep_record {\n  uid         String                    @id @default(uuid())\n  createdAt   DateTime                  @default(now())\n  updatedAt   DateTime                  @default(now()) @updatedAt\n  type        bookkeep_type\n  amount      Float\n  category    String\n  description String?                   @db.Text\n  date        DateTime\n  userId      String\n  user        sys_user                  @relation(fields: [userId], references: [uid])\n  mediaId     String?\n  media       sys_media?                @relation(fields: [mediaId], references: [uid])\n  tags        bookkeep_record_on_tags[]\n\n  @@index([userId])\n  @@index([date])\n}\n\n// 记账标签\nmodel bookkeep_tag {\n  uid       String                    @id @default(uuid())\n  createdAt DateTime                  @default(now())\n  updatedAt DateTime                  @default(now()) @updatedAt\n  name      String\n  records   bookkeep_record_on_tags[]\n}\n\n// 记账记录标签关联\nmodel bookkeep_record_on_tags {\n  recordId String\n  tagId    String\n  record   bookkeep_record @relation(fields: [recordId], references: [uid])\n  tag      bookkeep_tag    @relation(fields: [tagId], references: [uid])\n\n  @@id([recordId, tagId])\n}\n",
  "inlineSchemaHash": "ce6c8d82bc59ef4b31d324194243e93938fcdb6179bf0280abcc207790e3bc75",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"sys_user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_account\",\"nativeType\":null,\"relationName\":\"sys_accountTosys_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_role\",\"nativeType\":null,\"relationName\":\"sys_roleTosys_user\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ban_menus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user_ban_menu\",\"nativeType\":null,\"relationName\":\"sys_userTosys_user_ban_menu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_media\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user_media\",\"nativeType\":null,\"relationName\":\"sys_userTosys_user_media\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blog_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_posts\",\"nativeType\":null,\"relationName\":\"blog_postsTosys_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blog_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_comments\",\"nativeType\":null,\"relationName\":\"blog_commentsTosys_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookkeep_records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bookkeep_record\",\"nativeType\":null,\"relationName\":\"bookkeep_recordTosys_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_order\",\"nativeType\":null,\"relationName\":\"sys_orderTosys_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goods\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_goods\",\"nativeType\":null,\"relationName\":\"sys_goodsTosys_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_account\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"provider\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_account_provider\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"sys_accountTosys_user\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"provider\",\"value\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"provider\",\"value\"]}],\"isGenerated\":false,\"documentation\":\"*\\\\n * 通过provider与value快速查询。\\\\n * 但password需要单独设置。\\\\n * 例如：${user_id}_account_${password}\\\\n * we_chat_${openid}\"},\"sys_menu\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"powers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_menu\",\"nativeType\":null,\"relationName\":\"SysMenuParent\",\"relationFromFields\":[\"parentId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"children\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_menu\",\"nativeType\":null,\"relationName\":\"SysMenuParent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_menu_on_role\",\"nativeType\":null,\"relationName\":\"sys_menuTosys_menu_on_role\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_bans\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user_ban_menu\",\"nativeType\":null,\"relationName\":\"sys_menuTosys_user_ban_menu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_user_ban_menu\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"sys_userTosys_user_ban_menu\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_menu\",\"nativeType\":null,\"relationName\":\"sys_menuTosys_user_ban_menu\",\"relationFromFields\":[\"menuId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"menuId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_menu_on_role\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"roleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"power\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_menu\",\"nativeType\":null,\"relationName\":\"sys_menuTosys_menu_on_role\",\"relationFromFields\":[\"menuId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_role\",\"nativeType\":null,\"relationName\":\"sys_menu_on_roleTosys_role\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"roleId\",\"menuId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_role\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_menu_on_role\",\"nativeType\":null,\"relationName\":\"sys_menu_on_roleTosys_role\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"sys_roleTosys_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_media\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mimeType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extension\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isWechat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wechat_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"file\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user_media\",\"nativeType\":null,\"relationName\":\"sys_mediaTosys_user_media\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookkeep_records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bookkeep_record\",\"nativeType\":null,\"relationName\":\"bookkeep_recordTosys_media\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_user_media\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"sys_userTosys_user_media\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_media\",\"nativeType\":null,\"relationName\":\"sys_mediaTosys_user_media\",\"relationFromFields\":[\"mediaId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mediaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"mediaId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_order\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"out_trade_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payOpenId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_trade_type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"order_state\",\"nativeType\":null,\"default\":\"NOTPAY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bank_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attach\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"sys_orderTosys_user\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goods\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_goods\",\"nativeType\":null,\"relationName\":\"sys_goodsTosys_order\",\"relationFromFields\":[\"goodsId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goodsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_goods\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"sys_goodsTosys_user\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_order\",\"nativeType\":null,\"relationName\":\"sys_goodsTosys_order\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"*\\\\n * 商品，由用户创建。\"},\"blog_categories\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_posts\",\"nativeType\":null,\"relationName\":\"blog_categoriesToblog_posts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"blog_posts\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"excerpt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coverImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publishedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"views\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoriesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_categories\",\"nativeType\":null,\"relationName\":\"blog_categoriesToblog_posts\",\"relationFromFields\":[\"categoriesId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"blog_postsTosys_user\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_posts_on_tags\",\"nativeType\":null,\"relationName\":\"blog_postsToblog_posts_on_tags\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_comments\",\"nativeType\":null,\"relationName\":\"blog_commentsToblog_posts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"blog_posts_on_tags\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"postsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_posts\",\"nativeType\":null,\"relationName\":\"blog_postsToblog_posts_on_tags\",\"relationFromFields\":[\"postsId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tag\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_tag\",\"nativeType\":null,\"relationName\":\"blog_posts_on_tagsToblog_tag\",\"relationFromFields\":[\"tagId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"postsId\",\"tagId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"blog_tag\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_posts_on_tags\",\"nativeType\":null,\"relationName\":\"blog_posts_on_tagsToblog_tag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"blog_comments\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"blog_commentsTosys_user\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_posts\",\"nativeType\":null,\"relationName\":\"blog_commentsToblog_posts\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_comments\",\"nativeType\":null,\"relationName\":\"CommentReplies\",\"relationFromFields\":[\"parentId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"blog_comments\",\"nativeType\":null,\"relationName\":\"CommentReplies\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"blog_links\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clicks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"blog_announcements\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"important\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bookkeep_record\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bookkeep_type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_user\",\"nativeType\":null,\"relationName\":\"bookkeep_recordTosys_user\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mediaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sys_media\",\"nativeType\":null,\"relationName\":\"bookkeep_recordTosys_media\",\"relationFromFields\":[\"mediaId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bookkeep_record_on_tags\",\"nativeType\":null,\"relationName\":\"bookkeep_recordTobookkeep_record_on_tags\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bookkeep_tag\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bookkeep_record_on_tags\",\"nativeType\":null,\"relationName\":\"bookkeep_record_on_tagsTobookkeep_tag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bookkeep_record_on_tags\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"recordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bookkeep_record\",\"nativeType\":null,\"relationName\":\"bookkeep_recordTobookkeep_record_on_tags\",\"relationFromFields\":[\"recordId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tag\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bookkeep_tag\",\"nativeType\":null,\"relationName\":\"bookkeep_record_on_tagsTobookkeep_tag\",\"relationFromFields\":[\"tagId\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"recordId\",\"tagId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"sys_account_provider\":{\"values\":[{\"name\":\"we_chat\",\"dbName\":null},{\"name\":\"github\",\"dbName\":null},{\"name\":\"qq\",\"dbName\":null},{\"name\":\"email\",\"dbName\":null},{\"name\":\"phone\",\"dbName\":null},{\"name\":\"account\",\"dbName\":null}],\"dbName\":null},\"order_trade_type\":{\"values\":[{\"name\":\"SYSTEM\",\"dbName\":null},{\"name\":\"NATIVE\",\"dbName\":null},{\"name\":\"JSAPI\",\"dbName\":null},{\"name\":\"APP\",\"dbName\":null},{\"name\":\"MICROPAY\",\"dbName\":null},{\"name\":\"MWEB\",\"dbName\":null},{\"name\":\"FACEPAY\",\"dbName\":null}],\"dbName\":null},\"order_state\":{\"values\":[{\"name\":\"SUCCESS\",\"dbName\":null},{\"name\":\"REFUND\",\"dbName\":null},{\"name\":\"NOTPAY\",\"dbName\":null},{\"name\":\"CLOSED\",\"dbName\":null},{\"name\":\"REVOKED\",\"dbName\":null},{\"name\":\"USERPAYING\",\"dbName\":null},{\"name\":\"PAYERROR\",\"dbName\":null}],\"dbName\":null},\"bookkeep_type\":{\"values\":[{\"name\":\"income\",\"dbName\":null},{\"name\":\"expense\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "generated/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")
