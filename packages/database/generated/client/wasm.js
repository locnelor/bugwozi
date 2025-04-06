
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
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
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
  api_key: 'api_key',
  api_secret: 'api_secret',
  is_admin: 'is_admin'
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
  name: 'name',
  api_key: 'api_key',
  api_secret: 'api_secret'
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
  blog_posts_on_tags: 'blog_posts_on_tags',
  blog_tag: 'blog_tag',
  file_user: 'file_user',
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
  book_rating: 'book_rating'
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
