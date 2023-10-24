import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'
import { CollectionTable } from './collection/collection.table'
import { ProductTable } from './product/product.table'

// Keys of this interface are table names.
export interface Database {
  collection: CollectionTable
  product: ProductTable
}

export const db = createKysely<Database>()
export { sql } from 'kysely'
