
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
    sys_user_media: 'sys_user_media'
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
      modelProps: "sys_user" | "sys_account" | "sys_menu" | "sys_user_ban_menu" | "sys_menu_on_role" | "sys_role" | "sys_media" | "sys_user_media"
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
    sys_user_media: number
  }

  export type Sys_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Sys_userCountOutputTypeCountAccountsArgs
    ban_menus?: boolean | Sys_userCountOutputTypeCountBan_menusArgs
    sys_user_media?: boolean | Sys_userCountOutputTypeCountSys_user_mediaArgs
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
  export type Sys_userCountOutputTypeCountSys_user_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_user_mediaWhereInput
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
    sys_user_media?: boolean | sys_user$sys_user_mediaArgs<ExtArgs>
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
    sys_user_media?: boolean | sys_user$sys_user_mediaArgs<ExtArgs>
    _count?: boolean | Sys_userCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_user"
    objects: {
      accounts: Prisma.$sys_accountPayload<ExtArgs>[]
      role: Prisma.$sys_rolePayload<ExtArgs> | null
      ban_menus: Prisma.$sys_user_ban_menuPayload<ExtArgs>[]
      sys_user_media: Prisma.$sys_user_mediaPayload<ExtArgs>[]
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
    sys_user_media<T extends sys_user$sys_user_mediaArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$sys_user_mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_user_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * sys_user.sys_user_media
   */
  export type sys_user$sys_user_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    sys_user_media?: Sys_user_mediaListRelationFilter
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
    sys_user_media?: sys_user_mediaOrderByRelationAggregateInput
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
    sys_user_media?: Sys_user_mediaListRelationFilter
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

  export type sys_userCreateInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountCreateNestedManyWithoutUserInput
    role?: sys_roleCreateNestedOneWithoutUsersInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
    sys_user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
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
    sys_user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
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
    sys_user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
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
    sys_user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
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
    user: sys_userCreateNestedOneWithoutSys_user_mediaInput
    media: sys_mediaCreateNestedOneWithoutUsersInput
  }

  export type sys_user_mediaUncheckedCreateInput = {
    userId: string
    mediaId: string
  }

  export type sys_user_mediaUpdateInput = {
    user?: sys_userUpdateOneRequiredWithoutSys_user_mediaNestedInput
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

  export type sys_userCreateNestedOneWithoutSys_user_mediaInput = {
    create?: XOR<sys_userCreateWithoutSys_user_mediaInput, sys_userUncheckedCreateWithoutSys_user_mediaInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutSys_user_mediaInput
    connect?: sys_userWhereUniqueInput
  }

  export type sys_mediaCreateNestedOneWithoutUsersInput = {
    create?: XOR<sys_mediaCreateWithoutUsersInput, sys_mediaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_mediaCreateOrConnectWithoutUsersInput
    connect?: sys_mediaWhereUniqueInput
  }

  export type sys_userUpdateOneRequiredWithoutSys_user_mediaNestedInput = {
    create?: XOR<sys_userCreateWithoutSys_user_mediaInput, sys_userUncheckedCreateWithoutSys_user_mediaInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutSys_user_mediaInput
    upsert?: sys_userUpsertWithoutSys_user_mediaInput
    connect?: sys_userWhereUniqueInput
    update?: XOR<XOR<sys_userUpdateToOneWithWhereWithoutSys_user_mediaInput, sys_userUpdateWithoutSys_user_mediaInput>, sys_userUncheckedUpdateWithoutSys_user_mediaInput>
  }

  export type sys_mediaUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<sys_mediaCreateWithoutUsersInput, sys_mediaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_mediaCreateOrConnectWithoutUsersInput
    upsert?: sys_mediaUpsertWithoutUsersInput
    connect?: sys_mediaWhereUniqueInput
    update?: XOR<XOR<sys_mediaUpdateToOneWithWhereWithoutUsersInput, sys_mediaUpdateWithoutUsersInput>, sys_mediaUncheckedUpdateWithoutUsersInput>
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

  export type sys_userCreateWithoutAccountsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    role?: sys_roleCreateNestedOneWithoutUsersInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
    sys_user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutAccountsInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
    sys_user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
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
    sys_user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutAccountsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
    sys_user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
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
    sys_user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutBan_menusInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    sys_user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
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
    sys_user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutBan_menusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    sys_user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
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
    sys_user_media?: sys_user_mediaCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutRoleInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
    sys_user_media?: sys_user_mediaUncheckedCreateNestedManyWithoutUserInput
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
    user: sys_userCreateNestedOneWithoutSys_user_mediaInput
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

  export type sys_userCreateWithoutSys_user_mediaInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    account: string
    accounts?: sys_accountCreateNestedManyWithoutUserInput
    role?: sys_roleCreateNestedOneWithoutUsersInput
    ban_menus?: sys_user_ban_menuCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutSys_user_mediaInput = {
    uid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    roleId?: string | null
    account: string
    accounts?: sys_accountUncheckedCreateNestedManyWithoutUserInput
    ban_menus?: sys_user_ban_menuUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutSys_user_mediaInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutSys_user_mediaInput, sys_userUncheckedCreateWithoutSys_user_mediaInput>
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

  export type sys_userUpsertWithoutSys_user_mediaInput = {
    update: XOR<sys_userUpdateWithoutSys_user_mediaInput, sys_userUncheckedUpdateWithoutSys_user_mediaInput>
    create: XOR<sys_userCreateWithoutSys_user_mediaInput, sys_userUncheckedCreateWithoutSys_user_mediaInput>
    where?: sys_userWhereInput
  }

  export type sys_userUpdateToOneWithWhereWithoutSys_user_mediaInput = {
    where?: sys_userWhereInput
    data: XOR<sys_userUpdateWithoutSys_user_mediaInput, sys_userUncheckedUpdateWithoutSys_user_mediaInput>
  }

  export type sys_userUpdateWithoutSys_user_mediaInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUpdateManyWithoutUserNestedInput
    role?: sys_roleUpdateOneWithoutUsersNestedInput
    ban_menus?: sys_user_ban_menuUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutSys_user_mediaInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
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
    sys_user_media?: sys_user_mediaUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutRoleInput = {
    uid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    accounts?: sys_accountUncheckedUpdateManyWithoutUserNestedInput
    ban_menus?: sys_user_ban_menuUncheckedUpdateManyWithoutUserNestedInput
    sys_user_media?: sys_user_mediaUncheckedUpdateManyWithoutUserNestedInput
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
    user?: sys_userUpdateOneRequiredWithoutSys_user_mediaNestedInput
  }

  export type sys_user_mediaUncheckedUpdateWithoutMediaInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type sys_user_mediaUncheckedUpdateManyWithoutMediaInput = {
    userId?: StringFieldUpdateOperationsInput | string
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