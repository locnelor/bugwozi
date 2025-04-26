
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model sys_user
 * 
 */
export type sys_user = $Result.DefaultSelection<Prisma.$sys_userPayload>
/**
 * Model sys_account
 * *
 *  * 通过provider与value快速查询。
 *  * 但password需要单独设置。
 *  * 例如：${user_id}_account_${password}
 *  * we_chat_${openid}
 */
export type sys_account = $Result.DefaultSelection<Prisma.$sys_accountPayload>
/**
 * Model sys_menu
 * 
 */
export type sys_menu = $Result.DefaultSelection<Prisma.$sys_menuPayload>
/**
 * Model sys_user_ban_menu
 * 
 */
export type sys_user_ban_menu = $Result.DefaultSelection<Prisma.$sys_user_ban_menuPayload>
/**
 * Model sys_menu_on_role
 * 
 */
export type sys_menu_on_role = $Result.DefaultSelection<Prisma.$sys_menu_on_rolePayload>
/**
 * Model sys_role
 * 
 */
export type sys_role = $Result.DefaultSelection<Prisma.$sys_rolePayload>
/**
 * Model sys_media
 * 
 */
export type sys_media = $Result.DefaultSelection<Prisma.$sys_mediaPayload>
/**
 * Model sys_user_media
 * 
 */
export type sys_user_media = $Result.DefaultSelection<Prisma.$sys_user_mediaPayload>
/**
 * Model blog_categories
 * 
 */
export type blog_categories = $Result.DefaultSelection<Prisma.$blog_categoriesPayload>
/**
 * Model blog_posts
 * 
 */
export type blog_posts = $Result.DefaultSelection<Prisma.$blog_postsPayload>
/**
 * Model blog_posts_on_tags
 * 
 */
export type blog_posts_on_tags = $Result.DefaultSelection<Prisma.$blog_posts_on_tagsPayload>
/**
 * Model blog_tag
 * 
 */
export type blog_tag = $Result.DefaultSelection<Prisma.$blog_tagPayload>
/**
 * Model blog_comments
 * 
 */
export type blog_comments = $Result.DefaultSelection<Prisma.$blog_commentsPayload>
/**
 * Model blog_links
 * 
 */
export type blog_links = $Result.DefaultSelection<Prisma.$blog_linksPayload>
/**
 * Model blog_announcements
 * 
 */
export type blog_announcements = $Result.DefaultSelection<Prisma.$blog_announcementsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const sys_account_provider: {
  we_chat: 'we_chat',
  github: 'github',
  qq: 'qq',
  email: 'email',
  phone: 'phone',
  account: 'account'
};

export type sys_account_provider = (typeof sys_account_provider)[keyof typeof sys_account_provider]

}

export type sys_account_provider = $Enums.sys_account_provider

export const sys_account_provider: typeof $Enums.sys_account_provider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sys_users
 * const sys_users = await prisma.sys_user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sys_users
   * const sys_users = await prisma.sys_user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sys_user`: Exposes CRUD operations for the **sys_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_users
    * const sys_users = await prisma.sys_user.findMany()
    * ```
    */
  get sys_user(): Prisma.sys_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_account`: Exposes CRUD operations for the **sys_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_accounts
    * const sys_accounts = await prisma.sys_account.findMany()
    * ```
    */
  get sys_account(): Prisma.sys_accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_menu`: Exposes CRUD operations for the **sys_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_menus
    * const sys_menus = await prisma.sys_menu.findMany()
    * ```
    */
  get sys_menu(): Prisma.sys_menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_user_ban_menu`: Exposes CRUD operations for the **sys_user_ban_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_user_ban_menus
    * const sys_user_ban_menus = await prisma.sys_user_ban_menu.findMany()
    * ```
    */
  get sys_user_ban_menu(): Prisma.sys_user_ban_menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_menu_on_role`: Exposes CRUD operations for the **sys_menu_on_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_menu_on_roles
    * const sys_menu_on_roles = await prisma.sys_menu_on_role.findMany()
    * ```
    */
  get sys_menu_on_role(): Prisma.sys_menu_on_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_role`: Exposes CRUD operations for the **sys_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_roles
    * const sys_roles = await prisma.sys_role.findMany()
    * ```
    */
  get sys_role(): Prisma.sys_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_media`: Exposes CRUD operations for the **sys_media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_medias
    * const sys_medias = await prisma.sys_media.findMany()
    * ```
    */
  get sys_media(): Prisma.sys_mediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_user_media`: Exposes CRUD operations for the **sys_user_media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_user_medias
    * const sys_user_medias = await prisma.sys_user_media.findMany()
    * ```
    */
  get sys_user_media(): Prisma.sys_user_mediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog_categories`: Exposes CRUD operations for the **blog_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blog_categories
    * const blog_categories = await prisma.blog_categories.findMany()
    * ```
    */
  get blog_categories(): Prisma.blog_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog_posts`: Exposes CRUD operations for the **blog_posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blog_posts
    * const blog_posts = await prisma.blog_posts.findMany()
    * ```
    */
  get blog_posts(): Prisma.blog_postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog_posts_on_tags`: Exposes CRUD operations for the **blog_posts_on_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blog_posts_on_tags
    * const blog_posts_on_tags = await prisma.blog_posts_on_tags.findMany()
    * ```
    */
  get blog_posts_on_tags(): Prisma.blog_posts_on_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog_tag`: Exposes CRUD operations for the **blog_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blog_tags
    * const blog_tags = await prisma.blog_tag.findMany()
    * ```
    */
  get blog_tag(): Prisma.blog_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog_comments`: Exposes CRUD operations for the **blog_comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blog_comments
    * const blog_comments = await prisma.blog_comments.findMany()
    * ```
    */
  get blog_comments(): Prisma.blog_commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog_links`: Exposes CRUD operations for the **blog_links** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blog_links
    * const blog_links = await prisma.blog_links.findMany()
    * ```
    */
  get blog_links(): Prisma.blog_linksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog_announcements`: Exposes CRUD operations for the **blog_announcements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blog_announcements
    * const blog_announcements = await prisma.blog_announcements.findMany()
    * ```
    */
  get blog_announcements(): Prisma.blog_announcementsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    sys_user: 'sys_user',
    sys_account: 'sys_account',
    sys_menu: 'sys_menu',
    sys_user_ban_menu: 'sys_user_ban_menu',
    sys_menu_on_role: 'sys_menu_on_role',
    sys_role: 'sys_role',
    sys_media: 'sys_media',
    sys_user_media: 'sys_user_media',
    blog_categories: 'blog_categories',
    blog_posts: 'blog_posts',
    blog_posts_on_tags: 'blog_posts_on_tags',
    blog_tag: 'blog_tag',
    blog_comments: 'blog_comments',
    blog_links: 'blog_links',
    blog_announcements: 'blog_announcements'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sys_user" | "sys_account" | "sys_menu" | "sys_user_ban_menu" | "sys_menu_on_role" | "sys_role" | "sys_media" | "sys_user_media" | "blog_categories" | "blog_posts" | "blog_posts_on_tags" | "blog_tag" | "blog_comments" | "blog_links" | "blog_announcements"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      sys_user: {
        payload: Prisma.$sys_userPayload<ExtArgs>
        fields: Prisma.sys_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          findFirst: {
            args: Prisma.sys_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          findMany: {
            args: Prisma.sys_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>[]
          }
          create: {
            args: Prisma.sys_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          createMany: {
            args: Prisma.sys_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          update: {
            args: Prisma.sys_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          deleteMany: {
            args: Prisma.sys_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          aggregate: {
            args: Prisma.Sys_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_user>
          }
          groupBy: {
            args: Prisma.sys_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_userCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_userCountAggregateOutputType> | number
          }
        }
      }
      sys_account: {
        payload: Prisma.$sys_accountPayload<ExtArgs>
        fields: Prisma.sys_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload>
          }
          findFirst: {
            args: Prisma.sys_accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload>
          }
          findMany: {
            args: Prisma.sys_accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload>[]
          }
          create: {
            args: Prisma.sys_accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload>
          }
          createMany: {
            args: Prisma.sys_accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload>
          }
          update: {
            args: Prisma.sys_accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload>
          }
          deleteMany: {
            args: Prisma.sys_accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_accountPayload>
          }
          aggregate: {
            args: Prisma.Sys_accountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_account>
          }
          groupBy: {
            args: Prisma.sys_accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_accountCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_accountCountAggregateOutputType> | number
          }
        }
      }
      sys_menu: {
        payload: Prisma.$sys_menuPayload<ExtArgs>
        fields: Prisma.sys_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          findFirst: {
            args: Prisma.sys_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          findMany: {
            args: Prisma.sys_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>[]
          }
          create: {
            args: Prisma.sys_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          createMany: {
            args: Prisma.sys_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          update: {
            args: Prisma.sys_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          deleteMany: {
            args: Prisma.sys_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          aggregate: {
            args: Prisma.Sys_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_menu>
          }
          groupBy: {
            args: Prisma.sys_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_menuCountAggregateOutputType> | number
          }
        }
      }
      sys_user_ban_menu: {
        payload: Prisma.$sys_user_ban_menuPayload<ExtArgs>
        fields: Prisma.sys_user_ban_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_user_ban_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_user_ban_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload>
          }
          findFirst: {
            args: Prisma.sys_user_ban_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_user_ban_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload>
          }
          findMany: {
            args: Prisma.sys_user_ban_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload>[]
          }
          create: {
            args: Prisma.sys_user_ban_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload>
          }
          createMany: {
            args: Prisma.sys_user_ban_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_user_ban_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload>
          }
          update: {
            args: Prisma.sys_user_ban_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload>
          }
          deleteMany: {
            args: Prisma.sys_user_ban_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_user_ban_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_user_ban_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_ban_menuPayload>
          }
          aggregate: {
            args: Prisma.Sys_user_ban_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_user_ban_menu>
          }
          groupBy: {
            args: Prisma.sys_user_ban_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_user_ban_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_user_ban_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_user_ban_menuCountAggregateOutputType> | number
          }
        }
      }
      sys_menu_on_role: {
        payload: Prisma.$sys_menu_on_rolePayload<ExtArgs>
        fields: Prisma.sys_menu_on_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_menu_on_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_menu_on_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload>
          }
          findFirst: {
            args: Prisma.sys_menu_on_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_menu_on_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload>
          }
          findMany: {
            args: Prisma.sys_menu_on_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload>[]
          }
          create: {
            args: Prisma.sys_menu_on_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload>
          }
          createMany: {
            args: Prisma.sys_menu_on_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_menu_on_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload>
          }
          update: {
            args: Prisma.sys_menu_on_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload>
          }
          deleteMany: {
            args: Prisma.sys_menu_on_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_menu_on_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_menu_on_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menu_on_rolePayload>
          }
          aggregate: {
            args: Prisma.Sys_menu_on_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_menu_on_role>
          }
          groupBy: {
            args: Prisma.sys_menu_on_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_menu_on_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_menu_on_roleCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_menu_on_roleCountAggregateOutputType> | number
          }
        }
      }
      sys_role: {
        payload: Prisma.$sys_rolePayload<ExtArgs>
        fields: Prisma.sys_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          findFirst: {
            args: Prisma.sys_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          findMany: {
            args: Prisma.sys_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>[]
          }
          create: {
            args: Prisma.sys_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          createMany: {
            args: Prisma.sys_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          update: {
            args: Prisma.sys_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          deleteMany: {
            args: Prisma.sys_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          aggregate: {
            args: Prisma.Sys_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_role>
          }
          groupBy: {
            args: Prisma.sys_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_roleCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_roleCountAggregateOutputType> | number
          }
        }
      }
      sys_media: {
        payload: Prisma.$sys_mediaPayload<ExtArgs>
        fields: Prisma.sys_mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload>
          }
          findFirst: {
            args: Prisma.sys_mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload>
          }
          findMany: {
            args: Prisma.sys_mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload>[]
          }
          create: {
            args: Prisma.sys_mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload>
          }
          createMany: {
            args: Prisma.sys_mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload>
          }
          update: {
            args: Prisma.sys_mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload>
          }
          deleteMany: {
            args: Prisma.sys_mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_mediaPayload>
          }
          aggregate: {
            args: Prisma.Sys_mediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_media>
          }
          groupBy: {
            args: Prisma.sys_mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_mediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_mediaCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_mediaCountAggregateOutputType> | number
          }
        }
      }
      sys_user_media: {
        payload: Prisma.$sys_user_mediaPayload<ExtArgs>
        fields: Prisma.sys_user_mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_user_mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_user_mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload>
          }
          findFirst: {
            args: Prisma.sys_user_mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_user_mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload>
          }
          findMany: {
            args: Prisma.sys_user_mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload>[]
          }
          create: {
            args: Prisma.sys_user_mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload>
          }
          createMany: {
            args: Prisma.sys_user_mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_user_mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload>
          }
          update: {
            args: Prisma.sys_user_mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload>
          }
          deleteMany: {
            args: Prisma.sys_user_mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_user_mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_user_mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_user_mediaPayload>
          }
          aggregate: {
            args: Prisma.Sys_user_mediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_user_media>
          }
          groupBy: {
            args: Prisma.sys_user_mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_user_mediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_user_mediaCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_user_mediaCountAggregateOutputType> | number
          }
        }
      }
      blog_categories: {
        payload: Prisma.$blog_categoriesPayload<ExtArgs>
        fields: Prisma.blog_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blog_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blog_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload>
          }
          findFirst: {
            args: Prisma.blog_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blog_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload>
          }
          findMany: {
            args: Prisma.blog_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload>[]
          }
          create: {
            args: Prisma.blog_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload>
          }
          createMany: {
            args: Prisma.blog_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blog_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload>
          }
          update: {
            args: Prisma.blog_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.blog_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blog_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blog_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Blog_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog_categories>
          }
          groupBy: {
            args: Prisma.blog_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Blog_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.blog_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Blog_categoriesCountAggregateOutputType> | number
          }
        }
      }
      blog_posts: {
        payload: Prisma.$blog_postsPayload<ExtArgs>
        fields: Prisma.blog_postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blog_postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blog_postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload>
          }
          findFirst: {
            args: Prisma.blog_postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blog_postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload>
          }
          findMany: {
            args: Prisma.blog_postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload>[]
          }
          create: {
            args: Prisma.blog_postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload>
          }
          createMany: {
            args: Prisma.blog_postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blog_postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload>
          }
          update: {
            args: Prisma.blog_postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload>
          }
          deleteMany: {
            args: Prisma.blog_postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blog_postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blog_postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_postsPayload>
          }
          aggregate: {
            args: Prisma.Blog_postsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog_posts>
          }
          groupBy: {
            args: Prisma.blog_postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Blog_postsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blog_postsCountArgs<ExtArgs>
            result: $Utils.Optional<Blog_postsCountAggregateOutputType> | number
          }
        }
      }
      blog_posts_on_tags: {
        payload: Prisma.$blog_posts_on_tagsPayload<ExtArgs>
        fields: Prisma.blog_posts_on_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blog_posts_on_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blog_posts_on_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload>
          }
          findFirst: {
            args: Prisma.blog_posts_on_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blog_posts_on_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload>
          }
          findMany: {
            args: Prisma.blog_posts_on_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload>[]
          }
          create: {
            args: Prisma.blog_posts_on_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload>
          }
          createMany: {
            args: Prisma.blog_posts_on_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blog_posts_on_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload>
          }
          update: {
            args: Prisma.blog_posts_on_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload>
          }
          deleteMany: {
            args: Prisma.blog_posts_on_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blog_posts_on_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blog_posts_on_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_posts_on_tagsPayload>
          }
          aggregate: {
            args: Prisma.Blog_posts_on_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog_posts_on_tags>
          }
          groupBy: {
            args: Prisma.blog_posts_on_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Blog_posts_on_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blog_posts_on_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Blog_posts_on_tagsCountAggregateOutputType> | number
          }
        }
      }
      blog_tag: {
        payload: Prisma.$blog_tagPayload<ExtArgs>
        fields: Prisma.blog_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blog_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blog_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload>
          }
          findFirst: {
            args: Prisma.blog_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blog_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload>
          }
          findMany: {
            args: Prisma.blog_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload>[]
          }
          create: {
            args: Prisma.blog_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload>
          }
          createMany: {
            args: Prisma.blog_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blog_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload>
          }
          update: {
            args: Prisma.blog_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload>
          }
          deleteMany: {
            args: Prisma.blog_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blog_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blog_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_tagPayload>
          }
          aggregate: {
            args: Prisma.Blog_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog_tag>
          }
          groupBy: {
            args: Prisma.blog_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Blog_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.blog_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Blog_tagCountAggregateOutputType> | number
          }
        }
      }
      blog_comments: {
        payload: Prisma.$blog_commentsPayload<ExtArgs>
        fields: Prisma.blog_commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blog_commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blog_commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload>
          }
          findFirst: {
            args: Prisma.blog_commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blog_commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload>
          }
          findMany: {
            args: Prisma.blog_commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload>[]
          }
          create: {
            args: Prisma.blog_commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload>
          }
          createMany: {
            args: Prisma.blog_commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blog_commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload>
          }
          update: {
            args: Prisma.blog_commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload>
          }
          deleteMany: {
            args: Prisma.blog_commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blog_commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blog_commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_commentsPayload>
          }
          aggregate: {
            args: Prisma.Blog_commentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog_comments>
          }
          groupBy: {
            args: Prisma.blog_commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Blog_commentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blog_commentsCountArgs<ExtArgs>
            result: $Utils.Optional<Blog_commentsCountAggregateOutputType> | number
          }
        }
      }
      blog_links: {
        payload: Prisma.$blog_linksPayload<ExtArgs>
        fields: Prisma.blog_linksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blog_linksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blog_linksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload>
          }
          findFirst: {
            args: Prisma.blog_linksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blog_linksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload>
          }
          findMany: {
            args: Prisma.blog_linksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload>[]
          }
          create: {
            args: Prisma.blog_linksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload>
          }
          createMany: {
            args: Prisma.blog_linksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blog_linksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload>
          }
          update: {
            args: Prisma.blog_linksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload>
          }
          deleteMany: {
            args: Prisma.blog_linksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blog_linksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blog_linksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_linksPayload>
          }
          aggregate: {
            args: Prisma.Blog_linksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog_links>
          }
          groupBy: {
            args: Prisma.blog_linksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Blog_linksGroupByOutputType>[]
          }
          count: {
            args: Prisma.blog_linksCountArgs<ExtArgs>
            result: $Utils.Optional<Blog_linksCountAggregateOutputType> | number
          }
        }
      }
      blog_announcements: {
        payload: Prisma.$blog_announcementsPayload<ExtArgs>
        fields: Prisma.blog_announcementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blog_announcementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blog_announcementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload>
          }
          findFirst: {
            args: Prisma.blog_announcementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blog_announcementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload>
          }
          findMany: {
            args: Prisma.blog_announcementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload>[]
          }
          create: {
            args: Prisma.blog_announcementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload>
          }
          createMany: {
            args: Prisma.blog_announcementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blog_announcementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload>
          }
          update: {
            args: Prisma.blog_announcementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload>
          }
          deleteMany: {
            args: Prisma.blog_announcementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blog_announcementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blog_announcementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blog_announcementsPayload>
          }
          aggregate: {
            args: Prisma.Blog_announcementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog_announcements>
          }
          groupBy: {
            args: Prisma.blog_announcementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Blog_announcementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blog_announcementsCountArgs<ExtArgs>
            result: $Utils.Optional<Blog_announcementsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sys_user?: sys_userOmit
    sys_account?: sys_accountOmit
    sys_menu?: sys_menuOmit
    sys_user_ban_menu?: sys_user_ban_menuOmit
    sys_menu_on_role?: sys_menu_on_roleOmit
    sys_role?: sys_roleOmit
    sys_media?: sys_mediaOmit
    sys_user_media?: sys_user_mediaOmit
    blog_categories?: blog_categoriesOmit
    blog_posts?: blog_postsOmit
    blog_posts_on_tags?: blog_posts_on_tagsOmit
    blog_tag?: blog_tagOmit
    blog_comments?: blog_commentsOmit
    blog_links?: blog_linksOmit
    blog_announcements?: blog_announcementsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Sys_userCountOutputType
   */

  export type Sys_userCountOutputType = {
    accounts: number
    ban_menus: number
    user_media: number
    blog_posts: number
    blog_comments: number
  }

  export type Sys_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Sys_userCountOutputTypeCountAccountsArgs
    ban_menus?: boolean | Sys_userCountOutputTypeCountBan_menusArgs
    user_media?: boolean | Sys_userCountOutputTypeCountUser_mediaArgs
    blog_posts?: boolean | Sys_userCountOutputTypeCountBlog_postsArgs
    blog_comments?: boolean | Sys_userCountOutputTypeCountBlog_commentsArgs
  }

  // Custom InputTypes
  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_userCountOutputType
     */
    select?: Sys_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_accountWhereInput
  }

  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeCountBan_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_user_ban_menuWhereInput
  }

  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeCountUser_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_user_mediaWhereInput
  }

  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeCountBlog_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_postsWhereInput
  }

  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeCountBlog_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_commentsWhereInput
  }


  /**
   * Count Type Sys_menuCountOutputType
   */

  export type Sys_menuCountOutputType = {
    children: number
    roles: number
    user_bans: number
  }

  export type Sys_menuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Sys_menuCountOutputTypeCountChildrenArgs
    roles?: boolean | Sys_menuCountOutputTypeCountRolesArgs
    user_bans?: boolean | Sys_menuCountOutputTypeCountUser_bansArgs
  }

  // Custom InputTypes
  /**
   * Sys_menuCountOutputType without action
   */
  export type Sys_menuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_menuCountOutputType
     */
    select?: Sys_menuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_menuCountOutputType without action
   */
  export type Sys_menuCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_menuWhereInput
  }

  /**
   * Sys_menuCountOutputType without action
   */
  export type Sys_menuCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_menu_on_roleWhereInput
  }

  /**
   * Sys_menuCountOutputType without action
   */
  export type Sys_menuCountOutputTypeCountUser_bansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_user_ban_menuWhereInput
  }


  /**
   * Count Type Sys_roleCountOutputType
   */

  export type Sys_roleCountOutputType = {
    menus: number
    users: number
  }

  export type Sys_roleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | Sys_roleCountOutputTypeCountMenusArgs
    users?: boolean | Sys_roleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * Sys_roleCountOutputType without action
   */
  export type Sys_roleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_roleCountOutputType
     */
    select?: Sys_roleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_roleCountOutputType without action
   */
  export type Sys_roleCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_menu_on_roleWhereInput
  }

  /**
   * Sys_roleCountOutputType without action
   */
  export type Sys_roleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_userWhereInput
  }


  /**
   * Count Type Sys_mediaCountOutputType
   */

  export type Sys_mediaCountOutputType = {
    users: number
  }

  export type Sys_mediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Sys_mediaCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * Sys_mediaCountOutputType without action
   */
  export type Sys_mediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_mediaCountOutputType
     */
    select?: Sys_mediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_mediaCountOutputType without action
   */
  export type Sys_mediaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_user_mediaWhereInput
  }


  /**
   * Count Type Blog_categoriesCountOutputType
   */

  export type Blog_categoriesCountOutputType = {
    posts: number
  }

  export type Blog_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Blog_categoriesCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * Blog_categoriesCountOutputType without action
   */
  export type Blog_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_categoriesCountOutputType
     */
    select?: Blog_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Blog_categoriesCountOutputType without action
   */
  export type Blog_categoriesCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_postsWhereInput
  }


  /**
   * Count Type Blog_postsCountOutputType
   */

  export type Blog_postsCountOutputType = {
    tags: number
    comments: number
  }

  export type Blog_postsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | Blog_postsCountOutputTypeCountTagsArgs
    comments?: boolean | Blog_postsCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * Blog_postsCountOutputType without action
   */
  export type Blog_postsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_postsCountOutputType
     */
    select?: Blog_postsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Blog_postsCountOutputType without action
   */
  export type Blog_postsCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_posts_on_tagsWhereInput
  }

  /**
   * Blog_postsCountOutputType without action
   */
  export type Blog_postsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_commentsWhereInput
  }


  /**
   * Count Type Blog_tagCountOutputType
   */

  export type Blog_tagCountOutputType = {
    blogs: number
  }

  export type Blog_tagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | Blog_tagCountOutputTypeCountBlogsArgs
  }

  // Custom InputTypes
  /**
   * Blog_tagCountOutputType without action
   */
  export type Blog_tagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_tagCountOutputType
     */
    select?: Blog_tagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Blog_tagCountOutputType without action
   */
  export type Blog_tagCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_posts_on_tagsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model sys_user
   */

  export type AggregateSys_user = {
    _count: Sys_userCountAggregateOutputType | null
    _min: Sys_userMinAggregateOutputType | null
    _max: Sys_userMaxAggregateOutputType | null
  }

  export type Sys_userMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    roleId: string | null
    account: string | null
  }

  export type Sys_userMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    roleId: string | null
    account: string | null
  }

  export type Sys_userCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    name: number
    roleId: number
    account: number
    _all: number
  }


  export type Sys_userMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    roleId?: true
    account?: true
  }

  export type Sys_userMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    roleId?: true
    account?: true
  }

  export type Sys_userCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    roleId?: true
    account?: true
    _all?: true
  }

  export type Sys_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_user to aggregate.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_users
    **/
    _count?: true | Sys_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_userMaxAggregateInputType
  }

  export type GetSys_userAggregateType<T extends Sys_userAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_user[P]>
      : GetScalarType<T[P], AggregateSys_user[P]>
  }




  export type sys_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_userWhereInput
    orderBy?: sys_userOrderByWithAggregationInput | sys_userOrderByWithAggregationInput[]
    by: Sys_userScalarFieldEnum[] | Sys_userScalarFieldEnum
    having?: sys_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_userCountAggregateInputType | true
    _min?: Sys_userMinAggregateInputType
    _max?: Sys_userMaxAggregateInputType
  }

  export type Sys_userGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    name: string
    roleId: string | null
    account: string
    _count: Sys_userCountAggregateOutputType | null
    _min: Sys_userMinAggregateOutputType | null
    _max: Sys_userMaxAggregateOutputType | null
  }

  type GetSys_userGroupByPayload<T extends sys_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_userGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_userGroupByOutputType[P]>
        }
      >
    >


  export type sys_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    roleId?: boolean
    account?: boolean
    accounts?: boolean | sys_user$accountsArgs<ExtArgs>
    role?: boolean | sys_user$roleArgs<ExtArgs>
    ban_menus?: boolean | sys_user$ban_menusArgs<ExtArgs>
    user_media?: boolean | sys_user$user_mediaArgs<ExtArgs>
    blog_posts?: boolean | sys_user$blog_postsArgs<ExtArgs>
    blog_comments?: boolean | sys_user$blog_commentsArgs<ExtArgs>
    _count?: boolean | Sys_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_user"]>



  export type sys_userSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    roleId?: boolean
    account?: boolean
  }

  export type sys_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "name" | "roleId" | "account", ExtArgs["result"]["sys_user"]>
  export type sys_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | sys_user$accountsArgs<ExtArgs>
    role?: boolean | sys_user$roleArgs<ExtArgs>
    ban_menus?: boolean | sys_user$ban_menusArgs<ExtArgs>
    user_media?: boolean | sys_user$user_mediaArgs<ExtArgs>
    blog_posts?: boolean | sys_user$blog_postsArgs<ExtArgs>
    blog_comments?: boolean | sys_user$blog_commentsArgs<ExtArgs>
    _count?: boolean | Sys_userCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_user"
    objects: {
      accounts: Prisma.$sys_accountPayload<ExtArgs>[]
      role: Prisma.$sys_rolePayload<ExtArgs> | null
      ban_menus: Prisma.$sys_user_ban_menuPayload<ExtArgs>[]
      user_media: Prisma.$sys_user_mediaPayload<ExtArgs>[]
      blog_posts: Prisma.$blog_postsPayload<ExtArgs>[]
      blog_comments: Prisma.$blog_commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      name: string
      roleId: string | null
      account: string
    }, ExtArgs["result"]["sys_user"]>
    composites: {}
  }

  type sys_userGetPayload<S extends boolean | null | undefined | sys_userDefaultArgs> = $Result.GetResult<Prisma.$sys_userPayload, S>

  type sys_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_userCountAggregateInputType | true
    }

  export interface sys_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_user'], meta: { name: 'sys_user' } }
    /**
     * Find zero or one Sys_user that matches the filter.
     * @param {sys_userFindUniqueArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_userFindUniqueArgs>(args: SelectSubset<T, sys_userFindUniqueArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_userFindUniqueOrThrowArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_userFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindFirstArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_userFindFirstArgs>(args?: SelectSubset<T, sys_userFindFirstArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindFirstOrThrowArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_userFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_users
     * const sys_users = await prisma.sys_user.findMany()
     * 
     * // Get first 10 Sys_users
     * const sys_users = await prisma.sys_user.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const sys_userWithUidOnly = await prisma.sys_user.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends sys_userFindManyArgs>(args?: SelectSubset<T, sys_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_user.
     * @param {sys_userCreateArgs} args - Arguments to create a Sys_user.
     * @example
     * // Create one Sys_user
     * const Sys_user = await prisma.sys_user.create({
     *   data: {
     *     // ... data to create a Sys_user
     *   }
     * })
     * 
     */
    create<T extends sys_userCreateArgs>(args: SelectSubset<T, sys_userCreateArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_users.
     * @param {sys_userCreateManyArgs} args - Arguments to create many Sys_users.
     * @example
     * // Create many Sys_users
     * const sys_user = await prisma.sys_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_userCreateManyArgs>(args?: SelectSubset<T, sys_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_user.
     * @param {sys_userDeleteArgs} args - Arguments to delete one Sys_user.
     * @example
     * // Delete one Sys_user
     * const Sys_user = await prisma.sys_user.delete({
     *   where: {
     *     // ... filter to delete one Sys_user
     *   }
     * })
     * 
     */
    delete<T extends sys_userDeleteArgs>(args: SelectSubset<T, sys_userDeleteArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_user.
     * @param {sys_userUpdateArgs} args - Arguments to update one Sys_user.
     * @example
     * // Update one Sys_user
     * const sys_user = await prisma.sys_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_userUpdateArgs>(args: SelectSubset<T, sys_userUpdateArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_users.
     * @param {sys_userDeleteManyArgs} args - Arguments to filter Sys_users to delete.
     * @example
     * // Delete a few Sys_users
     * const { count } = await prisma.sys_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_userDeleteManyArgs>(args?: SelectSubset<T, sys_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_users
     * const sys_user = await prisma.sys_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_userUpdateManyArgs>(args: SelectSubset<T, sys_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_user.
     * @param {sys_userUpsertArgs} args - Arguments to update or create a Sys_user.
     * @example
     * // Update or create a Sys_user
     * const sys_user = await prisma.sys_user.upsert({
     *   create: {
     *     // ... data to create a Sys_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_user we want to update
     *   }
     * })
     */
    upsert<T extends sys_userUpsertArgs>(args: SelectSubset<T, sys_userUpsertArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userCountArgs} args - Arguments to filter Sys_users to count.
     * @example
     * // Count the number of Sys_users
     * const count = await prisma.sys_user.count({
     *   where: {
     *     // ... the filter for the Sys_users we want to count
     *   }
     * })
    **/
    count<T extends sys_userCountArgs>(
      args?: Subset<T, sys_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_userAggregateArgs>(args: Subset<T, Sys_userAggregateArgs>): Prisma.PrismaPromise<GetSys_userAggregateType<T>>

    /**
     * Group by Sys_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_userGroupByArgs['orderBy'] }
        : { orderBy?: sys_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_user model
   */
  readonly fields: sys_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends sys_user$accountsArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role<T extends sys_user$roleArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$roleArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ban_menus<T extends sys_user$ban_menusArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$ban_menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_media<T extends sys_user$user_mediaArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$user_mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blog_posts<T extends sys_user$blog_postsArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$blog_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blog_comments<T extends sys_user$blog_commentsArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$blog_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_user model
   */
  interface sys_userFieldRefs {
    readonly uid: FieldRef<"sys_user", 'String'>
    readonly createdAt: FieldRef<"sys_user", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_user", 'DateTime'>
    readonly name: FieldRef<"sys_user", 'String'>
    readonly roleId: FieldRef<"sys_user", 'String'>
    readonly account: FieldRef<"sys_user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_user findUnique
   */
  export type sys_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user findUniqueOrThrow
   */
  export type sys_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user findFirst
   */
  export type sys_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_users.
     */
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user findFirstOrThrow
   */
  export type sys_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_users.
     */
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user findMany
   */
  export type sys_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_users to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user create
   */
  export type sys_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_user.
     */
    data: XOR<sys_userCreateInput, sys_userUncheckedCreateInput>
  }

  /**
   * sys_user createMany
   */
  export type sys_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_users.
     */
    data: sys_userCreateManyInput | sys_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_user update
   */
  export type sys_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_user.
     */
    data: XOR<sys_userUpdateInput, sys_userUncheckedUpdateInput>
    /**
     * Choose, which sys_user to update.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user updateMany
   */
  export type sys_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_users.
     */
    data: XOR<sys_userUpdateManyMutationInput, sys_userUncheckedUpdateManyInput>
    /**
     * Filter which sys_users to update
     */
    where?: sys_userWhereInput
    /**
     * Limit how many sys_users to update.
     */
    limit?: number
  }

  /**
   * sys_user upsert
   */
  export type sys_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_user to update in case it exists.
     */
    where: sys_userWhereUniqueInput
    /**
     * In case the sys_user found by the `where` argument doesn't exist, create a new sys_user with this data.
     */
    create: XOR<sys_userCreateInput, sys_userUncheckedCreateInput>
    /**
     * In case the sys_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_userUpdateInput, sys_userUncheckedUpdateInput>
  }

  /**
   * sys_user delete
   */
  export type sys_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter which sys_user to delete.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user deleteMany
   */
  export type sys_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_users to delete
     */
    where?: sys_userWhereInput
    /**
     * Limit how many sys_users to delete.
     */
    limit?: number
  }

  /**
   * sys_user.accounts
   */
  export type sys_user$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    where?: sys_accountWhereInput
    orderBy?: sys_accountOrderByWithRelationInput | sys_accountOrderByWithRelationInput[]
    cursor?: sys_accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_accountScalarFieldEnum | Sys_accountScalarFieldEnum[]
  }

  /**
   * sys_user.role
   */
  export type sys_user$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    where?: sys_roleWhereInput
  }

  /**
   * sys_user.ban_menus
   */
  export type sys_user$ban_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    where?: sys_user_ban_menuWhereInput
    orderBy?: sys_user_ban_menuOrderByWithRelationInput | sys_user_ban_menuOrderByWithRelationInput[]
    cursor?: sys_user_ban_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_user_ban_menuScalarFieldEnum | Sys_user_ban_menuScalarFieldEnum[]
  }

  /**
   * sys_user.user_media
   */
  export type sys_user$user_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    where?: sys_user_mediaWhereInput
    orderBy?: sys_user_mediaOrderByWithRelationInput | sys_user_mediaOrderByWithRelationInput[]
    cursor?: sys_user_mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_user_mediaScalarFieldEnum | Sys_user_mediaScalarFieldEnum[]
  }

  /**
   * sys_user.blog_posts
   */
  export type sys_user$blog_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    where?: blog_postsWhereInput
    orderBy?: blog_postsOrderByWithRelationInput | blog_postsOrderByWithRelationInput[]
    cursor?: blog_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Blog_postsScalarFieldEnum | Blog_postsScalarFieldEnum[]
  }

  /**
   * sys_user.blog_comments
   */
  export type sys_user$blog_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    where?: blog_commentsWhereInput
    orderBy?: blog_commentsOrderByWithRelationInput | blog_commentsOrderByWithRelationInput[]
    cursor?: blog_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Blog_commentsScalarFieldEnum | Blog_commentsScalarFieldEnum[]
  }

  /**
   * sys_user without action
   */
  export type sys_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
  }


  /**
   * Model sys_account
   */

  export type AggregateSys_account = {
    _count: Sys_accountCountAggregateOutputType | null
    _min: Sys_accountMinAggregateOutputType | null
    _max: Sys_accountMaxAggregateOutputType | null
  }

  export type Sys_accountMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: $Enums.sys_account_provider | null
    value: string | null
    userId: string | null
  }

  export type Sys_accountMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: $Enums.sys_account_provider | null
    value: string | null
    userId: string | null
  }

  export type Sys_accountCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    provider: number
    value: number
    userId: number
    _all: number
  }


  export type Sys_accountMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    value?: true
    userId?: true
  }

  export type Sys_accountMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    value?: true
    userId?: true
  }

  export type Sys_accountCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    value?: true
    userId?: true
    _all?: true
  }

  export type Sys_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_account to aggregate.
     */
    where?: sys_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_accounts to fetch.
     */
    orderBy?: sys_accountOrderByWithRelationInput | sys_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_accounts
    **/
    _count?: true | Sys_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_accountMaxAggregateInputType
  }

  export type GetSys_accountAggregateType<T extends Sys_accountAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_account[P]>
      : GetScalarType<T[P], AggregateSys_account[P]>
  }




  export type sys_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_accountWhereInput
    orderBy?: sys_accountOrderByWithAggregationInput | sys_accountOrderByWithAggregationInput[]
    by: Sys_accountScalarFieldEnum[] | Sys_accountScalarFieldEnum
    having?: sys_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_accountCountAggregateInputType | true
    _min?: Sys_accountMinAggregateInputType
    _max?: Sys_accountMaxAggregateInputType
  }

  export type Sys_accountGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    provider: $Enums.sys_account_provider
    value: string
    userId: string
    _count: Sys_accountCountAggregateOutputType | null
    _min: Sys_accountMinAggregateOutputType | null
    _max: Sys_accountMaxAggregateOutputType | null
  }

  type GetSys_accountGroupByPayload<T extends sys_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_accountGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_accountGroupByOutputType[P]>
        }
      >
    >


  export type sys_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | sys_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_account"]>



  export type sys_accountSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    value?: boolean
    userId?: boolean
  }

  export type sys_accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "provider" | "value" | "userId", ExtArgs["result"]["sys_account"]>
  export type sys_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | sys_userDefaultArgs<ExtArgs>
  }

  export type $sys_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_account"
    objects: {
      user: Prisma.$sys_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      provider: $Enums.sys_account_provider
      value: string
      userId: string
    }, ExtArgs["result"]["sys_account"]>
    composites: {}
  }

  type sys_accountGetPayload<S extends boolean | null | undefined | sys_accountDefaultArgs> = $Result.GetResult<Prisma.$sys_accountPayload, S>

  type sys_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_accountCountAggregateInputType | true
    }

  export interface sys_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_account'], meta: { name: 'sys_account' } }
    /**
     * Find zero or one Sys_account that matches the filter.
     * @param {sys_accountFindUniqueArgs} args - Arguments to find a Sys_account
     * @example
     * // Get one Sys_account
     * const sys_account = await prisma.sys_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_accountFindUniqueArgs>(args: SelectSubset<T, sys_accountFindUniqueArgs<ExtArgs>>): Prisma__sys_accountClient<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_accountFindUniqueOrThrowArgs} args - Arguments to find a Sys_account
     * @example
     * // Get one Sys_account
     * const sys_account = await prisma.sys_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_accountFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_accountClient<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_accountFindFirstArgs} args - Arguments to find a Sys_account
     * @example
     * // Get one Sys_account
     * const sys_account = await prisma.sys_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_accountFindFirstArgs>(args?: SelectSubset<T, sys_accountFindFirstArgs<ExtArgs>>): Prisma__sys_accountClient<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_accountFindFirstOrThrowArgs} args - Arguments to find a Sys_account
     * @example
     * // Get one Sys_account
     * const sys_account = await prisma.sys_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_accountFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_accountClient<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_accounts
     * const sys_accounts = await prisma.sys_account.findMany()
     * 
     * // Get first 10 Sys_accounts
     * const sys_accounts = await prisma.sys_account.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const sys_accountWithUidOnly = await prisma.sys_account.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends sys_accountFindManyArgs>(args?: SelectSubset<T, sys_accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_account.
     * @param {sys_accountCreateArgs} args - Arguments to create a Sys_account.
     * @example
     * // Create one Sys_account
     * const Sys_account = await prisma.sys_account.create({
     *   data: {
     *     // ... data to create a Sys_account
     *   }
     * })
     * 
     */
    create<T extends sys_accountCreateArgs>(args: SelectSubset<T, sys_accountCreateArgs<ExtArgs>>): Prisma__sys_accountClient<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_accounts.
     * @param {sys_accountCreateManyArgs} args - Arguments to create many Sys_accounts.
     * @example
     * // Create many Sys_accounts
     * const sys_account = await prisma.sys_account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_accountCreateManyArgs>(args?: SelectSubset<T, sys_accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_account.
     * @param {sys_accountDeleteArgs} args - Arguments to delete one Sys_account.
     * @example
     * // Delete one Sys_account
     * const Sys_account = await prisma.sys_account.delete({
     *   where: {
     *     // ... filter to delete one Sys_account
     *   }
     * })
     * 
     */
    delete<T extends sys_accountDeleteArgs>(args: SelectSubset<T, sys_accountDeleteArgs<ExtArgs>>): Prisma__sys_accountClient<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_account.
     * @param {sys_accountUpdateArgs} args - Arguments to update one Sys_account.
     * @example
     * // Update one Sys_account
     * const sys_account = await prisma.sys_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_accountUpdateArgs>(args: SelectSubset<T, sys_accountUpdateArgs<ExtArgs>>): Prisma__sys_accountClient<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_accounts.
     * @param {sys_accountDeleteManyArgs} args - Arguments to filter Sys_accounts to delete.
     * @example
     * // Delete a few Sys_accounts
     * const { count } = await prisma.sys_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_accountDeleteManyArgs>(args?: SelectSubset<T, sys_accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_accounts
     * const sys_account = await prisma.sys_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_accountUpdateManyArgs>(args: SelectSubset<T, sys_accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_account.
     * @param {sys_accountUpsertArgs} args - Arguments to update or create a Sys_account.
     * @example
     * // Update or create a Sys_account
     * const sys_account = await prisma.sys_account.upsert({
     *   create: {
     *     // ... data to create a Sys_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_account we want to update
     *   }
     * })
     */
    upsert<T extends sys_accountUpsertArgs>(args: SelectSubset<T, sys_accountUpsertArgs<ExtArgs>>): Prisma__sys_accountClient<$Result.GetResult<Prisma.$sys_accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_accountCountArgs} args - Arguments to filter Sys_accounts to count.
     * @example
     * // Count the number of Sys_accounts
     * const count = await prisma.sys_account.count({
     *   where: {
     *     // ... the filter for the Sys_accounts we want to count
     *   }
     * })
    **/
    count<T extends sys_accountCountArgs>(
      args?: Subset<T, sys_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_accountAggregateArgs>(args: Subset<T, Sys_accountAggregateArgs>): Prisma.PrismaPromise<GetSys_accountAggregateType<T>>

    /**
     * Group by Sys_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_accountGroupByArgs['orderBy'] }
        : { orderBy?: sys_accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_account model
   */
  readonly fields: sys_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends sys_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_userDefaultArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_account model
   */
  interface sys_accountFieldRefs {
    readonly uid: FieldRef<"sys_account", 'String'>
    readonly createdAt: FieldRef<"sys_account", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_account", 'DateTime'>
    readonly provider: FieldRef<"sys_account", 'sys_account_provider'>
    readonly value: FieldRef<"sys_account", 'String'>
    readonly userId: FieldRef<"sys_account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_account findUnique
   */
  export type sys_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * Filter, which sys_account to fetch.
     */
    where: sys_accountWhereUniqueInput
  }

  /**
   * sys_account findUniqueOrThrow
   */
  export type sys_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * Filter, which sys_account to fetch.
     */
    where: sys_accountWhereUniqueInput
  }

  /**
   * sys_account findFirst
   */
  export type sys_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * Filter, which sys_account to fetch.
     */
    where?: sys_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_accounts to fetch.
     */
    orderBy?: sys_accountOrderByWithRelationInput | sys_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_accounts.
     */
    cursor?: sys_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_accounts.
     */
    distinct?: Sys_accountScalarFieldEnum | Sys_accountScalarFieldEnum[]
  }

  /**
   * sys_account findFirstOrThrow
   */
  export type sys_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * Filter, which sys_account to fetch.
     */
    where?: sys_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_accounts to fetch.
     */
    orderBy?: sys_accountOrderByWithRelationInput | sys_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_accounts.
     */
    cursor?: sys_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_accounts.
     */
    distinct?: Sys_accountScalarFieldEnum | Sys_accountScalarFieldEnum[]
  }

  /**
   * sys_account findMany
   */
  export type sys_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * Filter, which sys_accounts to fetch.
     */
    where?: sys_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_accounts to fetch.
     */
    orderBy?: sys_accountOrderByWithRelationInput | sys_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_accounts.
     */
    cursor?: sys_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_accounts.
     */
    skip?: number
    distinct?: Sys_accountScalarFieldEnum | Sys_accountScalarFieldEnum[]
  }

  /**
   * sys_account create
   */
  export type sys_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_account.
     */
    data: XOR<sys_accountCreateInput, sys_accountUncheckedCreateInput>
  }

  /**
   * sys_account createMany
   */
  export type sys_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_accounts.
     */
    data: sys_accountCreateManyInput | sys_accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_account update
   */
  export type sys_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_account.
     */
    data: XOR<sys_accountUpdateInput, sys_accountUncheckedUpdateInput>
    /**
     * Choose, which sys_account to update.
     */
    where: sys_accountWhereUniqueInput
  }

  /**
   * sys_account updateMany
   */
  export type sys_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_accounts.
     */
    data: XOR<sys_accountUpdateManyMutationInput, sys_accountUncheckedUpdateManyInput>
    /**
     * Filter which sys_accounts to update
     */
    where?: sys_accountWhereInput
    /**
     * Limit how many sys_accounts to update.
     */
    limit?: number
  }

  /**
   * sys_account upsert
   */
  export type sys_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_account to update in case it exists.
     */
    where: sys_accountWhereUniqueInput
    /**
     * In case the sys_account found by the `where` argument doesn't exist, create a new sys_account with this data.
     */
    create: XOR<sys_accountCreateInput, sys_accountUncheckedCreateInput>
    /**
     * In case the sys_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_accountUpdateInput, sys_accountUncheckedUpdateInput>
  }

  /**
   * sys_account delete
   */
  export type sys_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
    /**
     * Filter which sys_account to delete.
     */
    where: sys_accountWhereUniqueInput
  }

  /**
   * sys_account deleteMany
   */
  export type sys_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_accounts to delete
     */
    where?: sys_accountWhereInput
    /**
     * Limit how many sys_accounts to delete.
     */
    limit?: number
  }

  /**
   * sys_account without action
   */
  export type sys_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_account
     */
    select?: sys_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_account
     */
    omit?: sys_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_accountInclude<ExtArgs> | null
  }


  /**
   * Model sys_menu
   */

  export type AggregateSys_menu = {
    _count: Sys_menuCountAggregateOutputType | null
    _avg: Sys_menuAvgAggregateOutputType | null
    _sum: Sys_menuSumAggregateOutputType | null
    _min: Sys_menuMinAggregateOutputType | null
    _max: Sys_menuMaxAggregateOutputType | null
  }

  export type Sys_menuAvgAggregateOutputType = {
    sort: number | null
    powers: number | null
  }

  export type Sys_menuSumAggregateOutputType = {
    sort: number | null
    powers: number | null
  }

  export type Sys_menuMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    path: string | null
    sort: number | null
    powers: number | null
    comment: string | null
    parentId: string | null
  }

  export type Sys_menuMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    path: string | null
    sort: number | null
    powers: number | null
    comment: string | null
    parentId: string | null
  }

  export type Sys_menuCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    name: number
    path: number
    sort: number
    powers: number
    comment: number
    parentId: number
    _all: number
  }


  export type Sys_menuAvgAggregateInputType = {
    sort?: true
    powers?: true
  }

  export type Sys_menuSumAggregateInputType = {
    sort?: true
    powers?: true
  }

  export type Sys_menuMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    path?: true
    sort?: true
    powers?: true
    comment?: true
    parentId?: true
  }

  export type Sys_menuMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    path?: true
    sort?: true
    powers?: true
    comment?: true
    parentId?: true
  }

  export type Sys_menuCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    path?: true
    sort?: true
    powers?: true
    comment?: true
    parentId?: true
    _all?: true
  }

  export type Sys_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_menu to aggregate.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_menus
    **/
    _count?: true | Sys_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_menuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_menuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_menuMaxAggregateInputType
  }

  export type GetSys_menuAggregateType<T extends Sys_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_menu[P]>
      : GetScalarType<T[P], AggregateSys_menu[P]>
  }




  export type sys_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_menuWhereInput
    orderBy?: sys_menuOrderByWithAggregationInput | sys_menuOrderByWithAggregationInput[]
    by: Sys_menuScalarFieldEnum[] | Sys_menuScalarFieldEnum
    having?: sys_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_menuCountAggregateInputType | true
    _avg?: Sys_menuAvgAggregateInputType
    _sum?: Sys_menuSumAggregateInputType
    _min?: Sys_menuMinAggregateInputType
    _max?: Sys_menuMaxAggregateInputType
  }

  export type Sys_menuGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    name: string
    path: string
    sort: number
    powers: number
    comment: string | null
    parentId: string | null
    _count: Sys_menuCountAggregateOutputType | null
    _avg: Sys_menuAvgAggregateOutputType | null
    _sum: Sys_menuSumAggregateOutputType | null
    _min: Sys_menuMinAggregateOutputType | null
    _max: Sys_menuMaxAggregateOutputType | null
  }

  type GetSys_menuGroupByPayload<T extends sys_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_menuGroupByOutputType[P]>
        }
      >
    >


  export type sys_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    path?: boolean
    sort?: boolean
    powers?: boolean
    comment?: boolean
    parentId?: boolean
    parent?: boolean | sys_menu$parentArgs<ExtArgs>
    children?: boolean | sys_menu$childrenArgs<ExtArgs>
    roles?: boolean | sys_menu$rolesArgs<ExtArgs>
    user_bans?: boolean | sys_menu$user_bansArgs<ExtArgs>
    _count?: boolean | Sys_menuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_menu"]>



  export type sys_menuSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    path?: boolean
    sort?: boolean
    powers?: boolean
    comment?: boolean
    parentId?: boolean
  }

  export type sys_menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "name" | "path" | "sort" | "powers" | "comment" | "parentId", ExtArgs["result"]["sys_menu"]>
  export type sys_menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | sys_menu$parentArgs<ExtArgs>
    children?: boolean | sys_menu$childrenArgs<ExtArgs>
    roles?: boolean | sys_menu$rolesArgs<ExtArgs>
    user_bans?: boolean | sys_menu$user_bansArgs<ExtArgs>
    _count?: boolean | Sys_menuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_menu"
    objects: {
      parent: Prisma.$sys_menuPayload<ExtArgs> | null
      children: Prisma.$sys_menuPayload<ExtArgs>[]
      roles: Prisma.$sys_menu_on_rolePayload<ExtArgs>[]
      user_bans: Prisma.$sys_user_ban_menuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      name: string
      path: string
      sort: number
      powers: number
      comment: string | null
      parentId: string | null
    }, ExtArgs["result"]["sys_menu"]>
    composites: {}
  }

  type sys_menuGetPayload<S extends boolean | null | undefined | sys_menuDefaultArgs> = $Result.GetResult<Prisma.$sys_menuPayload, S>

  type sys_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_menuCountAggregateInputType | true
    }

  export interface sys_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_menu'], meta: { name: 'sys_menu' } }
    /**
     * Find zero or one Sys_menu that matches the filter.
     * @param {sys_menuFindUniqueArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_menuFindUniqueArgs>(args: SelectSubset<T, sys_menuFindUniqueArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_menuFindUniqueOrThrowArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindFirstArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_menuFindFirstArgs>(args?: SelectSubset<T, sys_menuFindFirstArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindFirstOrThrowArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_menus
     * const sys_menus = await prisma.sys_menu.findMany()
     * 
     * // Get first 10 Sys_menus
     * const sys_menus = await prisma.sys_menu.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const sys_menuWithUidOnly = await prisma.sys_menu.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends sys_menuFindManyArgs>(args?: SelectSubset<T, sys_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_menu.
     * @param {sys_menuCreateArgs} args - Arguments to create a Sys_menu.
     * @example
     * // Create one Sys_menu
     * const Sys_menu = await prisma.sys_menu.create({
     *   data: {
     *     // ... data to create a Sys_menu
     *   }
     * })
     * 
     */
    create<T extends sys_menuCreateArgs>(args: SelectSubset<T, sys_menuCreateArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_menus.
     * @param {sys_menuCreateManyArgs} args - Arguments to create many Sys_menus.
     * @example
     * // Create many Sys_menus
     * const sys_menu = await prisma.sys_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_menuCreateManyArgs>(args?: SelectSubset<T, sys_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_menu.
     * @param {sys_menuDeleteArgs} args - Arguments to delete one Sys_menu.
     * @example
     * // Delete one Sys_menu
     * const Sys_menu = await prisma.sys_menu.delete({
     *   where: {
     *     // ... filter to delete one Sys_menu
     *   }
     * })
     * 
     */
    delete<T extends sys_menuDeleteArgs>(args: SelectSubset<T, sys_menuDeleteArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_menu.
     * @param {sys_menuUpdateArgs} args - Arguments to update one Sys_menu.
     * @example
     * // Update one Sys_menu
     * const sys_menu = await prisma.sys_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_menuUpdateArgs>(args: SelectSubset<T, sys_menuUpdateArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_menus.
     * @param {sys_menuDeleteManyArgs} args - Arguments to filter Sys_menus to delete.
     * @example
     * // Delete a few Sys_menus
     * const { count } = await prisma.sys_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_menuDeleteManyArgs>(args?: SelectSubset<T, sys_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_menus
     * const sys_menu = await prisma.sys_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_menuUpdateManyArgs>(args: SelectSubset<T, sys_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_menu.
     * @param {sys_menuUpsertArgs} args - Arguments to update or create a Sys_menu.
     * @example
     * // Update or create a Sys_menu
     * const sys_menu = await prisma.sys_menu.upsert({
     *   create: {
     *     // ... data to create a Sys_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_menu we want to update
     *   }
     * })
     */
    upsert<T extends sys_menuUpsertArgs>(args: SelectSubset<T, sys_menuUpsertArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuCountArgs} args - Arguments to filter Sys_menus to count.
     * @example
     * // Count the number of Sys_menus
     * const count = await prisma.sys_menu.count({
     *   where: {
     *     // ... the filter for the Sys_menus we want to count
     *   }
     * })
    **/
    count<T extends sys_menuCountArgs>(
      args?: Subset<T, sys_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_menuAggregateArgs>(args: Subset<T, Sys_menuAggregateArgs>): Prisma.PrismaPromise<GetSys_menuAggregateType<T>>

    /**
     * Group by Sys_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_menuGroupByArgs['orderBy'] }
        : { orderBy?: sys_menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_menu model
   */
  readonly fields: sys_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends sys_menu$parentArgs<ExtArgs> = {}>(args?: Subset<T, sys_menu$parentArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends sys_menu$childrenArgs<ExtArgs> = {}>(args?: Subset<T, sys_menu$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends sys_menu$rolesArgs<ExtArgs> = {}>(args?: Subset<T, sys_menu$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_bans<T extends sys_menu$user_bansArgs<ExtArgs> = {}>(args?: Subset<T, sys_menu$user_bansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_menu model
   */
  interface sys_menuFieldRefs {
    readonly uid: FieldRef<"sys_menu", 'String'>
    readonly createdAt: FieldRef<"sys_menu", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_menu", 'DateTime'>
    readonly name: FieldRef<"sys_menu", 'String'>
    readonly path: FieldRef<"sys_menu", 'String'>
    readonly sort: FieldRef<"sys_menu", 'Int'>
    readonly powers: FieldRef<"sys_menu", 'Int'>
    readonly comment: FieldRef<"sys_menu", 'String'>
    readonly parentId: FieldRef<"sys_menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_menu findUnique
   */
  export type sys_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu findUniqueOrThrow
   */
  export type sys_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu findFirst
   */
  export type sys_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_menus.
     */
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu findFirstOrThrow
   */
  export type sys_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_menus.
     */
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu findMany
   */
  export type sys_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menus to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu create
   */
  export type sys_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_menu.
     */
    data: XOR<sys_menuCreateInput, sys_menuUncheckedCreateInput>
  }

  /**
   * sys_menu createMany
   */
  export type sys_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_menus.
     */
    data: sys_menuCreateManyInput | sys_menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_menu update
   */
  export type sys_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_menu.
     */
    data: XOR<sys_menuUpdateInput, sys_menuUncheckedUpdateInput>
    /**
     * Choose, which sys_menu to update.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu updateMany
   */
  export type sys_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_menus.
     */
    data: XOR<sys_menuUpdateManyMutationInput, sys_menuUncheckedUpdateManyInput>
    /**
     * Filter which sys_menus to update
     */
    where?: sys_menuWhereInput
    /**
     * Limit how many sys_menus to update.
     */
    limit?: number
  }

  /**
   * sys_menu upsert
   */
  export type sys_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_menu to update in case it exists.
     */
    where: sys_menuWhereUniqueInput
    /**
     * In case the sys_menu found by the `where` argument doesn't exist, create a new sys_menu with this data.
     */
    create: XOR<sys_menuCreateInput, sys_menuUncheckedCreateInput>
    /**
     * In case the sys_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_menuUpdateInput, sys_menuUncheckedUpdateInput>
  }

  /**
   * sys_menu delete
   */
  export type sys_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter which sys_menu to delete.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu deleteMany
   */
  export type sys_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_menus to delete
     */
    where?: sys_menuWhereInput
    /**
     * Limit how many sys_menus to delete.
     */
    limit?: number
  }

  /**
   * sys_menu.parent
   */
  export type sys_menu$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    where?: sys_menuWhereInput
  }

  /**
   * sys_menu.children
   */
  export type sys_menu$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    where?: sys_menuWhereInput
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    cursor?: sys_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu.roles
   */
  export type sys_menu$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    where?: sys_menu_on_roleWhereInput
    orderBy?: sys_menu_on_roleOrderByWithRelationInput | sys_menu_on_roleOrderByWithRelationInput[]
    cursor?: sys_menu_on_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_menu_on_roleScalarFieldEnum | Sys_menu_on_roleScalarFieldEnum[]
  }

  /**
   * sys_menu.user_bans
   */
  export type sys_menu$user_bansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    where?: sys_user_ban_menuWhereInput
    orderBy?: sys_user_ban_menuOrderByWithRelationInput | sys_user_ban_menuOrderByWithRelationInput[]
    cursor?: sys_user_ban_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_user_ban_menuScalarFieldEnum | Sys_user_ban_menuScalarFieldEnum[]
  }

  /**
   * sys_menu without action
   */
  export type sys_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
  }


  /**
   * Model sys_user_ban_menu
   */

  export type AggregateSys_user_ban_menu = {
    _count: Sys_user_ban_menuCountAggregateOutputType | null
    _min: Sys_user_ban_menuMinAggregateOutputType | null
    _max: Sys_user_ban_menuMaxAggregateOutputType | null
  }

  export type Sys_user_ban_menuMinAggregateOutputType = {
    userId: string | null
    menuId: string | null
  }

  export type Sys_user_ban_menuMaxAggregateOutputType = {
    userId: string | null
    menuId: string | null
  }

  export type Sys_user_ban_menuCountAggregateOutputType = {
    userId: number
    menuId: number
    _all: number
  }


  export type Sys_user_ban_menuMinAggregateInputType = {
    userId?: true
    menuId?: true
  }

  export type Sys_user_ban_menuMaxAggregateInputType = {
    userId?: true
    menuId?: true
  }

  export type Sys_user_ban_menuCountAggregateInputType = {
    userId?: true
    menuId?: true
    _all?: true
  }

  export type Sys_user_ban_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_user_ban_menu to aggregate.
     */
    where?: sys_user_ban_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_ban_menus to fetch.
     */
    orderBy?: sys_user_ban_menuOrderByWithRelationInput | sys_user_ban_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_user_ban_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_ban_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_ban_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_user_ban_menus
    **/
    _count?: true | Sys_user_ban_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_user_ban_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_user_ban_menuMaxAggregateInputType
  }

  export type GetSys_user_ban_menuAggregateType<T extends Sys_user_ban_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_user_ban_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_user_ban_menu[P]>
      : GetScalarType<T[P], AggregateSys_user_ban_menu[P]>
  }




  export type sys_user_ban_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_user_ban_menuWhereInput
    orderBy?: sys_user_ban_menuOrderByWithAggregationInput | sys_user_ban_menuOrderByWithAggregationInput[]
    by: Sys_user_ban_menuScalarFieldEnum[] | Sys_user_ban_menuScalarFieldEnum
    having?: sys_user_ban_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_user_ban_menuCountAggregateInputType | true
    _min?: Sys_user_ban_menuMinAggregateInputType
    _max?: Sys_user_ban_menuMaxAggregateInputType
  }

  export type Sys_user_ban_menuGroupByOutputType = {
    userId: string
    menuId: string
    _count: Sys_user_ban_menuCountAggregateOutputType | null
    _min: Sys_user_ban_menuMinAggregateOutputType | null
    _max: Sys_user_ban_menuMaxAggregateOutputType | null
  }

  type GetSys_user_ban_menuGroupByPayload<T extends sys_user_ban_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_user_ban_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_user_ban_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_user_ban_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_user_ban_menuGroupByOutputType[P]>
        }
      >
    >


  export type sys_user_ban_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    menuId?: boolean
    user?: boolean | sys_userDefaultArgs<ExtArgs>
    menu?: boolean | sys_menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_user_ban_menu"]>



  export type sys_user_ban_menuSelectScalar = {
    userId?: boolean
    menuId?: boolean
  }

  export type sys_user_ban_menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "menuId", ExtArgs["result"]["sys_user_ban_menu"]>
  export type sys_user_ban_menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | sys_userDefaultArgs<ExtArgs>
    menu?: boolean | sys_menuDefaultArgs<ExtArgs>
  }

  export type $sys_user_ban_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_user_ban_menu"
    objects: {
      user: Prisma.$sys_userPayload<ExtArgs>
      menu: Prisma.$sys_menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      menuId: string
    }, ExtArgs["result"]["sys_user_ban_menu"]>
    composites: {}
  }

  type sys_user_ban_menuGetPayload<S extends boolean | null | undefined | sys_user_ban_menuDefaultArgs> = $Result.GetResult<Prisma.$sys_user_ban_menuPayload, S>

  type sys_user_ban_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_user_ban_menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_user_ban_menuCountAggregateInputType | true
    }

  export interface sys_user_ban_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_user_ban_menu'], meta: { name: 'sys_user_ban_menu' } }
    /**
     * Find zero or one Sys_user_ban_menu that matches the filter.
     * @param {sys_user_ban_menuFindUniqueArgs} args - Arguments to find a Sys_user_ban_menu
     * @example
     * // Get one Sys_user_ban_menu
     * const sys_user_ban_menu = await prisma.sys_user_ban_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_user_ban_menuFindUniqueArgs>(args: SelectSubset<T, sys_user_ban_menuFindUniqueArgs<ExtArgs>>): Prisma__sys_user_ban_menuClient<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_user_ban_menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_user_ban_menuFindUniqueOrThrowArgs} args - Arguments to find a Sys_user_ban_menu
     * @example
     * // Get one Sys_user_ban_menu
     * const sys_user_ban_menu = await prisma.sys_user_ban_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_user_ban_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_user_ban_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_user_ban_menuClient<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user_ban_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_ban_menuFindFirstArgs} args - Arguments to find a Sys_user_ban_menu
     * @example
     * // Get one Sys_user_ban_menu
     * const sys_user_ban_menu = await prisma.sys_user_ban_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_user_ban_menuFindFirstArgs>(args?: SelectSubset<T, sys_user_ban_menuFindFirstArgs<ExtArgs>>): Prisma__sys_user_ban_menuClient<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user_ban_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_ban_menuFindFirstOrThrowArgs} args - Arguments to find a Sys_user_ban_menu
     * @example
     * // Get one Sys_user_ban_menu
     * const sys_user_ban_menu = await prisma.sys_user_ban_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_user_ban_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_user_ban_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_user_ban_menuClient<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_user_ban_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_ban_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_user_ban_menus
     * const sys_user_ban_menus = await prisma.sys_user_ban_menu.findMany()
     * 
     * // Get first 10 Sys_user_ban_menus
     * const sys_user_ban_menus = await prisma.sys_user_ban_menu.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const sys_user_ban_menuWithUserIdOnly = await prisma.sys_user_ban_menu.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends sys_user_ban_menuFindManyArgs>(args?: SelectSubset<T, sys_user_ban_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_user_ban_menu.
     * @param {sys_user_ban_menuCreateArgs} args - Arguments to create a Sys_user_ban_menu.
     * @example
     * // Create one Sys_user_ban_menu
     * const Sys_user_ban_menu = await prisma.sys_user_ban_menu.create({
     *   data: {
     *     // ... data to create a Sys_user_ban_menu
     *   }
     * })
     * 
     */
    create<T extends sys_user_ban_menuCreateArgs>(args: SelectSubset<T, sys_user_ban_menuCreateArgs<ExtArgs>>): Prisma__sys_user_ban_menuClient<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_user_ban_menus.
     * @param {sys_user_ban_menuCreateManyArgs} args - Arguments to create many Sys_user_ban_menus.
     * @example
     * // Create many Sys_user_ban_menus
     * const sys_user_ban_menu = await prisma.sys_user_ban_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_user_ban_menuCreateManyArgs>(args?: SelectSubset<T, sys_user_ban_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_user_ban_menu.
     * @param {sys_user_ban_menuDeleteArgs} args - Arguments to delete one Sys_user_ban_menu.
     * @example
     * // Delete one Sys_user_ban_menu
     * const Sys_user_ban_menu = await prisma.sys_user_ban_menu.delete({
     *   where: {
     *     // ... filter to delete one Sys_user_ban_menu
     *   }
     * })
     * 
     */
    delete<T extends sys_user_ban_menuDeleteArgs>(args: SelectSubset<T, sys_user_ban_menuDeleteArgs<ExtArgs>>): Prisma__sys_user_ban_menuClient<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_user_ban_menu.
     * @param {sys_user_ban_menuUpdateArgs} args - Arguments to update one Sys_user_ban_menu.
     * @example
     * // Update one Sys_user_ban_menu
     * const sys_user_ban_menu = await prisma.sys_user_ban_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_user_ban_menuUpdateArgs>(args: SelectSubset<T, sys_user_ban_menuUpdateArgs<ExtArgs>>): Prisma__sys_user_ban_menuClient<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_user_ban_menus.
     * @param {sys_user_ban_menuDeleteManyArgs} args - Arguments to filter Sys_user_ban_menus to delete.
     * @example
     * // Delete a few Sys_user_ban_menus
     * const { count } = await prisma.sys_user_ban_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_user_ban_menuDeleteManyArgs>(args?: SelectSubset<T, sys_user_ban_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_user_ban_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_ban_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_user_ban_menus
     * const sys_user_ban_menu = await prisma.sys_user_ban_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_user_ban_menuUpdateManyArgs>(args: SelectSubset<T, sys_user_ban_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_user_ban_menu.
     * @param {sys_user_ban_menuUpsertArgs} args - Arguments to update or create a Sys_user_ban_menu.
     * @example
     * // Update or create a Sys_user_ban_menu
     * const sys_user_ban_menu = await prisma.sys_user_ban_menu.upsert({
     *   create: {
     *     // ... data to create a Sys_user_ban_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_user_ban_menu we want to update
     *   }
     * })
     */
    upsert<T extends sys_user_ban_menuUpsertArgs>(args: SelectSubset<T, sys_user_ban_menuUpsertArgs<ExtArgs>>): Prisma__sys_user_ban_menuClient<$Result.GetResult<Prisma.$sys_user_ban_menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_user_ban_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_ban_menuCountArgs} args - Arguments to filter Sys_user_ban_menus to count.
     * @example
     * // Count the number of Sys_user_ban_menus
     * const count = await prisma.sys_user_ban_menu.count({
     *   where: {
     *     // ... the filter for the Sys_user_ban_menus we want to count
     *   }
     * })
    **/
    count<T extends sys_user_ban_menuCountArgs>(
      args?: Subset<T, sys_user_ban_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_user_ban_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_user_ban_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_user_ban_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_user_ban_menuAggregateArgs>(args: Subset<T, Sys_user_ban_menuAggregateArgs>): Prisma.PrismaPromise<GetSys_user_ban_menuAggregateType<T>>

    /**
     * Group by Sys_user_ban_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_ban_menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_user_ban_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_user_ban_menuGroupByArgs['orderBy'] }
        : { orderBy?: sys_user_ban_menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_user_ban_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_user_ban_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_user_ban_menu model
   */
  readonly fields: sys_user_ban_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_user_ban_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_user_ban_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends sys_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_userDefaultArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends sys_menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_menuDefaultArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_user_ban_menu model
   */
  interface sys_user_ban_menuFieldRefs {
    readonly userId: FieldRef<"sys_user_ban_menu", 'String'>
    readonly menuId: FieldRef<"sys_user_ban_menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_user_ban_menu findUnique
   */
  export type sys_user_ban_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_ban_menu to fetch.
     */
    where: sys_user_ban_menuWhereUniqueInput
  }

  /**
   * sys_user_ban_menu findUniqueOrThrow
   */
  export type sys_user_ban_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_ban_menu to fetch.
     */
    where: sys_user_ban_menuWhereUniqueInput
  }

  /**
   * sys_user_ban_menu findFirst
   */
  export type sys_user_ban_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_ban_menu to fetch.
     */
    where?: sys_user_ban_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_ban_menus to fetch.
     */
    orderBy?: sys_user_ban_menuOrderByWithRelationInput | sys_user_ban_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_user_ban_menus.
     */
    cursor?: sys_user_ban_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_ban_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_ban_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_user_ban_menus.
     */
    distinct?: Sys_user_ban_menuScalarFieldEnum | Sys_user_ban_menuScalarFieldEnum[]
  }

  /**
   * sys_user_ban_menu findFirstOrThrow
   */
  export type sys_user_ban_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_ban_menu to fetch.
     */
    where?: sys_user_ban_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_ban_menus to fetch.
     */
    orderBy?: sys_user_ban_menuOrderByWithRelationInput | sys_user_ban_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_user_ban_menus.
     */
    cursor?: sys_user_ban_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_ban_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_ban_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_user_ban_menus.
     */
    distinct?: Sys_user_ban_menuScalarFieldEnum | Sys_user_ban_menuScalarFieldEnum[]
  }

  /**
   * sys_user_ban_menu findMany
   */
  export type sys_user_ban_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_ban_menus to fetch.
     */
    where?: sys_user_ban_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_ban_menus to fetch.
     */
    orderBy?: sys_user_ban_menuOrderByWithRelationInput | sys_user_ban_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_user_ban_menus.
     */
    cursor?: sys_user_ban_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_ban_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_ban_menus.
     */
    skip?: number
    distinct?: Sys_user_ban_menuScalarFieldEnum | Sys_user_ban_menuScalarFieldEnum[]
  }

  /**
   * sys_user_ban_menu create
   */
  export type sys_user_ban_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_user_ban_menu.
     */
    data: XOR<sys_user_ban_menuCreateInput, sys_user_ban_menuUncheckedCreateInput>
  }

  /**
   * sys_user_ban_menu createMany
   */
  export type sys_user_ban_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_user_ban_menus.
     */
    data: sys_user_ban_menuCreateManyInput | sys_user_ban_menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_user_ban_menu update
   */
  export type sys_user_ban_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_user_ban_menu.
     */
    data: XOR<sys_user_ban_menuUpdateInput, sys_user_ban_menuUncheckedUpdateInput>
    /**
     * Choose, which sys_user_ban_menu to update.
     */
    where: sys_user_ban_menuWhereUniqueInput
  }

  /**
   * sys_user_ban_menu updateMany
   */
  export type sys_user_ban_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_user_ban_menus.
     */
    data: XOR<sys_user_ban_menuUpdateManyMutationInput, sys_user_ban_menuUncheckedUpdateManyInput>
    /**
     * Filter which sys_user_ban_menus to update
     */
    where?: sys_user_ban_menuWhereInput
    /**
     * Limit how many sys_user_ban_menus to update.
     */
    limit?: number
  }

  /**
   * sys_user_ban_menu upsert
   */
  export type sys_user_ban_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_user_ban_menu to update in case it exists.
     */
    where: sys_user_ban_menuWhereUniqueInput
    /**
     * In case the sys_user_ban_menu found by the `where` argument doesn't exist, create a new sys_user_ban_menu with this data.
     */
    create: XOR<sys_user_ban_menuCreateInput, sys_user_ban_menuUncheckedCreateInput>
    /**
     * In case the sys_user_ban_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_user_ban_menuUpdateInput, sys_user_ban_menuUncheckedUpdateInput>
  }

  /**
   * sys_user_ban_menu delete
   */
  export type sys_user_ban_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
    /**
     * Filter which sys_user_ban_menu to delete.
     */
    where: sys_user_ban_menuWhereUniqueInput
  }

  /**
   * sys_user_ban_menu deleteMany
   */
  export type sys_user_ban_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_user_ban_menus to delete
     */
    where?: sys_user_ban_menuWhereInput
    /**
     * Limit how many sys_user_ban_menus to delete.
     */
    limit?: number
  }

  /**
   * sys_user_ban_menu without action
   */
  export type sys_user_ban_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_ban_menu
     */
    select?: sys_user_ban_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_ban_menu
     */
    omit?: sys_user_ban_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_ban_menuInclude<ExtArgs> | null
  }


  /**
   * Model sys_menu_on_role
   */

  export type AggregateSys_menu_on_role = {
    _count: Sys_menu_on_roleCountAggregateOutputType | null
    _avg: Sys_menu_on_roleAvgAggregateOutputType | null
    _sum: Sys_menu_on_roleSumAggregateOutputType | null
    _min: Sys_menu_on_roleMinAggregateOutputType | null
    _max: Sys_menu_on_roleMaxAggregateOutputType | null
  }

  export type Sys_menu_on_roleAvgAggregateOutputType = {
    power: number | null
  }

  export type Sys_menu_on_roleSumAggregateOutputType = {
    power: number | null
  }

  export type Sys_menu_on_roleMinAggregateOutputType = {
    roleId: string | null
    menuId: string | null
    power: number | null
  }

  export type Sys_menu_on_roleMaxAggregateOutputType = {
    roleId: string | null
    menuId: string | null
    power: number | null
  }

  export type Sys_menu_on_roleCountAggregateOutputType = {
    roleId: number
    menuId: number
    power: number
    _all: number
  }


  export type Sys_menu_on_roleAvgAggregateInputType = {
    power?: true
  }

  export type Sys_menu_on_roleSumAggregateInputType = {
    power?: true
  }

  export type Sys_menu_on_roleMinAggregateInputType = {
    roleId?: true
    menuId?: true
    power?: true
  }

  export type Sys_menu_on_roleMaxAggregateInputType = {
    roleId?: true
    menuId?: true
    power?: true
  }

  export type Sys_menu_on_roleCountAggregateInputType = {
    roleId?: true
    menuId?: true
    power?: true
    _all?: true
  }

  export type Sys_menu_on_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_menu_on_role to aggregate.
     */
    where?: sys_menu_on_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menu_on_roles to fetch.
     */
    orderBy?: sys_menu_on_roleOrderByWithRelationInput | sys_menu_on_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_menu_on_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menu_on_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menu_on_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_menu_on_roles
    **/
    _count?: true | Sys_menu_on_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_menu_on_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_menu_on_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_menu_on_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_menu_on_roleMaxAggregateInputType
  }

  export type GetSys_menu_on_roleAggregateType<T extends Sys_menu_on_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_menu_on_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_menu_on_role[P]>
      : GetScalarType<T[P], AggregateSys_menu_on_role[P]>
  }




  export type sys_menu_on_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_menu_on_roleWhereInput
    orderBy?: sys_menu_on_roleOrderByWithAggregationInput | sys_menu_on_roleOrderByWithAggregationInput[]
    by: Sys_menu_on_roleScalarFieldEnum[] | Sys_menu_on_roleScalarFieldEnum
    having?: sys_menu_on_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_menu_on_roleCountAggregateInputType | true
    _avg?: Sys_menu_on_roleAvgAggregateInputType
    _sum?: Sys_menu_on_roleSumAggregateInputType
    _min?: Sys_menu_on_roleMinAggregateInputType
    _max?: Sys_menu_on_roleMaxAggregateInputType
  }

  export type Sys_menu_on_roleGroupByOutputType = {
    roleId: string
    menuId: string
    power: number
    _count: Sys_menu_on_roleCountAggregateOutputType | null
    _avg: Sys_menu_on_roleAvgAggregateOutputType | null
    _sum: Sys_menu_on_roleSumAggregateOutputType | null
    _min: Sys_menu_on_roleMinAggregateOutputType | null
    _max: Sys_menu_on_roleMaxAggregateOutputType | null
  }

  type GetSys_menu_on_roleGroupByPayload<T extends sys_menu_on_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_menu_on_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_menu_on_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_menu_on_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_menu_on_roleGroupByOutputType[P]>
        }
      >
    >


  export type sys_menu_on_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    menuId?: boolean
    power?: boolean
    menu?: boolean | sys_menuDefaultArgs<ExtArgs>
    role?: boolean | sys_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_menu_on_role"]>



  export type sys_menu_on_roleSelectScalar = {
    roleId?: boolean
    menuId?: boolean
    power?: boolean
  }

  export type sys_menu_on_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "menuId" | "power", ExtArgs["result"]["sys_menu_on_role"]>
  export type sys_menu_on_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | sys_menuDefaultArgs<ExtArgs>
    role?: boolean | sys_roleDefaultArgs<ExtArgs>
  }

  export type $sys_menu_on_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_menu_on_role"
    objects: {
      menu: Prisma.$sys_menuPayload<ExtArgs>
      role: Prisma.$sys_rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: string
      menuId: string
      power: number
    }, ExtArgs["result"]["sys_menu_on_role"]>
    composites: {}
  }

  type sys_menu_on_roleGetPayload<S extends boolean | null | undefined | sys_menu_on_roleDefaultArgs> = $Result.GetResult<Prisma.$sys_menu_on_rolePayload, S>

  type sys_menu_on_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_menu_on_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_menu_on_roleCountAggregateInputType | true
    }

  export interface sys_menu_on_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_menu_on_role'], meta: { name: 'sys_menu_on_role' } }
    /**
     * Find zero or one Sys_menu_on_role that matches the filter.
     * @param {sys_menu_on_roleFindUniqueArgs} args - Arguments to find a Sys_menu_on_role
     * @example
     * // Get one Sys_menu_on_role
     * const sys_menu_on_role = await prisma.sys_menu_on_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_menu_on_roleFindUniqueArgs>(args: SelectSubset<T, sys_menu_on_roleFindUniqueArgs<ExtArgs>>): Prisma__sys_menu_on_roleClient<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_menu_on_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_menu_on_roleFindUniqueOrThrowArgs} args - Arguments to find a Sys_menu_on_role
     * @example
     * // Get one Sys_menu_on_role
     * const sys_menu_on_role = await prisma.sys_menu_on_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_menu_on_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_menu_on_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_menu_on_roleClient<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_menu_on_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menu_on_roleFindFirstArgs} args - Arguments to find a Sys_menu_on_role
     * @example
     * // Get one Sys_menu_on_role
     * const sys_menu_on_role = await prisma.sys_menu_on_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_menu_on_roleFindFirstArgs>(args?: SelectSubset<T, sys_menu_on_roleFindFirstArgs<ExtArgs>>): Prisma__sys_menu_on_roleClient<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_menu_on_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menu_on_roleFindFirstOrThrowArgs} args - Arguments to find a Sys_menu_on_role
     * @example
     * // Get one Sys_menu_on_role
     * const sys_menu_on_role = await prisma.sys_menu_on_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_menu_on_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_menu_on_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_menu_on_roleClient<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_menu_on_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menu_on_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_menu_on_roles
     * const sys_menu_on_roles = await prisma.sys_menu_on_role.findMany()
     * 
     * // Get first 10 Sys_menu_on_roles
     * const sys_menu_on_roles = await prisma.sys_menu_on_role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const sys_menu_on_roleWithRoleIdOnly = await prisma.sys_menu_on_role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends sys_menu_on_roleFindManyArgs>(args?: SelectSubset<T, sys_menu_on_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_menu_on_role.
     * @param {sys_menu_on_roleCreateArgs} args - Arguments to create a Sys_menu_on_role.
     * @example
     * // Create one Sys_menu_on_role
     * const Sys_menu_on_role = await prisma.sys_menu_on_role.create({
     *   data: {
     *     // ... data to create a Sys_menu_on_role
     *   }
     * })
     * 
     */
    create<T extends sys_menu_on_roleCreateArgs>(args: SelectSubset<T, sys_menu_on_roleCreateArgs<ExtArgs>>): Prisma__sys_menu_on_roleClient<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_menu_on_roles.
     * @param {sys_menu_on_roleCreateManyArgs} args - Arguments to create many Sys_menu_on_roles.
     * @example
     * // Create many Sys_menu_on_roles
     * const sys_menu_on_role = await prisma.sys_menu_on_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_menu_on_roleCreateManyArgs>(args?: SelectSubset<T, sys_menu_on_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_menu_on_role.
     * @param {sys_menu_on_roleDeleteArgs} args - Arguments to delete one Sys_menu_on_role.
     * @example
     * // Delete one Sys_menu_on_role
     * const Sys_menu_on_role = await prisma.sys_menu_on_role.delete({
     *   where: {
     *     // ... filter to delete one Sys_menu_on_role
     *   }
     * })
     * 
     */
    delete<T extends sys_menu_on_roleDeleteArgs>(args: SelectSubset<T, sys_menu_on_roleDeleteArgs<ExtArgs>>): Prisma__sys_menu_on_roleClient<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_menu_on_role.
     * @param {sys_menu_on_roleUpdateArgs} args - Arguments to update one Sys_menu_on_role.
     * @example
     * // Update one Sys_menu_on_role
     * const sys_menu_on_role = await prisma.sys_menu_on_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_menu_on_roleUpdateArgs>(args: SelectSubset<T, sys_menu_on_roleUpdateArgs<ExtArgs>>): Prisma__sys_menu_on_roleClient<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_menu_on_roles.
     * @param {sys_menu_on_roleDeleteManyArgs} args - Arguments to filter Sys_menu_on_roles to delete.
     * @example
     * // Delete a few Sys_menu_on_roles
     * const { count } = await prisma.sys_menu_on_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_menu_on_roleDeleteManyArgs>(args?: SelectSubset<T, sys_menu_on_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_menu_on_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menu_on_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_menu_on_roles
     * const sys_menu_on_role = await prisma.sys_menu_on_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_menu_on_roleUpdateManyArgs>(args: SelectSubset<T, sys_menu_on_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_menu_on_role.
     * @param {sys_menu_on_roleUpsertArgs} args - Arguments to update or create a Sys_menu_on_role.
     * @example
     * // Update or create a Sys_menu_on_role
     * const sys_menu_on_role = await prisma.sys_menu_on_role.upsert({
     *   create: {
     *     // ... data to create a Sys_menu_on_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_menu_on_role we want to update
     *   }
     * })
     */
    upsert<T extends sys_menu_on_roleUpsertArgs>(args: SelectSubset<T, sys_menu_on_roleUpsertArgs<ExtArgs>>): Prisma__sys_menu_on_roleClient<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_menu_on_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menu_on_roleCountArgs} args - Arguments to filter Sys_menu_on_roles to count.
     * @example
     * // Count the number of Sys_menu_on_roles
     * const count = await prisma.sys_menu_on_role.count({
     *   where: {
     *     // ... the filter for the Sys_menu_on_roles we want to count
     *   }
     * })
    **/
    count<T extends sys_menu_on_roleCountArgs>(
      args?: Subset<T, sys_menu_on_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_menu_on_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_menu_on_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_menu_on_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_menu_on_roleAggregateArgs>(args: Subset<T, Sys_menu_on_roleAggregateArgs>): Prisma.PrismaPromise<GetSys_menu_on_roleAggregateType<T>>

    /**
     * Group by Sys_menu_on_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menu_on_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_menu_on_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_menu_on_roleGroupByArgs['orderBy'] }
        : { orderBy?: sys_menu_on_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_menu_on_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_menu_on_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_menu_on_role model
   */
  readonly fields: sys_menu_on_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_menu_on_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_menu_on_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends sys_menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_menuDefaultArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends sys_roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_roleDefaultArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_menu_on_role model
   */
  interface sys_menu_on_roleFieldRefs {
    readonly roleId: FieldRef<"sys_menu_on_role", 'String'>
    readonly menuId: FieldRef<"sys_menu_on_role", 'String'>
    readonly power: FieldRef<"sys_menu_on_role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sys_menu_on_role findUnique
   */
  export type sys_menu_on_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu_on_role to fetch.
     */
    where: sys_menu_on_roleWhereUniqueInput
  }

  /**
   * sys_menu_on_role findUniqueOrThrow
   */
  export type sys_menu_on_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu_on_role to fetch.
     */
    where: sys_menu_on_roleWhereUniqueInput
  }

  /**
   * sys_menu_on_role findFirst
   */
  export type sys_menu_on_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu_on_role to fetch.
     */
    where?: sys_menu_on_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menu_on_roles to fetch.
     */
    orderBy?: sys_menu_on_roleOrderByWithRelationInput | sys_menu_on_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_menu_on_roles.
     */
    cursor?: sys_menu_on_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menu_on_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menu_on_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_menu_on_roles.
     */
    distinct?: Sys_menu_on_roleScalarFieldEnum | Sys_menu_on_roleScalarFieldEnum[]
  }

  /**
   * sys_menu_on_role findFirstOrThrow
   */
  export type sys_menu_on_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu_on_role to fetch.
     */
    where?: sys_menu_on_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menu_on_roles to fetch.
     */
    orderBy?: sys_menu_on_roleOrderByWithRelationInput | sys_menu_on_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_menu_on_roles.
     */
    cursor?: sys_menu_on_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menu_on_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menu_on_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_menu_on_roles.
     */
    distinct?: Sys_menu_on_roleScalarFieldEnum | Sys_menu_on_roleScalarFieldEnum[]
  }

  /**
   * sys_menu_on_role findMany
   */
  export type sys_menu_on_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu_on_roles to fetch.
     */
    where?: sys_menu_on_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menu_on_roles to fetch.
     */
    orderBy?: sys_menu_on_roleOrderByWithRelationInput | sys_menu_on_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_menu_on_roles.
     */
    cursor?: sys_menu_on_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menu_on_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menu_on_roles.
     */
    skip?: number
    distinct?: Sys_menu_on_roleScalarFieldEnum | Sys_menu_on_roleScalarFieldEnum[]
  }

  /**
   * sys_menu_on_role create
   */
  export type sys_menu_on_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_menu_on_role.
     */
    data: XOR<sys_menu_on_roleCreateInput, sys_menu_on_roleUncheckedCreateInput>
  }

  /**
   * sys_menu_on_role createMany
   */
  export type sys_menu_on_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_menu_on_roles.
     */
    data: sys_menu_on_roleCreateManyInput | sys_menu_on_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_menu_on_role update
   */
  export type sys_menu_on_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_menu_on_role.
     */
    data: XOR<sys_menu_on_roleUpdateInput, sys_menu_on_roleUncheckedUpdateInput>
    /**
     * Choose, which sys_menu_on_role to update.
     */
    where: sys_menu_on_roleWhereUniqueInput
  }

  /**
   * sys_menu_on_role updateMany
   */
  export type sys_menu_on_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_menu_on_roles.
     */
    data: XOR<sys_menu_on_roleUpdateManyMutationInput, sys_menu_on_roleUncheckedUpdateManyInput>
    /**
     * Filter which sys_menu_on_roles to update
     */
    where?: sys_menu_on_roleWhereInput
    /**
     * Limit how many sys_menu_on_roles to update.
     */
    limit?: number
  }

  /**
   * sys_menu_on_role upsert
   */
  export type sys_menu_on_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_menu_on_role to update in case it exists.
     */
    where: sys_menu_on_roleWhereUniqueInput
    /**
     * In case the sys_menu_on_role found by the `where` argument doesn't exist, create a new sys_menu_on_role with this data.
     */
    create: XOR<sys_menu_on_roleCreateInput, sys_menu_on_roleUncheckedCreateInput>
    /**
     * In case the sys_menu_on_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_menu_on_roleUpdateInput, sys_menu_on_roleUncheckedUpdateInput>
  }

  /**
   * sys_menu_on_role delete
   */
  export type sys_menu_on_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    /**
     * Filter which sys_menu_on_role to delete.
     */
    where: sys_menu_on_roleWhereUniqueInput
  }

  /**
   * sys_menu_on_role deleteMany
   */
  export type sys_menu_on_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_menu_on_roles to delete
     */
    where?: sys_menu_on_roleWhereInput
    /**
     * Limit how many sys_menu_on_roles to delete.
     */
    limit?: number
  }

  /**
   * sys_menu_on_role without action
   */
  export type sys_menu_on_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
  }


  /**
   * Model sys_role
   */

  export type AggregateSys_role = {
    _count: Sys_roleCountAggregateOutputType | null
    _avg: Sys_roleAvgAggregateOutputType | null
    _sum: Sys_roleSumAggregateOutputType | null
    _min: Sys_roleMinAggregateOutputType | null
    _max: Sys_roleMaxAggregateOutputType | null
  }

  export type Sys_roleAvgAggregateOutputType = {
    sort: number | null
  }

  export type Sys_roleSumAggregateOutputType = {
    sort: number | null
  }

  export type Sys_roleMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    status: boolean | null
    comment: string | null
    sort: number | null
  }

  export type Sys_roleMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    status: boolean | null
    comment: string | null
    sort: number | null
  }

  export type Sys_roleCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    name: number
    status: number
    comment: number
    sort: number
    _all: number
  }


  export type Sys_roleAvgAggregateInputType = {
    sort?: true
  }

  export type Sys_roleSumAggregateInputType = {
    sort?: true
  }

  export type Sys_roleMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    status?: true
    comment?: true
    sort?: true
  }

  export type Sys_roleMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    status?: true
    comment?: true
    sort?: true
  }

  export type Sys_roleCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    status?: true
    comment?: true
    sort?: true
    _all?: true
  }

  export type Sys_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_role to aggregate.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_roles
    **/
    _count?: true | Sys_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_roleMaxAggregateInputType
  }

  export type GetSys_roleAggregateType<T extends Sys_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_role[P]>
      : GetScalarType<T[P], AggregateSys_role[P]>
  }




  export type sys_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_roleWhereInput
    orderBy?: sys_roleOrderByWithAggregationInput | sys_roleOrderByWithAggregationInput[]
    by: Sys_roleScalarFieldEnum[] | Sys_roleScalarFieldEnum
    having?: sys_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_roleCountAggregateInputType | true
    _avg?: Sys_roleAvgAggregateInputType
    _sum?: Sys_roleSumAggregateInputType
    _min?: Sys_roleMinAggregateInputType
    _max?: Sys_roleMaxAggregateInputType
  }

  export type Sys_roleGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    name: string
    status: boolean
    comment: string | null
    sort: number
    _count: Sys_roleCountAggregateOutputType | null
    _avg: Sys_roleAvgAggregateOutputType | null
    _sum: Sys_roleSumAggregateOutputType | null
    _min: Sys_roleMinAggregateOutputType | null
    _max: Sys_roleMaxAggregateOutputType | null
  }

  type GetSys_roleGroupByPayload<T extends sys_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_roleGroupByOutputType[P]>
        }
      >
    >


  export type sys_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    status?: boolean
    comment?: boolean
    sort?: boolean
    menus?: boolean | sys_role$menusArgs<ExtArgs>
    users?: boolean | sys_role$usersArgs<ExtArgs>
    _count?: boolean | Sys_roleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_role"]>



  export type sys_roleSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    status?: boolean
    comment?: boolean
    sort?: boolean
  }

  export type sys_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "name" | "status" | "comment" | "sort", ExtArgs["result"]["sys_role"]>
  export type sys_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | sys_role$menusArgs<ExtArgs>
    users?: boolean | sys_role$usersArgs<ExtArgs>
    _count?: boolean | Sys_roleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_role"
    objects: {
      menus: Prisma.$sys_menu_on_rolePayload<ExtArgs>[]
      users: Prisma.$sys_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      name: string
      status: boolean
      comment: string | null
      sort: number
    }, ExtArgs["result"]["sys_role"]>
    composites: {}
  }

  type sys_roleGetPayload<S extends boolean | null | undefined | sys_roleDefaultArgs> = $Result.GetResult<Prisma.$sys_rolePayload, S>

  type sys_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_roleCountAggregateInputType | true
    }

  export interface sys_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_role'], meta: { name: 'sys_role' } }
    /**
     * Find zero or one Sys_role that matches the filter.
     * @param {sys_roleFindUniqueArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_roleFindUniqueArgs>(args: SelectSubset<T, sys_roleFindUniqueArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_roleFindUniqueOrThrowArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindFirstArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_roleFindFirstArgs>(args?: SelectSubset<T, sys_roleFindFirstArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindFirstOrThrowArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_roles
     * const sys_roles = await prisma.sys_role.findMany()
     * 
     * // Get first 10 Sys_roles
     * const sys_roles = await prisma.sys_role.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const sys_roleWithUidOnly = await prisma.sys_role.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends sys_roleFindManyArgs>(args?: SelectSubset<T, sys_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_role.
     * @param {sys_roleCreateArgs} args - Arguments to create a Sys_role.
     * @example
     * // Create one Sys_role
     * const Sys_role = await prisma.sys_role.create({
     *   data: {
     *     // ... data to create a Sys_role
     *   }
     * })
     * 
     */
    create<T extends sys_roleCreateArgs>(args: SelectSubset<T, sys_roleCreateArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_roles.
     * @param {sys_roleCreateManyArgs} args - Arguments to create many Sys_roles.
     * @example
     * // Create many Sys_roles
     * const sys_role = await prisma.sys_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_roleCreateManyArgs>(args?: SelectSubset<T, sys_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_role.
     * @param {sys_roleDeleteArgs} args - Arguments to delete one Sys_role.
     * @example
     * // Delete one Sys_role
     * const Sys_role = await prisma.sys_role.delete({
     *   where: {
     *     // ... filter to delete one Sys_role
     *   }
     * })
     * 
     */
    delete<T extends sys_roleDeleteArgs>(args: SelectSubset<T, sys_roleDeleteArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_role.
     * @param {sys_roleUpdateArgs} args - Arguments to update one Sys_role.
     * @example
     * // Update one Sys_role
     * const sys_role = await prisma.sys_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_roleUpdateArgs>(args: SelectSubset<T, sys_roleUpdateArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_roles.
     * @param {sys_roleDeleteManyArgs} args - Arguments to filter Sys_roles to delete.
     * @example
     * // Delete a few Sys_roles
     * const { count } = await prisma.sys_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_roleDeleteManyArgs>(args?: SelectSubset<T, sys_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_roles
     * const sys_role = await prisma.sys_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_roleUpdateManyArgs>(args: SelectSubset<T, sys_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_role.
     * @param {sys_roleUpsertArgs} args - Arguments to update or create a Sys_role.
     * @example
     * // Update or create a Sys_role
     * const sys_role = await prisma.sys_role.upsert({
     *   create: {
     *     // ... data to create a Sys_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_role we want to update
     *   }
     * })
     */
    upsert<T extends sys_roleUpsertArgs>(args: SelectSubset<T, sys_roleUpsertArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleCountArgs} args - Arguments to filter Sys_roles to count.
     * @example
     * // Count the number of Sys_roles
     * const count = await prisma.sys_role.count({
     *   where: {
     *     // ... the filter for the Sys_roles we want to count
     *   }
     * })
    **/
    count<T extends sys_roleCountArgs>(
      args?: Subset<T, sys_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_roleAggregateArgs>(args: Subset<T, Sys_roleAggregateArgs>): Prisma.PrismaPromise<GetSys_roleAggregateType<T>>

    /**
     * Group by Sys_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_roleGroupByArgs['orderBy'] }
        : { orderBy?: sys_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_role model
   */
  readonly fields: sys_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menus<T extends sys_role$menusArgs<ExtArgs> = {}>(args?: Subset<T, sys_role$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_menu_on_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends sys_role$usersArgs<ExtArgs> = {}>(args?: Subset<T, sys_role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_role model
   */
  interface sys_roleFieldRefs {
    readonly uid: FieldRef<"sys_role", 'String'>
    readonly createdAt: FieldRef<"sys_role", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_role", 'DateTime'>
    readonly name: FieldRef<"sys_role", 'String'>
    readonly status: FieldRef<"sys_role", 'Boolean'>
    readonly comment: FieldRef<"sys_role", 'String'>
    readonly sort: FieldRef<"sys_role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sys_role findUnique
   */
  export type sys_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role findUniqueOrThrow
   */
  export type sys_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role findFirst
   */
  export type sys_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_roles.
     */
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role findFirstOrThrow
   */
  export type sys_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_roles.
     */
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role findMany
   */
  export type sys_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_roles to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role create
   */
  export type sys_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_role.
     */
    data: XOR<sys_roleCreateInput, sys_roleUncheckedCreateInput>
  }

  /**
   * sys_role createMany
   */
  export type sys_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_roles.
     */
    data: sys_roleCreateManyInput | sys_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_role update
   */
  export type sys_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_role.
     */
    data: XOR<sys_roleUpdateInput, sys_roleUncheckedUpdateInput>
    /**
     * Choose, which sys_role to update.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role updateMany
   */
  export type sys_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_roles.
     */
    data: XOR<sys_roleUpdateManyMutationInput, sys_roleUncheckedUpdateManyInput>
    /**
     * Filter which sys_roles to update
     */
    where?: sys_roleWhereInput
    /**
     * Limit how many sys_roles to update.
     */
    limit?: number
  }

  /**
   * sys_role upsert
   */
  export type sys_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_role to update in case it exists.
     */
    where: sys_roleWhereUniqueInput
    /**
     * In case the sys_role found by the `where` argument doesn't exist, create a new sys_role with this data.
     */
    create: XOR<sys_roleCreateInput, sys_roleUncheckedCreateInput>
    /**
     * In case the sys_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_roleUpdateInput, sys_roleUncheckedUpdateInput>
  }

  /**
   * sys_role delete
   */
  export type sys_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter which sys_role to delete.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role deleteMany
   */
  export type sys_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_roles to delete
     */
    where?: sys_roleWhereInput
    /**
     * Limit how many sys_roles to delete.
     */
    limit?: number
  }

  /**
   * sys_role.menus
   */
  export type sys_role$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu_on_role
     */
    select?: sys_menu_on_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu_on_role
     */
    omit?: sys_menu_on_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menu_on_roleInclude<ExtArgs> | null
    where?: sys_menu_on_roleWhereInput
    orderBy?: sys_menu_on_roleOrderByWithRelationInput | sys_menu_on_roleOrderByWithRelationInput[]
    cursor?: sys_menu_on_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_menu_on_roleScalarFieldEnum | Sys_menu_on_roleScalarFieldEnum[]
  }

  /**
   * sys_role.users
   */
  export type sys_role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    where?: sys_userWhereInput
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    cursor?: sys_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_role without action
   */
  export type sys_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
  }


  /**
   * Model sys_media
   */

  export type AggregateSys_media = {
    _count: Sys_mediaCountAggregateOutputType | null
    _avg: Sys_mediaAvgAggregateOutputType | null
    _sum: Sys_mediaSumAggregateOutputType | null
    _min: Sys_mediaMinAggregateOutputType | null
    _max: Sys_mediaMaxAggregateOutputType | null
  }

  export type Sys_mediaAvgAggregateOutputType = {
    size: number | null
    width: number | null
    height: number | null
    duration: number | null
  }

  export type Sys_mediaSumAggregateOutputType = {
    size: number | null
    width: number | null
    height: number | null
    duration: number | null
  }

  export type Sys_mediaMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    size: number | null
    hash: string | null
    mimeType: string | null
    extension: string | null
    path: string | null
    url: string | null
    isWechat: boolean | null
    wechat_id: string | null
    enabled: boolean | null
    type: string | null
    width: number | null
    height: number | null
    duration: number | null
  }

  export type Sys_mediaMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    size: number | null
    hash: string | null
    mimeType: string | null
    extension: string | null
    path: string | null
    url: string | null
    isWechat: boolean | null
    wechat_id: string | null
    enabled: boolean | null
    type: string | null
    width: number | null
    height: number | null
    duration: number | null
  }

  export type Sys_mediaCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    name: number
    size: number
    hash: number
    mimeType: number
    extension: number
    path: number
    url: number
    isWechat: number
    wechat_id: number
    enabled: number
    type: number
    width: number
    height: number
    duration: number
    _all: number
  }


  export type Sys_mediaAvgAggregateInputType = {
    size?: true
    width?: true
    height?: true
    duration?: true
  }

  export type Sys_mediaSumAggregateInputType = {
    size?: true
    width?: true
    height?: true
    duration?: true
  }

  export type Sys_mediaMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    size?: true
    hash?: true
    mimeType?: true
    extension?: true
    path?: true
    url?: true
    isWechat?: true
    wechat_id?: true
    enabled?: true
    type?: true
    width?: true
    height?: true
    duration?: true
  }

  export type Sys_mediaMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    size?: true
    hash?: true
    mimeType?: true
    extension?: true
    path?: true
    url?: true
    isWechat?: true
    wechat_id?: true
    enabled?: true
    type?: true
    width?: true
    height?: true
    duration?: true
  }

  export type Sys_mediaCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    size?: true
    hash?: true
    mimeType?: true
    extension?: true
    path?: true
    url?: true
    isWechat?: true
    wechat_id?: true
    enabled?: true
    type?: true
    width?: true
    height?: true
    duration?: true
    _all?: true
  }

  export type Sys_mediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_media to aggregate.
     */
    where?: sys_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_medias to fetch.
     */
    orderBy?: sys_mediaOrderByWithRelationInput | sys_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_medias
    **/
    _count?: true | Sys_mediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_mediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_mediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_mediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_mediaMaxAggregateInputType
  }

  export type GetSys_mediaAggregateType<T extends Sys_mediaAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_media]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_media[P]>
      : GetScalarType<T[P], AggregateSys_media[P]>
  }




  export type sys_mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_mediaWhereInput
    orderBy?: sys_mediaOrderByWithAggregationInput | sys_mediaOrderByWithAggregationInput[]
    by: Sys_mediaScalarFieldEnum[] | Sys_mediaScalarFieldEnum
    having?: sys_mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_mediaCountAggregateInputType | true
    _avg?: Sys_mediaAvgAggregateInputType
    _sum?: Sys_mediaSumAggregateInputType
    _min?: Sys_mediaMinAggregateInputType
    _max?: Sys_mediaMaxAggregateInputType
  }

  export type Sys_mediaGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    name: string
    size: number
    hash: string
    mimeType: string
    extension: string
    path: string
    url: string | null
    isWechat: boolean
    wechat_id: string | null
    enabled: boolean
    type: string
    width: number | null
    height: number | null
    duration: number | null
    _count: Sys_mediaCountAggregateOutputType | null
    _avg: Sys_mediaAvgAggregateOutputType | null
    _sum: Sys_mediaSumAggregateOutputType | null
    _min: Sys_mediaMinAggregateOutputType | null
    _max: Sys_mediaMaxAggregateOutputType | null
  }

  type GetSys_mediaGroupByPayload<T extends sys_mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_mediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_mediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_mediaGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_mediaGroupByOutputType[P]>
        }
      >
    >


  export type sys_mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    size?: boolean
    hash?: boolean
    mimeType?: boolean
    extension?: boolean
    path?: boolean
    url?: boolean
    isWechat?: boolean
    wechat_id?: boolean
    enabled?: boolean
    type?: boolean
    width?: boolean
    height?: boolean
    duration?: boolean
    users?: boolean | sys_media$usersArgs<ExtArgs>
    _count?: boolean | Sys_mediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_media"]>



  export type sys_mediaSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    size?: boolean
    hash?: boolean
    mimeType?: boolean
    extension?: boolean
    path?: boolean
    url?: boolean
    isWechat?: boolean
    wechat_id?: boolean
    enabled?: boolean
    type?: boolean
    width?: boolean
    height?: boolean
    duration?: boolean
  }

  export type sys_mediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "name" | "size" | "hash" | "mimeType" | "extension" | "path" | "url" | "isWechat" | "wechat_id" | "enabled" | "type" | "width" | "height" | "duration", ExtArgs["result"]["sys_media"]>
  export type sys_mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | sys_media$usersArgs<ExtArgs>
    _count?: boolean | Sys_mediaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_media"
    objects: {
      users: Prisma.$sys_user_mediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      name: string
      size: number
      hash: string
      mimeType: string
      extension: string
      path: string
      url: string | null
      isWechat: boolean
      wechat_id: string | null
      enabled: boolean
      type: string
      width: number | null
      height: number | null
      duration: number | null
    }, ExtArgs["result"]["sys_media"]>
    composites: {}
  }

  type sys_mediaGetPayload<S extends boolean | null | undefined | sys_mediaDefaultArgs> = $Result.GetResult<Prisma.$sys_mediaPayload, S>

  type sys_mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_mediaCountAggregateInputType | true
    }

  export interface sys_mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_media'], meta: { name: 'sys_media' } }
    /**
     * Find zero or one Sys_media that matches the filter.
     * @param {sys_mediaFindUniqueArgs} args - Arguments to find a Sys_media
     * @example
     * // Get one Sys_media
     * const sys_media = await prisma.sys_media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_mediaFindUniqueArgs>(args: SelectSubset<T, sys_mediaFindUniqueArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_mediaFindUniqueOrThrowArgs} args - Arguments to find a Sys_media
     * @example
     * // Get one Sys_media
     * const sys_media = await prisma.sys_media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_mediaFindFirstArgs} args - Arguments to find a Sys_media
     * @example
     * // Get one Sys_media
     * const sys_media = await prisma.sys_media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_mediaFindFirstArgs>(args?: SelectSubset<T, sys_mediaFindFirstArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_mediaFindFirstOrThrowArgs} args - Arguments to find a Sys_media
     * @example
     * // Get one Sys_media
     * const sys_media = await prisma.sys_media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_medias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_medias
     * const sys_medias = await prisma.sys_media.findMany()
     * 
     * // Get first 10 Sys_medias
     * const sys_medias = await prisma.sys_media.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const sys_mediaWithUidOnly = await prisma.sys_media.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends sys_mediaFindManyArgs>(args?: SelectSubset<T, sys_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_media.
     * @param {sys_mediaCreateArgs} args - Arguments to create a Sys_media.
     * @example
     * // Create one Sys_media
     * const Sys_media = await prisma.sys_media.create({
     *   data: {
     *     // ... data to create a Sys_media
     *   }
     * })
     * 
     */
    create<T extends sys_mediaCreateArgs>(args: SelectSubset<T, sys_mediaCreateArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_medias.
     * @param {sys_mediaCreateManyArgs} args - Arguments to create many Sys_medias.
     * @example
     * // Create many Sys_medias
     * const sys_media = await prisma.sys_media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_mediaCreateManyArgs>(args?: SelectSubset<T, sys_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_media.
     * @param {sys_mediaDeleteArgs} args - Arguments to delete one Sys_media.
     * @example
     * // Delete one Sys_media
     * const Sys_media = await prisma.sys_media.delete({
     *   where: {
     *     // ... filter to delete one Sys_media
     *   }
     * })
     * 
     */
    delete<T extends sys_mediaDeleteArgs>(args: SelectSubset<T, sys_mediaDeleteArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_media.
     * @param {sys_mediaUpdateArgs} args - Arguments to update one Sys_media.
     * @example
     * // Update one Sys_media
     * const sys_media = await prisma.sys_media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_mediaUpdateArgs>(args: SelectSubset<T, sys_mediaUpdateArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_medias.
     * @param {sys_mediaDeleteManyArgs} args - Arguments to filter Sys_medias to delete.
     * @example
     * // Delete a few Sys_medias
     * const { count } = await prisma.sys_media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_mediaDeleteManyArgs>(args?: SelectSubset<T, sys_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_medias
     * const sys_media = await prisma.sys_media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_mediaUpdateManyArgs>(args: SelectSubset<T, sys_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_media.
     * @param {sys_mediaUpsertArgs} args - Arguments to update or create a Sys_media.
     * @example
     * // Update or create a Sys_media
     * const sys_media = await prisma.sys_media.upsert({
     *   create: {
     *     // ... data to create a Sys_media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_media we want to update
     *   }
     * })
     */
    upsert<T extends sys_mediaUpsertArgs>(args: SelectSubset<T, sys_mediaUpsertArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_mediaCountArgs} args - Arguments to filter Sys_medias to count.
     * @example
     * // Count the number of Sys_medias
     * const count = await prisma.sys_media.count({
     *   where: {
     *     // ... the filter for the Sys_medias we want to count
     *   }
     * })
    **/
    count<T extends sys_mediaCountArgs>(
      args?: Subset<T, sys_mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_mediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_mediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_mediaAggregateArgs>(args: Subset<T, Sys_mediaAggregateArgs>): Prisma.PrismaPromise<GetSys_mediaAggregateType<T>>

    /**
     * Group by Sys_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_mediaGroupByArgs['orderBy'] }
        : { orderBy?: sys_mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_media model
   */
  readonly fields: sys_mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends sys_media$usersArgs<ExtArgs> = {}>(args?: Subset<T, sys_media$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_media model
   */
  interface sys_mediaFieldRefs {
    readonly uid: FieldRef<"sys_media", 'String'>
    readonly createdAt: FieldRef<"sys_media", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_media", 'DateTime'>
    readonly name: FieldRef<"sys_media", 'String'>
    readonly size: FieldRef<"sys_media", 'Int'>
    readonly hash: FieldRef<"sys_media", 'String'>
    readonly mimeType: FieldRef<"sys_media", 'String'>
    readonly extension: FieldRef<"sys_media", 'String'>
    readonly path: FieldRef<"sys_media", 'String'>
    readonly url: FieldRef<"sys_media", 'String'>
    readonly isWechat: FieldRef<"sys_media", 'Boolean'>
    readonly wechat_id: FieldRef<"sys_media", 'String'>
    readonly enabled: FieldRef<"sys_media", 'Boolean'>
    readonly type: FieldRef<"sys_media", 'String'>
    readonly width: FieldRef<"sys_media", 'Int'>
    readonly height: FieldRef<"sys_media", 'Int'>
    readonly duration: FieldRef<"sys_media", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sys_media findUnique
   */
  export type sys_mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_media to fetch.
     */
    where: sys_mediaWhereUniqueInput
  }

  /**
   * sys_media findUniqueOrThrow
   */
  export type sys_mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_media to fetch.
     */
    where: sys_mediaWhereUniqueInput
  }

  /**
   * sys_media findFirst
   */
  export type sys_mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_media to fetch.
     */
    where?: sys_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_medias to fetch.
     */
    orderBy?: sys_mediaOrderByWithRelationInput | sys_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_medias.
     */
    cursor?: sys_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_medias.
     */
    distinct?: Sys_mediaScalarFieldEnum | Sys_mediaScalarFieldEnum[]
  }

  /**
   * sys_media findFirstOrThrow
   */
  export type sys_mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_media to fetch.
     */
    where?: sys_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_medias to fetch.
     */
    orderBy?: sys_mediaOrderByWithRelationInput | sys_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_medias.
     */
    cursor?: sys_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_medias.
     */
    distinct?: Sys_mediaScalarFieldEnum | Sys_mediaScalarFieldEnum[]
  }

  /**
   * sys_media findMany
   */
  export type sys_mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_medias to fetch.
     */
    where?: sys_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_medias to fetch.
     */
    orderBy?: sys_mediaOrderByWithRelationInput | sys_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_medias.
     */
    cursor?: sys_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_medias.
     */
    skip?: number
    distinct?: Sys_mediaScalarFieldEnum | Sys_mediaScalarFieldEnum[]
  }

  /**
   * sys_media create
   */
  export type sys_mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_media.
     */
    data: XOR<sys_mediaCreateInput, sys_mediaUncheckedCreateInput>
  }

  /**
   * sys_media createMany
   */
  export type sys_mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_medias.
     */
    data: sys_mediaCreateManyInput | sys_mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_media update
   */
  export type sys_mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_media.
     */
    data: XOR<sys_mediaUpdateInput, sys_mediaUncheckedUpdateInput>
    /**
     * Choose, which sys_media to update.
     */
    where: sys_mediaWhereUniqueInput
  }

  /**
   * sys_media updateMany
   */
  export type sys_mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_medias.
     */
    data: XOR<sys_mediaUpdateManyMutationInput, sys_mediaUncheckedUpdateManyInput>
    /**
     * Filter which sys_medias to update
     */
    where?: sys_mediaWhereInput
    /**
     * Limit how many sys_medias to update.
     */
    limit?: number
  }

  /**
   * sys_media upsert
   */
  export type sys_mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_media to update in case it exists.
     */
    where: sys_mediaWhereUniqueInput
    /**
     * In case the sys_media found by the `where` argument doesn't exist, create a new sys_media with this data.
     */
    create: XOR<sys_mediaCreateInput, sys_mediaUncheckedCreateInput>
    /**
     * In case the sys_media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_mediaUpdateInput, sys_mediaUncheckedUpdateInput>
  }

  /**
   * sys_media delete
   */
  export type sys_mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
    /**
     * Filter which sys_media to delete.
     */
    where: sys_mediaWhereUniqueInput
  }

  /**
   * sys_media deleteMany
   */
  export type sys_mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_medias to delete
     */
    where?: sys_mediaWhereInput
    /**
     * Limit how many sys_medias to delete.
     */
    limit?: number
  }

  /**
   * sys_media.users
   */
  export type sys_media$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    where?: sys_user_mediaWhereInput
    orderBy?: sys_user_mediaOrderByWithRelationInput | sys_user_mediaOrderByWithRelationInput[]
    cursor?: sys_user_mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_user_mediaScalarFieldEnum | Sys_user_mediaScalarFieldEnum[]
  }

  /**
   * sys_media without action
   */
  export type sys_mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_media
     */
    select?: sys_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_media
     */
    omit?: sys_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_mediaInclude<ExtArgs> | null
  }


  /**
   * Model sys_user_media
   */

  export type AggregateSys_user_media = {
    _count: Sys_user_mediaCountAggregateOutputType | null
    _min: Sys_user_mediaMinAggregateOutputType | null
    _max: Sys_user_mediaMaxAggregateOutputType | null
  }

  export type Sys_user_mediaMinAggregateOutputType = {
    userId: string | null
    mediaId: string | null
  }

  export type Sys_user_mediaMaxAggregateOutputType = {
    userId: string | null
    mediaId: string | null
  }

  export type Sys_user_mediaCountAggregateOutputType = {
    userId: number
    mediaId: number
    _all: number
  }


  export type Sys_user_mediaMinAggregateInputType = {
    userId?: true
    mediaId?: true
  }

  export type Sys_user_mediaMaxAggregateInputType = {
    userId?: true
    mediaId?: true
  }

  export type Sys_user_mediaCountAggregateInputType = {
    userId?: true
    mediaId?: true
    _all?: true
  }

  export type Sys_user_mediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_user_media to aggregate.
     */
    where?: sys_user_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_medias to fetch.
     */
    orderBy?: sys_user_mediaOrderByWithRelationInput | sys_user_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_user_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_user_medias
    **/
    _count?: true | Sys_user_mediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_user_mediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_user_mediaMaxAggregateInputType
  }

  export type GetSys_user_mediaAggregateType<T extends Sys_user_mediaAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_user_media]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_user_media[P]>
      : GetScalarType<T[P], AggregateSys_user_media[P]>
  }




  export type sys_user_mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_user_mediaWhereInput
    orderBy?: sys_user_mediaOrderByWithAggregationInput | sys_user_mediaOrderByWithAggregationInput[]
    by: Sys_user_mediaScalarFieldEnum[] | Sys_user_mediaScalarFieldEnum
    having?: sys_user_mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_user_mediaCountAggregateInputType | true
    _min?: Sys_user_mediaMinAggregateInputType
    _max?: Sys_user_mediaMaxAggregateInputType
  }

  export type Sys_user_mediaGroupByOutputType = {
    userId: string
    mediaId: string
    _count: Sys_user_mediaCountAggregateOutputType | null
    _min: Sys_user_mediaMinAggregateOutputType | null
    _max: Sys_user_mediaMaxAggregateOutputType | null
  }

  type GetSys_user_mediaGroupByPayload<T extends sys_user_mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_user_mediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_user_mediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_user_mediaGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_user_mediaGroupByOutputType[P]>
        }
      >
    >


  export type sys_user_mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    mediaId?: boolean
    user?: boolean | sys_userDefaultArgs<ExtArgs>
    media?: boolean | sys_mediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_user_media"]>



  export type sys_user_mediaSelectScalar = {
    userId?: boolean
    mediaId?: boolean
  }

  export type sys_user_mediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "mediaId", ExtArgs["result"]["sys_user_media"]>
  export type sys_user_mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | sys_userDefaultArgs<ExtArgs>
    media?: boolean | sys_mediaDefaultArgs<ExtArgs>
  }

  export type $sys_user_mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_user_media"
    objects: {
      user: Prisma.$sys_userPayload<ExtArgs>
      media: Prisma.$sys_mediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      mediaId: string
    }, ExtArgs["result"]["sys_user_media"]>
    composites: {}
  }

  type sys_user_mediaGetPayload<S extends boolean | null | undefined | sys_user_mediaDefaultArgs> = $Result.GetResult<Prisma.$sys_user_mediaPayload, S>

  type sys_user_mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_user_mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_user_mediaCountAggregateInputType | true
    }

  export interface sys_user_mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_user_media'], meta: { name: 'sys_user_media' } }
    /**
     * Find zero or one Sys_user_media that matches the filter.
     * @param {sys_user_mediaFindUniqueArgs} args - Arguments to find a Sys_user_media
     * @example
     * // Get one Sys_user_media
     * const sys_user_media = await prisma.sys_user_media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_user_mediaFindUniqueArgs>(args: SelectSubset<T, sys_user_mediaFindUniqueArgs<ExtArgs>>): Prisma__sys_user_mediaClient<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_user_media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_user_mediaFindUniqueOrThrowArgs} args - Arguments to find a Sys_user_media
     * @example
     * // Get one Sys_user_media
     * const sys_user_media = await prisma.sys_user_media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_user_mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_user_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_user_mediaClient<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user_media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_mediaFindFirstArgs} args - Arguments to find a Sys_user_media
     * @example
     * // Get one Sys_user_media
     * const sys_user_media = await prisma.sys_user_media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_user_mediaFindFirstArgs>(args?: SelectSubset<T, sys_user_mediaFindFirstArgs<ExtArgs>>): Prisma__sys_user_mediaClient<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user_media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_mediaFindFirstOrThrowArgs} args - Arguments to find a Sys_user_media
     * @example
     * // Get one Sys_user_media
     * const sys_user_media = await prisma.sys_user_media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_user_mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_user_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_user_mediaClient<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_user_medias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_user_medias
     * const sys_user_medias = await prisma.sys_user_media.findMany()
     * 
     * // Get first 10 Sys_user_medias
     * const sys_user_medias = await prisma.sys_user_media.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const sys_user_mediaWithUserIdOnly = await prisma.sys_user_media.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends sys_user_mediaFindManyArgs>(args?: SelectSubset<T, sys_user_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_user_media.
     * @param {sys_user_mediaCreateArgs} args - Arguments to create a Sys_user_media.
     * @example
     * // Create one Sys_user_media
     * const Sys_user_media = await prisma.sys_user_media.create({
     *   data: {
     *     // ... data to create a Sys_user_media
     *   }
     * })
     * 
     */
    create<T extends sys_user_mediaCreateArgs>(args: SelectSubset<T, sys_user_mediaCreateArgs<ExtArgs>>): Prisma__sys_user_mediaClient<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_user_medias.
     * @param {sys_user_mediaCreateManyArgs} args - Arguments to create many Sys_user_medias.
     * @example
     * // Create many Sys_user_medias
     * const sys_user_media = await prisma.sys_user_media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_user_mediaCreateManyArgs>(args?: SelectSubset<T, sys_user_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_user_media.
     * @param {sys_user_mediaDeleteArgs} args - Arguments to delete one Sys_user_media.
     * @example
     * // Delete one Sys_user_media
     * const Sys_user_media = await prisma.sys_user_media.delete({
     *   where: {
     *     // ... filter to delete one Sys_user_media
     *   }
     * })
     * 
     */
    delete<T extends sys_user_mediaDeleteArgs>(args: SelectSubset<T, sys_user_mediaDeleteArgs<ExtArgs>>): Prisma__sys_user_mediaClient<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_user_media.
     * @param {sys_user_mediaUpdateArgs} args - Arguments to update one Sys_user_media.
     * @example
     * // Update one Sys_user_media
     * const sys_user_media = await prisma.sys_user_media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_user_mediaUpdateArgs>(args: SelectSubset<T, sys_user_mediaUpdateArgs<ExtArgs>>): Prisma__sys_user_mediaClient<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_user_medias.
     * @param {sys_user_mediaDeleteManyArgs} args - Arguments to filter Sys_user_medias to delete.
     * @example
     * // Delete a few Sys_user_medias
     * const { count } = await prisma.sys_user_media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_user_mediaDeleteManyArgs>(args?: SelectSubset<T, sys_user_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_user_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_user_medias
     * const sys_user_media = await prisma.sys_user_media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_user_mediaUpdateManyArgs>(args: SelectSubset<T, sys_user_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_user_media.
     * @param {sys_user_mediaUpsertArgs} args - Arguments to update or create a Sys_user_media.
     * @example
     * // Update or create a Sys_user_media
     * const sys_user_media = await prisma.sys_user_media.upsert({
     *   create: {
     *     // ... data to create a Sys_user_media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_user_media we want to update
     *   }
     * })
     */
    upsert<T extends sys_user_mediaUpsertArgs>(args: SelectSubset<T, sys_user_mediaUpsertArgs<ExtArgs>>): Prisma__sys_user_mediaClient<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_user_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_mediaCountArgs} args - Arguments to filter Sys_user_medias to count.
     * @example
     * // Count the number of Sys_user_medias
     * const count = await prisma.sys_user_media.count({
     *   where: {
     *     // ... the filter for the Sys_user_medias we want to count
     *   }
     * })
    **/
    count<T extends sys_user_mediaCountArgs>(
      args?: Subset<T, sys_user_mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_user_mediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_user_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_user_mediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_user_mediaAggregateArgs>(args: Subset<T, Sys_user_mediaAggregateArgs>): Prisma.PrismaPromise<GetSys_user_mediaAggregateType<T>>

    /**
     * Group by Sys_user_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_user_mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_user_mediaGroupByArgs['orderBy'] }
        : { orderBy?: sys_user_mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_user_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_user_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_user_media model
   */
  readonly fields: sys_user_mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_user_media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_user_mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends sys_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_userDefaultArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends sys_mediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_mediaDefaultArgs<ExtArgs>>): Prisma__sys_mediaClient<$Result.GetResult<Prisma.$sys_mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_user_media model
   */
  interface sys_user_mediaFieldRefs {
    readonly userId: FieldRef<"sys_user_media", 'String'>
    readonly mediaId: FieldRef<"sys_user_media", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_user_media findUnique
   */
  export type sys_user_mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_media to fetch.
     */
    where: sys_user_mediaWhereUniqueInput
  }

  /**
   * sys_user_media findUniqueOrThrow
   */
  export type sys_user_mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_media to fetch.
     */
    where: sys_user_mediaWhereUniqueInput
  }

  /**
   * sys_user_media findFirst
   */
  export type sys_user_mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_media to fetch.
     */
    where?: sys_user_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_medias to fetch.
     */
    orderBy?: sys_user_mediaOrderByWithRelationInput | sys_user_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_user_medias.
     */
    cursor?: sys_user_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_user_medias.
     */
    distinct?: Sys_user_mediaScalarFieldEnum | Sys_user_mediaScalarFieldEnum[]
  }

  /**
   * sys_user_media findFirstOrThrow
   */
  export type sys_user_mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_media to fetch.
     */
    where?: sys_user_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_medias to fetch.
     */
    orderBy?: sys_user_mediaOrderByWithRelationInput | sys_user_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_user_medias.
     */
    cursor?: sys_user_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_user_medias.
     */
    distinct?: Sys_user_mediaScalarFieldEnum | Sys_user_mediaScalarFieldEnum[]
  }

  /**
   * sys_user_media findMany
   */
  export type sys_user_mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * Filter, which sys_user_medias to fetch.
     */
    where?: sys_user_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_medias to fetch.
     */
    orderBy?: sys_user_mediaOrderByWithRelationInput | sys_user_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_user_medias.
     */
    cursor?: sys_user_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_medias.
     */
    skip?: number
    distinct?: Sys_user_mediaScalarFieldEnum | Sys_user_mediaScalarFieldEnum[]
  }

  /**
   * sys_user_media create
   */
  export type sys_user_mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_user_media.
     */
    data: XOR<sys_user_mediaCreateInput, sys_user_mediaUncheckedCreateInput>
  }

  /**
   * sys_user_media createMany
   */
  export type sys_user_mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_user_medias.
     */
    data: sys_user_mediaCreateManyInput | sys_user_mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_user_media update
   */
  export type sys_user_mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_user_media.
     */
    data: XOR<sys_user_mediaUpdateInput, sys_user_mediaUncheckedUpdateInput>
    /**
     * Choose, which sys_user_media to update.
     */
    where: sys_user_mediaWhereUniqueInput
  }

  /**
   * sys_user_media updateMany
   */
  export type sys_user_mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_user_medias.
     */
    data: XOR<sys_user_mediaUpdateManyMutationInput, sys_user_mediaUncheckedUpdateManyInput>
    /**
     * Filter which sys_user_medias to update
     */
    where?: sys_user_mediaWhereInput
    /**
     * Limit how many sys_user_medias to update.
     */
    limit?: number
  }

  /**
   * sys_user_media upsert
   */
  export type sys_user_mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_user_media to update in case it exists.
     */
    where: sys_user_mediaWhereUniqueInput
    /**
     * In case the sys_user_media found by the `where` argument doesn't exist, create a new sys_user_media with this data.
     */
    create: XOR<sys_user_mediaCreateInput, sys_user_mediaUncheckedCreateInput>
    /**
     * In case the sys_user_media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_user_mediaUpdateInput, sys_user_mediaUncheckedUpdateInput>
  }

  /**
   * sys_user_media delete
   */
  export type sys_user_mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
    /**
     * Filter which sys_user_media to delete.
     */
    where: sys_user_mediaWhereUniqueInput
  }

  /**
   * sys_user_media deleteMany
   */
  export type sys_user_mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_user_medias to delete
     */
    where?: sys_user_mediaWhereInput
    /**
     * Limit how many sys_user_medias to delete.
     */
    limit?: number
  }

  /**
   * sys_user_media without action
   */
  export type sys_user_mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user_media
     */
    select?: sys_user_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user_media
     */
    omit?: sys_user_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_user_mediaInclude<ExtArgs> | null
  }


  /**
   * Model blog_categories
   */

  export type AggregateBlog_categories = {
    _count: Blog_categoriesCountAggregateOutputType | null
    _min: Blog_categoriesMinAggregateOutputType | null
    _max: Blog_categoriesMaxAggregateOutputType | null
  }

  export type Blog_categoriesMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type Blog_categoriesMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type Blog_categoriesCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    name: number
    _all: number
  }


  export type Blog_categoriesMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type Blog_categoriesMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type Blog_categoriesCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    _all?: true
  }

  export type Blog_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_categories to aggregate.
     */
    where?: blog_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_categories to fetch.
     */
    orderBy?: blog_categoriesOrderByWithRelationInput | blog_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blog_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blog_categories
    **/
    _count?: true | Blog_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blog_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blog_categoriesMaxAggregateInputType
  }

  export type GetBlog_categoriesAggregateType<T extends Blog_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog_categories[P]>
      : GetScalarType<T[P], AggregateBlog_categories[P]>
  }




  export type blog_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_categoriesWhereInput
    orderBy?: blog_categoriesOrderByWithAggregationInput | blog_categoriesOrderByWithAggregationInput[]
    by: Blog_categoriesScalarFieldEnum[] | Blog_categoriesScalarFieldEnum
    having?: blog_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blog_categoriesCountAggregateInputType | true
    _min?: Blog_categoriesMinAggregateInputType
    _max?: Blog_categoriesMaxAggregateInputType
  }

  export type Blog_categoriesGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    name: string
    _count: Blog_categoriesCountAggregateOutputType | null
    _min: Blog_categoriesMinAggregateOutputType | null
    _max: Blog_categoriesMaxAggregateOutputType | null
  }

  type GetBlog_categoriesGroupByPayload<T extends blog_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blog_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blog_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blog_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Blog_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type blog_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    posts?: boolean | blog_categories$postsArgs<ExtArgs>
    _count?: boolean | Blog_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog_categories"]>



  export type blog_categoriesSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }

  export type blog_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "name", ExtArgs["result"]["blog_categories"]>
  export type blog_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | blog_categories$postsArgs<ExtArgs>
    _count?: boolean | Blog_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $blog_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blog_categories"
    objects: {
      posts: Prisma.$blog_postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      name: string
    }, ExtArgs["result"]["blog_categories"]>
    composites: {}
  }

  type blog_categoriesGetPayload<S extends boolean | null | undefined | blog_categoriesDefaultArgs> = $Result.GetResult<Prisma.$blog_categoriesPayload, S>

  type blog_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blog_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blog_categoriesCountAggregateInputType | true
    }

  export interface blog_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blog_categories'], meta: { name: 'blog_categories' } }
    /**
     * Find zero or one Blog_categories that matches the filter.
     * @param {blog_categoriesFindUniqueArgs} args - Arguments to find a Blog_categories
     * @example
     * // Get one Blog_categories
     * const blog_categories = await prisma.blog_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blog_categoriesFindUniqueArgs>(args: SelectSubset<T, blog_categoriesFindUniqueArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blog_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Blog_categories
     * @example
     * // Get one Blog_categories
     * const blog_categories = await prisma.blog_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blog_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, blog_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_categoriesFindFirstArgs} args - Arguments to find a Blog_categories
     * @example
     * // Get one Blog_categories
     * const blog_categories = await prisma.blog_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blog_categoriesFindFirstArgs>(args?: SelectSubset<T, blog_categoriesFindFirstArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_categoriesFindFirstOrThrowArgs} args - Arguments to find a Blog_categories
     * @example
     * // Get one Blog_categories
     * const blog_categories = await prisma.blog_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blog_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, blog_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blog_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blog_categories
     * const blog_categories = await prisma.blog_categories.findMany()
     * 
     * // Get first 10 Blog_categories
     * const blog_categories = await prisma.blog_categories.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const blog_categoriesWithUidOnly = await prisma.blog_categories.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends blog_categoriesFindManyArgs>(args?: SelectSubset<T, blog_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog_categories.
     * @param {blog_categoriesCreateArgs} args - Arguments to create a Blog_categories.
     * @example
     * // Create one Blog_categories
     * const Blog_categories = await prisma.blog_categories.create({
     *   data: {
     *     // ... data to create a Blog_categories
     *   }
     * })
     * 
     */
    create<T extends blog_categoriesCreateArgs>(args: SelectSubset<T, blog_categoriesCreateArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blog_categories.
     * @param {blog_categoriesCreateManyArgs} args - Arguments to create many Blog_categories.
     * @example
     * // Create many Blog_categories
     * const blog_categories = await prisma.blog_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blog_categoriesCreateManyArgs>(args?: SelectSubset<T, blog_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog_categories.
     * @param {blog_categoriesDeleteArgs} args - Arguments to delete one Blog_categories.
     * @example
     * // Delete one Blog_categories
     * const Blog_categories = await prisma.blog_categories.delete({
     *   where: {
     *     // ... filter to delete one Blog_categories
     *   }
     * })
     * 
     */
    delete<T extends blog_categoriesDeleteArgs>(args: SelectSubset<T, blog_categoriesDeleteArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog_categories.
     * @param {blog_categoriesUpdateArgs} args - Arguments to update one Blog_categories.
     * @example
     * // Update one Blog_categories
     * const blog_categories = await prisma.blog_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blog_categoriesUpdateArgs>(args: SelectSubset<T, blog_categoriesUpdateArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blog_categories.
     * @param {blog_categoriesDeleteManyArgs} args - Arguments to filter Blog_categories to delete.
     * @example
     * // Delete a few Blog_categories
     * const { count } = await prisma.blog_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blog_categoriesDeleteManyArgs>(args?: SelectSubset<T, blog_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blog_categories
     * const blog_categories = await prisma.blog_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blog_categoriesUpdateManyArgs>(args: SelectSubset<T, blog_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog_categories.
     * @param {blog_categoriesUpsertArgs} args - Arguments to update or create a Blog_categories.
     * @example
     * // Update or create a Blog_categories
     * const blog_categories = await prisma.blog_categories.upsert({
     *   create: {
     *     // ... data to create a Blog_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog_categories we want to update
     *   }
     * })
     */
    upsert<T extends blog_categoriesUpsertArgs>(args: SelectSubset<T, blog_categoriesUpsertArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blog_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_categoriesCountArgs} args - Arguments to filter Blog_categories to count.
     * @example
     * // Count the number of Blog_categories
     * const count = await prisma.blog_categories.count({
     *   where: {
     *     // ... the filter for the Blog_categories we want to count
     *   }
     * })
    **/
    count<T extends blog_categoriesCountArgs>(
      args?: Subset<T, blog_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blog_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blog_categoriesAggregateArgs>(args: Subset<T, Blog_categoriesAggregateArgs>): Prisma.PrismaPromise<GetBlog_categoriesAggregateType<T>>

    /**
     * Group by Blog_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blog_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blog_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: blog_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blog_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlog_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blog_categories model
   */
  readonly fields: blog_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blog_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends blog_categories$postsArgs<ExtArgs> = {}>(args?: Subset<T, blog_categories$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blog_categories model
   */
  interface blog_categoriesFieldRefs {
    readonly uid: FieldRef<"blog_categories", 'String'>
    readonly createdAt: FieldRef<"blog_categories", 'DateTime'>
    readonly updatedAt: FieldRef<"blog_categories", 'DateTime'>
    readonly name: FieldRef<"blog_categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blog_categories findUnique
   */
  export type blog_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which blog_categories to fetch.
     */
    where: blog_categoriesWhereUniqueInput
  }

  /**
   * blog_categories findUniqueOrThrow
   */
  export type blog_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which blog_categories to fetch.
     */
    where: blog_categoriesWhereUniqueInput
  }

  /**
   * blog_categories findFirst
   */
  export type blog_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which blog_categories to fetch.
     */
    where?: blog_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_categories to fetch.
     */
    orderBy?: blog_categoriesOrderByWithRelationInput | blog_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_categories.
     */
    cursor?: blog_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_categories.
     */
    distinct?: Blog_categoriesScalarFieldEnum | Blog_categoriesScalarFieldEnum[]
  }

  /**
   * blog_categories findFirstOrThrow
   */
  export type blog_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which blog_categories to fetch.
     */
    where?: blog_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_categories to fetch.
     */
    orderBy?: blog_categoriesOrderByWithRelationInput | blog_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_categories.
     */
    cursor?: blog_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_categories.
     */
    distinct?: Blog_categoriesScalarFieldEnum | Blog_categoriesScalarFieldEnum[]
  }

  /**
   * blog_categories findMany
   */
  export type blog_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which blog_categories to fetch.
     */
    where?: blog_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_categories to fetch.
     */
    orderBy?: blog_categoriesOrderByWithRelationInput | blog_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blog_categories.
     */
    cursor?: blog_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_categories.
     */
    skip?: number
    distinct?: Blog_categoriesScalarFieldEnum | Blog_categoriesScalarFieldEnum[]
  }

  /**
   * blog_categories create
   */
  export type blog_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a blog_categories.
     */
    data: XOR<blog_categoriesCreateInput, blog_categoriesUncheckedCreateInput>
  }

  /**
   * blog_categories createMany
   */
  export type blog_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blog_categories.
     */
    data: blog_categoriesCreateManyInput | blog_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blog_categories update
   */
  export type blog_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a blog_categories.
     */
    data: XOR<blog_categoriesUpdateInput, blog_categoriesUncheckedUpdateInput>
    /**
     * Choose, which blog_categories to update.
     */
    where: blog_categoriesWhereUniqueInput
  }

  /**
   * blog_categories updateMany
   */
  export type blog_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blog_categories.
     */
    data: XOR<blog_categoriesUpdateManyMutationInput, blog_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which blog_categories to update
     */
    where?: blog_categoriesWhereInput
    /**
     * Limit how many blog_categories to update.
     */
    limit?: number
  }

  /**
   * blog_categories upsert
   */
  export type blog_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the blog_categories to update in case it exists.
     */
    where: blog_categoriesWhereUniqueInput
    /**
     * In case the blog_categories found by the `where` argument doesn't exist, create a new blog_categories with this data.
     */
    create: XOR<blog_categoriesCreateInput, blog_categoriesUncheckedCreateInput>
    /**
     * In case the blog_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blog_categoriesUpdateInput, blog_categoriesUncheckedUpdateInput>
  }

  /**
   * blog_categories delete
   */
  export type blog_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    /**
     * Filter which blog_categories to delete.
     */
    where: blog_categoriesWhereUniqueInput
  }

  /**
   * blog_categories deleteMany
   */
  export type blog_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_categories to delete
     */
    where?: blog_categoriesWhereInput
    /**
     * Limit how many blog_categories to delete.
     */
    limit?: number
  }

  /**
   * blog_categories.posts
   */
  export type blog_categories$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    where?: blog_postsWhereInput
    orderBy?: blog_postsOrderByWithRelationInput | blog_postsOrderByWithRelationInput[]
    cursor?: blog_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Blog_postsScalarFieldEnum | Blog_postsScalarFieldEnum[]
  }

  /**
   * blog_categories without action
   */
  export type blog_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model blog_posts
   */

  export type AggregateBlog_posts = {
    _count: Blog_postsCountAggregateOutputType | null
    _min: Blog_postsMinAggregateOutputType | null
    _max: Blog_postsMaxAggregateOutputType | null
  }

  export type Blog_postsMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    status: boolean | null
    userId: string | null
    categoriesId: string | null
  }

  export type Blog_postsMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    status: boolean | null
    userId: string | null
    categoriesId: string | null
  }

  export type Blog_postsCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    title: number
    content: number
    status: number
    userId: number
    categoriesId: number
    _all: number
  }


  export type Blog_postsMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    status?: true
    userId?: true
    categoriesId?: true
  }

  export type Blog_postsMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    status?: true
    userId?: true
    categoriesId?: true
  }

  export type Blog_postsCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    status?: true
    userId?: true
    categoriesId?: true
    _all?: true
  }

  export type Blog_postsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_posts to aggregate.
     */
    where?: blog_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_posts to fetch.
     */
    orderBy?: blog_postsOrderByWithRelationInput | blog_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blog_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blog_posts
    **/
    _count?: true | Blog_postsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blog_postsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blog_postsMaxAggregateInputType
  }

  export type GetBlog_postsAggregateType<T extends Blog_postsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog_posts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog_posts[P]>
      : GetScalarType<T[P], AggregateBlog_posts[P]>
  }




  export type blog_postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_postsWhereInput
    orderBy?: blog_postsOrderByWithAggregationInput | blog_postsOrderByWithAggregationInput[]
    by: Blog_postsScalarFieldEnum[] | Blog_postsScalarFieldEnum
    having?: blog_postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blog_postsCountAggregateInputType | true
    _min?: Blog_postsMinAggregateInputType
    _max?: Blog_postsMaxAggregateInputType
  }

  export type Blog_postsGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    title: string
    content: string
    status: boolean
    userId: string
    categoriesId: string | null
    _count: Blog_postsCountAggregateOutputType | null
    _min: Blog_postsMinAggregateOutputType | null
    _max: Blog_postsMaxAggregateOutputType | null
  }

  type GetBlog_postsGroupByPayload<T extends blog_postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blog_postsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blog_postsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blog_postsGroupByOutputType[P]>
            : GetScalarType<T[P], Blog_postsGroupByOutputType[P]>
        }
      >
    >


  export type blog_postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    userId?: boolean
    categoriesId?: boolean
    categories?: boolean | blog_posts$categoriesArgs<ExtArgs>
    user?: boolean | sys_userDefaultArgs<ExtArgs>
    tags?: boolean | blog_posts$tagsArgs<ExtArgs>
    comments?: boolean | blog_posts$commentsArgs<ExtArgs>
    _count?: boolean | Blog_postsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog_posts"]>



  export type blog_postsSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    userId?: boolean
    categoriesId?: boolean
  }

  export type blog_postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "title" | "content" | "status" | "userId" | "categoriesId", ExtArgs["result"]["blog_posts"]>
  export type blog_postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | blog_posts$categoriesArgs<ExtArgs>
    user?: boolean | sys_userDefaultArgs<ExtArgs>
    tags?: boolean | blog_posts$tagsArgs<ExtArgs>
    comments?: boolean | blog_posts$commentsArgs<ExtArgs>
    _count?: boolean | Blog_postsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $blog_postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blog_posts"
    objects: {
      categories: Prisma.$blog_categoriesPayload<ExtArgs> | null
      user: Prisma.$sys_userPayload<ExtArgs>
      tags: Prisma.$blog_posts_on_tagsPayload<ExtArgs>[]
      comments: Prisma.$blog_commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      title: string
      content: string
      status: boolean
      userId: string
      categoriesId: string | null
    }, ExtArgs["result"]["blog_posts"]>
    composites: {}
  }

  type blog_postsGetPayload<S extends boolean | null | undefined | blog_postsDefaultArgs> = $Result.GetResult<Prisma.$blog_postsPayload, S>

  type blog_postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blog_postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blog_postsCountAggregateInputType | true
    }

  export interface blog_postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blog_posts'], meta: { name: 'blog_posts' } }
    /**
     * Find zero or one Blog_posts that matches the filter.
     * @param {blog_postsFindUniqueArgs} args - Arguments to find a Blog_posts
     * @example
     * // Get one Blog_posts
     * const blog_posts = await prisma.blog_posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blog_postsFindUniqueArgs>(args: SelectSubset<T, blog_postsFindUniqueArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog_posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blog_postsFindUniqueOrThrowArgs} args - Arguments to find a Blog_posts
     * @example
     * // Get one Blog_posts
     * const blog_posts = await prisma.blog_posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blog_postsFindUniqueOrThrowArgs>(args: SelectSubset<T, blog_postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_postsFindFirstArgs} args - Arguments to find a Blog_posts
     * @example
     * // Get one Blog_posts
     * const blog_posts = await prisma.blog_posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blog_postsFindFirstArgs>(args?: SelectSubset<T, blog_postsFindFirstArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_postsFindFirstOrThrowArgs} args - Arguments to find a Blog_posts
     * @example
     * // Get one Blog_posts
     * const blog_posts = await prisma.blog_posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blog_postsFindFirstOrThrowArgs>(args?: SelectSubset<T, blog_postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blog_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blog_posts
     * const blog_posts = await prisma.blog_posts.findMany()
     * 
     * // Get first 10 Blog_posts
     * const blog_posts = await prisma.blog_posts.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const blog_postsWithUidOnly = await prisma.blog_posts.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends blog_postsFindManyArgs>(args?: SelectSubset<T, blog_postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog_posts.
     * @param {blog_postsCreateArgs} args - Arguments to create a Blog_posts.
     * @example
     * // Create one Blog_posts
     * const Blog_posts = await prisma.blog_posts.create({
     *   data: {
     *     // ... data to create a Blog_posts
     *   }
     * })
     * 
     */
    create<T extends blog_postsCreateArgs>(args: SelectSubset<T, blog_postsCreateArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blog_posts.
     * @param {blog_postsCreateManyArgs} args - Arguments to create many Blog_posts.
     * @example
     * // Create many Blog_posts
     * const blog_posts = await prisma.blog_posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blog_postsCreateManyArgs>(args?: SelectSubset<T, blog_postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog_posts.
     * @param {blog_postsDeleteArgs} args - Arguments to delete one Blog_posts.
     * @example
     * // Delete one Blog_posts
     * const Blog_posts = await prisma.blog_posts.delete({
     *   where: {
     *     // ... filter to delete one Blog_posts
     *   }
     * })
     * 
     */
    delete<T extends blog_postsDeleteArgs>(args: SelectSubset<T, blog_postsDeleteArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog_posts.
     * @param {blog_postsUpdateArgs} args - Arguments to update one Blog_posts.
     * @example
     * // Update one Blog_posts
     * const blog_posts = await prisma.blog_posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blog_postsUpdateArgs>(args: SelectSubset<T, blog_postsUpdateArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blog_posts.
     * @param {blog_postsDeleteManyArgs} args - Arguments to filter Blog_posts to delete.
     * @example
     * // Delete a few Blog_posts
     * const { count } = await prisma.blog_posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blog_postsDeleteManyArgs>(args?: SelectSubset<T, blog_postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blog_posts
     * const blog_posts = await prisma.blog_posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blog_postsUpdateManyArgs>(args: SelectSubset<T, blog_postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog_posts.
     * @param {blog_postsUpsertArgs} args - Arguments to update or create a Blog_posts.
     * @example
     * // Update or create a Blog_posts
     * const blog_posts = await prisma.blog_posts.upsert({
     *   create: {
     *     // ... data to create a Blog_posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog_posts we want to update
     *   }
     * })
     */
    upsert<T extends blog_postsUpsertArgs>(args: SelectSubset<T, blog_postsUpsertArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blog_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_postsCountArgs} args - Arguments to filter Blog_posts to count.
     * @example
     * // Count the number of Blog_posts
     * const count = await prisma.blog_posts.count({
     *   where: {
     *     // ... the filter for the Blog_posts we want to count
     *   }
     * })
    **/
    count<T extends blog_postsCountArgs>(
      args?: Subset<T, blog_postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blog_postsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_postsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blog_postsAggregateArgs>(args: Subset<T, Blog_postsAggregateArgs>): Prisma.PrismaPromise<GetBlog_postsAggregateType<T>>

    /**
     * Group by Blog_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blog_postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blog_postsGroupByArgs['orderBy'] }
        : { orderBy?: blog_postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blog_postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlog_postsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blog_posts model
   */
  readonly fields: blog_postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog_posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blog_postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends blog_posts$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, blog_posts$categoriesArgs<ExtArgs>>): Prisma__blog_categoriesClient<$Result.GetResult<Prisma.$blog_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends sys_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_userDefaultArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends blog_posts$tagsArgs<ExtArgs> = {}>(args?: Subset<T, blog_posts$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends blog_posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, blog_posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blog_posts model
   */
  interface blog_postsFieldRefs {
    readonly uid: FieldRef<"blog_posts", 'String'>
    readonly createdAt: FieldRef<"blog_posts", 'DateTime'>
    readonly updatedAt: FieldRef<"blog_posts", 'DateTime'>
    readonly title: FieldRef<"blog_posts", 'String'>
    readonly content: FieldRef<"blog_posts", 'String'>
    readonly status: FieldRef<"blog_posts", 'Boolean'>
    readonly userId: FieldRef<"blog_posts", 'String'>
    readonly categoriesId: FieldRef<"blog_posts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blog_posts findUnique
   */
  export type blog_postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts to fetch.
     */
    where: blog_postsWhereUniqueInput
  }

  /**
   * blog_posts findUniqueOrThrow
   */
  export type blog_postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts to fetch.
     */
    where: blog_postsWhereUniqueInput
  }

  /**
   * blog_posts findFirst
   */
  export type blog_postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts to fetch.
     */
    where?: blog_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_posts to fetch.
     */
    orderBy?: blog_postsOrderByWithRelationInput | blog_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_posts.
     */
    cursor?: blog_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_posts.
     */
    distinct?: Blog_postsScalarFieldEnum | Blog_postsScalarFieldEnum[]
  }

  /**
   * blog_posts findFirstOrThrow
   */
  export type blog_postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts to fetch.
     */
    where?: blog_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_posts to fetch.
     */
    orderBy?: blog_postsOrderByWithRelationInput | blog_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_posts.
     */
    cursor?: blog_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_posts.
     */
    distinct?: Blog_postsScalarFieldEnum | Blog_postsScalarFieldEnum[]
  }

  /**
   * blog_posts findMany
   */
  export type blog_postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts to fetch.
     */
    where?: blog_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_posts to fetch.
     */
    orderBy?: blog_postsOrderByWithRelationInput | blog_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blog_posts.
     */
    cursor?: blog_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_posts.
     */
    skip?: number
    distinct?: Blog_postsScalarFieldEnum | Blog_postsScalarFieldEnum[]
  }

  /**
   * blog_posts create
   */
  export type blog_postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * The data needed to create a blog_posts.
     */
    data: XOR<blog_postsCreateInput, blog_postsUncheckedCreateInput>
  }

  /**
   * blog_posts createMany
   */
  export type blog_postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blog_posts.
     */
    data: blog_postsCreateManyInput | blog_postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blog_posts update
   */
  export type blog_postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * The data needed to update a blog_posts.
     */
    data: XOR<blog_postsUpdateInput, blog_postsUncheckedUpdateInput>
    /**
     * Choose, which blog_posts to update.
     */
    where: blog_postsWhereUniqueInput
  }

  /**
   * blog_posts updateMany
   */
  export type blog_postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blog_posts.
     */
    data: XOR<blog_postsUpdateManyMutationInput, blog_postsUncheckedUpdateManyInput>
    /**
     * Filter which blog_posts to update
     */
    where?: blog_postsWhereInput
    /**
     * Limit how many blog_posts to update.
     */
    limit?: number
  }

  /**
   * blog_posts upsert
   */
  export type blog_postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * The filter to search for the blog_posts to update in case it exists.
     */
    where: blog_postsWhereUniqueInput
    /**
     * In case the blog_posts found by the `where` argument doesn't exist, create a new blog_posts with this data.
     */
    create: XOR<blog_postsCreateInput, blog_postsUncheckedCreateInput>
    /**
     * In case the blog_posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blog_postsUpdateInput, blog_postsUncheckedUpdateInput>
  }

  /**
   * blog_posts delete
   */
  export type blog_postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
    /**
     * Filter which blog_posts to delete.
     */
    where: blog_postsWhereUniqueInput
  }

  /**
   * blog_posts deleteMany
   */
  export type blog_postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_posts to delete
     */
    where?: blog_postsWhereInput
    /**
     * Limit how many blog_posts to delete.
     */
    limit?: number
  }

  /**
   * blog_posts.categories
   */
  export type blog_posts$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_categories
     */
    select?: blog_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_categories
     */
    omit?: blog_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_categoriesInclude<ExtArgs> | null
    where?: blog_categoriesWhereInput
  }

  /**
   * blog_posts.tags
   */
  export type blog_posts$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    where?: blog_posts_on_tagsWhereInput
    orderBy?: blog_posts_on_tagsOrderByWithRelationInput | blog_posts_on_tagsOrderByWithRelationInput[]
    cursor?: blog_posts_on_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Blog_posts_on_tagsScalarFieldEnum | Blog_posts_on_tagsScalarFieldEnum[]
  }

  /**
   * blog_posts.comments
   */
  export type blog_posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    where?: blog_commentsWhereInput
    orderBy?: blog_commentsOrderByWithRelationInput | blog_commentsOrderByWithRelationInput[]
    cursor?: blog_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Blog_commentsScalarFieldEnum | Blog_commentsScalarFieldEnum[]
  }

  /**
   * blog_posts without action
   */
  export type blog_postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts
     */
    select?: blog_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts
     */
    omit?: blog_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_postsInclude<ExtArgs> | null
  }


  /**
   * Model blog_posts_on_tags
   */

  export type AggregateBlog_posts_on_tags = {
    _count: Blog_posts_on_tagsCountAggregateOutputType | null
    _min: Blog_posts_on_tagsMinAggregateOutputType | null
    _max: Blog_posts_on_tagsMaxAggregateOutputType | null
  }

  export type Blog_posts_on_tagsMinAggregateOutputType = {
    postsId: string | null
    tagId: string | null
  }

  export type Blog_posts_on_tagsMaxAggregateOutputType = {
    postsId: string | null
    tagId: string | null
  }

  export type Blog_posts_on_tagsCountAggregateOutputType = {
    postsId: number
    tagId: number
    _all: number
  }


  export type Blog_posts_on_tagsMinAggregateInputType = {
    postsId?: true
    tagId?: true
  }

  export type Blog_posts_on_tagsMaxAggregateInputType = {
    postsId?: true
    tagId?: true
  }

  export type Blog_posts_on_tagsCountAggregateInputType = {
    postsId?: true
    tagId?: true
    _all?: true
  }

  export type Blog_posts_on_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_posts_on_tags to aggregate.
     */
    where?: blog_posts_on_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_posts_on_tags to fetch.
     */
    orderBy?: blog_posts_on_tagsOrderByWithRelationInput | blog_posts_on_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blog_posts_on_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_posts_on_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_posts_on_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blog_posts_on_tags
    **/
    _count?: true | Blog_posts_on_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blog_posts_on_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blog_posts_on_tagsMaxAggregateInputType
  }

  export type GetBlog_posts_on_tagsAggregateType<T extends Blog_posts_on_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog_posts_on_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog_posts_on_tags[P]>
      : GetScalarType<T[P], AggregateBlog_posts_on_tags[P]>
  }




  export type blog_posts_on_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_posts_on_tagsWhereInput
    orderBy?: blog_posts_on_tagsOrderByWithAggregationInput | blog_posts_on_tagsOrderByWithAggregationInput[]
    by: Blog_posts_on_tagsScalarFieldEnum[] | Blog_posts_on_tagsScalarFieldEnum
    having?: blog_posts_on_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blog_posts_on_tagsCountAggregateInputType | true
    _min?: Blog_posts_on_tagsMinAggregateInputType
    _max?: Blog_posts_on_tagsMaxAggregateInputType
  }

  export type Blog_posts_on_tagsGroupByOutputType = {
    postsId: string
    tagId: string
    _count: Blog_posts_on_tagsCountAggregateOutputType | null
    _min: Blog_posts_on_tagsMinAggregateOutputType | null
    _max: Blog_posts_on_tagsMaxAggregateOutputType | null
  }

  type GetBlog_posts_on_tagsGroupByPayload<T extends blog_posts_on_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blog_posts_on_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blog_posts_on_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blog_posts_on_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Blog_posts_on_tagsGroupByOutputType[P]>
        }
      >
    >


  export type blog_posts_on_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postsId?: boolean
    tagId?: boolean
    posts?: boolean | blog_postsDefaultArgs<ExtArgs>
    tag?: boolean | blog_tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog_posts_on_tags"]>



  export type blog_posts_on_tagsSelectScalar = {
    postsId?: boolean
    tagId?: boolean
  }

  export type blog_posts_on_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postsId" | "tagId", ExtArgs["result"]["blog_posts_on_tags"]>
  export type blog_posts_on_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | blog_postsDefaultArgs<ExtArgs>
    tag?: boolean | blog_tagDefaultArgs<ExtArgs>
  }

  export type $blog_posts_on_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blog_posts_on_tags"
    objects: {
      posts: Prisma.$blog_postsPayload<ExtArgs>
      tag: Prisma.$blog_tagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postsId: string
      tagId: string
    }, ExtArgs["result"]["blog_posts_on_tags"]>
    composites: {}
  }

  type blog_posts_on_tagsGetPayload<S extends boolean | null | undefined | blog_posts_on_tagsDefaultArgs> = $Result.GetResult<Prisma.$blog_posts_on_tagsPayload, S>

  type blog_posts_on_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blog_posts_on_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blog_posts_on_tagsCountAggregateInputType | true
    }

  export interface blog_posts_on_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blog_posts_on_tags'], meta: { name: 'blog_posts_on_tags' } }
    /**
     * Find zero or one Blog_posts_on_tags that matches the filter.
     * @param {blog_posts_on_tagsFindUniqueArgs} args - Arguments to find a Blog_posts_on_tags
     * @example
     * // Get one Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blog_posts_on_tagsFindUniqueArgs>(args: SelectSubset<T, blog_posts_on_tagsFindUniqueArgs<ExtArgs>>): Prisma__blog_posts_on_tagsClient<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog_posts_on_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blog_posts_on_tagsFindUniqueOrThrowArgs} args - Arguments to find a Blog_posts_on_tags
     * @example
     * // Get one Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blog_posts_on_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, blog_posts_on_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blog_posts_on_tagsClient<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_posts_on_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_posts_on_tagsFindFirstArgs} args - Arguments to find a Blog_posts_on_tags
     * @example
     * // Get one Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blog_posts_on_tagsFindFirstArgs>(args?: SelectSubset<T, blog_posts_on_tagsFindFirstArgs<ExtArgs>>): Prisma__blog_posts_on_tagsClient<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_posts_on_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_posts_on_tagsFindFirstOrThrowArgs} args - Arguments to find a Blog_posts_on_tags
     * @example
     * // Get one Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blog_posts_on_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, blog_posts_on_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blog_posts_on_tagsClient<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blog_posts_on_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_posts_on_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.findMany()
     * 
     * // Get first 10 Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.findMany({ take: 10 })
     * 
     * // Only select the `postsId`
     * const blog_posts_on_tagsWithPostsIdOnly = await prisma.blog_posts_on_tags.findMany({ select: { postsId: true } })
     * 
     */
    findMany<T extends blog_posts_on_tagsFindManyArgs>(args?: SelectSubset<T, blog_posts_on_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog_posts_on_tags.
     * @param {blog_posts_on_tagsCreateArgs} args - Arguments to create a Blog_posts_on_tags.
     * @example
     * // Create one Blog_posts_on_tags
     * const Blog_posts_on_tags = await prisma.blog_posts_on_tags.create({
     *   data: {
     *     // ... data to create a Blog_posts_on_tags
     *   }
     * })
     * 
     */
    create<T extends blog_posts_on_tagsCreateArgs>(args: SelectSubset<T, blog_posts_on_tagsCreateArgs<ExtArgs>>): Prisma__blog_posts_on_tagsClient<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blog_posts_on_tags.
     * @param {blog_posts_on_tagsCreateManyArgs} args - Arguments to create many Blog_posts_on_tags.
     * @example
     * // Create many Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blog_posts_on_tagsCreateManyArgs>(args?: SelectSubset<T, blog_posts_on_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog_posts_on_tags.
     * @param {blog_posts_on_tagsDeleteArgs} args - Arguments to delete one Blog_posts_on_tags.
     * @example
     * // Delete one Blog_posts_on_tags
     * const Blog_posts_on_tags = await prisma.blog_posts_on_tags.delete({
     *   where: {
     *     // ... filter to delete one Blog_posts_on_tags
     *   }
     * })
     * 
     */
    delete<T extends blog_posts_on_tagsDeleteArgs>(args: SelectSubset<T, blog_posts_on_tagsDeleteArgs<ExtArgs>>): Prisma__blog_posts_on_tagsClient<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog_posts_on_tags.
     * @param {blog_posts_on_tagsUpdateArgs} args - Arguments to update one Blog_posts_on_tags.
     * @example
     * // Update one Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blog_posts_on_tagsUpdateArgs>(args: SelectSubset<T, blog_posts_on_tagsUpdateArgs<ExtArgs>>): Prisma__blog_posts_on_tagsClient<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blog_posts_on_tags.
     * @param {blog_posts_on_tagsDeleteManyArgs} args - Arguments to filter Blog_posts_on_tags to delete.
     * @example
     * // Delete a few Blog_posts_on_tags
     * const { count } = await prisma.blog_posts_on_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blog_posts_on_tagsDeleteManyArgs>(args?: SelectSubset<T, blog_posts_on_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_posts_on_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_posts_on_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blog_posts_on_tagsUpdateManyArgs>(args: SelectSubset<T, blog_posts_on_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog_posts_on_tags.
     * @param {blog_posts_on_tagsUpsertArgs} args - Arguments to update or create a Blog_posts_on_tags.
     * @example
     * // Update or create a Blog_posts_on_tags
     * const blog_posts_on_tags = await prisma.blog_posts_on_tags.upsert({
     *   create: {
     *     // ... data to create a Blog_posts_on_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog_posts_on_tags we want to update
     *   }
     * })
     */
    upsert<T extends blog_posts_on_tagsUpsertArgs>(args: SelectSubset<T, blog_posts_on_tagsUpsertArgs<ExtArgs>>): Prisma__blog_posts_on_tagsClient<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blog_posts_on_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_posts_on_tagsCountArgs} args - Arguments to filter Blog_posts_on_tags to count.
     * @example
     * // Count the number of Blog_posts_on_tags
     * const count = await prisma.blog_posts_on_tags.count({
     *   where: {
     *     // ... the filter for the Blog_posts_on_tags we want to count
     *   }
     * })
    **/
    count<T extends blog_posts_on_tagsCountArgs>(
      args?: Subset<T, blog_posts_on_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blog_posts_on_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog_posts_on_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_posts_on_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blog_posts_on_tagsAggregateArgs>(args: Subset<T, Blog_posts_on_tagsAggregateArgs>): Prisma.PrismaPromise<GetBlog_posts_on_tagsAggregateType<T>>

    /**
     * Group by Blog_posts_on_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_posts_on_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blog_posts_on_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blog_posts_on_tagsGroupByArgs['orderBy'] }
        : { orderBy?: blog_posts_on_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blog_posts_on_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlog_posts_on_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blog_posts_on_tags model
   */
  readonly fields: blog_posts_on_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog_posts_on_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blog_posts_on_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends blog_postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blog_postsDefaultArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends blog_tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blog_tagDefaultArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blog_posts_on_tags model
   */
  interface blog_posts_on_tagsFieldRefs {
    readonly postsId: FieldRef<"blog_posts_on_tags", 'String'>
    readonly tagId: FieldRef<"blog_posts_on_tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blog_posts_on_tags findUnique
   */
  export type blog_posts_on_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts_on_tags to fetch.
     */
    where: blog_posts_on_tagsWhereUniqueInput
  }

  /**
   * blog_posts_on_tags findUniqueOrThrow
   */
  export type blog_posts_on_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts_on_tags to fetch.
     */
    where: blog_posts_on_tagsWhereUniqueInput
  }

  /**
   * blog_posts_on_tags findFirst
   */
  export type blog_posts_on_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts_on_tags to fetch.
     */
    where?: blog_posts_on_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_posts_on_tags to fetch.
     */
    orderBy?: blog_posts_on_tagsOrderByWithRelationInput | blog_posts_on_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_posts_on_tags.
     */
    cursor?: blog_posts_on_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_posts_on_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_posts_on_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_posts_on_tags.
     */
    distinct?: Blog_posts_on_tagsScalarFieldEnum | Blog_posts_on_tagsScalarFieldEnum[]
  }

  /**
   * blog_posts_on_tags findFirstOrThrow
   */
  export type blog_posts_on_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts_on_tags to fetch.
     */
    where?: blog_posts_on_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_posts_on_tags to fetch.
     */
    orderBy?: blog_posts_on_tagsOrderByWithRelationInput | blog_posts_on_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_posts_on_tags.
     */
    cursor?: blog_posts_on_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_posts_on_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_posts_on_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_posts_on_tags.
     */
    distinct?: Blog_posts_on_tagsScalarFieldEnum | Blog_posts_on_tagsScalarFieldEnum[]
  }

  /**
   * blog_posts_on_tags findMany
   */
  export type blog_posts_on_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * Filter, which blog_posts_on_tags to fetch.
     */
    where?: blog_posts_on_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_posts_on_tags to fetch.
     */
    orderBy?: blog_posts_on_tagsOrderByWithRelationInput | blog_posts_on_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blog_posts_on_tags.
     */
    cursor?: blog_posts_on_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_posts_on_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_posts_on_tags.
     */
    skip?: number
    distinct?: Blog_posts_on_tagsScalarFieldEnum | Blog_posts_on_tagsScalarFieldEnum[]
  }

  /**
   * blog_posts_on_tags create
   */
  export type blog_posts_on_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a blog_posts_on_tags.
     */
    data: XOR<blog_posts_on_tagsCreateInput, blog_posts_on_tagsUncheckedCreateInput>
  }

  /**
   * blog_posts_on_tags createMany
   */
  export type blog_posts_on_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blog_posts_on_tags.
     */
    data: blog_posts_on_tagsCreateManyInput | blog_posts_on_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blog_posts_on_tags update
   */
  export type blog_posts_on_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a blog_posts_on_tags.
     */
    data: XOR<blog_posts_on_tagsUpdateInput, blog_posts_on_tagsUncheckedUpdateInput>
    /**
     * Choose, which blog_posts_on_tags to update.
     */
    where: blog_posts_on_tagsWhereUniqueInput
  }

  /**
   * blog_posts_on_tags updateMany
   */
  export type blog_posts_on_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blog_posts_on_tags.
     */
    data: XOR<blog_posts_on_tagsUpdateManyMutationInput, blog_posts_on_tagsUncheckedUpdateManyInput>
    /**
     * Filter which blog_posts_on_tags to update
     */
    where?: blog_posts_on_tagsWhereInput
    /**
     * Limit how many blog_posts_on_tags to update.
     */
    limit?: number
  }

  /**
   * blog_posts_on_tags upsert
   */
  export type blog_posts_on_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the blog_posts_on_tags to update in case it exists.
     */
    where: blog_posts_on_tagsWhereUniqueInput
    /**
     * In case the blog_posts_on_tags found by the `where` argument doesn't exist, create a new blog_posts_on_tags with this data.
     */
    create: XOR<blog_posts_on_tagsCreateInput, blog_posts_on_tagsUncheckedCreateInput>
    /**
     * In case the blog_posts_on_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blog_posts_on_tagsUpdateInput, blog_posts_on_tagsUncheckedUpdateInput>
  }

  /**
   * blog_posts_on_tags delete
   */
  export type blog_posts_on_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    /**
     * Filter which blog_posts_on_tags to delete.
     */
    where: blog_posts_on_tagsWhereUniqueInput
  }

  /**
   * blog_posts_on_tags deleteMany
   */
  export type blog_posts_on_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_posts_on_tags to delete
     */
    where?: blog_posts_on_tagsWhereInput
    /**
     * Limit how many blog_posts_on_tags to delete.
     */
    limit?: number
  }

  /**
   * blog_posts_on_tags without action
   */
  export type blog_posts_on_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
  }


  /**
   * Model blog_tag
   */

  export type AggregateBlog_tag = {
    _count: Blog_tagCountAggregateOutputType | null
    _min: Blog_tagMinAggregateOutputType | null
    _max: Blog_tagMaxAggregateOutputType | null
  }

  export type Blog_tagMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type Blog_tagMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type Blog_tagCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    name: number
    _all: number
  }


  export type Blog_tagMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type Blog_tagMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type Blog_tagCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    _all?: true
  }

  export type Blog_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_tag to aggregate.
     */
    where?: blog_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_tags to fetch.
     */
    orderBy?: blog_tagOrderByWithRelationInput | blog_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blog_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blog_tags
    **/
    _count?: true | Blog_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blog_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blog_tagMaxAggregateInputType
  }

  export type GetBlog_tagAggregateType<T extends Blog_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog_tag[P]>
      : GetScalarType<T[P], AggregateBlog_tag[P]>
  }




  export type blog_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_tagWhereInput
    orderBy?: blog_tagOrderByWithAggregationInput | blog_tagOrderByWithAggregationInput[]
    by: Blog_tagScalarFieldEnum[] | Blog_tagScalarFieldEnum
    having?: blog_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blog_tagCountAggregateInputType | true
    _min?: Blog_tagMinAggregateInputType
    _max?: Blog_tagMaxAggregateInputType
  }

  export type Blog_tagGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    name: string
    _count: Blog_tagCountAggregateOutputType | null
    _min: Blog_tagMinAggregateOutputType | null
    _max: Blog_tagMaxAggregateOutputType | null
  }

  type GetBlog_tagGroupByPayload<T extends blog_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blog_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blog_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blog_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Blog_tagGroupByOutputType[P]>
        }
      >
    >


  export type blog_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    blogs?: boolean | blog_tag$blogsArgs<ExtArgs>
    _count?: boolean | Blog_tagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog_tag"]>



  export type blog_tagSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }

  export type blog_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "name", ExtArgs["result"]["blog_tag"]>
  export type blog_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | blog_tag$blogsArgs<ExtArgs>
    _count?: boolean | Blog_tagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $blog_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blog_tag"
    objects: {
      blogs: Prisma.$blog_posts_on_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      name: string
    }, ExtArgs["result"]["blog_tag"]>
    composites: {}
  }

  type blog_tagGetPayload<S extends boolean | null | undefined | blog_tagDefaultArgs> = $Result.GetResult<Prisma.$blog_tagPayload, S>

  type blog_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blog_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blog_tagCountAggregateInputType | true
    }

  export interface blog_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blog_tag'], meta: { name: 'blog_tag' } }
    /**
     * Find zero or one Blog_tag that matches the filter.
     * @param {blog_tagFindUniqueArgs} args - Arguments to find a Blog_tag
     * @example
     * // Get one Blog_tag
     * const blog_tag = await prisma.blog_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blog_tagFindUniqueArgs>(args: SelectSubset<T, blog_tagFindUniqueArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blog_tagFindUniqueOrThrowArgs} args - Arguments to find a Blog_tag
     * @example
     * // Get one Blog_tag
     * const blog_tag = await prisma.blog_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blog_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, blog_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_tagFindFirstArgs} args - Arguments to find a Blog_tag
     * @example
     * // Get one Blog_tag
     * const blog_tag = await prisma.blog_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blog_tagFindFirstArgs>(args?: SelectSubset<T, blog_tagFindFirstArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_tagFindFirstOrThrowArgs} args - Arguments to find a Blog_tag
     * @example
     * // Get one Blog_tag
     * const blog_tag = await prisma.blog_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blog_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, blog_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blog_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blog_tags
     * const blog_tags = await prisma.blog_tag.findMany()
     * 
     * // Get first 10 Blog_tags
     * const blog_tags = await prisma.blog_tag.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const blog_tagWithUidOnly = await prisma.blog_tag.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends blog_tagFindManyArgs>(args?: SelectSubset<T, blog_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog_tag.
     * @param {blog_tagCreateArgs} args - Arguments to create a Blog_tag.
     * @example
     * // Create one Blog_tag
     * const Blog_tag = await prisma.blog_tag.create({
     *   data: {
     *     // ... data to create a Blog_tag
     *   }
     * })
     * 
     */
    create<T extends blog_tagCreateArgs>(args: SelectSubset<T, blog_tagCreateArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blog_tags.
     * @param {blog_tagCreateManyArgs} args - Arguments to create many Blog_tags.
     * @example
     * // Create many Blog_tags
     * const blog_tag = await prisma.blog_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blog_tagCreateManyArgs>(args?: SelectSubset<T, blog_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog_tag.
     * @param {blog_tagDeleteArgs} args - Arguments to delete one Blog_tag.
     * @example
     * // Delete one Blog_tag
     * const Blog_tag = await prisma.blog_tag.delete({
     *   where: {
     *     // ... filter to delete one Blog_tag
     *   }
     * })
     * 
     */
    delete<T extends blog_tagDeleteArgs>(args: SelectSubset<T, blog_tagDeleteArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog_tag.
     * @param {blog_tagUpdateArgs} args - Arguments to update one Blog_tag.
     * @example
     * // Update one Blog_tag
     * const blog_tag = await prisma.blog_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blog_tagUpdateArgs>(args: SelectSubset<T, blog_tagUpdateArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blog_tags.
     * @param {blog_tagDeleteManyArgs} args - Arguments to filter Blog_tags to delete.
     * @example
     * // Delete a few Blog_tags
     * const { count } = await prisma.blog_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blog_tagDeleteManyArgs>(args?: SelectSubset<T, blog_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blog_tags
     * const blog_tag = await prisma.blog_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blog_tagUpdateManyArgs>(args: SelectSubset<T, blog_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog_tag.
     * @param {blog_tagUpsertArgs} args - Arguments to update or create a Blog_tag.
     * @example
     * // Update or create a Blog_tag
     * const blog_tag = await prisma.blog_tag.upsert({
     *   create: {
     *     // ... data to create a Blog_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog_tag we want to update
     *   }
     * })
     */
    upsert<T extends blog_tagUpsertArgs>(args: SelectSubset<T, blog_tagUpsertArgs<ExtArgs>>): Prisma__blog_tagClient<$Result.GetResult<Prisma.$blog_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blog_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_tagCountArgs} args - Arguments to filter Blog_tags to count.
     * @example
     * // Count the number of Blog_tags
     * const count = await prisma.blog_tag.count({
     *   where: {
     *     // ... the filter for the Blog_tags we want to count
     *   }
     * })
    **/
    count<T extends blog_tagCountArgs>(
      args?: Subset<T, blog_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blog_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blog_tagAggregateArgs>(args: Subset<T, Blog_tagAggregateArgs>): Prisma.PrismaPromise<GetBlog_tagAggregateType<T>>

    /**
     * Group by Blog_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blog_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blog_tagGroupByArgs['orderBy'] }
        : { orderBy?: blog_tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blog_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlog_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blog_tag model
   */
  readonly fields: blog_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blog_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends blog_tag$blogsArgs<ExtArgs> = {}>(args?: Subset<T, blog_tag$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_posts_on_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blog_tag model
   */
  interface blog_tagFieldRefs {
    readonly uid: FieldRef<"blog_tag", 'String'>
    readonly createdAt: FieldRef<"blog_tag", 'DateTime'>
    readonly updatedAt: FieldRef<"blog_tag", 'DateTime'>
    readonly name: FieldRef<"blog_tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blog_tag findUnique
   */
  export type blog_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * Filter, which blog_tag to fetch.
     */
    where: blog_tagWhereUniqueInput
  }

  /**
   * blog_tag findUniqueOrThrow
   */
  export type blog_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * Filter, which blog_tag to fetch.
     */
    where: blog_tagWhereUniqueInput
  }

  /**
   * blog_tag findFirst
   */
  export type blog_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * Filter, which blog_tag to fetch.
     */
    where?: blog_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_tags to fetch.
     */
    orderBy?: blog_tagOrderByWithRelationInput | blog_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_tags.
     */
    cursor?: blog_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_tags.
     */
    distinct?: Blog_tagScalarFieldEnum | Blog_tagScalarFieldEnum[]
  }

  /**
   * blog_tag findFirstOrThrow
   */
  export type blog_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * Filter, which blog_tag to fetch.
     */
    where?: blog_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_tags to fetch.
     */
    orderBy?: blog_tagOrderByWithRelationInput | blog_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_tags.
     */
    cursor?: blog_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_tags.
     */
    distinct?: Blog_tagScalarFieldEnum | Blog_tagScalarFieldEnum[]
  }

  /**
   * blog_tag findMany
   */
  export type blog_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * Filter, which blog_tags to fetch.
     */
    where?: blog_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_tags to fetch.
     */
    orderBy?: blog_tagOrderByWithRelationInput | blog_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blog_tags.
     */
    cursor?: blog_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_tags.
     */
    skip?: number
    distinct?: Blog_tagScalarFieldEnum | Blog_tagScalarFieldEnum[]
  }

  /**
   * blog_tag create
   */
  export type blog_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a blog_tag.
     */
    data: XOR<blog_tagCreateInput, blog_tagUncheckedCreateInput>
  }

  /**
   * blog_tag createMany
   */
  export type blog_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blog_tags.
     */
    data: blog_tagCreateManyInput | blog_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blog_tag update
   */
  export type blog_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a blog_tag.
     */
    data: XOR<blog_tagUpdateInput, blog_tagUncheckedUpdateInput>
    /**
     * Choose, which blog_tag to update.
     */
    where: blog_tagWhereUniqueInput
  }

  /**
   * blog_tag updateMany
   */
  export type blog_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blog_tags.
     */
    data: XOR<blog_tagUpdateManyMutationInput, blog_tagUncheckedUpdateManyInput>
    /**
     * Filter which blog_tags to update
     */
    where?: blog_tagWhereInput
    /**
     * Limit how many blog_tags to update.
     */
    limit?: number
  }

  /**
   * blog_tag upsert
   */
  export type blog_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the blog_tag to update in case it exists.
     */
    where: blog_tagWhereUniqueInput
    /**
     * In case the blog_tag found by the `where` argument doesn't exist, create a new blog_tag with this data.
     */
    create: XOR<blog_tagCreateInput, blog_tagUncheckedCreateInput>
    /**
     * In case the blog_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blog_tagUpdateInput, blog_tagUncheckedUpdateInput>
  }

  /**
   * blog_tag delete
   */
  export type blog_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
    /**
     * Filter which blog_tag to delete.
     */
    where: blog_tagWhereUniqueInput
  }

  /**
   * blog_tag deleteMany
   */
  export type blog_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_tags to delete
     */
    where?: blog_tagWhereInput
    /**
     * Limit how many blog_tags to delete.
     */
    limit?: number
  }

  /**
   * blog_tag.blogs
   */
  export type blog_tag$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_posts_on_tags
     */
    select?: blog_posts_on_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_posts_on_tags
     */
    omit?: blog_posts_on_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_posts_on_tagsInclude<ExtArgs> | null
    where?: blog_posts_on_tagsWhereInput
    orderBy?: blog_posts_on_tagsOrderByWithRelationInput | blog_posts_on_tagsOrderByWithRelationInput[]
    cursor?: blog_posts_on_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Blog_posts_on_tagsScalarFieldEnum | Blog_posts_on_tagsScalarFieldEnum[]
  }

  /**
   * blog_tag without action
   */
  export type blog_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_tag
     */
    select?: blog_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_tag
     */
    omit?: blog_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_tagInclude<ExtArgs> | null
  }


  /**
   * Model blog_comments
   */

  export type AggregateBlog_comments = {
    _count: Blog_commentsCountAggregateOutputType | null
    _min: Blog_commentsMinAggregateOutputType | null
    _max: Blog_commentsMaxAggregateOutputType | null
  }

  export type Blog_commentsMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    status: boolean | null
    userId: string | null
    postId: string | null
  }

  export type Blog_commentsMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    status: boolean | null
    userId: string | null
    postId: string | null
  }

  export type Blog_commentsCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    content: number
    status: number
    userId: number
    postId: number
    _all: number
  }


  export type Blog_commentsMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    status?: true
    userId?: true
    postId?: true
  }

  export type Blog_commentsMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    status?: true
    userId?: true
    postId?: true
  }

  export type Blog_commentsCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    status?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type Blog_commentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_comments to aggregate.
     */
    where?: blog_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_comments to fetch.
     */
    orderBy?: blog_commentsOrderByWithRelationInput | blog_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blog_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blog_comments
    **/
    _count?: true | Blog_commentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blog_commentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blog_commentsMaxAggregateInputType
  }

  export type GetBlog_commentsAggregateType<T extends Blog_commentsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog_comments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog_comments[P]>
      : GetScalarType<T[P], AggregateBlog_comments[P]>
  }




  export type blog_commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_commentsWhereInput
    orderBy?: blog_commentsOrderByWithAggregationInput | blog_commentsOrderByWithAggregationInput[]
    by: Blog_commentsScalarFieldEnum[] | Blog_commentsScalarFieldEnum
    having?: blog_commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blog_commentsCountAggregateInputType | true
    _min?: Blog_commentsMinAggregateInputType
    _max?: Blog_commentsMaxAggregateInputType
  }

  export type Blog_commentsGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    content: string
    status: boolean
    userId: string
    postId: string
    _count: Blog_commentsCountAggregateOutputType | null
    _min: Blog_commentsMinAggregateOutputType | null
    _max: Blog_commentsMaxAggregateOutputType | null
  }

  type GetBlog_commentsGroupByPayload<T extends blog_commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blog_commentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blog_commentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blog_commentsGroupByOutputType[P]>
            : GetScalarType<T[P], Blog_commentsGroupByOutputType[P]>
        }
      >
    >


  export type blog_commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    status?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | sys_userDefaultArgs<ExtArgs>
    post?: boolean | blog_postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog_comments"]>



  export type blog_commentsSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    status?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type blog_commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "content" | "status" | "userId" | "postId", ExtArgs["result"]["blog_comments"]>
  export type blog_commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | sys_userDefaultArgs<ExtArgs>
    post?: boolean | blog_postsDefaultArgs<ExtArgs>
  }

  export type $blog_commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blog_comments"
    objects: {
      user: Prisma.$sys_userPayload<ExtArgs>
      post: Prisma.$blog_postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      content: string
      status: boolean
      userId: string
      postId: string
    }, ExtArgs["result"]["blog_comments"]>
    composites: {}
  }

  type blog_commentsGetPayload<S extends boolean | null | undefined | blog_commentsDefaultArgs> = $Result.GetResult<Prisma.$blog_commentsPayload, S>

  type blog_commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blog_commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blog_commentsCountAggregateInputType | true
    }

  export interface blog_commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blog_comments'], meta: { name: 'blog_comments' } }
    /**
     * Find zero or one Blog_comments that matches the filter.
     * @param {blog_commentsFindUniqueArgs} args - Arguments to find a Blog_comments
     * @example
     * // Get one Blog_comments
     * const blog_comments = await prisma.blog_comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blog_commentsFindUniqueArgs>(args: SelectSubset<T, blog_commentsFindUniqueArgs<ExtArgs>>): Prisma__blog_commentsClient<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog_comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blog_commentsFindUniqueOrThrowArgs} args - Arguments to find a Blog_comments
     * @example
     * // Get one Blog_comments
     * const blog_comments = await prisma.blog_comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blog_commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, blog_commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blog_commentsClient<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_commentsFindFirstArgs} args - Arguments to find a Blog_comments
     * @example
     * // Get one Blog_comments
     * const blog_comments = await prisma.blog_comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blog_commentsFindFirstArgs>(args?: SelectSubset<T, blog_commentsFindFirstArgs<ExtArgs>>): Prisma__blog_commentsClient<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_commentsFindFirstOrThrowArgs} args - Arguments to find a Blog_comments
     * @example
     * // Get one Blog_comments
     * const blog_comments = await prisma.blog_comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blog_commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, blog_commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blog_commentsClient<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blog_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blog_comments
     * const blog_comments = await prisma.blog_comments.findMany()
     * 
     * // Get first 10 Blog_comments
     * const blog_comments = await prisma.blog_comments.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const blog_commentsWithUidOnly = await prisma.blog_comments.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends blog_commentsFindManyArgs>(args?: SelectSubset<T, blog_commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog_comments.
     * @param {blog_commentsCreateArgs} args - Arguments to create a Blog_comments.
     * @example
     * // Create one Blog_comments
     * const Blog_comments = await prisma.blog_comments.create({
     *   data: {
     *     // ... data to create a Blog_comments
     *   }
     * })
     * 
     */
    create<T extends blog_commentsCreateArgs>(args: SelectSubset<T, blog_commentsCreateArgs<ExtArgs>>): Prisma__blog_commentsClient<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blog_comments.
     * @param {blog_commentsCreateManyArgs} args - Arguments to create many Blog_comments.
     * @example
     * // Create many Blog_comments
     * const blog_comments = await prisma.blog_comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blog_commentsCreateManyArgs>(args?: SelectSubset<T, blog_commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog_comments.
     * @param {blog_commentsDeleteArgs} args - Arguments to delete one Blog_comments.
     * @example
     * // Delete one Blog_comments
     * const Blog_comments = await prisma.blog_comments.delete({
     *   where: {
     *     // ... filter to delete one Blog_comments
     *   }
     * })
     * 
     */
    delete<T extends blog_commentsDeleteArgs>(args: SelectSubset<T, blog_commentsDeleteArgs<ExtArgs>>): Prisma__blog_commentsClient<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog_comments.
     * @param {blog_commentsUpdateArgs} args - Arguments to update one Blog_comments.
     * @example
     * // Update one Blog_comments
     * const blog_comments = await prisma.blog_comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blog_commentsUpdateArgs>(args: SelectSubset<T, blog_commentsUpdateArgs<ExtArgs>>): Prisma__blog_commentsClient<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blog_comments.
     * @param {blog_commentsDeleteManyArgs} args - Arguments to filter Blog_comments to delete.
     * @example
     * // Delete a few Blog_comments
     * const { count } = await prisma.blog_comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blog_commentsDeleteManyArgs>(args?: SelectSubset<T, blog_commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blog_comments
     * const blog_comments = await prisma.blog_comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blog_commentsUpdateManyArgs>(args: SelectSubset<T, blog_commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog_comments.
     * @param {blog_commentsUpsertArgs} args - Arguments to update or create a Blog_comments.
     * @example
     * // Update or create a Blog_comments
     * const blog_comments = await prisma.blog_comments.upsert({
     *   create: {
     *     // ... data to create a Blog_comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog_comments we want to update
     *   }
     * })
     */
    upsert<T extends blog_commentsUpsertArgs>(args: SelectSubset<T, blog_commentsUpsertArgs<ExtArgs>>): Prisma__blog_commentsClient<$Result.GetResult<Prisma.$blog_commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blog_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_commentsCountArgs} args - Arguments to filter Blog_comments to count.
     * @example
     * // Count the number of Blog_comments
     * const count = await prisma.blog_comments.count({
     *   where: {
     *     // ... the filter for the Blog_comments we want to count
     *   }
     * })
    **/
    count<T extends blog_commentsCountArgs>(
      args?: Subset<T, blog_commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blog_commentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_commentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blog_commentsAggregateArgs>(args: Subset<T, Blog_commentsAggregateArgs>): Prisma.PrismaPromise<GetBlog_commentsAggregateType<T>>

    /**
     * Group by Blog_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blog_commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blog_commentsGroupByArgs['orderBy'] }
        : { orderBy?: blog_commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blog_commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlog_commentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blog_comments model
   */
  readonly fields: blog_commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog_comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blog_commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends sys_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_userDefaultArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends blog_postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blog_postsDefaultArgs<ExtArgs>>): Prisma__blog_postsClient<$Result.GetResult<Prisma.$blog_postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blog_comments model
   */
  interface blog_commentsFieldRefs {
    readonly uid: FieldRef<"blog_comments", 'String'>
    readonly createdAt: FieldRef<"blog_comments", 'DateTime'>
    readonly updatedAt: FieldRef<"blog_comments", 'DateTime'>
    readonly content: FieldRef<"blog_comments", 'String'>
    readonly status: FieldRef<"blog_comments", 'Boolean'>
    readonly userId: FieldRef<"blog_comments", 'String'>
    readonly postId: FieldRef<"blog_comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blog_comments findUnique
   */
  export type blog_commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * Filter, which blog_comments to fetch.
     */
    where: blog_commentsWhereUniqueInput
  }

  /**
   * blog_comments findUniqueOrThrow
   */
  export type blog_commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * Filter, which blog_comments to fetch.
     */
    where: blog_commentsWhereUniqueInput
  }

  /**
   * blog_comments findFirst
   */
  export type blog_commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * Filter, which blog_comments to fetch.
     */
    where?: blog_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_comments to fetch.
     */
    orderBy?: blog_commentsOrderByWithRelationInput | blog_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_comments.
     */
    cursor?: blog_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_comments.
     */
    distinct?: Blog_commentsScalarFieldEnum | Blog_commentsScalarFieldEnum[]
  }

  /**
   * blog_comments findFirstOrThrow
   */
  export type blog_commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * Filter, which blog_comments to fetch.
     */
    where?: blog_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_comments to fetch.
     */
    orderBy?: blog_commentsOrderByWithRelationInput | blog_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_comments.
     */
    cursor?: blog_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_comments.
     */
    distinct?: Blog_commentsScalarFieldEnum | Blog_commentsScalarFieldEnum[]
  }

  /**
   * blog_comments findMany
   */
  export type blog_commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * Filter, which blog_comments to fetch.
     */
    where?: blog_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_comments to fetch.
     */
    orderBy?: blog_commentsOrderByWithRelationInput | blog_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blog_comments.
     */
    cursor?: blog_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_comments.
     */
    skip?: number
    distinct?: Blog_commentsScalarFieldEnum | Blog_commentsScalarFieldEnum[]
  }

  /**
   * blog_comments create
   */
  export type blog_commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a blog_comments.
     */
    data: XOR<blog_commentsCreateInput, blog_commentsUncheckedCreateInput>
  }

  /**
   * blog_comments createMany
   */
  export type blog_commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blog_comments.
     */
    data: blog_commentsCreateManyInput | blog_commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blog_comments update
   */
  export type blog_commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a blog_comments.
     */
    data: XOR<blog_commentsUpdateInput, blog_commentsUncheckedUpdateInput>
    /**
     * Choose, which blog_comments to update.
     */
    where: blog_commentsWhereUniqueInput
  }

  /**
   * blog_comments updateMany
   */
  export type blog_commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blog_comments.
     */
    data: XOR<blog_commentsUpdateManyMutationInput, blog_commentsUncheckedUpdateManyInput>
    /**
     * Filter which blog_comments to update
     */
    where?: blog_commentsWhereInput
    /**
     * Limit how many blog_comments to update.
     */
    limit?: number
  }

  /**
   * blog_comments upsert
   */
  export type blog_commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the blog_comments to update in case it exists.
     */
    where: blog_commentsWhereUniqueInput
    /**
     * In case the blog_comments found by the `where` argument doesn't exist, create a new blog_comments with this data.
     */
    create: XOR<blog_commentsCreateInput, blog_commentsUncheckedCreateInput>
    /**
     * In case the blog_comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blog_commentsUpdateInput, blog_commentsUncheckedUpdateInput>
  }

  /**
   * blog_comments delete
   */
  export type blog_commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
    /**
     * Filter which blog_comments to delete.
     */
    where: blog_commentsWhereUniqueInput
  }

  /**
   * blog_comments deleteMany
   */
  export type blog_commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_comments to delete
     */
    where?: blog_commentsWhereInput
    /**
     * Limit how many blog_comments to delete.
     */
    limit?: number
  }

  /**
   * blog_comments without action
   */
  export type blog_commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_comments
     */
    select?: blog_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_comments
     */
    omit?: blog_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blog_commentsInclude<ExtArgs> | null
  }


  /**
   * Model blog_links
   */

  export type AggregateBlog_links = {
    _count: Blog_linksCountAggregateOutputType | null
    _avg: Blog_linksAvgAggregateOutputType | null
    _sum: Blog_linksSumAggregateOutputType | null
    _min: Blog_linksMinAggregateOutputType | null
    _max: Blog_linksMaxAggregateOutputType | null
  }

  export type Blog_linksAvgAggregateOutputType = {
    sort: number | null
  }

  export type Blog_linksSumAggregateOutputType = {
    sort: number | null
  }

  export type Blog_linksMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    url: string | null
    logo: string | null
    sort: number | null
    status: boolean | null
  }

  export type Blog_linksMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    url: string | null
    logo: string | null
    sort: number | null
    status: boolean | null
  }

  export type Blog_linksCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    name: number
    url: number
    logo: number
    sort: number
    status: number
    _all: number
  }


  export type Blog_linksAvgAggregateInputType = {
    sort?: true
  }

  export type Blog_linksSumAggregateInputType = {
    sort?: true
  }

  export type Blog_linksMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    url?: true
    logo?: true
    sort?: true
    status?: true
  }

  export type Blog_linksMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    url?: true
    logo?: true
    sort?: true
    status?: true
  }

  export type Blog_linksCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    url?: true
    logo?: true
    sort?: true
    status?: true
    _all?: true
  }

  export type Blog_linksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_links to aggregate.
     */
    where?: blog_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_links to fetch.
     */
    orderBy?: blog_linksOrderByWithRelationInput | blog_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blog_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blog_links
    **/
    _count?: true | Blog_linksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Blog_linksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Blog_linksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blog_linksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blog_linksMaxAggregateInputType
  }

  export type GetBlog_linksAggregateType<T extends Blog_linksAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog_links]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog_links[P]>
      : GetScalarType<T[P], AggregateBlog_links[P]>
  }




  export type blog_linksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_linksWhereInput
    orderBy?: blog_linksOrderByWithAggregationInput | blog_linksOrderByWithAggregationInput[]
    by: Blog_linksScalarFieldEnum[] | Blog_linksScalarFieldEnum
    having?: blog_linksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blog_linksCountAggregateInputType | true
    _avg?: Blog_linksAvgAggregateInputType
    _sum?: Blog_linksSumAggregateInputType
    _min?: Blog_linksMinAggregateInputType
    _max?: Blog_linksMaxAggregateInputType
  }

  export type Blog_linksGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    name: string
    url: string
    logo: string | null
    sort: number
    status: boolean
    _count: Blog_linksCountAggregateOutputType | null
    _avg: Blog_linksAvgAggregateOutputType | null
    _sum: Blog_linksSumAggregateOutputType | null
    _min: Blog_linksMinAggregateOutputType | null
    _max: Blog_linksMaxAggregateOutputType | null
  }

  type GetBlog_linksGroupByPayload<T extends blog_linksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blog_linksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blog_linksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blog_linksGroupByOutputType[P]>
            : GetScalarType<T[P], Blog_linksGroupByOutputType[P]>
        }
      >
    >


  export type blog_linksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    sort?: boolean
    status?: boolean
  }, ExtArgs["result"]["blog_links"]>



  export type blog_linksSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    sort?: boolean
    status?: boolean
  }

  export type blog_linksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "name" | "url" | "logo" | "sort" | "status", ExtArgs["result"]["blog_links"]>

  export type $blog_linksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blog_links"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      name: string
      url: string
      logo: string | null
      sort: number
      status: boolean
    }, ExtArgs["result"]["blog_links"]>
    composites: {}
  }

  type blog_linksGetPayload<S extends boolean | null | undefined | blog_linksDefaultArgs> = $Result.GetResult<Prisma.$blog_linksPayload, S>

  type blog_linksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blog_linksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blog_linksCountAggregateInputType | true
    }

  export interface blog_linksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blog_links'], meta: { name: 'blog_links' } }
    /**
     * Find zero or one Blog_links that matches the filter.
     * @param {blog_linksFindUniqueArgs} args - Arguments to find a Blog_links
     * @example
     * // Get one Blog_links
     * const blog_links = await prisma.blog_links.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blog_linksFindUniqueArgs>(args: SelectSubset<T, blog_linksFindUniqueArgs<ExtArgs>>): Prisma__blog_linksClient<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog_links that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blog_linksFindUniqueOrThrowArgs} args - Arguments to find a Blog_links
     * @example
     * // Get one Blog_links
     * const blog_links = await prisma.blog_links.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blog_linksFindUniqueOrThrowArgs>(args: SelectSubset<T, blog_linksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blog_linksClient<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_linksFindFirstArgs} args - Arguments to find a Blog_links
     * @example
     * // Get one Blog_links
     * const blog_links = await prisma.blog_links.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blog_linksFindFirstArgs>(args?: SelectSubset<T, blog_linksFindFirstArgs<ExtArgs>>): Prisma__blog_linksClient<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_links that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_linksFindFirstOrThrowArgs} args - Arguments to find a Blog_links
     * @example
     * // Get one Blog_links
     * const blog_links = await prisma.blog_links.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blog_linksFindFirstOrThrowArgs>(args?: SelectSubset<T, blog_linksFindFirstOrThrowArgs<ExtArgs>>): Prisma__blog_linksClient<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blog_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_linksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blog_links
     * const blog_links = await prisma.blog_links.findMany()
     * 
     * // Get first 10 Blog_links
     * const blog_links = await prisma.blog_links.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const blog_linksWithUidOnly = await prisma.blog_links.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends blog_linksFindManyArgs>(args?: SelectSubset<T, blog_linksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog_links.
     * @param {blog_linksCreateArgs} args - Arguments to create a Blog_links.
     * @example
     * // Create one Blog_links
     * const Blog_links = await prisma.blog_links.create({
     *   data: {
     *     // ... data to create a Blog_links
     *   }
     * })
     * 
     */
    create<T extends blog_linksCreateArgs>(args: SelectSubset<T, blog_linksCreateArgs<ExtArgs>>): Prisma__blog_linksClient<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blog_links.
     * @param {blog_linksCreateManyArgs} args - Arguments to create many Blog_links.
     * @example
     * // Create many Blog_links
     * const blog_links = await prisma.blog_links.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blog_linksCreateManyArgs>(args?: SelectSubset<T, blog_linksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog_links.
     * @param {blog_linksDeleteArgs} args - Arguments to delete one Blog_links.
     * @example
     * // Delete one Blog_links
     * const Blog_links = await prisma.blog_links.delete({
     *   where: {
     *     // ... filter to delete one Blog_links
     *   }
     * })
     * 
     */
    delete<T extends blog_linksDeleteArgs>(args: SelectSubset<T, blog_linksDeleteArgs<ExtArgs>>): Prisma__blog_linksClient<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog_links.
     * @param {blog_linksUpdateArgs} args - Arguments to update one Blog_links.
     * @example
     * // Update one Blog_links
     * const blog_links = await prisma.blog_links.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blog_linksUpdateArgs>(args: SelectSubset<T, blog_linksUpdateArgs<ExtArgs>>): Prisma__blog_linksClient<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blog_links.
     * @param {blog_linksDeleteManyArgs} args - Arguments to filter Blog_links to delete.
     * @example
     * // Delete a few Blog_links
     * const { count } = await prisma.blog_links.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blog_linksDeleteManyArgs>(args?: SelectSubset<T, blog_linksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_linksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blog_links
     * const blog_links = await prisma.blog_links.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blog_linksUpdateManyArgs>(args: SelectSubset<T, blog_linksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog_links.
     * @param {blog_linksUpsertArgs} args - Arguments to update or create a Blog_links.
     * @example
     * // Update or create a Blog_links
     * const blog_links = await prisma.blog_links.upsert({
     *   create: {
     *     // ... data to create a Blog_links
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog_links we want to update
     *   }
     * })
     */
    upsert<T extends blog_linksUpsertArgs>(args: SelectSubset<T, blog_linksUpsertArgs<ExtArgs>>): Prisma__blog_linksClient<$Result.GetResult<Prisma.$blog_linksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blog_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_linksCountArgs} args - Arguments to filter Blog_links to count.
     * @example
     * // Count the number of Blog_links
     * const count = await prisma.blog_links.count({
     *   where: {
     *     // ... the filter for the Blog_links we want to count
     *   }
     * })
    **/
    count<T extends blog_linksCountArgs>(
      args?: Subset<T, blog_linksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blog_linksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_linksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blog_linksAggregateArgs>(args: Subset<T, Blog_linksAggregateArgs>): Prisma.PrismaPromise<GetBlog_linksAggregateType<T>>

    /**
     * Group by Blog_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_linksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blog_linksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blog_linksGroupByArgs['orderBy'] }
        : { orderBy?: blog_linksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blog_linksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlog_linksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blog_links model
   */
  readonly fields: blog_linksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog_links.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blog_linksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blog_links model
   */
  interface blog_linksFieldRefs {
    readonly uid: FieldRef<"blog_links", 'String'>
    readonly createdAt: FieldRef<"blog_links", 'DateTime'>
    readonly updatedAt: FieldRef<"blog_links", 'DateTime'>
    readonly name: FieldRef<"blog_links", 'String'>
    readonly url: FieldRef<"blog_links", 'String'>
    readonly logo: FieldRef<"blog_links", 'String'>
    readonly sort: FieldRef<"blog_links", 'Int'>
    readonly status: FieldRef<"blog_links", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * blog_links findUnique
   */
  export type blog_linksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * Filter, which blog_links to fetch.
     */
    where: blog_linksWhereUniqueInput
  }

  /**
   * blog_links findUniqueOrThrow
   */
  export type blog_linksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * Filter, which blog_links to fetch.
     */
    where: blog_linksWhereUniqueInput
  }

  /**
   * blog_links findFirst
   */
  export type blog_linksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * Filter, which blog_links to fetch.
     */
    where?: blog_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_links to fetch.
     */
    orderBy?: blog_linksOrderByWithRelationInput | blog_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_links.
     */
    cursor?: blog_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_links.
     */
    distinct?: Blog_linksScalarFieldEnum | Blog_linksScalarFieldEnum[]
  }

  /**
   * blog_links findFirstOrThrow
   */
  export type blog_linksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * Filter, which blog_links to fetch.
     */
    where?: blog_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_links to fetch.
     */
    orderBy?: blog_linksOrderByWithRelationInput | blog_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_links.
     */
    cursor?: blog_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_links.
     */
    distinct?: Blog_linksScalarFieldEnum | Blog_linksScalarFieldEnum[]
  }

  /**
   * blog_links findMany
   */
  export type blog_linksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * Filter, which blog_links to fetch.
     */
    where?: blog_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_links to fetch.
     */
    orderBy?: blog_linksOrderByWithRelationInput | blog_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blog_links.
     */
    cursor?: blog_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_links.
     */
    skip?: number
    distinct?: Blog_linksScalarFieldEnum | Blog_linksScalarFieldEnum[]
  }

  /**
   * blog_links create
   */
  export type blog_linksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * The data needed to create a blog_links.
     */
    data: XOR<blog_linksCreateInput, blog_linksUncheckedCreateInput>
  }

  /**
   * blog_links createMany
   */
  export type blog_linksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blog_links.
     */
    data: blog_linksCreateManyInput | blog_linksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blog_links update
   */
  export type blog_linksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * The data needed to update a blog_links.
     */
    data: XOR<blog_linksUpdateInput, blog_linksUncheckedUpdateInput>
    /**
     * Choose, which blog_links to update.
     */
    where: blog_linksWhereUniqueInput
  }

  /**
   * blog_links updateMany
   */
  export type blog_linksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blog_links.
     */
    data: XOR<blog_linksUpdateManyMutationInput, blog_linksUncheckedUpdateManyInput>
    /**
     * Filter which blog_links to update
     */
    where?: blog_linksWhereInput
    /**
     * Limit how many blog_links to update.
     */
    limit?: number
  }

  /**
   * blog_links upsert
   */
  export type blog_linksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * The filter to search for the blog_links to update in case it exists.
     */
    where: blog_linksWhereUniqueInput
    /**
     * In case the blog_links found by the `where` argument doesn't exist, create a new blog_links with this data.
     */
    create: XOR<blog_linksCreateInput, blog_linksUncheckedCreateInput>
    /**
     * In case the blog_links was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blog_linksUpdateInput, blog_linksUncheckedUpdateInput>
  }

  /**
   * blog_links delete
   */
  export type blog_linksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
    /**
     * Filter which blog_links to delete.
     */
    where: blog_linksWhereUniqueInput
  }

  /**
   * blog_links deleteMany
   */
  export type blog_linksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_links to delete
     */
    where?: blog_linksWhereInput
    /**
     * Limit how many blog_links to delete.
     */
    limit?: number
  }

  /**
   * blog_links without action
   */
  export type blog_linksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_links
     */
    select?: blog_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_links
     */
    omit?: blog_linksOmit<ExtArgs> | null
  }


  /**
   * Model blog_announcements
   */

  export type AggregateBlog_announcements = {
    _count: Blog_announcementsCountAggregateOutputType | null
    _avg: Blog_announcementsAvgAggregateOutputType | null
    _sum: Blog_announcementsSumAggregateOutputType | null
    _min: Blog_announcementsMinAggregateOutputType | null
    _max: Blog_announcementsMaxAggregateOutputType | null
  }

  export type Blog_announcementsAvgAggregateOutputType = {
    sort: number | null
  }

  export type Blog_announcementsSumAggregateOutputType = {
    sort: number | null
  }

  export type Blog_announcementsMinAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    sort: number | null
    status: boolean | null
  }

  export type Blog_announcementsMaxAggregateOutputType = {
    uid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    sort: number | null
    status: boolean | null
  }

  export type Blog_announcementsCountAggregateOutputType = {
    uid: number
    createdAt: number
    updatedAt: number
    title: number
    content: number
    sort: number
    status: number
    _all: number
  }


  export type Blog_announcementsAvgAggregateInputType = {
    sort?: true
  }

  export type Blog_announcementsSumAggregateInputType = {
    sort?: true
  }

  export type Blog_announcementsMinAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    sort?: true
    status?: true
  }

  export type Blog_announcementsMaxAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    sort?: true
    status?: true
  }

  export type Blog_announcementsCountAggregateInputType = {
    uid?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    sort?: true
    status?: true
    _all?: true
  }

  export type Blog_announcementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_announcements to aggregate.
     */
    where?: blog_announcementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_announcements to fetch.
     */
    orderBy?: blog_announcementsOrderByWithRelationInput | blog_announcementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blog_announcementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blog_announcements
    **/
    _count?: true | Blog_announcementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Blog_announcementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Blog_announcementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blog_announcementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blog_announcementsMaxAggregateInputType
  }

  export type GetBlog_announcementsAggregateType<T extends Blog_announcementsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog_announcements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog_announcements[P]>
      : GetScalarType<T[P], AggregateBlog_announcements[P]>
  }




  export type blog_announcementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blog_announcementsWhereInput
    orderBy?: blog_announcementsOrderByWithAggregationInput | blog_announcementsOrderByWithAggregationInput[]
    by: Blog_announcementsScalarFieldEnum[] | Blog_announcementsScalarFieldEnum
    having?: blog_announcementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blog_announcementsCountAggregateInputType | true
    _avg?: Blog_announcementsAvgAggregateInputType
    _sum?: Blog_announcementsSumAggregateInputType
    _min?: Blog_announcementsMinAggregateInputType
    _max?: Blog_announcementsMaxAggregateInputType
  }

  export type Blog_announcementsGroupByOutputType = {
    uid: string
    createdAt: Date
    updatedAt: Date
    title: string
    content: string
    sort: number
    status: boolean
    _count: Blog_announcementsCountAggregateOutputType | null
    _avg: Blog_announcementsAvgAggregateOutputType | null
    _sum: Blog_announcementsSumAggregateOutputType | null
    _min: Blog_announcementsMinAggregateOutputType | null
    _max: Blog_announcementsMaxAggregateOutputType | null
  }

  type GetBlog_announcementsGroupByPayload<T extends blog_announcementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blog_announcementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blog_announcementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blog_announcementsGroupByOutputType[P]>
            : GetScalarType<T[P], Blog_announcementsGroupByOutputType[P]>
        }
      >
    >


  export type blog_announcementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    sort?: boolean
    status?: boolean
  }, ExtArgs["result"]["blog_announcements"]>



  export type blog_announcementsSelectScalar = {
    uid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    sort?: boolean
    status?: boolean
  }

  export type blog_announcementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "createdAt" | "updatedAt" | "title" | "content" | "sort" | "status", ExtArgs["result"]["blog_announcements"]>

  export type $blog_announcementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blog_announcements"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      createdAt: Date
      updatedAt: Date
      title: string
      content: string
      sort: number
      status: boolean
    }, ExtArgs["result"]["blog_announcements"]>
    composites: {}
  }

  type blog_announcementsGetPayload<S extends boolean | null | undefined | blog_announcementsDefaultArgs> = $Result.GetResult<Prisma.$blog_announcementsPayload, S>

  type blog_announcementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blog_announcementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blog_announcementsCountAggregateInputType | true
    }

  export interface blog_announcementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blog_announcements'], meta: { name: 'blog_announcements' } }
    /**
     * Find zero or one Blog_announcements that matches the filter.
     * @param {blog_announcementsFindUniqueArgs} args - Arguments to find a Blog_announcements
     * @example
     * // Get one Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blog_announcementsFindUniqueArgs>(args: SelectSubset<T, blog_announcementsFindUniqueArgs<ExtArgs>>): Prisma__blog_announcementsClient<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog_announcements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blog_announcementsFindUniqueOrThrowArgs} args - Arguments to find a Blog_announcements
     * @example
     * // Get one Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blog_announcementsFindUniqueOrThrowArgs>(args: SelectSubset<T, blog_announcementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blog_announcementsClient<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_announcementsFindFirstArgs} args - Arguments to find a Blog_announcements
     * @example
     * // Get one Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blog_announcementsFindFirstArgs>(args?: SelectSubset<T, blog_announcementsFindFirstArgs<ExtArgs>>): Prisma__blog_announcementsClient<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_announcements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_announcementsFindFirstOrThrowArgs} args - Arguments to find a Blog_announcements
     * @example
     * // Get one Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blog_announcementsFindFirstOrThrowArgs>(args?: SelectSubset<T, blog_announcementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blog_announcementsClient<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blog_announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_announcementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.findMany()
     * 
     * // Get first 10 Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const blog_announcementsWithUidOnly = await prisma.blog_announcements.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends blog_announcementsFindManyArgs>(args?: SelectSubset<T, blog_announcementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog_announcements.
     * @param {blog_announcementsCreateArgs} args - Arguments to create a Blog_announcements.
     * @example
     * // Create one Blog_announcements
     * const Blog_announcements = await prisma.blog_announcements.create({
     *   data: {
     *     // ... data to create a Blog_announcements
     *   }
     * })
     * 
     */
    create<T extends blog_announcementsCreateArgs>(args: SelectSubset<T, blog_announcementsCreateArgs<ExtArgs>>): Prisma__blog_announcementsClient<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blog_announcements.
     * @param {blog_announcementsCreateManyArgs} args - Arguments to create many Blog_announcements.
     * @example
     * // Create many Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blog_announcementsCreateManyArgs>(args?: SelectSubset<T, blog_announcementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog_announcements.
     * @param {blog_announcementsDeleteArgs} args - Arguments to delete one Blog_announcements.
     * @example
     * // Delete one Blog_announcements
     * const Blog_announcements = await prisma.blog_announcements.delete({
     *   where: {
     *     // ... filter to delete one Blog_announcements
     *   }
     * })
     * 
     */
    delete<T extends blog_announcementsDeleteArgs>(args: SelectSubset<T, blog_announcementsDeleteArgs<ExtArgs>>): Prisma__blog_announcementsClient<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog_announcements.
     * @param {blog_announcementsUpdateArgs} args - Arguments to update one Blog_announcements.
     * @example
     * // Update one Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blog_announcementsUpdateArgs>(args: SelectSubset<T, blog_announcementsUpdateArgs<ExtArgs>>): Prisma__blog_announcementsClient<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blog_announcements.
     * @param {blog_announcementsDeleteManyArgs} args - Arguments to filter Blog_announcements to delete.
     * @example
     * // Delete a few Blog_announcements
     * const { count } = await prisma.blog_announcements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blog_announcementsDeleteManyArgs>(args?: SelectSubset<T, blog_announcementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_announcementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blog_announcementsUpdateManyArgs>(args: SelectSubset<T, blog_announcementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog_announcements.
     * @param {blog_announcementsUpsertArgs} args - Arguments to update or create a Blog_announcements.
     * @example
     * // Update or create a Blog_announcements
     * const blog_announcements = await prisma.blog_announcements.upsert({
     *   create: {
     *     // ... data to create a Blog_announcements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog_announcements we want to update
     *   }
     * })
     */
    upsert<T extends blog_announcementsUpsertArgs>(args: SelectSubset<T, blog_announcementsUpsertArgs<ExtArgs>>): Prisma__blog_announcementsClient<$Result.GetResult<Prisma.$blog_announcementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blog_announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_announcementsCountArgs} args - Arguments to filter Blog_announcements to count.
     * @example
     * // Count the number of Blog_announcements
     * const count = await prisma.blog_announcements.count({
     *   where: {
     *     // ... the filter for the Blog_announcements we want to count
     *   }
     * })
    **/
    count<T extends blog_announcementsCountArgs>(
      args?: Subset<T, blog_announcementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blog_announcementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog_announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_announcementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blog_announcementsAggregateArgs>(args: Subset<T, Blog_announcementsAggregateArgs>): Prisma.PrismaPromise<GetBlog_announcementsAggregateType<T>>

    /**
     * Group by Blog_announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blog_announcementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blog_announcementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blog_announcementsGroupByArgs['orderBy'] }
        : { orderBy?: blog_announcementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blog_announcementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlog_announcementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blog_announcements model
   */
  readonly fields: blog_announcementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog_announcements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blog_announcementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blog_announcements model
   */
  interface blog_announcementsFieldRefs {
    readonly uid: FieldRef<"blog_announcements", 'String'>
    readonly createdAt: FieldRef<"blog_announcements", 'DateTime'>
    readonly updatedAt: FieldRef<"blog_announcements", 'DateTime'>
    readonly title: FieldRef<"blog_announcements", 'String'>
    readonly content: FieldRef<"blog_announcements", 'String'>
    readonly sort: FieldRef<"blog_announcements", 'Int'>
    readonly status: FieldRef<"blog_announcements", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * blog_announcements findUnique
   */
  export type blog_announcementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * Filter, which blog_announcements to fetch.
     */
    where: blog_announcementsWhereUniqueInput
  }

  /**
   * blog_announcements findUniqueOrThrow
   */
  export type blog_announcementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * Filter, which blog_announcements to fetch.
     */
    where: blog_announcementsWhereUniqueInput
  }

  /**
   * blog_announcements findFirst
   */
  export type blog_announcementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * Filter, which blog_announcements to fetch.
     */
    where?: blog_announcementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_announcements to fetch.
     */
    orderBy?: blog_announcementsOrderByWithRelationInput | blog_announcementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_announcements.
     */
    cursor?: blog_announcementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_announcements.
     */
    distinct?: Blog_announcementsScalarFieldEnum | Blog_announcementsScalarFieldEnum[]
  }

  /**
   * blog_announcements findFirstOrThrow
   */
  export type blog_announcementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * Filter, which blog_announcements to fetch.
     */
    where?: blog_announcementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_announcements to fetch.
     */
    orderBy?: blog_announcementsOrderByWithRelationInput | blog_announcementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blog_announcements.
     */
    cursor?: blog_announcementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blog_announcements.
     */
    distinct?: Blog_announcementsScalarFieldEnum | Blog_announcementsScalarFieldEnum[]
  }

  /**
   * blog_announcements findMany
   */
  export type blog_announcementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * Filter, which blog_announcements to fetch.
     */
    where?: blog_announcementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blog_announcements to fetch.
     */
    orderBy?: blog_announcementsOrderByWithRelationInput | blog_announcementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blog_announcements.
     */
    cursor?: blog_announcementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blog_announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blog_announcements.
     */
    skip?: number
    distinct?: Blog_announcementsScalarFieldEnum | Blog_announcementsScalarFieldEnum[]
  }

  /**
   * blog_announcements create
   */
  export type blog_announcementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * The data needed to create a blog_announcements.
     */
    data: XOR<blog_announcementsCreateInput, blog_announcementsUncheckedCreateInput>
  }

  /**
   * blog_announcements createMany
   */
  export type blog_announcementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blog_announcements.
     */
    data: blog_announcementsCreateManyInput | blog_announcementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blog_announcements update
   */
  export type blog_announcementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * The data needed to update a blog_announcements.
     */
    data: XOR<blog_announcementsUpdateInput, blog_announcementsUncheckedUpdateInput>
    /**
     * Choose, which blog_announcements to update.
     */
    where: blog_announcementsWhereUniqueInput
  }

  /**
   * blog_announcements updateMany
   */
  export type blog_announcementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blog_announcements.
     */
    data: XOR<blog_announcementsUpdateManyMutationInput, blog_announcementsUncheckedUpdateManyInput>
    /**
     * Filter which blog_announcements to update
     */
    where?: blog_announcementsWhereInput
    /**
     * Limit how many blog_announcements to update.
     */
    limit?: number
  }

  /**
   * blog_announcements upsert
   */
  export type blog_announcementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * The filter to search for the blog_announcements to update in case it exists.
     */
    where: blog_announcementsWhereUniqueInput
    /**
     * In case the blog_announcements found by the `where` argument doesn't exist, create a new blog_announcements with this data.
     */
    create: XOR<blog_announcementsCreateInput, blog_announcementsUncheckedCreateInput>
    /**
     * In case the blog_announcements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blog_announcementsUpdateInput, blog_announcementsUncheckedUpdateInput>
  }

  /**
   * blog_announcements delete
   */
  export type blog_announcementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
    /**
     * Filter which blog_announcements to delete.
     */
    where: blog_announcementsWhereUniqueInput
  }

  /**
   * blog_announcements deleteMany
   */
  export type blog_announcementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog_announcements to delete
     */
    where?: blog_announcementsWhereInput
    /**
     * Limit how many blog_announcements to delete.
     */
    limit?: number
  }

  /**
   * blog_announcements without action
   */
  export type blog_announcementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog_announcements
     */
    select?: blog_announcementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blog_announcements
     */
    omit?: blog_announcementsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Sys_userScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    roleId: 'roleId',
    account: 'account'
  };

  export type Sys_userScalarFieldEnum = (typeof Sys_userScalarFieldEnum)[keyof typeof Sys_userScalarFieldEnum]


  export const Sys_accountScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    provider: 'provider',
    value: 'value',
    userId: 'userId'
  };

  export type Sys_accountScalarFieldEnum = (typeof Sys_accountScalarFieldEnum)[keyof typeof Sys_accountScalarFieldEnum]


  export const Sys_menuScalarFieldEnum: {
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

  export type Sys_menuScalarFieldEnum = (typeof Sys_menuScalarFieldEnum)[keyof typeof Sys_menuScalarFieldEnum]


  export const Sys_user_ban_menuScalarFieldEnum: {
    userId: 'userId',
    menuId: 'menuId'
  };

  export type Sys_user_ban_menuScalarFieldEnum = (typeof Sys_user_ban_menuScalarFieldEnum)[keyof typeof Sys_user_ban_menuScalarFieldEnum]


  export const Sys_menu_on_roleScalarFieldEnum: {
    roleId: 'roleId',
    menuId: 'menuId',
    power: 'power'
  };

  export type Sys_menu_on_roleScalarFieldEnum = (typeof Sys_menu_on_roleScalarFieldEnum)[keyof typeof Sys_menu_on_roleScalarFieldEnum]


  export const Sys_roleScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    status: 'status',
    comment: 'comment',
    sort: 'sort'
  };

  export type Sys_roleScalarFieldEnum = (typeof Sys_roleScalarFieldEnum)[keyof typeof Sys_roleScalarFieldEnum]


  export const Sys_mediaScalarFieldEnum: {
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

  export type Sys_mediaScalarFieldEnum = (typeof Sys_mediaScalarFieldEnum)[keyof typeof Sys_mediaScalarFieldEnum]


  export const Sys_user_mediaScalarFieldEnum: {
    userId: 'userId',
    mediaId: 'mediaId'
  };

  export type Sys_user_mediaScalarFieldEnum = (typeof Sys_user_mediaScalarFieldEnum)[keyof typeof Sys_user_mediaScalarFieldEnum]


  export const Blog_categoriesScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name'
  };

  export type Blog_categoriesScalarFieldEnum = (typeof Blog_categoriesScalarFieldEnum)[keyof typeof Blog_categoriesScalarFieldEnum]


  export const Blog_postsScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    content: 'content',
    status: 'status',
    userId: 'userId',
    categoriesId: 'categoriesId'
  };

  export type Blog_postsScalarFieldEnum = (typeof Blog_postsScalarFieldEnum)[keyof typeof Blog_postsScalarFieldEnum]


  export const Blog_posts_on_tagsScalarFieldEnum: {
    postsId: 'postsId',
    tagId: 'tagId'
  };

  export type Blog_posts_on_tagsScalarFieldEnum = (typeof Blog_posts_on_tagsScalarFieldEnum)[keyof typeof Blog_posts_on_tagsScalarFieldEnum]


  export const Blog_tagScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name'
  };

  export type Blog_tagScalarFieldEnum = (typeof Blog_tagScalarFieldEnum)[keyof typeof Blog_tagScalarFieldEnum]


  export const Blog_commentsScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    status: 'status',
    userId: 'userId',
    postId: 'postId'
  };

  export type Blog_commentsScalarFieldEnum = (typeof Blog_commentsScalarFieldEnum)[keyof typeof Blog_commentsScalarFieldEnum]


  export const Blog_linksScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    url: 'url',
    logo: 'logo',
    sort: 'sort',
    status: 'status'
  };

  export type Blog_linksScalarFieldEnum = (typeof Blog_linksScalarFieldEnum)[keyof typeof Blog_linksScalarFieldEnum]


  export const Blog_announcementsScalarFieldEnum: {
    uid: 'uid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    content: 'content',
    sort: 'sort',
    status: 'status'
  };

  export type Blog_announcementsScalarFieldEnum = (typeof Blog_announcementsScalarFieldEnum)[keyof typeof Blog_announcementsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const sys_userOrderByRelevanceFieldEnum: {
    uid: 'uid',
    name: 'name',
    roleId: 'roleId',
    account: 'account'
  };

  export type sys_userOrderByRelevanceFieldEnum = (typeof sys_userOrderByRelevanceFieldEnum)[keyof typeof sys_userOrderByRelevanceFieldEnum]


  export const sys_accountOrderByRelevanceFieldEnum: {
    uid: 'uid',
    value: 'value',
    userId: 'userId'
  };

  export type sys_accountOrderByRelevanceFieldEnum = (typeof sys_accountOrderByRelevanceFieldEnum)[keyof typeof sys_accountOrderByRelevanceFieldEnum]


  export const sys_menuOrderByRelevanceFieldEnum: {
    uid: 'uid',
    name: 'name',
    path: 'path',
    comment: 'comment',
    parentId: 'parentId'
  };

  export type sys_menuOrderByRelevanceFieldEnum = (typeof sys_menuOrderByRelevanceFieldEnum)[keyof typeof sys_menuOrderByRelevanceFieldEnum]


  export const sys_user_ban_menuOrderByRelevanceFieldEnum: {
    userId: 'userId',
    menuId: 'menuId'
  };

  export type sys_user_ban_menuOrderByRelevanceFieldEnum = (typeof sys_user_ban_menuOrderByRelevanceFieldEnum)[keyof typeof sys_user_ban_menuOrderByRelevanceFieldEnum]


  export const sys_menu_on_roleOrderByRelevanceFieldEnum: {
    roleId: 'roleId',
    menuId: 'menuId'
  };

  export type sys_menu_on_roleOrderByRelevanceFieldEnum = (typeof sys_menu_on_roleOrderByRelevanceFieldEnum)[keyof typeof sys_menu_on_roleOrderByRelevanceFieldEnum]


  export const sys_roleOrderByRelevanceFieldEnum: {
    uid: 'uid',
    name: 'name',
    comment: 'comment'
  };

  export type sys_roleOrderByRelevanceFieldEnum = (typeof sys_roleOrderByRelevanceFieldEnum)[keyof typeof sys_roleOrderByRelevanceFieldEnum]


  export const sys_mediaOrderByRelevanceFieldEnum: {
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

  export type sys_mediaOrderByRelevanceFieldEnum = (typeof sys_mediaOrderByRelevanceFieldEnum)[keyof typeof sys_mediaOrderByRelevanceFieldEnum]


  export const sys_user_mediaOrderByRelevanceFieldEnum: {
    userId: 'userId',
    mediaId: 'mediaId'
  };

  export type sys_user_mediaOrderByRelevanceFieldEnum = (typeof sys_user_mediaOrderByRelevanceFieldEnum)[keyof typeof sys_user_mediaOrderByRelevanceFieldEnum]


  export const blog_categoriesOrderByRelevanceFieldEnum: {
    uid: 'uid',
    name: 'name'
  };

  export type blog_categoriesOrderByRelevanceFieldEnum = (typeof blog_categoriesOrderByRelevanceFieldEnum)[keyof typeof blog_categoriesOrderByRelevanceFieldEnum]


  export const blog_postsOrderByRelevanceFieldEnum: {
    uid: 'uid',
    title: 'title',
    content: 'content',
    userId: 'userId',
    categoriesId: 'categoriesId'
  };

  export type blog_postsOrderByRelevanceFieldEnum = (typeof blog_postsOrderByRelevanceFieldEnum)[keyof typeof blog_postsOrderByRelevanceFieldEnum]


  export const blog_posts_on_tagsOrderByRelevanceFieldEnum: {
    postsId: 'postsId',
    tagId: 'tagId'
  };

  export type blog_posts_on_tagsOrderByRelevanceFieldEnum = (typeof blog_posts_on_tagsOrderByRelevanceFieldEnum)[keyof typeof blog_posts_on_tagsOrderByRelevanceFieldEnum]


  export const blog_tagOrderByRelevanceFieldEnum: {
    uid: 'uid',
    name: 'name'
  };

  export type blog_tagOrderByRelevanceFieldEnum = (typeof blog_tagOrderByRelevanceFieldEnum)[keyof typeof blog_tagOrderByRelevanceFieldEnum]


  export const blog_commentsOrderByRelevanceFieldEnum: {
    uid: 'uid',
    content: 'content',
    userId: 'userId',
    postId: 'postId'
  };

  export type blog_commentsOrderByRelevanceFieldEnum = (typeof blog_commentsOrderByRelevanceFieldEnum)[keyof typeof blog_commentsOrderByRelevanceFieldEnum]


  export const blog_linksOrderByRelevanceFieldEnum: {
    uid: 'uid',
    name: 'name',
    url: 'url',
    logo: 'logo'
  };

  export type blog_linksOrderByRelevanceFieldEnum = (typeof blog_linksOrderByRelevanceFieldEnum)[keyof typeof blog_linksOrderByRelevanceFieldEnum]


  export const blog_announcementsOrderByRelevanceFieldEnum: {
    uid: 'uid',
    title: 'title',
    content: 'content'
  };

  export type blog_announcementsOrderByRelevanceFieldEnum = (typeof blog_announcementsOrderByRelevanceFieldEnum)[keyof typeof blog_announcementsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'sys_account_provider'
   */
  export type Enumsys_account_providerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sys_account_provider'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type sys_userWhereInput = {
    AND?: sys_userWhereInput | sys_userWhereInput[]
    OR?: sys_userWhereInput[]
    NOT?: sys_userWhereInput | sys_userWhereInput[]
    uid?: StringFilter<"sys_user"> | string
    createdAt?: DateTimeFilter<"sys_user"> | Date | string
    updatedAt?: DateTimeFilter<"sys_user"> | Date | string
    name?: StringFilter<"sys_user"> | string
    roleId?: StringNullableFilter<"sys_user"> | string | null
    account?: StringFilter<"sys_user"> | string
    accounts?: Sys_accountListRelationFilter
    role?: XOR<Sys_roleNullableScalarRelationFilter, sys_roleWhereInput> | null
    ban_menus?: Sys_user_ban_menuListRelationFilter
    user_media?: Sys_user_mediaListRelationFilter
    blog_posts?: Blog_postsListRelationFilter
    blog_comments?: Blog_commentsListRelationFilter
  }

  export type sys_userOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    roleId?: SortOrderInput | SortOrder
    account?: SortOrder
    accounts?: sys_accountOrderByRelationAggregateInput
    role?: sys_roleOrderByWithRelationInput
    ban_menus?: sys_user_ban_menuOrderByRelationAggregateInput
    user_media?: sys_user_mediaOrderByRelationAggregateInput
    blog_posts?: blog_postsOrderByRelationAggregateInput
    blog_comments?: blog_commentsOrderByRelationAggregateInput
    _relevance?: sys_userOrderByRelevanceInput
  }

  export type sys_userWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    account?: string
    AND?: sys_userWhereInput | sys_userWhereInput[]
    OR?: sys_userWhereInput[]
    NOT?: sys_userWhereInput | sys_userWhereInput[]
    createdAt?: DateTimeFilter<"sys_user"> | Date | string
    updatedAt?: DateTimeFilter<"sys_user"> | Date | string
    name?: StringFilter<"sys_user"> | string
    roleId?: StringNullableFilter<"sys_user"> | string | null
    accounts?: Sys_accountListRelationFilter
    role?: XOR<Sys_roleNullableScalarRelationFilter, sys_roleWhereInput> | null
    ban_menus?: Sys_user_ban_menuListRelationFilter
    user_media?: Sys_user_mediaListRelationFilter
    blog_posts?: Blog_postsListRelationFilter
    blog_comments?: Blog_commentsListRelationFilter
  }, "uid" | "account">

  export type sys_userOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    roleId?: SortOrderInput | SortOrder
    account?: SortOrder
    _count?: sys_userCountOrderByAggregateInput
    _max?: sys_userMaxOrderByAggregateInput
    _min?: sys_userMinOrderByAggregateInput
  }

  export type sys_userScalarWhereWithAggregatesInput = {
    AND?: sys_userScalarWhereWithAggregatesInput | sys_userScalarWhereWithAggregatesInput[]
    OR?: sys_userScalarWhereWithAggregatesInput[]
    NOT?: sys_userScalarWhereWithAggregatesInput | sys_userScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"sys_user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sys_user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sys_user"> | Date | string
    name?: StringWithAggregatesFilter<"sys_user"> | string
    roleId?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    account?: StringWithAggregatesFilter<"sys_user"> | string
  }

  export type sys_accountWhereInput = {
    AND?: sys_accountWhereInput | sys_accountWhereInput[]
    OR?: sys_accountWhereInput[]
    NOT?: sys_accountWhereInput | sys_accountWhereInput[]
    uid?: StringFilter<"sys_account"> | string
    createdAt?: DateTimeFilter<"sys_account"> | Date | string
    updatedAt?: DateTimeFilter<"sys_account"> | Date | string
    provider?: Enumsys_account_providerFilter<"sys_account"> | $Enums.sys_account_provider
    value?: StringFilter<"sys_account"> | string
    userId?: StringFilter<"sys_account"> | string
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
  }

  export type sys_accountOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    user?: sys_userOrderByWithRelationInput
    _relevance?: sys_accountOrderByRelevanceInput
  }

  export type sys_accountWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    provider_value?: sys_accountProviderValueCompoundUniqueInput
    AND?: sys_accountWhereInput | sys_accountWhereInput[]
    OR?: sys_accountWhereInput[]
    NOT?: sys_accountWhereInput | sys_accountWhereInput[]
    createdAt?: DateTimeFilter<"sys_account"> | Date | string
    updatedAt?: DateTimeFilter<"sys_account"> | Date | string
    provider?: Enumsys_account_providerFilter<"sys_account"> | $Enums.sys_account_provider
    value?: StringFilter<"sys_account"> | string
    userId?: StringFilter<"sys_account"> | string
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
  }, "uid" | "provider_value">

  export type sys_accountOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    _count?: sys_accountCountOrderByAggregateInput
    _max?: sys_accountMaxOrderByAggregateInput
    _min?: sys_accountMinOrderByAggregateInput
  }

  export type sys_accountScalarWhereWithAggregatesInput = {
    AND?: sys_accountScalarWhereWithAggregatesInput | sys_accountScalarWhereWithAggregatesInput[]
    OR?: sys_accountScalarWhereWithAggregatesInput[]
    NOT?: sys_accountScalarWhereWithAggregatesInput | sys_accountScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"sys_account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sys_account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sys_account"> | Date | string
    provider?: Enumsys_account_providerWithAggregatesFilter<"sys_account"> | $Enums.sys_account_provider
    value?: StringWithAggregatesFilter<"sys_account"> | string
    userId?: StringWithAggregatesFilter<"sys_account"> | string
  }

  export type sys_menuWhereInput = {
    AND?: sys_menuWhereInput | sys_menuWhereInput[]
    OR?: sys_menuWhereInput[]
    NOT?: sys_menuWhereInput | sys_menuWhereInput[]
    uid?: StringFilter<"sys_menu"> | string
    createdAt?: DateTimeFilter<"sys_menu"> | Date | string
    updatedAt?: DateTimeFilter<"sys_menu"> | Date | string
    name?: StringFilter<"sys_menu"> | string
    path?: StringFilter<"sys_menu"> | string
    sort?: IntFilter<"sys_menu"> | number
    powers?: IntFilter<"sys_menu"> | number
    comment?: StringNullableFilter<"sys_menu"> | string | null
    parentId?: StringNullableFilter<"sys_menu"> | string | null
    parent?: XOR<Sys_menuNullableScalarRelationFilter, sys_menuWhereInput> | null
    children?: Sys_menuListRelationFilter
    roles?: Sys_menu_on_roleListRelationFilter
    user_bans?: Sys_user_ban_menuListRelationFilter
  }

  export type sys_menuOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sort?: SortOrder
    powers?: SortOrder
    comment?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: sys_menuOrderByWithRelationInput
    children?: sys_menuOrderByRelationAggregateInput
    roles?: sys_menu_on_roleOrderByRelationAggregateInput
    user_bans?: sys_user_ban_menuOrderByRelationAggregateInput
    _relevance?: sys_menuOrderByRelevanceInput
  }

  export type sys_menuWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    path?: string
    AND?: sys_menuWhereInput | sys_menuWhereInput[]
    OR?: sys_menuWhereInput[]
    NOT?: sys_menuWhereInput | sys_menuWhereInput[]
    createdAt?: DateTimeFilter<"sys_menu"> | Date | string
    updatedAt?: DateTimeFilter<"sys_menu"> | Date | string
    name?: StringFilter<"sys_menu"> | string
    sort?: IntFilter<"sys_menu"> | number
    powers?: IntFilter<"sys_menu"> | number
    comment?: StringNullableFilter<"sys_menu"> | string | null
    parentId?: StringNullableFilter<"sys_menu"> | string | null
    parent?: XOR<Sys_menuNullableScalarRelationFilter, sys_menuWhereInput> | null
    children?: Sys_menuListRelationFilter
    roles?: Sys_menu_on_roleListRelationFilter
    user_bans?: Sys_user_ban_menuListRelationFilter
  }, "uid" | "path">

  export type sys_menuOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sort?: SortOrder
    powers?: SortOrder
    comment?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: sys_menuCountOrderByAggregateInput
    _avg?: sys_menuAvgOrderByAggregateInput
    _max?: sys_menuMaxOrderByAggregateInput
    _min?: sys_menuMinOrderByAggregateInput
    _sum?: sys_menuSumOrderByAggregateInput
  }

  export type sys_menuScalarWhereWithAggregatesInput = {
    AND?: sys_menuScalarWhereWithAggregatesInput | sys_menuScalarWhereWithAggregatesInput[]
    OR?: sys_menuScalarWhereWithAggregatesInput[]
    NOT?: sys_menuScalarWhereWithAggregatesInput | sys_menuScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"sys_menu"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sys_menu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sys_menu"> | Date | string
    name?: StringWithAggregatesFilter<"sys_menu"> | string
    path?: StringWithAggregatesFilter<"sys_menu"> | string
    sort?: IntWithAggregatesFilter<"sys_menu"> | number
    powers?: IntWithAggregatesFilter<"sys_menu"> | number
    comment?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
  }

  export type sys_user_ban_menuWhereInput = {
    AND?: sys_user_ban_menuWhereInput | sys_user_ban_menuWhereInput[]
    OR?: sys_user_ban_menuWhereInput[]
    NOT?: sys_user_ban_menuWhereInput | sys_user_ban_menuWhereInput[]
    userId?: StringFilter<"sys_user_ban_menu"> | string
    menuId?: StringFilter<"sys_user_ban_menu"> | string
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
    menu?: XOR<Sys_menuScalarRelationFilter, sys_menuWhereInput>
  }

  export type sys_user_ban_menuOrderByWithRelationInput = {
    userId?: SortOrder
    menuId?: SortOrder
    user?: sys_userOrderByWithRelationInput
    menu?: sys_menuOrderByWithRelationInput
    _relevance?: sys_user_ban_menuOrderByRelevanceInput
  }

  export type sys_user_ban_menuWhereUniqueInput = Prisma.AtLeast<{
    userId_menuId?: sys_user_ban_menuUserIdMenuIdCompoundUniqueInput
    AND?: sys_user_ban_menuWhereInput | sys_user_ban_menuWhereInput[]
    OR?: sys_user_ban_menuWhereInput[]
    NOT?: sys_user_ban_menuWhereInput | sys_user_ban_menuWhereInput[]
    userId?: StringFilter<"sys_user_ban_menu"> | string
    menuId?: StringFilter<"sys_user_ban_menu"> | string
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
    menu?: XOR<Sys_menuScalarRelationFilter, sys_menuWhereInput>
  }, "userId_menuId">

  export type sys_user_ban_menuOrderByWithAggregationInput = {
    userId?: SortOrder
    menuId?: SortOrder
    _count?: sys_user_ban_menuCountOrderByAggregateInput
    _max?: sys_user_ban_menuMaxOrderByAggregateInput
    _min?: sys_user_ban_menuMinOrderByAggregateInput
  }

  export type sys_user_ban_menuScalarWhereWithAggregatesInput = {
    AND?: sys_user_ban_menuScalarWhereWithAggregatesInput | sys_user_ban_menuScalarWhereWithAggregatesInput[]
    OR?: sys_user_ban_menuScalarWhereWithAggregatesInput[]
    NOT?: sys_user_ban_menuScalarWhereWithAggregatesInput | sys_user_ban_menuScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"sys_user_ban_menu"> | string
    menuId?: StringWithAggregatesFilter<"sys_user_ban_menu"> | string
  }

  export type sys_menu_on_roleWhereInput = {
    AND?: sys_menu_on_roleWhereInput | sys_menu_on_roleWhereInput[]
    OR?: sys_menu_on_roleWhereInput[]
    NOT?: sys_menu_on_roleWhereInput | sys_menu_on_roleWhereInput[]
    roleId?: StringFilter<"sys_menu_on_role"> | string
    menuId?: StringFilter<"sys_menu_on_role"> | string
    power?: IntFilter<"sys_menu_on_role"> | number
    menu?: XOR<Sys_menuScalarRelationFilter, sys_menuWhereInput>
    role?: XOR<Sys_roleScalarRelationFilter, sys_roleWhereInput>
  }

  export type sys_menu_on_roleOrderByWithRelationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    power?: SortOrder
    menu?: sys_menuOrderByWithRelationInput
    role?: sys_roleOrderByWithRelationInput
    _relevance?: sys_menu_on_roleOrderByRelevanceInput
  }

  export type sys_menu_on_roleWhereUniqueInput = Prisma.AtLeast<{
    roleId_menuId?: sys_menu_on_roleRoleIdMenuIdCompoundUniqueInput
    AND?: sys_menu_on_roleWhereInput | sys_menu_on_roleWhereInput[]
    OR?: sys_menu_on_roleWhereInput[]
    NOT?: sys_menu_on_roleWhereInput | sys_menu_on_roleWhereInput[]
    roleId?: StringFilter<"sys_menu_on_role"> | string
    menuId?: StringFilter<"sys_menu_on_role"> | string
    power?: IntFilter<"sys_menu_on_role"> | number
    menu?: XOR<Sys_menuScalarRelationFilter, sys_menuWhereInput>
    role?: XOR<Sys_roleScalarRelationFilter, sys_roleWhereInput>
  }, "roleId_menuId">

  export type sys_menu_on_roleOrderByWithAggregationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    power?: SortOrder
    _count?: sys_menu_on_roleCountOrderByAggregateInput
    _avg?: sys_menu_on_roleAvgOrderByAggregateInput
    _max?: sys_menu_on_roleMaxOrderByAggregateInput
    _min?: sys_menu_on_roleMinOrderByAggregateInput
    _sum?: sys_menu_on_roleSumOrderByAggregateInput
  }

  export type sys_menu_on_roleScalarWhereWithAggregatesInput = {
    AND?: sys_menu_on_roleScalarWhereWithAggregatesInput | sys_menu_on_roleScalarWhereWithAggregatesInput[]
    OR?: sys_menu_on_roleScalarWhereWithAggregatesInput[]
    NOT?: sys_menu_on_roleScalarWhereWithAggregatesInput | sys_menu_on_roleScalarWhereWithAggregatesInput[]
    roleId?: StringWithAggregatesFilter<"sys_menu_on_role"> | string
    menuId?: StringWithAggregatesFilter<"sys_menu_on_role"> | string
    power?: IntWithAggregatesFilter<"sys_menu_on_role"> | number
  }

  export type sys_roleWhereInput = {
    AND?: sys_roleWhereInput | sys_roleWhereInput[]
    OR?: sys_roleWhereInput[]
    NOT?: sys_roleWhereInput | sys_roleWhereInput[]
    uid?: StringFilter<"sys_role"> | string
    createdAt?: DateTimeFilter<"sys_role"> | Date | string
    updatedAt?: DateTimeFilter<"sys_role"> | Date | string
    name?: StringFilter<"sys_role"> | string
    status?: BoolFilter<"sys_role"> | boolean
    comment?: StringNullableFilter<"sys_role"> | string | null
    sort?: IntFilter<"sys_role"> | number
    menus?: Sys_menu_on_roleListRelationFilter
    users?: Sys_userListRelationFilter
  }

  export type sys_roleOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    sort?: SortOrder
    menus?: sys_menu_on_roleOrderByRelationAggregateInput
    users?: sys_userOrderByRelationAggregateInput
    _relevance?: sys_roleOrderByRelevanceInput
  }

  export type sys_roleWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    name?: string
    AND?: sys_roleWhereInput | sys_roleWhereInput[]
    OR?: sys_roleWhereInput[]
    NOT?: sys_roleWhereInput | sys_roleWhereInput[]
    createdAt?: DateTimeFilter<"sys_role"> | Date | string
    updatedAt?: DateTimeFilter<"sys_role"> | Date | string
    status?: BoolFilter<"sys_role"> | boolean
    comment?: StringNullableFilter<"sys_role"> | string | null
    sort?: IntFilter<"sys_role"> | number
    menus?: Sys_menu_on_roleListRelationFilter
    users?: Sys_userListRelationFilter
  }, "uid" | "name">

  export type sys_roleOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    sort?: SortOrder
    _count?: sys_roleCountOrderByAggregateInput
    _avg?: sys_roleAvgOrderByAggregateInput
    _max?: sys_roleMaxOrderByAggregateInput
    _min?: sys_roleMinOrderByAggregateInput
    _sum?: sys_roleSumOrderByAggregateInput
  }

  export type sys_roleScalarWhereWithAggregatesInput = {
    AND?: sys_roleScalarWhereWithAggregatesInput | sys_roleScalarWhereWithAggregatesInput[]
    OR?: sys_roleScalarWhereWithAggregatesInput[]
    NOT?: sys_roleScalarWhereWithAggregatesInput | sys_roleScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"sys_role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sys_role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sys_role"> | Date | string
    name?: StringWithAggregatesFilter<"sys_role"> | string
    status?: BoolWithAggregatesFilter<"sys_role"> | boolean
    comment?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    sort?: IntWithAggregatesFilter<"sys_role"> | number
  }

  export type sys_mediaWhereInput = {
    AND?: sys_mediaWhereInput | sys_mediaWhereInput[]
    OR?: sys_mediaWhereInput[]
    NOT?: sys_mediaWhereInput | sys_mediaWhereInput[]
    uid?: StringFilter<"sys_media"> | string
    createdAt?: DateTimeFilter<"sys_media"> | Date | string
    updatedAt?: DateTimeFilter<"sys_media"> | Date | string
    name?: StringFilter<"sys_media"> | string
    size?: IntFilter<"sys_media"> | number
    hash?: StringFilter<"sys_media"> | string
    mimeType?: StringFilter<"sys_media"> | string
    extension?: StringFilter<"sys_media"> | string
    path?: StringFilter<"sys_media"> | string
    url?: StringNullableFilter<"sys_media"> | string | null
    isWechat?: BoolFilter<"sys_media"> | boolean
    wechat_id?: StringNullableFilter<"sys_media"> | string | null
    enabled?: BoolFilter<"sys_media"> | boolean
    type?: StringFilter<"sys_media"> | string
    width?: IntNullableFilter<"sys_media"> | number | null
    height?: IntNullableFilter<"sys_media"> | number | null
    duration?: IntNullableFilter<"sys_media"> | number | null
    users?: Sys_user_mediaListRelationFilter
  }

  export type sys_mediaOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    size?: SortOrder
    hash?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    path?: SortOrder
    url?: SortOrderInput | SortOrder
    isWechat?: SortOrder
    wechat_id?: SortOrderInput | SortOrder
    enabled?: SortOrder
    type?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    users?: sys_user_mediaOrderByRelationAggregateInput
    _relevance?: sys_mediaOrderByRelevanceInput
  }

  export type sys_mediaWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    hash?: string
    wechat_id?: string
    AND?: sys_mediaWhereInput | sys_mediaWhereInput[]
    OR?: sys_mediaWhereInput[]
    NOT?: sys_mediaWhereInput | sys_mediaWhereInput[]
    createdAt?: DateTimeFilter<"sys_media"> | Date | string
    updatedAt?: DateTimeFilter<"sys_media"> | Date | string
    name?: StringFilter<"sys_media"> | string
    size?: IntFilter<"sys_media"> | number
    mimeType?: StringFilter<"sys_media"> | string
    extension?: StringFilter<"sys_media"> | string
    path?: StringFilter<"sys_media"> | string
    url?: StringNullableFilter<"sys_media"> | string | null
    isWechat?: BoolFilter<"sys_media"> | boolean
    enabled?: BoolFilter<"sys_media"> | boolean
    type?: StringFilter<"sys_media"> | string
    width?: IntNullableFilter<"sys_media"> | number | null
    height?: IntNullableFilter<"sys_media"> | number | null
    duration?: IntNullableFilter<"sys_media"> | number | null
    users?: Sys_user_mediaListRelationFilter
  }, "uid" | "hash" | "wechat_id">

  export type sys_mediaOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    size?: SortOrder
    hash?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    path?: SortOrder
    url?: SortOrderInput | SortOrder
    isWechat?: SortOrder
    wechat_id?: SortOrderInput | SortOrder
    enabled?: SortOrder
    type?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    _count?: sys_mediaCountOrderByAggregateInput
    _avg?: sys_mediaAvgOrderByAggregateInput
    _max?: sys_mediaMaxOrderByAggregateInput
    _min?: sys_mediaMinOrderByAggregateInput
    _sum?: sys_mediaSumOrderByAggregateInput
  }

  export type sys_mediaScalarWhereWithAggregatesInput = {
    AND?: sys_mediaScalarWhereWithAggregatesInput | sys_mediaScalarWhereWithAggregatesInput[]
    OR?: sys_mediaScalarWhereWithAggregatesInput[]
    NOT?: sys_mediaScalarWhereWithAggregatesInput | sys_mediaScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"sys_media"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sys_media"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sys_media"> | Date | string
    name?: StringWithAggregatesFilter<"sys_media"> | string
    size?: IntWithAggregatesFilter<"sys_media"> | number
    hash?: StringWithAggregatesFilter<"sys_media"> | string
    mimeType?: StringWithAggregatesFilter<"sys_media"> | string
    extension?: StringWithAggregatesFilter<"sys_media"> | string
    path?: StringWithAggregatesFilter<"sys_media"> | string
    url?: StringNullableWithAggregatesFilter<"sys_media"> | string | null
    isWechat?: BoolWithAggregatesFilter<"sys_media"> | boolean
    wechat_id?: StringNullableWithAggregatesFilter<"sys_media"> | string | null
    enabled?: BoolWithAggregatesFilter<"sys_media"> | boolean
    type?: StringWithAggregatesFilter<"sys_media"> | string
    width?: IntNullableWithAggregatesFilter<"sys_media"> | number | null
    height?: IntNullableWithAggregatesFilter<"sys_media"> | number | null
    duration?: IntNullableWithAggregatesFilter<"sys_media"> | number | null
  }

  export type sys_user_mediaWhereInput = {
    AND?: sys_user_mediaWhereInput | sys_user_mediaWhereInput[]
    OR?: sys_user_mediaWhereInput[]
    NOT?: sys_user_mediaWhereInput | sys_user_mediaWhereInput[]
    userId?: StringFilter<"sys_user_media"> | string
    mediaId?: StringFilter<"sys_user_media"> | string
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
    media?: XOR<Sys_mediaScalarRelationFilter, sys_mediaWhereInput>
  }

  export type sys_user_mediaOrderByWithRelationInput = {
    userId?: SortOrder
    mediaId?: SortOrder
    user?: sys_userOrderByWithRelationInput
    media?: sys_mediaOrderByWithRelationInput
    _relevance?: sys_user_mediaOrderByRelevanceInput
  }

  export type sys_user_mediaWhereUniqueInput = Prisma.AtLeast<{
    userId_mediaId?: sys_user_mediaUserIdMediaIdCompoundUniqueInput
    AND?: sys_user_mediaWhereInput | sys_user_mediaWhereInput[]
    OR?: sys_user_mediaWhereInput[]
    NOT?: sys_user_mediaWhereInput | sys_user_mediaWhereInput[]
    userId?: StringFilter<"sys_user_media"> | string
    mediaId?: StringFilter<"sys_user_media"> | string
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
    media?: XOR<Sys_mediaScalarRelationFilter, sys_mediaWhereInput>
  }, "userId_mediaId">

  export type sys_user_mediaOrderByWithAggregationInput = {
    userId?: SortOrder
    mediaId?: SortOrder
    _count?: sys_user_mediaCountOrderByAggregateInput
    _max?: sys_user_mediaMaxOrderByAggregateInput
    _min?: sys_user_mediaMinOrderByAggregateInput
  }

  export type sys_user_mediaScalarWhereWithAggregatesInput = {
    AND?: sys_user_mediaScalarWhereWithAggregatesInput | sys_user_mediaScalarWhereWithAggregatesInput[]
    OR?: sys_user_mediaScalarWhereWithAggregatesInput[]
    NOT?: sys_user_mediaScalarWhereWithAggregatesInput | sys_user_mediaScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"sys_user_media"> | string
    mediaId?: StringWithAggregatesFilter<"sys_user_media"> | string
  }

  export type blog_categoriesWhereInput = {
    AND?: blog_categoriesWhereInput | blog_categoriesWhereInput[]
    OR?: blog_categoriesWhereInput[]
    NOT?: blog_categoriesWhereInput | blog_categoriesWhereInput[]
    uid?: StringFilter<"blog_categories"> | string
    createdAt?: DateTimeFilter<"blog_categories"> | Date | string
    updatedAt?: DateTimeFilter<"blog_categories"> | Date | string
    name?: StringFilter<"blog_categories"> | string
    posts?: Blog_postsListRelationFilter
  }

  export type blog_categoriesOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    posts?: blog_postsOrderByRelationAggregateInput
    _relevance?: blog_categoriesOrderByRelevanceInput
  }

  export type blog_categoriesWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    AND?: blog_categoriesWhereInput | blog_categoriesWhereInput[]
    OR?: blog_categoriesWhereInput[]
    NOT?: blog_categoriesWhereInput | blog_categoriesWhereInput[]
    createdAt?: DateTimeFilter<"blog_categories"> | Date | string
    updatedAt?: DateTimeFilter<"blog_categories"> | Date | string
    name?: StringFilter<"blog_categories"> | string
    posts?: Blog_postsListRelationFilter
  }, "uid">

  export type blog_categoriesOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    _count?: blog_categoriesCountOrderByAggregateInput
    _max?: blog_categoriesMaxOrderByAggregateInput
    _min?: blog_categoriesMinOrderByAggregateInput
  }

  export type blog_categoriesScalarWhereWithAggregatesInput = {
    AND?: blog_categoriesScalarWhereWithAggregatesInput | blog_categoriesScalarWhereWithAggregatesInput[]
    OR?: blog_categoriesScalarWhereWithAggregatesInput[]
    NOT?: blog_categoriesScalarWhereWithAggregatesInput | blog_categoriesScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"blog_categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"blog_categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blog_categories"> | Date | string
    name?: StringWithAggregatesFilter<"blog_categories"> | string
  }

  export type blog_postsWhereInput = {
    AND?: blog_postsWhereInput | blog_postsWhereInput[]
    OR?: blog_postsWhereInput[]
    NOT?: blog_postsWhereInput | blog_postsWhereInput[]
    uid?: StringFilter<"blog_posts"> | string
    createdAt?: DateTimeFilter<"blog_posts"> | Date | string
    updatedAt?: DateTimeFilter<"blog_posts"> | Date | string
    title?: StringFilter<"blog_posts"> | string
    content?: StringFilter<"blog_posts"> | string
    status?: BoolFilter<"blog_posts"> | boolean
    userId?: StringFilter<"blog_posts"> | string
    categoriesId?: StringNullableFilter<"blog_posts"> | string | null
    categories?: XOR<Blog_categoriesNullableScalarRelationFilter, blog_categoriesWhereInput> | null
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
    tags?: Blog_posts_on_tagsListRelationFilter
    comments?: Blog_commentsListRelationFilter
  }

  export type blog_postsOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    categoriesId?: SortOrderInput | SortOrder
    categories?: blog_categoriesOrderByWithRelationInput
    user?: sys_userOrderByWithRelationInput
    tags?: blog_posts_on_tagsOrderByRelationAggregateInput
    comments?: blog_commentsOrderByRelationAggregateInput
    _relevance?: blog_postsOrderByRelevanceInput
  }

  export type blog_postsWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    AND?: blog_postsWhereInput | blog_postsWhereInput[]
    OR?: blog_postsWhereInput[]
    NOT?: blog_postsWhereInput | blog_postsWhereInput[]
    createdAt?: DateTimeFilter<"blog_posts"> | Date | string
    updatedAt?: DateTimeFilter<"blog_posts"> | Date | string
    title?: StringFilter<"blog_posts"> | string
    content?: StringFilter<"blog_posts"> | string
    status?: BoolFilter<"blog_posts"> | boolean
    userId?: StringFilter<"blog_posts"> | string
    categoriesId?: StringNullableFilter<"blog_posts"> | string | null
    categories?: XOR<Blog_categoriesNullableScalarRelationFilter, blog_categoriesWhereInput> | null
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
    tags?: Blog_posts_on_tagsListRelationFilter
    comments?: Blog_commentsListRelationFilter
  }, "uid">

  export type blog_postsOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    categoriesId?: SortOrderInput | SortOrder
    _count?: blog_postsCountOrderByAggregateInput
    _max?: blog_postsMaxOrderByAggregateInput
    _min?: blog_postsMinOrderByAggregateInput
  }

  export type blog_postsScalarWhereWithAggregatesInput = {
    AND?: blog_postsScalarWhereWithAggregatesInput | blog_postsScalarWhereWithAggregatesInput[]
    OR?: blog_postsScalarWhereWithAggregatesInput[]
    NOT?: blog_postsScalarWhereWithAggregatesInput | blog_postsScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"blog_posts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"blog_posts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blog_posts"> | Date | string
    title?: StringWithAggregatesFilter<"blog_posts"> | string
    content?: StringWithAggregatesFilter<"blog_posts"> | string
    status?: BoolWithAggregatesFilter<"blog_posts"> | boolean
    userId?: StringWithAggregatesFilter<"blog_posts"> | string
    categoriesId?: StringNullableWithAggregatesFilter<"blog_posts"> | string | null
  }

  export type blog_posts_on_tagsWhereInput = {
    AND?: blog_posts_on_tagsWhereInput | blog_posts_on_tagsWhereInput[]
    OR?: blog_posts_on_tagsWhereInput[]
    NOT?: blog_posts_on_tagsWhereInput | blog_posts_on_tagsWhereInput[]
    postsId?: StringFilter<"blog_posts_on_tags"> | string
    tagId?: StringFilter<"blog_posts_on_tags"> | string
    posts?: XOR<Blog_postsScalarRelationFilter, blog_postsWhereInput>
    tag?: XOR<Blog_tagScalarRelationFilter, blog_tagWhereInput>
  }

  export type blog_posts_on_tagsOrderByWithRelationInput = {
    postsId?: SortOrder
    tagId?: SortOrder
    posts?: blog_postsOrderByWithRelationInput
    tag?: blog_tagOrderByWithRelationInput
    _relevance?: blog_posts_on_tagsOrderByRelevanceInput
  }

  export type blog_posts_on_tagsWhereUniqueInput = Prisma.AtLeast<{
    postsId_tagId?: blog_posts_on_tagsPostsIdTagIdCompoundUniqueInput
    AND?: blog_posts_on_tagsWhereInput | blog_posts_on_tagsWhereInput[]
    OR?: blog_posts_on_tagsWhereInput[]
    NOT?: blog_posts_on_tagsWhereInput | blog_posts_on_tagsWhereInput[]
    postsId?: StringFilter<"blog_posts_on_tags"> | string
    tagId?: StringFilter<"blog_posts_on_tags"> | string
    posts?: XOR<Blog_postsScalarRelationFilter, blog_postsWhereInput>
    tag?: XOR<Blog_tagScalarRelationFilter, blog_tagWhereInput>
  }, "postsId_tagId">

  export type blog_posts_on_tagsOrderByWithAggregationInput = {
    postsId?: SortOrder
    tagId?: SortOrder
    _count?: blog_posts_on_tagsCountOrderByAggregateInput
    _max?: blog_posts_on_tagsMaxOrderByAggregateInput
    _min?: blog_posts_on_tagsMinOrderByAggregateInput
  }

  export type blog_posts_on_tagsScalarWhereWithAggregatesInput = {
    AND?: blog_posts_on_tagsScalarWhereWithAggregatesInput | blog_posts_on_tagsScalarWhereWithAggregatesInput[]
    OR?: blog_posts_on_tagsScalarWhereWithAggregatesInput[]
    NOT?: blog_posts_on_tagsScalarWhereWithAggregatesInput | blog_posts_on_tagsScalarWhereWithAggregatesInput[]
    postsId?: StringWithAggregatesFilter<"blog_posts_on_tags"> | string
    tagId?: StringWithAggregatesFilter<"blog_posts_on_tags"> | string
  }

  export type blog_tagWhereInput = {
    AND?: blog_tagWhereInput | blog_tagWhereInput[]
    OR?: blog_tagWhereInput[]
    NOT?: blog_tagWhereInput | blog_tagWhereInput[]
    uid?: StringFilter<"blog_tag"> | string
    createdAt?: DateTimeFilter<"blog_tag"> | Date | string
    updatedAt?: DateTimeFilter<"blog_tag"> | Date | string
    name?: StringFilter<"blog_tag"> | string
    blogs?: Blog_posts_on_tagsListRelationFilter
  }

  export type blog_tagOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    blogs?: blog_posts_on_tagsOrderByRelationAggregateInput
    _relevance?: blog_tagOrderByRelevanceInput
  }

  export type blog_tagWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    AND?: blog_tagWhereInput | blog_tagWhereInput[]
    OR?: blog_tagWhereInput[]
    NOT?: blog_tagWhereInput | blog_tagWhereInput[]
    createdAt?: DateTimeFilter<"blog_tag"> | Date | string
    updatedAt?: DateTimeFilter<"blog_tag"> | Date | string
    name?: StringFilter<"blog_tag"> | string
    blogs?: Blog_posts_on_tagsListRelationFilter
  }, "uid">

  export type blog_tagOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    _count?: blog_tagCountOrderByAggregateInput
    _max?: blog_tagMaxOrderByAggregateInput
    _min?: blog_tagMinOrderByAggregateInput
  }

  export type blog_tagScalarWhereWithAggregatesInput = {
    AND?: blog_tagScalarWhereWithAggregatesInput | blog_tagScalarWhereWithAggregatesInput[]
    OR?: blog_tagScalarWhereWithAggregatesInput[]
    NOT?: blog_tagScalarWhereWithAggregatesInput | blog_tagScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"blog_tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"blog_tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blog_tag"> | Date | string
    name?: StringWithAggregatesFilter<"blog_tag"> | string
  }

  export type blog_commentsWhereInput = {
    AND?: blog_commentsWhereInput | blog_commentsWhereInput[]
    OR?: blog_commentsWhereInput[]
    NOT?: blog_commentsWhereInput | blog_commentsWhereInput[]
    uid?: StringFilter<"blog_comments"> | string
    createdAt?: DateTimeFilter<"blog_comments"> | Date | string
    updatedAt?: DateTimeFilter<"blog_comments"> | Date | string
    content?: StringFilter<"blog_comments"> | string
    status?: BoolFilter<"blog_comments"> | boolean
    userId?: StringFilter<"blog_comments"> | string
    postId?: StringFilter<"blog_comments"> | string
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
    post?: XOR<Blog_postsScalarRelationFilter, blog_postsWhereInput>
  }

  export type blog_commentsOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: sys_userOrderByWithRelationInput
    post?: blog_postsOrderByWithRelationInput
    _relevance?: blog_commentsOrderByRelevanceInput
  }

  export type blog_commentsWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    AND?: blog_commentsWhereInput | blog_commentsWhereInput[]
    OR?: blog_commentsWhereInput[]
    NOT?: blog_commentsWhereInput | blog_commentsWhereInput[]
    createdAt?: DateTimeFilter<"blog_comments"> | Date | string
    updatedAt?: DateTimeFilter<"blog_comments"> | Date | string
    content?: StringFilter<"blog_comments"> | string
    status?: BoolFilter<"blog_comments"> | boolean
    userId?: StringFilter<"blog_comments"> | string
    postId?: StringFilter<"blog_comments"> | string
    user?: XOR<Sys_userScalarRelationFilter, sys_userWhereInput>
    post?: XOR<Blog_postsScalarRelationFilter, blog_postsWhereInput>
  }, "uid">

  export type blog_commentsOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: blog_commentsCountOrderByAggregateInput
    _max?: blog_commentsMaxOrderByAggregateInput
    _min?: blog_commentsMinOrderByAggregateInput
  }

  export type blog_commentsScalarWhereWithAggregatesInput = {
    AND?: blog_commentsScalarWhereWithAggregatesInput | blog_commentsScalarWhereWithAggregatesInput[]
    OR?: blog_commentsScalarWhereWithAggregatesInput[]
    NOT?: blog_commentsScalarWhereWithAggregatesInput | blog_commentsScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"blog_comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"blog_comments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blog_comments"> | Date | string
    content?: StringWithAggregatesFilter<"blog_comments"> | string
    status?: BoolWithAggregatesFilter<"blog_comments"> | boolean
    userId?: StringWithAggregatesFilter<"blog_comments"> | string
    postId?: StringWithAggregatesFilter<"blog_comments"> | string
  }

  export type blog_linksWhereInput = {
    AND?: blog_linksWhereInput | blog_linksWhereInput[]
    OR?: blog_linksWhereInput[]
    NOT?: blog_linksWhereInput | blog_linksWhereInput[]
    uid?: StringFilter<"blog_links"> | string
    createdAt?: DateTimeFilter<"blog_links"> | Date | string
    updatedAt?: DateTimeFilter<"blog_links"> | Date | string
    name?: StringFilter<"blog_links"> | string
    url?: StringFilter<"blog_links"> | string
    logo?: StringNullableFilter<"blog_links"> | string | null
    sort?: IntFilter<"blog_links"> | number
    status?: BoolFilter<"blog_links"> | boolean
  }

  export type blog_linksOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrderInput | SortOrder
    sort?: SortOrder
    status?: SortOrder
    _relevance?: blog_linksOrderByRelevanceInput
  }

  export type blog_linksWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    AND?: blog_linksWhereInput | blog_linksWhereInput[]
    OR?: blog_linksWhereInput[]
    NOT?: blog_linksWhereInput | blog_linksWhereInput[]
    createdAt?: DateTimeFilter<"blog_links"> | Date | string
    updatedAt?: DateTimeFilter<"blog_links"> | Date | string
    name?: StringFilter<"blog_links"> | string
    url?: StringFilter<"blog_links"> | string
    logo?: StringNullableFilter<"blog_links"> | string | null
    sort?: IntFilter<"blog_links"> | number
    status?: BoolFilter<"blog_links"> | boolean
  }, "uid">

  export type blog_linksOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrderInput | SortOrder
    sort?: SortOrder
    status?: SortOrder
    _count?: blog_linksCountOrderByAggregateInput
    _avg?: blog_linksAvgOrderByAggregateInput
    _max?: blog_linksMaxOrderByAggregateInput
    _min?: blog_linksMinOrderByAggregateInput
    _sum?: blog_linksSumOrderByAggregateInput
  }

  export type blog_linksScalarWhereWithAggregatesInput = {
    AND?: blog_linksScalarWhereWithAggregatesInput | blog_linksScalarWhereWithAggregatesInput[]
    OR?: blog_linksScalarWhereWithAggregatesInput[]
    NOT?: blog_linksScalarWhereWithAggregatesInput | blog_linksScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"blog_links"> | string
    createdAt?: DateTimeWithAggregatesFilter<"blog_links"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blog_links"> | Date | string
    name?: StringWithAggregatesFilter<"blog_links"> | string
    url?: StringWithAggregatesFilter<"blog_links"> | string
    logo?: StringNullableWithAggregatesFilter<"blog_links"> | string | null
    sort?: IntWithAggregatesFilter<"blog_links"> | number
    status?: BoolWithAggregatesFilter<"blog_links"> | boolean
  }

  export type blog_announcementsWhereInput = {
    AND?: blog_announcementsWhereInput | blog_announcementsWhereInput[]
    OR?: blog_announcementsWhereInput[]
    NOT?: blog_announcementsWhereInput | blog_announcementsWhereInput[]
    uid?: StringFilter<"blog_announcements"> | string
    createdAt?: DateTimeFilter<"blog_announcements"> | Date | string
    updatedAt?: DateTimeFilter<"blog_announcements"> | Date | string
    title?: StringFilter<"blog_announcements"> | string
    content?: StringFilter<"blog_announcements"> | string
    sort?: IntFilter<"blog_announcements"> | number
    status?: BoolFilter<"blog_announcements"> | boolean
  }

  export type blog_announcementsOrderByWithRelationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    sort?: SortOrder
    status?: SortOrder
    _relevance?: blog_announcementsOrderByRelevanceInput
  }

  export type blog_announcementsWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    AND?: blog_announcementsWhereInput | blog_announcementsWhereInput[]
    OR?: blog_announcementsWhereInput[]
    NOT?: blog_announcementsWhereInput | blog_announcementsWhereInput[]
    createdAt?: DateTimeFilter<"blog_announcements"> | Date | string
    updatedAt?: DateTimeFilter<"blog_announcements"> | Date | string
    title?: StringFilter<"blog_announcements"> | string
    content?: StringFilter<"blog_announcements"> | string
    sort?: IntFilter<"blog_announcements"> | number
    status?: BoolFilter<"blog_announcements"> | boolean
  }, "uid">

  export type blog_announcementsOrderByWithAggregationInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    sort?: SortOrder
    status?: SortOrder
    _count?: blog_announcementsCountOrderByAggregateInput
    _avg?: blog_announcementsAvgOrderByAggregateInput
    _max?: blog_announcementsMaxOrderByAggregateInput
    _min?: blog_announcementsMinOrderByAggregateInput
    _sum?: blog_announcementsSumOrderByAggregateInput
  }

  export type blog_announcementsScalarWhereWithAggregatesInput = {
    AND?: blog_announcementsScalarWhereWithAggregatesInput | blog_announcementsScalarWhereWithAggregatesInput[]
    OR?: blog_announcementsScalarWhereWithAggregatesInput[]
    NOT?: blog_announcementsScalarWhereWithAggregatesInput | blog_announcementsScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"blog_announcements"> | string
    createdAt?: DateTimeWithAggregatesFilter<"blog_announcements"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blog_announcements"> | Date | string
    title?: StringWithAggregatesFilter<"blog_announcements"> | string
    content?: StringWithAggregatesFilter<"blog_announcements"> | string
    sort?: IntWithAggregatesFilter<"blog_announcements"> | number
    status?: BoolWithAggregatesFilter<"blog_announcements"> | boolean
  }

  export type sys_userCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountCreateNestedManyWithoutUserInput
    role?: sys_roleCreateNestedOneWithoutUsersInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsUncheckedCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUpdateManyWithoutUserNestedInput
    role?: sys_roleUpdateOneWithoutUsersNestedInput
    ban_menus?: sys_user_ban_menuUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUncheckedUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_userCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
  }

  export type sys_userUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type sys_userUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
  }

  export type sys_accountCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.sys_account_provider
    value: string
    user: sys_userCreateNestedOneWithoutAccountsInput
  }

  export type sys_accountUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.sys_account_provider
    value: string
    userId: string
  }

  export type sys_accountUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: Enumsys_account_providerFieldUpdateOperationsInput | $Enums.sys_account_provider
    value?: StringFieldUpdateOperationsInput | string
    user?: sys_userUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type sys_accountUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: Enumsys_account_providerFieldUpdateOperationsInput | $Enums.sys_account_provider
    value?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_accountCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.sys_account_provider
    value: string
    userId: string
  }

  export type sys_accountUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: Enumsys_account_providerFieldUpdateOperationsInput | $Enums.sys_account_provider
    value?: StringFieldUpdateOperationsInput | string
  }

  export type sys_accountUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: Enumsys_account_providerFieldUpdateOperationsInput | $Enums.sys_account_provider
    value?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_menuCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parent?: sys_menuCreateNestedOneWithoutChildrenInput
    children?: sys_menuCreateNestedManyWithoutParentInput
    roles?: sys_menu_on_roleCreateNestedManyWithoutMenuInput
    user_bans?: sys_user_ban_menuCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parentId?: string | null
    children?: sys_menuUncheckedCreateNestedManyWithoutParentInput
    roles?: sys_menu_on_roleUncheckedCreateNestedManyWithoutMenuInput
    user_bans?: sys_user_ban_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_menuUpdateOneWithoutChildrenNestedInput
    children?: sys_menuUpdateManyWithoutParentNestedInput
    roles?: sys_menu_on_roleUpdateManyWithoutMenuNestedInput
    user_bans?: sys_user_ban_menuUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_menuUncheckedUpdateManyWithoutParentNestedInput
    roles?: sys_menu_on_roleUncheckedUpdateManyWithoutMenuNestedInput
    user_bans?: sys_user_ban_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parentId?: string | null
  }

  export type sys_menuUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_menuUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_user_ban_menuCreateInput = {
    user: sys_userCreateNestedOneWithoutBan_menusInput
    menu: sys_menuCreateNestedOneWithoutUser_bansInput
  }

  export type sys_user_ban_menuUncheckedCreateInput = {
    userId: string
    menuId: string
  }

  export type sys_user_ban_menuUpdateInput = {
    user?: sys_userUpdateOneRequiredWithoutBan_menusNestedInput
    menu?: sys_menuUpdateOneRequiredWithoutUser_bansNestedInput
  }

  export type sys_user_ban_menuUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_ban_menuCreateManyInput = {
    userId: string
    menuId: string
  }

  export type sys_user_ban_menuUpdateManyMutationInput = {

  }

  export type sys_user_ban_menuUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_menu_on_roleCreateInput = {
    power?: number
    menu: sys_menuCreateNestedOneWithoutRolesInput
    role: sys_roleCreateNestedOneWithoutMenusInput
  }

  export type sys_menu_on_roleUncheckedCreateInput = {
    roleId: string
    menuId: string
    power?: number
  }

  export type sys_menu_on_roleUpdateInput = {
    power?: IntFieldUpdateOperationsInput | number
    menu?: sys_menuUpdateOneRequiredWithoutRolesNestedInput
    role?: sys_roleUpdateOneRequiredWithoutMenusNestedInput
  }

  export type sys_menu_on_roleUncheckedUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type sys_menu_on_roleCreateManyInput = {
    roleId: string
    menuId: string
    power?: number
  }

  export type sys_menu_on_roleUpdateManyMutationInput = {
    power?: IntFieldUpdateOperationsInput | number
  }

  export type sys_menu_on_roleUncheckedUpdateManyInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type sys_roleCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    status?: boolean
    comment?: string | null
    sort?: number
    menus?: sys_menu_on_roleCreateNestedManyWithoutRoleInput
    users?: sys_userCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    status?: boolean
    comment?: string | null
    sort?: number
    menus?: sys_menu_on_roleUncheckedCreateNestedManyWithoutRoleInput
    users?: sys_userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    menus?: sys_menu_on_roleUpdateManyWithoutRoleNestedInput
    users?: sys_userUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    menus?: sys_menu_on_roleUncheckedUpdateManyWithoutRoleNestedInput
    users?: sys_userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    status?: boolean
    comment?: string | null
    sort?: number
  }

  export type sys_roleUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
  }

  export type sys_roleUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
  }

  export type sys_mediaCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    size: number
    hash: string
    mimeType: string
    extension: string
    path: string
    url?: string | null
    isWechat?: boolean
    wechat_id?: string | null
    enabled?: boolean
    type?: string
    width?: number | null
    height?: number | null
    duration?: number | null
    users?: sys_user_mediaCreateNestedManyWithoutMediaInput
  }

  export type sys_mediaUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    size: number
    hash: string
    mimeType: string
    extension: string
    path: string
    url?: string | null
    isWechat?: boolean
    wechat_id?: string | null
    enabled?: boolean
    type?: string
    width?: number | null
    height?: number | null
    duration?: number | null
    users?: sys_user_mediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type sys_mediaUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isWechat?: BoolFieldUpdateOperationsInput | boolean
    wechat_id?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    users?: sys_user_mediaUpdateManyWithoutMediaNestedInput
  }

  export type sys_mediaUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isWechat?: BoolFieldUpdateOperationsInput | boolean
    wechat_id?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    users?: sys_user_mediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type sys_mediaCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    size: number
    hash: string
    mimeType: string
    extension: string
    path: string
    url?: string | null
    isWechat?: boolean
    wechat_id?: string | null
    enabled?: boolean
    type?: string
    width?: number | null
    height?: number | null
    duration?: number | null
  }

  export type sys_mediaUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isWechat?: BoolFieldUpdateOperationsInput | boolean
    wechat_id?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sys_mediaUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isWechat?: BoolFieldUpdateOperationsInput | boolean
    wechat_id?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sys_user_mediaCreateInput = {
    user: sys_userCreateNestedOneWithoutUser_mediaInput
    media: sys_mediaCreateNestedOneWithoutUsersInput
  }

  export type sys_user_mediaUncheckedCreateInput = {
    userId: string
    mediaId: string
  }

  export type sys_user_mediaUpdateInput = {
    user?: sys_userUpdateOneRequiredWithoutUser_mediaNestedInput
    media?: sys_mediaUpdateOneRequiredWithoutUsersNestedInput
  }

  export type sys_user_mediaUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_mediaCreateManyInput = {
    userId: string
    mediaId: string
  }

  export type sys_user_mediaUpdateManyMutationInput = {

  }

  export type sys_user_mediaUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_categoriesCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    posts?: blog_postsCreateNestedManyWithoutCategoriesInput
  }

  export type blog_categoriesUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    posts?: blog_postsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type blog_categoriesUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    posts?: blog_postsUpdateManyWithoutCategoriesNestedInput
  }

  export type blog_categoriesUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    posts?: blog_postsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type blog_categoriesCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type blog_categoriesUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type blog_categoriesUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type blog_postsCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    categories?: blog_categoriesCreateNestedOneWithoutPostsInput
    user: sys_userCreateNestedOneWithoutBlog_postsInput
    tags?: blog_posts_on_tagsCreateNestedManyWithoutPostsInput
    comments?: blog_commentsCreateNestedManyWithoutPostInput
  }

  export type blog_postsUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    userId: string
    categoriesId?: string | null
    tags?: blog_posts_on_tagsUncheckedCreateNestedManyWithoutPostsInput
    comments?: blog_commentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type blog_postsUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categories?: blog_categoriesUpdateOneWithoutPostsNestedInput
    user?: sys_userUpdateOneRequiredWithoutBlog_postsNestedInput
    tags?: blog_posts_on_tagsUpdateManyWithoutPostsNestedInput
    comments?: blog_commentsUpdateManyWithoutPostNestedInput
  }

  export type blog_postsUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    categoriesId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: blog_posts_on_tagsUncheckedUpdateManyWithoutPostsNestedInput
    comments?: blog_commentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type blog_postsCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    userId: string
    categoriesId?: string | null
  }

  export type blog_postsUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_postsUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    categoriesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type blog_posts_on_tagsCreateInput = {
    posts: blog_postsCreateNestedOneWithoutTagsInput
    tag: blog_tagCreateNestedOneWithoutBlogsInput
  }

  export type blog_posts_on_tagsUncheckedCreateInput = {
    postsId: string
    tagId: string
  }

  export type blog_posts_on_tagsUpdateInput = {
    posts?: blog_postsUpdateOneRequiredWithoutTagsNestedInput
    tag?: blog_tagUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type blog_posts_on_tagsUncheckedUpdateInput = {
    postsId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_posts_on_tagsCreateManyInput = {
    postsId: string
    tagId: string
  }

  export type blog_posts_on_tagsUpdateManyMutationInput = {

  }

  export type blog_posts_on_tagsUncheckedUpdateManyInput = {
    postsId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_tagCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    blogs?: blog_posts_on_tagsCreateNestedManyWithoutTagInput
  }

  export type blog_tagUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    blogs?: blog_posts_on_tagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type blog_tagUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    blogs?: blog_posts_on_tagsUpdateManyWithoutTagNestedInput
  }

  export type blog_tagUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    blogs?: blog_posts_on_tagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type blog_tagCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type blog_tagUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type blog_tagUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type blog_commentsCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    user: sys_userCreateNestedOneWithoutBlog_commentsInput
    post: blog_postsCreateNestedOneWithoutCommentsInput
  }

  export type blog_commentsUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    userId: string
    postId: string
  }

  export type blog_commentsUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: sys_userUpdateOneRequiredWithoutBlog_commentsNestedInput
    post?: blog_postsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type blog_commentsUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_commentsCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    userId: string
    postId: string
  }

  export type blog_commentsUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_commentsUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_linksCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    logo?: string | null
    sort?: number
    status?: boolean
  }

  export type blog_linksUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    logo?: string | null
    sort?: number
    status?: boolean
  }

  export type blog_linksUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_linksUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_linksCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    logo?: string | null
    sort?: number
    status?: boolean
  }

  export type blog_linksUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_linksUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_announcementsCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    sort?: number
    status?: boolean
  }

  export type blog_announcementsUncheckedCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    sort?: number
    status?: boolean
  }

  export type blog_announcementsUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_announcementsUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_announcementsCreateManyInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    sort?: number
    status?: boolean
  }

  export type blog_announcementsUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blog_announcementsUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Sys_accountListRelationFilter = {
    every?: sys_accountWhereInput
    some?: sys_accountWhereInput
    none?: sys_accountWhereInput
  }

  export type Sys_roleNullableScalarRelationFilter = {
    is?: sys_roleWhereInput | null
    isNot?: sys_roleWhereInput | null
  }

  export type Sys_user_ban_menuListRelationFilter = {
    every?: sys_user_ban_menuWhereInput
    some?: sys_user_ban_menuWhereInput
    none?: sys_user_ban_menuWhereInput
  }

  export type Sys_user_mediaListRelationFilter = {
    every?: sys_user_mediaWhereInput
    some?: sys_user_mediaWhereInput
    none?: sys_user_mediaWhereInput
  }

  export type Blog_postsListRelationFilter = {
    every?: blog_postsWhereInput
    some?: blog_postsWhereInput
    none?: blog_postsWhereInput
  }

  export type Blog_commentsListRelationFilter = {
    every?: blog_commentsWhereInput
    some?: blog_commentsWhereInput
    none?: blog_commentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sys_accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_user_ban_menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_user_mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blog_postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blog_commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_userOrderByRelevanceInput = {
    fields: sys_userOrderByRelevanceFieldEnum | sys_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_userCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    account?: SortOrder
  }

  export type sys_userMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    account?: SortOrder
  }

  export type sys_userMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    account?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumsys_account_providerFilter<$PrismaModel = never> = {
    equals?: $Enums.sys_account_provider | Enumsys_account_providerFieldRefInput<$PrismaModel>
    in?: $Enums.sys_account_provider[]
    notIn?: $Enums.sys_account_provider[]
    not?: NestedEnumsys_account_providerFilter<$PrismaModel> | $Enums.sys_account_provider
  }

  export type Sys_userScalarRelationFilter = {
    is?: sys_userWhereInput
    isNot?: sys_userWhereInput
  }

  export type sys_accountOrderByRelevanceInput = {
    fields: sys_accountOrderByRelevanceFieldEnum | sys_accountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_accountProviderValueCompoundUniqueInput = {
    provider: $Enums.sys_account_provider
    value: string
  }

  export type sys_accountCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type sys_accountMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type sys_accountMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type Enumsys_account_providerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sys_account_provider | Enumsys_account_providerFieldRefInput<$PrismaModel>
    in?: $Enums.sys_account_provider[]
    notIn?: $Enums.sys_account_provider[]
    not?: NestedEnumsys_account_providerWithAggregatesFilter<$PrismaModel> | $Enums.sys_account_provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsys_account_providerFilter<$PrismaModel>
    _max?: NestedEnumsys_account_providerFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Sys_menuNullableScalarRelationFilter = {
    is?: sys_menuWhereInput | null
    isNot?: sys_menuWhereInput | null
  }

  export type Sys_menuListRelationFilter = {
    every?: sys_menuWhereInput
    some?: sys_menuWhereInput
    none?: sys_menuWhereInput
  }

  export type Sys_menu_on_roleListRelationFilter = {
    every?: sys_menu_on_roleWhereInput
    some?: sys_menu_on_roleWhereInput
    none?: sys_menu_on_roleWhereInput
  }

  export type sys_menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_menu_on_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_menuOrderByRelevanceInput = {
    fields: sys_menuOrderByRelevanceFieldEnum | sys_menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_menuCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sort?: SortOrder
    powers?: SortOrder
    comment?: SortOrder
    parentId?: SortOrder
  }

  export type sys_menuAvgOrderByAggregateInput = {
    sort?: SortOrder
    powers?: SortOrder
  }

  export type sys_menuMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sort?: SortOrder
    powers?: SortOrder
    comment?: SortOrder
    parentId?: SortOrder
  }

  export type sys_menuMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sort?: SortOrder
    powers?: SortOrder
    comment?: SortOrder
    parentId?: SortOrder
  }

  export type sys_menuSumOrderByAggregateInput = {
    sort?: SortOrder
    powers?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Sys_menuScalarRelationFilter = {
    is?: sys_menuWhereInput
    isNot?: sys_menuWhereInput
  }

  export type sys_user_ban_menuOrderByRelevanceInput = {
    fields: sys_user_ban_menuOrderByRelevanceFieldEnum | sys_user_ban_menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_user_ban_menuUserIdMenuIdCompoundUniqueInput = {
    userId: string
    menuId: string
  }

  export type sys_user_ban_menuCountOrderByAggregateInput = {
    userId?: SortOrder
    menuId?: SortOrder
  }

  export type sys_user_ban_menuMaxOrderByAggregateInput = {
    userId?: SortOrder
    menuId?: SortOrder
  }

  export type sys_user_ban_menuMinOrderByAggregateInput = {
    userId?: SortOrder
    menuId?: SortOrder
  }

  export type Sys_roleScalarRelationFilter = {
    is?: sys_roleWhereInput
    isNot?: sys_roleWhereInput
  }

  export type sys_menu_on_roleOrderByRelevanceInput = {
    fields: sys_menu_on_roleOrderByRelevanceFieldEnum | sys_menu_on_roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_menu_on_roleRoleIdMenuIdCompoundUniqueInput = {
    roleId: string
    menuId: string
  }

  export type sys_menu_on_roleCountOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    power?: SortOrder
  }

  export type sys_menu_on_roleAvgOrderByAggregateInput = {
    power?: SortOrder
  }

  export type sys_menu_on_roleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    power?: SortOrder
  }

  export type sys_menu_on_roleMinOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    power?: SortOrder
  }

  export type sys_menu_on_roleSumOrderByAggregateInput = {
    power?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Sys_userListRelationFilter = {
    every?: sys_userWhereInput
    some?: sys_userWhereInput
    none?: sys_userWhereInput
  }

  export type sys_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_roleOrderByRelevanceInput = {
    fields: sys_roleOrderByRelevanceFieldEnum | sys_roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_roleCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    sort?: SortOrder
  }

  export type sys_roleAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type sys_roleMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    sort?: SortOrder
  }

  export type sys_roleMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    sort?: SortOrder
  }

  export type sys_roleSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type sys_mediaOrderByRelevanceInput = {
    fields: sys_mediaOrderByRelevanceFieldEnum | sys_mediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_mediaCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    size?: SortOrder
    hash?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    path?: SortOrder
    url?: SortOrder
    isWechat?: SortOrder
    wechat_id?: SortOrder
    enabled?: SortOrder
    type?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
  }

  export type sys_mediaAvgOrderByAggregateInput = {
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
  }

  export type sys_mediaMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    size?: SortOrder
    hash?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    path?: SortOrder
    url?: SortOrder
    isWechat?: SortOrder
    wechat_id?: SortOrder
    enabled?: SortOrder
    type?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
  }

  export type sys_mediaMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    size?: SortOrder
    hash?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    path?: SortOrder
    url?: SortOrder
    isWechat?: SortOrder
    wechat_id?: SortOrder
    enabled?: SortOrder
    type?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
  }

  export type sys_mediaSumOrderByAggregateInput = {
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Sys_mediaScalarRelationFilter = {
    is?: sys_mediaWhereInput
    isNot?: sys_mediaWhereInput
  }

  export type sys_user_mediaOrderByRelevanceInput = {
    fields: sys_user_mediaOrderByRelevanceFieldEnum | sys_user_mediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_user_mediaUserIdMediaIdCompoundUniqueInput = {
    userId: string
    mediaId: string
  }

  export type sys_user_mediaCountOrderByAggregateInput = {
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type sys_user_mediaMaxOrderByAggregateInput = {
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type sys_user_mediaMinOrderByAggregateInput = {
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type blog_categoriesOrderByRelevanceInput = {
    fields: blog_categoriesOrderByRelevanceFieldEnum | blog_categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blog_categoriesCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type blog_categoriesMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type blog_categoriesMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type Blog_categoriesNullableScalarRelationFilter = {
    is?: blog_categoriesWhereInput | null
    isNot?: blog_categoriesWhereInput | null
  }

  export type Blog_posts_on_tagsListRelationFilter = {
    every?: blog_posts_on_tagsWhereInput
    some?: blog_posts_on_tagsWhereInput
    none?: blog_posts_on_tagsWhereInput
  }

  export type blog_posts_on_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blog_postsOrderByRelevanceInput = {
    fields: blog_postsOrderByRelevanceFieldEnum | blog_postsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blog_postsCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    categoriesId?: SortOrder
  }

  export type blog_postsMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    categoriesId?: SortOrder
  }

  export type blog_postsMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    categoriesId?: SortOrder
  }

  export type Blog_postsScalarRelationFilter = {
    is?: blog_postsWhereInput
    isNot?: blog_postsWhereInput
  }

  export type Blog_tagScalarRelationFilter = {
    is?: blog_tagWhereInput
    isNot?: blog_tagWhereInput
  }

  export type blog_posts_on_tagsOrderByRelevanceInput = {
    fields: blog_posts_on_tagsOrderByRelevanceFieldEnum | blog_posts_on_tagsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blog_posts_on_tagsPostsIdTagIdCompoundUniqueInput = {
    postsId: string
    tagId: string
  }

  export type blog_posts_on_tagsCountOrderByAggregateInput = {
    postsId?: SortOrder
    tagId?: SortOrder
  }

  export type blog_posts_on_tagsMaxOrderByAggregateInput = {
    postsId?: SortOrder
    tagId?: SortOrder
  }

  export type blog_posts_on_tagsMinOrderByAggregateInput = {
    postsId?: SortOrder
    tagId?: SortOrder
  }

  export type blog_tagOrderByRelevanceInput = {
    fields: blog_tagOrderByRelevanceFieldEnum | blog_tagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blog_tagCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type blog_tagMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type blog_tagMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type blog_commentsOrderByRelevanceInput = {
    fields: blog_commentsOrderByRelevanceFieldEnum | blog_commentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blog_commentsCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type blog_commentsMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type blog_commentsMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type blog_linksOrderByRelevanceInput = {
    fields: blog_linksOrderByRelevanceFieldEnum | blog_linksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blog_linksCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    sort?: SortOrder
    status?: SortOrder
  }

  export type blog_linksAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type blog_linksMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    sort?: SortOrder
    status?: SortOrder
  }

  export type blog_linksMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    sort?: SortOrder
    status?: SortOrder
  }

  export type blog_linksSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type blog_announcementsOrderByRelevanceInput = {
    fields: blog_announcementsOrderByRelevanceFieldEnum | blog_announcementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blog_announcementsCountOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    sort?: SortOrder
    status?: SortOrder
  }

  export type blog_announcementsAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type blog_announcementsMaxOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    sort?: SortOrder
    status?: SortOrder
  }

  export type blog_announcementsMinOrderByAggregateInput = {
    uid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    sort?: SortOrder
    status?: SortOrder
  }

  export type blog_announcementsSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type sys_accountCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_accountCreateWithoutUserInput, sys_accountUncheckedCreateWithoutUserInput> | sys_accountCreateWithoutUserInput[] | sys_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_accountCreateOrConnectWithoutUserInput | sys_accountCreateOrConnectWithoutUserInput[]
    createMany?: sys_accountCreateManyUserInputEnvelope
    connect?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
  }

  export type sys_roleCreateNestedOneWithoutUsersInput = {
    create?: XOR<sys_roleCreateWithoutUsersInput, sys_roleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_roleCreateOrConnectWithoutUsersInput
    connect?: sys_roleWhereUniqueInput
  }

  export type sys_user_ban_menuCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_user_ban_menuCreateWithoutUserInput, sys_user_ban_menuUncheckedCreateWithoutUserInput> | sys_user_ban_menuCreateWithoutUserInput[] | sys_user_ban_menuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_user_ban_menuCreateOrConnectWithoutUserInput | sys_user_ban_menuCreateOrConnectWithoutUserInput[]
    createMany?: sys_user_ban_menuCreateManyUserInputEnvelope
    connect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
  }

  export type sys_user_mediaCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_user_mediaCreateWithoutUserInput, sys_user_mediaUncheckedCreateWithoutUserInput> | sys_user_mediaCreateWithoutUserInput[] | sys_user_mediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_user_mediaCreateOrConnectWithoutUserInput | sys_user_mediaCreateOrConnectWithoutUserInput[]
    createMany?: sys_user_mediaCreateManyUserInputEnvelope
    connect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
  }

  export type blog_postsCreateNestedManyWithoutUserInput = {
    create?: XOR<blog_postsCreateWithoutUserInput, blog_postsUncheckedCreateWithoutUserInput> | blog_postsCreateWithoutUserInput[] | blog_postsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blog_postsCreateOrConnectWithoutUserInput | blog_postsCreateOrConnectWithoutUserInput[]
    createMany?: blog_postsCreateManyUserInputEnvelope
    connect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
  }

  export type blog_commentsCreateNestedManyWithoutUserInput = {
    create?: XOR<blog_commentsCreateWithoutUserInput, blog_commentsUncheckedCreateWithoutUserInput> | blog_commentsCreateWithoutUserInput[] | blog_commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blog_commentsCreateOrConnectWithoutUserInput | blog_commentsCreateOrConnectWithoutUserInput[]
    createMany?: blog_commentsCreateManyUserInputEnvelope
    connect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
  }

  export type sys_accountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_accountCreateWithoutUserInput, sys_accountUncheckedCreateWithoutUserInput> | sys_accountCreateWithoutUserInput[] | sys_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_accountCreateOrConnectWithoutUserInput | sys_accountCreateOrConnectWithoutUserInput[]
    createMany?: sys_accountCreateManyUserInputEnvelope
    connect?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
  }

  export type sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_user_ban_menuCreateWithoutUserInput, sys_user_ban_menuUncheckedCreateWithoutUserInput> | sys_user_ban_menuCreateWithoutUserInput[] | sys_user_ban_menuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_user_ban_menuCreateOrConnectWithoutUserInput | sys_user_ban_menuCreateOrConnectWithoutUserInput[]
    createMany?: sys_user_ban_menuCreateManyUserInputEnvelope
    connect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
  }

  export type sys_user_mediaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_user_mediaCreateWithoutUserInput, sys_user_mediaUncheckedCreateWithoutUserInput> | sys_user_mediaCreateWithoutUserInput[] | sys_user_mediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_user_mediaCreateOrConnectWithoutUserInput | sys_user_mediaCreateOrConnectWithoutUserInput[]
    createMany?: sys_user_mediaCreateManyUserInputEnvelope
    connect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
  }

  export type blog_postsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<blog_postsCreateWithoutUserInput, blog_postsUncheckedCreateWithoutUserInput> | blog_postsCreateWithoutUserInput[] | blog_postsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blog_postsCreateOrConnectWithoutUserInput | blog_postsCreateOrConnectWithoutUserInput[]
    createMany?: blog_postsCreateManyUserInputEnvelope
    connect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
  }

  export type blog_commentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<blog_commentsCreateWithoutUserInput, blog_commentsUncheckedCreateWithoutUserInput> | blog_commentsCreateWithoutUserInput[] | blog_commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blog_commentsCreateOrConnectWithoutUserInput | blog_commentsCreateOrConnectWithoutUserInput[]
    createMany?: blog_commentsCreateManyUserInputEnvelope
    connect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type sys_accountUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_accountCreateWithoutUserInput, sys_accountUncheckedCreateWithoutUserInput> | sys_accountCreateWithoutUserInput[] | sys_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_accountCreateOrConnectWithoutUserInput | sys_accountCreateOrConnectWithoutUserInput[]
    upsert?: sys_accountUpsertWithWhereUniqueWithoutUserInput | sys_accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_accountCreateManyUserInputEnvelope
    set?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
    disconnect?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
    delete?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
    connect?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
    update?: sys_accountUpdateWithWhereUniqueWithoutUserInput | sys_accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_accountUpdateManyWithWhereWithoutUserInput | sys_accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_accountScalarWhereInput | sys_accountScalarWhereInput[]
  }

  export type sys_roleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<sys_roleCreateWithoutUsersInput, sys_roleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_roleCreateOrConnectWithoutUsersInput
    upsert?: sys_roleUpsertWithoutUsersInput
    disconnect?: sys_roleWhereInput | boolean
    delete?: sys_roleWhereInput | boolean
    connect?: sys_roleWhereUniqueInput
    update?: XOR<XOR<sys_roleUpdateToOneWithWhereWithoutUsersInput, sys_roleUpdateWithoutUsersInput>, sys_roleUncheckedUpdateWithoutUsersInput>
  }

  export type sys_user_ban_menuUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_user_ban_menuCreateWithoutUserInput, sys_user_ban_menuUncheckedCreateWithoutUserInput> | sys_user_ban_menuCreateWithoutUserInput[] | sys_user_ban_menuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_user_ban_menuCreateOrConnectWithoutUserInput | sys_user_ban_menuCreateOrConnectWithoutUserInput[]
    upsert?: sys_user_ban_menuUpsertWithWhereUniqueWithoutUserInput | sys_user_ban_menuUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_user_ban_menuCreateManyUserInputEnvelope
    set?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    disconnect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    delete?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    connect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    update?: sys_user_ban_menuUpdateWithWhereUniqueWithoutUserInput | sys_user_ban_menuUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_user_ban_menuUpdateManyWithWhereWithoutUserInput | sys_user_ban_menuUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_user_ban_menuScalarWhereInput | sys_user_ban_menuScalarWhereInput[]
  }

  export type sys_user_mediaUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_user_mediaCreateWithoutUserInput, sys_user_mediaUncheckedCreateWithoutUserInput> | sys_user_mediaCreateWithoutUserInput[] | sys_user_mediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_user_mediaCreateOrConnectWithoutUserInput | sys_user_mediaCreateOrConnectWithoutUserInput[]
    upsert?: sys_user_mediaUpsertWithWhereUniqueWithoutUserInput | sys_user_mediaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_user_mediaCreateManyUserInputEnvelope
    set?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    disconnect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    delete?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    connect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    update?: sys_user_mediaUpdateWithWhereUniqueWithoutUserInput | sys_user_mediaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_user_mediaUpdateManyWithWhereWithoutUserInput | sys_user_mediaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_user_mediaScalarWhereInput | sys_user_mediaScalarWhereInput[]
  }

  export type blog_postsUpdateManyWithoutUserNestedInput = {
    create?: XOR<blog_postsCreateWithoutUserInput, blog_postsUncheckedCreateWithoutUserInput> | blog_postsCreateWithoutUserInput[] | blog_postsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blog_postsCreateOrConnectWithoutUserInput | blog_postsCreateOrConnectWithoutUserInput[]
    upsert?: blog_postsUpsertWithWhereUniqueWithoutUserInput | blog_postsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blog_postsCreateManyUserInputEnvelope
    set?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    disconnect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    delete?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    connect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    update?: blog_postsUpdateWithWhereUniqueWithoutUserInput | blog_postsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blog_postsUpdateManyWithWhereWithoutUserInput | blog_postsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blog_postsScalarWhereInput | blog_postsScalarWhereInput[]
  }

  export type blog_commentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<blog_commentsCreateWithoutUserInput, blog_commentsUncheckedCreateWithoutUserInput> | blog_commentsCreateWithoutUserInput[] | blog_commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blog_commentsCreateOrConnectWithoutUserInput | blog_commentsCreateOrConnectWithoutUserInput[]
    upsert?: blog_commentsUpsertWithWhereUniqueWithoutUserInput | blog_commentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blog_commentsCreateManyUserInputEnvelope
    set?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    disconnect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    delete?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    connect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    update?: blog_commentsUpdateWithWhereUniqueWithoutUserInput | blog_commentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blog_commentsUpdateManyWithWhereWithoutUserInput | blog_commentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blog_commentsScalarWhereInput | blog_commentsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type sys_accountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_accountCreateWithoutUserInput, sys_accountUncheckedCreateWithoutUserInput> | sys_accountCreateWithoutUserInput[] | sys_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_accountCreateOrConnectWithoutUserInput | sys_accountCreateOrConnectWithoutUserInput[]
    upsert?: sys_accountUpsertWithWhereUniqueWithoutUserInput | sys_accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_accountCreateManyUserInputEnvelope
    set?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
    disconnect?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
    delete?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
    connect?: sys_accountWhereUniqueInput | sys_accountWhereUniqueInput[]
    update?: sys_accountUpdateWithWhereUniqueWithoutUserInput | sys_accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_accountUpdateManyWithWhereWithoutUserInput | sys_accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_accountScalarWhereInput | sys_accountScalarWhereInput[]
  }

  export type sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_user_ban_menuCreateWithoutUserInput, sys_user_ban_menuUncheckedCreateWithoutUserInput> | sys_user_ban_menuCreateWithoutUserInput[] | sys_user_ban_menuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_user_ban_menuCreateOrConnectWithoutUserInput | sys_user_ban_menuCreateOrConnectWithoutUserInput[]
    upsert?: sys_user_ban_menuUpsertWithWhereUniqueWithoutUserInput | sys_user_ban_menuUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_user_ban_menuCreateManyUserInputEnvelope
    set?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    disconnect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    delete?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    connect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    update?: sys_user_ban_menuUpdateWithWhereUniqueWithoutUserInput | sys_user_ban_menuUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_user_ban_menuUpdateManyWithWhereWithoutUserInput | sys_user_ban_menuUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_user_ban_menuScalarWhereInput | sys_user_ban_menuScalarWhereInput[]
  }

  export type sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_user_mediaCreateWithoutUserInput, sys_user_mediaUncheckedCreateWithoutUserInput> | sys_user_mediaCreateWithoutUserInput[] | sys_user_mediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_user_mediaCreateOrConnectWithoutUserInput | sys_user_mediaCreateOrConnectWithoutUserInput[]
    upsert?: sys_user_mediaUpsertWithWhereUniqueWithoutUserInput | sys_user_mediaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_user_mediaCreateManyUserInputEnvelope
    set?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    disconnect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    delete?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    connect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    update?: sys_user_mediaUpdateWithWhereUniqueWithoutUserInput | sys_user_mediaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_user_mediaUpdateManyWithWhereWithoutUserInput | sys_user_mediaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_user_mediaScalarWhereInput | sys_user_mediaScalarWhereInput[]
  }

  export type blog_postsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<blog_postsCreateWithoutUserInput, blog_postsUncheckedCreateWithoutUserInput> | blog_postsCreateWithoutUserInput[] | blog_postsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blog_postsCreateOrConnectWithoutUserInput | blog_postsCreateOrConnectWithoutUserInput[]
    upsert?: blog_postsUpsertWithWhereUniqueWithoutUserInput | blog_postsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blog_postsCreateManyUserInputEnvelope
    set?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    disconnect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    delete?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    connect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    update?: blog_postsUpdateWithWhereUniqueWithoutUserInput | blog_postsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blog_postsUpdateManyWithWhereWithoutUserInput | blog_postsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blog_postsScalarWhereInput | blog_postsScalarWhereInput[]
  }

  export type blog_commentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<blog_commentsCreateWithoutUserInput, blog_commentsUncheckedCreateWithoutUserInput> | blog_commentsCreateWithoutUserInput[] | blog_commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blog_commentsCreateOrConnectWithoutUserInput | blog_commentsCreateOrConnectWithoutUserInput[]
    upsert?: blog_commentsUpsertWithWhereUniqueWithoutUserInput | blog_commentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blog_commentsCreateManyUserInputEnvelope
    set?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    disconnect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    delete?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    connect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    update?: blog_commentsUpdateWithWhereUniqueWithoutUserInput | blog_commentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blog_commentsUpdateManyWithWhereWithoutUserInput | blog_commentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blog_commentsScalarWhereInput | blog_commentsScalarWhereInput[]
  }

  export type sys_userCreateNestedOneWithoutAccountsInput = {
    create?: XOR<sys_userCreateWithoutAccountsInput, sys_userUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutAccountsInput
    connect?: sys_userWhereUniqueInput
  }

  export type Enumsys_account_providerFieldUpdateOperationsInput = {
    set?: $Enums.sys_account_provider
  }

  export type sys_userUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<sys_userCreateWithoutAccountsInput, sys_userUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutAccountsInput
    upsert?: sys_userUpsertWithoutAccountsInput
    connect?: sys_userWhereUniqueInput
    update?: XOR<XOR<sys_userUpdateToOneWithWhereWithoutAccountsInput, sys_userUpdateWithoutAccountsInput>, sys_userUncheckedUpdateWithoutAccountsInput>
  }

  export type sys_menuCreateNestedOneWithoutChildrenInput = {
    create?: XOR<sys_menuCreateWithoutChildrenInput, sys_menuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutChildrenInput
    connect?: sys_menuWhereUniqueInput
  }

  export type sys_menuCreateNestedManyWithoutParentInput = {
    create?: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput> | sys_menuCreateWithoutParentInput[] | sys_menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_menuCreateOrConnectWithoutParentInput | sys_menuCreateOrConnectWithoutParentInput[]
    createMany?: sys_menuCreateManyParentInputEnvelope
    connect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
  }

  export type sys_menu_on_roleCreateNestedManyWithoutMenuInput = {
    create?: XOR<sys_menu_on_roleCreateWithoutMenuInput, sys_menu_on_roleUncheckedCreateWithoutMenuInput> | sys_menu_on_roleCreateWithoutMenuInput[] | sys_menu_on_roleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_menu_on_roleCreateOrConnectWithoutMenuInput | sys_menu_on_roleCreateOrConnectWithoutMenuInput[]
    createMany?: sys_menu_on_roleCreateManyMenuInputEnvelope
    connect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
  }

  export type sys_user_ban_menuCreateNestedManyWithoutMenuInput = {
    create?: XOR<sys_user_ban_menuCreateWithoutMenuInput, sys_user_ban_menuUncheckedCreateWithoutMenuInput> | sys_user_ban_menuCreateWithoutMenuInput[] | sys_user_ban_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_user_ban_menuCreateOrConnectWithoutMenuInput | sys_user_ban_menuCreateOrConnectWithoutMenuInput[]
    createMany?: sys_user_ban_menuCreateManyMenuInputEnvelope
    connect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
  }

  export type sys_menuUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput> | sys_menuCreateWithoutParentInput[] | sys_menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_menuCreateOrConnectWithoutParentInput | sys_menuCreateOrConnectWithoutParentInput[]
    createMany?: sys_menuCreateManyParentInputEnvelope
    connect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
  }

  export type sys_menu_on_roleUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<sys_menu_on_roleCreateWithoutMenuInput, sys_menu_on_roleUncheckedCreateWithoutMenuInput> | sys_menu_on_roleCreateWithoutMenuInput[] | sys_menu_on_roleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_menu_on_roleCreateOrConnectWithoutMenuInput | sys_menu_on_roleCreateOrConnectWithoutMenuInput[]
    createMany?: sys_menu_on_roleCreateManyMenuInputEnvelope
    connect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
  }

  export type sys_user_ban_menuUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<sys_user_ban_menuCreateWithoutMenuInput, sys_user_ban_menuUncheckedCreateWithoutMenuInput> | sys_user_ban_menuCreateWithoutMenuInput[] | sys_user_ban_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_user_ban_menuCreateOrConnectWithoutMenuInput | sys_user_ban_menuCreateOrConnectWithoutMenuInput[]
    createMany?: sys_user_ban_menuCreateManyMenuInputEnvelope
    connect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sys_menuUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<sys_menuCreateWithoutChildrenInput, sys_menuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutChildrenInput
    upsert?: sys_menuUpsertWithoutChildrenInput
    disconnect?: sys_menuWhereInput | boolean
    delete?: sys_menuWhereInput | boolean
    connect?: sys_menuWhereUniqueInput
    update?: XOR<XOR<sys_menuUpdateToOneWithWhereWithoutChildrenInput, sys_menuUpdateWithoutChildrenInput>, sys_menuUncheckedUpdateWithoutChildrenInput>
  }

  export type sys_menuUpdateManyWithoutParentNestedInput = {
    create?: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput> | sys_menuCreateWithoutParentInput[] | sys_menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_menuCreateOrConnectWithoutParentInput | sys_menuCreateOrConnectWithoutParentInput[]
    upsert?: sys_menuUpsertWithWhereUniqueWithoutParentInput | sys_menuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: sys_menuCreateManyParentInputEnvelope
    set?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    disconnect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    delete?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    connect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    update?: sys_menuUpdateWithWhereUniqueWithoutParentInput | sys_menuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: sys_menuUpdateManyWithWhereWithoutParentInput | sys_menuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: sys_menuScalarWhereInput | sys_menuScalarWhereInput[]
  }

  export type sys_menu_on_roleUpdateManyWithoutMenuNestedInput = {
    create?: XOR<sys_menu_on_roleCreateWithoutMenuInput, sys_menu_on_roleUncheckedCreateWithoutMenuInput> | sys_menu_on_roleCreateWithoutMenuInput[] | sys_menu_on_roleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_menu_on_roleCreateOrConnectWithoutMenuInput | sys_menu_on_roleCreateOrConnectWithoutMenuInput[]
    upsert?: sys_menu_on_roleUpsertWithWhereUniqueWithoutMenuInput | sys_menu_on_roleUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: sys_menu_on_roleCreateManyMenuInputEnvelope
    set?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    disconnect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    delete?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    connect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    update?: sys_menu_on_roleUpdateWithWhereUniqueWithoutMenuInput | sys_menu_on_roleUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: sys_menu_on_roleUpdateManyWithWhereWithoutMenuInput | sys_menu_on_roleUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: sys_menu_on_roleScalarWhereInput | sys_menu_on_roleScalarWhereInput[]
  }

  export type sys_user_ban_menuUpdateManyWithoutMenuNestedInput = {
    create?: XOR<sys_user_ban_menuCreateWithoutMenuInput, sys_user_ban_menuUncheckedCreateWithoutMenuInput> | sys_user_ban_menuCreateWithoutMenuInput[] | sys_user_ban_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_user_ban_menuCreateOrConnectWithoutMenuInput | sys_user_ban_menuCreateOrConnectWithoutMenuInput[]
    upsert?: sys_user_ban_menuUpsertWithWhereUniqueWithoutMenuInput | sys_user_ban_menuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: sys_user_ban_menuCreateManyMenuInputEnvelope
    set?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    disconnect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    delete?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    connect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    update?: sys_user_ban_menuUpdateWithWhereUniqueWithoutMenuInput | sys_user_ban_menuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: sys_user_ban_menuUpdateManyWithWhereWithoutMenuInput | sys_user_ban_menuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: sys_user_ban_menuScalarWhereInput | sys_user_ban_menuScalarWhereInput[]
  }

  export type sys_menuUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput> | sys_menuCreateWithoutParentInput[] | sys_menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_menuCreateOrConnectWithoutParentInput | sys_menuCreateOrConnectWithoutParentInput[]
    upsert?: sys_menuUpsertWithWhereUniqueWithoutParentInput | sys_menuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: sys_menuCreateManyParentInputEnvelope
    set?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    disconnect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    delete?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    connect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    update?: sys_menuUpdateWithWhereUniqueWithoutParentInput | sys_menuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: sys_menuUpdateManyWithWhereWithoutParentInput | sys_menuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: sys_menuScalarWhereInput | sys_menuScalarWhereInput[]
  }

  export type sys_menu_on_roleUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<sys_menu_on_roleCreateWithoutMenuInput, sys_menu_on_roleUncheckedCreateWithoutMenuInput> | sys_menu_on_roleCreateWithoutMenuInput[] | sys_menu_on_roleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_menu_on_roleCreateOrConnectWithoutMenuInput | sys_menu_on_roleCreateOrConnectWithoutMenuInput[]
    upsert?: sys_menu_on_roleUpsertWithWhereUniqueWithoutMenuInput | sys_menu_on_roleUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: sys_menu_on_roleCreateManyMenuInputEnvelope
    set?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    disconnect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    delete?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    connect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    update?: sys_menu_on_roleUpdateWithWhereUniqueWithoutMenuInput | sys_menu_on_roleUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: sys_menu_on_roleUpdateManyWithWhereWithoutMenuInput | sys_menu_on_roleUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: sys_menu_on_roleScalarWhereInput | sys_menu_on_roleScalarWhereInput[]
  }

  export type sys_user_ban_menuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<sys_user_ban_menuCreateWithoutMenuInput, sys_user_ban_menuUncheckedCreateWithoutMenuInput> | sys_user_ban_menuCreateWithoutMenuInput[] | sys_user_ban_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_user_ban_menuCreateOrConnectWithoutMenuInput | sys_user_ban_menuCreateOrConnectWithoutMenuInput[]
    upsert?: sys_user_ban_menuUpsertWithWhereUniqueWithoutMenuInput | sys_user_ban_menuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: sys_user_ban_menuCreateManyMenuInputEnvelope
    set?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    disconnect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    delete?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    connect?: sys_user_ban_menuWhereUniqueInput | sys_user_ban_menuWhereUniqueInput[]
    update?: sys_user_ban_menuUpdateWithWhereUniqueWithoutMenuInput | sys_user_ban_menuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: sys_user_ban_menuUpdateManyWithWhereWithoutMenuInput | sys_user_ban_menuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: sys_user_ban_menuScalarWhereInput | sys_user_ban_menuScalarWhereInput[]
  }

  export type sys_userCreateNestedOneWithoutBan_menusInput = {
    create?: XOR<sys_userCreateWithoutBan_menusInput, sys_userUncheckedCreateWithoutBan_menusInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutBan_menusInput
    connect?: sys_userWhereUniqueInput
  }

  export type sys_menuCreateNestedOneWithoutUser_bansInput = {
    create?: XOR<sys_menuCreateWithoutUser_bansInput, sys_menuUncheckedCreateWithoutUser_bansInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutUser_bansInput
    connect?: sys_menuWhereUniqueInput
  }

  export type sys_userUpdateOneRequiredWithoutBan_menusNestedInput = {
    create?: XOR<sys_userCreateWithoutBan_menusInput, sys_userUncheckedCreateWithoutBan_menusInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutBan_menusInput
    upsert?: sys_userUpsertWithoutBan_menusInput
    connect?: sys_userWhereUniqueInput
    update?: XOR<XOR<sys_userUpdateToOneWithWhereWithoutBan_menusInput, sys_userUpdateWithoutBan_menusInput>, sys_userUncheckedUpdateWithoutBan_menusInput>
  }

  export type sys_menuUpdateOneRequiredWithoutUser_bansNestedInput = {
    create?: XOR<sys_menuCreateWithoutUser_bansInput, sys_menuUncheckedCreateWithoutUser_bansInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutUser_bansInput
    upsert?: sys_menuUpsertWithoutUser_bansInput
    connect?: sys_menuWhereUniqueInput
    update?: XOR<XOR<sys_menuUpdateToOneWithWhereWithoutUser_bansInput, sys_menuUpdateWithoutUser_bansInput>, sys_menuUncheckedUpdateWithoutUser_bansInput>
  }

  export type sys_menuCreateNestedOneWithoutRolesInput = {
    create?: XOR<sys_menuCreateWithoutRolesInput, sys_menuUncheckedCreateWithoutRolesInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutRolesInput
    connect?: sys_menuWhereUniqueInput
  }

  export type sys_roleCreateNestedOneWithoutMenusInput = {
    create?: XOR<sys_roleCreateWithoutMenusInput, sys_roleUncheckedCreateWithoutMenusInput>
    connectOrCreate?: sys_roleCreateOrConnectWithoutMenusInput
    connect?: sys_roleWhereUniqueInput
  }

  export type sys_menuUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<sys_menuCreateWithoutRolesInput, sys_menuUncheckedCreateWithoutRolesInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutRolesInput
    upsert?: sys_menuUpsertWithoutRolesInput
    connect?: sys_menuWhereUniqueInput
    update?: XOR<XOR<sys_menuUpdateToOneWithWhereWithoutRolesInput, sys_menuUpdateWithoutRolesInput>, sys_menuUncheckedUpdateWithoutRolesInput>
  }

  export type sys_roleUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<sys_roleCreateWithoutMenusInput, sys_roleUncheckedCreateWithoutMenusInput>
    connectOrCreate?: sys_roleCreateOrConnectWithoutMenusInput
    upsert?: sys_roleUpsertWithoutMenusInput
    connect?: sys_roleWhereUniqueInput
    update?: XOR<XOR<sys_roleUpdateToOneWithWhereWithoutMenusInput, sys_roleUpdateWithoutMenusInput>, sys_roleUncheckedUpdateWithoutMenusInput>
  }

  export type sys_menu_on_roleCreateNestedManyWithoutRoleInput = {
    create?: XOR<sys_menu_on_roleCreateWithoutRoleInput, sys_menu_on_roleUncheckedCreateWithoutRoleInput> | sys_menu_on_roleCreateWithoutRoleInput[] | sys_menu_on_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_menu_on_roleCreateOrConnectWithoutRoleInput | sys_menu_on_roleCreateOrConnectWithoutRoleInput[]
    createMany?: sys_menu_on_roleCreateManyRoleInputEnvelope
    connect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
  }

  export type sys_userCreateNestedManyWithoutRoleInput = {
    create?: XOR<sys_userCreateWithoutRoleInput, sys_userUncheckedCreateWithoutRoleInput> | sys_userCreateWithoutRoleInput[] | sys_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutRoleInput | sys_userCreateOrConnectWithoutRoleInput[]
    createMany?: sys_userCreateManyRoleInputEnvelope
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
  }

  export type sys_menu_on_roleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<sys_menu_on_roleCreateWithoutRoleInput, sys_menu_on_roleUncheckedCreateWithoutRoleInput> | sys_menu_on_roleCreateWithoutRoleInput[] | sys_menu_on_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_menu_on_roleCreateOrConnectWithoutRoleInput | sys_menu_on_roleCreateOrConnectWithoutRoleInput[]
    createMany?: sys_menu_on_roleCreateManyRoleInputEnvelope
    connect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
  }

  export type sys_userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<sys_userCreateWithoutRoleInput, sys_userUncheckedCreateWithoutRoleInput> | sys_userCreateWithoutRoleInput[] | sys_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutRoleInput | sys_userCreateOrConnectWithoutRoleInput[]
    createMany?: sys_userCreateManyRoleInputEnvelope
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type sys_menu_on_roleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<sys_menu_on_roleCreateWithoutRoleInput, sys_menu_on_roleUncheckedCreateWithoutRoleInput> | sys_menu_on_roleCreateWithoutRoleInput[] | sys_menu_on_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_menu_on_roleCreateOrConnectWithoutRoleInput | sys_menu_on_roleCreateOrConnectWithoutRoleInput[]
    upsert?: sys_menu_on_roleUpsertWithWhereUniqueWithoutRoleInput | sys_menu_on_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: sys_menu_on_roleCreateManyRoleInputEnvelope
    set?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    disconnect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    delete?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    connect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    update?: sys_menu_on_roleUpdateWithWhereUniqueWithoutRoleInput | sys_menu_on_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: sys_menu_on_roleUpdateManyWithWhereWithoutRoleInput | sys_menu_on_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: sys_menu_on_roleScalarWhereInput | sys_menu_on_roleScalarWhereInput[]
  }

  export type sys_userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<sys_userCreateWithoutRoleInput, sys_userUncheckedCreateWithoutRoleInput> | sys_userCreateWithoutRoleInput[] | sys_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutRoleInput | sys_userCreateOrConnectWithoutRoleInput[]
    upsert?: sys_userUpsertWithWhereUniqueWithoutRoleInput | sys_userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: sys_userCreateManyRoleInputEnvelope
    set?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    disconnect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    delete?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    update?: sys_userUpdateWithWhereUniqueWithoutRoleInput | sys_userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: sys_userUpdateManyWithWhereWithoutRoleInput | sys_userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
  }

  export type sys_menu_on_roleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<sys_menu_on_roleCreateWithoutRoleInput, sys_menu_on_roleUncheckedCreateWithoutRoleInput> | sys_menu_on_roleCreateWithoutRoleInput[] | sys_menu_on_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_menu_on_roleCreateOrConnectWithoutRoleInput | sys_menu_on_roleCreateOrConnectWithoutRoleInput[]
    upsert?: sys_menu_on_roleUpsertWithWhereUniqueWithoutRoleInput | sys_menu_on_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: sys_menu_on_roleCreateManyRoleInputEnvelope
    set?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    disconnect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    delete?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    connect?: sys_menu_on_roleWhereUniqueInput | sys_menu_on_roleWhereUniqueInput[]
    update?: sys_menu_on_roleUpdateWithWhereUniqueWithoutRoleInput | sys_menu_on_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: sys_menu_on_roleUpdateManyWithWhereWithoutRoleInput | sys_menu_on_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: sys_menu_on_roleScalarWhereInput | sys_menu_on_roleScalarWhereInput[]
  }

  export type sys_userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<sys_userCreateWithoutRoleInput, sys_userUncheckedCreateWithoutRoleInput> | sys_userCreateWithoutRoleInput[] | sys_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutRoleInput | sys_userCreateOrConnectWithoutRoleInput[]
    upsert?: sys_userUpsertWithWhereUniqueWithoutRoleInput | sys_userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: sys_userCreateManyRoleInputEnvelope
    set?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    disconnect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    delete?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    update?: sys_userUpdateWithWhereUniqueWithoutRoleInput | sys_userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: sys_userUpdateManyWithWhereWithoutRoleInput | sys_userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
  }

  export type sys_user_mediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<sys_user_mediaCreateWithoutMediaInput, sys_user_mediaUncheckedCreateWithoutMediaInput> | sys_user_mediaCreateWithoutMediaInput[] | sys_user_mediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: sys_user_mediaCreateOrConnectWithoutMediaInput | sys_user_mediaCreateOrConnectWithoutMediaInput[]
    createMany?: sys_user_mediaCreateManyMediaInputEnvelope
    connect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
  }

  export type sys_user_mediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<sys_user_mediaCreateWithoutMediaInput, sys_user_mediaUncheckedCreateWithoutMediaInput> | sys_user_mediaCreateWithoutMediaInput[] | sys_user_mediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: sys_user_mediaCreateOrConnectWithoutMediaInput | sys_user_mediaCreateOrConnectWithoutMediaInput[]
    createMany?: sys_user_mediaCreateManyMediaInputEnvelope
    connect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sys_user_mediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<sys_user_mediaCreateWithoutMediaInput, sys_user_mediaUncheckedCreateWithoutMediaInput> | sys_user_mediaCreateWithoutMediaInput[] | sys_user_mediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: sys_user_mediaCreateOrConnectWithoutMediaInput | sys_user_mediaCreateOrConnectWithoutMediaInput[]
    upsert?: sys_user_mediaUpsertWithWhereUniqueWithoutMediaInput | sys_user_mediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: sys_user_mediaCreateManyMediaInputEnvelope
    set?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    disconnect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    delete?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    connect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    update?: sys_user_mediaUpdateWithWhereUniqueWithoutMediaInput | sys_user_mediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: sys_user_mediaUpdateManyWithWhereWithoutMediaInput | sys_user_mediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: sys_user_mediaScalarWhereInput | sys_user_mediaScalarWhereInput[]
  }

  export type sys_user_mediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<sys_user_mediaCreateWithoutMediaInput, sys_user_mediaUncheckedCreateWithoutMediaInput> | sys_user_mediaCreateWithoutMediaInput[] | sys_user_mediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: sys_user_mediaCreateOrConnectWithoutMediaInput | sys_user_mediaCreateOrConnectWithoutMediaInput[]
    upsert?: sys_user_mediaUpsertWithWhereUniqueWithoutMediaInput | sys_user_mediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: sys_user_mediaCreateManyMediaInputEnvelope
    set?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    disconnect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    delete?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    connect?: sys_user_mediaWhereUniqueInput | sys_user_mediaWhereUniqueInput[]
    update?: sys_user_mediaUpdateWithWhereUniqueWithoutMediaInput | sys_user_mediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: sys_user_mediaUpdateManyWithWhereWithoutMediaInput | sys_user_mediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: sys_user_mediaScalarWhereInput | sys_user_mediaScalarWhereInput[]
  }

  export type sys_userCreateNestedOneWithoutUser_mediaInput = {
    create?: XOR<sys_userCreateWithoutUser_mediaInput, sys_userUncheckedCreateWithoutUser_mediaInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutUser_mediaInput
    connect?: sys_userWhereUniqueInput
  }

  export type sys_mediaCreateNestedOneWithoutUsersInput = {
    create?: XOR<sys_mediaCreateWithoutUsersInput, sys_mediaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_mediaCreateOrConnectWithoutUsersInput
    connect?: sys_mediaWhereUniqueInput
  }

  export type sys_userUpdateOneRequiredWithoutUser_mediaNestedInput = {
    create?: XOR<sys_userCreateWithoutUser_mediaInput, sys_userUncheckedCreateWithoutUser_mediaInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutUser_mediaInput
    upsert?: sys_userUpsertWithoutUser_mediaInput
    connect?: sys_userWhereUniqueInput
    update?: XOR<XOR<sys_userUpdateToOneWithWhereWithoutUser_mediaInput, sys_userUpdateWithoutUser_mediaInput>, sys_userUncheckedUpdateWithoutUser_mediaInput>
  }

  export type sys_mediaUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<sys_mediaCreateWithoutUsersInput, sys_mediaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_mediaCreateOrConnectWithoutUsersInput
    upsert?: sys_mediaUpsertWithoutUsersInput
    connect?: sys_mediaWhereUniqueInput
    update?: XOR<XOR<sys_mediaUpdateToOneWithWhereWithoutUsersInput, sys_mediaUpdateWithoutUsersInput>, sys_mediaUncheckedUpdateWithoutUsersInput>
  }

  export type blog_postsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<blog_postsCreateWithoutCategoriesInput, blog_postsUncheckedCreateWithoutCategoriesInput> | blog_postsCreateWithoutCategoriesInput[] | blog_postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: blog_postsCreateOrConnectWithoutCategoriesInput | blog_postsCreateOrConnectWithoutCategoriesInput[]
    createMany?: blog_postsCreateManyCategoriesInputEnvelope
    connect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
  }

  export type blog_postsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<blog_postsCreateWithoutCategoriesInput, blog_postsUncheckedCreateWithoutCategoriesInput> | blog_postsCreateWithoutCategoriesInput[] | blog_postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: blog_postsCreateOrConnectWithoutCategoriesInput | blog_postsCreateOrConnectWithoutCategoriesInput[]
    createMany?: blog_postsCreateManyCategoriesInputEnvelope
    connect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
  }

  export type blog_postsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<blog_postsCreateWithoutCategoriesInput, blog_postsUncheckedCreateWithoutCategoriesInput> | blog_postsCreateWithoutCategoriesInput[] | blog_postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: blog_postsCreateOrConnectWithoutCategoriesInput | blog_postsCreateOrConnectWithoutCategoriesInput[]
    upsert?: blog_postsUpsertWithWhereUniqueWithoutCategoriesInput | blog_postsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: blog_postsCreateManyCategoriesInputEnvelope
    set?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    disconnect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    delete?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    connect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    update?: blog_postsUpdateWithWhereUniqueWithoutCategoriesInput | blog_postsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: blog_postsUpdateManyWithWhereWithoutCategoriesInput | blog_postsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: blog_postsScalarWhereInput | blog_postsScalarWhereInput[]
  }

  export type blog_postsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<blog_postsCreateWithoutCategoriesInput, blog_postsUncheckedCreateWithoutCategoriesInput> | blog_postsCreateWithoutCategoriesInput[] | blog_postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: blog_postsCreateOrConnectWithoutCategoriesInput | blog_postsCreateOrConnectWithoutCategoriesInput[]
    upsert?: blog_postsUpsertWithWhereUniqueWithoutCategoriesInput | blog_postsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: blog_postsCreateManyCategoriesInputEnvelope
    set?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    disconnect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    delete?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    connect?: blog_postsWhereUniqueInput | blog_postsWhereUniqueInput[]
    update?: blog_postsUpdateWithWhereUniqueWithoutCategoriesInput | blog_postsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: blog_postsUpdateManyWithWhereWithoutCategoriesInput | blog_postsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: blog_postsScalarWhereInput | blog_postsScalarWhereInput[]
  }

  export type blog_categoriesCreateNestedOneWithoutPostsInput = {
    create?: XOR<blog_categoriesCreateWithoutPostsInput, blog_categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: blog_categoriesCreateOrConnectWithoutPostsInput
    connect?: blog_categoriesWhereUniqueInput
  }

  export type sys_userCreateNestedOneWithoutBlog_postsInput = {
    create?: XOR<sys_userCreateWithoutBlog_postsInput, sys_userUncheckedCreateWithoutBlog_postsInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutBlog_postsInput
    connect?: sys_userWhereUniqueInput
  }

  export type blog_posts_on_tagsCreateNestedManyWithoutPostsInput = {
    create?: XOR<blog_posts_on_tagsCreateWithoutPostsInput, blog_posts_on_tagsUncheckedCreateWithoutPostsInput> | blog_posts_on_tagsCreateWithoutPostsInput[] | blog_posts_on_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: blog_posts_on_tagsCreateOrConnectWithoutPostsInput | blog_posts_on_tagsCreateOrConnectWithoutPostsInput[]
    createMany?: blog_posts_on_tagsCreateManyPostsInputEnvelope
    connect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
  }

  export type blog_commentsCreateNestedManyWithoutPostInput = {
    create?: XOR<blog_commentsCreateWithoutPostInput, blog_commentsUncheckedCreateWithoutPostInput> | blog_commentsCreateWithoutPostInput[] | blog_commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: blog_commentsCreateOrConnectWithoutPostInput | blog_commentsCreateOrConnectWithoutPostInput[]
    createMany?: blog_commentsCreateManyPostInputEnvelope
    connect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
  }

  export type blog_posts_on_tagsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<blog_posts_on_tagsCreateWithoutPostsInput, blog_posts_on_tagsUncheckedCreateWithoutPostsInput> | blog_posts_on_tagsCreateWithoutPostsInput[] | blog_posts_on_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: blog_posts_on_tagsCreateOrConnectWithoutPostsInput | blog_posts_on_tagsCreateOrConnectWithoutPostsInput[]
    createMany?: blog_posts_on_tagsCreateManyPostsInputEnvelope
    connect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
  }

  export type blog_commentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<blog_commentsCreateWithoutPostInput, blog_commentsUncheckedCreateWithoutPostInput> | blog_commentsCreateWithoutPostInput[] | blog_commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: blog_commentsCreateOrConnectWithoutPostInput | blog_commentsCreateOrConnectWithoutPostInput[]
    createMany?: blog_commentsCreateManyPostInputEnvelope
    connect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
  }

  export type blog_categoriesUpdateOneWithoutPostsNestedInput = {
    create?: XOR<blog_categoriesCreateWithoutPostsInput, blog_categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: blog_categoriesCreateOrConnectWithoutPostsInput
    upsert?: blog_categoriesUpsertWithoutPostsInput
    disconnect?: blog_categoriesWhereInput | boolean
    delete?: blog_categoriesWhereInput | boolean
    connect?: blog_categoriesWhereUniqueInput
    update?: XOR<XOR<blog_categoriesUpdateToOneWithWhereWithoutPostsInput, blog_categoriesUpdateWithoutPostsInput>, blog_categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type sys_userUpdateOneRequiredWithoutBlog_postsNestedInput = {
    create?: XOR<sys_userCreateWithoutBlog_postsInput, sys_userUncheckedCreateWithoutBlog_postsInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutBlog_postsInput
    upsert?: sys_userUpsertWithoutBlog_postsInput
    connect?: sys_userWhereUniqueInput
    update?: XOR<XOR<sys_userUpdateToOneWithWhereWithoutBlog_postsInput, sys_userUpdateWithoutBlog_postsInput>, sys_userUncheckedUpdateWithoutBlog_postsInput>
  }

  export type blog_posts_on_tagsUpdateManyWithoutPostsNestedInput = {
    create?: XOR<blog_posts_on_tagsCreateWithoutPostsInput, blog_posts_on_tagsUncheckedCreateWithoutPostsInput> | blog_posts_on_tagsCreateWithoutPostsInput[] | blog_posts_on_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: blog_posts_on_tagsCreateOrConnectWithoutPostsInput | blog_posts_on_tagsCreateOrConnectWithoutPostsInput[]
    upsert?: blog_posts_on_tagsUpsertWithWhereUniqueWithoutPostsInput | blog_posts_on_tagsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: blog_posts_on_tagsCreateManyPostsInputEnvelope
    set?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    disconnect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    delete?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    connect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    update?: blog_posts_on_tagsUpdateWithWhereUniqueWithoutPostsInput | blog_posts_on_tagsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: blog_posts_on_tagsUpdateManyWithWhereWithoutPostsInput | blog_posts_on_tagsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: blog_posts_on_tagsScalarWhereInput | blog_posts_on_tagsScalarWhereInput[]
  }

  export type blog_commentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<blog_commentsCreateWithoutPostInput, blog_commentsUncheckedCreateWithoutPostInput> | blog_commentsCreateWithoutPostInput[] | blog_commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: blog_commentsCreateOrConnectWithoutPostInput | blog_commentsCreateOrConnectWithoutPostInput[]
    upsert?: blog_commentsUpsertWithWhereUniqueWithoutPostInput | blog_commentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: blog_commentsCreateManyPostInputEnvelope
    set?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    disconnect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    delete?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    connect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    update?: blog_commentsUpdateWithWhereUniqueWithoutPostInput | blog_commentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: blog_commentsUpdateManyWithWhereWithoutPostInput | blog_commentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: blog_commentsScalarWhereInput | blog_commentsScalarWhereInput[]
  }

  export type blog_posts_on_tagsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<blog_posts_on_tagsCreateWithoutPostsInput, blog_posts_on_tagsUncheckedCreateWithoutPostsInput> | blog_posts_on_tagsCreateWithoutPostsInput[] | blog_posts_on_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: blog_posts_on_tagsCreateOrConnectWithoutPostsInput | blog_posts_on_tagsCreateOrConnectWithoutPostsInput[]
    upsert?: blog_posts_on_tagsUpsertWithWhereUniqueWithoutPostsInput | blog_posts_on_tagsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: blog_posts_on_tagsCreateManyPostsInputEnvelope
    set?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    disconnect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    delete?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    connect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    update?: blog_posts_on_tagsUpdateWithWhereUniqueWithoutPostsInput | blog_posts_on_tagsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: blog_posts_on_tagsUpdateManyWithWhereWithoutPostsInput | blog_posts_on_tagsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: blog_posts_on_tagsScalarWhereInput | blog_posts_on_tagsScalarWhereInput[]
  }

  export type blog_commentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<blog_commentsCreateWithoutPostInput, blog_commentsUncheckedCreateWithoutPostInput> | blog_commentsCreateWithoutPostInput[] | blog_commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: blog_commentsCreateOrConnectWithoutPostInput | blog_commentsCreateOrConnectWithoutPostInput[]
    upsert?: blog_commentsUpsertWithWhereUniqueWithoutPostInput | blog_commentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: blog_commentsCreateManyPostInputEnvelope
    set?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    disconnect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    delete?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    connect?: blog_commentsWhereUniqueInput | blog_commentsWhereUniqueInput[]
    update?: blog_commentsUpdateWithWhereUniqueWithoutPostInput | blog_commentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: blog_commentsUpdateManyWithWhereWithoutPostInput | blog_commentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: blog_commentsScalarWhereInput | blog_commentsScalarWhereInput[]
  }

  export type blog_postsCreateNestedOneWithoutTagsInput = {
    create?: XOR<blog_postsCreateWithoutTagsInput, blog_postsUncheckedCreateWithoutTagsInput>
    connectOrCreate?: blog_postsCreateOrConnectWithoutTagsInput
    connect?: blog_postsWhereUniqueInput
  }

  export type blog_tagCreateNestedOneWithoutBlogsInput = {
    create?: XOR<blog_tagCreateWithoutBlogsInput, blog_tagUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: blog_tagCreateOrConnectWithoutBlogsInput
    connect?: blog_tagWhereUniqueInput
  }

  export type blog_postsUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<blog_postsCreateWithoutTagsInput, blog_postsUncheckedCreateWithoutTagsInput>
    connectOrCreate?: blog_postsCreateOrConnectWithoutTagsInput
    upsert?: blog_postsUpsertWithoutTagsInput
    connect?: blog_postsWhereUniqueInput
    update?: XOR<XOR<blog_postsUpdateToOneWithWhereWithoutTagsInput, blog_postsUpdateWithoutTagsInput>, blog_postsUncheckedUpdateWithoutTagsInput>
  }

  export type blog_tagUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<blog_tagCreateWithoutBlogsInput, blog_tagUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: blog_tagCreateOrConnectWithoutBlogsInput
    upsert?: blog_tagUpsertWithoutBlogsInput
    connect?: blog_tagWhereUniqueInput
    update?: XOR<XOR<blog_tagUpdateToOneWithWhereWithoutBlogsInput, blog_tagUpdateWithoutBlogsInput>, blog_tagUncheckedUpdateWithoutBlogsInput>
  }

  export type blog_posts_on_tagsCreateNestedManyWithoutTagInput = {
    create?: XOR<blog_posts_on_tagsCreateWithoutTagInput, blog_posts_on_tagsUncheckedCreateWithoutTagInput> | blog_posts_on_tagsCreateWithoutTagInput[] | blog_posts_on_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: blog_posts_on_tagsCreateOrConnectWithoutTagInput | blog_posts_on_tagsCreateOrConnectWithoutTagInput[]
    createMany?: blog_posts_on_tagsCreateManyTagInputEnvelope
    connect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
  }

  export type blog_posts_on_tagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<blog_posts_on_tagsCreateWithoutTagInput, blog_posts_on_tagsUncheckedCreateWithoutTagInput> | blog_posts_on_tagsCreateWithoutTagInput[] | blog_posts_on_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: blog_posts_on_tagsCreateOrConnectWithoutTagInput | blog_posts_on_tagsCreateOrConnectWithoutTagInput[]
    createMany?: blog_posts_on_tagsCreateManyTagInputEnvelope
    connect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
  }

  export type blog_posts_on_tagsUpdateManyWithoutTagNestedInput = {
    create?: XOR<blog_posts_on_tagsCreateWithoutTagInput, blog_posts_on_tagsUncheckedCreateWithoutTagInput> | blog_posts_on_tagsCreateWithoutTagInput[] | blog_posts_on_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: blog_posts_on_tagsCreateOrConnectWithoutTagInput | blog_posts_on_tagsCreateOrConnectWithoutTagInput[]
    upsert?: blog_posts_on_tagsUpsertWithWhereUniqueWithoutTagInput | blog_posts_on_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: blog_posts_on_tagsCreateManyTagInputEnvelope
    set?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    disconnect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    delete?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    connect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    update?: blog_posts_on_tagsUpdateWithWhereUniqueWithoutTagInput | blog_posts_on_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: blog_posts_on_tagsUpdateManyWithWhereWithoutTagInput | blog_posts_on_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: blog_posts_on_tagsScalarWhereInput | blog_posts_on_tagsScalarWhereInput[]
  }

  export type blog_posts_on_tagsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<blog_posts_on_tagsCreateWithoutTagInput, blog_posts_on_tagsUncheckedCreateWithoutTagInput> | blog_posts_on_tagsCreateWithoutTagInput[] | blog_posts_on_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: blog_posts_on_tagsCreateOrConnectWithoutTagInput | blog_posts_on_tagsCreateOrConnectWithoutTagInput[]
    upsert?: blog_posts_on_tagsUpsertWithWhereUniqueWithoutTagInput | blog_posts_on_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: blog_posts_on_tagsCreateManyTagInputEnvelope
    set?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    disconnect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    delete?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    connect?: blog_posts_on_tagsWhereUniqueInput | blog_posts_on_tagsWhereUniqueInput[]
    update?: blog_posts_on_tagsUpdateWithWhereUniqueWithoutTagInput | blog_posts_on_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: blog_posts_on_tagsUpdateManyWithWhereWithoutTagInput | blog_posts_on_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: blog_posts_on_tagsScalarWhereInput | blog_posts_on_tagsScalarWhereInput[]
  }

  export type sys_userCreateNestedOneWithoutBlog_commentsInput = {
    create?: XOR<sys_userCreateWithoutBlog_commentsInput, sys_userUncheckedCreateWithoutBlog_commentsInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutBlog_commentsInput
    connect?: sys_userWhereUniqueInput
  }

  export type blog_postsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<blog_postsCreateWithoutCommentsInput, blog_postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: blog_postsCreateOrConnectWithoutCommentsInput
    connect?: blog_postsWhereUniqueInput
  }

  export type sys_userUpdateOneRequiredWithoutBlog_commentsNestedInput = {
    create?: XOR<sys_userCreateWithoutBlog_commentsInput, sys_userUncheckedCreateWithoutBlog_commentsInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutBlog_commentsInput
    upsert?: sys_userUpsertWithoutBlog_commentsInput
    connect?: sys_userWhereUniqueInput
    update?: XOR<XOR<sys_userUpdateToOneWithWhereWithoutBlog_commentsInput, sys_userUpdateWithoutBlog_commentsInput>, sys_userUncheckedUpdateWithoutBlog_commentsInput>
  }

  export type blog_postsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<blog_postsCreateWithoutCommentsInput, blog_postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: blog_postsCreateOrConnectWithoutCommentsInput
    upsert?: blog_postsUpsertWithoutCommentsInput
    connect?: blog_postsWhereUniqueInput
    update?: XOR<XOR<blog_postsUpdateToOneWithWhereWithoutCommentsInput, blog_postsUpdateWithoutCommentsInput>, blog_postsUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumsys_account_providerFilter<$PrismaModel = never> = {
    equals?: $Enums.sys_account_provider | Enumsys_account_providerFieldRefInput<$PrismaModel>
    in?: $Enums.sys_account_provider[]
    notIn?: $Enums.sys_account_provider[]
    not?: NestedEnumsys_account_providerFilter<$PrismaModel> | $Enums.sys_account_provider
  }

  export type NestedEnumsys_account_providerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sys_account_provider | Enumsys_account_providerFieldRefInput<$PrismaModel>
    in?: $Enums.sys_account_provider[]
    notIn?: $Enums.sys_account_provider[]
    not?: NestedEnumsys_account_providerWithAggregatesFilter<$PrismaModel> | $Enums.sys_account_provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsys_account_providerFilter<$PrismaModel>
    _max?: NestedEnumsys_account_providerFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type sys_accountCreateWithoutUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.sys_account_provider
    value: string
  }

  export type sys_accountUncheckedCreateWithoutUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.sys_account_provider
    value: string
  }

  export type sys_accountCreateOrConnectWithoutUserInput = {
    where: sys_accountWhereUniqueInput
    create: XOR<sys_accountCreateWithoutUserInput, sys_accountUncheckedCreateWithoutUserInput>
  }

  export type sys_accountCreateManyUserInputEnvelope = {
    data: sys_accountCreateManyUserInput | sys_accountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sys_roleCreateWithoutUsersInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    status?: boolean
    comment?: string | null
    sort?: number
    menus?: sys_menu_on_roleCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUncheckedCreateWithoutUsersInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    status?: boolean
    comment?: string | null
    sort?: number
    menus?: sys_menu_on_roleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type sys_roleCreateOrConnectWithoutUsersInput = {
    where: sys_roleWhereUniqueInput
    create: XOR<sys_roleCreateWithoutUsersInput, sys_roleUncheckedCreateWithoutUsersInput>
  }

  export type sys_user_ban_menuCreateWithoutUserInput = {
    menu: sys_menuCreateNestedOneWithoutUser_bansInput
  }

  export type sys_user_ban_menuUncheckedCreateWithoutUserInput = {
    menuId: string
  }

  export type sys_user_ban_menuCreateOrConnectWithoutUserInput = {
    where: sys_user_ban_menuWhereUniqueInput
    create: XOR<sys_user_ban_menuCreateWithoutUserInput, sys_user_ban_menuUncheckedCreateWithoutUserInput>
  }

  export type sys_user_ban_menuCreateManyUserInputEnvelope = {
    data: sys_user_ban_menuCreateManyUserInput | sys_user_ban_menuCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sys_user_mediaCreateWithoutUserInput = {
    media: sys_mediaCreateNestedOneWithoutUsersInput
  }

  export type sys_user_mediaUncheckedCreateWithoutUserInput = {
    mediaId: string
  }

  export type sys_user_mediaCreateOrConnectWithoutUserInput = {
    where: sys_user_mediaWhereUniqueInput
    create: XOR<sys_user_mediaCreateWithoutUserInput, sys_user_mediaUncheckedCreateWithoutUserInput>
  }

  export type sys_user_mediaCreateManyUserInputEnvelope = {
    data: sys_user_mediaCreateManyUserInput | sys_user_mediaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type blog_postsCreateWithoutUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    categories?: blog_categoriesCreateNestedOneWithoutPostsInput
    tags?: blog_posts_on_tagsCreateNestedManyWithoutPostsInput
    comments?: blog_commentsCreateNestedManyWithoutPostInput
  }

  export type blog_postsUncheckedCreateWithoutUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    categoriesId?: string | null
    tags?: blog_posts_on_tagsUncheckedCreateNestedManyWithoutPostsInput
    comments?: blog_commentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type blog_postsCreateOrConnectWithoutUserInput = {
    where: blog_postsWhereUniqueInput
    create: XOR<blog_postsCreateWithoutUserInput, blog_postsUncheckedCreateWithoutUserInput>
  }

  export type blog_postsCreateManyUserInputEnvelope = {
    data: blog_postsCreateManyUserInput | blog_postsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type blog_commentsCreateWithoutUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    post: blog_postsCreateNestedOneWithoutCommentsInput
  }

  export type blog_commentsUncheckedCreateWithoutUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    postId: string
  }

  export type blog_commentsCreateOrConnectWithoutUserInput = {
    where: blog_commentsWhereUniqueInput
    create: XOR<blog_commentsCreateWithoutUserInput, blog_commentsUncheckedCreateWithoutUserInput>
  }

  export type blog_commentsCreateManyUserInputEnvelope = {
    data: blog_commentsCreateManyUserInput | blog_commentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sys_accountUpsertWithWhereUniqueWithoutUserInput = {
    where: sys_accountWhereUniqueInput
    update: XOR<sys_accountUpdateWithoutUserInput, sys_accountUncheckedUpdateWithoutUserInput>
    create: XOR<sys_accountCreateWithoutUserInput, sys_accountUncheckedCreateWithoutUserInput>
  }

  export type sys_accountUpdateWithWhereUniqueWithoutUserInput = {
    where: sys_accountWhereUniqueInput
    data: XOR<sys_accountUpdateWithoutUserInput, sys_accountUncheckedUpdateWithoutUserInput>
  }

  export type sys_accountUpdateManyWithWhereWithoutUserInput = {
    where: sys_accountScalarWhereInput
    data: XOR<sys_accountUpdateManyMutationInput, sys_accountUncheckedUpdateManyWithoutUserInput>
  }

  export type sys_accountScalarWhereInput = {
    AND?: sys_accountScalarWhereInput | sys_accountScalarWhereInput[]
    OR?: sys_accountScalarWhereInput[]
    NOT?: sys_accountScalarWhereInput | sys_accountScalarWhereInput[]
    uid?: StringFilter<"sys_account"> | string
    createdAt?: DateTimeFilter<"sys_account"> | Date | string
    updatedAt?: DateTimeFilter<"sys_account"> | Date | string
    provider?: Enumsys_account_providerFilter<"sys_account"> | $Enums.sys_account_provider
    value?: StringFilter<"sys_account"> | string
    userId?: StringFilter<"sys_account"> | string
  }

  export type sys_roleUpsertWithoutUsersInput = {
    update: XOR<sys_roleUpdateWithoutUsersInput, sys_roleUncheckedUpdateWithoutUsersInput>
    create: XOR<sys_roleCreateWithoutUsersInput, sys_roleUncheckedCreateWithoutUsersInput>
    where?: sys_roleWhereInput
  }

  export type sys_roleUpdateToOneWithWhereWithoutUsersInput = {
    where?: sys_roleWhereInput
    data: XOR<sys_roleUpdateWithoutUsersInput, sys_roleUncheckedUpdateWithoutUsersInput>
  }

  export type sys_roleUpdateWithoutUsersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    menus?: sys_menu_on_roleUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleUncheckedUpdateWithoutUsersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    menus?: sys_menu_on_roleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type sys_user_ban_menuUpsertWithWhereUniqueWithoutUserInput = {
    where: sys_user_ban_menuWhereUniqueInput
    update: XOR<sys_user_ban_menuUpdateWithoutUserInput, sys_user_ban_menuUncheckedUpdateWithoutUserInput>
    create: XOR<sys_user_ban_menuCreateWithoutUserInput, sys_user_ban_menuUncheckedCreateWithoutUserInput>
  }

  export type sys_user_ban_menuUpdateWithWhereUniqueWithoutUserInput = {
    where: sys_user_ban_menuWhereUniqueInput
    data: XOR<sys_user_ban_menuUpdateWithoutUserInput, sys_user_ban_menuUncheckedUpdateWithoutUserInput>
  }

  export type sys_user_ban_menuUpdateManyWithWhereWithoutUserInput = {
    where: sys_user_ban_menuScalarWhereInput
    data: XOR<sys_user_ban_menuUpdateManyMutationInput, sys_user_ban_menuUncheckedUpdateManyWithoutUserInput>
  }

  export type sys_user_ban_menuScalarWhereInput = {
    AND?: sys_user_ban_menuScalarWhereInput | sys_user_ban_menuScalarWhereInput[]
    OR?: sys_user_ban_menuScalarWhereInput[]
    NOT?: sys_user_ban_menuScalarWhereInput | sys_user_ban_menuScalarWhereInput[]
    userId?: StringFilter<"sys_user_ban_menu"> | string
    menuId?: StringFilter<"sys_user_ban_menu"> | string
  }

  export type sys_user_mediaUpsertWithWhereUniqueWithoutUserInput = {
    where: sys_user_mediaWhereUniqueInput
    update: XOR<sys_user_mediaUpdateWithoutUserInput, sys_user_mediaUncheckedUpdateWithoutUserInput>
    create: XOR<sys_user_mediaCreateWithoutUserInput, sys_user_mediaUncheckedCreateWithoutUserInput>
  }

  export type sys_user_mediaUpdateWithWhereUniqueWithoutUserInput = {
    where: sys_user_mediaWhereUniqueInput
    data: XOR<sys_user_mediaUpdateWithoutUserInput, sys_user_mediaUncheckedUpdateWithoutUserInput>
  }

  export type sys_user_mediaUpdateManyWithWhereWithoutUserInput = {
    where: sys_user_mediaScalarWhereInput
    data: XOR<sys_user_mediaUpdateManyMutationInput, sys_user_mediaUncheckedUpdateManyWithoutUserInput>
  }

  export type sys_user_mediaScalarWhereInput = {
    AND?: sys_user_mediaScalarWhereInput | sys_user_mediaScalarWhereInput[]
    OR?: sys_user_mediaScalarWhereInput[]
    NOT?: sys_user_mediaScalarWhereInput | sys_user_mediaScalarWhereInput[]
    userId?: StringFilter<"sys_user_media"> | string
    mediaId?: StringFilter<"sys_user_media"> | string
  }

  export type blog_postsUpsertWithWhereUniqueWithoutUserInput = {
    where: blog_postsWhereUniqueInput
    update: XOR<blog_postsUpdateWithoutUserInput, blog_postsUncheckedUpdateWithoutUserInput>
    create: XOR<blog_postsCreateWithoutUserInput, blog_postsUncheckedCreateWithoutUserInput>
  }

  export type blog_postsUpdateWithWhereUniqueWithoutUserInput = {
    where: blog_postsWhereUniqueInput
    data: XOR<blog_postsUpdateWithoutUserInput, blog_postsUncheckedUpdateWithoutUserInput>
  }

  export type blog_postsUpdateManyWithWhereWithoutUserInput = {
    where: blog_postsScalarWhereInput
    data: XOR<blog_postsUpdateManyMutationInput, blog_postsUncheckedUpdateManyWithoutUserInput>
  }

  export type blog_postsScalarWhereInput = {
    AND?: blog_postsScalarWhereInput | blog_postsScalarWhereInput[]
    OR?: blog_postsScalarWhereInput[]
    NOT?: blog_postsScalarWhereInput | blog_postsScalarWhereInput[]
    uid?: StringFilter<"blog_posts"> | string
    createdAt?: DateTimeFilter<"blog_posts"> | Date | string
    updatedAt?: DateTimeFilter<"blog_posts"> | Date | string
    title?: StringFilter<"blog_posts"> | string
    content?: StringFilter<"blog_posts"> | string
    status?: BoolFilter<"blog_posts"> | boolean
    userId?: StringFilter<"blog_posts"> | string
    categoriesId?: StringNullableFilter<"blog_posts"> | string | null
  }

  export type blog_commentsUpsertWithWhereUniqueWithoutUserInput = {
    where: blog_commentsWhereUniqueInput
    update: XOR<blog_commentsUpdateWithoutUserInput, blog_commentsUncheckedUpdateWithoutUserInput>
    create: XOR<blog_commentsCreateWithoutUserInput, blog_commentsUncheckedCreateWithoutUserInput>
  }

  export type blog_commentsUpdateWithWhereUniqueWithoutUserInput = {
    where: blog_commentsWhereUniqueInput
    data: XOR<blog_commentsUpdateWithoutUserInput, blog_commentsUncheckedUpdateWithoutUserInput>
  }

  export type blog_commentsUpdateManyWithWhereWithoutUserInput = {
    where: blog_commentsScalarWhereInput
    data: XOR<blog_commentsUpdateManyMutationInput, blog_commentsUncheckedUpdateManyWithoutUserInput>
  }

  export type blog_commentsScalarWhereInput = {
    AND?: blog_commentsScalarWhereInput | blog_commentsScalarWhereInput[]
    OR?: blog_commentsScalarWhereInput[]
    NOT?: blog_commentsScalarWhereInput | blog_commentsScalarWhereInput[]
    uid?: StringFilter<"blog_comments"> | string
    createdAt?: DateTimeFilter<"blog_comments"> | Date | string
    updatedAt?: DateTimeFilter<"blog_comments"> | Date | string
    content?: StringFilter<"blog_comments"> | string
    status?: BoolFilter<"blog_comments"> | boolean
    userId?: StringFilter<"blog_comments"> | string
    postId?: StringFilter<"blog_comments"> | string
  }

  export type sys_userCreateWithoutAccountsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    role?: sys_roleCreateNestedOneWithoutUsersInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutAccountsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsUncheckedCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutAccountsInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutAccountsInput, sys_userUncheckedCreateWithoutAccountsInput>
  }

  export type sys_userUpsertWithoutAccountsInput = {
    update: XOR<sys_userUpdateWithoutAccountsInput, sys_userUncheckedUpdateWithoutAccountsInput>
    create: XOR<sys_userCreateWithoutAccountsInput, sys_userUncheckedCreateWithoutAccountsInput>
    where?: sys_userWhereInput
  }

  export type sys_userUpdateToOneWithWhereWithoutAccountsInput = {
    where?: sys_userWhereInput
    data: XOR<sys_userUpdateWithoutAccountsInput, sys_userUncheckedUpdateWithoutAccountsInput>
  }

  export type sys_userUpdateWithoutAccountsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    role?: sys_roleUpdateOneWithoutUsersNestedInput
    ban_menus?: sys_user_ban_menuUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutAccountsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUncheckedUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_menuCreateWithoutChildrenInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parent?: sys_menuCreateNestedOneWithoutChildrenInput
    roles?: sys_menu_on_roleCreateNestedManyWithoutMenuInput
    user_bans?: sys_user_ban_menuCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUncheckedCreateWithoutChildrenInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parentId?: string | null
    roles?: sys_menu_on_roleUncheckedCreateNestedManyWithoutMenuInput
    user_bans?: sys_user_ban_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type sys_menuCreateOrConnectWithoutChildrenInput = {
    where: sys_menuWhereUniqueInput
    create: XOR<sys_menuCreateWithoutChildrenInput, sys_menuUncheckedCreateWithoutChildrenInput>
  }

  export type sys_menuCreateWithoutParentInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    children?: sys_menuCreateNestedManyWithoutParentInput
    roles?: sys_menu_on_roleCreateNestedManyWithoutMenuInput
    user_bans?: sys_user_ban_menuCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUncheckedCreateWithoutParentInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    children?: sys_menuUncheckedCreateNestedManyWithoutParentInput
    roles?: sys_menu_on_roleUncheckedCreateNestedManyWithoutMenuInput
    user_bans?: sys_user_ban_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type sys_menuCreateOrConnectWithoutParentInput = {
    where: sys_menuWhereUniqueInput
    create: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput>
  }

  export type sys_menuCreateManyParentInputEnvelope = {
    data: sys_menuCreateManyParentInput | sys_menuCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type sys_menu_on_roleCreateWithoutMenuInput = {
    power?: number
    role: sys_roleCreateNestedOneWithoutMenusInput
  }

  export type sys_menu_on_roleUncheckedCreateWithoutMenuInput = {
    roleId: string
    power?: number
  }

  export type sys_menu_on_roleCreateOrConnectWithoutMenuInput = {
    where: sys_menu_on_roleWhereUniqueInput
    create: XOR<sys_menu_on_roleCreateWithoutMenuInput, sys_menu_on_roleUncheckedCreateWithoutMenuInput>
  }

  export type sys_menu_on_roleCreateManyMenuInputEnvelope = {
    data: sys_menu_on_roleCreateManyMenuInput | sys_menu_on_roleCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type sys_user_ban_menuCreateWithoutMenuInput = {
    user: sys_userCreateNestedOneWithoutBan_menusInput
  }

  export type sys_user_ban_menuUncheckedCreateWithoutMenuInput = {
    userId: string
  }

  export type sys_user_ban_menuCreateOrConnectWithoutMenuInput = {
    where: sys_user_ban_menuWhereUniqueInput
    create: XOR<sys_user_ban_menuCreateWithoutMenuInput, sys_user_ban_menuUncheckedCreateWithoutMenuInput>
  }

  export type sys_user_ban_menuCreateManyMenuInputEnvelope = {
    data: sys_user_ban_menuCreateManyMenuInput | sys_user_ban_menuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type sys_menuUpsertWithoutChildrenInput = {
    update: XOR<sys_menuUpdateWithoutChildrenInput, sys_menuUncheckedUpdateWithoutChildrenInput>
    create: XOR<sys_menuCreateWithoutChildrenInput, sys_menuUncheckedCreateWithoutChildrenInput>
    where?: sys_menuWhereInput
  }

  export type sys_menuUpdateToOneWithWhereWithoutChildrenInput = {
    where?: sys_menuWhereInput
    data: XOR<sys_menuUpdateWithoutChildrenInput, sys_menuUncheckedUpdateWithoutChildrenInput>
  }

  export type sys_menuUpdateWithoutChildrenInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_menuUpdateOneWithoutChildrenNestedInput
    roles?: sys_menu_on_roleUpdateManyWithoutMenuNestedInput
    user_bans?: sys_user_ban_menuUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateWithoutChildrenInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: sys_menu_on_roleUncheckedUpdateManyWithoutMenuNestedInput
    user_bans?: sys_user_ban_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUpsertWithWhereUniqueWithoutParentInput = {
    where: sys_menuWhereUniqueInput
    update: XOR<sys_menuUpdateWithoutParentInput, sys_menuUncheckedUpdateWithoutParentInput>
    create: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput>
  }

  export type sys_menuUpdateWithWhereUniqueWithoutParentInput = {
    where: sys_menuWhereUniqueInput
    data: XOR<sys_menuUpdateWithoutParentInput, sys_menuUncheckedUpdateWithoutParentInput>
  }

  export type sys_menuUpdateManyWithWhereWithoutParentInput = {
    where: sys_menuScalarWhereInput
    data: XOR<sys_menuUpdateManyMutationInput, sys_menuUncheckedUpdateManyWithoutParentInput>
  }

  export type sys_menuScalarWhereInput = {
    AND?: sys_menuScalarWhereInput | sys_menuScalarWhereInput[]
    OR?: sys_menuScalarWhereInput[]
    NOT?: sys_menuScalarWhereInput | sys_menuScalarWhereInput[]
    uid?: StringFilter<"sys_menu"> | string
    createdAt?: DateTimeFilter<"sys_menu"> | Date | string
    updatedAt?: DateTimeFilter<"sys_menu"> | Date | string
    name?: StringFilter<"sys_menu"> | string
    path?: StringFilter<"sys_menu"> | string
    sort?: IntFilter<"sys_menu"> | number
    powers?: IntFilter<"sys_menu"> | number
    comment?: StringNullableFilter<"sys_menu"> | string | null
    parentId?: StringNullableFilter<"sys_menu"> | string | null
  }

  export type sys_menu_on_roleUpsertWithWhereUniqueWithoutMenuInput = {
    where: sys_menu_on_roleWhereUniqueInput
    update: XOR<sys_menu_on_roleUpdateWithoutMenuInput, sys_menu_on_roleUncheckedUpdateWithoutMenuInput>
    create: XOR<sys_menu_on_roleCreateWithoutMenuInput, sys_menu_on_roleUncheckedCreateWithoutMenuInput>
  }

  export type sys_menu_on_roleUpdateWithWhereUniqueWithoutMenuInput = {
    where: sys_menu_on_roleWhereUniqueInput
    data: XOR<sys_menu_on_roleUpdateWithoutMenuInput, sys_menu_on_roleUncheckedUpdateWithoutMenuInput>
  }

  export type sys_menu_on_roleUpdateManyWithWhereWithoutMenuInput = {
    where: sys_menu_on_roleScalarWhereInput
    data: XOR<sys_menu_on_roleUpdateManyMutationInput, sys_menu_on_roleUncheckedUpdateManyWithoutMenuInput>
  }

  export type sys_menu_on_roleScalarWhereInput = {
    AND?: sys_menu_on_roleScalarWhereInput | sys_menu_on_roleScalarWhereInput[]
    OR?: sys_menu_on_roleScalarWhereInput[]
    NOT?: sys_menu_on_roleScalarWhereInput | sys_menu_on_roleScalarWhereInput[]
    roleId?: StringFilter<"sys_menu_on_role"> | string
    menuId?: StringFilter<"sys_menu_on_role"> | string
    power?: IntFilter<"sys_menu_on_role"> | number
  }

  export type sys_user_ban_menuUpsertWithWhereUniqueWithoutMenuInput = {
    where: sys_user_ban_menuWhereUniqueInput
    update: XOR<sys_user_ban_menuUpdateWithoutMenuInput, sys_user_ban_menuUncheckedUpdateWithoutMenuInput>
    create: XOR<sys_user_ban_menuCreateWithoutMenuInput, sys_user_ban_menuUncheckedCreateWithoutMenuInput>
  }

  export type sys_user_ban_menuUpdateWithWhereUniqueWithoutMenuInput = {
    where: sys_user_ban_menuWhereUniqueInput
    data: XOR<sys_user_ban_menuUpdateWithoutMenuInput, sys_user_ban_menuUncheckedUpdateWithoutMenuInput>
  }

  export type sys_user_ban_menuUpdateManyWithWhereWithoutMenuInput = {
    where: sys_user_ban_menuScalarWhereInput
    data: XOR<sys_user_ban_menuUpdateManyMutationInput, sys_user_ban_menuUncheckedUpdateManyWithoutMenuInput>
  }

  export type sys_userCreateWithoutBan_menusInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountCreateNestedManyWithoutUserInput
    role?: sys_roleCreateNestedOneWithoutUsersInput
    user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutBan_menusInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsUncheckedCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutBan_menusInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutBan_menusInput, sys_userUncheckedCreateWithoutBan_menusInput>
  }

  export type sys_menuCreateWithoutUser_bansInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parent?: sys_menuCreateNestedOneWithoutChildrenInput
    children?: sys_menuCreateNestedManyWithoutParentInput
    roles?: sys_menu_on_roleCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUncheckedCreateWithoutUser_bansInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parentId?: string | null
    children?: sys_menuUncheckedCreateNestedManyWithoutParentInput
    roles?: sys_menu_on_roleUncheckedCreateNestedManyWithoutMenuInput
  }

  export type sys_menuCreateOrConnectWithoutUser_bansInput = {
    where: sys_menuWhereUniqueInput
    create: XOR<sys_menuCreateWithoutUser_bansInput, sys_menuUncheckedCreateWithoutUser_bansInput>
  }

  export type sys_userUpsertWithoutBan_menusInput = {
    update: XOR<sys_userUpdateWithoutBan_menusInput, sys_userUncheckedUpdateWithoutBan_menusInput>
    create: XOR<sys_userCreateWithoutBan_menusInput, sys_userUncheckedCreateWithoutBan_menusInput>
    where?: sys_userWhereInput
  }

  export type sys_userUpdateToOneWithWhereWithoutBan_menusInput = {
    where?: sys_userWhereInput
    data: XOR<sys_userUpdateWithoutBan_menusInput, sys_userUncheckedUpdateWithoutBan_menusInput>
  }

  export type sys_userUpdateWithoutBan_menusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUpdateManyWithoutUserNestedInput
    role?: sys_roleUpdateOneWithoutUsersNestedInput
    user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutBan_menusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUncheckedUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_menuUpsertWithoutUser_bansInput = {
    update: XOR<sys_menuUpdateWithoutUser_bansInput, sys_menuUncheckedUpdateWithoutUser_bansInput>
    create: XOR<sys_menuCreateWithoutUser_bansInput, sys_menuUncheckedCreateWithoutUser_bansInput>
    where?: sys_menuWhereInput
  }

  export type sys_menuUpdateToOneWithWhereWithoutUser_bansInput = {
    where?: sys_menuWhereInput
    data: XOR<sys_menuUpdateWithoutUser_bansInput, sys_menuUncheckedUpdateWithoutUser_bansInput>
  }

  export type sys_menuUpdateWithoutUser_bansInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_menuUpdateOneWithoutChildrenNestedInput
    children?: sys_menuUpdateManyWithoutParentNestedInput
    roles?: sys_menu_on_roleUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateWithoutUser_bansInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_menuUncheckedUpdateManyWithoutParentNestedInput
    roles?: sys_menu_on_roleUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuCreateWithoutRolesInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parent?: sys_menuCreateNestedOneWithoutChildrenInput
    children?: sys_menuCreateNestedManyWithoutParentInput
    user_bans?: sys_user_ban_menuCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUncheckedCreateWithoutRolesInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
    parentId?: string | null
    children?: sys_menuUncheckedCreateNestedManyWithoutParentInput
    user_bans?: sys_user_ban_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type sys_menuCreateOrConnectWithoutRolesInput = {
    where: sys_menuWhereUniqueInput
    create: XOR<sys_menuCreateWithoutRolesInput, sys_menuUncheckedCreateWithoutRolesInput>
  }

  export type sys_roleCreateWithoutMenusInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    status?: boolean
    comment?: string | null
    sort?: number
    users?: sys_userCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUncheckedCreateWithoutMenusInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    status?: boolean
    comment?: string | null
    sort?: number
    users?: sys_userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type sys_roleCreateOrConnectWithoutMenusInput = {
    where: sys_roleWhereUniqueInput
    create: XOR<sys_roleCreateWithoutMenusInput, sys_roleUncheckedCreateWithoutMenusInput>
  }

  export type sys_menuUpsertWithoutRolesInput = {
    update: XOR<sys_menuUpdateWithoutRolesInput, sys_menuUncheckedUpdateWithoutRolesInput>
    create: XOR<sys_menuCreateWithoutRolesInput, sys_menuUncheckedCreateWithoutRolesInput>
    where?: sys_menuWhereInput
  }

  export type sys_menuUpdateToOneWithWhereWithoutRolesInput = {
    where?: sys_menuWhereInput
    data: XOR<sys_menuUpdateWithoutRolesInput, sys_menuUncheckedUpdateWithoutRolesInput>
  }

  export type sys_menuUpdateWithoutRolesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_menuUpdateOneWithoutChildrenNestedInput
    children?: sys_menuUpdateManyWithoutParentNestedInput
    user_bans?: sys_user_ban_menuUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateWithoutRolesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_menuUncheckedUpdateManyWithoutParentNestedInput
    user_bans?: sys_user_ban_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type sys_roleUpsertWithoutMenusInput = {
    update: XOR<sys_roleUpdateWithoutMenusInput, sys_roleUncheckedUpdateWithoutMenusInput>
    create: XOR<sys_roleCreateWithoutMenusInput, sys_roleUncheckedCreateWithoutMenusInput>
    where?: sys_roleWhereInput
  }

  export type sys_roleUpdateToOneWithWhereWithoutMenusInput = {
    where?: sys_roleWhereInput
    data: XOR<sys_roleUpdateWithoutMenusInput, sys_roleUncheckedUpdateWithoutMenusInput>
  }

  export type sys_roleUpdateWithoutMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    users?: sys_userUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleUncheckedUpdateWithoutMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    users?: sys_userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type sys_menu_on_roleCreateWithoutRoleInput = {
    power?: number
    menu: sys_menuCreateNestedOneWithoutRolesInput
  }

  export type sys_menu_on_roleUncheckedCreateWithoutRoleInput = {
    menuId: string
    power?: number
  }

  export type sys_menu_on_roleCreateOrConnectWithoutRoleInput = {
    where: sys_menu_on_roleWhereUniqueInput
    create: XOR<sys_menu_on_roleCreateWithoutRoleInput, sys_menu_on_roleUncheckedCreateWithoutRoleInput>
  }

  export type sys_menu_on_roleCreateManyRoleInputEnvelope = {
    data: sys_menu_on_roleCreateManyRoleInput | sys_menu_on_roleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type sys_userCreateWithoutRoleInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountCreateNestedManyWithoutUserInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutRoleInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsUncheckedCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutRoleInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutRoleInput, sys_userUncheckedCreateWithoutRoleInput>
  }

  export type sys_userCreateManyRoleInputEnvelope = {
    data: sys_userCreateManyRoleInput | sys_userCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type sys_menu_on_roleUpsertWithWhereUniqueWithoutRoleInput = {
    where: sys_menu_on_roleWhereUniqueInput
    update: XOR<sys_menu_on_roleUpdateWithoutRoleInput, sys_menu_on_roleUncheckedUpdateWithoutRoleInput>
    create: XOR<sys_menu_on_roleCreateWithoutRoleInput, sys_menu_on_roleUncheckedCreateWithoutRoleInput>
  }

  export type sys_menu_on_roleUpdateWithWhereUniqueWithoutRoleInput = {
    where: sys_menu_on_roleWhereUniqueInput
    data: XOR<sys_menu_on_roleUpdateWithoutRoleInput, sys_menu_on_roleUncheckedUpdateWithoutRoleInput>
  }

  export type sys_menu_on_roleUpdateManyWithWhereWithoutRoleInput = {
    where: sys_menu_on_roleScalarWhereInput
    data: XOR<sys_menu_on_roleUpdateManyMutationInput, sys_menu_on_roleUncheckedUpdateManyWithoutRoleInput>
  }

  export type sys_userUpsertWithWhereUniqueWithoutRoleInput = {
    where: sys_userWhereUniqueInput
    update: XOR<sys_userUpdateWithoutRoleInput, sys_userUncheckedUpdateWithoutRoleInput>
    create: XOR<sys_userCreateWithoutRoleInput, sys_userUncheckedCreateWithoutRoleInput>
  }

  export type sys_userUpdateWithWhereUniqueWithoutRoleInput = {
    where: sys_userWhereUniqueInput
    data: XOR<sys_userUpdateWithoutRoleInput, sys_userUncheckedUpdateWithoutRoleInput>
  }

  export type sys_userUpdateManyWithWhereWithoutRoleInput = {
    where: sys_userScalarWhereInput
    data: XOR<sys_userUpdateManyMutationInput, sys_userUncheckedUpdateManyWithoutRoleInput>
  }

  export type sys_userScalarWhereInput = {
    AND?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
    OR?: sys_userScalarWhereInput[]
    NOT?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
    uid?: StringFilter<"sys_user"> | string
    createdAt?: DateTimeFilter<"sys_user"> | Date | string
    updatedAt?: DateTimeFilter<"sys_user"> | Date | string
    name?: StringFilter<"sys_user"> | string
    roleId?: StringNullableFilter<"sys_user"> | string | null
    account?: StringFilter<"sys_user"> | string
  }

  export type sys_user_mediaCreateWithoutMediaInput = {
    user: sys_userCreateNestedOneWithoutUser_mediaInput
  }

  export type sys_user_mediaUncheckedCreateWithoutMediaInput = {
    userId: string
  }

  export type sys_user_mediaCreateOrConnectWithoutMediaInput = {
    where: sys_user_mediaWhereUniqueInput
    create: XOR<sys_user_mediaCreateWithoutMediaInput, sys_user_mediaUncheckedCreateWithoutMediaInput>
  }

  export type sys_user_mediaCreateManyMediaInputEnvelope = {
    data: sys_user_mediaCreateManyMediaInput | sys_user_mediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type sys_user_mediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: sys_user_mediaWhereUniqueInput
    update: XOR<sys_user_mediaUpdateWithoutMediaInput, sys_user_mediaUncheckedUpdateWithoutMediaInput>
    create: XOR<sys_user_mediaCreateWithoutMediaInput, sys_user_mediaUncheckedCreateWithoutMediaInput>
  }

  export type sys_user_mediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: sys_user_mediaWhereUniqueInput
    data: XOR<sys_user_mediaUpdateWithoutMediaInput, sys_user_mediaUncheckedUpdateWithoutMediaInput>
  }

  export type sys_user_mediaUpdateManyWithWhereWithoutMediaInput = {
    where: sys_user_mediaScalarWhereInput
    data: XOR<sys_user_mediaUpdateManyMutationInput, sys_user_mediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type sys_userCreateWithoutUser_mediaInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountCreateNestedManyWithoutUserInput
    role?: sys_roleCreateNestedOneWithoutUsersInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutUser_mediaInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsUncheckedCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutUser_mediaInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutUser_mediaInput, sys_userUncheckedCreateWithoutUser_mediaInput>
  }

  export type sys_mediaCreateWithoutUsersInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    size: number
    hash: string
    mimeType: string
    extension: string
    path: string
    url?: string | null
    isWechat?: boolean
    wechat_id?: string | null
    enabled?: boolean
    type?: string
    width?: number | null
    height?: number | null
    duration?: number | null
  }

  export type sys_mediaUncheckedCreateWithoutUsersInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    size: number
    hash: string
    mimeType: string
    extension: string
    path: string
    url?: string | null
    isWechat?: boolean
    wechat_id?: string | null
    enabled?: boolean
    type?: string
    width?: number | null
    height?: number | null
    duration?: number | null
  }

  export type sys_mediaCreateOrConnectWithoutUsersInput = {
    where: sys_mediaWhereUniqueInput
    create: XOR<sys_mediaCreateWithoutUsersInput, sys_mediaUncheckedCreateWithoutUsersInput>
  }

  export type sys_userUpsertWithoutUser_mediaInput = {
    update: XOR<sys_userUpdateWithoutUser_mediaInput, sys_userUncheckedUpdateWithoutUser_mediaInput>
    create: XOR<sys_userCreateWithoutUser_mediaInput, sys_userUncheckedCreateWithoutUser_mediaInput>
    where?: sys_userWhereInput
  }

  export type sys_userUpdateToOneWithWhereWithoutUser_mediaInput = {
    where?: sys_userWhereInput
    data: XOR<sys_userUpdateWithoutUser_mediaInput, sys_userUncheckedUpdateWithoutUser_mediaInput>
  }

  export type sys_userUpdateWithoutUser_mediaInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUpdateManyWithoutUserNestedInput
    role?: sys_roleUpdateOneWithoutUsersNestedInput
    ban_menus?: sys_user_ban_menuUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutUser_mediaInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUncheckedUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_mediaUpsertWithoutUsersInput = {
    update: XOR<sys_mediaUpdateWithoutUsersInput, sys_mediaUncheckedUpdateWithoutUsersInput>
    create: XOR<sys_mediaCreateWithoutUsersInput, sys_mediaUncheckedCreateWithoutUsersInput>
    where?: sys_mediaWhereInput
  }

  export type sys_mediaUpdateToOneWithWhereWithoutUsersInput = {
    where?: sys_mediaWhereInput
    data: XOR<sys_mediaUpdateWithoutUsersInput, sys_mediaUncheckedUpdateWithoutUsersInput>
  }

  export type sys_mediaUpdateWithoutUsersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isWechat?: BoolFieldUpdateOperationsInput | boolean
    wechat_id?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sys_mediaUncheckedUpdateWithoutUsersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isWechat?: BoolFieldUpdateOperationsInput | boolean
    wechat_id?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type blog_postsCreateWithoutCategoriesInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    user: sys_userCreateNestedOneWithoutBlog_postsInput
    tags?: blog_posts_on_tagsCreateNestedManyWithoutPostsInput
    comments?: blog_commentsCreateNestedManyWithoutPostInput
  }

  export type blog_postsUncheckedCreateWithoutCategoriesInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    userId: string
    tags?: blog_posts_on_tagsUncheckedCreateNestedManyWithoutPostsInput
    comments?: blog_commentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type blog_postsCreateOrConnectWithoutCategoriesInput = {
    where: blog_postsWhereUniqueInput
    create: XOR<blog_postsCreateWithoutCategoriesInput, blog_postsUncheckedCreateWithoutCategoriesInput>
  }

  export type blog_postsCreateManyCategoriesInputEnvelope = {
    data: blog_postsCreateManyCategoriesInput | blog_postsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type blog_postsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: blog_postsWhereUniqueInput
    update: XOR<blog_postsUpdateWithoutCategoriesInput, blog_postsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<blog_postsCreateWithoutCategoriesInput, blog_postsUncheckedCreateWithoutCategoriesInput>
  }

  export type blog_postsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: blog_postsWhereUniqueInput
    data: XOR<blog_postsUpdateWithoutCategoriesInput, blog_postsUncheckedUpdateWithoutCategoriesInput>
  }

  export type blog_postsUpdateManyWithWhereWithoutCategoriesInput = {
    where: blog_postsScalarWhereInput
    data: XOR<blog_postsUpdateManyMutationInput, blog_postsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type blog_categoriesCreateWithoutPostsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type blog_categoriesUncheckedCreateWithoutPostsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type blog_categoriesCreateOrConnectWithoutPostsInput = {
    where: blog_categoriesWhereUniqueInput
    create: XOR<blog_categoriesCreateWithoutPostsInput, blog_categoriesUncheckedCreateWithoutPostsInput>
  }

  export type sys_userCreateWithoutBlog_postsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountCreateNestedManyWithoutUserInput
    role?: sys_roleCreateNestedOneWithoutUsersInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutBlog_postsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
    blog_comments?: blog_commentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutBlog_postsInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutBlog_postsInput, sys_userUncheckedCreateWithoutBlog_postsInput>
  }

  export type blog_posts_on_tagsCreateWithoutPostsInput = {
    tag: blog_tagCreateNestedOneWithoutBlogsInput
  }

  export type blog_posts_on_tagsUncheckedCreateWithoutPostsInput = {
    tagId: string
  }

  export type blog_posts_on_tagsCreateOrConnectWithoutPostsInput = {
    where: blog_posts_on_tagsWhereUniqueInput
    create: XOR<blog_posts_on_tagsCreateWithoutPostsInput, blog_posts_on_tagsUncheckedCreateWithoutPostsInput>
  }

  export type blog_posts_on_tagsCreateManyPostsInputEnvelope = {
    data: blog_posts_on_tagsCreateManyPostsInput | blog_posts_on_tagsCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type blog_commentsCreateWithoutPostInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    user: sys_userCreateNestedOneWithoutBlog_commentsInput
  }

  export type blog_commentsUncheckedCreateWithoutPostInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    userId: string
  }

  export type blog_commentsCreateOrConnectWithoutPostInput = {
    where: blog_commentsWhereUniqueInput
    create: XOR<blog_commentsCreateWithoutPostInput, blog_commentsUncheckedCreateWithoutPostInput>
  }

  export type blog_commentsCreateManyPostInputEnvelope = {
    data: blog_commentsCreateManyPostInput | blog_commentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type blog_categoriesUpsertWithoutPostsInput = {
    update: XOR<blog_categoriesUpdateWithoutPostsInput, blog_categoriesUncheckedUpdateWithoutPostsInput>
    create: XOR<blog_categoriesCreateWithoutPostsInput, blog_categoriesUncheckedCreateWithoutPostsInput>
    where?: blog_categoriesWhereInput
  }

  export type blog_categoriesUpdateToOneWithWhereWithoutPostsInput = {
    where?: blog_categoriesWhereInput
    data: XOR<blog_categoriesUpdateWithoutPostsInput, blog_categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type blog_categoriesUpdateWithoutPostsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type blog_categoriesUncheckedUpdateWithoutPostsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type sys_userUpsertWithoutBlog_postsInput = {
    update: XOR<sys_userUpdateWithoutBlog_postsInput, sys_userUncheckedUpdateWithoutBlog_postsInput>
    create: XOR<sys_userCreateWithoutBlog_postsInput, sys_userUncheckedCreateWithoutBlog_postsInput>
    where?: sys_userWhereInput
  }

  export type sys_userUpdateToOneWithWhereWithoutBlog_postsInput = {
    where?: sys_userWhereInput
    data: XOR<sys_userUpdateWithoutBlog_postsInput, sys_userUncheckedUpdateWithoutBlog_postsInput>
  }

  export type sys_userUpdateWithoutBlog_postsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUpdateManyWithoutUserNestedInput
    role?: sys_roleUpdateOneWithoutUsersNestedInput
    ban_menus?: sys_user_ban_menuUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutBlog_postsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type blog_posts_on_tagsUpsertWithWhereUniqueWithoutPostsInput = {
    where: blog_posts_on_tagsWhereUniqueInput
    update: XOR<blog_posts_on_tagsUpdateWithoutPostsInput, blog_posts_on_tagsUncheckedUpdateWithoutPostsInput>
    create: XOR<blog_posts_on_tagsCreateWithoutPostsInput, blog_posts_on_tagsUncheckedCreateWithoutPostsInput>
  }

  export type blog_posts_on_tagsUpdateWithWhereUniqueWithoutPostsInput = {
    where: blog_posts_on_tagsWhereUniqueInput
    data: XOR<blog_posts_on_tagsUpdateWithoutPostsInput, blog_posts_on_tagsUncheckedUpdateWithoutPostsInput>
  }

  export type blog_posts_on_tagsUpdateManyWithWhereWithoutPostsInput = {
    where: blog_posts_on_tagsScalarWhereInput
    data: XOR<blog_posts_on_tagsUpdateManyMutationInput, blog_posts_on_tagsUncheckedUpdateManyWithoutPostsInput>
  }

  export type blog_posts_on_tagsScalarWhereInput = {
    AND?: blog_posts_on_tagsScalarWhereInput | blog_posts_on_tagsScalarWhereInput[]
    OR?: blog_posts_on_tagsScalarWhereInput[]
    NOT?: blog_posts_on_tagsScalarWhereInput | blog_posts_on_tagsScalarWhereInput[]
    postsId?: StringFilter<"blog_posts_on_tags"> | string
    tagId?: StringFilter<"blog_posts_on_tags"> | string
  }

  export type blog_commentsUpsertWithWhereUniqueWithoutPostInput = {
    where: blog_commentsWhereUniqueInput
    update: XOR<blog_commentsUpdateWithoutPostInput, blog_commentsUncheckedUpdateWithoutPostInput>
    create: XOR<blog_commentsCreateWithoutPostInput, blog_commentsUncheckedCreateWithoutPostInput>
  }

  export type blog_commentsUpdateWithWhereUniqueWithoutPostInput = {
    where: blog_commentsWhereUniqueInput
    data: XOR<blog_commentsUpdateWithoutPostInput, blog_commentsUncheckedUpdateWithoutPostInput>
  }

  export type blog_commentsUpdateManyWithWhereWithoutPostInput = {
    where: blog_commentsScalarWhereInput
    data: XOR<blog_commentsUpdateManyMutationInput, blog_commentsUncheckedUpdateManyWithoutPostInput>
  }

  export type blog_postsCreateWithoutTagsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    categories?: blog_categoriesCreateNestedOneWithoutPostsInput
    user: sys_userCreateNestedOneWithoutBlog_postsInput
    comments?: blog_commentsCreateNestedManyWithoutPostInput
  }

  export type blog_postsUncheckedCreateWithoutTagsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    userId: string
    categoriesId?: string | null
    comments?: blog_commentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type blog_postsCreateOrConnectWithoutTagsInput = {
    where: blog_postsWhereUniqueInput
    create: XOR<blog_postsCreateWithoutTagsInput, blog_postsUncheckedCreateWithoutTagsInput>
  }

  export type blog_tagCreateWithoutBlogsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type blog_tagUncheckedCreateWithoutBlogsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type blog_tagCreateOrConnectWithoutBlogsInput = {
    where: blog_tagWhereUniqueInput
    create: XOR<blog_tagCreateWithoutBlogsInput, blog_tagUncheckedCreateWithoutBlogsInput>
  }

  export type blog_postsUpsertWithoutTagsInput = {
    update: XOR<blog_postsUpdateWithoutTagsInput, blog_postsUncheckedUpdateWithoutTagsInput>
    create: XOR<blog_postsCreateWithoutTagsInput, blog_postsUncheckedCreateWithoutTagsInput>
    where?: blog_postsWhereInput
  }

  export type blog_postsUpdateToOneWithWhereWithoutTagsInput = {
    where?: blog_postsWhereInput
    data: XOR<blog_postsUpdateWithoutTagsInput, blog_postsUncheckedUpdateWithoutTagsInput>
  }

  export type blog_postsUpdateWithoutTagsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categories?: blog_categoriesUpdateOneWithoutPostsNestedInput
    user?: sys_userUpdateOneRequiredWithoutBlog_postsNestedInput
    comments?: blog_commentsUpdateManyWithoutPostNestedInput
  }

  export type blog_postsUncheckedUpdateWithoutTagsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    categoriesId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: blog_commentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type blog_tagUpsertWithoutBlogsInput = {
    update: XOR<blog_tagUpdateWithoutBlogsInput, blog_tagUncheckedUpdateWithoutBlogsInput>
    create: XOR<blog_tagCreateWithoutBlogsInput, blog_tagUncheckedCreateWithoutBlogsInput>
    where?: blog_tagWhereInput
  }

  export type blog_tagUpdateToOneWithWhereWithoutBlogsInput = {
    where?: blog_tagWhereInput
    data: XOR<blog_tagUpdateWithoutBlogsInput, blog_tagUncheckedUpdateWithoutBlogsInput>
  }

  export type blog_tagUpdateWithoutBlogsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type blog_tagUncheckedUpdateWithoutBlogsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type blog_posts_on_tagsCreateWithoutTagInput = {
    posts: blog_postsCreateNestedOneWithoutTagsInput
  }

  export type blog_posts_on_tagsUncheckedCreateWithoutTagInput = {
    postsId: string
  }

  export type blog_posts_on_tagsCreateOrConnectWithoutTagInput = {
    where: blog_posts_on_tagsWhereUniqueInput
    create: XOR<blog_posts_on_tagsCreateWithoutTagInput, blog_posts_on_tagsUncheckedCreateWithoutTagInput>
  }

  export type blog_posts_on_tagsCreateManyTagInputEnvelope = {
    data: blog_posts_on_tagsCreateManyTagInput | blog_posts_on_tagsCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type blog_posts_on_tagsUpsertWithWhereUniqueWithoutTagInput = {
    where: blog_posts_on_tagsWhereUniqueInput
    update: XOR<blog_posts_on_tagsUpdateWithoutTagInput, blog_posts_on_tagsUncheckedUpdateWithoutTagInput>
    create: XOR<blog_posts_on_tagsCreateWithoutTagInput, blog_posts_on_tagsUncheckedCreateWithoutTagInput>
  }

  export type blog_posts_on_tagsUpdateWithWhereUniqueWithoutTagInput = {
    where: blog_posts_on_tagsWhereUniqueInput
    data: XOR<blog_posts_on_tagsUpdateWithoutTagInput, blog_posts_on_tagsUncheckedUpdateWithoutTagInput>
  }

  export type blog_posts_on_tagsUpdateManyWithWhereWithoutTagInput = {
    where: blog_posts_on_tagsScalarWhereInput
    data: XOR<blog_posts_on_tagsUpdateManyMutationInput, blog_posts_on_tagsUncheckedUpdateManyWithoutTagInput>
  }

  export type sys_userCreateWithoutBlog_commentsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountCreateNestedManyWithoutUserInput
    role?: sys_roleCreateNestedOneWithoutUsersInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutBlog_commentsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
    user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
    blog_posts?: blog_postsUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutBlog_commentsInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutBlog_commentsInput, sys_userUncheckedCreateWithoutBlog_commentsInput>
  }

  export type blog_postsCreateWithoutCommentsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    categories?: blog_categoriesCreateNestedOneWithoutPostsInput
    user: sys_userCreateNestedOneWithoutBlog_postsInput
    tags?: blog_posts_on_tagsCreateNestedManyWithoutPostsInput
  }

  export type blog_postsUncheckedCreateWithoutCommentsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    userId: string
    categoriesId?: string | null
    tags?: blog_posts_on_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type blog_postsCreateOrConnectWithoutCommentsInput = {
    where: blog_postsWhereUniqueInput
    create: XOR<blog_postsCreateWithoutCommentsInput, blog_postsUncheckedCreateWithoutCommentsInput>
  }

  export type sys_userUpsertWithoutBlog_commentsInput = {
    update: XOR<sys_userUpdateWithoutBlog_commentsInput, sys_userUncheckedUpdateWithoutBlog_commentsInput>
    create: XOR<sys_userCreateWithoutBlog_commentsInput, sys_userUncheckedCreateWithoutBlog_commentsInput>
    where?: sys_userWhereInput
  }

  export type sys_userUpdateToOneWithWhereWithoutBlog_commentsInput = {
    where?: sys_userWhereInput
    data: XOR<sys_userUpdateWithoutBlog_commentsInput, sys_userUncheckedUpdateWithoutBlog_commentsInput>
  }

  export type sys_userUpdateWithoutBlog_commentsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUpdateManyWithoutUserNestedInput
    role?: sys_roleUpdateOneWithoutUsersNestedInput
    ban_menus?: sys_user_ban_menuUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutBlog_commentsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type blog_postsUpsertWithoutCommentsInput = {
    update: XOR<blog_postsUpdateWithoutCommentsInput, blog_postsUncheckedUpdateWithoutCommentsInput>
    create: XOR<blog_postsCreateWithoutCommentsInput, blog_postsUncheckedCreateWithoutCommentsInput>
    where?: blog_postsWhereInput
  }

  export type blog_postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: blog_postsWhereInput
    data: XOR<blog_postsUpdateWithoutCommentsInput, blog_postsUncheckedUpdateWithoutCommentsInput>
  }

  export type blog_postsUpdateWithoutCommentsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categories?: blog_categoriesUpdateOneWithoutPostsNestedInput
    user?: sys_userUpdateOneRequiredWithoutBlog_postsNestedInput
    tags?: blog_posts_on_tagsUpdateManyWithoutPostsNestedInput
  }

  export type blog_postsUncheckedUpdateWithoutCommentsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    categoriesId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: blog_posts_on_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type sys_accountCreateManyUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.sys_account_provider
    value: string
  }

  export type sys_user_ban_menuCreateManyUserInput = {
    menuId: string
  }

  export type sys_user_mediaCreateManyUserInput = {
    mediaId: string
  }

  export type blog_postsCreateManyUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    categoriesId?: string | null
  }

  export type blog_commentsCreateManyUserInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    postId: string
  }

  export type sys_accountUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: Enumsys_account_providerFieldUpdateOperationsInput | $Enums.sys_account_provider
    value?: StringFieldUpdateOperationsInput | string
  }

  export type sys_accountUncheckedUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: Enumsys_account_providerFieldUpdateOperationsInput | $Enums.sys_account_provider
    value?: StringFieldUpdateOperationsInput | string
  }

  export type sys_accountUncheckedUpdateManyWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: Enumsys_account_providerFieldUpdateOperationsInput | $Enums.sys_account_provider
    value?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_ban_menuUpdateWithoutUserInput = {
    menu?: sys_menuUpdateOneRequiredWithoutUser_bansNestedInput
  }

  export type sys_user_ban_menuUncheckedUpdateWithoutUserInput = {
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_ban_menuUncheckedUpdateManyWithoutUserInput = {
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_mediaUpdateWithoutUserInput = {
    media?: sys_mediaUpdateOneRequiredWithoutUsersNestedInput
  }

  export type sys_user_mediaUncheckedUpdateWithoutUserInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_mediaUncheckedUpdateManyWithoutUserInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_postsUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categories?: blog_categoriesUpdateOneWithoutPostsNestedInput
    tags?: blog_posts_on_tagsUpdateManyWithoutPostsNestedInput
    comments?: blog_commentsUpdateManyWithoutPostNestedInput
  }

  export type blog_postsUncheckedUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categoriesId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: blog_posts_on_tagsUncheckedUpdateManyWithoutPostsNestedInput
    comments?: blog_commentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type blog_postsUncheckedUpdateManyWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categoriesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type blog_commentsUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    post?: blog_postsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type blog_commentsUncheckedUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_commentsUncheckedUpdateManyWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_menuCreateManyParentInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    path: string
    sort?: number
    powers: number
    comment?: string | null
  }

  export type sys_menu_on_roleCreateManyMenuInput = {
    roleId: string
    power?: number
  }

  export type sys_user_ban_menuCreateManyMenuInput = {
    userId: string
  }

  export type sys_menuUpdateWithoutParentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_menuUpdateManyWithoutParentNestedInput
    roles?: sys_menu_on_roleUpdateManyWithoutMenuNestedInput
    user_bans?: sys_user_ban_menuUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateWithoutParentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_menuUncheckedUpdateManyWithoutParentNestedInput
    roles?: sys_menu_on_roleUncheckedUpdateManyWithoutMenuNestedInput
    user_bans?: sys_user_ban_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateManyWithoutParentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    powers?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_menu_on_roleUpdateWithoutMenuInput = {
    power?: IntFieldUpdateOperationsInput | number
    role?: sys_roleUpdateOneRequiredWithoutMenusNestedInput
  }

  export type sys_menu_on_roleUncheckedUpdateWithoutMenuInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type sys_menu_on_roleUncheckedUpdateManyWithoutMenuInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type sys_user_ban_menuUpdateWithoutMenuInput = {
    user?: sys_userUpdateOneRequiredWithoutBan_menusNestedInput
  }

  export type sys_user_ban_menuUncheckedUpdateWithoutMenuInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_ban_menuUncheckedUpdateManyWithoutMenuInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_menu_on_roleCreateManyRoleInput = {
    menuId: string
    power?: number
  }

  export type sys_userCreateManyRoleInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
  }

  export type sys_menu_on_roleUpdateWithoutRoleInput = {
    power?: IntFieldUpdateOperationsInput | number
    menu?: sys_menuUpdateOneRequiredWithoutRolesNestedInput
  }

  export type sys_menu_on_roleUncheckedUpdateWithoutRoleInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type sys_menu_on_roleUncheckedUpdateManyWithoutRoleInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type sys_userUpdateWithoutRoleInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUpdateManyWithoutUserNestedInput
    ban_menus?: sys_user_ban_menuUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutRoleInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
    user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
    blog_posts?: blog_postsUncheckedUpdateManyWithoutUserNestedInput
    blog_comments?: blog_commentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateManyWithoutRoleInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_mediaCreateManyMediaInput = {
    userId: string
  }

  export type sys_user_mediaUpdateWithoutMediaInput = {
    user?: sys_userUpdateOneRequiredWithoutUser_mediaNestedInput
  }

  export type sys_user_mediaUncheckedUpdateWithoutMediaInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_mediaUncheckedUpdateManyWithoutMediaInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_postsCreateManyCategoriesInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    status?: boolean
    userId: string
  }

  export type blog_postsUpdateWithoutCategoriesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: sys_userUpdateOneRequiredWithoutBlog_postsNestedInput
    tags?: blog_posts_on_tagsUpdateManyWithoutPostsNestedInput
    comments?: blog_commentsUpdateManyWithoutPostNestedInput
  }

  export type blog_postsUncheckedUpdateWithoutCategoriesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    tags?: blog_posts_on_tagsUncheckedUpdateManyWithoutPostsNestedInput
    comments?: blog_commentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type blog_postsUncheckedUpdateManyWithoutCategoriesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_posts_on_tagsCreateManyPostsInput = {
    tagId: string
  }

  export type blog_commentsCreateManyPostInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    status?: boolean
    userId: string
  }

  export type blog_posts_on_tagsUpdateWithoutPostsInput = {
    tag?: blog_tagUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type blog_posts_on_tagsUncheckedUpdateWithoutPostsInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_posts_on_tagsUncheckedUpdateManyWithoutPostsInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_commentsUpdateWithoutPostInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: sys_userUpdateOneRequiredWithoutBlog_commentsNestedInput
  }

  export type blog_commentsUncheckedUpdateWithoutPostInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_commentsUncheckedUpdateManyWithoutPostInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_posts_on_tagsCreateManyTagInput = {
    postsId: string
  }

  export type blog_posts_on_tagsUpdateWithoutTagInput = {
    posts?: blog_postsUpdateOneRequiredWithoutTagsNestedInput
  }

  export type blog_posts_on_tagsUncheckedUpdateWithoutTagInput = {
    postsId?: StringFieldUpdateOperationsInput | string
  }

  export type blog_posts_on_tagsUncheckedUpdateManyWithoutTagInput = {
    postsId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}