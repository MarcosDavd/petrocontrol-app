
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Estacion
 * 
 */
export type Estacion = $Result.DefaultSelection<Prisma.$EstacionPayload>
/**
 * Model Maquina
 * 
 */
export type Maquina = $Result.DefaultSelection<Prisma.$MaquinaPayload>
/**
 * Model Combustible
 * 
 */
export type Combustible = $Result.DefaultSelection<Prisma.$CombustiblePayload>
/**
 * Model HistorialPrecio
 * 
 */
export type HistorialPrecio = $Result.DefaultSelection<Prisma.$HistorialPrecioPayload>
/**
 * Model Tanque
 * 
 */
export type Tanque = $Result.DefaultSelection<Prisma.$TanquePayload>
/**
 * Model MovimientoStock
 * 
 */
export type MovimientoStock = $Result.DefaultSelection<Prisma.$MovimientoStockPayload>
/**
 * Model Empleado
 * 
 */
export type Empleado = $Result.DefaultSelection<Prisma.$EmpleadoPayload>
/**
 * Model Jornada
 * 
 */
export type Jornada = $Result.DefaultSelection<Prisma.$JornadaPayload>
/**
 * Model LecturaJornada
 * 
 */
export type LecturaJornada = $Result.DefaultSelection<Prisma.$LecturaJornadaPayload>
/**
 * Model PagoJornada
 * 
 */
export type PagoJornada = $Result.DefaultSelection<Prisma.$PagoJornadaPayload>
/**
 * Model Gasto
 * 
 */
export type Gasto = $Result.DefaultSelection<Prisma.$GastoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DireccionContador: {
  SUBE: 'SUBE',
  BAJA: 'BAJA'
};

export type DireccionContador = (typeof DireccionContador)[keyof typeof DireccionContador]


export const TipoMovimiento: {
  RECARGA: 'RECARGA',
  VENTA: 'VENTA',
  AJUSTE: 'AJUSTE',
  MERMA: 'MERMA'
};

export type TipoMovimiento = (typeof TipoMovimiento)[keyof typeof TipoMovimiento]


export const EstadoJornada: {
  ABIERTA: 'ABIERTA',
  CERRADA: 'CERRADA'
};

export type EstadoJornada = (typeof EstadoJornada)[keyof typeof EstadoJornada]


export const MedioPago: {
  EFECTIVO: 'EFECTIVO',
  TARJETA: 'TARJETA',
  TRANSFERENCIA: 'TRANSFERENCIA',
  DESCUENTO: 'DESCUENTO'
};

export type MedioPago = (typeof MedioPago)[keyof typeof MedioPago]

}

export type DireccionContador = $Enums.DireccionContador

export const DireccionContador: typeof $Enums.DireccionContador

export type TipoMovimiento = $Enums.TipoMovimiento

export const TipoMovimiento: typeof $Enums.TipoMovimiento

export type EstadoJornada = $Enums.EstadoJornada

export const EstadoJornada: typeof $Enums.EstadoJornada

export type MedioPago = $Enums.MedioPago

export const MedioPago: typeof $Enums.MedioPago

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estacion`: Exposes CRUD operations for the **Estacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estacions
    * const estacions = await prisma.estacion.findMany()
    * ```
    */
  get estacion(): Prisma.EstacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maquina`: Exposes CRUD operations for the **Maquina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maquinas
    * const maquinas = await prisma.maquina.findMany()
    * ```
    */
  get maquina(): Prisma.MaquinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.combustible`: Exposes CRUD operations for the **Combustible** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Combustibles
    * const combustibles = await prisma.combustible.findMany()
    * ```
    */
  get combustible(): Prisma.CombustibleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historialPrecio`: Exposes CRUD operations for the **HistorialPrecio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistorialPrecios
    * const historialPrecios = await prisma.historialPrecio.findMany()
    * ```
    */
  get historialPrecio(): Prisma.HistorialPrecioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tanque`: Exposes CRUD operations for the **Tanque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tanques
    * const tanques = await prisma.tanque.findMany()
    * ```
    */
  get tanque(): Prisma.TanqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientoStock`: Exposes CRUD operations for the **MovimientoStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimientoStocks
    * const movimientoStocks = await prisma.movimientoStock.findMany()
    * ```
    */
  get movimientoStock(): Prisma.MovimientoStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empleado`: Exposes CRUD operations for the **Empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.EmpleadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jornada`: Exposes CRUD operations for the **Jornada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jornadas
    * const jornadas = await prisma.jornada.findMany()
    * ```
    */
  get jornada(): Prisma.JornadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecturaJornada`: Exposes CRUD operations for the **LecturaJornada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LecturaJornadas
    * const lecturaJornadas = await prisma.lecturaJornada.findMany()
    * ```
    */
  get lecturaJornada(): Prisma.LecturaJornadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagoJornada`: Exposes CRUD operations for the **PagoJornada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagoJornadas
    * const pagoJornadas = await prisma.pagoJornada.findMany()
    * ```
    */
  get pagoJornada(): Prisma.PagoJornadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gasto`: Exposes CRUD operations for the **Gasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastos
    * const gastos = await prisma.gasto.findMany()
    * ```
    */
  get gasto(): Prisma.GastoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Usuario: 'Usuario',
    Estacion: 'Estacion',
    Maquina: 'Maquina',
    Combustible: 'Combustible',
    HistorialPrecio: 'HistorialPrecio',
    Tanque: 'Tanque',
    MovimientoStock: 'MovimientoStock',
    Empleado: 'Empleado',
    Jornada: 'Jornada',
    LecturaJornada: 'LecturaJornada',
    PagoJornada: 'PagoJornada',
    Gasto: 'Gasto'
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
      modelProps: "usuario" | "estacion" | "maquina" | "combustible" | "historialPrecio" | "tanque" | "movimientoStock" | "empleado" | "jornada" | "lecturaJornada" | "pagoJornada" | "gasto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Estacion: {
        payload: Prisma.$EstacionPayload<ExtArgs>
        fields: Prisma.EstacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>
          }
          findFirst: {
            args: Prisma.EstacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>
          }
          findMany: {
            args: Prisma.EstacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>[]
          }
          create: {
            args: Prisma.EstacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>
          }
          createMany: {
            args: Prisma.EstacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>[]
          }
          delete: {
            args: Prisma.EstacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>
          }
          update: {
            args: Prisma.EstacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>
          }
          deleteMany: {
            args: Prisma.EstacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>[]
          }
          upsert: {
            args: Prisma.EstacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionPayload>
          }
          aggregate: {
            args: Prisma.EstacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstacion>
          }
          groupBy: {
            args: Prisma.EstacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstacionCountArgs<ExtArgs>
            result: $Utils.Optional<EstacionCountAggregateOutputType> | number
          }
        }
      }
      Maquina: {
        payload: Prisma.$MaquinaPayload<ExtArgs>
        fields: Prisma.MaquinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaquinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaquinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          findFirst: {
            args: Prisma.MaquinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaquinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          findMany: {
            args: Prisma.MaquinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>[]
          }
          create: {
            args: Prisma.MaquinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          createMany: {
            args: Prisma.MaquinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaquinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>[]
          }
          delete: {
            args: Prisma.MaquinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          update: {
            args: Prisma.MaquinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          deleteMany: {
            args: Prisma.MaquinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaquinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaquinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>[]
          }
          upsert: {
            args: Prisma.MaquinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          aggregate: {
            args: Prisma.MaquinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaquina>
          }
          groupBy: {
            args: Prisma.MaquinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaquinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaquinaCountArgs<ExtArgs>
            result: $Utils.Optional<MaquinaCountAggregateOutputType> | number
          }
        }
      }
      Combustible: {
        payload: Prisma.$CombustiblePayload<ExtArgs>
        fields: Prisma.CombustibleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CombustibleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CombustibleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>
          }
          findFirst: {
            args: Prisma.CombustibleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CombustibleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>
          }
          findMany: {
            args: Prisma.CombustibleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>[]
          }
          create: {
            args: Prisma.CombustibleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>
          }
          createMany: {
            args: Prisma.CombustibleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CombustibleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>[]
          }
          delete: {
            args: Prisma.CombustibleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>
          }
          update: {
            args: Prisma.CombustibleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>
          }
          deleteMany: {
            args: Prisma.CombustibleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CombustibleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CombustibleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>[]
          }
          upsert: {
            args: Prisma.CombustibleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombustiblePayload>
          }
          aggregate: {
            args: Prisma.CombustibleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCombustible>
          }
          groupBy: {
            args: Prisma.CombustibleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CombustibleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CombustibleCountArgs<ExtArgs>
            result: $Utils.Optional<CombustibleCountAggregateOutputType> | number
          }
        }
      }
      HistorialPrecio: {
        payload: Prisma.$HistorialPrecioPayload<ExtArgs>
        fields: Prisma.HistorialPrecioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistorialPrecioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistorialPrecioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>
          }
          findFirst: {
            args: Prisma.HistorialPrecioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistorialPrecioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>
          }
          findMany: {
            args: Prisma.HistorialPrecioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>[]
          }
          create: {
            args: Prisma.HistorialPrecioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>
          }
          createMany: {
            args: Prisma.HistorialPrecioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistorialPrecioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>[]
          }
          delete: {
            args: Prisma.HistorialPrecioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>
          }
          update: {
            args: Prisma.HistorialPrecioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>
          }
          deleteMany: {
            args: Prisma.HistorialPrecioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistorialPrecioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistorialPrecioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>[]
          }
          upsert: {
            args: Prisma.HistorialPrecioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPrecioPayload>
          }
          aggregate: {
            args: Prisma.HistorialPrecioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorialPrecio>
          }
          groupBy: {
            args: Prisma.HistorialPrecioGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistorialPrecioGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistorialPrecioCountArgs<ExtArgs>
            result: $Utils.Optional<HistorialPrecioCountAggregateOutputType> | number
          }
        }
      }
      Tanque: {
        payload: Prisma.$TanquePayload<ExtArgs>
        fields: Prisma.TanqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TanqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TanqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          findFirst: {
            args: Prisma.TanqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TanqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          findMany: {
            args: Prisma.TanqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>[]
          }
          create: {
            args: Prisma.TanqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          createMany: {
            args: Prisma.TanqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TanqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>[]
          }
          delete: {
            args: Prisma.TanqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          update: {
            args: Prisma.TanqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          deleteMany: {
            args: Prisma.TanqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TanqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TanqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>[]
          }
          upsert: {
            args: Prisma.TanqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          aggregate: {
            args: Prisma.TanqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTanque>
          }
          groupBy: {
            args: Prisma.TanqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<TanqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.TanqueCountArgs<ExtArgs>
            result: $Utils.Optional<TanqueCountAggregateOutputType> | number
          }
        }
      }
      MovimientoStock: {
        payload: Prisma.$MovimientoStockPayload<ExtArgs>
        fields: Prisma.MovimientoStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimientoStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimientoStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          findFirst: {
            args: Prisma.MovimientoStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimientoStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          findMany: {
            args: Prisma.MovimientoStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>[]
          }
          create: {
            args: Prisma.MovimientoStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          createMany: {
            args: Prisma.MovimientoStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimientoStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>[]
          }
          delete: {
            args: Prisma.MovimientoStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          update: {
            args: Prisma.MovimientoStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          deleteMany: {
            args: Prisma.MovimientoStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimientoStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimientoStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>[]
          }
          upsert: {
            args: Prisma.MovimientoStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          aggregate: {
            args: Prisma.MovimientoStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientoStock>
          }
          groupBy: {
            args: Prisma.MovimientoStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimientoStockCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoStockCountAggregateOutputType> | number
          }
        }
      }
      Empleado: {
        payload: Prisma.$EmpleadoPayload<ExtArgs>
        fields: Prisma.EmpleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findFirst: {
            args: Prisma.EmpleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findMany: {
            args: Prisma.EmpleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          create: {
            args: Prisma.EmpleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          createMany: {
            args: Prisma.EmpleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpleadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          delete: {
            args: Prisma.EmpleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          update: {
            args: Prisma.EmpleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          deleteMany: {
            args: Prisma.EmpleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpleadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          upsert: {
            args: Prisma.EmpleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.EmpleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      Jornada: {
        payload: Prisma.$JornadaPayload<ExtArgs>
        fields: Prisma.JornadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JornadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JornadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          findFirst: {
            args: Prisma.JornadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JornadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          findMany: {
            args: Prisma.JornadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          create: {
            args: Prisma.JornadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          createMany: {
            args: Prisma.JornadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JornadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          delete: {
            args: Prisma.JornadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          update: {
            args: Prisma.JornadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          deleteMany: {
            args: Prisma.JornadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JornadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JornadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          upsert: {
            args: Prisma.JornadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          aggregate: {
            args: Prisma.JornadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJornada>
          }
          groupBy: {
            args: Prisma.JornadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JornadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JornadaCountArgs<ExtArgs>
            result: $Utils.Optional<JornadaCountAggregateOutputType> | number
          }
        }
      }
      LecturaJornada: {
        payload: Prisma.$LecturaJornadaPayload<ExtArgs>
        fields: Prisma.LecturaJornadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturaJornadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturaJornadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>
          }
          findFirst: {
            args: Prisma.LecturaJornadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturaJornadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>
          }
          findMany: {
            args: Prisma.LecturaJornadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>[]
          }
          create: {
            args: Prisma.LecturaJornadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>
          }
          createMany: {
            args: Prisma.LecturaJornadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LecturaJornadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>[]
          }
          delete: {
            args: Prisma.LecturaJornadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>
          }
          update: {
            args: Prisma.LecturaJornadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>
          }
          deleteMany: {
            args: Prisma.LecturaJornadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturaJornadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LecturaJornadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>[]
          }
          upsert: {
            args: Prisma.LecturaJornadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturaJornadaPayload>
          }
          aggregate: {
            args: Prisma.LecturaJornadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturaJornada>
          }
          groupBy: {
            args: Prisma.LecturaJornadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturaJornadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturaJornadaCountArgs<ExtArgs>
            result: $Utils.Optional<LecturaJornadaCountAggregateOutputType> | number
          }
        }
      }
      PagoJornada: {
        payload: Prisma.$PagoJornadaPayload<ExtArgs>
        fields: Prisma.PagoJornadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoJornadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoJornadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>
          }
          findFirst: {
            args: Prisma.PagoJornadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoJornadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>
          }
          findMany: {
            args: Prisma.PagoJornadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>[]
          }
          create: {
            args: Prisma.PagoJornadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>
          }
          createMany: {
            args: Prisma.PagoJornadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoJornadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>[]
          }
          delete: {
            args: Prisma.PagoJornadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>
          }
          update: {
            args: Prisma.PagoJornadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>
          }
          deleteMany: {
            args: Prisma.PagoJornadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoJornadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagoJornadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>[]
          }
          upsert: {
            args: Prisma.PagoJornadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoJornadaPayload>
          }
          aggregate: {
            args: Prisma.PagoJornadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagoJornada>
          }
          groupBy: {
            args: Prisma.PagoJornadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoJornadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoJornadaCountArgs<ExtArgs>
            result: $Utils.Optional<PagoJornadaCountAggregateOutputType> | number
          }
        }
      }
      Gasto: {
        payload: Prisma.$GastoPayload<ExtArgs>
        fields: Prisma.GastoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GastoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GastoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findFirst: {
            args: Prisma.GastoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GastoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findMany: {
            args: Prisma.GastoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          create: {
            args: Prisma.GastoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          createMany: {
            args: Prisma.GastoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GastoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          delete: {
            args: Prisma.GastoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          update: {
            args: Prisma.GastoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          deleteMany: {
            args: Prisma.GastoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GastoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GastoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          upsert: {
            args: Prisma.GastoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          aggregate: {
            args: Prisma.GastoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGasto>
          }
          groupBy: {
            args: Prisma.GastoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GastoCountArgs<ExtArgs>
            result: $Utils.Optional<GastoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: UsuarioOmit
    estacion?: EstacionOmit
    maquina?: MaquinaOmit
    combustible?: CombustibleOmit
    historialPrecio?: HistorialPrecioOmit
    tanque?: TanqueOmit
    movimientoStock?: MovimientoStockOmit
    empleado?: EmpleadoOmit
    jornada?: JornadaOmit
    lecturaJornada?: LecturaJornadaOmit
    pagoJornada?: PagoJornadaOmit
    gasto?: GastoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type EstacionCountOutputType
   */

  export type EstacionCountOutputType = {
    maquinas: number
    tanques: number
    empleados: number
    jornadas: number
    gastos: number
  }

  export type EstacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maquinas?: boolean | EstacionCountOutputTypeCountMaquinasArgs
    tanques?: boolean | EstacionCountOutputTypeCountTanquesArgs
    empleados?: boolean | EstacionCountOutputTypeCountEmpleadosArgs
    jornadas?: boolean | EstacionCountOutputTypeCountJornadasArgs
    gastos?: boolean | EstacionCountOutputTypeCountGastosArgs
  }

  // Custom InputTypes
  /**
   * EstacionCountOutputType without action
   */
  export type EstacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstacionCountOutputType
     */
    select?: EstacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstacionCountOutputType without action
   */
  export type EstacionCountOutputTypeCountMaquinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaquinaWhereInput
  }

  /**
   * EstacionCountOutputType without action
   */
  export type EstacionCountOutputTypeCountTanquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TanqueWhereInput
  }

  /**
   * EstacionCountOutputType without action
   */
  export type EstacionCountOutputTypeCountEmpleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
  }

  /**
   * EstacionCountOutputType without action
   */
  export type EstacionCountOutputTypeCountJornadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JornadaWhereInput
  }

  /**
   * EstacionCountOutputType without action
   */
  export type EstacionCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }


  /**
   * Count Type MaquinaCountOutputType
   */

  export type MaquinaCountOutputType = {
    jornadas: number
  }

  export type MaquinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jornadas?: boolean | MaquinaCountOutputTypeCountJornadasArgs
  }

  // Custom InputTypes
  /**
   * MaquinaCountOutputType without action
   */
  export type MaquinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaquinaCountOutputType
     */
    select?: MaquinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaquinaCountOutputType without action
   */
  export type MaquinaCountOutputTypeCountJornadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JornadaWhereInput
  }


  /**
   * Count Type CombustibleCountOutputType
   */

  export type CombustibleCountOutputType = {
    precios: number
    tanques: number
    lecturas: number
  }

  export type CombustibleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    precios?: boolean | CombustibleCountOutputTypeCountPreciosArgs
    tanques?: boolean | CombustibleCountOutputTypeCountTanquesArgs
    lecturas?: boolean | CombustibleCountOutputTypeCountLecturasArgs
  }

  // Custom InputTypes
  /**
   * CombustibleCountOutputType without action
   */
  export type CombustibleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CombustibleCountOutputType
     */
    select?: CombustibleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CombustibleCountOutputType without action
   */
  export type CombustibleCountOutputTypeCountPreciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialPrecioWhereInput
  }

  /**
   * CombustibleCountOutputType without action
   */
  export type CombustibleCountOutputTypeCountTanquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TanqueWhereInput
  }

  /**
   * CombustibleCountOutputType without action
   */
  export type CombustibleCountOutputTypeCountLecturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturaJornadaWhereInput
  }


  /**
   * Count Type TanqueCountOutputType
   */

  export type TanqueCountOutputType = {
    movimientos: number
  }

  export type TanqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimientos?: boolean | TanqueCountOutputTypeCountMovimientosArgs
  }

  // Custom InputTypes
  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TanqueCountOutputType
     */
    select?: TanqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeCountMovimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoStockWhereInput
  }


  /**
   * Count Type EmpleadoCountOutputType
   */

  export type EmpleadoCountOutputType = {
    jornadas: number
  }

  export type EmpleadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jornadas?: boolean | EmpleadoCountOutputTypeCountJornadasArgs
  }

  // Custom InputTypes
  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpleadoCountOutputType
     */
    select?: EmpleadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountJornadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JornadaWhereInput
  }


  /**
   * Count Type JornadaCountOutputType
   */

  export type JornadaCountOutputType = {
    lecturas: number
    pagos: number
    movimientos: number
  }

  export type JornadaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturas?: boolean | JornadaCountOutputTypeCountLecturasArgs
    pagos?: boolean | JornadaCountOutputTypeCountPagosArgs
    movimientos?: boolean | JornadaCountOutputTypeCountMovimientosArgs
  }

  // Custom InputTypes
  /**
   * JornadaCountOutputType without action
   */
  export type JornadaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JornadaCountOutputType
     */
    select?: JornadaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JornadaCountOutputType without action
   */
  export type JornadaCountOutputTypeCountLecturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturaJornadaWhereInput
  }

  /**
   * JornadaCountOutputType without action
   */
  export type JornadaCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoJornadaWhereInput
  }

  /**
   * JornadaCountOutputType without action
   */
  export type JornadaCountOutputTypeCountMovimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoStockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Estacion
   */

  export type AggregateEstacion = {
    _count: EstacionCountAggregateOutputType | null
    _avg: EstacionAvgAggregateOutputType | null
    _sum: EstacionSumAggregateOutputType | null
    _min: EstacionMinAggregateOutputType | null
    _max: EstacionMaxAggregateOutputType | null
  }

  export type EstacionAvgAggregateOutputType = {
    id: number | null
  }

  export type EstacionSumAggregateOutputType = {
    id: number | null
  }

  export type EstacionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    activa: boolean | null
    createdAt: Date | null
  }

  export type EstacionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    activa: boolean | null
    createdAt: Date | null
  }

  export type EstacionCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    activa: number
    createdAt: number
    _all: number
  }


  export type EstacionAvgAggregateInputType = {
    id?: true
  }

  export type EstacionSumAggregateInputType = {
    id?: true
  }

  export type EstacionMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    activa?: true
    createdAt?: true
  }

  export type EstacionMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    activa?: true
    createdAt?: true
  }

  export type EstacionCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    activa?: true
    createdAt?: true
    _all?: true
  }

  export type EstacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estacion to aggregate.
     */
    where?: EstacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estacions to fetch.
     */
    orderBy?: EstacionOrderByWithRelationInput | EstacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estacions
    **/
    _count?: true | EstacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstacionMaxAggregateInputType
  }

  export type GetEstacionAggregateType<T extends EstacionAggregateArgs> = {
        [P in keyof T & keyof AggregateEstacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstacion[P]>
      : GetScalarType<T[P], AggregateEstacion[P]>
  }




  export type EstacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstacionWhereInput
    orderBy?: EstacionOrderByWithAggregationInput | EstacionOrderByWithAggregationInput[]
    by: EstacionScalarFieldEnum[] | EstacionScalarFieldEnum
    having?: EstacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstacionCountAggregateInputType | true
    _avg?: EstacionAvgAggregateInputType
    _sum?: EstacionSumAggregateInputType
    _min?: EstacionMinAggregateInputType
    _max?: EstacionMaxAggregateInputType
  }

  export type EstacionGroupByOutputType = {
    id: number
    nombre: string
    direccion: string | null
    activa: boolean
    createdAt: Date
    _count: EstacionCountAggregateOutputType | null
    _avg: EstacionAvgAggregateOutputType | null
    _sum: EstacionSumAggregateOutputType | null
    _min: EstacionMinAggregateOutputType | null
    _max: EstacionMaxAggregateOutputType | null
  }

  type GetEstacionGroupByPayload<T extends EstacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstacionGroupByOutputType[P]>
            : GetScalarType<T[P], EstacionGroupByOutputType[P]>
        }
      >
    >


  export type EstacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    activa?: boolean
    createdAt?: boolean
    maquinas?: boolean | Estacion$maquinasArgs<ExtArgs>
    tanques?: boolean | Estacion$tanquesArgs<ExtArgs>
    empleados?: boolean | Estacion$empleadosArgs<ExtArgs>
    jornadas?: boolean | Estacion$jornadasArgs<ExtArgs>
    gastos?: boolean | Estacion$gastosArgs<ExtArgs>
    _count?: boolean | EstacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estacion"]>

  export type EstacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    activa?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["estacion"]>

  export type EstacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    activa?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["estacion"]>

  export type EstacionSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    activa?: boolean
    createdAt?: boolean
  }

  export type EstacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "activa" | "createdAt", ExtArgs["result"]["estacion"]>
  export type EstacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maquinas?: boolean | Estacion$maquinasArgs<ExtArgs>
    tanques?: boolean | Estacion$tanquesArgs<ExtArgs>
    empleados?: boolean | Estacion$empleadosArgs<ExtArgs>
    jornadas?: boolean | Estacion$jornadasArgs<ExtArgs>
    gastos?: boolean | Estacion$gastosArgs<ExtArgs>
    _count?: boolean | EstacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estacion"
    objects: {
      maquinas: Prisma.$MaquinaPayload<ExtArgs>[]
      tanques: Prisma.$TanquePayload<ExtArgs>[]
      empleados: Prisma.$EmpleadoPayload<ExtArgs>[]
      jornadas: Prisma.$JornadaPayload<ExtArgs>[]
      gastos: Prisma.$GastoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string | null
      activa: boolean
      createdAt: Date
    }, ExtArgs["result"]["estacion"]>
    composites: {}
  }

  type EstacionGetPayload<S extends boolean | null | undefined | EstacionDefaultArgs> = $Result.GetResult<Prisma.$EstacionPayload, S>

  type EstacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstacionCountAggregateInputType | true
    }

  export interface EstacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estacion'], meta: { name: 'Estacion' } }
    /**
     * Find zero or one Estacion that matches the filter.
     * @param {EstacionFindUniqueArgs} args - Arguments to find a Estacion
     * @example
     * // Get one Estacion
     * const estacion = await prisma.estacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstacionFindUniqueArgs>(args: SelectSubset<T, EstacionFindUniqueArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstacionFindUniqueOrThrowArgs} args - Arguments to find a Estacion
     * @example
     * // Get one Estacion
     * const estacion = await prisma.estacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstacionFindUniqueOrThrowArgs>(args: SelectSubset<T, EstacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionFindFirstArgs} args - Arguments to find a Estacion
     * @example
     * // Get one Estacion
     * const estacion = await prisma.estacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstacionFindFirstArgs>(args?: SelectSubset<T, EstacionFindFirstArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionFindFirstOrThrowArgs} args - Arguments to find a Estacion
     * @example
     * // Get one Estacion
     * const estacion = await prisma.estacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstacionFindFirstOrThrowArgs>(args?: SelectSubset<T, EstacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estacions
     * const estacions = await prisma.estacion.findMany()
     * 
     * // Get first 10 Estacions
     * const estacions = await prisma.estacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estacionWithIdOnly = await prisma.estacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstacionFindManyArgs>(args?: SelectSubset<T, EstacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estacion.
     * @param {EstacionCreateArgs} args - Arguments to create a Estacion.
     * @example
     * // Create one Estacion
     * const Estacion = await prisma.estacion.create({
     *   data: {
     *     // ... data to create a Estacion
     *   }
     * })
     * 
     */
    create<T extends EstacionCreateArgs>(args: SelectSubset<T, EstacionCreateArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estacions.
     * @param {EstacionCreateManyArgs} args - Arguments to create many Estacions.
     * @example
     * // Create many Estacions
     * const estacion = await prisma.estacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstacionCreateManyArgs>(args?: SelectSubset<T, EstacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estacions and returns the data saved in the database.
     * @param {EstacionCreateManyAndReturnArgs} args - Arguments to create many Estacions.
     * @example
     * // Create many Estacions
     * const estacion = await prisma.estacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estacions and only return the `id`
     * const estacionWithIdOnly = await prisma.estacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstacionCreateManyAndReturnArgs>(args?: SelectSubset<T, EstacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estacion.
     * @param {EstacionDeleteArgs} args - Arguments to delete one Estacion.
     * @example
     * // Delete one Estacion
     * const Estacion = await prisma.estacion.delete({
     *   where: {
     *     // ... filter to delete one Estacion
     *   }
     * })
     * 
     */
    delete<T extends EstacionDeleteArgs>(args: SelectSubset<T, EstacionDeleteArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estacion.
     * @param {EstacionUpdateArgs} args - Arguments to update one Estacion.
     * @example
     * // Update one Estacion
     * const estacion = await prisma.estacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstacionUpdateArgs>(args: SelectSubset<T, EstacionUpdateArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estacions.
     * @param {EstacionDeleteManyArgs} args - Arguments to filter Estacions to delete.
     * @example
     * // Delete a few Estacions
     * const { count } = await prisma.estacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstacionDeleteManyArgs>(args?: SelectSubset<T, EstacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estacions
     * const estacion = await prisma.estacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstacionUpdateManyArgs>(args: SelectSubset<T, EstacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estacions and returns the data updated in the database.
     * @param {EstacionUpdateManyAndReturnArgs} args - Arguments to update many Estacions.
     * @example
     * // Update many Estacions
     * const estacion = await prisma.estacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estacions and only return the `id`
     * const estacionWithIdOnly = await prisma.estacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstacionUpdateManyAndReturnArgs>(args: SelectSubset<T, EstacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estacion.
     * @param {EstacionUpsertArgs} args - Arguments to update or create a Estacion.
     * @example
     * // Update or create a Estacion
     * const estacion = await prisma.estacion.upsert({
     *   create: {
     *     // ... data to create a Estacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estacion we want to update
     *   }
     * })
     */
    upsert<T extends EstacionUpsertArgs>(args: SelectSubset<T, EstacionUpsertArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionCountArgs} args - Arguments to filter Estacions to count.
     * @example
     * // Count the number of Estacions
     * const count = await prisma.estacion.count({
     *   where: {
     *     // ... the filter for the Estacions we want to count
     *   }
     * })
    **/
    count<T extends EstacionCountArgs>(
      args?: Subset<T, EstacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstacionAggregateArgs>(args: Subset<T, EstacionAggregateArgs>): Prisma.PrismaPromise<GetEstacionAggregateType<T>>

    /**
     * Group by Estacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionGroupByArgs} args - Group by arguments.
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
      T extends EstacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstacionGroupByArgs['orderBy'] }
        : { orderBy?: EstacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estacion model
   */
  readonly fields: EstacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maquinas<T extends Estacion$maquinasArgs<ExtArgs> = {}>(args?: Subset<T, Estacion$maquinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tanques<T extends Estacion$tanquesArgs<ExtArgs> = {}>(args?: Subset<T, Estacion$tanquesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    empleados<T extends Estacion$empleadosArgs<ExtArgs> = {}>(args?: Subset<T, Estacion$empleadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jornadas<T extends Estacion$jornadasArgs<ExtArgs> = {}>(args?: Subset<T, Estacion$jornadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gastos<T extends Estacion$gastosArgs<ExtArgs> = {}>(args?: Subset<T, Estacion$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estacion model
   */
  interface EstacionFieldRefs {
    readonly id: FieldRef<"Estacion", 'Int'>
    readonly nombre: FieldRef<"Estacion", 'String'>
    readonly direccion: FieldRef<"Estacion", 'String'>
    readonly activa: FieldRef<"Estacion", 'Boolean'>
    readonly createdAt: FieldRef<"Estacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estacion findUnique
   */
  export type EstacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * Filter, which Estacion to fetch.
     */
    where: EstacionWhereUniqueInput
  }

  /**
   * Estacion findUniqueOrThrow
   */
  export type EstacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * Filter, which Estacion to fetch.
     */
    where: EstacionWhereUniqueInput
  }

  /**
   * Estacion findFirst
   */
  export type EstacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * Filter, which Estacion to fetch.
     */
    where?: EstacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estacions to fetch.
     */
    orderBy?: EstacionOrderByWithRelationInput | EstacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estacions.
     */
    cursor?: EstacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estacions.
     */
    distinct?: EstacionScalarFieldEnum | EstacionScalarFieldEnum[]
  }

  /**
   * Estacion findFirstOrThrow
   */
  export type EstacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * Filter, which Estacion to fetch.
     */
    where?: EstacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estacions to fetch.
     */
    orderBy?: EstacionOrderByWithRelationInput | EstacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estacions.
     */
    cursor?: EstacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estacions.
     */
    distinct?: EstacionScalarFieldEnum | EstacionScalarFieldEnum[]
  }

  /**
   * Estacion findMany
   */
  export type EstacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * Filter, which Estacions to fetch.
     */
    where?: EstacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estacions to fetch.
     */
    orderBy?: EstacionOrderByWithRelationInput | EstacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estacions.
     */
    cursor?: EstacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estacions.
     */
    skip?: number
    distinct?: EstacionScalarFieldEnum | EstacionScalarFieldEnum[]
  }

  /**
   * Estacion create
   */
  export type EstacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Estacion.
     */
    data: XOR<EstacionCreateInput, EstacionUncheckedCreateInput>
  }

  /**
   * Estacion createMany
   */
  export type EstacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estacions.
     */
    data: EstacionCreateManyInput | EstacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estacion createManyAndReturn
   */
  export type EstacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * The data used to create many Estacions.
     */
    data: EstacionCreateManyInput | EstacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estacion update
   */
  export type EstacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Estacion.
     */
    data: XOR<EstacionUpdateInput, EstacionUncheckedUpdateInput>
    /**
     * Choose, which Estacion to update.
     */
    where: EstacionWhereUniqueInput
  }

  /**
   * Estacion updateMany
   */
  export type EstacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estacions.
     */
    data: XOR<EstacionUpdateManyMutationInput, EstacionUncheckedUpdateManyInput>
    /**
     * Filter which Estacions to update
     */
    where?: EstacionWhereInput
    /**
     * Limit how many Estacions to update.
     */
    limit?: number
  }

  /**
   * Estacion updateManyAndReturn
   */
  export type EstacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * The data used to update Estacions.
     */
    data: XOR<EstacionUpdateManyMutationInput, EstacionUncheckedUpdateManyInput>
    /**
     * Filter which Estacions to update
     */
    where?: EstacionWhereInput
    /**
     * Limit how many Estacions to update.
     */
    limit?: number
  }

  /**
   * Estacion upsert
   */
  export type EstacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Estacion to update in case it exists.
     */
    where: EstacionWhereUniqueInput
    /**
     * In case the Estacion found by the `where` argument doesn't exist, create a new Estacion with this data.
     */
    create: XOR<EstacionCreateInput, EstacionUncheckedCreateInput>
    /**
     * In case the Estacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstacionUpdateInput, EstacionUncheckedUpdateInput>
  }

  /**
   * Estacion delete
   */
  export type EstacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
    /**
     * Filter which Estacion to delete.
     */
    where: EstacionWhereUniqueInput
  }

  /**
   * Estacion deleteMany
   */
  export type EstacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estacions to delete
     */
    where?: EstacionWhereInput
    /**
     * Limit how many Estacions to delete.
     */
    limit?: number
  }

  /**
   * Estacion.maquinas
   */
  export type Estacion$maquinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    where?: MaquinaWhereInput
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    cursor?: MaquinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaquinaScalarFieldEnum | MaquinaScalarFieldEnum[]
  }

  /**
   * Estacion.tanques
   */
  export type Estacion$tanquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    where?: TanqueWhereInput
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    cursor?: TanqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TanqueScalarFieldEnum | TanqueScalarFieldEnum[]
  }

  /**
   * Estacion.empleados
   */
  export type Estacion$empleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    cursor?: EmpleadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Estacion.jornadas
   */
  export type Estacion$jornadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    where?: JornadaWhereInput
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    cursor?: JornadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Estacion.gastos
   */
  export type Estacion$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Estacion without action
   */
  export type EstacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacion
     */
    select?: EstacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacion
     */
    omit?: EstacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionInclude<ExtArgs> | null
  }


  /**
   * Model Maquina
   */

  export type AggregateMaquina = {
    _count: MaquinaCountAggregateOutputType | null
    _avg: MaquinaAvgAggregateOutputType | null
    _sum: MaquinaSumAggregateOutputType | null
    _min: MaquinaMinAggregateOutputType | null
    _max: MaquinaMaxAggregateOutputType | null
  }

  export type MaquinaAvgAggregateOutputType = {
    id: number | null
    estacionId: number | null
    moduloContador: number | null
  }

  export type MaquinaSumAggregateOutputType = {
    id: number | null
    estacionId: number | null
    moduloContador: bigint | null
  }

  export type MaquinaMinAggregateOutputType = {
    id: number | null
    estacionId: number | null
    nombre: string | null
    activa: boolean | null
    moduloContador: bigint | null
    direccionTotalizador: $Enums.DireccionContador | null
    direccionProductos: $Enums.DireccionContador | null
  }

  export type MaquinaMaxAggregateOutputType = {
    id: number | null
    estacionId: number | null
    nombre: string | null
    activa: boolean | null
    moduloContador: bigint | null
    direccionTotalizador: $Enums.DireccionContador | null
    direccionProductos: $Enums.DireccionContador | null
  }

  export type MaquinaCountAggregateOutputType = {
    id: number
    estacionId: number
    nombre: number
    activa: number
    moduloContador: number
    direccionTotalizador: number
    direccionProductos: number
    _all: number
  }


  export type MaquinaAvgAggregateInputType = {
    id?: true
    estacionId?: true
    moduloContador?: true
  }

  export type MaquinaSumAggregateInputType = {
    id?: true
    estacionId?: true
    moduloContador?: true
  }

  export type MaquinaMinAggregateInputType = {
    id?: true
    estacionId?: true
    nombre?: true
    activa?: true
    moduloContador?: true
    direccionTotalizador?: true
    direccionProductos?: true
  }

  export type MaquinaMaxAggregateInputType = {
    id?: true
    estacionId?: true
    nombre?: true
    activa?: true
    moduloContador?: true
    direccionTotalizador?: true
    direccionProductos?: true
  }

  export type MaquinaCountAggregateInputType = {
    id?: true
    estacionId?: true
    nombre?: true
    activa?: true
    moduloContador?: true
    direccionTotalizador?: true
    direccionProductos?: true
    _all?: true
  }

  export type MaquinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maquina to aggregate.
     */
    where?: MaquinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maquinas to fetch.
     */
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaquinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maquinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maquinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maquinas
    **/
    _count?: true | MaquinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaquinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaquinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaquinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaquinaMaxAggregateInputType
  }

  export type GetMaquinaAggregateType<T extends MaquinaAggregateArgs> = {
        [P in keyof T & keyof AggregateMaquina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaquina[P]>
      : GetScalarType<T[P], AggregateMaquina[P]>
  }




  export type MaquinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaquinaWhereInput
    orderBy?: MaquinaOrderByWithAggregationInput | MaquinaOrderByWithAggregationInput[]
    by: MaquinaScalarFieldEnum[] | MaquinaScalarFieldEnum
    having?: MaquinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaquinaCountAggregateInputType | true
    _avg?: MaquinaAvgAggregateInputType
    _sum?: MaquinaSumAggregateInputType
    _min?: MaquinaMinAggregateInputType
    _max?: MaquinaMaxAggregateInputType
  }

  export type MaquinaGroupByOutputType = {
    id: number
    estacionId: number
    nombre: string
    activa: boolean
    moduloContador: bigint
    direccionTotalizador: $Enums.DireccionContador
    direccionProductos: $Enums.DireccionContador
    _count: MaquinaCountAggregateOutputType | null
    _avg: MaquinaAvgAggregateOutputType | null
    _sum: MaquinaSumAggregateOutputType | null
    _min: MaquinaMinAggregateOutputType | null
    _max: MaquinaMaxAggregateOutputType | null
  }

  type GetMaquinaGroupByPayload<T extends MaquinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaquinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaquinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaquinaGroupByOutputType[P]>
            : GetScalarType<T[P], MaquinaGroupByOutputType[P]>
        }
      >
    >


  export type MaquinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    nombre?: boolean
    activa?: boolean
    moduloContador?: boolean
    direccionTotalizador?: boolean
    direccionProductos?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    jornadas?: boolean | Maquina$jornadasArgs<ExtArgs>
    _count?: boolean | MaquinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maquina"]>

  export type MaquinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    nombre?: boolean
    activa?: boolean
    moduloContador?: boolean
    direccionTotalizador?: boolean
    direccionProductos?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maquina"]>

  export type MaquinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    nombre?: boolean
    activa?: boolean
    moduloContador?: boolean
    direccionTotalizador?: boolean
    direccionProductos?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maquina"]>

  export type MaquinaSelectScalar = {
    id?: boolean
    estacionId?: boolean
    nombre?: boolean
    activa?: boolean
    moduloContador?: boolean
    direccionTotalizador?: boolean
    direccionProductos?: boolean
  }

  export type MaquinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estacionId" | "nombre" | "activa" | "moduloContador" | "direccionTotalizador" | "direccionProductos", ExtArgs["result"]["maquina"]>
  export type MaquinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    jornadas?: boolean | Maquina$jornadasArgs<ExtArgs>
    _count?: boolean | MaquinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaquinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }
  export type MaquinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }

  export type $MaquinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maquina"
    objects: {
      estacion: Prisma.$EstacionPayload<ExtArgs>
      jornadas: Prisma.$JornadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estacionId: number
      nombre: string
      activa: boolean
      moduloContador: bigint
      direccionTotalizador: $Enums.DireccionContador
      direccionProductos: $Enums.DireccionContador
    }, ExtArgs["result"]["maquina"]>
    composites: {}
  }

  type MaquinaGetPayload<S extends boolean | null | undefined | MaquinaDefaultArgs> = $Result.GetResult<Prisma.$MaquinaPayload, S>

  type MaquinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaquinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaquinaCountAggregateInputType | true
    }

  export interface MaquinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maquina'], meta: { name: 'Maquina' } }
    /**
     * Find zero or one Maquina that matches the filter.
     * @param {MaquinaFindUniqueArgs} args - Arguments to find a Maquina
     * @example
     * // Get one Maquina
     * const maquina = await prisma.maquina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaquinaFindUniqueArgs>(args: SelectSubset<T, MaquinaFindUniqueArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maquina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaquinaFindUniqueOrThrowArgs} args - Arguments to find a Maquina
     * @example
     * // Get one Maquina
     * const maquina = await prisma.maquina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaquinaFindUniqueOrThrowArgs>(args: SelectSubset<T, MaquinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maquina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaFindFirstArgs} args - Arguments to find a Maquina
     * @example
     * // Get one Maquina
     * const maquina = await prisma.maquina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaquinaFindFirstArgs>(args?: SelectSubset<T, MaquinaFindFirstArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maquina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaFindFirstOrThrowArgs} args - Arguments to find a Maquina
     * @example
     * // Get one Maquina
     * const maquina = await prisma.maquina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaquinaFindFirstOrThrowArgs>(args?: SelectSubset<T, MaquinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maquinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maquinas
     * const maquinas = await prisma.maquina.findMany()
     * 
     * // Get first 10 Maquinas
     * const maquinas = await prisma.maquina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maquinaWithIdOnly = await prisma.maquina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaquinaFindManyArgs>(args?: SelectSubset<T, MaquinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maquina.
     * @param {MaquinaCreateArgs} args - Arguments to create a Maquina.
     * @example
     * // Create one Maquina
     * const Maquina = await prisma.maquina.create({
     *   data: {
     *     // ... data to create a Maquina
     *   }
     * })
     * 
     */
    create<T extends MaquinaCreateArgs>(args: SelectSubset<T, MaquinaCreateArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maquinas.
     * @param {MaquinaCreateManyArgs} args - Arguments to create many Maquinas.
     * @example
     * // Create many Maquinas
     * const maquina = await prisma.maquina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaquinaCreateManyArgs>(args?: SelectSubset<T, MaquinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maquinas and returns the data saved in the database.
     * @param {MaquinaCreateManyAndReturnArgs} args - Arguments to create many Maquinas.
     * @example
     * // Create many Maquinas
     * const maquina = await prisma.maquina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maquinas and only return the `id`
     * const maquinaWithIdOnly = await prisma.maquina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaquinaCreateManyAndReturnArgs>(args?: SelectSubset<T, MaquinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Maquina.
     * @param {MaquinaDeleteArgs} args - Arguments to delete one Maquina.
     * @example
     * // Delete one Maquina
     * const Maquina = await prisma.maquina.delete({
     *   where: {
     *     // ... filter to delete one Maquina
     *   }
     * })
     * 
     */
    delete<T extends MaquinaDeleteArgs>(args: SelectSubset<T, MaquinaDeleteArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maquina.
     * @param {MaquinaUpdateArgs} args - Arguments to update one Maquina.
     * @example
     * // Update one Maquina
     * const maquina = await prisma.maquina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaquinaUpdateArgs>(args: SelectSubset<T, MaquinaUpdateArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maquinas.
     * @param {MaquinaDeleteManyArgs} args - Arguments to filter Maquinas to delete.
     * @example
     * // Delete a few Maquinas
     * const { count } = await prisma.maquina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaquinaDeleteManyArgs>(args?: SelectSubset<T, MaquinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maquinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maquinas
     * const maquina = await prisma.maquina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaquinaUpdateManyArgs>(args: SelectSubset<T, MaquinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maquinas and returns the data updated in the database.
     * @param {MaquinaUpdateManyAndReturnArgs} args - Arguments to update many Maquinas.
     * @example
     * // Update many Maquinas
     * const maquina = await prisma.maquina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maquinas and only return the `id`
     * const maquinaWithIdOnly = await prisma.maquina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaquinaUpdateManyAndReturnArgs>(args: SelectSubset<T, MaquinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Maquina.
     * @param {MaquinaUpsertArgs} args - Arguments to update or create a Maquina.
     * @example
     * // Update or create a Maquina
     * const maquina = await prisma.maquina.upsert({
     *   create: {
     *     // ... data to create a Maquina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maquina we want to update
     *   }
     * })
     */
    upsert<T extends MaquinaUpsertArgs>(args: SelectSubset<T, MaquinaUpsertArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maquinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaCountArgs} args - Arguments to filter Maquinas to count.
     * @example
     * // Count the number of Maquinas
     * const count = await prisma.maquina.count({
     *   where: {
     *     // ... the filter for the Maquinas we want to count
     *   }
     * })
    **/
    count<T extends MaquinaCountArgs>(
      args?: Subset<T, MaquinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaquinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maquina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaquinaAggregateArgs>(args: Subset<T, MaquinaAggregateArgs>): Prisma.PrismaPromise<GetMaquinaAggregateType<T>>

    /**
     * Group by Maquina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaGroupByArgs} args - Group by arguments.
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
      T extends MaquinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaquinaGroupByArgs['orderBy'] }
        : { orderBy?: MaquinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaquinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaquinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maquina model
   */
  readonly fields: MaquinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maquina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaquinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estacion<T extends EstacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstacionDefaultArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jornadas<T extends Maquina$jornadasArgs<ExtArgs> = {}>(args?: Subset<T, Maquina$jornadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Maquina model
   */
  interface MaquinaFieldRefs {
    readonly id: FieldRef<"Maquina", 'Int'>
    readonly estacionId: FieldRef<"Maquina", 'Int'>
    readonly nombre: FieldRef<"Maquina", 'String'>
    readonly activa: FieldRef<"Maquina", 'Boolean'>
    readonly moduloContador: FieldRef<"Maquina", 'BigInt'>
    readonly direccionTotalizador: FieldRef<"Maquina", 'DireccionContador'>
    readonly direccionProductos: FieldRef<"Maquina", 'DireccionContador'>
  }
    

  // Custom InputTypes
  /**
   * Maquina findUnique
   */
  export type MaquinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquina to fetch.
     */
    where: MaquinaWhereUniqueInput
  }

  /**
   * Maquina findUniqueOrThrow
   */
  export type MaquinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquina to fetch.
     */
    where: MaquinaWhereUniqueInput
  }

  /**
   * Maquina findFirst
   */
  export type MaquinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquina to fetch.
     */
    where?: MaquinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maquinas to fetch.
     */
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maquinas.
     */
    cursor?: MaquinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maquinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maquinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maquinas.
     */
    distinct?: MaquinaScalarFieldEnum | MaquinaScalarFieldEnum[]
  }

  /**
   * Maquina findFirstOrThrow
   */
  export type MaquinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquina to fetch.
     */
    where?: MaquinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maquinas to fetch.
     */
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maquinas.
     */
    cursor?: MaquinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maquinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maquinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maquinas.
     */
    distinct?: MaquinaScalarFieldEnum | MaquinaScalarFieldEnum[]
  }

  /**
   * Maquina findMany
   */
  export type MaquinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquinas to fetch.
     */
    where?: MaquinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maquinas to fetch.
     */
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maquinas.
     */
    cursor?: MaquinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maquinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maquinas.
     */
    skip?: number
    distinct?: MaquinaScalarFieldEnum | MaquinaScalarFieldEnum[]
  }

  /**
   * Maquina create
   */
  export type MaquinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Maquina.
     */
    data: XOR<MaquinaCreateInput, MaquinaUncheckedCreateInput>
  }

  /**
   * Maquina createMany
   */
  export type MaquinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maquinas.
     */
    data: MaquinaCreateManyInput | MaquinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maquina createManyAndReturn
   */
  export type MaquinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * The data used to create many Maquinas.
     */
    data: MaquinaCreateManyInput | MaquinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maquina update
   */
  export type MaquinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Maquina.
     */
    data: XOR<MaquinaUpdateInput, MaquinaUncheckedUpdateInput>
    /**
     * Choose, which Maquina to update.
     */
    where: MaquinaWhereUniqueInput
  }

  /**
   * Maquina updateMany
   */
  export type MaquinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maquinas.
     */
    data: XOR<MaquinaUpdateManyMutationInput, MaquinaUncheckedUpdateManyInput>
    /**
     * Filter which Maquinas to update
     */
    where?: MaquinaWhereInput
    /**
     * Limit how many Maquinas to update.
     */
    limit?: number
  }

  /**
   * Maquina updateManyAndReturn
   */
  export type MaquinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * The data used to update Maquinas.
     */
    data: XOR<MaquinaUpdateManyMutationInput, MaquinaUncheckedUpdateManyInput>
    /**
     * Filter which Maquinas to update
     */
    where?: MaquinaWhereInput
    /**
     * Limit how many Maquinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maquina upsert
   */
  export type MaquinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Maquina to update in case it exists.
     */
    where: MaquinaWhereUniqueInput
    /**
     * In case the Maquina found by the `where` argument doesn't exist, create a new Maquina with this data.
     */
    create: XOR<MaquinaCreateInput, MaquinaUncheckedCreateInput>
    /**
     * In case the Maquina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaquinaUpdateInput, MaquinaUncheckedUpdateInput>
  }

  /**
   * Maquina delete
   */
  export type MaquinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter which Maquina to delete.
     */
    where: MaquinaWhereUniqueInput
  }

  /**
   * Maquina deleteMany
   */
  export type MaquinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maquinas to delete
     */
    where?: MaquinaWhereInput
    /**
     * Limit how many Maquinas to delete.
     */
    limit?: number
  }

  /**
   * Maquina.jornadas
   */
  export type Maquina$jornadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    where?: JornadaWhereInput
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    cursor?: JornadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Maquina without action
   */
  export type MaquinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
  }


  /**
   * Model Combustible
   */

  export type AggregateCombustible = {
    _count: CombustibleCountAggregateOutputType | null
    _avg: CombustibleAvgAggregateOutputType | null
    _sum: CombustibleSumAggregateOutputType | null
    _min: CombustibleMinAggregateOutputType | null
    _max: CombustibleMaxAggregateOutputType | null
  }

  export type CombustibleAvgAggregateOutputType = {
    id: number | null
  }

  export type CombustibleSumAggregateOutputType = {
    id: number | null
  }

  export type CombustibleMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CombustibleMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CombustibleCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CombustibleAvgAggregateInputType = {
    id?: true
  }

  export type CombustibleSumAggregateInputType = {
    id?: true
  }

  export type CombustibleMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CombustibleMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CombustibleCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CombustibleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combustible to aggregate.
     */
    where?: CombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combustibles to fetch.
     */
    orderBy?: CombustibleOrderByWithRelationInput | CombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Combustibles
    **/
    _count?: true | CombustibleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CombustibleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CombustibleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CombustibleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CombustibleMaxAggregateInputType
  }

  export type GetCombustibleAggregateType<T extends CombustibleAggregateArgs> = {
        [P in keyof T & keyof AggregateCombustible]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCombustible[P]>
      : GetScalarType<T[P], AggregateCombustible[P]>
  }




  export type CombustibleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CombustibleWhereInput
    orderBy?: CombustibleOrderByWithAggregationInput | CombustibleOrderByWithAggregationInput[]
    by: CombustibleScalarFieldEnum[] | CombustibleScalarFieldEnum
    having?: CombustibleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CombustibleCountAggregateInputType | true
    _avg?: CombustibleAvgAggregateInputType
    _sum?: CombustibleSumAggregateInputType
    _min?: CombustibleMinAggregateInputType
    _max?: CombustibleMaxAggregateInputType
  }

  export type CombustibleGroupByOutputType = {
    id: number
    nombre: string
    _count: CombustibleCountAggregateOutputType | null
    _avg: CombustibleAvgAggregateOutputType | null
    _sum: CombustibleSumAggregateOutputType | null
    _min: CombustibleMinAggregateOutputType | null
    _max: CombustibleMaxAggregateOutputType | null
  }

  type GetCombustibleGroupByPayload<T extends CombustibleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CombustibleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CombustibleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CombustibleGroupByOutputType[P]>
            : GetScalarType<T[P], CombustibleGroupByOutputType[P]>
        }
      >
    >


  export type CombustibleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precios?: boolean | Combustible$preciosArgs<ExtArgs>
    tanques?: boolean | Combustible$tanquesArgs<ExtArgs>
    lecturas?: boolean | Combustible$lecturasArgs<ExtArgs>
    _count?: boolean | CombustibleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["combustible"]>

  export type CombustibleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["combustible"]>

  export type CombustibleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["combustible"]>

  export type CombustibleSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CombustibleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["combustible"]>
  export type CombustibleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    precios?: boolean | Combustible$preciosArgs<ExtArgs>
    tanques?: boolean | Combustible$tanquesArgs<ExtArgs>
    lecturas?: boolean | Combustible$lecturasArgs<ExtArgs>
    _count?: boolean | CombustibleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CombustibleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CombustibleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CombustiblePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Combustible"
    objects: {
      precios: Prisma.$HistorialPrecioPayload<ExtArgs>[]
      tanques: Prisma.$TanquePayload<ExtArgs>[]
      lecturas: Prisma.$LecturaJornadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["combustible"]>
    composites: {}
  }

  type CombustibleGetPayload<S extends boolean | null | undefined | CombustibleDefaultArgs> = $Result.GetResult<Prisma.$CombustiblePayload, S>

  type CombustibleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CombustibleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CombustibleCountAggregateInputType | true
    }

  export interface CombustibleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Combustible'], meta: { name: 'Combustible' } }
    /**
     * Find zero or one Combustible that matches the filter.
     * @param {CombustibleFindUniqueArgs} args - Arguments to find a Combustible
     * @example
     * // Get one Combustible
     * const combustible = await prisma.combustible.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CombustibleFindUniqueArgs>(args: SelectSubset<T, CombustibleFindUniqueArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Combustible that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CombustibleFindUniqueOrThrowArgs} args - Arguments to find a Combustible
     * @example
     * // Get one Combustible
     * const combustible = await prisma.combustible.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CombustibleFindUniqueOrThrowArgs>(args: SelectSubset<T, CombustibleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combustible that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustibleFindFirstArgs} args - Arguments to find a Combustible
     * @example
     * // Get one Combustible
     * const combustible = await prisma.combustible.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CombustibleFindFirstArgs>(args?: SelectSubset<T, CombustibleFindFirstArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combustible that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustibleFindFirstOrThrowArgs} args - Arguments to find a Combustible
     * @example
     * // Get one Combustible
     * const combustible = await prisma.combustible.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CombustibleFindFirstOrThrowArgs>(args?: SelectSubset<T, CombustibleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Combustibles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustibleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Combustibles
     * const combustibles = await prisma.combustible.findMany()
     * 
     * // Get first 10 Combustibles
     * const combustibles = await prisma.combustible.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const combustibleWithIdOnly = await prisma.combustible.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CombustibleFindManyArgs>(args?: SelectSubset<T, CombustibleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Combustible.
     * @param {CombustibleCreateArgs} args - Arguments to create a Combustible.
     * @example
     * // Create one Combustible
     * const Combustible = await prisma.combustible.create({
     *   data: {
     *     // ... data to create a Combustible
     *   }
     * })
     * 
     */
    create<T extends CombustibleCreateArgs>(args: SelectSubset<T, CombustibleCreateArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Combustibles.
     * @param {CombustibleCreateManyArgs} args - Arguments to create many Combustibles.
     * @example
     * // Create many Combustibles
     * const combustible = await prisma.combustible.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CombustibleCreateManyArgs>(args?: SelectSubset<T, CombustibleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Combustibles and returns the data saved in the database.
     * @param {CombustibleCreateManyAndReturnArgs} args - Arguments to create many Combustibles.
     * @example
     * // Create many Combustibles
     * const combustible = await prisma.combustible.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Combustibles and only return the `id`
     * const combustibleWithIdOnly = await prisma.combustible.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CombustibleCreateManyAndReturnArgs>(args?: SelectSubset<T, CombustibleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Combustible.
     * @param {CombustibleDeleteArgs} args - Arguments to delete one Combustible.
     * @example
     * // Delete one Combustible
     * const Combustible = await prisma.combustible.delete({
     *   where: {
     *     // ... filter to delete one Combustible
     *   }
     * })
     * 
     */
    delete<T extends CombustibleDeleteArgs>(args: SelectSubset<T, CombustibleDeleteArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Combustible.
     * @param {CombustibleUpdateArgs} args - Arguments to update one Combustible.
     * @example
     * // Update one Combustible
     * const combustible = await prisma.combustible.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CombustibleUpdateArgs>(args: SelectSubset<T, CombustibleUpdateArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Combustibles.
     * @param {CombustibleDeleteManyArgs} args - Arguments to filter Combustibles to delete.
     * @example
     * // Delete a few Combustibles
     * const { count } = await prisma.combustible.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CombustibleDeleteManyArgs>(args?: SelectSubset<T, CombustibleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combustibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustibleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Combustibles
     * const combustible = await prisma.combustible.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CombustibleUpdateManyArgs>(args: SelectSubset<T, CombustibleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combustibles and returns the data updated in the database.
     * @param {CombustibleUpdateManyAndReturnArgs} args - Arguments to update many Combustibles.
     * @example
     * // Update many Combustibles
     * const combustible = await prisma.combustible.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Combustibles and only return the `id`
     * const combustibleWithIdOnly = await prisma.combustible.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CombustibleUpdateManyAndReturnArgs>(args: SelectSubset<T, CombustibleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Combustible.
     * @param {CombustibleUpsertArgs} args - Arguments to update or create a Combustible.
     * @example
     * // Update or create a Combustible
     * const combustible = await prisma.combustible.upsert({
     *   create: {
     *     // ... data to create a Combustible
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Combustible we want to update
     *   }
     * })
     */
    upsert<T extends CombustibleUpsertArgs>(args: SelectSubset<T, CombustibleUpsertArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Combustibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustibleCountArgs} args - Arguments to filter Combustibles to count.
     * @example
     * // Count the number of Combustibles
     * const count = await prisma.combustible.count({
     *   where: {
     *     // ... the filter for the Combustibles we want to count
     *   }
     * })
    **/
    count<T extends CombustibleCountArgs>(
      args?: Subset<T, CombustibleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CombustibleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Combustible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustibleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CombustibleAggregateArgs>(args: Subset<T, CombustibleAggregateArgs>): Prisma.PrismaPromise<GetCombustibleAggregateType<T>>

    /**
     * Group by Combustible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustibleGroupByArgs} args - Group by arguments.
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
      T extends CombustibleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CombustibleGroupByArgs['orderBy'] }
        : { orderBy?: CombustibleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CombustibleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCombustibleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Combustible model
   */
  readonly fields: CombustibleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Combustible.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CombustibleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    precios<T extends Combustible$preciosArgs<ExtArgs> = {}>(args?: Subset<T, Combustible$preciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tanques<T extends Combustible$tanquesArgs<ExtArgs> = {}>(args?: Subset<T, Combustible$tanquesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lecturas<T extends Combustible$lecturasArgs<ExtArgs> = {}>(args?: Subset<T, Combustible$lecturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Combustible model
   */
  interface CombustibleFieldRefs {
    readonly id: FieldRef<"Combustible", 'Int'>
    readonly nombre: FieldRef<"Combustible", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Combustible findUnique
   */
  export type CombustibleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * Filter, which Combustible to fetch.
     */
    where: CombustibleWhereUniqueInput
  }

  /**
   * Combustible findUniqueOrThrow
   */
  export type CombustibleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * Filter, which Combustible to fetch.
     */
    where: CombustibleWhereUniqueInput
  }

  /**
   * Combustible findFirst
   */
  export type CombustibleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * Filter, which Combustible to fetch.
     */
    where?: CombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combustibles to fetch.
     */
    orderBy?: CombustibleOrderByWithRelationInput | CombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combustibles.
     */
    cursor?: CombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combustibles.
     */
    distinct?: CombustibleScalarFieldEnum | CombustibleScalarFieldEnum[]
  }

  /**
   * Combustible findFirstOrThrow
   */
  export type CombustibleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * Filter, which Combustible to fetch.
     */
    where?: CombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combustibles to fetch.
     */
    orderBy?: CombustibleOrderByWithRelationInput | CombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combustibles.
     */
    cursor?: CombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combustibles.
     */
    distinct?: CombustibleScalarFieldEnum | CombustibleScalarFieldEnum[]
  }

  /**
   * Combustible findMany
   */
  export type CombustibleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * Filter, which Combustibles to fetch.
     */
    where?: CombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combustibles to fetch.
     */
    orderBy?: CombustibleOrderByWithRelationInput | CombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Combustibles.
     */
    cursor?: CombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combustibles.
     */
    skip?: number
    distinct?: CombustibleScalarFieldEnum | CombustibleScalarFieldEnum[]
  }

  /**
   * Combustible create
   */
  export type CombustibleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * The data needed to create a Combustible.
     */
    data: XOR<CombustibleCreateInput, CombustibleUncheckedCreateInput>
  }

  /**
   * Combustible createMany
   */
  export type CombustibleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Combustibles.
     */
    data: CombustibleCreateManyInput | CombustibleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Combustible createManyAndReturn
   */
  export type CombustibleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * The data used to create many Combustibles.
     */
    data: CombustibleCreateManyInput | CombustibleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Combustible update
   */
  export type CombustibleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * The data needed to update a Combustible.
     */
    data: XOR<CombustibleUpdateInput, CombustibleUncheckedUpdateInput>
    /**
     * Choose, which Combustible to update.
     */
    where: CombustibleWhereUniqueInput
  }

  /**
   * Combustible updateMany
   */
  export type CombustibleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Combustibles.
     */
    data: XOR<CombustibleUpdateManyMutationInput, CombustibleUncheckedUpdateManyInput>
    /**
     * Filter which Combustibles to update
     */
    where?: CombustibleWhereInput
    /**
     * Limit how many Combustibles to update.
     */
    limit?: number
  }

  /**
   * Combustible updateManyAndReturn
   */
  export type CombustibleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * The data used to update Combustibles.
     */
    data: XOR<CombustibleUpdateManyMutationInput, CombustibleUncheckedUpdateManyInput>
    /**
     * Filter which Combustibles to update
     */
    where?: CombustibleWhereInput
    /**
     * Limit how many Combustibles to update.
     */
    limit?: number
  }

  /**
   * Combustible upsert
   */
  export type CombustibleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * The filter to search for the Combustible to update in case it exists.
     */
    where: CombustibleWhereUniqueInput
    /**
     * In case the Combustible found by the `where` argument doesn't exist, create a new Combustible with this data.
     */
    create: XOR<CombustibleCreateInput, CombustibleUncheckedCreateInput>
    /**
     * In case the Combustible was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CombustibleUpdateInput, CombustibleUncheckedUpdateInput>
  }

  /**
   * Combustible delete
   */
  export type CombustibleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
    /**
     * Filter which Combustible to delete.
     */
    where: CombustibleWhereUniqueInput
  }

  /**
   * Combustible deleteMany
   */
  export type CombustibleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combustibles to delete
     */
    where?: CombustibleWhereInput
    /**
     * Limit how many Combustibles to delete.
     */
    limit?: number
  }

  /**
   * Combustible.precios
   */
  export type Combustible$preciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    where?: HistorialPrecioWhereInput
    orderBy?: HistorialPrecioOrderByWithRelationInput | HistorialPrecioOrderByWithRelationInput[]
    cursor?: HistorialPrecioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialPrecioScalarFieldEnum | HistorialPrecioScalarFieldEnum[]
  }

  /**
   * Combustible.tanques
   */
  export type Combustible$tanquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    where?: TanqueWhereInput
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    cursor?: TanqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TanqueScalarFieldEnum | TanqueScalarFieldEnum[]
  }

  /**
   * Combustible.lecturas
   */
  export type Combustible$lecturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    where?: LecturaJornadaWhereInput
    orderBy?: LecturaJornadaOrderByWithRelationInput | LecturaJornadaOrderByWithRelationInput[]
    cursor?: LecturaJornadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturaJornadaScalarFieldEnum | LecturaJornadaScalarFieldEnum[]
  }

  /**
   * Combustible without action
   */
  export type CombustibleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustible
     */
    select?: CombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combustible
     */
    omit?: CombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombustibleInclude<ExtArgs> | null
  }


  /**
   * Model HistorialPrecio
   */

  export type AggregateHistorialPrecio = {
    _count: HistorialPrecioCountAggregateOutputType | null
    _avg: HistorialPrecioAvgAggregateOutputType | null
    _sum: HistorialPrecioSumAggregateOutputType | null
    _min: HistorialPrecioMinAggregateOutputType | null
    _max: HistorialPrecioMaxAggregateOutputType | null
  }

  export type HistorialPrecioAvgAggregateOutputType = {
    id: number | null
    combustibleId: number | null
    precio: Decimal | null
  }

  export type HistorialPrecioSumAggregateOutputType = {
    id: number | null
    combustibleId: number | null
    precio: Decimal | null
  }

  export type HistorialPrecioMinAggregateOutputType = {
    id: number | null
    combustibleId: number | null
    precio: Decimal | null
    vigenteDesde: Date | null
  }

  export type HistorialPrecioMaxAggregateOutputType = {
    id: number | null
    combustibleId: number | null
    precio: Decimal | null
    vigenteDesde: Date | null
  }

  export type HistorialPrecioCountAggregateOutputType = {
    id: number
    combustibleId: number
    precio: number
    vigenteDesde: number
    _all: number
  }


  export type HistorialPrecioAvgAggregateInputType = {
    id?: true
    combustibleId?: true
    precio?: true
  }

  export type HistorialPrecioSumAggregateInputType = {
    id?: true
    combustibleId?: true
    precio?: true
  }

  export type HistorialPrecioMinAggregateInputType = {
    id?: true
    combustibleId?: true
    precio?: true
    vigenteDesde?: true
  }

  export type HistorialPrecioMaxAggregateInputType = {
    id?: true
    combustibleId?: true
    precio?: true
    vigenteDesde?: true
  }

  export type HistorialPrecioCountAggregateInputType = {
    id?: true
    combustibleId?: true
    precio?: true
    vigenteDesde?: true
    _all?: true
  }

  export type HistorialPrecioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialPrecio to aggregate.
     */
    where?: HistorialPrecioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialPrecios to fetch.
     */
    orderBy?: HistorialPrecioOrderByWithRelationInput | HistorialPrecioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistorialPrecioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialPrecios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialPrecios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistorialPrecios
    **/
    _count?: true | HistorialPrecioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistorialPrecioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorialPrecioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistorialPrecioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistorialPrecioMaxAggregateInputType
  }

  export type GetHistorialPrecioAggregateType<T extends HistorialPrecioAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorialPrecio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorialPrecio[P]>
      : GetScalarType<T[P], AggregateHistorialPrecio[P]>
  }




  export type HistorialPrecioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialPrecioWhereInput
    orderBy?: HistorialPrecioOrderByWithAggregationInput | HistorialPrecioOrderByWithAggregationInput[]
    by: HistorialPrecioScalarFieldEnum[] | HistorialPrecioScalarFieldEnum
    having?: HistorialPrecioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistorialPrecioCountAggregateInputType | true
    _avg?: HistorialPrecioAvgAggregateInputType
    _sum?: HistorialPrecioSumAggregateInputType
    _min?: HistorialPrecioMinAggregateInputType
    _max?: HistorialPrecioMaxAggregateInputType
  }

  export type HistorialPrecioGroupByOutputType = {
    id: number
    combustibleId: number
    precio: Decimal
    vigenteDesde: Date
    _count: HistorialPrecioCountAggregateOutputType | null
    _avg: HistorialPrecioAvgAggregateOutputType | null
    _sum: HistorialPrecioSumAggregateOutputType | null
    _min: HistorialPrecioMinAggregateOutputType | null
    _max: HistorialPrecioMaxAggregateOutputType | null
  }

  type GetHistorialPrecioGroupByPayload<T extends HistorialPrecioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistorialPrecioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistorialPrecioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistorialPrecioGroupByOutputType[P]>
            : GetScalarType<T[P], HistorialPrecioGroupByOutputType[P]>
        }
      >
    >


  export type HistorialPrecioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    combustibleId?: boolean
    precio?: boolean
    vigenteDesde?: boolean
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historialPrecio"]>

  export type HistorialPrecioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    combustibleId?: boolean
    precio?: boolean
    vigenteDesde?: boolean
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historialPrecio"]>

  export type HistorialPrecioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    combustibleId?: boolean
    precio?: boolean
    vigenteDesde?: boolean
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historialPrecio"]>

  export type HistorialPrecioSelectScalar = {
    id?: boolean
    combustibleId?: boolean
    precio?: boolean
    vigenteDesde?: boolean
  }

  export type HistorialPrecioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "combustibleId" | "precio" | "vigenteDesde", ExtArgs["result"]["historialPrecio"]>
  export type HistorialPrecioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }
  export type HistorialPrecioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }
  export type HistorialPrecioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }

  export type $HistorialPrecioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistorialPrecio"
    objects: {
      combustible: Prisma.$CombustiblePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      combustibleId: number
      precio: Prisma.Decimal
      vigenteDesde: Date
    }, ExtArgs["result"]["historialPrecio"]>
    composites: {}
  }

  type HistorialPrecioGetPayload<S extends boolean | null | undefined | HistorialPrecioDefaultArgs> = $Result.GetResult<Prisma.$HistorialPrecioPayload, S>

  type HistorialPrecioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistorialPrecioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistorialPrecioCountAggregateInputType | true
    }

  export interface HistorialPrecioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistorialPrecio'], meta: { name: 'HistorialPrecio' } }
    /**
     * Find zero or one HistorialPrecio that matches the filter.
     * @param {HistorialPrecioFindUniqueArgs} args - Arguments to find a HistorialPrecio
     * @example
     * // Get one HistorialPrecio
     * const historialPrecio = await prisma.historialPrecio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialPrecioFindUniqueArgs>(args: SelectSubset<T, HistorialPrecioFindUniqueArgs<ExtArgs>>): Prisma__HistorialPrecioClient<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistorialPrecio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialPrecioFindUniqueOrThrowArgs} args - Arguments to find a HistorialPrecio
     * @example
     * // Get one HistorialPrecio
     * const historialPrecio = await prisma.historialPrecio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialPrecioFindUniqueOrThrowArgs>(args: SelectSubset<T, HistorialPrecioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistorialPrecioClient<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialPrecio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPrecioFindFirstArgs} args - Arguments to find a HistorialPrecio
     * @example
     * // Get one HistorialPrecio
     * const historialPrecio = await prisma.historialPrecio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialPrecioFindFirstArgs>(args?: SelectSubset<T, HistorialPrecioFindFirstArgs<ExtArgs>>): Prisma__HistorialPrecioClient<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialPrecio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPrecioFindFirstOrThrowArgs} args - Arguments to find a HistorialPrecio
     * @example
     * // Get one HistorialPrecio
     * const historialPrecio = await prisma.historialPrecio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialPrecioFindFirstOrThrowArgs>(args?: SelectSubset<T, HistorialPrecioFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistorialPrecioClient<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistorialPrecios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPrecioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistorialPrecios
     * const historialPrecios = await prisma.historialPrecio.findMany()
     * 
     * // Get first 10 HistorialPrecios
     * const historialPrecios = await prisma.historialPrecio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historialPrecioWithIdOnly = await prisma.historialPrecio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistorialPrecioFindManyArgs>(args?: SelectSubset<T, HistorialPrecioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistorialPrecio.
     * @param {HistorialPrecioCreateArgs} args - Arguments to create a HistorialPrecio.
     * @example
     * // Create one HistorialPrecio
     * const HistorialPrecio = await prisma.historialPrecio.create({
     *   data: {
     *     // ... data to create a HistorialPrecio
     *   }
     * })
     * 
     */
    create<T extends HistorialPrecioCreateArgs>(args: SelectSubset<T, HistorialPrecioCreateArgs<ExtArgs>>): Prisma__HistorialPrecioClient<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistorialPrecios.
     * @param {HistorialPrecioCreateManyArgs} args - Arguments to create many HistorialPrecios.
     * @example
     * // Create many HistorialPrecios
     * const historialPrecio = await prisma.historialPrecio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistorialPrecioCreateManyArgs>(args?: SelectSubset<T, HistorialPrecioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistorialPrecios and returns the data saved in the database.
     * @param {HistorialPrecioCreateManyAndReturnArgs} args - Arguments to create many HistorialPrecios.
     * @example
     * // Create many HistorialPrecios
     * const historialPrecio = await prisma.historialPrecio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistorialPrecios and only return the `id`
     * const historialPrecioWithIdOnly = await prisma.historialPrecio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistorialPrecioCreateManyAndReturnArgs>(args?: SelectSubset<T, HistorialPrecioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistorialPrecio.
     * @param {HistorialPrecioDeleteArgs} args - Arguments to delete one HistorialPrecio.
     * @example
     * // Delete one HistorialPrecio
     * const HistorialPrecio = await prisma.historialPrecio.delete({
     *   where: {
     *     // ... filter to delete one HistorialPrecio
     *   }
     * })
     * 
     */
    delete<T extends HistorialPrecioDeleteArgs>(args: SelectSubset<T, HistorialPrecioDeleteArgs<ExtArgs>>): Prisma__HistorialPrecioClient<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistorialPrecio.
     * @param {HistorialPrecioUpdateArgs} args - Arguments to update one HistorialPrecio.
     * @example
     * // Update one HistorialPrecio
     * const historialPrecio = await prisma.historialPrecio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistorialPrecioUpdateArgs>(args: SelectSubset<T, HistorialPrecioUpdateArgs<ExtArgs>>): Prisma__HistorialPrecioClient<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistorialPrecios.
     * @param {HistorialPrecioDeleteManyArgs} args - Arguments to filter HistorialPrecios to delete.
     * @example
     * // Delete a few HistorialPrecios
     * const { count } = await prisma.historialPrecio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistorialPrecioDeleteManyArgs>(args?: SelectSubset<T, HistorialPrecioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialPrecios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPrecioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistorialPrecios
     * const historialPrecio = await prisma.historialPrecio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistorialPrecioUpdateManyArgs>(args: SelectSubset<T, HistorialPrecioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialPrecios and returns the data updated in the database.
     * @param {HistorialPrecioUpdateManyAndReturnArgs} args - Arguments to update many HistorialPrecios.
     * @example
     * // Update many HistorialPrecios
     * const historialPrecio = await prisma.historialPrecio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistorialPrecios and only return the `id`
     * const historialPrecioWithIdOnly = await prisma.historialPrecio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistorialPrecioUpdateManyAndReturnArgs>(args: SelectSubset<T, HistorialPrecioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistorialPrecio.
     * @param {HistorialPrecioUpsertArgs} args - Arguments to update or create a HistorialPrecio.
     * @example
     * // Update or create a HistorialPrecio
     * const historialPrecio = await prisma.historialPrecio.upsert({
     *   create: {
     *     // ... data to create a HistorialPrecio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistorialPrecio we want to update
     *   }
     * })
     */
    upsert<T extends HistorialPrecioUpsertArgs>(args: SelectSubset<T, HistorialPrecioUpsertArgs<ExtArgs>>): Prisma__HistorialPrecioClient<$Result.GetResult<Prisma.$HistorialPrecioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistorialPrecios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPrecioCountArgs} args - Arguments to filter HistorialPrecios to count.
     * @example
     * // Count the number of HistorialPrecios
     * const count = await prisma.historialPrecio.count({
     *   where: {
     *     // ... the filter for the HistorialPrecios we want to count
     *   }
     * })
    **/
    count<T extends HistorialPrecioCountArgs>(
      args?: Subset<T, HistorialPrecioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistorialPrecioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistorialPrecio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPrecioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistorialPrecioAggregateArgs>(args: Subset<T, HistorialPrecioAggregateArgs>): Prisma.PrismaPromise<GetHistorialPrecioAggregateType<T>>

    /**
     * Group by HistorialPrecio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPrecioGroupByArgs} args - Group by arguments.
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
      T extends HistorialPrecioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistorialPrecioGroupByArgs['orderBy'] }
        : { orderBy?: HistorialPrecioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistorialPrecioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialPrecioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistorialPrecio model
   */
  readonly fields: HistorialPrecioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistorialPrecio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistorialPrecioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    combustible<T extends CombustibleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CombustibleDefaultArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistorialPrecio model
   */
  interface HistorialPrecioFieldRefs {
    readonly id: FieldRef<"HistorialPrecio", 'Int'>
    readonly combustibleId: FieldRef<"HistorialPrecio", 'Int'>
    readonly precio: FieldRef<"HistorialPrecio", 'Decimal'>
    readonly vigenteDesde: FieldRef<"HistorialPrecio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistorialPrecio findUnique
   */
  export type HistorialPrecioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPrecio to fetch.
     */
    where: HistorialPrecioWhereUniqueInput
  }

  /**
   * HistorialPrecio findUniqueOrThrow
   */
  export type HistorialPrecioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPrecio to fetch.
     */
    where: HistorialPrecioWhereUniqueInput
  }

  /**
   * HistorialPrecio findFirst
   */
  export type HistorialPrecioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPrecio to fetch.
     */
    where?: HistorialPrecioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialPrecios to fetch.
     */
    orderBy?: HistorialPrecioOrderByWithRelationInput | HistorialPrecioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialPrecios.
     */
    cursor?: HistorialPrecioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialPrecios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialPrecios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialPrecios.
     */
    distinct?: HistorialPrecioScalarFieldEnum | HistorialPrecioScalarFieldEnum[]
  }

  /**
   * HistorialPrecio findFirstOrThrow
   */
  export type HistorialPrecioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPrecio to fetch.
     */
    where?: HistorialPrecioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialPrecios to fetch.
     */
    orderBy?: HistorialPrecioOrderByWithRelationInput | HistorialPrecioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialPrecios.
     */
    cursor?: HistorialPrecioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialPrecios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialPrecios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialPrecios.
     */
    distinct?: HistorialPrecioScalarFieldEnum | HistorialPrecioScalarFieldEnum[]
  }

  /**
   * HistorialPrecio findMany
   */
  export type HistorialPrecioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPrecios to fetch.
     */
    where?: HistorialPrecioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialPrecios to fetch.
     */
    orderBy?: HistorialPrecioOrderByWithRelationInput | HistorialPrecioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistorialPrecios.
     */
    cursor?: HistorialPrecioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialPrecios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialPrecios.
     */
    skip?: number
    distinct?: HistorialPrecioScalarFieldEnum | HistorialPrecioScalarFieldEnum[]
  }

  /**
   * HistorialPrecio create
   */
  export type HistorialPrecioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * The data needed to create a HistorialPrecio.
     */
    data: XOR<HistorialPrecioCreateInput, HistorialPrecioUncheckedCreateInput>
  }

  /**
   * HistorialPrecio createMany
   */
  export type HistorialPrecioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistorialPrecios.
     */
    data: HistorialPrecioCreateManyInput | HistorialPrecioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistorialPrecio createManyAndReturn
   */
  export type HistorialPrecioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * The data used to create many HistorialPrecios.
     */
    data: HistorialPrecioCreateManyInput | HistorialPrecioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistorialPrecio update
   */
  export type HistorialPrecioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * The data needed to update a HistorialPrecio.
     */
    data: XOR<HistorialPrecioUpdateInput, HistorialPrecioUncheckedUpdateInput>
    /**
     * Choose, which HistorialPrecio to update.
     */
    where: HistorialPrecioWhereUniqueInput
  }

  /**
   * HistorialPrecio updateMany
   */
  export type HistorialPrecioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistorialPrecios.
     */
    data: XOR<HistorialPrecioUpdateManyMutationInput, HistorialPrecioUncheckedUpdateManyInput>
    /**
     * Filter which HistorialPrecios to update
     */
    where?: HistorialPrecioWhereInput
    /**
     * Limit how many HistorialPrecios to update.
     */
    limit?: number
  }

  /**
   * HistorialPrecio updateManyAndReturn
   */
  export type HistorialPrecioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * The data used to update HistorialPrecios.
     */
    data: XOR<HistorialPrecioUpdateManyMutationInput, HistorialPrecioUncheckedUpdateManyInput>
    /**
     * Filter which HistorialPrecios to update
     */
    where?: HistorialPrecioWhereInput
    /**
     * Limit how many HistorialPrecios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistorialPrecio upsert
   */
  export type HistorialPrecioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * The filter to search for the HistorialPrecio to update in case it exists.
     */
    where: HistorialPrecioWhereUniqueInput
    /**
     * In case the HistorialPrecio found by the `where` argument doesn't exist, create a new HistorialPrecio with this data.
     */
    create: XOR<HistorialPrecioCreateInput, HistorialPrecioUncheckedCreateInput>
    /**
     * In case the HistorialPrecio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistorialPrecioUpdateInput, HistorialPrecioUncheckedUpdateInput>
  }

  /**
   * HistorialPrecio delete
   */
  export type HistorialPrecioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
    /**
     * Filter which HistorialPrecio to delete.
     */
    where: HistorialPrecioWhereUniqueInput
  }

  /**
   * HistorialPrecio deleteMany
   */
  export type HistorialPrecioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialPrecios to delete
     */
    where?: HistorialPrecioWhereInput
    /**
     * Limit how many HistorialPrecios to delete.
     */
    limit?: number
  }

  /**
   * HistorialPrecio without action
   */
  export type HistorialPrecioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPrecio
     */
    select?: HistorialPrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPrecio
     */
    omit?: HistorialPrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPrecioInclude<ExtArgs> | null
  }


  /**
   * Model Tanque
   */

  export type AggregateTanque = {
    _count: TanqueCountAggregateOutputType | null
    _avg: TanqueAvgAggregateOutputType | null
    _sum: TanqueSumAggregateOutputType | null
    _min: TanqueMinAggregateOutputType | null
    _max: TanqueMaxAggregateOutputType | null
  }

  export type TanqueAvgAggregateOutputType = {
    id: number | null
    estacionId: number | null
    combustibleId: number | null
    capacidad: Decimal | null
    minimo: Decimal | null
  }

  export type TanqueSumAggregateOutputType = {
    id: number | null
    estacionId: number | null
    combustibleId: number | null
    capacidad: Decimal | null
    minimo: Decimal | null
  }

  export type TanqueMinAggregateOutputType = {
    id: number | null
    estacionId: number | null
    combustibleId: number | null
    capacidad: Decimal | null
    minimo: Decimal | null
  }

  export type TanqueMaxAggregateOutputType = {
    id: number | null
    estacionId: number | null
    combustibleId: number | null
    capacidad: Decimal | null
    minimo: Decimal | null
  }

  export type TanqueCountAggregateOutputType = {
    id: number
    estacionId: number
    combustibleId: number
    capacidad: number
    minimo: number
    _all: number
  }


  export type TanqueAvgAggregateInputType = {
    id?: true
    estacionId?: true
    combustibleId?: true
    capacidad?: true
    minimo?: true
  }

  export type TanqueSumAggregateInputType = {
    id?: true
    estacionId?: true
    combustibleId?: true
    capacidad?: true
    minimo?: true
  }

  export type TanqueMinAggregateInputType = {
    id?: true
    estacionId?: true
    combustibleId?: true
    capacidad?: true
    minimo?: true
  }

  export type TanqueMaxAggregateInputType = {
    id?: true
    estacionId?: true
    combustibleId?: true
    capacidad?: true
    minimo?: true
  }

  export type TanqueCountAggregateInputType = {
    id?: true
    estacionId?: true
    combustibleId?: true
    capacidad?: true
    minimo?: true
    _all?: true
  }

  export type TanqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanque to aggregate.
     */
    where?: TanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanques to fetch.
     */
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tanques
    **/
    _count?: true | TanqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TanqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TanqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TanqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TanqueMaxAggregateInputType
  }

  export type GetTanqueAggregateType<T extends TanqueAggregateArgs> = {
        [P in keyof T & keyof AggregateTanque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTanque[P]>
      : GetScalarType<T[P], AggregateTanque[P]>
  }




  export type TanqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TanqueWhereInput
    orderBy?: TanqueOrderByWithAggregationInput | TanqueOrderByWithAggregationInput[]
    by: TanqueScalarFieldEnum[] | TanqueScalarFieldEnum
    having?: TanqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TanqueCountAggregateInputType | true
    _avg?: TanqueAvgAggregateInputType
    _sum?: TanqueSumAggregateInputType
    _min?: TanqueMinAggregateInputType
    _max?: TanqueMaxAggregateInputType
  }

  export type TanqueGroupByOutputType = {
    id: number
    estacionId: number
    combustibleId: number
    capacidad: Decimal
    minimo: Decimal
    _count: TanqueCountAggregateOutputType | null
    _avg: TanqueAvgAggregateOutputType | null
    _sum: TanqueSumAggregateOutputType | null
    _min: TanqueMinAggregateOutputType | null
    _max: TanqueMaxAggregateOutputType | null
  }

  type GetTanqueGroupByPayload<T extends TanqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TanqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TanqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TanqueGroupByOutputType[P]>
            : GetScalarType<T[P], TanqueGroupByOutputType[P]>
        }
      >
    >


  export type TanqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    combustibleId?: boolean
    capacidad?: boolean
    minimo?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
    movimientos?: boolean | Tanque$movimientosArgs<ExtArgs>
    _count?: boolean | TanqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanque"]>

  export type TanqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    combustibleId?: boolean
    capacidad?: boolean
    minimo?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanque"]>

  export type TanqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    combustibleId?: boolean
    capacidad?: boolean
    minimo?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanque"]>

  export type TanqueSelectScalar = {
    id?: boolean
    estacionId?: boolean
    combustibleId?: boolean
    capacidad?: boolean
    minimo?: boolean
  }

  export type TanqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estacionId" | "combustibleId" | "capacidad" | "minimo", ExtArgs["result"]["tanque"]>
  export type TanqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
    movimientos?: boolean | Tanque$movimientosArgs<ExtArgs>
    _count?: boolean | TanqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TanqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }
  export type TanqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }

  export type $TanquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tanque"
    objects: {
      estacion: Prisma.$EstacionPayload<ExtArgs>
      combustible: Prisma.$CombustiblePayload<ExtArgs>
      movimientos: Prisma.$MovimientoStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estacionId: number
      combustibleId: number
      capacidad: Prisma.Decimal
      minimo: Prisma.Decimal
    }, ExtArgs["result"]["tanque"]>
    composites: {}
  }

  type TanqueGetPayload<S extends boolean | null | undefined | TanqueDefaultArgs> = $Result.GetResult<Prisma.$TanquePayload, S>

  type TanqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TanqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TanqueCountAggregateInputType | true
    }

  export interface TanqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tanque'], meta: { name: 'Tanque' } }
    /**
     * Find zero or one Tanque that matches the filter.
     * @param {TanqueFindUniqueArgs} args - Arguments to find a Tanque
     * @example
     * // Get one Tanque
     * const tanque = await prisma.tanque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TanqueFindUniqueArgs>(args: SelectSubset<T, TanqueFindUniqueArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tanque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TanqueFindUniqueOrThrowArgs} args - Arguments to find a Tanque
     * @example
     * // Get one Tanque
     * const tanque = await prisma.tanque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TanqueFindUniqueOrThrowArgs>(args: SelectSubset<T, TanqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueFindFirstArgs} args - Arguments to find a Tanque
     * @example
     * // Get one Tanque
     * const tanque = await prisma.tanque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TanqueFindFirstArgs>(args?: SelectSubset<T, TanqueFindFirstArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueFindFirstOrThrowArgs} args - Arguments to find a Tanque
     * @example
     * // Get one Tanque
     * const tanque = await prisma.tanque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TanqueFindFirstOrThrowArgs>(args?: SelectSubset<T, TanqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tanques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tanques
     * const tanques = await prisma.tanque.findMany()
     * 
     * // Get first 10 Tanques
     * const tanques = await prisma.tanque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tanqueWithIdOnly = await prisma.tanque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TanqueFindManyArgs>(args?: SelectSubset<T, TanqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tanque.
     * @param {TanqueCreateArgs} args - Arguments to create a Tanque.
     * @example
     * // Create one Tanque
     * const Tanque = await prisma.tanque.create({
     *   data: {
     *     // ... data to create a Tanque
     *   }
     * })
     * 
     */
    create<T extends TanqueCreateArgs>(args: SelectSubset<T, TanqueCreateArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tanques.
     * @param {TanqueCreateManyArgs} args - Arguments to create many Tanques.
     * @example
     * // Create many Tanques
     * const tanque = await prisma.tanque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TanqueCreateManyArgs>(args?: SelectSubset<T, TanqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tanques and returns the data saved in the database.
     * @param {TanqueCreateManyAndReturnArgs} args - Arguments to create many Tanques.
     * @example
     * // Create many Tanques
     * const tanque = await prisma.tanque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tanques and only return the `id`
     * const tanqueWithIdOnly = await prisma.tanque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TanqueCreateManyAndReturnArgs>(args?: SelectSubset<T, TanqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tanque.
     * @param {TanqueDeleteArgs} args - Arguments to delete one Tanque.
     * @example
     * // Delete one Tanque
     * const Tanque = await prisma.tanque.delete({
     *   where: {
     *     // ... filter to delete one Tanque
     *   }
     * })
     * 
     */
    delete<T extends TanqueDeleteArgs>(args: SelectSubset<T, TanqueDeleteArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tanque.
     * @param {TanqueUpdateArgs} args - Arguments to update one Tanque.
     * @example
     * // Update one Tanque
     * const tanque = await prisma.tanque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TanqueUpdateArgs>(args: SelectSubset<T, TanqueUpdateArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tanques.
     * @param {TanqueDeleteManyArgs} args - Arguments to filter Tanques to delete.
     * @example
     * // Delete a few Tanques
     * const { count } = await prisma.tanque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TanqueDeleteManyArgs>(args?: SelectSubset<T, TanqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tanques
     * const tanque = await prisma.tanque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TanqueUpdateManyArgs>(args: SelectSubset<T, TanqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanques and returns the data updated in the database.
     * @param {TanqueUpdateManyAndReturnArgs} args - Arguments to update many Tanques.
     * @example
     * // Update many Tanques
     * const tanque = await prisma.tanque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tanques and only return the `id`
     * const tanqueWithIdOnly = await prisma.tanque.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TanqueUpdateManyAndReturnArgs>(args: SelectSubset<T, TanqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tanque.
     * @param {TanqueUpsertArgs} args - Arguments to update or create a Tanque.
     * @example
     * // Update or create a Tanque
     * const tanque = await prisma.tanque.upsert({
     *   create: {
     *     // ... data to create a Tanque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tanque we want to update
     *   }
     * })
     */
    upsert<T extends TanqueUpsertArgs>(args: SelectSubset<T, TanqueUpsertArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tanques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueCountArgs} args - Arguments to filter Tanques to count.
     * @example
     * // Count the number of Tanques
     * const count = await prisma.tanque.count({
     *   where: {
     *     // ... the filter for the Tanques we want to count
     *   }
     * })
    **/
    count<T extends TanqueCountArgs>(
      args?: Subset<T, TanqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TanqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tanque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TanqueAggregateArgs>(args: Subset<T, TanqueAggregateArgs>): Prisma.PrismaPromise<GetTanqueAggregateType<T>>

    /**
     * Group by Tanque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueGroupByArgs} args - Group by arguments.
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
      T extends TanqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TanqueGroupByArgs['orderBy'] }
        : { orderBy?: TanqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TanqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTanqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tanque model
   */
  readonly fields: TanqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tanque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TanqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estacion<T extends EstacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstacionDefaultArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    combustible<T extends CombustibleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CombustibleDefaultArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movimientos<T extends Tanque$movimientosArgs<ExtArgs> = {}>(args?: Subset<T, Tanque$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tanque model
   */
  interface TanqueFieldRefs {
    readonly id: FieldRef<"Tanque", 'Int'>
    readonly estacionId: FieldRef<"Tanque", 'Int'>
    readonly combustibleId: FieldRef<"Tanque", 'Int'>
    readonly capacidad: FieldRef<"Tanque", 'Decimal'>
    readonly minimo: FieldRef<"Tanque", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Tanque findUnique
   */
  export type TanqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanque to fetch.
     */
    where: TanqueWhereUniqueInput
  }

  /**
   * Tanque findUniqueOrThrow
   */
  export type TanqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanque to fetch.
     */
    where: TanqueWhereUniqueInput
  }

  /**
   * Tanque findFirst
   */
  export type TanqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanque to fetch.
     */
    where?: TanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanques to fetch.
     */
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanques.
     */
    cursor?: TanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanques.
     */
    distinct?: TanqueScalarFieldEnum | TanqueScalarFieldEnum[]
  }

  /**
   * Tanque findFirstOrThrow
   */
  export type TanqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanque to fetch.
     */
    where?: TanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanques to fetch.
     */
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanques.
     */
    cursor?: TanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanques.
     */
    distinct?: TanqueScalarFieldEnum | TanqueScalarFieldEnum[]
  }

  /**
   * Tanque findMany
   */
  export type TanqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanques to fetch.
     */
    where?: TanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanques to fetch.
     */
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tanques.
     */
    cursor?: TanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanques.
     */
    skip?: number
    distinct?: TanqueScalarFieldEnum | TanqueScalarFieldEnum[]
  }

  /**
   * Tanque create
   */
  export type TanqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * The data needed to create a Tanque.
     */
    data: XOR<TanqueCreateInput, TanqueUncheckedCreateInput>
  }

  /**
   * Tanque createMany
   */
  export type TanqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tanques.
     */
    data: TanqueCreateManyInput | TanqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tanque createManyAndReturn
   */
  export type TanqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * The data used to create many Tanques.
     */
    data: TanqueCreateManyInput | TanqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanque update
   */
  export type TanqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * The data needed to update a Tanque.
     */
    data: XOR<TanqueUpdateInput, TanqueUncheckedUpdateInput>
    /**
     * Choose, which Tanque to update.
     */
    where: TanqueWhereUniqueInput
  }

  /**
   * Tanque updateMany
   */
  export type TanqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tanques.
     */
    data: XOR<TanqueUpdateManyMutationInput, TanqueUncheckedUpdateManyInput>
    /**
     * Filter which Tanques to update
     */
    where?: TanqueWhereInput
    /**
     * Limit how many Tanques to update.
     */
    limit?: number
  }

  /**
   * Tanque updateManyAndReturn
   */
  export type TanqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * The data used to update Tanques.
     */
    data: XOR<TanqueUpdateManyMutationInput, TanqueUncheckedUpdateManyInput>
    /**
     * Filter which Tanques to update
     */
    where?: TanqueWhereInput
    /**
     * Limit how many Tanques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanque upsert
   */
  export type TanqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * The filter to search for the Tanque to update in case it exists.
     */
    where: TanqueWhereUniqueInput
    /**
     * In case the Tanque found by the `where` argument doesn't exist, create a new Tanque with this data.
     */
    create: XOR<TanqueCreateInput, TanqueUncheckedCreateInput>
    /**
     * In case the Tanque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TanqueUpdateInput, TanqueUncheckedUpdateInput>
  }

  /**
   * Tanque delete
   */
  export type TanqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter which Tanque to delete.
     */
    where: TanqueWhereUniqueInput
  }

  /**
   * Tanque deleteMany
   */
  export type TanqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanques to delete
     */
    where?: TanqueWhereInput
    /**
     * Limit how many Tanques to delete.
     */
    limit?: number
  }

  /**
   * Tanque.movimientos
   */
  export type Tanque$movimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    where?: MovimientoStockWhereInput
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    cursor?: MovimientoStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * Tanque without action
   */
  export type TanqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
  }


  /**
   * Model MovimientoStock
   */

  export type AggregateMovimientoStock = {
    _count: MovimientoStockCountAggregateOutputType | null
    _avg: MovimientoStockAvgAggregateOutputType | null
    _sum: MovimientoStockSumAggregateOutputType | null
    _min: MovimientoStockMinAggregateOutputType | null
    _max: MovimientoStockMaxAggregateOutputType | null
  }

  export type MovimientoStockAvgAggregateOutputType = {
    id: number | null
    tanqueId: number | null
    galones: Decimal | null
    jornadaId: number | null
  }

  export type MovimientoStockSumAggregateOutputType = {
    id: number | null
    tanqueId: number | null
    galones: Decimal | null
    jornadaId: number | null
  }

  export type MovimientoStockMinAggregateOutputType = {
    id: number | null
    tanqueId: number | null
    tipo: $Enums.TipoMovimiento | null
    galones: Decimal | null
    fecha: Date | null
    jornadaId: number | null
    nota: string | null
  }

  export type MovimientoStockMaxAggregateOutputType = {
    id: number | null
    tanqueId: number | null
    tipo: $Enums.TipoMovimiento | null
    galones: Decimal | null
    fecha: Date | null
    jornadaId: number | null
    nota: string | null
  }

  export type MovimientoStockCountAggregateOutputType = {
    id: number
    tanqueId: number
    tipo: number
    galones: number
    fecha: number
    jornadaId: number
    nota: number
    _all: number
  }


  export type MovimientoStockAvgAggregateInputType = {
    id?: true
    tanqueId?: true
    galones?: true
    jornadaId?: true
  }

  export type MovimientoStockSumAggregateInputType = {
    id?: true
    tanqueId?: true
    galones?: true
    jornadaId?: true
  }

  export type MovimientoStockMinAggregateInputType = {
    id?: true
    tanqueId?: true
    tipo?: true
    galones?: true
    fecha?: true
    jornadaId?: true
    nota?: true
  }

  export type MovimientoStockMaxAggregateInputType = {
    id?: true
    tanqueId?: true
    tipo?: true
    galones?: true
    fecha?: true
    jornadaId?: true
    nota?: true
  }

  export type MovimientoStockCountAggregateInputType = {
    id?: true
    tanqueId?: true
    tipo?: true
    galones?: true
    fecha?: true
    jornadaId?: true
    nota?: true
    _all?: true
  }

  export type MovimientoStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoStock to aggregate.
     */
    where?: MovimientoStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoStocks to fetch.
     */
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimientoStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimientoStocks
    **/
    _count?: true | MovimientoStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoStockMaxAggregateInputType
  }

  export type GetMovimientoStockAggregateType<T extends MovimientoStockAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientoStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientoStock[P]>
      : GetScalarType<T[P], AggregateMovimientoStock[P]>
  }




  export type MovimientoStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoStockWhereInput
    orderBy?: MovimientoStockOrderByWithAggregationInput | MovimientoStockOrderByWithAggregationInput[]
    by: MovimientoStockScalarFieldEnum[] | MovimientoStockScalarFieldEnum
    having?: MovimientoStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoStockCountAggregateInputType | true
    _avg?: MovimientoStockAvgAggregateInputType
    _sum?: MovimientoStockSumAggregateInputType
    _min?: MovimientoStockMinAggregateInputType
    _max?: MovimientoStockMaxAggregateInputType
  }

  export type MovimientoStockGroupByOutputType = {
    id: number
    tanqueId: number
    tipo: $Enums.TipoMovimiento
    galones: Decimal
    fecha: Date
    jornadaId: number | null
    nota: string | null
    _count: MovimientoStockCountAggregateOutputType | null
    _avg: MovimientoStockAvgAggregateOutputType | null
    _sum: MovimientoStockSumAggregateOutputType | null
    _min: MovimientoStockMinAggregateOutputType | null
    _max: MovimientoStockMaxAggregateOutputType | null
  }

  type GetMovimientoStockGroupByPayload<T extends MovimientoStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientoStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientoStockGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientoStockGroupByOutputType[P]>
        }
      >
    >


  export type MovimientoStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanqueId?: boolean
    tipo?: boolean
    galones?: boolean
    fecha?: boolean
    jornadaId?: boolean
    nota?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    jornada?: boolean | MovimientoStock$jornadaArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoStock"]>

  export type MovimientoStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanqueId?: boolean
    tipo?: boolean
    galones?: boolean
    fecha?: boolean
    jornadaId?: boolean
    nota?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    jornada?: boolean | MovimientoStock$jornadaArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoStock"]>

  export type MovimientoStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanqueId?: boolean
    tipo?: boolean
    galones?: boolean
    fecha?: boolean
    jornadaId?: boolean
    nota?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    jornada?: boolean | MovimientoStock$jornadaArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoStock"]>

  export type MovimientoStockSelectScalar = {
    id?: boolean
    tanqueId?: boolean
    tipo?: boolean
    galones?: boolean
    fecha?: boolean
    jornadaId?: boolean
    nota?: boolean
  }

  export type MovimientoStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanqueId" | "tipo" | "galones" | "fecha" | "jornadaId" | "nota", ExtArgs["result"]["movimientoStock"]>
  export type MovimientoStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    jornada?: boolean | MovimientoStock$jornadaArgs<ExtArgs>
  }
  export type MovimientoStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    jornada?: boolean | MovimientoStock$jornadaArgs<ExtArgs>
  }
  export type MovimientoStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    jornada?: boolean | MovimientoStock$jornadaArgs<ExtArgs>
  }

  export type $MovimientoStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimientoStock"
    objects: {
      tanque: Prisma.$TanquePayload<ExtArgs>
      jornada: Prisma.$JornadaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tanqueId: number
      tipo: $Enums.TipoMovimiento
      galones: Prisma.Decimal
      fecha: Date
      jornadaId: number | null
      nota: string | null
    }, ExtArgs["result"]["movimientoStock"]>
    composites: {}
  }

  type MovimientoStockGetPayload<S extends boolean | null | undefined | MovimientoStockDefaultArgs> = $Result.GetResult<Prisma.$MovimientoStockPayload, S>

  type MovimientoStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimientoStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientoStockCountAggregateInputType | true
    }

  export interface MovimientoStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimientoStock'], meta: { name: 'MovimientoStock' } }
    /**
     * Find zero or one MovimientoStock that matches the filter.
     * @param {MovimientoStockFindUniqueArgs} args - Arguments to find a MovimientoStock
     * @example
     * // Get one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimientoStockFindUniqueArgs>(args: SelectSubset<T, MovimientoStockFindUniqueArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimientoStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimientoStockFindUniqueOrThrowArgs} args - Arguments to find a MovimientoStock
     * @example
     * // Get one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimientoStockFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimientoStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockFindFirstArgs} args - Arguments to find a MovimientoStock
     * @example
     * // Get one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimientoStockFindFirstArgs>(args?: SelectSubset<T, MovimientoStockFindFirstArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockFindFirstOrThrowArgs} args - Arguments to find a MovimientoStock
     * @example
     * // Get one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimientoStockFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimientoStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimientoStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimientoStocks
     * const movimientoStocks = await prisma.movimientoStock.findMany()
     * 
     * // Get first 10 MovimientoStocks
     * const movimientoStocks = await prisma.movimientoStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientoStockWithIdOnly = await prisma.movimientoStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimientoStockFindManyArgs>(args?: SelectSubset<T, MovimientoStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimientoStock.
     * @param {MovimientoStockCreateArgs} args - Arguments to create a MovimientoStock.
     * @example
     * // Create one MovimientoStock
     * const MovimientoStock = await prisma.movimientoStock.create({
     *   data: {
     *     // ... data to create a MovimientoStock
     *   }
     * })
     * 
     */
    create<T extends MovimientoStockCreateArgs>(args: SelectSubset<T, MovimientoStockCreateArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimientoStocks.
     * @param {MovimientoStockCreateManyArgs} args - Arguments to create many MovimientoStocks.
     * @example
     * // Create many MovimientoStocks
     * const movimientoStock = await prisma.movimientoStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimientoStockCreateManyArgs>(args?: SelectSubset<T, MovimientoStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovimientoStocks and returns the data saved in the database.
     * @param {MovimientoStockCreateManyAndReturnArgs} args - Arguments to create many MovimientoStocks.
     * @example
     * // Create many MovimientoStocks
     * const movimientoStock = await prisma.movimientoStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovimientoStocks and only return the `id`
     * const movimientoStockWithIdOnly = await prisma.movimientoStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimientoStockCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimientoStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovimientoStock.
     * @param {MovimientoStockDeleteArgs} args - Arguments to delete one MovimientoStock.
     * @example
     * // Delete one MovimientoStock
     * const MovimientoStock = await prisma.movimientoStock.delete({
     *   where: {
     *     // ... filter to delete one MovimientoStock
     *   }
     * })
     * 
     */
    delete<T extends MovimientoStockDeleteArgs>(args: SelectSubset<T, MovimientoStockDeleteArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimientoStock.
     * @param {MovimientoStockUpdateArgs} args - Arguments to update one MovimientoStock.
     * @example
     * // Update one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimientoStockUpdateArgs>(args: SelectSubset<T, MovimientoStockUpdateArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimientoStocks.
     * @param {MovimientoStockDeleteManyArgs} args - Arguments to filter MovimientoStocks to delete.
     * @example
     * // Delete a few MovimientoStocks
     * const { count } = await prisma.movimientoStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimientoStockDeleteManyArgs>(args?: SelectSubset<T, MovimientoStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimientoStocks
     * const movimientoStock = await prisma.movimientoStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimientoStockUpdateManyArgs>(args: SelectSubset<T, MovimientoStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoStocks and returns the data updated in the database.
     * @param {MovimientoStockUpdateManyAndReturnArgs} args - Arguments to update many MovimientoStocks.
     * @example
     * // Update many MovimientoStocks
     * const movimientoStock = await prisma.movimientoStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovimientoStocks and only return the `id`
     * const movimientoStockWithIdOnly = await prisma.movimientoStock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovimientoStockUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimientoStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovimientoStock.
     * @param {MovimientoStockUpsertArgs} args - Arguments to update or create a MovimientoStock.
     * @example
     * // Update or create a MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.upsert({
     *   create: {
     *     // ... data to create a MovimientoStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimientoStock we want to update
     *   }
     * })
     */
    upsert<T extends MovimientoStockUpsertArgs>(args: SelectSubset<T, MovimientoStockUpsertArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimientoStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockCountArgs} args - Arguments to filter MovimientoStocks to count.
     * @example
     * // Count the number of MovimientoStocks
     * const count = await prisma.movimientoStock.count({
     *   where: {
     *     // ... the filter for the MovimientoStocks we want to count
     *   }
     * })
    **/
    count<T extends MovimientoStockCountArgs>(
      args?: Subset<T, MovimientoStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientoStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimientoStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimientoStockAggregateArgs>(args: Subset<T, MovimientoStockAggregateArgs>): Prisma.PrismaPromise<GetMovimientoStockAggregateType<T>>

    /**
     * Group by MovimientoStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockGroupByArgs} args - Group by arguments.
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
      T extends MovimientoStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimientoStockGroupByArgs['orderBy'] }
        : { orderBy?: MovimientoStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimientoStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimientoStock model
   */
  readonly fields: MovimientoStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimientoStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimientoStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanque<T extends TanqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TanqueDefaultArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jornada<T extends MovimientoStock$jornadaArgs<ExtArgs> = {}>(args?: Subset<T, MovimientoStock$jornadaArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MovimientoStock model
   */
  interface MovimientoStockFieldRefs {
    readonly id: FieldRef<"MovimientoStock", 'Int'>
    readonly tanqueId: FieldRef<"MovimientoStock", 'Int'>
    readonly tipo: FieldRef<"MovimientoStock", 'TipoMovimiento'>
    readonly galones: FieldRef<"MovimientoStock", 'Decimal'>
    readonly fecha: FieldRef<"MovimientoStock", 'DateTime'>
    readonly jornadaId: FieldRef<"MovimientoStock", 'Int'>
    readonly nota: FieldRef<"MovimientoStock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovimientoStock findUnique
   */
  export type MovimientoStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStock to fetch.
     */
    where: MovimientoStockWhereUniqueInput
  }

  /**
   * MovimientoStock findUniqueOrThrow
   */
  export type MovimientoStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStock to fetch.
     */
    where: MovimientoStockWhereUniqueInput
  }

  /**
   * MovimientoStock findFirst
   */
  export type MovimientoStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStock to fetch.
     */
    where?: MovimientoStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoStocks to fetch.
     */
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoStocks.
     */
    cursor?: MovimientoStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoStocks.
     */
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * MovimientoStock findFirstOrThrow
   */
  export type MovimientoStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStock to fetch.
     */
    where?: MovimientoStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoStocks to fetch.
     */
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoStocks.
     */
    cursor?: MovimientoStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoStocks.
     */
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * MovimientoStock findMany
   */
  export type MovimientoStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStocks to fetch.
     */
    where?: MovimientoStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoStocks to fetch.
     */
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimientoStocks.
     */
    cursor?: MovimientoStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoStocks.
     */
    skip?: number
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * MovimientoStock create
   */
  export type MovimientoStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimientoStock.
     */
    data: XOR<MovimientoStockCreateInput, MovimientoStockUncheckedCreateInput>
  }

  /**
   * MovimientoStock createMany
   */
  export type MovimientoStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimientoStocks.
     */
    data: MovimientoStockCreateManyInput | MovimientoStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimientoStock createManyAndReturn
   */
  export type MovimientoStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * The data used to create many MovimientoStocks.
     */
    data: MovimientoStockCreateManyInput | MovimientoStockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimientoStock update
   */
  export type MovimientoStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimientoStock.
     */
    data: XOR<MovimientoStockUpdateInput, MovimientoStockUncheckedUpdateInput>
    /**
     * Choose, which MovimientoStock to update.
     */
    where: MovimientoStockWhereUniqueInput
  }

  /**
   * MovimientoStock updateMany
   */
  export type MovimientoStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimientoStocks.
     */
    data: XOR<MovimientoStockUpdateManyMutationInput, MovimientoStockUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoStocks to update
     */
    where?: MovimientoStockWhereInput
    /**
     * Limit how many MovimientoStocks to update.
     */
    limit?: number
  }

  /**
   * MovimientoStock updateManyAndReturn
   */
  export type MovimientoStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * The data used to update MovimientoStocks.
     */
    data: XOR<MovimientoStockUpdateManyMutationInput, MovimientoStockUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoStocks to update
     */
    where?: MovimientoStockWhereInput
    /**
     * Limit how many MovimientoStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimientoStock upsert
   */
  export type MovimientoStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimientoStock to update in case it exists.
     */
    where: MovimientoStockWhereUniqueInput
    /**
     * In case the MovimientoStock found by the `where` argument doesn't exist, create a new MovimientoStock with this data.
     */
    create: XOR<MovimientoStockCreateInput, MovimientoStockUncheckedCreateInput>
    /**
     * In case the MovimientoStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimientoStockUpdateInput, MovimientoStockUncheckedUpdateInput>
  }

  /**
   * MovimientoStock delete
   */
  export type MovimientoStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter which MovimientoStock to delete.
     */
    where: MovimientoStockWhereUniqueInput
  }

  /**
   * MovimientoStock deleteMany
   */
  export type MovimientoStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoStocks to delete
     */
    where?: MovimientoStockWhereInput
    /**
     * Limit how many MovimientoStocks to delete.
     */
    limit?: number
  }

  /**
   * MovimientoStock.jornada
   */
  export type MovimientoStock$jornadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    where?: JornadaWhereInput
  }

  /**
   * MovimientoStock without action
   */
  export type MovimientoStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
  }


  /**
   * Model Empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoAvgAggregateOutputType = {
    id: number | null
    estacionId: number | null
  }

  export type EmpleadoSumAggregateOutputType = {
    id: number | null
    estacionId: number | null
  }

  export type EmpleadoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    estacionId: number | null
    horarioInicio: string | null
    horarioFin: string | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    estacionId: number | null
    horarioInicio: string | null
    horarioFin: string | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type EmpleadoCountAggregateOutputType = {
    id: number
    nombre: number
    estacionId: number
    horarioInicio: number
    horarioFin: number
    activo: number
    createdAt: number
    _all: number
  }


  export type EmpleadoAvgAggregateInputType = {
    id?: true
    estacionId?: true
  }

  export type EmpleadoSumAggregateInputType = {
    id?: true
    estacionId?: true
  }

  export type EmpleadoMinAggregateInputType = {
    id?: true
    nombre?: true
    estacionId?: true
    horarioInicio?: true
    horarioFin?: true
    activo?: true
    createdAt?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    id?: true
    nombre?: true
    estacionId?: true
    horarioInicio?: true
    horarioFin?: true
    activo?: true
    createdAt?: true
  }

  export type EmpleadoCountAggregateInputType = {
    id?: true
    nombre?: true
    estacionId?: true
    horarioInicio?: true
    horarioFin?: true
    activo?: true
    createdAt?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleado to aggregate.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type EmpleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithAggregationInput | EmpleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: EmpleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _avg?: EmpleadoAvgAggregateInputType
    _sum?: EmpleadoSumAggregateInputType
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    id: number
    nombre: string
    estacionId: number
    horarioInicio: string | null
    horarioFin: string | null
    activo: boolean
    createdAt: Date
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends EmpleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type EmpleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estacionId?: boolean
    horarioInicio?: boolean
    horarioFin?: boolean
    activo?: boolean
    createdAt?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    jornadas?: boolean | Empleado$jornadasArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estacionId?: boolean
    horarioInicio?: boolean
    horarioFin?: boolean
    activo?: boolean
    createdAt?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estacionId?: boolean
    horarioInicio?: boolean
    horarioFin?: boolean
    activo?: boolean
    createdAt?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectScalar = {
    id?: boolean
    nombre?: boolean
    estacionId?: boolean
    horarioInicio?: boolean
    horarioFin?: boolean
    activo?: boolean
    createdAt?: boolean
  }

  export type EmpleadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "estacionId" | "horarioInicio" | "horarioFin" | "activo" | "createdAt", ExtArgs["result"]["empleado"]>
  export type EmpleadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    jornadas?: boolean | Empleado$jornadasArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpleadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }
  export type EmpleadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }

  export type $EmpleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empleado"
    objects: {
      estacion: Prisma.$EstacionPayload<ExtArgs>
      jornadas: Prisma.$JornadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      estacionId: number
      horarioInicio: string | null
      horarioFin: string | null
      activo: boolean
      createdAt: Date
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type EmpleadoGetPayload<S extends boolean | null | undefined | EmpleadoDefaultArgs> = $Result.GetResult<Prisma.$EmpleadoPayload, S>

  type EmpleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpleadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface EmpleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empleado'], meta: { name: 'Empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {EmpleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpleadoFindUniqueArgs>(args: SelectSubset<T, EmpleadoFindUniqueArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpleadoFindFirstArgs>(args?: SelectSubset<T, EmpleadoFindFirstArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empleadoWithIdOnly = await prisma.empleado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpleadoFindManyArgs>(args?: SelectSubset<T, EmpleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empleado.
     * @param {EmpleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends EmpleadoCreateArgs>(args: SelectSubset<T, EmpleadoCreateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empleados.
     * @param {EmpleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpleadoCreateManyArgs>(args?: SelectSubset<T, EmpleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empleados and returns the data saved in the database.
     * @param {EmpleadoCreateManyAndReturnArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empleados and only return the `id`
     * const empleadoWithIdOnly = await prisma.empleado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpleadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpleadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empleado.
     * @param {EmpleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends EmpleadoDeleteArgs>(args: SelectSubset<T, EmpleadoDeleteArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empleado.
     * @param {EmpleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpleadoUpdateArgs>(args: SelectSubset<T, EmpleadoUpdateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empleados.
     * @param {EmpleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpleadoDeleteManyArgs>(args?: SelectSubset<T, EmpleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpleadoUpdateManyArgs>(args: SelectSubset<T, EmpleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados and returns the data updated in the database.
     * @param {EmpleadoUpdateManyAndReturnArgs} args - Arguments to update many Empleados.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empleados and only return the `id`
     * const empleadoWithIdOnly = await prisma.empleado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmpleadoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpleadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empleado.
     * @param {EmpleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends EmpleadoUpsertArgs>(args: SelectSubset<T, EmpleadoUpsertArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends EmpleadoCountArgs>(
      args?: Subset<T, EmpleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoGroupByArgs} args - Group by arguments.
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
      T extends EmpleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpleadoGroupByArgs['orderBy'] }
        : { orderBy?: EmpleadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empleado model
   */
  readonly fields: EmpleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estacion<T extends EstacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstacionDefaultArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jornadas<T extends Empleado$jornadasArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$jornadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empleado model
   */
  interface EmpleadoFieldRefs {
    readonly id: FieldRef<"Empleado", 'Int'>
    readonly nombre: FieldRef<"Empleado", 'String'>
    readonly estacionId: FieldRef<"Empleado", 'Int'>
    readonly horarioInicio: FieldRef<"Empleado", 'String'>
    readonly horarioFin: FieldRef<"Empleado", 'String'>
    readonly activo: FieldRef<"Empleado", 'Boolean'>
    readonly createdAt: FieldRef<"Empleado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empleado findUnique
   */
  export type EmpleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findUniqueOrThrow
   */
  export type EmpleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findFirst
   */
  export type EmpleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findFirstOrThrow
   */
  export type EmpleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findMany
   */
  export type EmpleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado create
   */
  export type EmpleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Empleado.
     */
    data: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
  }

  /**
   * Empleado createMany
   */
  export type EmpleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado createManyAndReturn
   */
  export type EmpleadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Empleado update
   */
  export type EmpleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Empleado.
     */
    data: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
    /**
     * Choose, which Empleado to update.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado updateMany
   */
  export type EmpleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
  }

  /**
   * Empleado updateManyAndReturn
   */
  export type EmpleadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Empleado upsert
   */
  export type EmpleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Empleado to update in case it exists.
     */
    where: EmpleadoWhereUniqueInput
    /**
     * In case the Empleado found by the `where` argument doesn't exist, create a new Empleado with this data.
     */
    create: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
    /**
     * In case the Empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
  }

  /**
   * Empleado delete
   */
  export type EmpleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter which Empleado to delete.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado deleteMany
   */
  export type EmpleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleados to delete
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to delete.
     */
    limit?: number
  }

  /**
   * Empleado.jornadas
   */
  export type Empleado$jornadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    where?: JornadaWhereInput
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    cursor?: JornadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Empleado without action
   */
  export type EmpleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
  }


  /**
   * Model Jornada
   */

  export type AggregateJornada = {
    _count: JornadaCountAggregateOutputType | null
    _avg: JornadaAvgAggregateOutputType | null
    _sum: JornadaSumAggregateOutputType | null
    _min: JornadaMinAggregateOutputType | null
    _max: JornadaMaxAggregateOutputType | null
  }

  export type JornadaAvgAggregateOutputType = {
    id: number | null
    empleadoId: number | null
    maquinaId: number | null
    estacionId: number | null
    totalizadorEntrada: Decimal | null
    totalizadorSalida: Decimal | null
    galonesTotalizador: Decimal | null
    galonesProductos: Decimal | null
    diferenciaControl: Decimal | null
    importeEsperado: Decimal | null
    importeDeclarado: Decimal | null
    diferenciaCaja: Decimal | null
  }

  export type JornadaSumAggregateOutputType = {
    id: number | null
    empleadoId: number | null
    maquinaId: number | null
    estacionId: number | null
    totalizadorEntrada: Decimal | null
    totalizadorSalida: Decimal | null
    galonesTotalizador: Decimal | null
    galonesProductos: Decimal | null
    diferenciaControl: Decimal | null
    importeEsperado: Decimal | null
    importeDeclarado: Decimal | null
    diferenciaCaja: Decimal | null
  }

  export type JornadaMinAggregateOutputType = {
    id: number | null
    empleadoId: number | null
    maquinaId: number | null
    estacionId: number | null
    inicio: Date | null
    fin: Date | null
    estado: $Enums.EstadoJornada | null
    notas: string | null
    totalizadorEntrada: Decimal | null
    totalizadorSalida: Decimal | null
    galonesTotalizador: Decimal | null
    galonesProductos: Decimal | null
    diferenciaControl: Decimal | null
    importeEsperado: Decimal | null
    importeDeclarado: Decimal | null
    diferenciaCaja: Decimal | null
  }

  export type JornadaMaxAggregateOutputType = {
    id: number | null
    empleadoId: number | null
    maquinaId: number | null
    estacionId: number | null
    inicio: Date | null
    fin: Date | null
    estado: $Enums.EstadoJornada | null
    notas: string | null
    totalizadorEntrada: Decimal | null
    totalizadorSalida: Decimal | null
    galonesTotalizador: Decimal | null
    galonesProductos: Decimal | null
    diferenciaControl: Decimal | null
    importeEsperado: Decimal | null
    importeDeclarado: Decimal | null
    diferenciaCaja: Decimal | null
  }

  export type JornadaCountAggregateOutputType = {
    id: number
    empleadoId: number
    maquinaId: number
    estacionId: number
    inicio: number
    fin: number
    estado: number
    notas: number
    totalizadorEntrada: number
    totalizadorSalida: number
    galonesTotalizador: number
    galonesProductos: number
    diferenciaControl: number
    importeEsperado: number
    importeDeclarado: number
    diferenciaCaja: number
    _all: number
  }


  export type JornadaAvgAggregateInputType = {
    id?: true
    empleadoId?: true
    maquinaId?: true
    estacionId?: true
    totalizadorEntrada?: true
    totalizadorSalida?: true
    galonesTotalizador?: true
    galonesProductos?: true
    diferenciaControl?: true
    importeEsperado?: true
    importeDeclarado?: true
    diferenciaCaja?: true
  }

  export type JornadaSumAggregateInputType = {
    id?: true
    empleadoId?: true
    maquinaId?: true
    estacionId?: true
    totalizadorEntrada?: true
    totalizadorSalida?: true
    galonesTotalizador?: true
    galonesProductos?: true
    diferenciaControl?: true
    importeEsperado?: true
    importeDeclarado?: true
    diferenciaCaja?: true
  }

  export type JornadaMinAggregateInputType = {
    id?: true
    empleadoId?: true
    maquinaId?: true
    estacionId?: true
    inicio?: true
    fin?: true
    estado?: true
    notas?: true
    totalizadorEntrada?: true
    totalizadorSalida?: true
    galonesTotalizador?: true
    galonesProductos?: true
    diferenciaControl?: true
    importeEsperado?: true
    importeDeclarado?: true
    diferenciaCaja?: true
  }

  export type JornadaMaxAggregateInputType = {
    id?: true
    empleadoId?: true
    maquinaId?: true
    estacionId?: true
    inicio?: true
    fin?: true
    estado?: true
    notas?: true
    totalizadorEntrada?: true
    totalizadorSalida?: true
    galonesTotalizador?: true
    galonesProductos?: true
    diferenciaControl?: true
    importeEsperado?: true
    importeDeclarado?: true
    diferenciaCaja?: true
  }

  export type JornadaCountAggregateInputType = {
    id?: true
    empleadoId?: true
    maquinaId?: true
    estacionId?: true
    inicio?: true
    fin?: true
    estado?: true
    notas?: true
    totalizadorEntrada?: true
    totalizadorSalida?: true
    galonesTotalizador?: true
    galonesProductos?: true
    diferenciaControl?: true
    importeEsperado?: true
    importeDeclarado?: true
    diferenciaCaja?: true
    _all?: true
  }

  export type JornadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jornada to aggregate.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jornadas
    **/
    _count?: true | JornadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JornadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JornadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JornadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JornadaMaxAggregateInputType
  }

  export type GetJornadaAggregateType<T extends JornadaAggregateArgs> = {
        [P in keyof T & keyof AggregateJornada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJornada[P]>
      : GetScalarType<T[P], AggregateJornada[P]>
  }




  export type JornadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JornadaWhereInput
    orderBy?: JornadaOrderByWithAggregationInput | JornadaOrderByWithAggregationInput[]
    by: JornadaScalarFieldEnum[] | JornadaScalarFieldEnum
    having?: JornadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JornadaCountAggregateInputType | true
    _avg?: JornadaAvgAggregateInputType
    _sum?: JornadaSumAggregateInputType
    _min?: JornadaMinAggregateInputType
    _max?: JornadaMaxAggregateInputType
  }

  export type JornadaGroupByOutputType = {
    id: number
    empleadoId: number
    maquinaId: number
    estacionId: number
    inicio: Date
    fin: Date | null
    estado: $Enums.EstadoJornada
    notas: string | null
    totalizadorEntrada: Decimal
    totalizadorSalida: Decimal | null
    galonesTotalizador: Decimal | null
    galonesProductos: Decimal | null
    diferenciaControl: Decimal | null
    importeEsperado: Decimal | null
    importeDeclarado: Decimal | null
    diferenciaCaja: Decimal | null
    _count: JornadaCountAggregateOutputType | null
    _avg: JornadaAvgAggregateOutputType | null
    _sum: JornadaSumAggregateOutputType | null
    _min: JornadaMinAggregateOutputType | null
    _max: JornadaMaxAggregateOutputType | null
  }

  type GetJornadaGroupByPayload<T extends JornadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JornadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JornadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JornadaGroupByOutputType[P]>
            : GetScalarType<T[P], JornadaGroupByOutputType[P]>
        }
      >
    >


  export type JornadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoId?: boolean
    maquinaId?: boolean
    estacionId?: boolean
    inicio?: boolean
    fin?: boolean
    estado?: boolean
    notas?: boolean
    totalizadorEntrada?: boolean
    totalizadorSalida?: boolean
    galonesTotalizador?: boolean
    galonesProductos?: boolean
    diferenciaControl?: boolean
    importeEsperado?: boolean
    importeDeclarado?: boolean
    diferenciaCaja?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    lecturas?: boolean | Jornada$lecturasArgs<ExtArgs>
    pagos?: boolean | Jornada$pagosArgs<ExtArgs>
    movimientos?: boolean | Jornada$movimientosArgs<ExtArgs>
    _count?: boolean | JornadaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoId?: boolean
    maquinaId?: boolean
    estacionId?: boolean
    inicio?: boolean
    fin?: boolean
    estado?: boolean
    notas?: boolean
    totalizadorEntrada?: boolean
    totalizadorSalida?: boolean
    galonesTotalizador?: boolean
    galonesProductos?: boolean
    diferenciaControl?: boolean
    importeEsperado?: boolean
    importeDeclarado?: boolean
    diferenciaCaja?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoId?: boolean
    maquinaId?: boolean
    estacionId?: boolean
    inicio?: boolean
    fin?: boolean
    estado?: boolean
    notas?: boolean
    totalizadorEntrada?: boolean
    totalizadorSalida?: boolean
    galonesTotalizador?: boolean
    galonesProductos?: boolean
    diferenciaControl?: boolean
    importeEsperado?: boolean
    importeDeclarado?: boolean
    diferenciaCaja?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectScalar = {
    id?: boolean
    empleadoId?: boolean
    maquinaId?: boolean
    estacionId?: boolean
    inicio?: boolean
    fin?: boolean
    estado?: boolean
    notas?: boolean
    totalizadorEntrada?: boolean
    totalizadorSalida?: boolean
    galonesTotalizador?: boolean
    galonesProductos?: boolean
    diferenciaControl?: boolean
    importeEsperado?: boolean
    importeDeclarado?: boolean
    diferenciaCaja?: boolean
  }

  export type JornadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empleadoId" | "maquinaId" | "estacionId" | "inicio" | "fin" | "estado" | "notas" | "totalizadorEntrada" | "totalizadorSalida" | "galonesTotalizador" | "galonesProductos" | "diferenciaControl" | "importeEsperado" | "importeDeclarado" | "diferenciaCaja", ExtArgs["result"]["jornada"]>
  export type JornadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
    lecturas?: boolean | Jornada$lecturasArgs<ExtArgs>
    pagos?: boolean | Jornada$pagosArgs<ExtArgs>
    movimientos?: boolean | Jornada$movimientosArgs<ExtArgs>
    _count?: boolean | JornadaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JornadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }
  export type JornadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }

  export type $JornadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jornada"
    objects: {
      empleado: Prisma.$EmpleadoPayload<ExtArgs>
      maquina: Prisma.$MaquinaPayload<ExtArgs>
      estacion: Prisma.$EstacionPayload<ExtArgs>
      lecturas: Prisma.$LecturaJornadaPayload<ExtArgs>[]
      pagos: Prisma.$PagoJornadaPayload<ExtArgs>[]
      movimientos: Prisma.$MovimientoStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empleadoId: number
      maquinaId: number
      estacionId: number
      inicio: Date
      fin: Date | null
      estado: $Enums.EstadoJornada
      notas: string | null
      totalizadorEntrada: Prisma.Decimal
      totalizadorSalida: Prisma.Decimal | null
      galonesTotalizador: Prisma.Decimal | null
      galonesProductos: Prisma.Decimal | null
      diferenciaControl: Prisma.Decimal | null
      importeEsperado: Prisma.Decimal | null
      importeDeclarado: Prisma.Decimal | null
      diferenciaCaja: Prisma.Decimal | null
    }, ExtArgs["result"]["jornada"]>
    composites: {}
  }

  type JornadaGetPayload<S extends boolean | null | undefined | JornadaDefaultArgs> = $Result.GetResult<Prisma.$JornadaPayload, S>

  type JornadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JornadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JornadaCountAggregateInputType | true
    }

  export interface JornadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jornada'], meta: { name: 'Jornada' } }
    /**
     * Find zero or one Jornada that matches the filter.
     * @param {JornadaFindUniqueArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JornadaFindUniqueArgs>(args: SelectSubset<T, JornadaFindUniqueArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jornada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JornadaFindUniqueOrThrowArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JornadaFindUniqueOrThrowArgs>(args: SelectSubset<T, JornadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jornada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindFirstArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JornadaFindFirstArgs>(args?: SelectSubset<T, JornadaFindFirstArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jornada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindFirstOrThrowArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JornadaFindFirstOrThrowArgs>(args?: SelectSubset<T, JornadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jornadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jornadas
     * const jornadas = await prisma.jornada.findMany()
     * 
     * // Get first 10 Jornadas
     * const jornadas = await prisma.jornada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jornadaWithIdOnly = await prisma.jornada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JornadaFindManyArgs>(args?: SelectSubset<T, JornadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jornada.
     * @param {JornadaCreateArgs} args - Arguments to create a Jornada.
     * @example
     * // Create one Jornada
     * const Jornada = await prisma.jornada.create({
     *   data: {
     *     // ... data to create a Jornada
     *   }
     * })
     * 
     */
    create<T extends JornadaCreateArgs>(args: SelectSubset<T, JornadaCreateArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jornadas.
     * @param {JornadaCreateManyArgs} args - Arguments to create many Jornadas.
     * @example
     * // Create many Jornadas
     * const jornada = await prisma.jornada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JornadaCreateManyArgs>(args?: SelectSubset<T, JornadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jornadas and returns the data saved in the database.
     * @param {JornadaCreateManyAndReturnArgs} args - Arguments to create many Jornadas.
     * @example
     * // Create many Jornadas
     * const jornada = await prisma.jornada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jornadas and only return the `id`
     * const jornadaWithIdOnly = await prisma.jornada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JornadaCreateManyAndReturnArgs>(args?: SelectSubset<T, JornadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jornada.
     * @param {JornadaDeleteArgs} args - Arguments to delete one Jornada.
     * @example
     * // Delete one Jornada
     * const Jornada = await prisma.jornada.delete({
     *   where: {
     *     // ... filter to delete one Jornada
     *   }
     * })
     * 
     */
    delete<T extends JornadaDeleteArgs>(args: SelectSubset<T, JornadaDeleteArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jornada.
     * @param {JornadaUpdateArgs} args - Arguments to update one Jornada.
     * @example
     * // Update one Jornada
     * const jornada = await prisma.jornada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JornadaUpdateArgs>(args: SelectSubset<T, JornadaUpdateArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jornadas.
     * @param {JornadaDeleteManyArgs} args - Arguments to filter Jornadas to delete.
     * @example
     * // Delete a few Jornadas
     * const { count } = await prisma.jornada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JornadaDeleteManyArgs>(args?: SelectSubset<T, JornadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jornadas
     * const jornada = await prisma.jornada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JornadaUpdateManyArgs>(args: SelectSubset<T, JornadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jornadas and returns the data updated in the database.
     * @param {JornadaUpdateManyAndReturnArgs} args - Arguments to update many Jornadas.
     * @example
     * // Update many Jornadas
     * const jornada = await prisma.jornada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jornadas and only return the `id`
     * const jornadaWithIdOnly = await prisma.jornada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JornadaUpdateManyAndReturnArgs>(args: SelectSubset<T, JornadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jornada.
     * @param {JornadaUpsertArgs} args - Arguments to update or create a Jornada.
     * @example
     * // Update or create a Jornada
     * const jornada = await prisma.jornada.upsert({
     *   create: {
     *     // ... data to create a Jornada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jornada we want to update
     *   }
     * })
     */
    upsert<T extends JornadaUpsertArgs>(args: SelectSubset<T, JornadaUpsertArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaCountArgs} args - Arguments to filter Jornadas to count.
     * @example
     * // Count the number of Jornadas
     * const count = await prisma.jornada.count({
     *   where: {
     *     // ... the filter for the Jornadas we want to count
     *   }
     * })
    **/
    count<T extends JornadaCountArgs>(
      args?: Subset<T, JornadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JornadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JornadaAggregateArgs>(args: Subset<T, JornadaAggregateArgs>): Prisma.PrismaPromise<GetJornadaAggregateType<T>>

    /**
     * Group by Jornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaGroupByArgs} args - Group by arguments.
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
      T extends JornadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JornadaGroupByArgs['orderBy'] }
        : { orderBy?: JornadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JornadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJornadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jornada model
   */
  readonly fields: JornadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jornada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JornadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends EmpleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpleadoDefaultArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    maquina<T extends MaquinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaquinaDefaultArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estacion<T extends EstacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstacionDefaultArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecturas<T extends Jornada$lecturasArgs<ExtArgs> = {}>(args?: Subset<T, Jornada$lecturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagos<T extends Jornada$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Jornada$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimientos<T extends Jornada$movimientosArgs<ExtArgs> = {}>(args?: Subset<T, Jornada$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Jornada model
   */
  interface JornadaFieldRefs {
    readonly id: FieldRef<"Jornada", 'Int'>
    readonly empleadoId: FieldRef<"Jornada", 'Int'>
    readonly maquinaId: FieldRef<"Jornada", 'Int'>
    readonly estacionId: FieldRef<"Jornada", 'Int'>
    readonly inicio: FieldRef<"Jornada", 'DateTime'>
    readonly fin: FieldRef<"Jornada", 'DateTime'>
    readonly estado: FieldRef<"Jornada", 'EstadoJornada'>
    readonly notas: FieldRef<"Jornada", 'String'>
    readonly totalizadorEntrada: FieldRef<"Jornada", 'Decimal'>
    readonly totalizadorSalida: FieldRef<"Jornada", 'Decimal'>
    readonly galonesTotalizador: FieldRef<"Jornada", 'Decimal'>
    readonly galonesProductos: FieldRef<"Jornada", 'Decimal'>
    readonly diferenciaControl: FieldRef<"Jornada", 'Decimal'>
    readonly importeEsperado: FieldRef<"Jornada", 'Decimal'>
    readonly importeDeclarado: FieldRef<"Jornada", 'Decimal'>
    readonly diferenciaCaja: FieldRef<"Jornada", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Jornada findUnique
   */
  export type JornadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada findUniqueOrThrow
   */
  export type JornadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada findFirst
   */
  export type JornadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jornadas.
     */
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada findFirstOrThrow
   */
  export type JornadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jornadas.
     */
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada findMany
   */
  export type JornadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornadas to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada create
   */
  export type JornadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * The data needed to create a Jornada.
     */
    data: XOR<JornadaCreateInput, JornadaUncheckedCreateInput>
  }

  /**
   * Jornada createMany
   */
  export type JornadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jornadas.
     */
    data: JornadaCreateManyInput | JornadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jornada createManyAndReturn
   */
  export type JornadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The data used to create many Jornadas.
     */
    data: JornadaCreateManyInput | JornadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jornada update
   */
  export type JornadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * The data needed to update a Jornada.
     */
    data: XOR<JornadaUpdateInput, JornadaUncheckedUpdateInput>
    /**
     * Choose, which Jornada to update.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada updateMany
   */
  export type JornadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jornadas.
     */
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyInput>
    /**
     * Filter which Jornadas to update
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to update.
     */
    limit?: number
  }

  /**
   * Jornada updateManyAndReturn
   */
  export type JornadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The data used to update Jornadas.
     */
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyInput>
    /**
     * Filter which Jornadas to update
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jornada upsert
   */
  export type JornadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * The filter to search for the Jornada to update in case it exists.
     */
    where: JornadaWhereUniqueInput
    /**
     * In case the Jornada found by the `where` argument doesn't exist, create a new Jornada with this data.
     */
    create: XOR<JornadaCreateInput, JornadaUncheckedCreateInput>
    /**
     * In case the Jornada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JornadaUpdateInput, JornadaUncheckedUpdateInput>
  }

  /**
   * Jornada delete
   */
  export type JornadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter which Jornada to delete.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada deleteMany
   */
  export type JornadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jornadas to delete
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to delete.
     */
    limit?: number
  }

  /**
   * Jornada.lecturas
   */
  export type Jornada$lecturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    where?: LecturaJornadaWhereInput
    orderBy?: LecturaJornadaOrderByWithRelationInput | LecturaJornadaOrderByWithRelationInput[]
    cursor?: LecturaJornadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturaJornadaScalarFieldEnum | LecturaJornadaScalarFieldEnum[]
  }

  /**
   * Jornada.pagos
   */
  export type Jornada$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    where?: PagoJornadaWhereInput
    orderBy?: PagoJornadaOrderByWithRelationInput | PagoJornadaOrderByWithRelationInput[]
    cursor?: PagoJornadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoJornadaScalarFieldEnum | PagoJornadaScalarFieldEnum[]
  }

  /**
   * Jornada.movimientos
   */
  export type Jornada$movimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    where?: MovimientoStockWhereInput
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    cursor?: MovimientoStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * Jornada without action
   */
  export type JornadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
  }


  /**
   * Model LecturaJornada
   */

  export type AggregateLecturaJornada = {
    _count: LecturaJornadaCountAggregateOutputType | null
    _avg: LecturaJornadaAvgAggregateOutputType | null
    _sum: LecturaJornadaSumAggregateOutputType | null
    _min: LecturaJornadaMinAggregateOutputType | null
    _max: LecturaJornadaMaxAggregateOutputType | null
  }

  export type LecturaJornadaAvgAggregateOutputType = {
    id: number | null
    jornadaId: number | null
    combustibleId: number | null
    entradaAtras: Decimal | null
    entradaAdelante: Decimal | null
    salidaAtras: Decimal | null
    salidaAdelante: Decimal | null
    galones: Decimal | null
    precioUnitario: Decimal | null
    importe: Decimal | null
  }

  export type LecturaJornadaSumAggregateOutputType = {
    id: number | null
    jornadaId: number | null
    combustibleId: number | null
    entradaAtras: Decimal | null
    entradaAdelante: Decimal | null
    salidaAtras: Decimal | null
    salidaAdelante: Decimal | null
    galones: Decimal | null
    precioUnitario: Decimal | null
    importe: Decimal | null
  }

  export type LecturaJornadaMinAggregateOutputType = {
    id: number | null
    jornadaId: number | null
    combustibleId: number | null
    entradaAtras: Decimal | null
    entradaAdelante: Decimal | null
    salidaAtras: Decimal | null
    salidaAdelante: Decimal | null
    huboReinicio: boolean | null
    galones: Decimal | null
    precioUnitario: Decimal | null
    importe: Decimal | null
  }

  export type LecturaJornadaMaxAggregateOutputType = {
    id: number | null
    jornadaId: number | null
    combustibleId: number | null
    entradaAtras: Decimal | null
    entradaAdelante: Decimal | null
    salidaAtras: Decimal | null
    salidaAdelante: Decimal | null
    huboReinicio: boolean | null
    galones: Decimal | null
    precioUnitario: Decimal | null
    importe: Decimal | null
  }

  export type LecturaJornadaCountAggregateOutputType = {
    id: number
    jornadaId: number
    combustibleId: number
    entradaAtras: number
    entradaAdelante: number
    salidaAtras: number
    salidaAdelante: number
    huboReinicio: number
    galones: number
    precioUnitario: number
    importe: number
    _all: number
  }


  export type LecturaJornadaAvgAggregateInputType = {
    id?: true
    jornadaId?: true
    combustibleId?: true
    entradaAtras?: true
    entradaAdelante?: true
    salidaAtras?: true
    salidaAdelante?: true
    galones?: true
    precioUnitario?: true
    importe?: true
  }

  export type LecturaJornadaSumAggregateInputType = {
    id?: true
    jornadaId?: true
    combustibleId?: true
    entradaAtras?: true
    entradaAdelante?: true
    salidaAtras?: true
    salidaAdelante?: true
    galones?: true
    precioUnitario?: true
    importe?: true
  }

  export type LecturaJornadaMinAggregateInputType = {
    id?: true
    jornadaId?: true
    combustibleId?: true
    entradaAtras?: true
    entradaAdelante?: true
    salidaAtras?: true
    salidaAdelante?: true
    huboReinicio?: true
    galones?: true
    precioUnitario?: true
    importe?: true
  }

  export type LecturaJornadaMaxAggregateInputType = {
    id?: true
    jornadaId?: true
    combustibleId?: true
    entradaAtras?: true
    entradaAdelante?: true
    salidaAtras?: true
    salidaAdelante?: true
    huboReinicio?: true
    galones?: true
    precioUnitario?: true
    importe?: true
  }

  export type LecturaJornadaCountAggregateInputType = {
    id?: true
    jornadaId?: true
    combustibleId?: true
    entradaAtras?: true
    entradaAdelante?: true
    salidaAtras?: true
    salidaAdelante?: true
    huboReinicio?: true
    galones?: true
    precioUnitario?: true
    importe?: true
    _all?: true
  }

  export type LecturaJornadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturaJornada to aggregate.
     */
    where?: LecturaJornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturaJornadas to fetch.
     */
    orderBy?: LecturaJornadaOrderByWithRelationInput | LecturaJornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturaJornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturaJornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturaJornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LecturaJornadas
    **/
    _count?: true | LecturaJornadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecturaJornadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecturaJornadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturaJornadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturaJornadaMaxAggregateInputType
  }

  export type GetLecturaJornadaAggregateType<T extends LecturaJornadaAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturaJornada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturaJornada[P]>
      : GetScalarType<T[P], AggregateLecturaJornada[P]>
  }




  export type LecturaJornadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturaJornadaWhereInput
    orderBy?: LecturaJornadaOrderByWithAggregationInput | LecturaJornadaOrderByWithAggregationInput[]
    by: LecturaJornadaScalarFieldEnum[] | LecturaJornadaScalarFieldEnum
    having?: LecturaJornadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturaJornadaCountAggregateInputType | true
    _avg?: LecturaJornadaAvgAggregateInputType
    _sum?: LecturaJornadaSumAggregateInputType
    _min?: LecturaJornadaMinAggregateInputType
    _max?: LecturaJornadaMaxAggregateInputType
  }

  export type LecturaJornadaGroupByOutputType = {
    id: number
    jornadaId: number
    combustibleId: number
    entradaAtras: Decimal
    entradaAdelante: Decimal
    salidaAtras: Decimal | null
    salidaAdelante: Decimal | null
    huboReinicio: boolean
    galones: Decimal | null
    precioUnitario: Decimal | null
    importe: Decimal | null
    _count: LecturaJornadaCountAggregateOutputType | null
    _avg: LecturaJornadaAvgAggregateOutputType | null
    _sum: LecturaJornadaSumAggregateOutputType | null
    _min: LecturaJornadaMinAggregateOutputType | null
    _max: LecturaJornadaMaxAggregateOutputType | null
  }

  type GetLecturaJornadaGroupByPayload<T extends LecturaJornadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturaJornadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturaJornadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturaJornadaGroupByOutputType[P]>
            : GetScalarType<T[P], LecturaJornadaGroupByOutputType[P]>
        }
      >
    >


  export type LecturaJornadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jornadaId?: boolean
    combustibleId?: boolean
    entradaAtras?: boolean
    entradaAdelante?: boolean
    salidaAtras?: boolean
    salidaAdelante?: boolean
    huboReinicio?: boolean
    galones?: boolean
    precioUnitario?: boolean
    importe?: boolean
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturaJornada"]>

  export type LecturaJornadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jornadaId?: boolean
    combustibleId?: boolean
    entradaAtras?: boolean
    entradaAdelante?: boolean
    salidaAtras?: boolean
    salidaAdelante?: boolean
    huboReinicio?: boolean
    galones?: boolean
    precioUnitario?: boolean
    importe?: boolean
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturaJornada"]>

  export type LecturaJornadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jornadaId?: boolean
    combustibleId?: boolean
    entradaAtras?: boolean
    entradaAdelante?: boolean
    salidaAtras?: boolean
    salidaAdelante?: boolean
    huboReinicio?: boolean
    galones?: boolean
    precioUnitario?: boolean
    importe?: boolean
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturaJornada"]>

  export type LecturaJornadaSelectScalar = {
    id?: boolean
    jornadaId?: boolean
    combustibleId?: boolean
    entradaAtras?: boolean
    entradaAdelante?: boolean
    salidaAtras?: boolean
    salidaAdelante?: boolean
    huboReinicio?: boolean
    galones?: boolean
    precioUnitario?: boolean
    importe?: boolean
  }

  export type LecturaJornadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jornadaId" | "combustibleId" | "entradaAtras" | "entradaAdelante" | "salidaAtras" | "salidaAdelante" | "huboReinicio" | "galones" | "precioUnitario" | "importe", ExtArgs["result"]["lecturaJornada"]>
  export type LecturaJornadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }
  export type LecturaJornadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }
  export type LecturaJornadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
    combustible?: boolean | CombustibleDefaultArgs<ExtArgs>
  }

  export type $LecturaJornadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LecturaJornada"
    objects: {
      jornada: Prisma.$JornadaPayload<ExtArgs>
      combustible: Prisma.$CombustiblePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jornadaId: number
      combustibleId: number
      entradaAtras: Prisma.Decimal
      entradaAdelante: Prisma.Decimal
      salidaAtras: Prisma.Decimal | null
      salidaAdelante: Prisma.Decimal | null
      huboReinicio: boolean
      galones: Prisma.Decimal | null
      precioUnitario: Prisma.Decimal | null
      importe: Prisma.Decimal | null
    }, ExtArgs["result"]["lecturaJornada"]>
    composites: {}
  }

  type LecturaJornadaGetPayload<S extends boolean | null | undefined | LecturaJornadaDefaultArgs> = $Result.GetResult<Prisma.$LecturaJornadaPayload, S>

  type LecturaJornadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecturaJornadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecturaJornadaCountAggregateInputType | true
    }

  export interface LecturaJornadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LecturaJornada'], meta: { name: 'LecturaJornada' } }
    /**
     * Find zero or one LecturaJornada that matches the filter.
     * @param {LecturaJornadaFindUniqueArgs} args - Arguments to find a LecturaJornada
     * @example
     * // Get one LecturaJornada
     * const lecturaJornada = await prisma.lecturaJornada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturaJornadaFindUniqueArgs>(args: SelectSubset<T, LecturaJornadaFindUniqueArgs<ExtArgs>>): Prisma__LecturaJornadaClient<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LecturaJornada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecturaJornadaFindUniqueOrThrowArgs} args - Arguments to find a LecturaJornada
     * @example
     * // Get one LecturaJornada
     * const lecturaJornada = await prisma.lecturaJornada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturaJornadaFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturaJornadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturaJornadaClient<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturaJornada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturaJornadaFindFirstArgs} args - Arguments to find a LecturaJornada
     * @example
     * // Get one LecturaJornada
     * const lecturaJornada = await prisma.lecturaJornada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturaJornadaFindFirstArgs>(args?: SelectSubset<T, LecturaJornadaFindFirstArgs<ExtArgs>>): Prisma__LecturaJornadaClient<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturaJornada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturaJornadaFindFirstOrThrowArgs} args - Arguments to find a LecturaJornada
     * @example
     * // Get one LecturaJornada
     * const lecturaJornada = await prisma.lecturaJornada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturaJornadaFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturaJornadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturaJornadaClient<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LecturaJornadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturaJornadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LecturaJornadas
     * const lecturaJornadas = await prisma.lecturaJornada.findMany()
     * 
     * // Get first 10 LecturaJornadas
     * const lecturaJornadas = await prisma.lecturaJornada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturaJornadaWithIdOnly = await prisma.lecturaJornada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturaJornadaFindManyArgs>(args?: SelectSubset<T, LecturaJornadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LecturaJornada.
     * @param {LecturaJornadaCreateArgs} args - Arguments to create a LecturaJornada.
     * @example
     * // Create one LecturaJornada
     * const LecturaJornada = await prisma.lecturaJornada.create({
     *   data: {
     *     // ... data to create a LecturaJornada
     *   }
     * })
     * 
     */
    create<T extends LecturaJornadaCreateArgs>(args: SelectSubset<T, LecturaJornadaCreateArgs<ExtArgs>>): Prisma__LecturaJornadaClient<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LecturaJornadas.
     * @param {LecturaJornadaCreateManyArgs} args - Arguments to create many LecturaJornadas.
     * @example
     * // Create many LecturaJornadas
     * const lecturaJornada = await prisma.lecturaJornada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturaJornadaCreateManyArgs>(args?: SelectSubset<T, LecturaJornadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LecturaJornadas and returns the data saved in the database.
     * @param {LecturaJornadaCreateManyAndReturnArgs} args - Arguments to create many LecturaJornadas.
     * @example
     * // Create many LecturaJornadas
     * const lecturaJornada = await prisma.lecturaJornada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LecturaJornadas and only return the `id`
     * const lecturaJornadaWithIdOnly = await prisma.lecturaJornada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LecturaJornadaCreateManyAndReturnArgs>(args?: SelectSubset<T, LecturaJornadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LecturaJornada.
     * @param {LecturaJornadaDeleteArgs} args - Arguments to delete one LecturaJornada.
     * @example
     * // Delete one LecturaJornada
     * const LecturaJornada = await prisma.lecturaJornada.delete({
     *   where: {
     *     // ... filter to delete one LecturaJornada
     *   }
     * })
     * 
     */
    delete<T extends LecturaJornadaDeleteArgs>(args: SelectSubset<T, LecturaJornadaDeleteArgs<ExtArgs>>): Prisma__LecturaJornadaClient<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LecturaJornada.
     * @param {LecturaJornadaUpdateArgs} args - Arguments to update one LecturaJornada.
     * @example
     * // Update one LecturaJornada
     * const lecturaJornada = await prisma.lecturaJornada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturaJornadaUpdateArgs>(args: SelectSubset<T, LecturaJornadaUpdateArgs<ExtArgs>>): Prisma__LecturaJornadaClient<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LecturaJornadas.
     * @param {LecturaJornadaDeleteManyArgs} args - Arguments to filter LecturaJornadas to delete.
     * @example
     * // Delete a few LecturaJornadas
     * const { count } = await prisma.lecturaJornada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturaJornadaDeleteManyArgs>(args?: SelectSubset<T, LecturaJornadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LecturaJornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturaJornadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LecturaJornadas
     * const lecturaJornada = await prisma.lecturaJornada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturaJornadaUpdateManyArgs>(args: SelectSubset<T, LecturaJornadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LecturaJornadas and returns the data updated in the database.
     * @param {LecturaJornadaUpdateManyAndReturnArgs} args - Arguments to update many LecturaJornadas.
     * @example
     * // Update many LecturaJornadas
     * const lecturaJornada = await prisma.lecturaJornada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LecturaJornadas and only return the `id`
     * const lecturaJornadaWithIdOnly = await prisma.lecturaJornada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LecturaJornadaUpdateManyAndReturnArgs>(args: SelectSubset<T, LecturaJornadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LecturaJornada.
     * @param {LecturaJornadaUpsertArgs} args - Arguments to update or create a LecturaJornada.
     * @example
     * // Update or create a LecturaJornada
     * const lecturaJornada = await prisma.lecturaJornada.upsert({
     *   create: {
     *     // ... data to create a LecturaJornada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LecturaJornada we want to update
     *   }
     * })
     */
    upsert<T extends LecturaJornadaUpsertArgs>(args: SelectSubset<T, LecturaJornadaUpsertArgs<ExtArgs>>): Prisma__LecturaJornadaClient<$Result.GetResult<Prisma.$LecturaJornadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LecturaJornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturaJornadaCountArgs} args - Arguments to filter LecturaJornadas to count.
     * @example
     * // Count the number of LecturaJornadas
     * const count = await prisma.lecturaJornada.count({
     *   where: {
     *     // ... the filter for the LecturaJornadas we want to count
     *   }
     * })
    **/
    count<T extends LecturaJornadaCountArgs>(
      args?: Subset<T, LecturaJornadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturaJornadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LecturaJornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturaJornadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecturaJornadaAggregateArgs>(args: Subset<T, LecturaJornadaAggregateArgs>): Prisma.PrismaPromise<GetLecturaJornadaAggregateType<T>>

    /**
     * Group by LecturaJornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturaJornadaGroupByArgs} args - Group by arguments.
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
      T extends LecturaJornadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturaJornadaGroupByArgs['orderBy'] }
        : { orderBy?: LecturaJornadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LecturaJornadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturaJornadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LecturaJornada model
   */
  readonly fields: LecturaJornadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LecturaJornada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturaJornadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jornada<T extends JornadaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JornadaDefaultArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    combustible<T extends CombustibleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CombustibleDefaultArgs<ExtArgs>>): Prisma__CombustibleClient<$Result.GetResult<Prisma.$CombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LecturaJornada model
   */
  interface LecturaJornadaFieldRefs {
    readonly id: FieldRef<"LecturaJornada", 'Int'>
    readonly jornadaId: FieldRef<"LecturaJornada", 'Int'>
    readonly combustibleId: FieldRef<"LecturaJornada", 'Int'>
    readonly entradaAtras: FieldRef<"LecturaJornada", 'Decimal'>
    readonly entradaAdelante: FieldRef<"LecturaJornada", 'Decimal'>
    readonly salidaAtras: FieldRef<"LecturaJornada", 'Decimal'>
    readonly salidaAdelante: FieldRef<"LecturaJornada", 'Decimal'>
    readonly huboReinicio: FieldRef<"LecturaJornada", 'Boolean'>
    readonly galones: FieldRef<"LecturaJornada", 'Decimal'>
    readonly precioUnitario: FieldRef<"LecturaJornada", 'Decimal'>
    readonly importe: FieldRef<"LecturaJornada", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * LecturaJornada findUnique
   */
  export type LecturaJornadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * Filter, which LecturaJornada to fetch.
     */
    where: LecturaJornadaWhereUniqueInput
  }

  /**
   * LecturaJornada findUniqueOrThrow
   */
  export type LecturaJornadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * Filter, which LecturaJornada to fetch.
     */
    where: LecturaJornadaWhereUniqueInput
  }

  /**
   * LecturaJornada findFirst
   */
  export type LecturaJornadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * Filter, which LecturaJornada to fetch.
     */
    where?: LecturaJornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturaJornadas to fetch.
     */
    orderBy?: LecturaJornadaOrderByWithRelationInput | LecturaJornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturaJornadas.
     */
    cursor?: LecturaJornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturaJornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturaJornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturaJornadas.
     */
    distinct?: LecturaJornadaScalarFieldEnum | LecturaJornadaScalarFieldEnum[]
  }

  /**
   * LecturaJornada findFirstOrThrow
   */
  export type LecturaJornadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * Filter, which LecturaJornada to fetch.
     */
    where?: LecturaJornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturaJornadas to fetch.
     */
    orderBy?: LecturaJornadaOrderByWithRelationInput | LecturaJornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturaJornadas.
     */
    cursor?: LecturaJornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturaJornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturaJornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturaJornadas.
     */
    distinct?: LecturaJornadaScalarFieldEnum | LecturaJornadaScalarFieldEnum[]
  }

  /**
   * LecturaJornada findMany
   */
  export type LecturaJornadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * Filter, which LecturaJornadas to fetch.
     */
    where?: LecturaJornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturaJornadas to fetch.
     */
    orderBy?: LecturaJornadaOrderByWithRelationInput | LecturaJornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LecturaJornadas.
     */
    cursor?: LecturaJornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturaJornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturaJornadas.
     */
    skip?: number
    distinct?: LecturaJornadaScalarFieldEnum | LecturaJornadaScalarFieldEnum[]
  }

  /**
   * LecturaJornada create
   */
  export type LecturaJornadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * The data needed to create a LecturaJornada.
     */
    data: XOR<LecturaJornadaCreateInput, LecturaJornadaUncheckedCreateInput>
  }

  /**
   * LecturaJornada createMany
   */
  export type LecturaJornadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LecturaJornadas.
     */
    data: LecturaJornadaCreateManyInput | LecturaJornadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LecturaJornada createManyAndReturn
   */
  export type LecturaJornadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * The data used to create many LecturaJornadas.
     */
    data: LecturaJornadaCreateManyInput | LecturaJornadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LecturaJornada update
   */
  export type LecturaJornadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * The data needed to update a LecturaJornada.
     */
    data: XOR<LecturaJornadaUpdateInput, LecturaJornadaUncheckedUpdateInput>
    /**
     * Choose, which LecturaJornada to update.
     */
    where: LecturaJornadaWhereUniqueInput
  }

  /**
   * LecturaJornada updateMany
   */
  export type LecturaJornadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LecturaJornadas.
     */
    data: XOR<LecturaJornadaUpdateManyMutationInput, LecturaJornadaUncheckedUpdateManyInput>
    /**
     * Filter which LecturaJornadas to update
     */
    where?: LecturaJornadaWhereInput
    /**
     * Limit how many LecturaJornadas to update.
     */
    limit?: number
  }

  /**
   * LecturaJornada updateManyAndReturn
   */
  export type LecturaJornadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * The data used to update LecturaJornadas.
     */
    data: XOR<LecturaJornadaUpdateManyMutationInput, LecturaJornadaUncheckedUpdateManyInput>
    /**
     * Filter which LecturaJornadas to update
     */
    where?: LecturaJornadaWhereInput
    /**
     * Limit how many LecturaJornadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LecturaJornada upsert
   */
  export type LecturaJornadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * The filter to search for the LecturaJornada to update in case it exists.
     */
    where: LecturaJornadaWhereUniqueInput
    /**
     * In case the LecturaJornada found by the `where` argument doesn't exist, create a new LecturaJornada with this data.
     */
    create: XOR<LecturaJornadaCreateInput, LecturaJornadaUncheckedCreateInput>
    /**
     * In case the LecturaJornada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturaJornadaUpdateInput, LecturaJornadaUncheckedUpdateInput>
  }

  /**
   * LecturaJornada delete
   */
  export type LecturaJornadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
    /**
     * Filter which LecturaJornada to delete.
     */
    where: LecturaJornadaWhereUniqueInput
  }

  /**
   * LecturaJornada deleteMany
   */
  export type LecturaJornadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturaJornadas to delete
     */
    where?: LecturaJornadaWhereInput
    /**
     * Limit how many LecturaJornadas to delete.
     */
    limit?: number
  }

  /**
   * LecturaJornada without action
   */
  export type LecturaJornadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturaJornada
     */
    select?: LecturaJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturaJornada
     */
    omit?: LecturaJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturaJornadaInclude<ExtArgs> | null
  }


  /**
   * Model PagoJornada
   */

  export type AggregatePagoJornada = {
    _count: PagoJornadaCountAggregateOutputType | null
    _avg: PagoJornadaAvgAggregateOutputType | null
    _sum: PagoJornadaSumAggregateOutputType | null
    _min: PagoJornadaMinAggregateOutputType | null
    _max: PagoJornadaMaxAggregateOutputType | null
  }

  export type PagoJornadaAvgAggregateOutputType = {
    id: number | null
    jornadaId: number | null
    monto: Decimal | null
  }

  export type PagoJornadaSumAggregateOutputType = {
    id: number | null
    jornadaId: number | null
    monto: Decimal | null
  }

  export type PagoJornadaMinAggregateOutputType = {
    id: number | null
    jornadaId: number | null
    medio: $Enums.MedioPago | null
    monto: Decimal | null
    nota: string | null
  }

  export type PagoJornadaMaxAggregateOutputType = {
    id: number | null
    jornadaId: number | null
    medio: $Enums.MedioPago | null
    monto: Decimal | null
    nota: string | null
  }

  export type PagoJornadaCountAggregateOutputType = {
    id: number
    jornadaId: number
    medio: number
    monto: number
    nota: number
    _all: number
  }


  export type PagoJornadaAvgAggregateInputType = {
    id?: true
    jornadaId?: true
    monto?: true
  }

  export type PagoJornadaSumAggregateInputType = {
    id?: true
    jornadaId?: true
    monto?: true
  }

  export type PagoJornadaMinAggregateInputType = {
    id?: true
    jornadaId?: true
    medio?: true
    monto?: true
    nota?: true
  }

  export type PagoJornadaMaxAggregateInputType = {
    id?: true
    jornadaId?: true
    medio?: true
    monto?: true
    nota?: true
  }

  export type PagoJornadaCountAggregateInputType = {
    id?: true
    jornadaId?: true
    medio?: true
    monto?: true
    nota?: true
    _all?: true
  }

  export type PagoJornadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoJornada to aggregate.
     */
    where?: PagoJornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoJornadas to fetch.
     */
    orderBy?: PagoJornadaOrderByWithRelationInput | PagoJornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoJornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoJornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoJornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagoJornadas
    **/
    _count?: true | PagoJornadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoJornadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoJornadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoJornadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoJornadaMaxAggregateInputType
  }

  export type GetPagoJornadaAggregateType<T extends PagoJornadaAggregateArgs> = {
        [P in keyof T & keyof AggregatePagoJornada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagoJornada[P]>
      : GetScalarType<T[P], AggregatePagoJornada[P]>
  }




  export type PagoJornadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoJornadaWhereInput
    orderBy?: PagoJornadaOrderByWithAggregationInput | PagoJornadaOrderByWithAggregationInput[]
    by: PagoJornadaScalarFieldEnum[] | PagoJornadaScalarFieldEnum
    having?: PagoJornadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoJornadaCountAggregateInputType | true
    _avg?: PagoJornadaAvgAggregateInputType
    _sum?: PagoJornadaSumAggregateInputType
    _min?: PagoJornadaMinAggregateInputType
    _max?: PagoJornadaMaxAggregateInputType
  }

  export type PagoJornadaGroupByOutputType = {
    id: number
    jornadaId: number
    medio: $Enums.MedioPago
    monto: Decimal
    nota: string | null
    _count: PagoJornadaCountAggregateOutputType | null
    _avg: PagoJornadaAvgAggregateOutputType | null
    _sum: PagoJornadaSumAggregateOutputType | null
    _min: PagoJornadaMinAggregateOutputType | null
    _max: PagoJornadaMaxAggregateOutputType | null
  }

  type GetPagoJornadaGroupByPayload<T extends PagoJornadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoJornadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoJornadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoJornadaGroupByOutputType[P]>
            : GetScalarType<T[P], PagoJornadaGroupByOutputType[P]>
        }
      >
    >


  export type PagoJornadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jornadaId?: boolean
    medio?: boolean
    monto?: boolean
    nota?: boolean
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoJornada"]>

  export type PagoJornadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jornadaId?: boolean
    medio?: boolean
    monto?: boolean
    nota?: boolean
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoJornada"]>

  export type PagoJornadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jornadaId?: boolean
    medio?: boolean
    monto?: boolean
    nota?: boolean
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoJornada"]>

  export type PagoJornadaSelectScalar = {
    id?: boolean
    jornadaId?: boolean
    medio?: boolean
    monto?: boolean
    nota?: boolean
  }

  export type PagoJornadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jornadaId" | "medio" | "monto" | "nota", ExtArgs["result"]["pagoJornada"]>
  export type PagoJornadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
  }
  export type PagoJornadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
  }
  export type PagoJornadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jornada?: boolean | JornadaDefaultArgs<ExtArgs>
  }

  export type $PagoJornadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagoJornada"
    objects: {
      jornada: Prisma.$JornadaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jornadaId: number
      medio: $Enums.MedioPago
      monto: Prisma.Decimal
      nota: string | null
    }, ExtArgs["result"]["pagoJornada"]>
    composites: {}
  }

  type PagoJornadaGetPayload<S extends boolean | null | undefined | PagoJornadaDefaultArgs> = $Result.GetResult<Prisma.$PagoJornadaPayload, S>

  type PagoJornadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagoJornadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoJornadaCountAggregateInputType | true
    }

  export interface PagoJornadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagoJornada'], meta: { name: 'PagoJornada' } }
    /**
     * Find zero or one PagoJornada that matches the filter.
     * @param {PagoJornadaFindUniqueArgs} args - Arguments to find a PagoJornada
     * @example
     * // Get one PagoJornada
     * const pagoJornada = await prisma.pagoJornada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoJornadaFindUniqueArgs>(args: SelectSubset<T, PagoJornadaFindUniqueArgs<ExtArgs>>): Prisma__PagoJornadaClient<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PagoJornada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagoJornadaFindUniqueOrThrowArgs} args - Arguments to find a PagoJornada
     * @example
     * // Get one PagoJornada
     * const pagoJornada = await prisma.pagoJornada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoJornadaFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoJornadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoJornadaClient<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagoJornada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoJornadaFindFirstArgs} args - Arguments to find a PagoJornada
     * @example
     * // Get one PagoJornada
     * const pagoJornada = await prisma.pagoJornada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoJornadaFindFirstArgs>(args?: SelectSubset<T, PagoJornadaFindFirstArgs<ExtArgs>>): Prisma__PagoJornadaClient<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagoJornada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoJornadaFindFirstOrThrowArgs} args - Arguments to find a PagoJornada
     * @example
     * // Get one PagoJornada
     * const pagoJornada = await prisma.pagoJornada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoJornadaFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoJornadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoJornadaClient<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PagoJornadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoJornadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagoJornadas
     * const pagoJornadas = await prisma.pagoJornada.findMany()
     * 
     * // Get first 10 PagoJornadas
     * const pagoJornadas = await prisma.pagoJornada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoJornadaWithIdOnly = await prisma.pagoJornada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoJornadaFindManyArgs>(args?: SelectSubset<T, PagoJornadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PagoJornada.
     * @param {PagoJornadaCreateArgs} args - Arguments to create a PagoJornada.
     * @example
     * // Create one PagoJornada
     * const PagoJornada = await prisma.pagoJornada.create({
     *   data: {
     *     // ... data to create a PagoJornada
     *   }
     * })
     * 
     */
    create<T extends PagoJornadaCreateArgs>(args: SelectSubset<T, PagoJornadaCreateArgs<ExtArgs>>): Prisma__PagoJornadaClient<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PagoJornadas.
     * @param {PagoJornadaCreateManyArgs} args - Arguments to create many PagoJornadas.
     * @example
     * // Create many PagoJornadas
     * const pagoJornada = await prisma.pagoJornada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoJornadaCreateManyArgs>(args?: SelectSubset<T, PagoJornadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PagoJornadas and returns the data saved in the database.
     * @param {PagoJornadaCreateManyAndReturnArgs} args - Arguments to create many PagoJornadas.
     * @example
     * // Create many PagoJornadas
     * const pagoJornada = await prisma.pagoJornada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PagoJornadas and only return the `id`
     * const pagoJornadaWithIdOnly = await prisma.pagoJornada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoJornadaCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoJornadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PagoJornada.
     * @param {PagoJornadaDeleteArgs} args - Arguments to delete one PagoJornada.
     * @example
     * // Delete one PagoJornada
     * const PagoJornada = await prisma.pagoJornada.delete({
     *   where: {
     *     // ... filter to delete one PagoJornada
     *   }
     * })
     * 
     */
    delete<T extends PagoJornadaDeleteArgs>(args: SelectSubset<T, PagoJornadaDeleteArgs<ExtArgs>>): Prisma__PagoJornadaClient<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PagoJornada.
     * @param {PagoJornadaUpdateArgs} args - Arguments to update one PagoJornada.
     * @example
     * // Update one PagoJornada
     * const pagoJornada = await prisma.pagoJornada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoJornadaUpdateArgs>(args: SelectSubset<T, PagoJornadaUpdateArgs<ExtArgs>>): Prisma__PagoJornadaClient<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PagoJornadas.
     * @param {PagoJornadaDeleteManyArgs} args - Arguments to filter PagoJornadas to delete.
     * @example
     * // Delete a few PagoJornadas
     * const { count } = await prisma.pagoJornada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoJornadaDeleteManyArgs>(args?: SelectSubset<T, PagoJornadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagoJornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoJornadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagoJornadas
     * const pagoJornada = await prisma.pagoJornada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoJornadaUpdateManyArgs>(args: SelectSubset<T, PagoJornadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagoJornadas and returns the data updated in the database.
     * @param {PagoJornadaUpdateManyAndReturnArgs} args - Arguments to update many PagoJornadas.
     * @example
     * // Update many PagoJornadas
     * const pagoJornada = await prisma.pagoJornada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PagoJornadas and only return the `id`
     * const pagoJornadaWithIdOnly = await prisma.pagoJornada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagoJornadaUpdateManyAndReturnArgs>(args: SelectSubset<T, PagoJornadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PagoJornada.
     * @param {PagoJornadaUpsertArgs} args - Arguments to update or create a PagoJornada.
     * @example
     * // Update or create a PagoJornada
     * const pagoJornada = await prisma.pagoJornada.upsert({
     *   create: {
     *     // ... data to create a PagoJornada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagoJornada we want to update
     *   }
     * })
     */
    upsert<T extends PagoJornadaUpsertArgs>(args: SelectSubset<T, PagoJornadaUpsertArgs<ExtArgs>>): Prisma__PagoJornadaClient<$Result.GetResult<Prisma.$PagoJornadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PagoJornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoJornadaCountArgs} args - Arguments to filter PagoJornadas to count.
     * @example
     * // Count the number of PagoJornadas
     * const count = await prisma.pagoJornada.count({
     *   where: {
     *     // ... the filter for the PagoJornadas we want to count
     *   }
     * })
    **/
    count<T extends PagoJornadaCountArgs>(
      args?: Subset<T, PagoJornadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoJornadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagoJornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoJornadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoJornadaAggregateArgs>(args: Subset<T, PagoJornadaAggregateArgs>): Prisma.PrismaPromise<GetPagoJornadaAggregateType<T>>

    /**
     * Group by PagoJornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoJornadaGroupByArgs} args - Group by arguments.
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
      T extends PagoJornadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoJornadaGroupByArgs['orderBy'] }
        : { orderBy?: PagoJornadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagoJornadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoJornadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagoJornada model
   */
  readonly fields: PagoJornadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagoJornada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoJornadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jornada<T extends JornadaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JornadaDefaultArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PagoJornada model
   */
  interface PagoJornadaFieldRefs {
    readonly id: FieldRef<"PagoJornada", 'Int'>
    readonly jornadaId: FieldRef<"PagoJornada", 'Int'>
    readonly medio: FieldRef<"PagoJornada", 'MedioPago'>
    readonly monto: FieldRef<"PagoJornada", 'Decimal'>
    readonly nota: FieldRef<"PagoJornada", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PagoJornada findUnique
   */
  export type PagoJornadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * Filter, which PagoJornada to fetch.
     */
    where: PagoJornadaWhereUniqueInput
  }

  /**
   * PagoJornada findUniqueOrThrow
   */
  export type PagoJornadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * Filter, which PagoJornada to fetch.
     */
    where: PagoJornadaWhereUniqueInput
  }

  /**
   * PagoJornada findFirst
   */
  export type PagoJornadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * Filter, which PagoJornada to fetch.
     */
    where?: PagoJornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoJornadas to fetch.
     */
    orderBy?: PagoJornadaOrderByWithRelationInput | PagoJornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoJornadas.
     */
    cursor?: PagoJornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoJornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoJornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoJornadas.
     */
    distinct?: PagoJornadaScalarFieldEnum | PagoJornadaScalarFieldEnum[]
  }

  /**
   * PagoJornada findFirstOrThrow
   */
  export type PagoJornadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * Filter, which PagoJornada to fetch.
     */
    where?: PagoJornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoJornadas to fetch.
     */
    orderBy?: PagoJornadaOrderByWithRelationInput | PagoJornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoJornadas.
     */
    cursor?: PagoJornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoJornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoJornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoJornadas.
     */
    distinct?: PagoJornadaScalarFieldEnum | PagoJornadaScalarFieldEnum[]
  }

  /**
   * PagoJornada findMany
   */
  export type PagoJornadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * Filter, which PagoJornadas to fetch.
     */
    where?: PagoJornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoJornadas to fetch.
     */
    orderBy?: PagoJornadaOrderByWithRelationInput | PagoJornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagoJornadas.
     */
    cursor?: PagoJornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoJornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoJornadas.
     */
    skip?: number
    distinct?: PagoJornadaScalarFieldEnum | PagoJornadaScalarFieldEnum[]
  }

  /**
   * PagoJornada create
   */
  export type PagoJornadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * The data needed to create a PagoJornada.
     */
    data: XOR<PagoJornadaCreateInput, PagoJornadaUncheckedCreateInput>
  }

  /**
   * PagoJornada createMany
   */
  export type PagoJornadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagoJornadas.
     */
    data: PagoJornadaCreateManyInput | PagoJornadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagoJornada createManyAndReturn
   */
  export type PagoJornadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * The data used to create many PagoJornadas.
     */
    data: PagoJornadaCreateManyInput | PagoJornadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagoJornada update
   */
  export type PagoJornadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * The data needed to update a PagoJornada.
     */
    data: XOR<PagoJornadaUpdateInput, PagoJornadaUncheckedUpdateInput>
    /**
     * Choose, which PagoJornada to update.
     */
    where: PagoJornadaWhereUniqueInput
  }

  /**
   * PagoJornada updateMany
   */
  export type PagoJornadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagoJornadas.
     */
    data: XOR<PagoJornadaUpdateManyMutationInput, PagoJornadaUncheckedUpdateManyInput>
    /**
     * Filter which PagoJornadas to update
     */
    where?: PagoJornadaWhereInput
    /**
     * Limit how many PagoJornadas to update.
     */
    limit?: number
  }

  /**
   * PagoJornada updateManyAndReturn
   */
  export type PagoJornadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * The data used to update PagoJornadas.
     */
    data: XOR<PagoJornadaUpdateManyMutationInput, PagoJornadaUncheckedUpdateManyInput>
    /**
     * Filter which PagoJornadas to update
     */
    where?: PagoJornadaWhereInput
    /**
     * Limit how many PagoJornadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagoJornada upsert
   */
  export type PagoJornadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * The filter to search for the PagoJornada to update in case it exists.
     */
    where: PagoJornadaWhereUniqueInput
    /**
     * In case the PagoJornada found by the `where` argument doesn't exist, create a new PagoJornada with this data.
     */
    create: XOR<PagoJornadaCreateInput, PagoJornadaUncheckedCreateInput>
    /**
     * In case the PagoJornada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoJornadaUpdateInput, PagoJornadaUncheckedUpdateInput>
  }

  /**
   * PagoJornada delete
   */
  export type PagoJornadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
    /**
     * Filter which PagoJornada to delete.
     */
    where: PagoJornadaWhereUniqueInput
  }

  /**
   * PagoJornada deleteMany
   */
  export type PagoJornadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoJornadas to delete
     */
    where?: PagoJornadaWhereInput
    /**
     * Limit how many PagoJornadas to delete.
     */
    limit?: number
  }

  /**
   * PagoJornada without action
   */
  export type PagoJornadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoJornada
     */
    select?: PagoJornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagoJornada
     */
    omit?: PagoJornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoJornadaInclude<ExtArgs> | null
  }


  /**
   * Model Gasto
   */

  export type AggregateGasto = {
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  export type GastoAvgAggregateOutputType = {
    id: number | null
    estacionId: number | null
    monto: Decimal | null
  }

  export type GastoSumAggregateOutputType = {
    id: number | null
    estacionId: number | null
    monto: Decimal | null
  }

  export type GastoMinAggregateOutputType = {
    id: number | null
    estacionId: number | null
    categoria: string | null
    descripcion: string | null
    monto: Decimal | null
    fecha: Date | null
  }

  export type GastoMaxAggregateOutputType = {
    id: number | null
    estacionId: number | null
    categoria: string | null
    descripcion: string | null
    monto: Decimal | null
    fecha: Date | null
  }

  export type GastoCountAggregateOutputType = {
    id: number
    estacionId: number
    categoria: number
    descripcion: number
    monto: number
    fecha: number
    _all: number
  }


  export type GastoAvgAggregateInputType = {
    id?: true
    estacionId?: true
    monto?: true
  }

  export type GastoSumAggregateInputType = {
    id?: true
    estacionId?: true
    monto?: true
  }

  export type GastoMinAggregateInputType = {
    id?: true
    estacionId?: true
    categoria?: true
    descripcion?: true
    monto?: true
    fecha?: true
  }

  export type GastoMaxAggregateInputType = {
    id?: true
    estacionId?: true
    categoria?: true
    descripcion?: true
    monto?: true
    fecha?: true
  }

  export type GastoCountAggregateInputType = {
    id?: true
    estacionId?: true
    categoria?: true
    descripcion?: true
    monto?: true
    fecha?: true
    _all?: true
  }

  export type GastoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gasto to aggregate.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gastos
    **/
    _count?: true | GastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastoMaxAggregateInputType
  }

  export type GetGastoAggregateType<T extends GastoAggregateArgs> = {
        [P in keyof T & keyof AggregateGasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGasto[P]>
      : GetScalarType<T[P], AggregateGasto[P]>
  }




  export type GastoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithAggregationInput | GastoOrderByWithAggregationInput[]
    by: GastoScalarFieldEnum[] | GastoScalarFieldEnum
    having?: GastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastoCountAggregateInputType | true
    _avg?: GastoAvgAggregateInputType
    _sum?: GastoSumAggregateInputType
    _min?: GastoMinAggregateInputType
    _max?: GastoMaxAggregateInputType
  }

  export type GastoGroupByOutputType = {
    id: number
    estacionId: number
    categoria: string
    descripcion: string
    monto: Decimal
    fecha: Date
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  type GetGastoGroupByPayload<T extends GastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastoGroupByOutputType[P]>
            : GetScalarType<T[P], GastoGroupByOutputType[P]>
        }
      >
    >


  export type GastoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    categoria?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    categoria?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estacionId?: boolean
    categoria?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectScalar = {
    id?: boolean
    estacionId?: boolean
    categoria?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
  }

  export type GastoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estacionId" | "categoria" | "descripcion" | "monto" | "fecha", ExtArgs["result"]["gasto"]>
  export type GastoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }
  export type GastoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }
  export type GastoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacion?: boolean | EstacionDefaultArgs<ExtArgs>
  }

  export type $GastoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gasto"
    objects: {
      estacion: Prisma.$EstacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estacionId: number
      categoria: string
      descripcion: string
      monto: Prisma.Decimal
      fecha: Date
    }, ExtArgs["result"]["gasto"]>
    composites: {}
  }

  type GastoGetPayload<S extends boolean | null | undefined | GastoDefaultArgs> = $Result.GetResult<Prisma.$GastoPayload, S>

  type GastoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GastoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GastoCountAggregateInputType | true
    }

  export interface GastoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gasto'], meta: { name: 'Gasto' } }
    /**
     * Find zero or one Gasto that matches the filter.
     * @param {GastoFindUniqueArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GastoFindUniqueArgs>(args: SelectSubset<T, GastoFindUniqueArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gasto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GastoFindUniqueOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GastoFindUniqueOrThrowArgs>(args: SelectSubset<T, GastoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GastoFindFirstArgs>(args?: SelectSubset<T, GastoFindFirstArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gasto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GastoFindFirstOrThrowArgs>(args?: SelectSubset<T, GastoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos
     * const gastos = await prisma.gasto.findMany()
     * 
     * // Get first 10 Gastos
     * const gastos = await prisma.gasto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastoWithIdOnly = await prisma.gasto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GastoFindManyArgs>(args?: SelectSubset<T, GastoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gasto.
     * @param {GastoCreateArgs} args - Arguments to create a Gasto.
     * @example
     * // Create one Gasto
     * const Gasto = await prisma.gasto.create({
     *   data: {
     *     // ... data to create a Gasto
     *   }
     * })
     * 
     */
    create<T extends GastoCreateArgs>(args: SelectSubset<T, GastoCreateArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gastos.
     * @param {GastoCreateManyArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GastoCreateManyArgs>(args?: SelectSubset<T, GastoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gastos and returns the data saved in the database.
     * @param {GastoCreateManyAndReturnArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GastoCreateManyAndReturnArgs>(args?: SelectSubset<T, GastoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gasto.
     * @param {GastoDeleteArgs} args - Arguments to delete one Gasto.
     * @example
     * // Delete one Gasto
     * const Gasto = await prisma.gasto.delete({
     *   where: {
     *     // ... filter to delete one Gasto
     *   }
     * })
     * 
     */
    delete<T extends GastoDeleteArgs>(args: SelectSubset<T, GastoDeleteArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gasto.
     * @param {GastoUpdateArgs} args - Arguments to update one Gasto.
     * @example
     * // Update one Gasto
     * const gasto = await prisma.gasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GastoUpdateArgs>(args: SelectSubset<T, GastoUpdateArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gastos.
     * @param {GastoDeleteManyArgs} args - Arguments to filter Gastos to delete.
     * @example
     * // Delete a few Gastos
     * const { count } = await prisma.gasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GastoDeleteManyArgs>(args?: SelectSubset<T, GastoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GastoUpdateManyArgs>(args: SelectSubset<T, GastoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos and returns the data updated in the database.
     * @param {GastoUpdateManyAndReturnArgs} args - Arguments to update many Gastos.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GastoUpdateManyAndReturnArgs>(args: SelectSubset<T, GastoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gasto.
     * @param {GastoUpsertArgs} args - Arguments to update or create a Gasto.
     * @example
     * // Update or create a Gasto
     * const gasto = await prisma.gasto.upsert({
     *   create: {
     *     // ... data to create a Gasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gasto we want to update
     *   }
     * })
     */
    upsert<T extends GastoUpsertArgs>(args: SelectSubset<T, GastoUpsertArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoCountArgs} args - Arguments to filter Gastos to count.
     * @example
     * // Count the number of Gastos
     * const count = await prisma.gasto.count({
     *   where: {
     *     // ... the filter for the Gastos we want to count
     *   }
     * })
    **/
    count<T extends GastoCountArgs>(
      args?: Subset<T, GastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GastoAggregateArgs>(args: Subset<T, GastoAggregateArgs>): Prisma.PrismaPromise<GetGastoAggregateType<T>>

    /**
     * Group by Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoGroupByArgs} args - Group by arguments.
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
      T extends GastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastoGroupByArgs['orderBy'] }
        : { orderBy?: GastoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gasto model
   */
  readonly fields: GastoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GastoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estacion<T extends EstacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstacionDefaultArgs<ExtArgs>>): Prisma__EstacionClient<$Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Gasto model
   */
  interface GastoFieldRefs {
    readonly id: FieldRef<"Gasto", 'Int'>
    readonly estacionId: FieldRef<"Gasto", 'Int'>
    readonly categoria: FieldRef<"Gasto", 'String'>
    readonly descripcion: FieldRef<"Gasto", 'String'>
    readonly monto: FieldRef<"Gasto", 'Decimal'>
    readonly fecha: FieldRef<"Gasto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gasto findUnique
   */
  export type GastoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto findUniqueOrThrow
   */
  export type GastoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto findFirst
   */
  export type GastoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto findFirstOrThrow
   */
  export type GastoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto findMany
   */
  export type GastoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gastos to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto create
   */
  export type GastoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to create a Gasto.
     */
    data: XOR<GastoCreateInput, GastoUncheckedCreateInput>
  }

  /**
   * Gasto createMany
   */
  export type GastoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gastos.
     */
    data: GastoCreateManyInput | GastoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gasto createManyAndReturn
   */
  export type GastoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * The data used to create many Gastos.
     */
    data: GastoCreateManyInput | GastoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gasto update
   */
  export type GastoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to update a Gasto.
     */
    data: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
    /**
     * Choose, which Gasto to update.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto updateMany
   */
  export type GastoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to update.
     */
    limit?: number
  }

  /**
   * Gasto updateManyAndReturn
   */
  export type GastoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gasto upsert
   */
  export type GastoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The filter to search for the Gasto to update in case it exists.
     */
    where: GastoWhereUniqueInput
    /**
     * In case the Gasto found by the `where` argument doesn't exist, create a new Gasto with this data.
     */
    create: XOR<GastoCreateInput, GastoUncheckedCreateInput>
    /**
     * In case the Gasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
  }

  /**
   * Gasto delete
   */
  export type GastoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter which Gasto to delete.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto deleteMany
   */
  export type GastoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gastos to delete
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to delete.
     */
    limit?: number
  }

  /**
   * Gasto without action
   */
  export type GastoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EstacionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    activa: 'activa',
    createdAt: 'createdAt'
  };

  export type EstacionScalarFieldEnum = (typeof EstacionScalarFieldEnum)[keyof typeof EstacionScalarFieldEnum]


  export const MaquinaScalarFieldEnum: {
    id: 'id',
    estacionId: 'estacionId',
    nombre: 'nombre',
    activa: 'activa',
    moduloContador: 'moduloContador',
    direccionTotalizador: 'direccionTotalizador',
    direccionProductos: 'direccionProductos'
  };

  export type MaquinaScalarFieldEnum = (typeof MaquinaScalarFieldEnum)[keyof typeof MaquinaScalarFieldEnum]


  export const CombustibleScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CombustibleScalarFieldEnum = (typeof CombustibleScalarFieldEnum)[keyof typeof CombustibleScalarFieldEnum]


  export const HistorialPrecioScalarFieldEnum: {
    id: 'id',
    combustibleId: 'combustibleId',
    precio: 'precio',
    vigenteDesde: 'vigenteDesde'
  };

  export type HistorialPrecioScalarFieldEnum = (typeof HistorialPrecioScalarFieldEnum)[keyof typeof HistorialPrecioScalarFieldEnum]


  export const TanqueScalarFieldEnum: {
    id: 'id',
    estacionId: 'estacionId',
    combustibleId: 'combustibleId',
    capacidad: 'capacidad',
    minimo: 'minimo'
  };

  export type TanqueScalarFieldEnum = (typeof TanqueScalarFieldEnum)[keyof typeof TanqueScalarFieldEnum]


  export const MovimientoStockScalarFieldEnum: {
    id: 'id',
    tanqueId: 'tanqueId',
    tipo: 'tipo',
    galones: 'galones',
    fecha: 'fecha',
    jornadaId: 'jornadaId',
    nota: 'nota'
  };

  export type MovimientoStockScalarFieldEnum = (typeof MovimientoStockScalarFieldEnum)[keyof typeof MovimientoStockScalarFieldEnum]


  export const EmpleadoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    estacionId: 'estacionId',
    horarioInicio: 'horarioInicio',
    horarioFin: 'horarioFin',
    activo: 'activo',
    createdAt: 'createdAt'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const JornadaScalarFieldEnum: {
    id: 'id',
    empleadoId: 'empleadoId',
    maquinaId: 'maquinaId',
    estacionId: 'estacionId',
    inicio: 'inicio',
    fin: 'fin',
    estado: 'estado',
    notas: 'notas',
    totalizadorEntrada: 'totalizadorEntrada',
    totalizadorSalida: 'totalizadorSalida',
    galonesTotalizador: 'galonesTotalizador',
    galonesProductos: 'galonesProductos',
    diferenciaControl: 'diferenciaControl',
    importeEsperado: 'importeEsperado',
    importeDeclarado: 'importeDeclarado',
    diferenciaCaja: 'diferenciaCaja'
  };

  export type JornadaScalarFieldEnum = (typeof JornadaScalarFieldEnum)[keyof typeof JornadaScalarFieldEnum]


  export const LecturaJornadaScalarFieldEnum: {
    id: 'id',
    jornadaId: 'jornadaId',
    combustibleId: 'combustibleId',
    entradaAtras: 'entradaAtras',
    entradaAdelante: 'entradaAdelante',
    salidaAtras: 'salidaAtras',
    salidaAdelante: 'salidaAdelante',
    huboReinicio: 'huboReinicio',
    galones: 'galones',
    precioUnitario: 'precioUnitario',
    importe: 'importe'
  };

  export type LecturaJornadaScalarFieldEnum = (typeof LecturaJornadaScalarFieldEnum)[keyof typeof LecturaJornadaScalarFieldEnum]


  export const PagoJornadaScalarFieldEnum: {
    id: 'id',
    jornadaId: 'jornadaId',
    medio: 'medio',
    monto: 'monto',
    nota: 'nota'
  };

  export type PagoJornadaScalarFieldEnum = (typeof PagoJornadaScalarFieldEnum)[keyof typeof PagoJornadaScalarFieldEnum]


  export const GastoScalarFieldEnum: {
    id: 'id',
    estacionId: 'estacionId',
    categoria: 'categoria',
    descripcion: 'descripcion',
    monto: 'monto',
    fecha: 'fecha'
  };

  export type GastoScalarFieldEnum = (typeof GastoScalarFieldEnum)[keyof typeof GastoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DireccionContador'
   */
  export type EnumDireccionContadorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DireccionContador'>
    


  /**
   * Reference to a field of type 'DireccionContador[]'
   */
  export type ListEnumDireccionContadorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DireccionContador[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TipoMovimiento'
   */
  export type EnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento'>
    


  /**
   * Reference to a field of type 'TipoMovimiento[]'
   */
  export type ListEnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento[]'>
    


  /**
   * Reference to a field of type 'EstadoJornada'
   */
  export type EnumEstadoJornadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoJornada'>
    


  /**
   * Reference to a field of type 'EstadoJornada[]'
   */
  export type ListEnumEstadoJornadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoJornada[]'>
    


  /**
   * Reference to a field of type 'MedioPago'
   */
  export type EnumMedioPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedioPago'>
    


  /**
   * Reference to a field of type 'MedioPago[]'
   */
  export type ListEnumMedioPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedioPago[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type EstacionWhereInput = {
    AND?: EstacionWhereInput | EstacionWhereInput[]
    OR?: EstacionWhereInput[]
    NOT?: EstacionWhereInput | EstacionWhereInput[]
    id?: IntFilter<"Estacion"> | number
    nombre?: StringFilter<"Estacion"> | string
    direccion?: StringNullableFilter<"Estacion"> | string | null
    activa?: BoolFilter<"Estacion"> | boolean
    createdAt?: DateTimeFilter<"Estacion"> | Date | string
    maquinas?: MaquinaListRelationFilter
    tanques?: TanqueListRelationFilter
    empleados?: EmpleadoListRelationFilter
    jornadas?: JornadaListRelationFilter
    gastos?: GastoListRelationFilter
  }

  export type EstacionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    maquinas?: MaquinaOrderByRelationAggregateInput
    tanques?: TanqueOrderByRelationAggregateInput
    empleados?: EmpleadoOrderByRelationAggregateInput
    jornadas?: JornadaOrderByRelationAggregateInput
    gastos?: GastoOrderByRelationAggregateInput
  }

  export type EstacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstacionWhereInput | EstacionWhereInput[]
    OR?: EstacionWhereInput[]
    NOT?: EstacionWhereInput | EstacionWhereInput[]
    nombre?: StringFilter<"Estacion"> | string
    direccion?: StringNullableFilter<"Estacion"> | string | null
    activa?: BoolFilter<"Estacion"> | boolean
    createdAt?: DateTimeFilter<"Estacion"> | Date | string
    maquinas?: MaquinaListRelationFilter
    tanques?: TanqueListRelationFilter
    empleados?: EmpleadoListRelationFilter
    jornadas?: JornadaListRelationFilter
    gastos?: GastoListRelationFilter
  }, "id">

  export type EstacionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    _count?: EstacionCountOrderByAggregateInput
    _avg?: EstacionAvgOrderByAggregateInput
    _max?: EstacionMaxOrderByAggregateInput
    _min?: EstacionMinOrderByAggregateInput
    _sum?: EstacionSumOrderByAggregateInput
  }

  export type EstacionScalarWhereWithAggregatesInput = {
    AND?: EstacionScalarWhereWithAggregatesInput | EstacionScalarWhereWithAggregatesInput[]
    OR?: EstacionScalarWhereWithAggregatesInput[]
    NOT?: EstacionScalarWhereWithAggregatesInput | EstacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estacion"> | number
    nombre?: StringWithAggregatesFilter<"Estacion"> | string
    direccion?: StringNullableWithAggregatesFilter<"Estacion"> | string | null
    activa?: BoolWithAggregatesFilter<"Estacion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Estacion"> | Date | string
  }

  export type MaquinaWhereInput = {
    AND?: MaquinaWhereInput | MaquinaWhereInput[]
    OR?: MaquinaWhereInput[]
    NOT?: MaquinaWhereInput | MaquinaWhereInput[]
    id?: IntFilter<"Maquina"> | number
    estacionId?: IntFilter<"Maquina"> | number
    nombre?: StringFilter<"Maquina"> | string
    activa?: BoolFilter<"Maquina"> | boolean
    moduloContador?: BigIntFilter<"Maquina"> | bigint | number
    direccionTotalizador?: EnumDireccionContadorFilter<"Maquina"> | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFilter<"Maquina"> | $Enums.DireccionContador
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
    jornadas?: JornadaListRelationFilter
  }

  export type MaquinaOrderByWithRelationInput = {
    id?: SortOrder
    estacionId?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
    moduloContador?: SortOrder
    direccionTotalizador?: SortOrder
    direccionProductos?: SortOrder
    estacion?: EstacionOrderByWithRelationInput
    jornadas?: JornadaOrderByRelationAggregateInput
  }

  export type MaquinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    estacionId_nombre?: MaquinaEstacionIdNombreCompoundUniqueInput
    AND?: MaquinaWhereInput | MaquinaWhereInput[]
    OR?: MaquinaWhereInput[]
    NOT?: MaquinaWhereInput | MaquinaWhereInput[]
    estacionId?: IntFilter<"Maquina"> | number
    nombre?: StringFilter<"Maquina"> | string
    activa?: BoolFilter<"Maquina"> | boolean
    moduloContador?: BigIntFilter<"Maquina"> | bigint | number
    direccionTotalizador?: EnumDireccionContadorFilter<"Maquina"> | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFilter<"Maquina"> | $Enums.DireccionContador
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
    jornadas?: JornadaListRelationFilter
  }, "id" | "estacionId_nombre">

  export type MaquinaOrderByWithAggregationInput = {
    id?: SortOrder
    estacionId?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
    moduloContador?: SortOrder
    direccionTotalizador?: SortOrder
    direccionProductos?: SortOrder
    _count?: MaquinaCountOrderByAggregateInput
    _avg?: MaquinaAvgOrderByAggregateInput
    _max?: MaquinaMaxOrderByAggregateInput
    _min?: MaquinaMinOrderByAggregateInput
    _sum?: MaquinaSumOrderByAggregateInput
  }

  export type MaquinaScalarWhereWithAggregatesInput = {
    AND?: MaquinaScalarWhereWithAggregatesInput | MaquinaScalarWhereWithAggregatesInput[]
    OR?: MaquinaScalarWhereWithAggregatesInput[]
    NOT?: MaquinaScalarWhereWithAggregatesInput | MaquinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maquina"> | number
    estacionId?: IntWithAggregatesFilter<"Maquina"> | number
    nombre?: StringWithAggregatesFilter<"Maquina"> | string
    activa?: BoolWithAggregatesFilter<"Maquina"> | boolean
    moduloContador?: BigIntWithAggregatesFilter<"Maquina"> | bigint | number
    direccionTotalizador?: EnumDireccionContadorWithAggregatesFilter<"Maquina"> | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorWithAggregatesFilter<"Maquina"> | $Enums.DireccionContador
  }

  export type CombustibleWhereInput = {
    AND?: CombustibleWhereInput | CombustibleWhereInput[]
    OR?: CombustibleWhereInput[]
    NOT?: CombustibleWhereInput | CombustibleWhereInput[]
    id?: IntFilter<"Combustible"> | number
    nombre?: StringFilter<"Combustible"> | string
    precios?: HistorialPrecioListRelationFilter
    tanques?: TanqueListRelationFilter
    lecturas?: LecturaJornadaListRelationFilter
  }

  export type CombustibleOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precios?: HistorialPrecioOrderByRelationAggregateInput
    tanques?: TanqueOrderByRelationAggregateInput
    lecturas?: LecturaJornadaOrderByRelationAggregateInput
  }

  export type CombustibleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CombustibleWhereInput | CombustibleWhereInput[]
    OR?: CombustibleWhereInput[]
    NOT?: CombustibleWhereInput | CombustibleWhereInput[]
    precios?: HistorialPrecioListRelationFilter
    tanques?: TanqueListRelationFilter
    lecturas?: LecturaJornadaListRelationFilter
  }, "id" | "nombre">

  export type CombustibleOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CombustibleCountOrderByAggregateInput
    _avg?: CombustibleAvgOrderByAggregateInput
    _max?: CombustibleMaxOrderByAggregateInput
    _min?: CombustibleMinOrderByAggregateInput
    _sum?: CombustibleSumOrderByAggregateInput
  }

  export type CombustibleScalarWhereWithAggregatesInput = {
    AND?: CombustibleScalarWhereWithAggregatesInput | CombustibleScalarWhereWithAggregatesInput[]
    OR?: CombustibleScalarWhereWithAggregatesInput[]
    NOT?: CombustibleScalarWhereWithAggregatesInput | CombustibleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Combustible"> | number
    nombre?: StringWithAggregatesFilter<"Combustible"> | string
  }

  export type HistorialPrecioWhereInput = {
    AND?: HistorialPrecioWhereInput | HistorialPrecioWhereInput[]
    OR?: HistorialPrecioWhereInput[]
    NOT?: HistorialPrecioWhereInput | HistorialPrecioWhereInput[]
    id?: IntFilter<"HistorialPrecio"> | number
    combustibleId?: IntFilter<"HistorialPrecio"> | number
    precio?: DecimalFilter<"HistorialPrecio"> | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFilter<"HistorialPrecio"> | Date | string
    combustible?: XOR<CombustibleScalarRelationFilter, CombustibleWhereInput>
  }

  export type HistorialPrecioOrderByWithRelationInput = {
    id?: SortOrder
    combustibleId?: SortOrder
    precio?: SortOrder
    vigenteDesde?: SortOrder
    combustible?: CombustibleOrderByWithRelationInput
  }

  export type HistorialPrecioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistorialPrecioWhereInput | HistorialPrecioWhereInput[]
    OR?: HistorialPrecioWhereInput[]
    NOT?: HistorialPrecioWhereInput | HistorialPrecioWhereInput[]
    combustibleId?: IntFilter<"HistorialPrecio"> | number
    precio?: DecimalFilter<"HistorialPrecio"> | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFilter<"HistorialPrecio"> | Date | string
    combustible?: XOR<CombustibleScalarRelationFilter, CombustibleWhereInput>
  }, "id">

  export type HistorialPrecioOrderByWithAggregationInput = {
    id?: SortOrder
    combustibleId?: SortOrder
    precio?: SortOrder
    vigenteDesde?: SortOrder
    _count?: HistorialPrecioCountOrderByAggregateInput
    _avg?: HistorialPrecioAvgOrderByAggregateInput
    _max?: HistorialPrecioMaxOrderByAggregateInput
    _min?: HistorialPrecioMinOrderByAggregateInput
    _sum?: HistorialPrecioSumOrderByAggregateInput
  }

  export type HistorialPrecioScalarWhereWithAggregatesInput = {
    AND?: HistorialPrecioScalarWhereWithAggregatesInput | HistorialPrecioScalarWhereWithAggregatesInput[]
    OR?: HistorialPrecioScalarWhereWithAggregatesInput[]
    NOT?: HistorialPrecioScalarWhereWithAggregatesInput | HistorialPrecioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistorialPrecio"> | number
    combustibleId?: IntWithAggregatesFilter<"HistorialPrecio"> | number
    precio?: DecimalWithAggregatesFilter<"HistorialPrecio"> | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeWithAggregatesFilter<"HistorialPrecio"> | Date | string
  }

  export type TanqueWhereInput = {
    AND?: TanqueWhereInput | TanqueWhereInput[]
    OR?: TanqueWhereInput[]
    NOT?: TanqueWhereInput | TanqueWhereInput[]
    id?: IntFilter<"Tanque"> | number
    estacionId?: IntFilter<"Tanque"> | number
    combustibleId?: IntFilter<"Tanque"> | number
    capacidad?: DecimalFilter<"Tanque"> | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFilter<"Tanque"> | Decimal | DecimalJsLike | number | string
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
    combustible?: XOR<CombustibleScalarRelationFilter, CombustibleWhereInput>
    movimientos?: MovimientoStockListRelationFilter
  }

  export type TanqueOrderByWithRelationInput = {
    id?: SortOrder
    estacionId?: SortOrder
    combustibleId?: SortOrder
    capacidad?: SortOrder
    minimo?: SortOrder
    estacion?: EstacionOrderByWithRelationInput
    combustible?: CombustibleOrderByWithRelationInput
    movimientos?: MovimientoStockOrderByRelationAggregateInput
  }

  export type TanqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    estacionId_combustibleId?: TanqueEstacionIdCombustibleIdCompoundUniqueInput
    AND?: TanqueWhereInput | TanqueWhereInput[]
    OR?: TanqueWhereInput[]
    NOT?: TanqueWhereInput | TanqueWhereInput[]
    estacionId?: IntFilter<"Tanque"> | number
    combustibleId?: IntFilter<"Tanque"> | number
    capacidad?: DecimalFilter<"Tanque"> | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFilter<"Tanque"> | Decimal | DecimalJsLike | number | string
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
    combustible?: XOR<CombustibleScalarRelationFilter, CombustibleWhereInput>
    movimientos?: MovimientoStockListRelationFilter
  }, "id" | "estacionId_combustibleId">

  export type TanqueOrderByWithAggregationInput = {
    id?: SortOrder
    estacionId?: SortOrder
    combustibleId?: SortOrder
    capacidad?: SortOrder
    minimo?: SortOrder
    _count?: TanqueCountOrderByAggregateInput
    _avg?: TanqueAvgOrderByAggregateInput
    _max?: TanqueMaxOrderByAggregateInput
    _min?: TanqueMinOrderByAggregateInput
    _sum?: TanqueSumOrderByAggregateInput
  }

  export type TanqueScalarWhereWithAggregatesInput = {
    AND?: TanqueScalarWhereWithAggregatesInput | TanqueScalarWhereWithAggregatesInput[]
    OR?: TanqueScalarWhereWithAggregatesInput[]
    NOT?: TanqueScalarWhereWithAggregatesInput | TanqueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tanque"> | number
    estacionId?: IntWithAggregatesFilter<"Tanque"> | number
    combustibleId?: IntWithAggregatesFilter<"Tanque"> | number
    capacidad?: DecimalWithAggregatesFilter<"Tanque"> | Decimal | DecimalJsLike | number | string
    minimo?: DecimalWithAggregatesFilter<"Tanque"> | Decimal | DecimalJsLike | number | string
  }

  export type MovimientoStockWhereInput = {
    AND?: MovimientoStockWhereInput | MovimientoStockWhereInput[]
    OR?: MovimientoStockWhereInput[]
    NOT?: MovimientoStockWhereInput | MovimientoStockWhereInput[]
    id?: IntFilter<"MovimientoStock"> | number
    tanqueId?: IntFilter<"MovimientoStock"> | number
    tipo?: EnumTipoMovimientoFilter<"MovimientoStock"> | $Enums.TipoMovimiento
    galones?: DecimalFilter<"MovimientoStock"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"MovimientoStock"> | Date | string
    jornadaId?: IntNullableFilter<"MovimientoStock"> | number | null
    nota?: StringNullableFilter<"MovimientoStock"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    jornada?: XOR<JornadaNullableScalarRelationFilter, JornadaWhereInput> | null
  }

  export type MovimientoStockOrderByWithRelationInput = {
    id?: SortOrder
    tanqueId?: SortOrder
    tipo?: SortOrder
    galones?: SortOrder
    fecha?: SortOrder
    jornadaId?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    tanque?: TanqueOrderByWithRelationInput
    jornada?: JornadaOrderByWithRelationInput
  }

  export type MovimientoStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovimientoStockWhereInput | MovimientoStockWhereInput[]
    OR?: MovimientoStockWhereInput[]
    NOT?: MovimientoStockWhereInput | MovimientoStockWhereInput[]
    tanqueId?: IntFilter<"MovimientoStock"> | number
    tipo?: EnumTipoMovimientoFilter<"MovimientoStock"> | $Enums.TipoMovimiento
    galones?: DecimalFilter<"MovimientoStock"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"MovimientoStock"> | Date | string
    jornadaId?: IntNullableFilter<"MovimientoStock"> | number | null
    nota?: StringNullableFilter<"MovimientoStock"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    jornada?: XOR<JornadaNullableScalarRelationFilter, JornadaWhereInput> | null
  }, "id">

  export type MovimientoStockOrderByWithAggregationInput = {
    id?: SortOrder
    tanqueId?: SortOrder
    tipo?: SortOrder
    galones?: SortOrder
    fecha?: SortOrder
    jornadaId?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    _count?: MovimientoStockCountOrderByAggregateInput
    _avg?: MovimientoStockAvgOrderByAggregateInput
    _max?: MovimientoStockMaxOrderByAggregateInput
    _min?: MovimientoStockMinOrderByAggregateInput
    _sum?: MovimientoStockSumOrderByAggregateInput
  }

  export type MovimientoStockScalarWhereWithAggregatesInput = {
    AND?: MovimientoStockScalarWhereWithAggregatesInput | MovimientoStockScalarWhereWithAggregatesInput[]
    OR?: MovimientoStockScalarWhereWithAggregatesInput[]
    NOT?: MovimientoStockScalarWhereWithAggregatesInput | MovimientoStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovimientoStock"> | number
    tanqueId?: IntWithAggregatesFilter<"MovimientoStock"> | number
    tipo?: EnumTipoMovimientoWithAggregatesFilter<"MovimientoStock"> | $Enums.TipoMovimiento
    galones?: DecimalWithAggregatesFilter<"MovimientoStock"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeWithAggregatesFilter<"MovimientoStock"> | Date | string
    jornadaId?: IntNullableWithAggregatesFilter<"MovimientoStock"> | number | null
    nota?: StringNullableWithAggregatesFilter<"MovimientoStock"> | string | null
  }

  export type EmpleadoWhereInput = {
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    id?: IntFilter<"Empleado"> | number
    nombre?: StringFilter<"Empleado"> | string
    estacionId?: IntFilter<"Empleado"> | number
    horarioInicio?: StringNullableFilter<"Empleado"> | string | null
    horarioFin?: StringNullableFilter<"Empleado"> | string | null
    activo?: BoolFilter<"Empleado"> | boolean
    createdAt?: DateTimeFilter<"Empleado"> | Date | string
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
    jornadas?: JornadaListRelationFilter
  }

  export type EmpleadoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estacionId?: SortOrder
    horarioInicio?: SortOrderInput | SortOrder
    horarioFin?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    estacion?: EstacionOrderByWithRelationInput
    jornadas?: JornadaOrderByRelationAggregateInput
  }

  export type EmpleadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    nombre?: StringFilter<"Empleado"> | string
    estacionId?: IntFilter<"Empleado"> | number
    horarioInicio?: StringNullableFilter<"Empleado"> | string | null
    horarioFin?: StringNullableFilter<"Empleado"> | string | null
    activo?: BoolFilter<"Empleado"> | boolean
    createdAt?: DateTimeFilter<"Empleado"> | Date | string
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
    jornadas?: JornadaListRelationFilter
  }, "id">

  export type EmpleadoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estacionId?: SortOrder
    horarioInicio?: SortOrderInput | SortOrder
    horarioFin?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    _count?: EmpleadoCountOrderByAggregateInput
    _avg?: EmpleadoAvgOrderByAggregateInput
    _max?: EmpleadoMaxOrderByAggregateInput
    _min?: EmpleadoMinOrderByAggregateInput
    _sum?: EmpleadoSumOrderByAggregateInput
  }

  export type EmpleadoScalarWhereWithAggregatesInput = {
    AND?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    OR?: EmpleadoScalarWhereWithAggregatesInput[]
    NOT?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empleado"> | number
    nombre?: StringWithAggregatesFilter<"Empleado"> | string
    estacionId?: IntWithAggregatesFilter<"Empleado"> | number
    horarioInicio?: StringNullableWithAggregatesFilter<"Empleado"> | string | null
    horarioFin?: StringNullableWithAggregatesFilter<"Empleado"> | string | null
    activo?: BoolWithAggregatesFilter<"Empleado"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Empleado"> | Date | string
  }

  export type JornadaWhereInput = {
    AND?: JornadaWhereInput | JornadaWhereInput[]
    OR?: JornadaWhereInput[]
    NOT?: JornadaWhereInput | JornadaWhereInput[]
    id?: IntFilter<"Jornada"> | number
    empleadoId?: IntFilter<"Jornada"> | number
    maquinaId?: IntFilter<"Jornada"> | number
    estacionId?: IntFilter<"Jornada"> | number
    inicio?: DateTimeFilter<"Jornada"> | Date | string
    fin?: DateTimeNullableFilter<"Jornada"> | Date | string | null
    estado?: EnumEstadoJornadaFilter<"Jornada"> | $Enums.EstadoJornada
    notas?: StringNullableFilter<"Jornada"> | string | null
    totalizadorEntrada?: DecimalFilter<"Jornada"> | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    maquina?: XOR<MaquinaScalarRelationFilter, MaquinaWhereInput>
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
    lecturas?: LecturaJornadaListRelationFilter
    pagos?: PagoJornadaListRelationFilter
    movimientos?: MovimientoStockListRelationFilter
  }

  export type JornadaOrderByWithRelationInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    maquinaId?: SortOrder
    estacionId?: SortOrder
    inicio?: SortOrder
    fin?: SortOrderInput | SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    totalizadorEntrada?: SortOrder
    totalizadorSalida?: SortOrderInput | SortOrder
    galonesTotalizador?: SortOrderInput | SortOrder
    galonesProductos?: SortOrderInput | SortOrder
    diferenciaControl?: SortOrderInput | SortOrder
    importeEsperado?: SortOrderInput | SortOrder
    importeDeclarado?: SortOrderInput | SortOrder
    diferenciaCaja?: SortOrderInput | SortOrder
    empleado?: EmpleadoOrderByWithRelationInput
    maquina?: MaquinaOrderByWithRelationInput
    estacion?: EstacionOrderByWithRelationInput
    lecturas?: LecturaJornadaOrderByRelationAggregateInput
    pagos?: PagoJornadaOrderByRelationAggregateInput
    movimientos?: MovimientoStockOrderByRelationAggregateInput
  }

  export type JornadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JornadaWhereInput | JornadaWhereInput[]
    OR?: JornadaWhereInput[]
    NOT?: JornadaWhereInput | JornadaWhereInput[]
    empleadoId?: IntFilter<"Jornada"> | number
    maquinaId?: IntFilter<"Jornada"> | number
    estacionId?: IntFilter<"Jornada"> | number
    inicio?: DateTimeFilter<"Jornada"> | Date | string
    fin?: DateTimeNullableFilter<"Jornada"> | Date | string | null
    estado?: EnumEstadoJornadaFilter<"Jornada"> | $Enums.EstadoJornada
    notas?: StringNullableFilter<"Jornada"> | string | null
    totalizadorEntrada?: DecimalFilter<"Jornada"> | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    maquina?: XOR<MaquinaScalarRelationFilter, MaquinaWhereInput>
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
    lecturas?: LecturaJornadaListRelationFilter
    pagos?: PagoJornadaListRelationFilter
    movimientos?: MovimientoStockListRelationFilter
  }, "id">

  export type JornadaOrderByWithAggregationInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    maquinaId?: SortOrder
    estacionId?: SortOrder
    inicio?: SortOrder
    fin?: SortOrderInput | SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    totalizadorEntrada?: SortOrder
    totalizadorSalida?: SortOrderInput | SortOrder
    galonesTotalizador?: SortOrderInput | SortOrder
    galonesProductos?: SortOrderInput | SortOrder
    diferenciaControl?: SortOrderInput | SortOrder
    importeEsperado?: SortOrderInput | SortOrder
    importeDeclarado?: SortOrderInput | SortOrder
    diferenciaCaja?: SortOrderInput | SortOrder
    _count?: JornadaCountOrderByAggregateInput
    _avg?: JornadaAvgOrderByAggregateInput
    _max?: JornadaMaxOrderByAggregateInput
    _min?: JornadaMinOrderByAggregateInput
    _sum?: JornadaSumOrderByAggregateInput
  }

  export type JornadaScalarWhereWithAggregatesInput = {
    AND?: JornadaScalarWhereWithAggregatesInput | JornadaScalarWhereWithAggregatesInput[]
    OR?: JornadaScalarWhereWithAggregatesInput[]
    NOT?: JornadaScalarWhereWithAggregatesInput | JornadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jornada"> | number
    empleadoId?: IntWithAggregatesFilter<"Jornada"> | number
    maquinaId?: IntWithAggregatesFilter<"Jornada"> | number
    estacionId?: IntWithAggregatesFilter<"Jornada"> | number
    inicio?: DateTimeWithAggregatesFilter<"Jornada"> | Date | string
    fin?: DateTimeNullableWithAggregatesFilter<"Jornada"> | Date | string | null
    estado?: EnumEstadoJornadaWithAggregatesFilter<"Jornada"> | $Enums.EstadoJornada
    notas?: StringNullableWithAggregatesFilter<"Jornada"> | string | null
    totalizadorEntrada?: DecimalWithAggregatesFilter<"Jornada"> | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: DecimalNullableWithAggregatesFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: DecimalNullableWithAggregatesFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: DecimalNullableWithAggregatesFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: DecimalNullableWithAggregatesFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: DecimalNullableWithAggregatesFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: DecimalNullableWithAggregatesFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: DecimalNullableWithAggregatesFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaWhereInput = {
    AND?: LecturaJornadaWhereInput | LecturaJornadaWhereInput[]
    OR?: LecturaJornadaWhereInput[]
    NOT?: LecturaJornadaWhereInput | LecturaJornadaWhereInput[]
    id?: IntFilter<"LecturaJornada"> | number
    jornadaId?: IntFilter<"LecturaJornada"> | number
    combustibleId?: IntFilter<"LecturaJornada"> | number
    entradaAtras?: DecimalFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string
    salidaAtras?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFilter<"LecturaJornada"> | boolean
    galones?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    importe?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    jornada?: XOR<JornadaScalarRelationFilter, JornadaWhereInput>
    combustible?: XOR<CombustibleScalarRelationFilter, CombustibleWhereInput>
  }

  export type LecturaJornadaOrderByWithRelationInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    combustibleId?: SortOrder
    entradaAtras?: SortOrder
    entradaAdelante?: SortOrder
    salidaAtras?: SortOrderInput | SortOrder
    salidaAdelante?: SortOrderInput | SortOrder
    huboReinicio?: SortOrder
    galones?: SortOrderInput | SortOrder
    precioUnitario?: SortOrderInput | SortOrder
    importe?: SortOrderInput | SortOrder
    jornada?: JornadaOrderByWithRelationInput
    combustible?: CombustibleOrderByWithRelationInput
  }

  export type LecturaJornadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jornadaId_combustibleId?: LecturaJornadaJornadaIdCombustibleIdCompoundUniqueInput
    AND?: LecturaJornadaWhereInput | LecturaJornadaWhereInput[]
    OR?: LecturaJornadaWhereInput[]
    NOT?: LecturaJornadaWhereInput | LecturaJornadaWhereInput[]
    jornadaId?: IntFilter<"LecturaJornada"> | number
    combustibleId?: IntFilter<"LecturaJornada"> | number
    entradaAtras?: DecimalFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string
    salidaAtras?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFilter<"LecturaJornada"> | boolean
    galones?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    importe?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    jornada?: XOR<JornadaScalarRelationFilter, JornadaWhereInput>
    combustible?: XOR<CombustibleScalarRelationFilter, CombustibleWhereInput>
  }, "id" | "jornadaId_combustibleId">

  export type LecturaJornadaOrderByWithAggregationInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    combustibleId?: SortOrder
    entradaAtras?: SortOrder
    entradaAdelante?: SortOrder
    salidaAtras?: SortOrderInput | SortOrder
    salidaAdelante?: SortOrderInput | SortOrder
    huboReinicio?: SortOrder
    galones?: SortOrderInput | SortOrder
    precioUnitario?: SortOrderInput | SortOrder
    importe?: SortOrderInput | SortOrder
    _count?: LecturaJornadaCountOrderByAggregateInput
    _avg?: LecturaJornadaAvgOrderByAggregateInput
    _max?: LecturaJornadaMaxOrderByAggregateInput
    _min?: LecturaJornadaMinOrderByAggregateInput
    _sum?: LecturaJornadaSumOrderByAggregateInput
  }

  export type LecturaJornadaScalarWhereWithAggregatesInput = {
    AND?: LecturaJornadaScalarWhereWithAggregatesInput | LecturaJornadaScalarWhereWithAggregatesInput[]
    OR?: LecturaJornadaScalarWhereWithAggregatesInput[]
    NOT?: LecturaJornadaScalarWhereWithAggregatesInput | LecturaJornadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LecturaJornada"> | number
    jornadaId?: IntWithAggregatesFilter<"LecturaJornada"> | number
    combustibleId?: IntWithAggregatesFilter<"LecturaJornada"> | number
    entradaAtras?: DecimalWithAggregatesFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalWithAggregatesFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string
    salidaAtras?: DecimalNullableWithAggregatesFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: DecimalNullableWithAggregatesFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolWithAggregatesFilter<"LecturaJornada"> | boolean
    galones?: DecimalNullableWithAggregatesFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: DecimalNullableWithAggregatesFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    importe?: DecimalNullableWithAggregatesFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PagoJornadaWhereInput = {
    AND?: PagoJornadaWhereInput | PagoJornadaWhereInput[]
    OR?: PagoJornadaWhereInput[]
    NOT?: PagoJornadaWhereInput | PagoJornadaWhereInput[]
    id?: IntFilter<"PagoJornada"> | number
    jornadaId?: IntFilter<"PagoJornada"> | number
    medio?: EnumMedioPagoFilter<"PagoJornada"> | $Enums.MedioPago
    monto?: DecimalFilter<"PagoJornada"> | Decimal | DecimalJsLike | number | string
    nota?: StringNullableFilter<"PagoJornada"> | string | null
    jornada?: XOR<JornadaScalarRelationFilter, JornadaWhereInput>
  }

  export type PagoJornadaOrderByWithRelationInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    medio?: SortOrder
    monto?: SortOrder
    nota?: SortOrderInput | SortOrder
    jornada?: JornadaOrderByWithRelationInput
  }

  export type PagoJornadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagoJornadaWhereInput | PagoJornadaWhereInput[]
    OR?: PagoJornadaWhereInput[]
    NOT?: PagoJornadaWhereInput | PagoJornadaWhereInput[]
    jornadaId?: IntFilter<"PagoJornada"> | number
    medio?: EnumMedioPagoFilter<"PagoJornada"> | $Enums.MedioPago
    monto?: DecimalFilter<"PagoJornada"> | Decimal | DecimalJsLike | number | string
    nota?: StringNullableFilter<"PagoJornada"> | string | null
    jornada?: XOR<JornadaScalarRelationFilter, JornadaWhereInput>
  }, "id">

  export type PagoJornadaOrderByWithAggregationInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    medio?: SortOrder
    monto?: SortOrder
    nota?: SortOrderInput | SortOrder
    _count?: PagoJornadaCountOrderByAggregateInput
    _avg?: PagoJornadaAvgOrderByAggregateInput
    _max?: PagoJornadaMaxOrderByAggregateInput
    _min?: PagoJornadaMinOrderByAggregateInput
    _sum?: PagoJornadaSumOrderByAggregateInput
  }

  export type PagoJornadaScalarWhereWithAggregatesInput = {
    AND?: PagoJornadaScalarWhereWithAggregatesInput | PagoJornadaScalarWhereWithAggregatesInput[]
    OR?: PagoJornadaScalarWhereWithAggregatesInput[]
    NOT?: PagoJornadaScalarWhereWithAggregatesInput | PagoJornadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PagoJornada"> | number
    jornadaId?: IntWithAggregatesFilter<"PagoJornada"> | number
    medio?: EnumMedioPagoWithAggregatesFilter<"PagoJornada"> | $Enums.MedioPago
    monto?: DecimalWithAggregatesFilter<"PagoJornada"> | Decimal | DecimalJsLike | number | string
    nota?: StringNullableWithAggregatesFilter<"PagoJornada"> | string | null
  }

  export type GastoWhereInput = {
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    id?: IntFilter<"Gasto"> | number
    estacionId?: IntFilter<"Gasto"> | number
    categoria?: StringFilter<"Gasto"> | string
    descripcion?: StringFilter<"Gasto"> | string
    monto?: DecimalFilter<"Gasto"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"Gasto"> | Date | string
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
  }

  export type GastoOrderByWithRelationInput = {
    id?: SortOrder
    estacionId?: SortOrder
    categoria?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    estacion?: EstacionOrderByWithRelationInput
  }

  export type GastoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    estacionId?: IntFilter<"Gasto"> | number
    categoria?: StringFilter<"Gasto"> | string
    descripcion?: StringFilter<"Gasto"> | string
    monto?: DecimalFilter<"Gasto"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"Gasto"> | Date | string
    estacion?: XOR<EstacionScalarRelationFilter, EstacionWhereInput>
  }, "id">

  export type GastoOrderByWithAggregationInput = {
    id?: SortOrder
    estacionId?: SortOrder
    categoria?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    _count?: GastoCountOrderByAggregateInput
    _avg?: GastoAvgOrderByAggregateInput
    _max?: GastoMaxOrderByAggregateInput
    _min?: GastoMinOrderByAggregateInput
    _sum?: GastoSumOrderByAggregateInput
  }

  export type GastoScalarWhereWithAggregatesInput = {
    AND?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    OR?: GastoScalarWhereWithAggregatesInput[]
    NOT?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gasto"> | number
    estacionId?: IntWithAggregatesFilter<"Gasto"> | number
    categoria?: StringWithAggregatesFilter<"Gasto"> | string
    descripcion?: StringWithAggregatesFilter<"Gasto"> | string
    monto?: DecimalWithAggregatesFilter<"Gasto"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeWithAggregatesFilter<"Gasto"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstacionCreateInput = {
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaCreateNestedManyWithoutEstacionInput
    tanques?: TanqueCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaCreateNestedManyWithoutEstacionInput
    gastos?: GastoCreateNestedManyWithoutEstacionInput
  }

  export type EstacionUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaUncheckedCreateNestedManyWithoutEstacionInput
    tanques?: TanqueUncheckedCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaUncheckedCreateNestedManyWithoutEstacionInput
    gastos?: GastoUncheckedCreateNestedManyWithoutEstacionInput
  }

  export type EstacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUpdateManyWithoutEstacionNestedInput
    tanques?: TanqueUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUpdateManyWithoutEstacionNestedInput
  }

  export type EstacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUncheckedUpdateManyWithoutEstacionNestedInput
    tanques?: TanqueUncheckedUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUncheckedUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUncheckedUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutEstacionNestedInput
  }

  export type EstacionCreateManyInput = {
    id?: number
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
  }

  export type EstacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaquinaCreateInput = {
    nombre: string
    activa?: boolean
    moduloContador?: bigint | number
    direccionTotalizador?: $Enums.DireccionContador
    direccionProductos?: $Enums.DireccionContador
    estacion: EstacionCreateNestedOneWithoutMaquinasInput
    jornadas?: JornadaCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaUncheckedCreateInput = {
    id?: number
    estacionId: number
    nombre: string
    activa?: boolean
    moduloContador?: bigint | number
    direccionTotalizador?: $Enums.DireccionContador
    direccionProductos?: $Enums.DireccionContador
    jornadas?: JornadaUncheckedCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    estacion?: EstacionUpdateOneRequiredWithoutMaquinasNestedInput
    jornadas?: JornadaUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    jornadas?: JornadaUncheckedUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaCreateManyInput = {
    id?: number
    estacionId: number
    nombre: string
    activa?: boolean
    moduloContador?: bigint | number
    direccionTotalizador?: $Enums.DireccionContador
    direccionProductos?: $Enums.DireccionContador
  }

  export type MaquinaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
  }

  export type MaquinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
  }

  export type CombustibleCreateInput = {
    nombre: string
    precios?: HistorialPrecioCreateNestedManyWithoutCombustibleInput
    tanques?: TanqueCreateNestedManyWithoutCombustibleInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutCombustibleInput
  }

  export type CombustibleUncheckedCreateInput = {
    id?: number
    nombre: string
    precios?: HistorialPrecioUncheckedCreateNestedManyWithoutCombustibleInput
    tanques?: TanqueUncheckedCreateNestedManyWithoutCombustibleInput
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutCombustibleInput
  }

  export type CombustibleUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precios?: HistorialPrecioUpdateManyWithoutCombustibleNestedInput
    tanques?: TanqueUpdateManyWithoutCombustibleNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutCombustibleNestedInput
  }

  export type CombustibleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precios?: HistorialPrecioUncheckedUpdateManyWithoutCombustibleNestedInput
    tanques?: TanqueUncheckedUpdateManyWithoutCombustibleNestedInput
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutCombustibleNestedInput
  }

  export type CombustibleCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CombustibleUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CombustibleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type HistorialPrecioCreateInput = {
    precio: Decimal | DecimalJsLike | number | string
    vigenteDesde: Date | string
    combustible: CombustibleCreateNestedOneWithoutPreciosInput
  }

  export type HistorialPrecioUncheckedCreateInput = {
    id?: number
    combustibleId: number
    precio: Decimal | DecimalJsLike | number | string
    vigenteDesde: Date | string
  }

  export type HistorialPrecioUpdateInput = {
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFieldUpdateOperationsInput | Date | string
    combustible?: CombustibleUpdateOneRequiredWithoutPreciosNestedInput
  }

  export type HistorialPrecioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialPrecioCreateManyInput = {
    id?: number
    combustibleId: number
    precio: Decimal | DecimalJsLike | number | string
    vigenteDesde: Date | string
  }

  export type HistorialPrecioUpdateManyMutationInput = {
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialPrecioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TanqueCreateInput = {
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
    estacion: EstacionCreateNestedOneWithoutTanquesInput
    combustible: CombustibleCreateNestedOneWithoutTanquesInput
    movimientos?: MovimientoStockCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateInput = {
    id?: number
    estacionId: number
    combustibleId: number
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUpdateInput = {
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estacion?: EstacionUpdateOneRequiredWithoutTanquesNestedInput
    combustible?: CombustibleUpdateOneRequiredWithoutTanquesNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueCreateManyInput = {
    id?: number
    estacionId: number
    combustibleId: number
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
  }

  export type TanqueUpdateManyMutationInput = {
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TanqueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MovimientoStockCreateInput = {
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    nota?: string | null
    tanque: TanqueCreateNestedOneWithoutMovimientosInput
    jornada?: JornadaCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoStockUncheckedCreateInput = {
    id?: number
    tanqueId: number
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    jornadaId?: number | null
    nota?: string | null
  }

  export type MovimientoStockUpdateInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tanque?: TanqueUpdateOneRequiredWithoutMovimientosNestedInput
    jornada?: JornadaUpdateOneWithoutMovimientosNestedInput
  }

  export type MovimientoStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanqueId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadaId?: NullableIntFieldUpdateOperationsInput | number | null
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimientoStockCreateManyInput = {
    id?: number
    tanqueId: number
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    jornadaId?: number | null
    nota?: string | null
  }

  export type MovimientoStockUpdateManyMutationInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimientoStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanqueId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadaId?: NullableIntFieldUpdateOperationsInput | number | null
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpleadoCreateInput = {
    nombre: string
    horarioInicio?: string | null
    horarioFin?: string | null
    activo?: boolean
    createdAt?: Date | string
    estacion: EstacionCreateNestedOneWithoutEmpleadosInput
    jornadas?: JornadaCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateInput = {
    id?: number
    nombre: string
    estacionId: number
    horarioInicio?: string | null
    horarioFin?: string | null
    activo?: boolean
    createdAt?: Date | string
    jornadas?: JornadaUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estacion?: EstacionUpdateOneRequiredWithoutEmpleadosNestedInput
    jornadas?: JornadaUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estacionId?: IntFieldUpdateOperationsInput | number
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadas?: JornadaUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoCreateManyInput = {
    id?: number
    nombre: string
    estacionId: number
    horarioInicio?: string | null
    horarioFin?: string | null
    activo?: boolean
    createdAt?: Date | string
  }

  export type EmpleadoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpleadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estacionId?: IntFieldUpdateOperationsInput | number
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JornadaCreateInput = {
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    empleado: EmpleadoCreateNestedOneWithoutJornadasInput
    maquina: MaquinaCreateNestedOneWithoutJornadasInput
    estacion: EstacionCreateNestedOneWithoutJornadasInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockCreateNestedManyWithoutJornadaInput
  }

  export type JornadaUncheckedCreateInput = {
    id?: number
    empleadoId: number
    maquinaId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaUncheckedCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutJornadaInput
  }

  export type JornadaUpdateInput = {
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    empleado?: EmpleadoUpdateOneRequiredWithoutJornadasNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutJornadasNestedInput
    estacion?: EstacionUpdateOneRequiredWithoutJornadasNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaCreateManyInput = {
    id?: number
    empleadoId: number
    maquinaId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
  }

  export type JornadaUpdateManyMutationInput = {
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type JornadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaCreateInput = {
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
    jornada: JornadaCreateNestedOneWithoutLecturasInput
    combustible: CombustibleCreateNestedOneWithoutLecturasInput
  }

  export type LecturaJornadaUncheckedCreateInput = {
    id?: number
    jornadaId: number
    combustibleId: number
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaUpdateInput = {
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jornada?: JornadaUpdateOneRequiredWithoutLecturasNestedInput
    combustible?: CombustibleUpdateOneRequiredWithoutLecturasNestedInput
  }

  export type LecturaJornadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jornadaId?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaCreateManyInput = {
    id?: number
    jornadaId: number
    combustibleId: number
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaUpdateManyMutationInput = {
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jornadaId?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PagoJornadaCreateInput = {
    medio: $Enums.MedioPago
    monto: Decimal | DecimalJsLike | number | string
    nota?: string | null
    jornada: JornadaCreateNestedOneWithoutPagosInput
  }

  export type PagoJornadaUncheckedCreateInput = {
    id?: number
    jornadaId: number
    medio: $Enums.MedioPago
    monto: Decimal | DecimalJsLike | number | string
    nota?: string | null
  }

  export type PagoJornadaUpdateInput = {
    medio?: EnumMedioPagoFieldUpdateOperationsInput | $Enums.MedioPago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    jornada?: JornadaUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoJornadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jornadaId?: IntFieldUpdateOperationsInput | number
    medio?: EnumMedioPagoFieldUpdateOperationsInput | $Enums.MedioPago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoJornadaCreateManyInput = {
    id?: number
    jornadaId: number
    medio: $Enums.MedioPago
    monto: Decimal | DecimalJsLike | number | string
    nota?: string | null
  }

  export type PagoJornadaUpdateManyMutationInput = {
    medio?: EnumMedioPagoFieldUpdateOperationsInput | $Enums.MedioPago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoJornadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jornadaId?: IntFieldUpdateOperationsInput | number
    medio?: EnumMedioPagoFieldUpdateOperationsInput | $Enums.MedioPago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GastoCreateInput = {
    categoria: string
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha: Date | string
    estacion: EstacionCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateInput = {
    id?: number
    estacionId: number
    categoria: string
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha: Date | string
  }

  export type GastoUpdateInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estacion?: EstacionUpdateOneRequiredWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoCreateManyInput = {
    id?: number
    estacionId: number
    categoria: string
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha: Date | string
  }

  export type GastoUpdateManyMutationInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MaquinaListRelationFilter = {
    every?: MaquinaWhereInput
    some?: MaquinaWhereInput
    none?: MaquinaWhereInput
  }

  export type TanqueListRelationFilter = {
    every?: TanqueWhereInput
    some?: TanqueWhereInput
    none?: TanqueWhereInput
  }

  export type EmpleadoListRelationFilter = {
    every?: EmpleadoWhereInput
    some?: EmpleadoWhereInput
    none?: EmpleadoWhereInput
  }

  export type JornadaListRelationFilter = {
    every?: JornadaWhereInput
    some?: JornadaWhereInput
    none?: JornadaWhereInput
  }

  export type GastoListRelationFilter = {
    every?: GastoWhereInput
    some?: GastoWhereInput
    none?: GastoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MaquinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TanqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpleadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JornadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GastoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstacionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
  }

  export type EstacionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstacionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
  }

  export type EstacionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
  }

  export type EstacionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumDireccionContadorFilter<$PrismaModel = never> = {
    equals?: $Enums.DireccionContador | EnumDireccionContadorFieldRefInput<$PrismaModel>
    in?: $Enums.DireccionContador[] | ListEnumDireccionContadorFieldRefInput<$PrismaModel>
    notIn?: $Enums.DireccionContador[] | ListEnumDireccionContadorFieldRefInput<$PrismaModel>
    not?: NestedEnumDireccionContadorFilter<$PrismaModel> | $Enums.DireccionContador
  }

  export type EstacionScalarRelationFilter = {
    is?: EstacionWhereInput
    isNot?: EstacionWhereInput
  }

  export type MaquinaEstacionIdNombreCompoundUniqueInput = {
    estacionId: number
    nombre: string
  }

  export type MaquinaCountOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
    moduloContador?: SortOrder
    direccionTotalizador?: SortOrder
    direccionProductos?: SortOrder
  }

  export type MaquinaAvgOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    moduloContador?: SortOrder
  }

  export type MaquinaMaxOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
    moduloContador?: SortOrder
    direccionTotalizador?: SortOrder
    direccionProductos?: SortOrder
  }

  export type MaquinaMinOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
    moduloContador?: SortOrder
    direccionTotalizador?: SortOrder
    direccionProductos?: SortOrder
  }

  export type MaquinaSumOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    moduloContador?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumDireccionContadorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DireccionContador | EnumDireccionContadorFieldRefInput<$PrismaModel>
    in?: $Enums.DireccionContador[] | ListEnumDireccionContadorFieldRefInput<$PrismaModel>
    notIn?: $Enums.DireccionContador[] | ListEnumDireccionContadorFieldRefInput<$PrismaModel>
    not?: NestedEnumDireccionContadorWithAggregatesFilter<$PrismaModel> | $Enums.DireccionContador
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDireccionContadorFilter<$PrismaModel>
    _max?: NestedEnumDireccionContadorFilter<$PrismaModel>
  }

  export type HistorialPrecioListRelationFilter = {
    every?: HistorialPrecioWhereInput
    some?: HistorialPrecioWhereInput
    none?: HistorialPrecioWhereInput
  }

  export type LecturaJornadaListRelationFilter = {
    every?: LecturaJornadaWhereInput
    some?: LecturaJornadaWhereInput
    none?: LecturaJornadaWhereInput
  }

  export type HistorialPrecioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturaJornadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CombustibleCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CombustibleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CombustibleMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CombustibleMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CombustibleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CombustibleScalarRelationFilter = {
    is?: CombustibleWhereInput
    isNot?: CombustibleWhereInput
  }

  export type HistorialPrecioCountOrderByAggregateInput = {
    id?: SortOrder
    combustibleId?: SortOrder
    precio?: SortOrder
    vigenteDesde?: SortOrder
  }

  export type HistorialPrecioAvgOrderByAggregateInput = {
    id?: SortOrder
    combustibleId?: SortOrder
    precio?: SortOrder
  }

  export type HistorialPrecioMaxOrderByAggregateInput = {
    id?: SortOrder
    combustibleId?: SortOrder
    precio?: SortOrder
    vigenteDesde?: SortOrder
  }

  export type HistorialPrecioMinOrderByAggregateInput = {
    id?: SortOrder
    combustibleId?: SortOrder
    precio?: SortOrder
    vigenteDesde?: SortOrder
  }

  export type HistorialPrecioSumOrderByAggregateInput = {
    id?: SortOrder
    combustibleId?: SortOrder
    precio?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type MovimientoStockListRelationFilter = {
    every?: MovimientoStockWhereInput
    some?: MovimientoStockWhereInput
    none?: MovimientoStockWhereInput
  }

  export type MovimientoStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TanqueEstacionIdCombustibleIdCompoundUniqueInput = {
    estacionId: number
    combustibleId: number
  }

  export type TanqueCountOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    combustibleId?: SortOrder
    capacidad?: SortOrder
    minimo?: SortOrder
  }

  export type TanqueAvgOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    combustibleId?: SortOrder
    capacidad?: SortOrder
    minimo?: SortOrder
  }

  export type TanqueMaxOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    combustibleId?: SortOrder
    capacidad?: SortOrder
    minimo?: SortOrder
  }

  export type TanqueMinOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    combustibleId?: SortOrder
    capacidad?: SortOrder
    minimo?: SortOrder
  }

  export type TanqueSumOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    combustibleId?: SortOrder
    capacidad?: SortOrder
    minimo?: SortOrder
  }

  export type EnumTipoMovimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoFilter<$PrismaModel> | $Enums.TipoMovimiento
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TanqueScalarRelationFilter = {
    is?: TanqueWhereInput
    isNot?: TanqueWhereInput
  }

  export type JornadaNullableScalarRelationFilter = {
    is?: JornadaWhereInput | null
    isNot?: JornadaWhereInput | null
  }

  export type MovimientoStockCountOrderByAggregateInput = {
    id?: SortOrder
    tanqueId?: SortOrder
    tipo?: SortOrder
    galones?: SortOrder
    fecha?: SortOrder
    jornadaId?: SortOrder
    nota?: SortOrder
  }

  export type MovimientoStockAvgOrderByAggregateInput = {
    id?: SortOrder
    tanqueId?: SortOrder
    galones?: SortOrder
    jornadaId?: SortOrder
  }

  export type MovimientoStockMaxOrderByAggregateInput = {
    id?: SortOrder
    tanqueId?: SortOrder
    tipo?: SortOrder
    galones?: SortOrder
    fecha?: SortOrder
    jornadaId?: SortOrder
    nota?: SortOrder
  }

  export type MovimientoStockMinOrderByAggregateInput = {
    id?: SortOrder
    tanqueId?: SortOrder
    tipo?: SortOrder
    galones?: SortOrder
    fecha?: SortOrder
    jornadaId?: SortOrder
    nota?: SortOrder
  }

  export type MovimientoStockSumOrderByAggregateInput = {
    id?: SortOrder
    tanqueId?: SortOrder
    galones?: SortOrder
    jornadaId?: SortOrder
  }

  export type EnumTipoMovimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimientoFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EmpleadoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estacionId?: SortOrder
    horarioInicio?: SortOrder
    horarioFin?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpleadoAvgOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
  }

  export type EmpleadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estacionId?: SortOrder
    horarioInicio?: SortOrder
    horarioFin?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpleadoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estacionId?: SortOrder
    horarioInicio?: SortOrder
    horarioFin?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpleadoSumOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumEstadoJornadaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoJornada | EnumEstadoJornadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoJornadaFilter<$PrismaModel> | $Enums.EstadoJornada
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EmpleadoScalarRelationFilter = {
    is?: EmpleadoWhereInput
    isNot?: EmpleadoWhereInput
  }

  export type MaquinaScalarRelationFilter = {
    is?: MaquinaWhereInput
    isNot?: MaquinaWhereInput
  }

  export type PagoJornadaListRelationFilter = {
    every?: PagoJornadaWhereInput
    some?: PagoJornadaWhereInput
    none?: PagoJornadaWhereInput
  }

  export type PagoJornadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JornadaCountOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    maquinaId?: SortOrder
    estacionId?: SortOrder
    inicio?: SortOrder
    fin?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    totalizadorEntrada?: SortOrder
    totalizadorSalida?: SortOrder
    galonesTotalizador?: SortOrder
    galonesProductos?: SortOrder
    diferenciaControl?: SortOrder
    importeEsperado?: SortOrder
    importeDeclarado?: SortOrder
    diferenciaCaja?: SortOrder
  }

  export type JornadaAvgOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    maquinaId?: SortOrder
    estacionId?: SortOrder
    totalizadorEntrada?: SortOrder
    totalizadorSalida?: SortOrder
    galonesTotalizador?: SortOrder
    galonesProductos?: SortOrder
    diferenciaControl?: SortOrder
    importeEsperado?: SortOrder
    importeDeclarado?: SortOrder
    diferenciaCaja?: SortOrder
  }

  export type JornadaMaxOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    maquinaId?: SortOrder
    estacionId?: SortOrder
    inicio?: SortOrder
    fin?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    totalizadorEntrada?: SortOrder
    totalizadorSalida?: SortOrder
    galonesTotalizador?: SortOrder
    galonesProductos?: SortOrder
    diferenciaControl?: SortOrder
    importeEsperado?: SortOrder
    importeDeclarado?: SortOrder
    diferenciaCaja?: SortOrder
  }

  export type JornadaMinOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    maquinaId?: SortOrder
    estacionId?: SortOrder
    inicio?: SortOrder
    fin?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    totalizadorEntrada?: SortOrder
    totalizadorSalida?: SortOrder
    galonesTotalizador?: SortOrder
    galonesProductos?: SortOrder
    diferenciaControl?: SortOrder
    importeEsperado?: SortOrder
    importeDeclarado?: SortOrder
    diferenciaCaja?: SortOrder
  }

  export type JornadaSumOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    maquinaId?: SortOrder
    estacionId?: SortOrder
    totalizadorEntrada?: SortOrder
    totalizadorSalida?: SortOrder
    galonesTotalizador?: SortOrder
    galonesProductos?: SortOrder
    diferenciaControl?: SortOrder
    importeEsperado?: SortOrder
    importeDeclarado?: SortOrder
    diferenciaCaja?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEstadoJornadaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoJornada | EnumEstadoJornadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoJornadaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoJornada
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoJornadaFilter<$PrismaModel>
    _max?: NestedEnumEstadoJornadaFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type JornadaScalarRelationFilter = {
    is?: JornadaWhereInput
    isNot?: JornadaWhereInput
  }

  export type LecturaJornadaJornadaIdCombustibleIdCompoundUniqueInput = {
    jornadaId: number
    combustibleId: number
  }

  export type LecturaJornadaCountOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    combustibleId?: SortOrder
    entradaAtras?: SortOrder
    entradaAdelante?: SortOrder
    salidaAtras?: SortOrder
    salidaAdelante?: SortOrder
    huboReinicio?: SortOrder
    galones?: SortOrder
    precioUnitario?: SortOrder
    importe?: SortOrder
  }

  export type LecturaJornadaAvgOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    combustibleId?: SortOrder
    entradaAtras?: SortOrder
    entradaAdelante?: SortOrder
    salidaAtras?: SortOrder
    salidaAdelante?: SortOrder
    galones?: SortOrder
    precioUnitario?: SortOrder
    importe?: SortOrder
  }

  export type LecturaJornadaMaxOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    combustibleId?: SortOrder
    entradaAtras?: SortOrder
    entradaAdelante?: SortOrder
    salidaAtras?: SortOrder
    salidaAdelante?: SortOrder
    huboReinicio?: SortOrder
    galones?: SortOrder
    precioUnitario?: SortOrder
    importe?: SortOrder
  }

  export type LecturaJornadaMinOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    combustibleId?: SortOrder
    entradaAtras?: SortOrder
    entradaAdelante?: SortOrder
    salidaAtras?: SortOrder
    salidaAdelante?: SortOrder
    huboReinicio?: SortOrder
    galones?: SortOrder
    precioUnitario?: SortOrder
    importe?: SortOrder
  }

  export type LecturaJornadaSumOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    combustibleId?: SortOrder
    entradaAtras?: SortOrder
    entradaAdelante?: SortOrder
    salidaAtras?: SortOrder
    salidaAdelante?: SortOrder
    galones?: SortOrder
    precioUnitario?: SortOrder
    importe?: SortOrder
  }

  export type EnumMedioPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MedioPago | EnumMedioPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MedioPago[] | ListEnumMedioPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedioPago[] | ListEnumMedioPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMedioPagoFilter<$PrismaModel> | $Enums.MedioPago
  }

  export type PagoJornadaCountOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    medio?: SortOrder
    monto?: SortOrder
    nota?: SortOrder
  }

  export type PagoJornadaAvgOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    monto?: SortOrder
  }

  export type PagoJornadaMaxOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    medio?: SortOrder
    monto?: SortOrder
    nota?: SortOrder
  }

  export type PagoJornadaMinOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    medio?: SortOrder
    monto?: SortOrder
    nota?: SortOrder
  }

  export type PagoJornadaSumOrderByAggregateInput = {
    id?: SortOrder
    jornadaId?: SortOrder
    monto?: SortOrder
  }

  export type EnumMedioPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedioPago | EnumMedioPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MedioPago[] | ListEnumMedioPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedioPago[] | ListEnumMedioPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMedioPagoWithAggregatesFilter<$PrismaModel> | $Enums.MedioPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedioPagoFilter<$PrismaModel>
    _max?: NestedEnumMedioPagoFilter<$PrismaModel>
  }

  export type GastoCountOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    categoria?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
  }

  export type GastoAvgOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    monto?: SortOrder
  }

  export type GastoMaxOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    categoria?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
  }

  export type GastoMinOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    categoria?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
  }

  export type GastoSumOrderByAggregateInput = {
    id?: SortOrder
    estacionId?: SortOrder
    monto?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MaquinaCreateNestedManyWithoutEstacionInput = {
    create?: XOR<MaquinaCreateWithoutEstacionInput, MaquinaUncheckedCreateWithoutEstacionInput> | MaquinaCreateWithoutEstacionInput[] | MaquinaUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: MaquinaCreateOrConnectWithoutEstacionInput | MaquinaCreateOrConnectWithoutEstacionInput[]
    createMany?: MaquinaCreateManyEstacionInputEnvelope
    connect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
  }

  export type TanqueCreateNestedManyWithoutEstacionInput = {
    create?: XOR<TanqueCreateWithoutEstacionInput, TanqueUncheckedCreateWithoutEstacionInput> | TanqueCreateWithoutEstacionInput[] | TanqueUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: TanqueCreateOrConnectWithoutEstacionInput | TanqueCreateOrConnectWithoutEstacionInput[]
    createMany?: TanqueCreateManyEstacionInputEnvelope
    connect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
  }

  export type EmpleadoCreateNestedManyWithoutEstacionInput = {
    create?: XOR<EmpleadoCreateWithoutEstacionInput, EmpleadoUncheckedCreateWithoutEstacionInput> | EmpleadoCreateWithoutEstacionInput[] | EmpleadoUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutEstacionInput | EmpleadoCreateOrConnectWithoutEstacionInput[]
    createMany?: EmpleadoCreateManyEstacionInputEnvelope
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
  }

  export type JornadaCreateNestedManyWithoutEstacionInput = {
    create?: XOR<JornadaCreateWithoutEstacionInput, JornadaUncheckedCreateWithoutEstacionInput> | JornadaCreateWithoutEstacionInput[] | JornadaUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutEstacionInput | JornadaCreateOrConnectWithoutEstacionInput[]
    createMany?: JornadaCreateManyEstacionInputEnvelope
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
  }

  export type GastoCreateNestedManyWithoutEstacionInput = {
    create?: XOR<GastoCreateWithoutEstacionInput, GastoUncheckedCreateWithoutEstacionInput> | GastoCreateWithoutEstacionInput[] | GastoUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutEstacionInput | GastoCreateOrConnectWithoutEstacionInput[]
    createMany?: GastoCreateManyEstacionInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type MaquinaUncheckedCreateNestedManyWithoutEstacionInput = {
    create?: XOR<MaquinaCreateWithoutEstacionInput, MaquinaUncheckedCreateWithoutEstacionInput> | MaquinaCreateWithoutEstacionInput[] | MaquinaUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: MaquinaCreateOrConnectWithoutEstacionInput | MaquinaCreateOrConnectWithoutEstacionInput[]
    createMany?: MaquinaCreateManyEstacionInputEnvelope
    connect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
  }

  export type TanqueUncheckedCreateNestedManyWithoutEstacionInput = {
    create?: XOR<TanqueCreateWithoutEstacionInput, TanqueUncheckedCreateWithoutEstacionInput> | TanqueCreateWithoutEstacionInput[] | TanqueUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: TanqueCreateOrConnectWithoutEstacionInput | TanqueCreateOrConnectWithoutEstacionInput[]
    createMany?: TanqueCreateManyEstacionInputEnvelope
    connect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
  }

  export type EmpleadoUncheckedCreateNestedManyWithoutEstacionInput = {
    create?: XOR<EmpleadoCreateWithoutEstacionInput, EmpleadoUncheckedCreateWithoutEstacionInput> | EmpleadoCreateWithoutEstacionInput[] | EmpleadoUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutEstacionInput | EmpleadoCreateOrConnectWithoutEstacionInput[]
    createMany?: EmpleadoCreateManyEstacionInputEnvelope
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
  }

  export type JornadaUncheckedCreateNestedManyWithoutEstacionInput = {
    create?: XOR<JornadaCreateWithoutEstacionInput, JornadaUncheckedCreateWithoutEstacionInput> | JornadaCreateWithoutEstacionInput[] | JornadaUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutEstacionInput | JornadaCreateOrConnectWithoutEstacionInput[]
    createMany?: JornadaCreateManyEstacionInputEnvelope
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutEstacionInput = {
    create?: XOR<GastoCreateWithoutEstacionInput, GastoUncheckedCreateWithoutEstacionInput> | GastoCreateWithoutEstacionInput[] | GastoUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutEstacionInput | GastoCreateOrConnectWithoutEstacionInput[]
    createMany?: GastoCreateManyEstacionInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MaquinaUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<MaquinaCreateWithoutEstacionInput, MaquinaUncheckedCreateWithoutEstacionInput> | MaquinaCreateWithoutEstacionInput[] | MaquinaUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: MaquinaCreateOrConnectWithoutEstacionInput | MaquinaCreateOrConnectWithoutEstacionInput[]
    upsert?: MaquinaUpsertWithWhereUniqueWithoutEstacionInput | MaquinaUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: MaquinaCreateManyEstacionInputEnvelope
    set?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    disconnect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    delete?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    connect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    update?: MaquinaUpdateWithWhereUniqueWithoutEstacionInput | MaquinaUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: MaquinaUpdateManyWithWhereWithoutEstacionInput | MaquinaUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: MaquinaScalarWhereInput | MaquinaScalarWhereInput[]
  }

  export type TanqueUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<TanqueCreateWithoutEstacionInput, TanqueUncheckedCreateWithoutEstacionInput> | TanqueCreateWithoutEstacionInput[] | TanqueUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: TanqueCreateOrConnectWithoutEstacionInput | TanqueCreateOrConnectWithoutEstacionInput[]
    upsert?: TanqueUpsertWithWhereUniqueWithoutEstacionInput | TanqueUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: TanqueCreateManyEstacionInputEnvelope
    set?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    disconnect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    delete?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    connect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    update?: TanqueUpdateWithWhereUniqueWithoutEstacionInput | TanqueUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: TanqueUpdateManyWithWhereWithoutEstacionInput | TanqueUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: TanqueScalarWhereInput | TanqueScalarWhereInput[]
  }

  export type EmpleadoUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<EmpleadoCreateWithoutEstacionInput, EmpleadoUncheckedCreateWithoutEstacionInput> | EmpleadoCreateWithoutEstacionInput[] | EmpleadoUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutEstacionInput | EmpleadoCreateOrConnectWithoutEstacionInput[]
    upsert?: EmpleadoUpsertWithWhereUniqueWithoutEstacionInput | EmpleadoUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: EmpleadoCreateManyEstacionInputEnvelope
    set?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    disconnect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    delete?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    update?: EmpleadoUpdateWithWhereUniqueWithoutEstacionInput | EmpleadoUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: EmpleadoUpdateManyWithWhereWithoutEstacionInput | EmpleadoUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
  }

  export type JornadaUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<JornadaCreateWithoutEstacionInput, JornadaUncheckedCreateWithoutEstacionInput> | JornadaCreateWithoutEstacionInput[] | JornadaUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutEstacionInput | JornadaCreateOrConnectWithoutEstacionInput[]
    upsert?: JornadaUpsertWithWhereUniqueWithoutEstacionInput | JornadaUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: JornadaCreateManyEstacionInputEnvelope
    set?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    disconnect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    delete?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    update?: JornadaUpdateWithWhereUniqueWithoutEstacionInput | JornadaUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: JornadaUpdateManyWithWhereWithoutEstacionInput | JornadaUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
  }

  export type GastoUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<GastoCreateWithoutEstacionInput, GastoUncheckedCreateWithoutEstacionInput> | GastoCreateWithoutEstacionInput[] | GastoUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutEstacionInput | GastoCreateOrConnectWithoutEstacionInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutEstacionInput | GastoUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: GastoCreateManyEstacionInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutEstacionInput | GastoUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutEstacionInput | GastoUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type MaquinaUncheckedUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<MaquinaCreateWithoutEstacionInput, MaquinaUncheckedCreateWithoutEstacionInput> | MaquinaCreateWithoutEstacionInput[] | MaquinaUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: MaquinaCreateOrConnectWithoutEstacionInput | MaquinaCreateOrConnectWithoutEstacionInput[]
    upsert?: MaquinaUpsertWithWhereUniqueWithoutEstacionInput | MaquinaUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: MaquinaCreateManyEstacionInputEnvelope
    set?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    disconnect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    delete?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    connect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    update?: MaquinaUpdateWithWhereUniqueWithoutEstacionInput | MaquinaUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: MaquinaUpdateManyWithWhereWithoutEstacionInput | MaquinaUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: MaquinaScalarWhereInput | MaquinaScalarWhereInput[]
  }

  export type TanqueUncheckedUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<TanqueCreateWithoutEstacionInput, TanqueUncheckedCreateWithoutEstacionInput> | TanqueCreateWithoutEstacionInput[] | TanqueUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: TanqueCreateOrConnectWithoutEstacionInput | TanqueCreateOrConnectWithoutEstacionInput[]
    upsert?: TanqueUpsertWithWhereUniqueWithoutEstacionInput | TanqueUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: TanqueCreateManyEstacionInputEnvelope
    set?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    disconnect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    delete?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    connect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    update?: TanqueUpdateWithWhereUniqueWithoutEstacionInput | TanqueUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: TanqueUpdateManyWithWhereWithoutEstacionInput | TanqueUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: TanqueScalarWhereInput | TanqueScalarWhereInput[]
  }

  export type EmpleadoUncheckedUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<EmpleadoCreateWithoutEstacionInput, EmpleadoUncheckedCreateWithoutEstacionInput> | EmpleadoCreateWithoutEstacionInput[] | EmpleadoUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutEstacionInput | EmpleadoCreateOrConnectWithoutEstacionInput[]
    upsert?: EmpleadoUpsertWithWhereUniqueWithoutEstacionInput | EmpleadoUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: EmpleadoCreateManyEstacionInputEnvelope
    set?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    disconnect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    delete?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    update?: EmpleadoUpdateWithWhereUniqueWithoutEstacionInput | EmpleadoUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: EmpleadoUpdateManyWithWhereWithoutEstacionInput | EmpleadoUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
  }

  export type JornadaUncheckedUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<JornadaCreateWithoutEstacionInput, JornadaUncheckedCreateWithoutEstacionInput> | JornadaCreateWithoutEstacionInput[] | JornadaUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutEstacionInput | JornadaCreateOrConnectWithoutEstacionInput[]
    upsert?: JornadaUpsertWithWhereUniqueWithoutEstacionInput | JornadaUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: JornadaCreateManyEstacionInputEnvelope
    set?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    disconnect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    delete?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    update?: JornadaUpdateWithWhereUniqueWithoutEstacionInput | JornadaUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: JornadaUpdateManyWithWhereWithoutEstacionInput | JornadaUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
  }

  export type GastoUncheckedUpdateManyWithoutEstacionNestedInput = {
    create?: XOR<GastoCreateWithoutEstacionInput, GastoUncheckedCreateWithoutEstacionInput> | GastoCreateWithoutEstacionInput[] | GastoUncheckedCreateWithoutEstacionInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutEstacionInput | GastoCreateOrConnectWithoutEstacionInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutEstacionInput | GastoUpsertWithWhereUniqueWithoutEstacionInput[]
    createMany?: GastoCreateManyEstacionInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutEstacionInput | GastoUpdateWithWhereUniqueWithoutEstacionInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutEstacionInput | GastoUpdateManyWithWhereWithoutEstacionInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type EstacionCreateNestedOneWithoutMaquinasInput = {
    create?: XOR<EstacionCreateWithoutMaquinasInput, EstacionUncheckedCreateWithoutMaquinasInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutMaquinasInput
    connect?: EstacionWhereUniqueInput
  }

  export type JornadaCreateNestedManyWithoutMaquinaInput = {
    create?: XOR<JornadaCreateWithoutMaquinaInput, JornadaUncheckedCreateWithoutMaquinaInput> | JornadaCreateWithoutMaquinaInput[] | JornadaUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutMaquinaInput | JornadaCreateOrConnectWithoutMaquinaInput[]
    createMany?: JornadaCreateManyMaquinaInputEnvelope
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
  }

  export type JornadaUncheckedCreateNestedManyWithoutMaquinaInput = {
    create?: XOR<JornadaCreateWithoutMaquinaInput, JornadaUncheckedCreateWithoutMaquinaInput> | JornadaCreateWithoutMaquinaInput[] | JornadaUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutMaquinaInput | JornadaCreateOrConnectWithoutMaquinaInput[]
    createMany?: JornadaCreateManyMaquinaInputEnvelope
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumDireccionContadorFieldUpdateOperationsInput = {
    set?: $Enums.DireccionContador
  }

  export type EstacionUpdateOneRequiredWithoutMaquinasNestedInput = {
    create?: XOR<EstacionCreateWithoutMaquinasInput, EstacionUncheckedCreateWithoutMaquinasInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutMaquinasInput
    upsert?: EstacionUpsertWithoutMaquinasInput
    connect?: EstacionWhereUniqueInput
    update?: XOR<XOR<EstacionUpdateToOneWithWhereWithoutMaquinasInput, EstacionUpdateWithoutMaquinasInput>, EstacionUncheckedUpdateWithoutMaquinasInput>
  }

  export type JornadaUpdateManyWithoutMaquinaNestedInput = {
    create?: XOR<JornadaCreateWithoutMaquinaInput, JornadaUncheckedCreateWithoutMaquinaInput> | JornadaCreateWithoutMaquinaInput[] | JornadaUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutMaquinaInput | JornadaCreateOrConnectWithoutMaquinaInput[]
    upsert?: JornadaUpsertWithWhereUniqueWithoutMaquinaInput | JornadaUpsertWithWhereUniqueWithoutMaquinaInput[]
    createMany?: JornadaCreateManyMaquinaInputEnvelope
    set?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    disconnect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    delete?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    update?: JornadaUpdateWithWhereUniqueWithoutMaquinaInput | JornadaUpdateWithWhereUniqueWithoutMaquinaInput[]
    updateMany?: JornadaUpdateManyWithWhereWithoutMaquinaInput | JornadaUpdateManyWithWhereWithoutMaquinaInput[]
    deleteMany?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
  }

  export type JornadaUncheckedUpdateManyWithoutMaquinaNestedInput = {
    create?: XOR<JornadaCreateWithoutMaquinaInput, JornadaUncheckedCreateWithoutMaquinaInput> | JornadaCreateWithoutMaquinaInput[] | JornadaUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutMaquinaInput | JornadaCreateOrConnectWithoutMaquinaInput[]
    upsert?: JornadaUpsertWithWhereUniqueWithoutMaquinaInput | JornadaUpsertWithWhereUniqueWithoutMaquinaInput[]
    createMany?: JornadaCreateManyMaquinaInputEnvelope
    set?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    disconnect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    delete?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    update?: JornadaUpdateWithWhereUniqueWithoutMaquinaInput | JornadaUpdateWithWhereUniqueWithoutMaquinaInput[]
    updateMany?: JornadaUpdateManyWithWhereWithoutMaquinaInput | JornadaUpdateManyWithWhereWithoutMaquinaInput[]
    deleteMany?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
  }

  export type HistorialPrecioCreateNestedManyWithoutCombustibleInput = {
    create?: XOR<HistorialPrecioCreateWithoutCombustibleInput, HistorialPrecioUncheckedCreateWithoutCombustibleInput> | HistorialPrecioCreateWithoutCombustibleInput[] | HistorialPrecioUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: HistorialPrecioCreateOrConnectWithoutCombustibleInput | HistorialPrecioCreateOrConnectWithoutCombustibleInput[]
    createMany?: HistorialPrecioCreateManyCombustibleInputEnvelope
    connect?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
  }

  export type TanqueCreateNestedManyWithoutCombustibleInput = {
    create?: XOR<TanqueCreateWithoutCombustibleInput, TanqueUncheckedCreateWithoutCombustibleInput> | TanqueCreateWithoutCombustibleInput[] | TanqueUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: TanqueCreateOrConnectWithoutCombustibleInput | TanqueCreateOrConnectWithoutCombustibleInput[]
    createMany?: TanqueCreateManyCombustibleInputEnvelope
    connect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
  }

  export type LecturaJornadaCreateNestedManyWithoutCombustibleInput = {
    create?: XOR<LecturaJornadaCreateWithoutCombustibleInput, LecturaJornadaUncheckedCreateWithoutCombustibleInput> | LecturaJornadaCreateWithoutCombustibleInput[] | LecturaJornadaUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: LecturaJornadaCreateOrConnectWithoutCombustibleInput | LecturaJornadaCreateOrConnectWithoutCombustibleInput[]
    createMany?: LecturaJornadaCreateManyCombustibleInputEnvelope
    connect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
  }

  export type HistorialPrecioUncheckedCreateNestedManyWithoutCombustibleInput = {
    create?: XOR<HistorialPrecioCreateWithoutCombustibleInput, HistorialPrecioUncheckedCreateWithoutCombustibleInput> | HistorialPrecioCreateWithoutCombustibleInput[] | HistorialPrecioUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: HistorialPrecioCreateOrConnectWithoutCombustibleInput | HistorialPrecioCreateOrConnectWithoutCombustibleInput[]
    createMany?: HistorialPrecioCreateManyCombustibleInputEnvelope
    connect?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
  }

  export type TanqueUncheckedCreateNestedManyWithoutCombustibleInput = {
    create?: XOR<TanqueCreateWithoutCombustibleInput, TanqueUncheckedCreateWithoutCombustibleInput> | TanqueCreateWithoutCombustibleInput[] | TanqueUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: TanqueCreateOrConnectWithoutCombustibleInput | TanqueCreateOrConnectWithoutCombustibleInput[]
    createMany?: TanqueCreateManyCombustibleInputEnvelope
    connect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
  }

  export type LecturaJornadaUncheckedCreateNestedManyWithoutCombustibleInput = {
    create?: XOR<LecturaJornadaCreateWithoutCombustibleInput, LecturaJornadaUncheckedCreateWithoutCombustibleInput> | LecturaJornadaCreateWithoutCombustibleInput[] | LecturaJornadaUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: LecturaJornadaCreateOrConnectWithoutCombustibleInput | LecturaJornadaCreateOrConnectWithoutCombustibleInput[]
    createMany?: LecturaJornadaCreateManyCombustibleInputEnvelope
    connect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
  }

  export type HistorialPrecioUpdateManyWithoutCombustibleNestedInput = {
    create?: XOR<HistorialPrecioCreateWithoutCombustibleInput, HistorialPrecioUncheckedCreateWithoutCombustibleInput> | HistorialPrecioCreateWithoutCombustibleInput[] | HistorialPrecioUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: HistorialPrecioCreateOrConnectWithoutCombustibleInput | HistorialPrecioCreateOrConnectWithoutCombustibleInput[]
    upsert?: HistorialPrecioUpsertWithWhereUniqueWithoutCombustibleInput | HistorialPrecioUpsertWithWhereUniqueWithoutCombustibleInput[]
    createMany?: HistorialPrecioCreateManyCombustibleInputEnvelope
    set?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
    disconnect?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
    delete?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
    connect?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
    update?: HistorialPrecioUpdateWithWhereUniqueWithoutCombustibleInput | HistorialPrecioUpdateWithWhereUniqueWithoutCombustibleInput[]
    updateMany?: HistorialPrecioUpdateManyWithWhereWithoutCombustibleInput | HistorialPrecioUpdateManyWithWhereWithoutCombustibleInput[]
    deleteMany?: HistorialPrecioScalarWhereInput | HistorialPrecioScalarWhereInput[]
  }

  export type TanqueUpdateManyWithoutCombustibleNestedInput = {
    create?: XOR<TanqueCreateWithoutCombustibleInput, TanqueUncheckedCreateWithoutCombustibleInput> | TanqueCreateWithoutCombustibleInput[] | TanqueUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: TanqueCreateOrConnectWithoutCombustibleInput | TanqueCreateOrConnectWithoutCombustibleInput[]
    upsert?: TanqueUpsertWithWhereUniqueWithoutCombustibleInput | TanqueUpsertWithWhereUniqueWithoutCombustibleInput[]
    createMany?: TanqueCreateManyCombustibleInputEnvelope
    set?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    disconnect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    delete?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    connect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    update?: TanqueUpdateWithWhereUniqueWithoutCombustibleInput | TanqueUpdateWithWhereUniqueWithoutCombustibleInput[]
    updateMany?: TanqueUpdateManyWithWhereWithoutCombustibleInput | TanqueUpdateManyWithWhereWithoutCombustibleInput[]
    deleteMany?: TanqueScalarWhereInput | TanqueScalarWhereInput[]
  }

  export type LecturaJornadaUpdateManyWithoutCombustibleNestedInput = {
    create?: XOR<LecturaJornadaCreateWithoutCombustibleInput, LecturaJornadaUncheckedCreateWithoutCombustibleInput> | LecturaJornadaCreateWithoutCombustibleInput[] | LecturaJornadaUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: LecturaJornadaCreateOrConnectWithoutCombustibleInput | LecturaJornadaCreateOrConnectWithoutCombustibleInput[]
    upsert?: LecturaJornadaUpsertWithWhereUniqueWithoutCombustibleInput | LecturaJornadaUpsertWithWhereUniqueWithoutCombustibleInput[]
    createMany?: LecturaJornadaCreateManyCombustibleInputEnvelope
    set?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    disconnect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    delete?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    connect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    update?: LecturaJornadaUpdateWithWhereUniqueWithoutCombustibleInput | LecturaJornadaUpdateWithWhereUniqueWithoutCombustibleInput[]
    updateMany?: LecturaJornadaUpdateManyWithWhereWithoutCombustibleInput | LecturaJornadaUpdateManyWithWhereWithoutCombustibleInput[]
    deleteMany?: LecturaJornadaScalarWhereInput | LecturaJornadaScalarWhereInput[]
  }

  export type HistorialPrecioUncheckedUpdateManyWithoutCombustibleNestedInput = {
    create?: XOR<HistorialPrecioCreateWithoutCombustibleInput, HistorialPrecioUncheckedCreateWithoutCombustibleInput> | HistorialPrecioCreateWithoutCombustibleInput[] | HistorialPrecioUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: HistorialPrecioCreateOrConnectWithoutCombustibleInput | HistorialPrecioCreateOrConnectWithoutCombustibleInput[]
    upsert?: HistorialPrecioUpsertWithWhereUniqueWithoutCombustibleInput | HistorialPrecioUpsertWithWhereUniqueWithoutCombustibleInput[]
    createMany?: HistorialPrecioCreateManyCombustibleInputEnvelope
    set?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
    disconnect?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
    delete?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
    connect?: HistorialPrecioWhereUniqueInput | HistorialPrecioWhereUniqueInput[]
    update?: HistorialPrecioUpdateWithWhereUniqueWithoutCombustibleInput | HistorialPrecioUpdateWithWhereUniqueWithoutCombustibleInput[]
    updateMany?: HistorialPrecioUpdateManyWithWhereWithoutCombustibleInput | HistorialPrecioUpdateManyWithWhereWithoutCombustibleInput[]
    deleteMany?: HistorialPrecioScalarWhereInput | HistorialPrecioScalarWhereInput[]
  }

  export type TanqueUncheckedUpdateManyWithoutCombustibleNestedInput = {
    create?: XOR<TanqueCreateWithoutCombustibleInput, TanqueUncheckedCreateWithoutCombustibleInput> | TanqueCreateWithoutCombustibleInput[] | TanqueUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: TanqueCreateOrConnectWithoutCombustibleInput | TanqueCreateOrConnectWithoutCombustibleInput[]
    upsert?: TanqueUpsertWithWhereUniqueWithoutCombustibleInput | TanqueUpsertWithWhereUniqueWithoutCombustibleInput[]
    createMany?: TanqueCreateManyCombustibleInputEnvelope
    set?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    disconnect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    delete?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    connect?: TanqueWhereUniqueInput | TanqueWhereUniqueInput[]
    update?: TanqueUpdateWithWhereUniqueWithoutCombustibleInput | TanqueUpdateWithWhereUniqueWithoutCombustibleInput[]
    updateMany?: TanqueUpdateManyWithWhereWithoutCombustibleInput | TanqueUpdateManyWithWhereWithoutCombustibleInput[]
    deleteMany?: TanqueScalarWhereInput | TanqueScalarWhereInput[]
  }

  export type LecturaJornadaUncheckedUpdateManyWithoutCombustibleNestedInput = {
    create?: XOR<LecturaJornadaCreateWithoutCombustibleInput, LecturaJornadaUncheckedCreateWithoutCombustibleInput> | LecturaJornadaCreateWithoutCombustibleInput[] | LecturaJornadaUncheckedCreateWithoutCombustibleInput[]
    connectOrCreate?: LecturaJornadaCreateOrConnectWithoutCombustibleInput | LecturaJornadaCreateOrConnectWithoutCombustibleInput[]
    upsert?: LecturaJornadaUpsertWithWhereUniqueWithoutCombustibleInput | LecturaJornadaUpsertWithWhereUniqueWithoutCombustibleInput[]
    createMany?: LecturaJornadaCreateManyCombustibleInputEnvelope
    set?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    disconnect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    delete?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    connect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    update?: LecturaJornadaUpdateWithWhereUniqueWithoutCombustibleInput | LecturaJornadaUpdateWithWhereUniqueWithoutCombustibleInput[]
    updateMany?: LecturaJornadaUpdateManyWithWhereWithoutCombustibleInput | LecturaJornadaUpdateManyWithWhereWithoutCombustibleInput[]
    deleteMany?: LecturaJornadaScalarWhereInput | LecturaJornadaScalarWhereInput[]
  }

  export type CombustibleCreateNestedOneWithoutPreciosInput = {
    create?: XOR<CombustibleCreateWithoutPreciosInput, CombustibleUncheckedCreateWithoutPreciosInput>
    connectOrCreate?: CombustibleCreateOrConnectWithoutPreciosInput
    connect?: CombustibleWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CombustibleUpdateOneRequiredWithoutPreciosNestedInput = {
    create?: XOR<CombustibleCreateWithoutPreciosInput, CombustibleUncheckedCreateWithoutPreciosInput>
    connectOrCreate?: CombustibleCreateOrConnectWithoutPreciosInput
    upsert?: CombustibleUpsertWithoutPreciosInput
    connect?: CombustibleWhereUniqueInput
    update?: XOR<XOR<CombustibleUpdateToOneWithWhereWithoutPreciosInput, CombustibleUpdateWithoutPreciosInput>, CombustibleUncheckedUpdateWithoutPreciosInput>
  }

  export type EstacionCreateNestedOneWithoutTanquesInput = {
    create?: XOR<EstacionCreateWithoutTanquesInput, EstacionUncheckedCreateWithoutTanquesInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutTanquesInput
    connect?: EstacionWhereUniqueInput
  }

  export type CombustibleCreateNestedOneWithoutTanquesInput = {
    create?: XOR<CombustibleCreateWithoutTanquesInput, CombustibleUncheckedCreateWithoutTanquesInput>
    connectOrCreate?: CombustibleCreateOrConnectWithoutTanquesInput
    connect?: CombustibleWhereUniqueInput
  }

  export type MovimientoStockCreateNestedManyWithoutTanqueInput = {
    create?: XOR<MovimientoStockCreateWithoutTanqueInput, MovimientoStockUncheckedCreateWithoutTanqueInput> | MovimientoStockCreateWithoutTanqueInput[] | MovimientoStockUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutTanqueInput | MovimientoStockCreateOrConnectWithoutTanqueInput[]
    createMany?: MovimientoStockCreateManyTanqueInputEnvelope
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
  }

  export type MovimientoStockUncheckedCreateNestedManyWithoutTanqueInput = {
    create?: XOR<MovimientoStockCreateWithoutTanqueInput, MovimientoStockUncheckedCreateWithoutTanqueInput> | MovimientoStockCreateWithoutTanqueInput[] | MovimientoStockUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutTanqueInput | MovimientoStockCreateOrConnectWithoutTanqueInput[]
    createMany?: MovimientoStockCreateManyTanqueInputEnvelope
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
  }

  export type EstacionUpdateOneRequiredWithoutTanquesNestedInput = {
    create?: XOR<EstacionCreateWithoutTanquesInput, EstacionUncheckedCreateWithoutTanquesInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutTanquesInput
    upsert?: EstacionUpsertWithoutTanquesInput
    connect?: EstacionWhereUniqueInput
    update?: XOR<XOR<EstacionUpdateToOneWithWhereWithoutTanquesInput, EstacionUpdateWithoutTanquesInput>, EstacionUncheckedUpdateWithoutTanquesInput>
  }

  export type CombustibleUpdateOneRequiredWithoutTanquesNestedInput = {
    create?: XOR<CombustibleCreateWithoutTanquesInput, CombustibleUncheckedCreateWithoutTanquesInput>
    connectOrCreate?: CombustibleCreateOrConnectWithoutTanquesInput
    upsert?: CombustibleUpsertWithoutTanquesInput
    connect?: CombustibleWhereUniqueInput
    update?: XOR<XOR<CombustibleUpdateToOneWithWhereWithoutTanquesInput, CombustibleUpdateWithoutTanquesInput>, CombustibleUncheckedUpdateWithoutTanquesInput>
  }

  export type MovimientoStockUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<MovimientoStockCreateWithoutTanqueInput, MovimientoStockUncheckedCreateWithoutTanqueInput> | MovimientoStockCreateWithoutTanqueInput[] | MovimientoStockUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutTanqueInput | MovimientoStockCreateOrConnectWithoutTanqueInput[]
    upsert?: MovimientoStockUpsertWithWhereUniqueWithoutTanqueInput | MovimientoStockUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: MovimientoStockCreateManyTanqueInputEnvelope
    set?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    disconnect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    delete?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    update?: MovimientoStockUpdateWithWhereUniqueWithoutTanqueInput | MovimientoStockUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: MovimientoStockUpdateManyWithWhereWithoutTanqueInput | MovimientoStockUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
  }

  export type MovimientoStockUncheckedUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<MovimientoStockCreateWithoutTanqueInput, MovimientoStockUncheckedCreateWithoutTanqueInput> | MovimientoStockCreateWithoutTanqueInput[] | MovimientoStockUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutTanqueInput | MovimientoStockCreateOrConnectWithoutTanqueInput[]
    upsert?: MovimientoStockUpsertWithWhereUniqueWithoutTanqueInput | MovimientoStockUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: MovimientoStockCreateManyTanqueInputEnvelope
    set?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    disconnect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    delete?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    update?: MovimientoStockUpdateWithWhereUniqueWithoutTanqueInput | MovimientoStockUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: MovimientoStockUpdateManyWithWhereWithoutTanqueInput | MovimientoStockUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
  }

  export type TanqueCreateNestedOneWithoutMovimientosInput = {
    create?: XOR<TanqueCreateWithoutMovimientosInput, TanqueUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutMovimientosInput
    connect?: TanqueWhereUniqueInput
  }

  export type JornadaCreateNestedOneWithoutMovimientosInput = {
    create?: XOR<JornadaCreateWithoutMovimientosInput, JornadaUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: JornadaCreateOrConnectWithoutMovimientosInput
    connect?: JornadaWhereUniqueInput
  }

  export type EnumTipoMovimientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimiento
  }

  export type TanqueUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: XOR<TanqueCreateWithoutMovimientosInput, TanqueUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutMovimientosInput
    upsert?: TanqueUpsertWithoutMovimientosInput
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutMovimientosInput, TanqueUpdateWithoutMovimientosInput>, TanqueUncheckedUpdateWithoutMovimientosInput>
  }

  export type JornadaUpdateOneWithoutMovimientosNestedInput = {
    create?: XOR<JornadaCreateWithoutMovimientosInput, JornadaUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: JornadaCreateOrConnectWithoutMovimientosInput
    upsert?: JornadaUpsertWithoutMovimientosInput
    disconnect?: JornadaWhereInput | boolean
    delete?: JornadaWhereInput | boolean
    connect?: JornadaWhereUniqueInput
    update?: XOR<XOR<JornadaUpdateToOneWithWhereWithoutMovimientosInput, JornadaUpdateWithoutMovimientosInput>, JornadaUncheckedUpdateWithoutMovimientosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstacionCreateNestedOneWithoutEmpleadosInput = {
    create?: XOR<EstacionCreateWithoutEmpleadosInput, EstacionUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutEmpleadosInput
    connect?: EstacionWhereUniqueInput
  }

  export type JornadaCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<JornadaCreateWithoutEmpleadoInput, JornadaUncheckedCreateWithoutEmpleadoInput> | JornadaCreateWithoutEmpleadoInput[] | JornadaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutEmpleadoInput | JornadaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: JornadaCreateManyEmpleadoInputEnvelope
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
  }

  export type JornadaUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<JornadaCreateWithoutEmpleadoInput, JornadaUncheckedCreateWithoutEmpleadoInput> | JornadaCreateWithoutEmpleadoInput[] | JornadaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutEmpleadoInput | JornadaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: JornadaCreateManyEmpleadoInputEnvelope
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
  }

  export type EstacionUpdateOneRequiredWithoutEmpleadosNestedInput = {
    create?: XOR<EstacionCreateWithoutEmpleadosInput, EstacionUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutEmpleadosInput
    upsert?: EstacionUpsertWithoutEmpleadosInput
    connect?: EstacionWhereUniqueInput
    update?: XOR<XOR<EstacionUpdateToOneWithWhereWithoutEmpleadosInput, EstacionUpdateWithoutEmpleadosInput>, EstacionUncheckedUpdateWithoutEmpleadosInput>
  }

  export type JornadaUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<JornadaCreateWithoutEmpleadoInput, JornadaUncheckedCreateWithoutEmpleadoInput> | JornadaCreateWithoutEmpleadoInput[] | JornadaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutEmpleadoInput | JornadaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: JornadaUpsertWithWhereUniqueWithoutEmpleadoInput | JornadaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: JornadaCreateManyEmpleadoInputEnvelope
    set?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    disconnect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    delete?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    update?: JornadaUpdateWithWhereUniqueWithoutEmpleadoInput | JornadaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: JornadaUpdateManyWithWhereWithoutEmpleadoInput | JornadaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
  }

  export type JornadaUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<JornadaCreateWithoutEmpleadoInput, JornadaUncheckedCreateWithoutEmpleadoInput> | JornadaCreateWithoutEmpleadoInput[] | JornadaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutEmpleadoInput | JornadaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: JornadaUpsertWithWhereUniqueWithoutEmpleadoInput | JornadaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: JornadaCreateManyEmpleadoInputEnvelope
    set?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    disconnect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    delete?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    update?: JornadaUpdateWithWhereUniqueWithoutEmpleadoInput | JornadaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: JornadaUpdateManyWithWhereWithoutEmpleadoInput | JornadaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
  }

  export type EmpleadoCreateNestedOneWithoutJornadasInput = {
    create?: XOR<EmpleadoCreateWithoutJornadasInput, EmpleadoUncheckedCreateWithoutJornadasInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutJornadasInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type MaquinaCreateNestedOneWithoutJornadasInput = {
    create?: XOR<MaquinaCreateWithoutJornadasInput, MaquinaUncheckedCreateWithoutJornadasInput>
    connectOrCreate?: MaquinaCreateOrConnectWithoutJornadasInput
    connect?: MaquinaWhereUniqueInput
  }

  export type EstacionCreateNestedOneWithoutJornadasInput = {
    create?: XOR<EstacionCreateWithoutJornadasInput, EstacionUncheckedCreateWithoutJornadasInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutJornadasInput
    connect?: EstacionWhereUniqueInput
  }

  export type LecturaJornadaCreateNestedManyWithoutJornadaInput = {
    create?: XOR<LecturaJornadaCreateWithoutJornadaInput, LecturaJornadaUncheckedCreateWithoutJornadaInput> | LecturaJornadaCreateWithoutJornadaInput[] | LecturaJornadaUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: LecturaJornadaCreateOrConnectWithoutJornadaInput | LecturaJornadaCreateOrConnectWithoutJornadaInput[]
    createMany?: LecturaJornadaCreateManyJornadaInputEnvelope
    connect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
  }

  export type PagoJornadaCreateNestedManyWithoutJornadaInput = {
    create?: XOR<PagoJornadaCreateWithoutJornadaInput, PagoJornadaUncheckedCreateWithoutJornadaInput> | PagoJornadaCreateWithoutJornadaInput[] | PagoJornadaUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: PagoJornadaCreateOrConnectWithoutJornadaInput | PagoJornadaCreateOrConnectWithoutJornadaInput[]
    createMany?: PagoJornadaCreateManyJornadaInputEnvelope
    connect?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
  }

  export type MovimientoStockCreateNestedManyWithoutJornadaInput = {
    create?: XOR<MovimientoStockCreateWithoutJornadaInput, MovimientoStockUncheckedCreateWithoutJornadaInput> | MovimientoStockCreateWithoutJornadaInput[] | MovimientoStockUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutJornadaInput | MovimientoStockCreateOrConnectWithoutJornadaInput[]
    createMany?: MovimientoStockCreateManyJornadaInputEnvelope
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
  }

  export type LecturaJornadaUncheckedCreateNestedManyWithoutJornadaInput = {
    create?: XOR<LecturaJornadaCreateWithoutJornadaInput, LecturaJornadaUncheckedCreateWithoutJornadaInput> | LecturaJornadaCreateWithoutJornadaInput[] | LecturaJornadaUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: LecturaJornadaCreateOrConnectWithoutJornadaInput | LecturaJornadaCreateOrConnectWithoutJornadaInput[]
    createMany?: LecturaJornadaCreateManyJornadaInputEnvelope
    connect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
  }

  export type PagoJornadaUncheckedCreateNestedManyWithoutJornadaInput = {
    create?: XOR<PagoJornadaCreateWithoutJornadaInput, PagoJornadaUncheckedCreateWithoutJornadaInput> | PagoJornadaCreateWithoutJornadaInput[] | PagoJornadaUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: PagoJornadaCreateOrConnectWithoutJornadaInput | PagoJornadaCreateOrConnectWithoutJornadaInput[]
    createMany?: PagoJornadaCreateManyJornadaInputEnvelope
    connect?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
  }

  export type MovimientoStockUncheckedCreateNestedManyWithoutJornadaInput = {
    create?: XOR<MovimientoStockCreateWithoutJornadaInput, MovimientoStockUncheckedCreateWithoutJornadaInput> | MovimientoStockCreateWithoutJornadaInput[] | MovimientoStockUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutJornadaInput | MovimientoStockCreateOrConnectWithoutJornadaInput[]
    createMany?: MovimientoStockCreateManyJornadaInputEnvelope
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumEstadoJornadaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoJornada
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EmpleadoUpdateOneRequiredWithoutJornadasNestedInput = {
    create?: XOR<EmpleadoCreateWithoutJornadasInput, EmpleadoUncheckedCreateWithoutJornadasInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutJornadasInput
    upsert?: EmpleadoUpsertWithoutJornadasInput
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutJornadasInput, EmpleadoUpdateWithoutJornadasInput>, EmpleadoUncheckedUpdateWithoutJornadasInput>
  }

  export type MaquinaUpdateOneRequiredWithoutJornadasNestedInput = {
    create?: XOR<MaquinaCreateWithoutJornadasInput, MaquinaUncheckedCreateWithoutJornadasInput>
    connectOrCreate?: MaquinaCreateOrConnectWithoutJornadasInput
    upsert?: MaquinaUpsertWithoutJornadasInput
    connect?: MaquinaWhereUniqueInput
    update?: XOR<XOR<MaquinaUpdateToOneWithWhereWithoutJornadasInput, MaquinaUpdateWithoutJornadasInput>, MaquinaUncheckedUpdateWithoutJornadasInput>
  }

  export type EstacionUpdateOneRequiredWithoutJornadasNestedInput = {
    create?: XOR<EstacionCreateWithoutJornadasInput, EstacionUncheckedCreateWithoutJornadasInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutJornadasInput
    upsert?: EstacionUpsertWithoutJornadasInput
    connect?: EstacionWhereUniqueInput
    update?: XOR<XOR<EstacionUpdateToOneWithWhereWithoutJornadasInput, EstacionUpdateWithoutJornadasInput>, EstacionUncheckedUpdateWithoutJornadasInput>
  }

  export type LecturaJornadaUpdateManyWithoutJornadaNestedInput = {
    create?: XOR<LecturaJornadaCreateWithoutJornadaInput, LecturaJornadaUncheckedCreateWithoutJornadaInput> | LecturaJornadaCreateWithoutJornadaInput[] | LecturaJornadaUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: LecturaJornadaCreateOrConnectWithoutJornadaInput | LecturaJornadaCreateOrConnectWithoutJornadaInput[]
    upsert?: LecturaJornadaUpsertWithWhereUniqueWithoutJornadaInput | LecturaJornadaUpsertWithWhereUniqueWithoutJornadaInput[]
    createMany?: LecturaJornadaCreateManyJornadaInputEnvelope
    set?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    disconnect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    delete?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    connect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    update?: LecturaJornadaUpdateWithWhereUniqueWithoutJornadaInput | LecturaJornadaUpdateWithWhereUniqueWithoutJornadaInput[]
    updateMany?: LecturaJornadaUpdateManyWithWhereWithoutJornadaInput | LecturaJornadaUpdateManyWithWhereWithoutJornadaInput[]
    deleteMany?: LecturaJornadaScalarWhereInput | LecturaJornadaScalarWhereInput[]
  }

  export type PagoJornadaUpdateManyWithoutJornadaNestedInput = {
    create?: XOR<PagoJornadaCreateWithoutJornadaInput, PagoJornadaUncheckedCreateWithoutJornadaInput> | PagoJornadaCreateWithoutJornadaInput[] | PagoJornadaUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: PagoJornadaCreateOrConnectWithoutJornadaInput | PagoJornadaCreateOrConnectWithoutJornadaInput[]
    upsert?: PagoJornadaUpsertWithWhereUniqueWithoutJornadaInput | PagoJornadaUpsertWithWhereUniqueWithoutJornadaInput[]
    createMany?: PagoJornadaCreateManyJornadaInputEnvelope
    set?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
    disconnect?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
    delete?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
    connect?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
    update?: PagoJornadaUpdateWithWhereUniqueWithoutJornadaInput | PagoJornadaUpdateWithWhereUniqueWithoutJornadaInput[]
    updateMany?: PagoJornadaUpdateManyWithWhereWithoutJornadaInput | PagoJornadaUpdateManyWithWhereWithoutJornadaInput[]
    deleteMany?: PagoJornadaScalarWhereInput | PagoJornadaScalarWhereInput[]
  }

  export type MovimientoStockUpdateManyWithoutJornadaNestedInput = {
    create?: XOR<MovimientoStockCreateWithoutJornadaInput, MovimientoStockUncheckedCreateWithoutJornadaInput> | MovimientoStockCreateWithoutJornadaInput[] | MovimientoStockUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutJornadaInput | MovimientoStockCreateOrConnectWithoutJornadaInput[]
    upsert?: MovimientoStockUpsertWithWhereUniqueWithoutJornadaInput | MovimientoStockUpsertWithWhereUniqueWithoutJornadaInput[]
    createMany?: MovimientoStockCreateManyJornadaInputEnvelope
    set?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    disconnect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    delete?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    update?: MovimientoStockUpdateWithWhereUniqueWithoutJornadaInput | MovimientoStockUpdateWithWhereUniqueWithoutJornadaInput[]
    updateMany?: MovimientoStockUpdateManyWithWhereWithoutJornadaInput | MovimientoStockUpdateManyWithWhereWithoutJornadaInput[]
    deleteMany?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
  }

  export type LecturaJornadaUncheckedUpdateManyWithoutJornadaNestedInput = {
    create?: XOR<LecturaJornadaCreateWithoutJornadaInput, LecturaJornadaUncheckedCreateWithoutJornadaInput> | LecturaJornadaCreateWithoutJornadaInput[] | LecturaJornadaUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: LecturaJornadaCreateOrConnectWithoutJornadaInput | LecturaJornadaCreateOrConnectWithoutJornadaInput[]
    upsert?: LecturaJornadaUpsertWithWhereUniqueWithoutJornadaInput | LecturaJornadaUpsertWithWhereUniqueWithoutJornadaInput[]
    createMany?: LecturaJornadaCreateManyJornadaInputEnvelope
    set?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    disconnect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    delete?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    connect?: LecturaJornadaWhereUniqueInput | LecturaJornadaWhereUniqueInput[]
    update?: LecturaJornadaUpdateWithWhereUniqueWithoutJornadaInput | LecturaJornadaUpdateWithWhereUniqueWithoutJornadaInput[]
    updateMany?: LecturaJornadaUpdateManyWithWhereWithoutJornadaInput | LecturaJornadaUpdateManyWithWhereWithoutJornadaInput[]
    deleteMany?: LecturaJornadaScalarWhereInput | LecturaJornadaScalarWhereInput[]
  }

  export type PagoJornadaUncheckedUpdateManyWithoutJornadaNestedInput = {
    create?: XOR<PagoJornadaCreateWithoutJornadaInput, PagoJornadaUncheckedCreateWithoutJornadaInput> | PagoJornadaCreateWithoutJornadaInput[] | PagoJornadaUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: PagoJornadaCreateOrConnectWithoutJornadaInput | PagoJornadaCreateOrConnectWithoutJornadaInput[]
    upsert?: PagoJornadaUpsertWithWhereUniqueWithoutJornadaInput | PagoJornadaUpsertWithWhereUniqueWithoutJornadaInput[]
    createMany?: PagoJornadaCreateManyJornadaInputEnvelope
    set?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
    disconnect?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
    delete?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
    connect?: PagoJornadaWhereUniqueInput | PagoJornadaWhereUniqueInput[]
    update?: PagoJornadaUpdateWithWhereUniqueWithoutJornadaInput | PagoJornadaUpdateWithWhereUniqueWithoutJornadaInput[]
    updateMany?: PagoJornadaUpdateManyWithWhereWithoutJornadaInput | PagoJornadaUpdateManyWithWhereWithoutJornadaInput[]
    deleteMany?: PagoJornadaScalarWhereInput | PagoJornadaScalarWhereInput[]
  }

  export type MovimientoStockUncheckedUpdateManyWithoutJornadaNestedInput = {
    create?: XOR<MovimientoStockCreateWithoutJornadaInput, MovimientoStockUncheckedCreateWithoutJornadaInput> | MovimientoStockCreateWithoutJornadaInput[] | MovimientoStockUncheckedCreateWithoutJornadaInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutJornadaInput | MovimientoStockCreateOrConnectWithoutJornadaInput[]
    upsert?: MovimientoStockUpsertWithWhereUniqueWithoutJornadaInput | MovimientoStockUpsertWithWhereUniqueWithoutJornadaInput[]
    createMany?: MovimientoStockCreateManyJornadaInputEnvelope
    set?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    disconnect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    delete?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    update?: MovimientoStockUpdateWithWhereUniqueWithoutJornadaInput | MovimientoStockUpdateWithWhereUniqueWithoutJornadaInput[]
    updateMany?: MovimientoStockUpdateManyWithWhereWithoutJornadaInput | MovimientoStockUpdateManyWithWhereWithoutJornadaInput[]
    deleteMany?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
  }

  export type JornadaCreateNestedOneWithoutLecturasInput = {
    create?: XOR<JornadaCreateWithoutLecturasInput, JornadaUncheckedCreateWithoutLecturasInput>
    connectOrCreate?: JornadaCreateOrConnectWithoutLecturasInput
    connect?: JornadaWhereUniqueInput
  }

  export type CombustibleCreateNestedOneWithoutLecturasInput = {
    create?: XOR<CombustibleCreateWithoutLecturasInput, CombustibleUncheckedCreateWithoutLecturasInput>
    connectOrCreate?: CombustibleCreateOrConnectWithoutLecturasInput
    connect?: CombustibleWhereUniqueInput
  }

  export type JornadaUpdateOneRequiredWithoutLecturasNestedInput = {
    create?: XOR<JornadaCreateWithoutLecturasInput, JornadaUncheckedCreateWithoutLecturasInput>
    connectOrCreate?: JornadaCreateOrConnectWithoutLecturasInput
    upsert?: JornadaUpsertWithoutLecturasInput
    connect?: JornadaWhereUniqueInput
    update?: XOR<XOR<JornadaUpdateToOneWithWhereWithoutLecturasInput, JornadaUpdateWithoutLecturasInput>, JornadaUncheckedUpdateWithoutLecturasInput>
  }

  export type CombustibleUpdateOneRequiredWithoutLecturasNestedInput = {
    create?: XOR<CombustibleCreateWithoutLecturasInput, CombustibleUncheckedCreateWithoutLecturasInput>
    connectOrCreate?: CombustibleCreateOrConnectWithoutLecturasInput
    upsert?: CombustibleUpsertWithoutLecturasInput
    connect?: CombustibleWhereUniqueInput
    update?: XOR<XOR<CombustibleUpdateToOneWithWhereWithoutLecturasInput, CombustibleUpdateWithoutLecturasInput>, CombustibleUncheckedUpdateWithoutLecturasInput>
  }

  export type JornadaCreateNestedOneWithoutPagosInput = {
    create?: XOR<JornadaCreateWithoutPagosInput, JornadaUncheckedCreateWithoutPagosInput>
    connectOrCreate?: JornadaCreateOrConnectWithoutPagosInput
    connect?: JornadaWhereUniqueInput
  }

  export type EnumMedioPagoFieldUpdateOperationsInput = {
    set?: $Enums.MedioPago
  }

  export type JornadaUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<JornadaCreateWithoutPagosInput, JornadaUncheckedCreateWithoutPagosInput>
    connectOrCreate?: JornadaCreateOrConnectWithoutPagosInput
    upsert?: JornadaUpsertWithoutPagosInput
    connect?: JornadaWhereUniqueInput
    update?: XOR<XOR<JornadaUpdateToOneWithWhereWithoutPagosInput, JornadaUpdateWithoutPagosInput>, JornadaUncheckedUpdateWithoutPagosInput>
  }

  export type EstacionCreateNestedOneWithoutGastosInput = {
    create?: XOR<EstacionCreateWithoutGastosInput, EstacionUncheckedCreateWithoutGastosInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutGastosInput
    connect?: EstacionWhereUniqueInput
  }

  export type EstacionUpdateOneRequiredWithoutGastosNestedInput = {
    create?: XOR<EstacionCreateWithoutGastosInput, EstacionUncheckedCreateWithoutGastosInput>
    connectOrCreate?: EstacionCreateOrConnectWithoutGastosInput
    upsert?: EstacionUpsertWithoutGastosInput
    connect?: EstacionWhereUniqueInput
    update?: XOR<XOR<EstacionUpdateToOneWithWhereWithoutGastosInput, EstacionUpdateWithoutGastosInput>, EstacionUncheckedUpdateWithoutGastosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumDireccionContadorFilter<$PrismaModel = never> = {
    equals?: $Enums.DireccionContador | EnumDireccionContadorFieldRefInput<$PrismaModel>
    in?: $Enums.DireccionContador[] | ListEnumDireccionContadorFieldRefInput<$PrismaModel>
    notIn?: $Enums.DireccionContador[] | ListEnumDireccionContadorFieldRefInput<$PrismaModel>
    not?: NestedEnumDireccionContadorFilter<$PrismaModel> | $Enums.DireccionContador
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumDireccionContadorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DireccionContador | EnumDireccionContadorFieldRefInput<$PrismaModel>
    in?: $Enums.DireccionContador[] | ListEnumDireccionContadorFieldRefInput<$PrismaModel>
    notIn?: $Enums.DireccionContador[] | ListEnumDireccionContadorFieldRefInput<$PrismaModel>
    not?: NestedEnumDireccionContadorWithAggregatesFilter<$PrismaModel> | $Enums.DireccionContador
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDireccionContadorFilter<$PrismaModel>
    _max?: NestedEnumDireccionContadorFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTipoMovimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoFilter<$PrismaModel> | $Enums.TipoMovimiento
  }

  export type NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimientoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEstadoJornadaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoJornada | EnumEstadoJornadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoJornadaFilter<$PrismaModel> | $Enums.EstadoJornada
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoJornadaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoJornada | EnumEstadoJornadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoJornadaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoJornada
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoJornadaFilter<$PrismaModel>
    _max?: NestedEnumEstadoJornadaFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumMedioPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MedioPago | EnumMedioPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MedioPago[] | ListEnumMedioPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedioPago[] | ListEnumMedioPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMedioPagoFilter<$PrismaModel> | $Enums.MedioPago
  }

  export type NestedEnumMedioPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedioPago | EnumMedioPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MedioPago[] | ListEnumMedioPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedioPago[] | ListEnumMedioPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMedioPagoWithAggregatesFilter<$PrismaModel> | $Enums.MedioPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedioPagoFilter<$PrismaModel>
    _max?: NestedEnumMedioPagoFilter<$PrismaModel>
  }

  export type MaquinaCreateWithoutEstacionInput = {
    nombre: string
    activa?: boolean
    moduloContador?: bigint | number
    direccionTotalizador?: $Enums.DireccionContador
    direccionProductos?: $Enums.DireccionContador
    jornadas?: JornadaCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaUncheckedCreateWithoutEstacionInput = {
    id?: number
    nombre: string
    activa?: boolean
    moduloContador?: bigint | number
    direccionTotalizador?: $Enums.DireccionContador
    direccionProductos?: $Enums.DireccionContador
    jornadas?: JornadaUncheckedCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaCreateOrConnectWithoutEstacionInput = {
    where: MaquinaWhereUniqueInput
    create: XOR<MaquinaCreateWithoutEstacionInput, MaquinaUncheckedCreateWithoutEstacionInput>
  }

  export type MaquinaCreateManyEstacionInputEnvelope = {
    data: MaquinaCreateManyEstacionInput | MaquinaCreateManyEstacionInput[]
    skipDuplicates?: boolean
  }

  export type TanqueCreateWithoutEstacionInput = {
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
    combustible: CombustibleCreateNestedOneWithoutTanquesInput
    movimientos?: MovimientoStockCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutEstacionInput = {
    id?: number
    combustibleId: number
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutEstacionInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutEstacionInput, TanqueUncheckedCreateWithoutEstacionInput>
  }

  export type TanqueCreateManyEstacionInputEnvelope = {
    data: TanqueCreateManyEstacionInput | TanqueCreateManyEstacionInput[]
    skipDuplicates?: boolean
  }

  export type EmpleadoCreateWithoutEstacionInput = {
    nombre: string
    horarioInicio?: string | null
    horarioFin?: string | null
    activo?: boolean
    createdAt?: Date | string
    jornadas?: JornadaCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutEstacionInput = {
    id?: number
    nombre: string
    horarioInicio?: string | null
    horarioFin?: string | null
    activo?: boolean
    createdAt?: Date | string
    jornadas?: JornadaUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutEstacionInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutEstacionInput, EmpleadoUncheckedCreateWithoutEstacionInput>
  }

  export type EmpleadoCreateManyEstacionInputEnvelope = {
    data: EmpleadoCreateManyEstacionInput | EmpleadoCreateManyEstacionInput[]
    skipDuplicates?: boolean
  }

  export type JornadaCreateWithoutEstacionInput = {
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    empleado: EmpleadoCreateNestedOneWithoutJornadasInput
    maquina: MaquinaCreateNestedOneWithoutJornadasInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockCreateNestedManyWithoutJornadaInput
  }

  export type JornadaUncheckedCreateWithoutEstacionInput = {
    id?: number
    empleadoId: number
    maquinaId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaUncheckedCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutJornadaInput
  }

  export type JornadaCreateOrConnectWithoutEstacionInput = {
    where: JornadaWhereUniqueInput
    create: XOR<JornadaCreateWithoutEstacionInput, JornadaUncheckedCreateWithoutEstacionInput>
  }

  export type JornadaCreateManyEstacionInputEnvelope = {
    data: JornadaCreateManyEstacionInput | JornadaCreateManyEstacionInput[]
    skipDuplicates?: boolean
  }

  export type GastoCreateWithoutEstacionInput = {
    categoria: string
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha: Date | string
  }

  export type GastoUncheckedCreateWithoutEstacionInput = {
    id?: number
    categoria: string
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha: Date | string
  }

  export type GastoCreateOrConnectWithoutEstacionInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutEstacionInput, GastoUncheckedCreateWithoutEstacionInput>
  }

  export type GastoCreateManyEstacionInputEnvelope = {
    data: GastoCreateManyEstacionInput | GastoCreateManyEstacionInput[]
    skipDuplicates?: boolean
  }

  export type MaquinaUpsertWithWhereUniqueWithoutEstacionInput = {
    where: MaquinaWhereUniqueInput
    update: XOR<MaquinaUpdateWithoutEstacionInput, MaquinaUncheckedUpdateWithoutEstacionInput>
    create: XOR<MaquinaCreateWithoutEstacionInput, MaquinaUncheckedCreateWithoutEstacionInput>
  }

  export type MaquinaUpdateWithWhereUniqueWithoutEstacionInput = {
    where: MaquinaWhereUniqueInput
    data: XOR<MaquinaUpdateWithoutEstacionInput, MaquinaUncheckedUpdateWithoutEstacionInput>
  }

  export type MaquinaUpdateManyWithWhereWithoutEstacionInput = {
    where: MaquinaScalarWhereInput
    data: XOR<MaquinaUpdateManyMutationInput, MaquinaUncheckedUpdateManyWithoutEstacionInput>
  }

  export type MaquinaScalarWhereInput = {
    AND?: MaquinaScalarWhereInput | MaquinaScalarWhereInput[]
    OR?: MaquinaScalarWhereInput[]
    NOT?: MaquinaScalarWhereInput | MaquinaScalarWhereInput[]
    id?: IntFilter<"Maquina"> | number
    estacionId?: IntFilter<"Maquina"> | number
    nombre?: StringFilter<"Maquina"> | string
    activa?: BoolFilter<"Maquina"> | boolean
    moduloContador?: BigIntFilter<"Maquina"> | bigint | number
    direccionTotalizador?: EnumDireccionContadorFilter<"Maquina"> | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFilter<"Maquina"> | $Enums.DireccionContador
  }

  export type TanqueUpsertWithWhereUniqueWithoutEstacionInput = {
    where: TanqueWhereUniqueInput
    update: XOR<TanqueUpdateWithoutEstacionInput, TanqueUncheckedUpdateWithoutEstacionInput>
    create: XOR<TanqueCreateWithoutEstacionInput, TanqueUncheckedCreateWithoutEstacionInput>
  }

  export type TanqueUpdateWithWhereUniqueWithoutEstacionInput = {
    where: TanqueWhereUniqueInput
    data: XOR<TanqueUpdateWithoutEstacionInput, TanqueUncheckedUpdateWithoutEstacionInput>
  }

  export type TanqueUpdateManyWithWhereWithoutEstacionInput = {
    where: TanqueScalarWhereInput
    data: XOR<TanqueUpdateManyMutationInput, TanqueUncheckedUpdateManyWithoutEstacionInput>
  }

  export type TanqueScalarWhereInput = {
    AND?: TanqueScalarWhereInput | TanqueScalarWhereInput[]
    OR?: TanqueScalarWhereInput[]
    NOT?: TanqueScalarWhereInput | TanqueScalarWhereInput[]
    id?: IntFilter<"Tanque"> | number
    estacionId?: IntFilter<"Tanque"> | number
    combustibleId?: IntFilter<"Tanque"> | number
    capacidad?: DecimalFilter<"Tanque"> | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFilter<"Tanque"> | Decimal | DecimalJsLike | number | string
  }

  export type EmpleadoUpsertWithWhereUniqueWithoutEstacionInput = {
    where: EmpleadoWhereUniqueInput
    update: XOR<EmpleadoUpdateWithoutEstacionInput, EmpleadoUncheckedUpdateWithoutEstacionInput>
    create: XOR<EmpleadoCreateWithoutEstacionInput, EmpleadoUncheckedCreateWithoutEstacionInput>
  }

  export type EmpleadoUpdateWithWhereUniqueWithoutEstacionInput = {
    where: EmpleadoWhereUniqueInput
    data: XOR<EmpleadoUpdateWithoutEstacionInput, EmpleadoUncheckedUpdateWithoutEstacionInput>
  }

  export type EmpleadoUpdateManyWithWhereWithoutEstacionInput = {
    where: EmpleadoScalarWhereInput
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyWithoutEstacionInput>
  }

  export type EmpleadoScalarWhereInput = {
    AND?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
    OR?: EmpleadoScalarWhereInput[]
    NOT?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
    id?: IntFilter<"Empleado"> | number
    nombre?: StringFilter<"Empleado"> | string
    estacionId?: IntFilter<"Empleado"> | number
    horarioInicio?: StringNullableFilter<"Empleado"> | string | null
    horarioFin?: StringNullableFilter<"Empleado"> | string | null
    activo?: BoolFilter<"Empleado"> | boolean
    createdAt?: DateTimeFilter<"Empleado"> | Date | string
  }

  export type JornadaUpsertWithWhereUniqueWithoutEstacionInput = {
    where: JornadaWhereUniqueInput
    update: XOR<JornadaUpdateWithoutEstacionInput, JornadaUncheckedUpdateWithoutEstacionInput>
    create: XOR<JornadaCreateWithoutEstacionInput, JornadaUncheckedCreateWithoutEstacionInput>
  }

  export type JornadaUpdateWithWhereUniqueWithoutEstacionInput = {
    where: JornadaWhereUniqueInput
    data: XOR<JornadaUpdateWithoutEstacionInput, JornadaUncheckedUpdateWithoutEstacionInput>
  }

  export type JornadaUpdateManyWithWhereWithoutEstacionInput = {
    where: JornadaScalarWhereInput
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyWithoutEstacionInput>
  }

  export type JornadaScalarWhereInput = {
    AND?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
    OR?: JornadaScalarWhereInput[]
    NOT?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
    id?: IntFilter<"Jornada"> | number
    empleadoId?: IntFilter<"Jornada"> | number
    maquinaId?: IntFilter<"Jornada"> | number
    estacionId?: IntFilter<"Jornada"> | number
    inicio?: DateTimeFilter<"Jornada"> | Date | string
    fin?: DateTimeNullableFilter<"Jornada"> | Date | string | null
    estado?: EnumEstadoJornadaFilter<"Jornada"> | $Enums.EstadoJornada
    notas?: StringNullableFilter<"Jornada"> | string | null
    totalizadorEntrada?: DecimalFilter<"Jornada"> | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: DecimalNullableFilter<"Jornada"> | Decimal | DecimalJsLike | number | string | null
  }

  export type GastoUpsertWithWhereUniqueWithoutEstacionInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutEstacionInput, GastoUncheckedUpdateWithoutEstacionInput>
    create: XOR<GastoCreateWithoutEstacionInput, GastoUncheckedCreateWithoutEstacionInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutEstacionInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutEstacionInput, GastoUncheckedUpdateWithoutEstacionInput>
  }

  export type GastoUpdateManyWithWhereWithoutEstacionInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutEstacionInput>
  }

  export type GastoScalarWhereInput = {
    AND?: GastoScalarWhereInput | GastoScalarWhereInput[]
    OR?: GastoScalarWhereInput[]
    NOT?: GastoScalarWhereInput | GastoScalarWhereInput[]
    id?: IntFilter<"Gasto"> | number
    estacionId?: IntFilter<"Gasto"> | number
    categoria?: StringFilter<"Gasto"> | string
    descripcion?: StringFilter<"Gasto"> | string
    monto?: DecimalFilter<"Gasto"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"Gasto"> | Date | string
  }

  export type EstacionCreateWithoutMaquinasInput = {
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    tanques?: TanqueCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaCreateNestedManyWithoutEstacionInput
    gastos?: GastoCreateNestedManyWithoutEstacionInput
  }

  export type EstacionUncheckedCreateWithoutMaquinasInput = {
    id?: number
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    tanques?: TanqueUncheckedCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaUncheckedCreateNestedManyWithoutEstacionInput
    gastos?: GastoUncheckedCreateNestedManyWithoutEstacionInput
  }

  export type EstacionCreateOrConnectWithoutMaquinasInput = {
    where: EstacionWhereUniqueInput
    create: XOR<EstacionCreateWithoutMaquinasInput, EstacionUncheckedCreateWithoutMaquinasInput>
  }

  export type JornadaCreateWithoutMaquinaInput = {
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    empleado: EmpleadoCreateNestedOneWithoutJornadasInput
    estacion: EstacionCreateNestedOneWithoutJornadasInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockCreateNestedManyWithoutJornadaInput
  }

  export type JornadaUncheckedCreateWithoutMaquinaInput = {
    id?: number
    empleadoId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaUncheckedCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutJornadaInput
  }

  export type JornadaCreateOrConnectWithoutMaquinaInput = {
    where: JornadaWhereUniqueInput
    create: XOR<JornadaCreateWithoutMaquinaInput, JornadaUncheckedCreateWithoutMaquinaInput>
  }

  export type JornadaCreateManyMaquinaInputEnvelope = {
    data: JornadaCreateManyMaquinaInput | JornadaCreateManyMaquinaInput[]
    skipDuplicates?: boolean
  }

  export type EstacionUpsertWithoutMaquinasInput = {
    update: XOR<EstacionUpdateWithoutMaquinasInput, EstacionUncheckedUpdateWithoutMaquinasInput>
    create: XOR<EstacionCreateWithoutMaquinasInput, EstacionUncheckedCreateWithoutMaquinasInput>
    where?: EstacionWhereInput
  }

  export type EstacionUpdateToOneWithWhereWithoutMaquinasInput = {
    where?: EstacionWhereInput
    data: XOR<EstacionUpdateWithoutMaquinasInput, EstacionUncheckedUpdateWithoutMaquinasInput>
  }

  export type EstacionUpdateWithoutMaquinasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanques?: TanqueUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUpdateManyWithoutEstacionNestedInput
  }

  export type EstacionUncheckedUpdateWithoutMaquinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanques?: TanqueUncheckedUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUncheckedUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUncheckedUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutEstacionNestedInput
  }

  export type JornadaUpsertWithWhereUniqueWithoutMaquinaInput = {
    where: JornadaWhereUniqueInput
    update: XOR<JornadaUpdateWithoutMaquinaInput, JornadaUncheckedUpdateWithoutMaquinaInput>
    create: XOR<JornadaCreateWithoutMaquinaInput, JornadaUncheckedCreateWithoutMaquinaInput>
  }

  export type JornadaUpdateWithWhereUniqueWithoutMaquinaInput = {
    where: JornadaWhereUniqueInput
    data: XOR<JornadaUpdateWithoutMaquinaInput, JornadaUncheckedUpdateWithoutMaquinaInput>
  }

  export type JornadaUpdateManyWithWhereWithoutMaquinaInput = {
    where: JornadaScalarWhereInput
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyWithoutMaquinaInput>
  }

  export type HistorialPrecioCreateWithoutCombustibleInput = {
    precio: Decimal | DecimalJsLike | number | string
    vigenteDesde: Date | string
  }

  export type HistorialPrecioUncheckedCreateWithoutCombustibleInput = {
    id?: number
    precio: Decimal | DecimalJsLike | number | string
    vigenteDesde: Date | string
  }

  export type HistorialPrecioCreateOrConnectWithoutCombustibleInput = {
    where: HistorialPrecioWhereUniqueInput
    create: XOR<HistorialPrecioCreateWithoutCombustibleInput, HistorialPrecioUncheckedCreateWithoutCombustibleInput>
  }

  export type HistorialPrecioCreateManyCombustibleInputEnvelope = {
    data: HistorialPrecioCreateManyCombustibleInput | HistorialPrecioCreateManyCombustibleInput[]
    skipDuplicates?: boolean
  }

  export type TanqueCreateWithoutCombustibleInput = {
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
    estacion: EstacionCreateNestedOneWithoutTanquesInput
    movimientos?: MovimientoStockCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutCombustibleInput = {
    id?: number
    estacionId: number
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutCombustibleInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutCombustibleInput, TanqueUncheckedCreateWithoutCombustibleInput>
  }

  export type TanqueCreateManyCombustibleInputEnvelope = {
    data: TanqueCreateManyCombustibleInput | TanqueCreateManyCombustibleInput[]
    skipDuplicates?: boolean
  }

  export type LecturaJornadaCreateWithoutCombustibleInput = {
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
    jornada: JornadaCreateNestedOneWithoutLecturasInput
  }

  export type LecturaJornadaUncheckedCreateWithoutCombustibleInput = {
    id?: number
    jornadaId: number
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaCreateOrConnectWithoutCombustibleInput = {
    where: LecturaJornadaWhereUniqueInput
    create: XOR<LecturaJornadaCreateWithoutCombustibleInput, LecturaJornadaUncheckedCreateWithoutCombustibleInput>
  }

  export type LecturaJornadaCreateManyCombustibleInputEnvelope = {
    data: LecturaJornadaCreateManyCombustibleInput | LecturaJornadaCreateManyCombustibleInput[]
    skipDuplicates?: boolean
  }

  export type HistorialPrecioUpsertWithWhereUniqueWithoutCombustibleInput = {
    where: HistorialPrecioWhereUniqueInput
    update: XOR<HistorialPrecioUpdateWithoutCombustibleInput, HistorialPrecioUncheckedUpdateWithoutCombustibleInput>
    create: XOR<HistorialPrecioCreateWithoutCombustibleInput, HistorialPrecioUncheckedCreateWithoutCombustibleInput>
  }

  export type HistorialPrecioUpdateWithWhereUniqueWithoutCombustibleInput = {
    where: HistorialPrecioWhereUniqueInput
    data: XOR<HistorialPrecioUpdateWithoutCombustibleInput, HistorialPrecioUncheckedUpdateWithoutCombustibleInput>
  }

  export type HistorialPrecioUpdateManyWithWhereWithoutCombustibleInput = {
    where: HistorialPrecioScalarWhereInput
    data: XOR<HistorialPrecioUpdateManyMutationInput, HistorialPrecioUncheckedUpdateManyWithoutCombustibleInput>
  }

  export type HistorialPrecioScalarWhereInput = {
    AND?: HistorialPrecioScalarWhereInput | HistorialPrecioScalarWhereInput[]
    OR?: HistorialPrecioScalarWhereInput[]
    NOT?: HistorialPrecioScalarWhereInput | HistorialPrecioScalarWhereInput[]
    id?: IntFilter<"HistorialPrecio"> | number
    combustibleId?: IntFilter<"HistorialPrecio"> | number
    precio?: DecimalFilter<"HistorialPrecio"> | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFilter<"HistorialPrecio"> | Date | string
  }

  export type TanqueUpsertWithWhereUniqueWithoutCombustibleInput = {
    where: TanqueWhereUniqueInput
    update: XOR<TanqueUpdateWithoutCombustibleInput, TanqueUncheckedUpdateWithoutCombustibleInput>
    create: XOR<TanqueCreateWithoutCombustibleInput, TanqueUncheckedCreateWithoutCombustibleInput>
  }

  export type TanqueUpdateWithWhereUniqueWithoutCombustibleInput = {
    where: TanqueWhereUniqueInput
    data: XOR<TanqueUpdateWithoutCombustibleInput, TanqueUncheckedUpdateWithoutCombustibleInput>
  }

  export type TanqueUpdateManyWithWhereWithoutCombustibleInput = {
    where: TanqueScalarWhereInput
    data: XOR<TanqueUpdateManyMutationInput, TanqueUncheckedUpdateManyWithoutCombustibleInput>
  }

  export type LecturaJornadaUpsertWithWhereUniqueWithoutCombustibleInput = {
    where: LecturaJornadaWhereUniqueInput
    update: XOR<LecturaJornadaUpdateWithoutCombustibleInput, LecturaJornadaUncheckedUpdateWithoutCombustibleInput>
    create: XOR<LecturaJornadaCreateWithoutCombustibleInput, LecturaJornadaUncheckedCreateWithoutCombustibleInput>
  }

  export type LecturaJornadaUpdateWithWhereUniqueWithoutCombustibleInput = {
    where: LecturaJornadaWhereUniqueInput
    data: XOR<LecturaJornadaUpdateWithoutCombustibleInput, LecturaJornadaUncheckedUpdateWithoutCombustibleInput>
  }

  export type LecturaJornadaUpdateManyWithWhereWithoutCombustibleInput = {
    where: LecturaJornadaScalarWhereInput
    data: XOR<LecturaJornadaUpdateManyMutationInput, LecturaJornadaUncheckedUpdateManyWithoutCombustibleInput>
  }

  export type LecturaJornadaScalarWhereInput = {
    AND?: LecturaJornadaScalarWhereInput | LecturaJornadaScalarWhereInput[]
    OR?: LecturaJornadaScalarWhereInput[]
    NOT?: LecturaJornadaScalarWhereInput | LecturaJornadaScalarWhereInput[]
    id?: IntFilter<"LecturaJornada"> | number
    jornadaId?: IntFilter<"LecturaJornada"> | number
    combustibleId?: IntFilter<"LecturaJornada"> | number
    entradaAtras?: DecimalFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string
    salidaAtras?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFilter<"LecturaJornada"> | boolean
    galones?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
    importe?: DecimalNullableFilter<"LecturaJornada"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CombustibleCreateWithoutPreciosInput = {
    nombre: string
    tanques?: TanqueCreateNestedManyWithoutCombustibleInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutCombustibleInput
  }

  export type CombustibleUncheckedCreateWithoutPreciosInput = {
    id?: number
    nombre: string
    tanques?: TanqueUncheckedCreateNestedManyWithoutCombustibleInput
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutCombustibleInput
  }

  export type CombustibleCreateOrConnectWithoutPreciosInput = {
    where: CombustibleWhereUniqueInput
    create: XOR<CombustibleCreateWithoutPreciosInput, CombustibleUncheckedCreateWithoutPreciosInput>
  }

  export type CombustibleUpsertWithoutPreciosInput = {
    update: XOR<CombustibleUpdateWithoutPreciosInput, CombustibleUncheckedUpdateWithoutPreciosInput>
    create: XOR<CombustibleCreateWithoutPreciosInput, CombustibleUncheckedCreateWithoutPreciosInput>
    where?: CombustibleWhereInput
  }

  export type CombustibleUpdateToOneWithWhereWithoutPreciosInput = {
    where?: CombustibleWhereInput
    data: XOR<CombustibleUpdateWithoutPreciosInput, CombustibleUncheckedUpdateWithoutPreciosInput>
  }

  export type CombustibleUpdateWithoutPreciosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tanques?: TanqueUpdateManyWithoutCombustibleNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutCombustibleNestedInput
  }

  export type CombustibleUncheckedUpdateWithoutPreciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tanques?: TanqueUncheckedUpdateManyWithoutCombustibleNestedInput
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutCombustibleNestedInput
  }

  export type EstacionCreateWithoutTanquesInput = {
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaCreateNestedManyWithoutEstacionInput
    gastos?: GastoCreateNestedManyWithoutEstacionInput
  }

  export type EstacionUncheckedCreateWithoutTanquesInput = {
    id?: number
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaUncheckedCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaUncheckedCreateNestedManyWithoutEstacionInput
    gastos?: GastoUncheckedCreateNestedManyWithoutEstacionInput
  }

  export type EstacionCreateOrConnectWithoutTanquesInput = {
    where: EstacionWhereUniqueInput
    create: XOR<EstacionCreateWithoutTanquesInput, EstacionUncheckedCreateWithoutTanquesInput>
  }

  export type CombustibleCreateWithoutTanquesInput = {
    nombre: string
    precios?: HistorialPrecioCreateNestedManyWithoutCombustibleInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutCombustibleInput
  }

  export type CombustibleUncheckedCreateWithoutTanquesInput = {
    id?: number
    nombre: string
    precios?: HistorialPrecioUncheckedCreateNestedManyWithoutCombustibleInput
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutCombustibleInput
  }

  export type CombustibleCreateOrConnectWithoutTanquesInput = {
    where: CombustibleWhereUniqueInput
    create: XOR<CombustibleCreateWithoutTanquesInput, CombustibleUncheckedCreateWithoutTanquesInput>
  }

  export type MovimientoStockCreateWithoutTanqueInput = {
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    nota?: string | null
    jornada?: JornadaCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoStockUncheckedCreateWithoutTanqueInput = {
    id?: number
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    jornadaId?: number | null
    nota?: string | null
  }

  export type MovimientoStockCreateOrConnectWithoutTanqueInput = {
    where: MovimientoStockWhereUniqueInput
    create: XOR<MovimientoStockCreateWithoutTanqueInput, MovimientoStockUncheckedCreateWithoutTanqueInput>
  }

  export type MovimientoStockCreateManyTanqueInputEnvelope = {
    data: MovimientoStockCreateManyTanqueInput | MovimientoStockCreateManyTanqueInput[]
    skipDuplicates?: boolean
  }

  export type EstacionUpsertWithoutTanquesInput = {
    update: XOR<EstacionUpdateWithoutTanquesInput, EstacionUncheckedUpdateWithoutTanquesInput>
    create: XOR<EstacionCreateWithoutTanquesInput, EstacionUncheckedCreateWithoutTanquesInput>
    where?: EstacionWhereInput
  }

  export type EstacionUpdateToOneWithWhereWithoutTanquesInput = {
    where?: EstacionWhereInput
    data: XOR<EstacionUpdateWithoutTanquesInput, EstacionUncheckedUpdateWithoutTanquesInput>
  }

  export type EstacionUpdateWithoutTanquesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUpdateManyWithoutEstacionNestedInput
  }

  export type EstacionUncheckedUpdateWithoutTanquesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUncheckedUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUncheckedUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUncheckedUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutEstacionNestedInput
  }

  export type CombustibleUpsertWithoutTanquesInput = {
    update: XOR<CombustibleUpdateWithoutTanquesInput, CombustibleUncheckedUpdateWithoutTanquesInput>
    create: XOR<CombustibleCreateWithoutTanquesInput, CombustibleUncheckedCreateWithoutTanquesInput>
    where?: CombustibleWhereInput
  }

  export type CombustibleUpdateToOneWithWhereWithoutTanquesInput = {
    where?: CombustibleWhereInput
    data: XOR<CombustibleUpdateWithoutTanquesInput, CombustibleUncheckedUpdateWithoutTanquesInput>
  }

  export type CombustibleUpdateWithoutTanquesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precios?: HistorialPrecioUpdateManyWithoutCombustibleNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutCombustibleNestedInput
  }

  export type CombustibleUncheckedUpdateWithoutTanquesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precios?: HistorialPrecioUncheckedUpdateManyWithoutCombustibleNestedInput
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutCombustibleNestedInput
  }

  export type MovimientoStockUpsertWithWhereUniqueWithoutTanqueInput = {
    where: MovimientoStockWhereUniqueInput
    update: XOR<MovimientoStockUpdateWithoutTanqueInput, MovimientoStockUncheckedUpdateWithoutTanqueInput>
    create: XOR<MovimientoStockCreateWithoutTanqueInput, MovimientoStockUncheckedCreateWithoutTanqueInput>
  }

  export type MovimientoStockUpdateWithWhereUniqueWithoutTanqueInput = {
    where: MovimientoStockWhereUniqueInput
    data: XOR<MovimientoStockUpdateWithoutTanqueInput, MovimientoStockUncheckedUpdateWithoutTanqueInput>
  }

  export type MovimientoStockUpdateManyWithWhereWithoutTanqueInput = {
    where: MovimientoStockScalarWhereInput
    data: XOR<MovimientoStockUpdateManyMutationInput, MovimientoStockUncheckedUpdateManyWithoutTanqueInput>
  }

  export type MovimientoStockScalarWhereInput = {
    AND?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
    OR?: MovimientoStockScalarWhereInput[]
    NOT?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
    id?: IntFilter<"MovimientoStock"> | number
    tanqueId?: IntFilter<"MovimientoStock"> | number
    tipo?: EnumTipoMovimientoFilter<"MovimientoStock"> | $Enums.TipoMovimiento
    galones?: DecimalFilter<"MovimientoStock"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"MovimientoStock"> | Date | string
    jornadaId?: IntNullableFilter<"MovimientoStock"> | number | null
    nota?: StringNullableFilter<"MovimientoStock"> | string | null
  }

  export type TanqueCreateWithoutMovimientosInput = {
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
    estacion: EstacionCreateNestedOneWithoutTanquesInput
    combustible: CombustibleCreateNestedOneWithoutTanquesInput
  }

  export type TanqueUncheckedCreateWithoutMovimientosInput = {
    id?: number
    estacionId: number
    combustibleId: number
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
  }

  export type TanqueCreateOrConnectWithoutMovimientosInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutMovimientosInput, TanqueUncheckedCreateWithoutMovimientosInput>
  }

  export type JornadaCreateWithoutMovimientosInput = {
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    empleado: EmpleadoCreateNestedOneWithoutJornadasInput
    maquina: MaquinaCreateNestedOneWithoutJornadasInput
    estacion: EstacionCreateNestedOneWithoutJornadasInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaCreateNestedManyWithoutJornadaInput
  }

  export type JornadaUncheckedCreateWithoutMovimientosInput = {
    id?: number
    empleadoId: number
    maquinaId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaUncheckedCreateNestedManyWithoutJornadaInput
  }

  export type JornadaCreateOrConnectWithoutMovimientosInput = {
    where: JornadaWhereUniqueInput
    create: XOR<JornadaCreateWithoutMovimientosInput, JornadaUncheckedCreateWithoutMovimientosInput>
  }

  export type TanqueUpsertWithoutMovimientosInput = {
    update: XOR<TanqueUpdateWithoutMovimientosInput, TanqueUncheckedUpdateWithoutMovimientosInput>
    create: XOR<TanqueCreateWithoutMovimientosInput, TanqueUncheckedCreateWithoutMovimientosInput>
    where?: TanqueWhereInput
  }

  export type TanqueUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: TanqueWhereInput
    data: XOR<TanqueUpdateWithoutMovimientosInput, TanqueUncheckedUpdateWithoutMovimientosInput>
  }

  export type TanqueUpdateWithoutMovimientosInput = {
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estacion?: EstacionUpdateOneRequiredWithoutTanquesNestedInput
    combustible?: CombustibleUpdateOneRequiredWithoutTanquesNestedInput
  }

  export type TanqueUncheckedUpdateWithoutMovimientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type JornadaUpsertWithoutMovimientosInput = {
    update: XOR<JornadaUpdateWithoutMovimientosInput, JornadaUncheckedUpdateWithoutMovimientosInput>
    create: XOR<JornadaCreateWithoutMovimientosInput, JornadaUncheckedCreateWithoutMovimientosInput>
    where?: JornadaWhereInput
  }

  export type JornadaUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: JornadaWhereInput
    data: XOR<JornadaUpdateWithoutMovimientosInput, JornadaUncheckedUpdateWithoutMovimientosInput>
  }

  export type JornadaUpdateWithoutMovimientosInput = {
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    empleado?: EmpleadoUpdateOneRequiredWithoutJornadasNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutJornadasNestedInput
    estacion?: EstacionUpdateOneRequiredWithoutJornadasNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateWithoutMovimientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUncheckedUpdateManyWithoutJornadaNestedInput
  }

  export type EstacionCreateWithoutEmpleadosInput = {
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaCreateNestedManyWithoutEstacionInput
    tanques?: TanqueCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaCreateNestedManyWithoutEstacionInput
    gastos?: GastoCreateNestedManyWithoutEstacionInput
  }

  export type EstacionUncheckedCreateWithoutEmpleadosInput = {
    id?: number
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaUncheckedCreateNestedManyWithoutEstacionInput
    tanques?: TanqueUncheckedCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaUncheckedCreateNestedManyWithoutEstacionInput
    gastos?: GastoUncheckedCreateNestedManyWithoutEstacionInput
  }

  export type EstacionCreateOrConnectWithoutEmpleadosInput = {
    where: EstacionWhereUniqueInput
    create: XOR<EstacionCreateWithoutEmpleadosInput, EstacionUncheckedCreateWithoutEmpleadosInput>
  }

  export type JornadaCreateWithoutEmpleadoInput = {
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    maquina: MaquinaCreateNestedOneWithoutJornadasInput
    estacion: EstacionCreateNestedOneWithoutJornadasInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockCreateNestedManyWithoutJornadaInput
  }

  export type JornadaUncheckedCreateWithoutEmpleadoInput = {
    id?: number
    maquinaId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutJornadaInput
    pagos?: PagoJornadaUncheckedCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutJornadaInput
  }

  export type JornadaCreateOrConnectWithoutEmpleadoInput = {
    where: JornadaWhereUniqueInput
    create: XOR<JornadaCreateWithoutEmpleadoInput, JornadaUncheckedCreateWithoutEmpleadoInput>
  }

  export type JornadaCreateManyEmpleadoInputEnvelope = {
    data: JornadaCreateManyEmpleadoInput | JornadaCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type EstacionUpsertWithoutEmpleadosInput = {
    update: XOR<EstacionUpdateWithoutEmpleadosInput, EstacionUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<EstacionCreateWithoutEmpleadosInput, EstacionUncheckedCreateWithoutEmpleadosInput>
    where?: EstacionWhereInput
  }

  export type EstacionUpdateToOneWithWhereWithoutEmpleadosInput = {
    where?: EstacionWhereInput
    data: XOR<EstacionUpdateWithoutEmpleadosInput, EstacionUncheckedUpdateWithoutEmpleadosInput>
  }

  export type EstacionUpdateWithoutEmpleadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUpdateManyWithoutEstacionNestedInput
    tanques?: TanqueUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUpdateManyWithoutEstacionNestedInput
  }

  export type EstacionUncheckedUpdateWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUncheckedUpdateManyWithoutEstacionNestedInput
    tanques?: TanqueUncheckedUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUncheckedUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutEstacionNestedInput
  }

  export type JornadaUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: JornadaWhereUniqueInput
    update: XOR<JornadaUpdateWithoutEmpleadoInput, JornadaUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<JornadaCreateWithoutEmpleadoInput, JornadaUncheckedCreateWithoutEmpleadoInput>
  }

  export type JornadaUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: JornadaWhereUniqueInput
    data: XOR<JornadaUpdateWithoutEmpleadoInput, JornadaUncheckedUpdateWithoutEmpleadoInput>
  }

  export type JornadaUpdateManyWithWhereWithoutEmpleadoInput = {
    where: JornadaScalarWhereInput
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type EmpleadoCreateWithoutJornadasInput = {
    nombre: string
    horarioInicio?: string | null
    horarioFin?: string | null
    activo?: boolean
    createdAt?: Date | string
    estacion: EstacionCreateNestedOneWithoutEmpleadosInput
  }

  export type EmpleadoUncheckedCreateWithoutJornadasInput = {
    id?: number
    nombre: string
    estacionId: number
    horarioInicio?: string | null
    horarioFin?: string | null
    activo?: boolean
    createdAt?: Date | string
  }

  export type EmpleadoCreateOrConnectWithoutJornadasInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutJornadasInput, EmpleadoUncheckedCreateWithoutJornadasInput>
  }

  export type MaquinaCreateWithoutJornadasInput = {
    nombre: string
    activa?: boolean
    moduloContador?: bigint | number
    direccionTotalizador?: $Enums.DireccionContador
    direccionProductos?: $Enums.DireccionContador
    estacion: EstacionCreateNestedOneWithoutMaquinasInput
  }

  export type MaquinaUncheckedCreateWithoutJornadasInput = {
    id?: number
    estacionId: number
    nombre: string
    activa?: boolean
    moduloContador?: bigint | number
    direccionTotalizador?: $Enums.DireccionContador
    direccionProductos?: $Enums.DireccionContador
  }

  export type MaquinaCreateOrConnectWithoutJornadasInput = {
    where: MaquinaWhereUniqueInput
    create: XOR<MaquinaCreateWithoutJornadasInput, MaquinaUncheckedCreateWithoutJornadasInput>
  }

  export type EstacionCreateWithoutJornadasInput = {
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaCreateNestedManyWithoutEstacionInput
    tanques?: TanqueCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoCreateNestedManyWithoutEstacionInput
    gastos?: GastoCreateNestedManyWithoutEstacionInput
  }

  export type EstacionUncheckedCreateWithoutJornadasInput = {
    id?: number
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaUncheckedCreateNestedManyWithoutEstacionInput
    tanques?: TanqueUncheckedCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutEstacionInput
    gastos?: GastoUncheckedCreateNestedManyWithoutEstacionInput
  }

  export type EstacionCreateOrConnectWithoutJornadasInput = {
    where: EstacionWhereUniqueInput
    create: XOR<EstacionCreateWithoutJornadasInput, EstacionUncheckedCreateWithoutJornadasInput>
  }

  export type LecturaJornadaCreateWithoutJornadaInput = {
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
    combustible: CombustibleCreateNestedOneWithoutLecturasInput
  }

  export type LecturaJornadaUncheckedCreateWithoutJornadaInput = {
    id?: number
    combustibleId: number
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaCreateOrConnectWithoutJornadaInput = {
    where: LecturaJornadaWhereUniqueInput
    create: XOR<LecturaJornadaCreateWithoutJornadaInput, LecturaJornadaUncheckedCreateWithoutJornadaInput>
  }

  export type LecturaJornadaCreateManyJornadaInputEnvelope = {
    data: LecturaJornadaCreateManyJornadaInput | LecturaJornadaCreateManyJornadaInput[]
    skipDuplicates?: boolean
  }

  export type PagoJornadaCreateWithoutJornadaInput = {
    medio: $Enums.MedioPago
    monto: Decimal | DecimalJsLike | number | string
    nota?: string | null
  }

  export type PagoJornadaUncheckedCreateWithoutJornadaInput = {
    id?: number
    medio: $Enums.MedioPago
    monto: Decimal | DecimalJsLike | number | string
    nota?: string | null
  }

  export type PagoJornadaCreateOrConnectWithoutJornadaInput = {
    where: PagoJornadaWhereUniqueInput
    create: XOR<PagoJornadaCreateWithoutJornadaInput, PagoJornadaUncheckedCreateWithoutJornadaInput>
  }

  export type PagoJornadaCreateManyJornadaInputEnvelope = {
    data: PagoJornadaCreateManyJornadaInput | PagoJornadaCreateManyJornadaInput[]
    skipDuplicates?: boolean
  }

  export type MovimientoStockCreateWithoutJornadaInput = {
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    nota?: string | null
    tanque: TanqueCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoStockUncheckedCreateWithoutJornadaInput = {
    id?: number
    tanqueId: number
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    nota?: string | null
  }

  export type MovimientoStockCreateOrConnectWithoutJornadaInput = {
    where: MovimientoStockWhereUniqueInput
    create: XOR<MovimientoStockCreateWithoutJornadaInput, MovimientoStockUncheckedCreateWithoutJornadaInput>
  }

  export type MovimientoStockCreateManyJornadaInputEnvelope = {
    data: MovimientoStockCreateManyJornadaInput | MovimientoStockCreateManyJornadaInput[]
    skipDuplicates?: boolean
  }

  export type EmpleadoUpsertWithoutJornadasInput = {
    update: XOR<EmpleadoUpdateWithoutJornadasInput, EmpleadoUncheckedUpdateWithoutJornadasInput>
    create: XOR<EmpleadoCreateWithoutJornadasInput, EmpleadoUncheckedCreateWithoutJornadasInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutJornadasInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutJornadasInput, EmpleadoUncheckedUpdateWithoutJornadasInput>
  }

  export type EmpleadoUpdateWithoutJornadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estacion?: EstacionUpdateOneRequiredWithoutEmpleadosNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutJornadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estacionId?: IntFieldUpdateOperationsInput | number
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaquinaUpsertWithoutJornadasInput = {
    update: XOR<MaquinaUpdateWithoutJornadasInput, MaquinaUncheckedUpdateWithoutJornadasInput>
    create: XOR<MaquinaCreateWithoutJornadasInput, MaquinaUncheckedCreateWithoutJornadasInput>
    where?: MaquinaWhereInput
  }

  export type MaquinaUpdateToOneWithWhereWithoutJornadasInput = {
    where?: MaquinaWhereInput
    data: XOR<MaquinaUpdateWithoutJornadasInput, MaquinaUncheckedUpdateWithoutJornadasInput>
  }

  export type MaquinaUpdateWithoutJornadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    estacion?: EstacionUpdateOneRequiredWithoutMaquinasNestedInput
  }

  export type MaquinaUncheckedUpdateWithoutJornadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
  }

  export type EstacionUpsertWithoutJornadasInput = {
    update: XOR<EstacionUpdateWithoutJornadasInput, EstacionUncheckedUpdateWithoutJornadasInput>
    create: XOR<EstacionCreateWithoutJornadasInput, EstacionUncheckedCreateWithoutJornadasInput>
    where?: EstacionWhereInput
  }

  export type EstacionUpdateToOneWithWhereWithoutJornadasInput = {
    where?: EstacionWhereInput
    data: XOR<EstacionUpdateWithoutJornadasInput, EstacionUncheckedUpdateWithoutJornadasInput>
  }

  export type EstacionUpdateWithoutJornadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUpdateManyWithoutEstacionNestedInput
    tanques?: TanqueUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUpdateManyWithoutEstacionNestedInput
  }

  export type EstacionUncheckedUpdateWithoutJornadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUncheckedUpdateManyWithoutEstacionNestedInput
    tanques?: TanqueUncheckedUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUncheckedUpdateManyWithoutEstacionNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutEstacionNestedInput
  }

  export type LecturaJornadaUpsertWithWhereUniqueWithoutJornadaInput = {
    where: LecturaJornadaWhereUniqueInput
    update: XOR<LecturaJornadaUpdateWithoutJornadaInput, LecturaJornadaUncheckedUpdateWithoutJornadaInput>
    create: XOR<LecturaJornadaCreateWithoutJornadaInput, LecturaJornadaUncheckedCreateWithoutJornadaInput>
  }

  export type LecturaJornadaUpdateWithWhereUniqueWithoutJornadaInput = {
    where: LecturaJornadaWhereUniqueInput
    data: XOR<LecturaJornadaUpdateWithoutJornadaInput, LecturaJornadaUncheckedUpdateWithoutJornadaInput>
  }

  export type LecturaJornadaUpdateManyWithWhereWithoutJornadaInput = {
    where: LecturaJornadaScalarWhereInput
    data: XOR<LecturaJornadaUpdateManyMutationInput, LecturaJornadaUncheckedUpdateManyWithoutJornadaInput>
  }

  export type PagoJornadaUpsertWithWhereUniqueWithoutJornadaInput = {
    where: PagoJornadaWhereUniqueInput
    update: XOR<PagoJornadaUpdateWithoutJornadaInput, PagoJornadaUncheckedUpdateWithoutJornadaInput>
    create: XOR<PagoJornadaCreateWithoutJornadaInput, PagoJornadaUncheckedCreateWithoutJornadaInput>
  }

  export type PagoJornadaUpdateWithWhereUniqueWithoutJornadaInput = {
    where: PagoJornadaWhereUniqueInput
    data: XOR<PagoJornadaUpdateWithoutJornadaInput, PagoJornadaUncheckedUpdateWithoutJornadaInput>
  }

  export type PagoJornadaUpdateManyWithWhereWithoutJornadaInput = {
    where: PagoJornadaScalarWhereInput
    data: XOR<PagoJornadaUpdateManyMutationInput, PagoJornadaUncheckedUpdateManyWithoutJornadaInput>
  }

  export type PagoJornadaScalarWhereInput = {
    AND?: PagoJornadaScalarWhereInput | PagoJornadaScalarWhereInput[]
    OR?: PagoJornadaScalarWhereInput[]
    NOT?: PagoJornadaScalarWhereInput | PagoJornadaScalarWhereInput[]
    id?: IntFilter<"PagoJornada"> | number
    jornadaId?: IntFilter<"PagoJornada"> | number
    medio?: EnumMedioPagoFilter<"PagoJornada"> | $Enums.MedioPago
    monto?: DecimalFilter<"PagoJornada"> | Decimal | DecimalJsLike | number | string
    nota?: StringNullableFilter<"PagoJornada"> | string | null
  }

  export type MovimientoStockUpsertWithWhereUniqueWithoutJornadaInput = {
    where: MovimientoStockWhereUniqueInput
    update: XOR<MovimientoStockUpdateWithoutJornadaInput, MovimientoStockUncheckedUpdateWithoutJornadaInput>
    create: XOR<MovimientoStockCreateWithoutJornadaInput, MovimientoStockUncheckedCreateWithoutJornadaInput>
  }

  export type MovimientoStockUpdateWithWhereUniqueWithoutJornadaInput = {
    where: MovimientoStockWhereUniqueInput
    data: XOR<MovimientoStockUpdateWithoutJornadaInput, MovimientoStockUncheckedUpdateWithoutJornadaInput>
  }

  export type MovimientoStockUpdateManyWithWhereWithoutJornadaInput = {
    where: MovimientoStockScalarWhereInput
    data: XOR<MovimientoStockUpdateManyMutationInput, MovimientoStockUncheckedUpdateManyWithoutJornadaInput>
  }

  export type JornadaCreateWithoutLecturasInput = {
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    empleado: EmpleadoCreateNestedOneWithoutJornadasInput
    maquina: MaquinaCreateNestedOneWithoutJornadasInput
    estacion: EstacionCreateNestedOneWithoutJornadasInput
    pagos?: PagoJornadaCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockCreateNestedManyWithoutJornadaInput
  }

  export type JornadaUncheckedCreateWithoutLecturasInput = {
    id?: number
    empleadoId: number
    maquinaId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    pagos?: PagoJornadaUncheckedCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutJornadaInput
  }

  export type JornadaCreateOrConnectWithoutLecturasInput = {
    where: JornadaWhereUniqueInput
    create: XOR<JornadaCreateWithoutLecturasInput, JornadaUncheckedCreateWithoutLecturasInput>
  }

  export type CombustibleCreateWithoutLecturasInput = {
    nombre: string
    precios?: HistorialPrecioCreateNestedManyWithoutCombustibleInput
    tanques?: TanqueCreateNestedManyWithoutCombustibleInput
  }

  export type CombustibleUncheckedCreateWithoutLecturasInput = {
    id?: number
    nombre: string
    precios?: HistorialPrecioUncheckedCreateNestedManyWithoutCombustibleInput
    tanques?: TanqueUncheckedCreateNestedManyWithoutCombustibleInput
  }

  export type CombustibleCreateOrConnectWithoutLecturasInput = {
    where: CombustibleWhereUniqueInput
    create: XOR<CombustibleCreateWithoutLecturasInput, CombustibleUncheckedCreateWithoutLecturasInput>
  }

  export type JornadaUpsertWithoutLecturasInput = {
    update: XOR<JornadaUpdateWithoutLecturasInput, JornadaUncheckedUpdateWithoutLecturasInput>
    create: XOR<JornadaCreateWithoutLecturasInput, JornadaUncheckedCreateWithoutLecturasInput>
    where?: JornadaWhereInput
  }

  export type JornadaUpdateToOneWithWhereWithoutLecturasInput = {
    where?: JornadaWhereInput
    data: XOR<JornadaUpdateWithoutLecturasInput, JornadaUncheckedUpdateWithoutLecturasInput>
  }

  export type JornadaUpdateWithoutLecturasInput = {
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    empleado?: EmpleadoUpdateOneRequiredWithoutJornadasNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutJornadasNestedInput
    estacion?: EstacionUpdateOneRequiredWithoutJornadasNestedInput
    pagos?: PagoJornadaUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateWithoutLecturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pagos?: PagoJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutJornadaNestedInput
  }

  export type CombustibleUpsertWithoutLecturasInput = {
    update: XOR<CombustibleUpdateWithoutLecturasInput, CombustibleUncheckedUpdateWithoutLecturasInput>
    create: XOR<CombustibleCreateWithoutLecturasInput, CombustibleUncheckedCreateWithoutLecturasInput>
    where?: CombustibleWhereInput
  }

  export type CombustibleUpdateToOneWithWhereWithoutLecturasInput = {
    where?: CombustibleWhereInput
    data: XOR<CombustibleUpdateWithoutLecturasInput, CombustibleUncheckedUpdateWithoutLecturasInput>
  }

  export type CombustibleUpdateWithoutLecturasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precios?: HistorialPrecioUpdateManyWithoutCombustibleNestedInput
    tanques?: TanqueUpdateManyWithoutCombustibleNestedInput
  }

  export type CombustibleUncheckedUpdateWithoutLecturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precios?: HistorialPrecioUncheckedUpdateManyWithoutCombustibleNestedInput
    tanques?: TanqueUncheckedUpdateManyWithoutCombustibleNestedInput
  }

  export type JornadaCreateWithoutPagosInput = {
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    empleado: EmpleadoCreateNestedOneWithoutJornadasInput
    maquina: MaquinaCreateNestedOneWithoutJornadasInput
    estacion: EstacionCreateNestedOneWithoutJornadasInput
    lecturas?: LecturaJornadaCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockCreateNestedManyWithoutJornadaInput
  }

  export type JornadaUncheckedCreateWithoutPagosInput = {
    id?: number
    empleadoId: number
    maquinaId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedCreateNestedManyWithoutJornadaInput
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutJornadaInput
  }

  export type JornadaCreateOrConnectWithoutPagosInput = {
    where: JornadaWhereUniqueInput
    create: XOR<JornadaCreateWithoutPagosInput, JornadaUncheckedCreateWithoutPagosInput>
  }

  export type JornadaUpsertWithoutPagosInput = {
    update: XOR<JornadaUpdateWithoutPagosInput, JornadaUncheckedUpdateWithoutPagosInput>
    create: XOR<JornadaCreateWithoutPagosInput, JornadaUncheckedCreateWithoutPagosInput>
    where?: JornadaWhereInput
  }

  export type JornadaUpdateToOneWithWhereWithoutPagosInput = {
    where?: JornadaWhereInput
    data: XOR<JornadaUpdateWithoutPagosInput, JornadaUncheckedUpdateWithoutPagosInput>
  }

  export type JornadaUpdateWithoutPagosInput = {
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    empleado?: EmpleadoUpdateOneRequiredWithoutJornadasNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutJornadasNestedInput
    estacion?: EstacionUpdateOneRequiredWithoutJornadasNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutJornadaNestedInput
  }

  export type EstacionCreateWithoutGastosInput = {
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaCreateNestedManyWithoutEstacionInput
    tanques?: TanqueCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaCreateNestedManyWithoutEstacionInput
  }

  export type EstacionUncheckedCreateWithoutGastosInput = {
    id?: number
    nombre: string
    direccion?: string | null
    activa?: boolean
    createdAt?: Date | string
    maquinas?: MaquinaUncheckedCreateNestedManyWithoutEstacionInput
    tanques?: TanqueUncheckedCreateNestedManyWithoutEstacionInput
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutEstacionInput
    jornadas?: JornadaUncheckedCreateNestedManyWithoutEstacionInput
  }

  export type EstacionCreateOrConnectWithoutGastosInput = {
    where: EstacionWhereUniqueInput
    create: XOR<EstacionCreateWithoutGastosInput, EstacionUncheckedCreateWithoutGastosInput>
  }

  export type EstacionUpsertWithoutGastosInput = {
    update: XOR<EstacionUpdateWithoutGastosInput, EstacionUncheckedUpdateWithoutGastosInput>
    create: XOR<EstacionCreateWithoutGastosInput, EstacionUncheckedCreateWithoutGastosInput>
    where?: EstacionWhereInput
  }

  export type EstacionUpdateToOneWithWhereWithoutGastosInput = {
    where?: EstacionWhereInput
    data: XOR<EstacionUpdateWithoutGastosInput, EstacionUncheckedUpdateWithoutGastosInput>
  }

  export type EstacionUpdateWithoutGastosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUpdateManyWithoutEstacionNestedInput
    tanques?: TanqueUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUpdateManyWithoutEstacionNestedInput
  }

  export type EstacionUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinas?: MaquinaUncheckedUpdateManyWithoutEstacionNestedInput
    tanques?: TanqueUncheckedUpdateManyWithoutEstacionNestedInput
    empleados?: EmpleadoUncheckedUpdateManyWithoutEstacionNestedInput
    jornadas?: JornadaUncheckedUpdateManyWithoutEstacionNestedInput
  }

  export type MaquinaCreateManyEstacionInput = {
    id?: number
    nombre: string
    activa?: boolean
    moduloContador?: bigint | number
    direccionTotalizador?: $Enums.DireccionContador
    direccionProductos?: $Enums.DireccionContador
  }

  export type TanqueCreateManyEstacionInput = {
    id?: number
    combustibleId: number
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
  }

  export type EmpleadoCreateManyEstacionInput = {
    id?: number
    nombre: string
    horarioInicio?: string | null
    horarioFin?: string | null
    activo?: boolean
    createdAt?: Date | string
  }

  export type JornadaCreateManyEstacionInput = {
    id?: number
    empleadoId: number
    maquinaId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
  }

  export type GastoCreateManyEstacionInput = {
    id?: number
    categoria: string
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha: Date | string
  }

  export type MaquinaUpdateWithoutEstacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    jornadas?: JornadaUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaUncheckedUpdateWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    jornadas?: JornadaUncheckedUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaUncheckedUpdateManyWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    moduloContador?: BigIntFieldUpdateOperationsInput | bigint | number
    direccionTotalizador?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
    direccionProductos?: EnumDireccionContadorFieldUpdateOperationsInput | $Enums.DireccionContador
  }

  export type TanqueUpdateWithoutEstacionInput = {
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    combustible?: CombustibleUpdateOneRequiredWithoutTanquesNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateManyWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmpleadoUpdateWithoutEstacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadas?: JornadaUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadas?: JornadaUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateManyWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JornadaUpdateWithoutEstacionInput = {
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    empleado?: EmpleadoUpdateOneRequiredWithoutJornadasNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutJornadasNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateManyWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type GastoUpdateWithoutEstacionInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUncheckedUpdateWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUncheckedUpdateManyWithoutEstacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JornadaCreateManyMaquinaInput = {
    id?: number
    empleadoId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
  }

  export type JornadaUpdateWithoutMaquinaInput = {
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    empleado?: EmpleadoUpdateOneRequiredWithoutJornadasNestedInput
    estacion?: EstacionUpdateOneRequiredWithoutJornadasNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateWithoutMaquinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateManyWithoutMaquinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type HistorialPrecioCreateManyCombustibleInput = {
    id?: number
    precio: Decimal | DecimalJsLike | number | string
    vigenteDesde: Date | string
  }

  export type TanqueCreateManyCombustibleInput = {
    id?: number
    estacionId: number
    capacidad: Decimal | DecimalJsLike | number | string
    minimo: Decimal | DecimalJsLike | number | string
  }

  export type LecturaJornadaCreateManyCombustibleInput = {
    id?: number
    jornadaId: number
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
  }

  export type HistorialPrecioUpdateWithoutCombustibleInput = {
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialPrecioUncheckedUpdateWithoutCombustibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialPrecioUncheckedUpdateManyWithoutCombustibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vigenteDesde?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TanqueUpdateWithoutCombustibleInput = {
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estacion?: EstacionUpdateOneRequiredWithoutTanquesNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutCombustibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateManyWithoutCombustibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    capacidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LecturaJornadaUpdateWithoutCombustibleInput = {
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jornada?: JornadaUpdateOneRequiredWithoutLecturasNestedInput
  }

  export type LecturaJornadaUncheckedUpdateWithoutCombustibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    jornadaId?: IntFieldUpdateOperationsInput | number
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaUncheckedUpdateManyWithoutCombustibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    jornadaId?: IntFieldUpdateOperationsInput | number
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MovimientoStockCreateManyTanqueInput = {
    id?: number
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    jornadaId?: number | null
    nota?: string | null
  }

  export type MovimientoStockUpdateWithoutTanqueInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    jornada?: JornadaUpdateOneWithoutMovimientosNestedInput
  }

  export type MovimientoStockUncheckedUpdateWithoutTanqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadaId?: NullableIntFieldUpdateOperationsInput | number | null
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimientoStockUncheckedUpdateManyWithoutTanqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadaId?: NullableIntFieldUpdateOperationsInput | number | null
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JornadaCreateManyEmpleadoInput = {
    id?: number
    maquinaId: number
    estacionId: number
    inicio: Date | string
    fin?: Date | string | null
    estado?: $Enums.EstadoJornada
    notas?: string | null
    totalizadorEntrada: Decimal | DecimalJsLike | number | string
    totalizadorSalida?: Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: Decimal | DecimalJsLike | number | string | null
    galonesProductos?: Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: Decimal | DecimalJsLike | number | string | null
    importeEsperado?: Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: Decimal | DecimalJsLike | number | string | null
  }

  export type JornadaUpdateWithoutEmpleadoInput = {
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maquina?: MaquinaUpdateOneRequiredWithoutJornadasNestedInput
    estacion?: EstacionUpdateOneRequiredWithoutJornadasNestedInput
    lecturas?: LecturaJornadaUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lecturas?: LecturaJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    pagos?: PagoJornadaUncheckedUpdateManyWithoutJornadaNestedInput
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutJornadaNestedInput
  }

  export type JornadaUncheckedUpdateManyWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    estacionId?: IntFieldUpdateOperationsInput | number
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    totalizadorEntrada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalizadorSalida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesTotalizador?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    galonesProductos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaControl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeEsperado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importeDeclarado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferenciaCaja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaCreateManyJornadaInput = {
    id?: number
    combustibleId: number
    entradaAtras: Decimal | DecimalJsLike | number | string
    entradaAdelante: Decimal | DecimalJsLike | number | string
    salidaAtras?: Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: Decimal | DecimalJsLike | number | string | null
    huboReinicio?: boolean
    galones?: Decimal | DecimalJsLike | number | string | null
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    importe?: Decimal | DecimalJsLike | number | string | null
  }

  export type PagoJornadaCreateManyJornadaInput = {
    id?: number
    medio: $Enums.MedioPago
    monto: Decimal | DecimalJsLike | number | string
    nota?: string | null
  }

  export type MovimientoStockCreateManyJornadaInput = {
    id?: number
    tanqueId: number
    tipo: $Enums.TipoMovimiento
    galones: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    nota?: string | null
  }

  export type LecturaJornadaUpdateWithoutJornadaInput = {
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    combustible?: CombustibleUpdateOneRequiredWithoutLecturasNestedInput
  }

  export type LecturaJornadaUncheckedUpdateWithoutJornadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type LecturaJornadaUncheckedUpdateManyWithoutJornadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    combustibleId?: IntFieldUpdateOperationsInput | number
    entradaAtras?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entradaAdelante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salidaAtras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salidaAdelante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    huboReinicio?: BoolFieldUpdateOperationsInput | boolean
    galones?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    importe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PagoJornadaUpdateWithoutJornadaInput = {
    medio?: EnumMedioPagoFieldUpdateOperationsInput | $Enums.MedioPago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoJornadaUncheckedUpdateWithoutJornadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    medio?: EnumMedioPagoFieldUpdateOperationsInput | $Enums.MedioPago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoJornadaUncheckedUpdateManyWithoutJornadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    medio?: EnumMedioPagoFieldUpdateOperationsInput | $Enums.MedioPago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimientoStockUpdateWithoutJornadaInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tanque?: TanqueUpdateOneRequiredWithoutMovimientosNestedInput
  }

  export type MovimientoStockUncheckedUpdateWithoutJornadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanqueId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimientoStockUncheckedUpdateManyWithoutJornadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanqueId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    galones?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
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