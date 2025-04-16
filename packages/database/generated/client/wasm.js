
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  password: 'password',
  salt: 'salt',
  roleId: 'roleId'
};

exports.Prisma.Sys_accountScalarFieldEnum = {
  createAt: 'createAt',
  updateAt: 'updateAt',
  provider: 'provider',
  provider_id: 'provider_id',
  userId: 'userId'
};

exports.Prisma.Sys_menuScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  path: 'path',
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
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  status: 'status',
  comment: 'comment'
};

exports.Prisma.Blog_userScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name'
};

exports.Prisma.Blog_categoriesScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name'
};

exports.Prisma.Blog_postsScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  title: 'title',
  content: 'content',
  userId: 'userId',
  categoriesId: 'categoriesId'
};

exports.Prisma.Blog_noticeScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.Blog_posts_on_tagsScalarFieldEnum = {
  postsId: 'postsId',
  tagId: 'tagId'
};

exports.Prisma.Blog_tagScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name'
};

exports.Prisma.File_userScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  is_admin: 'is_admin'
};

exports.Prisma.File_keysScalarFieldEnum = {
  api_key: 'api_key',
  api_secret: 'api_secret',
  userId: 'userId'
};

exports.Prisma.File_configScalarFieldEnum = {
  uid: 'uid',
  userId: 'userId'
};

exports.Prisma.File_user_on_mediaScalarFieldEnum = {
  userId: 'userId',
  mediaId: 'mediaId',
  comment: 'comment'
};

exports.Prisma.File_blockScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  mediaId: 'mediaId',
  hash_key: 'hash_key',
  size: 'size'
};

exports.Prisma.File_mediaScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  type: 'type',
  name: 'name',
  hash_key: 'hash_key',
  size: 'size',
  disable: 'disable',
  comment: 'comment'
};

exports.Prisma.File_media_on_folderScalarFieldEnum = {
  mediaId: 'mediaId',
  folderId: 'folderId'
};

exports.Prisma.File_folderScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  userId: 'userId',
  parentId: 'parentId'
};

exports.Prisma.Book_userScalarFieldEnum = {
  id: 'id',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  book_roleId: 'book_roleId'
};

exports.Prisma.Book_bookScalarFieldEnum = {
  id: 'id',
  createAt: 'createAt',
  updateAt: 'updateAt',
  title: 'title',
  author: 'author',
  isbn: 'isbn',
  description: 'description',
  publication: 'publication',
  categoryId: 'categoryId',
  available: 'available'
};

exports.Prisma.Book_categoryScalarFieldEnum = {
  id: 'id',
  createAt: 'createAt',
  updateAt: 'updateAt',
  categoryName: 'categoryName'
};

exports.Prisma.Book_borrowedScalarFieldEnum = {
  id: 'id',
  borrowDate: 'borrowDate',
  returnDate: 'returnDate',
  dueDate: 'dueDate',
  userId: 'userId',
  bookId: 'bookId',
  returned: 'returned'
};

exports.Prisma.Book_borrow_historyScalarFieldEnum = {
  id: 'id',
  borrowDate: 'borrowDate',
  returnDate: 'returnDate',
  userId: 'userId',
  bookId: 'bookId',
  returned: 'returned'
};

exports.Prisma.Book_ratingScalarFieldEnum = {
  id: 'id',
  createAt: 'createAt',
  updateAt: 'updateAt',
  rating: 'rating',
  review: 'review',
  userId: 'userId',
  bookId: 'bookId'
};

exports.Prisma.Study_userScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  account: 'account',
  password: 'password',
  isAdmin: 'isAdmin'
};

exports.Prisma.Study_storeScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  local: 'local',
  address: 'address',
  status: 'status',
  remark: 'remark'
};

exports.Prisma.Study_floorScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  floorNumber: 'floorNumber',
  storeId: 'storeId'
};

exports.Prisma.Study_roomScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  name: 'name',
  floorId: 'floorId',
  capacity: 'capacity',
  status: 'status'
};

exports.Prisma.Study_seatScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  seatNumber: 'seatNumber',
  roomId: 'roomId',
  status: 'status'
};

exports.Prisma.Study_reservationScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  userId: 'userId',
  seatId: 'seatId',
  startTime: 'startTime',
  endTime: 'endTime',
  status: 'status'
};

exports.Prisma.Study_messageScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  userId: 'userId',
  content: 'content',
  reply: 'reply',
  status: 'status'
};

exports.Prisma.Study_announcementScalarFieldEnum = {
  uid: 'uid',
  createAt: 'createAt',
  updateAt: 'updateAt',
  title: 'title',
  content: 'content',
  status: 'status'
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
  password: 'password',
  salt: 'salt',
  roleId: 'roleId'
};

exports.Prisma.sys_accountOrderByRelevanceFieldEnum = {
  provider_id: 'provider_id',
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

exports.Prisma.blog_userOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name'
};

exports.Prisma.blog_categoriesOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name'
};

exports.Prisma.blog_postsOrderByRelevanceFieldEnum = {
  uid: 'uid',
  title: 'title',
  content: 'content',
  userId: 'userId',
  categoriesId: 'categoriesId'
};

exports.Prisma.blog_noticeOrderByRelevanceFieldEnum = {
  uid: 'uid'
};

exports.Prisma.blog_posts_on_tagsOrderByRelevanceFieldEnum = {
  postsId: 'postsId',
  tagId: 'tagId'
};

exports.Prisma.blog_tagOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name'
};

exports.Prisma.file_userOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name'
};

exports.Prisma.file_keysOrderByRelevanceFieldEnum = {
  api_key: 'api_key',
  api_secret: 'api_secret',
  userId: 'userId'
};

exports.Prisma.file_configOrderByRelevanceFieldEnum = {
  uid: 'uid',
  userId: 'userId'
};

exports.Prisma.file_user_on_mediaOrderByRelevanceFieldEnum = {
  userId: 'userId',
  mediaId: 'mediaId',
  comment: 'comment'
};

exports.Prisma.file_blockOrderByRelevanceFieldEnum = {
  uid: 'uid',
  mediaId: 'mediaId',
  hash_key: 'hash_key'
};

exports.Prisma.file_mediaOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  hash_key: 'hash_key',
  comment: 'comment'
};

exports.Prisma.file_media_on_folderOrderByRelevanceFieldEnum = {
  mediaId: 'mediaId',
  folderId: 'folderId'
};

exports.Prisma.file_folderOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  userId: 'userId',
  parentId: 'parentId'
};

exports.Prisma.book_userOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  book_roleId: 'book_roleId'
};

exports.Prisma.book_bookOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  author: 'author',
  isbn: 'isbn',
  description: 'description',
  categoryId: 'categoryId'
};

exports.Prisma.book_categoryOrderByRelevanceFieldEnum = {
  id: 'id',
  categoryName: 'categoryName'
};

exports.Prisma.book_borrowedOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  bookId: 'bookId'
};

exports.Prisma.book_borrow_historyOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  bookId: 'bookId'
};

exports.Prisma.book_ratingOrderByRelevanceFieldEnum = {
  id: 'id',
  review: 'review',
  userId: 'userId',
  bookId: 'bookId'
};

exports.Prisma.study_userOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  account: 'account',
  password: 'password'
};

exports.Prisma.study_storeOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  local: 'local',
  address: 'address',
  remark: 'remark'
};

exports.Prisma.study_floorOrderByRelevanceFieldEnum = {
  uid: 'uid',
  storeId: 'storeId'
};

exports.Prisma.study_roomOrderByRelevanceFieldEnum = {
  uid: 'uid',
  name: 'name',
  floorId: 'floorId'
};

exports.Prisma.study_seatOrderByRelevanceFieldEnum = {
  uid: 'uid',
  seatNumber: 'seatNumber',
  roomId: 'roomId'
};

exports.Prisma.study_reservationOrderByRelevanceFieldEnum = {
  uid: 'uid',
  userId: 'userId',
  seatId: 'seatId',
  status: 'status'
};

exports.Prisma.study_messageOrderByRelevanceFieldEnum = {
  uid: 'uid',
  userId: 'userId',
  content: 'content',
  reply: 'reply'
};

exports.Prisma.study_announcementOrderByRelevanceFieldEnum = {
  uid: 'uid',
  title: 'title',
  content: 'content'
};
exports.sys_account_provider = exports.$Enums.sys_account_provider = {
  we_chat: 'we_chat',
  github: 'github',
  qq: 'qq',
  email: 'email',
  phone: 'phone'
};

exports.file_type = exports.$Enums.file_type = {
  image: 'image',
  video: 'video',
  audio: 'audio',
  document: 'document',
  archive: 'archive',
  other: 'other'
};

exports.book_role = exports.$Enums.book_role = {
  book_user: 'book_user',
  book_admin: 'book_admin'
};

exports.Prisma.ModelName = {
  sys_user: 'sys_user',
  sys_account: 'sys_account',
  sys_menu: 'sys_menu',
  sys_user_ban_menu: 'sys_user_ban_menu',
  sys_menu_on_role: 'sys_menu_on_role',
  sys_role: 'sys_role',
  blog_user: 'blog_user',
  blog_categories: 'blog_categories',
  blog_posts: 'blog_posts',
  blog_notice: 'blog_notice',
  blog_posts_on_tags: 'blog_posts_on_tags',
  blog_tag: 'blog_tag',
  file_user: 'file_user',
  file_keys: 'file_keys',
  file_config: 'file_config',
  file_user_on_media: 'file_user_on_media',
  file_block: 'file_block',
  file_media: 'file_media',
  file_media_on_folder: 'file_media_on_folder',
  file_folder: 'file_folder',
  book_user: 'book_user',
  book_book: 'book_book',
  book_category: 'book_category',
  book_borrowed: 'book_borrowed',
  book_borrow_history: 'book_borrow_history',
  book_rating: 'book_rating',
  study_user: 'study_user',
  study_store: 'study_store',
  study_floor: 'study_floor',
  study_room: 'study_room',
  study_seat: 'study_seat',
  study_reservation: 'study_reservation',
  study_message: 'study_message',
  study_announcement: 'study_announcement'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
