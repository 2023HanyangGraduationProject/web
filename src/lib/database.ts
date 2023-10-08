import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'
import { ProductTable } from './product/product.table'

// Keys of this interface are table names.
export interface Database {
  product: ProductTable
}

export const db = createKysely<Database>()
export { sql } from 'kysely'
