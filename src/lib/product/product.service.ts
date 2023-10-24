import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'
import { db } from '../database'
import { Product } from './product'
import { InsertableProductRow } from './product.table'

export async function createProduct(params: InsertableProductRow) {
    const result = await db.insertInto('product').values({collection_id: params.collection_id, img: params.img}).executeTakeFirst()
    return result
}
