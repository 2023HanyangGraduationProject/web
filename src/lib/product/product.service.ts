import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'
import { db } from '../database'
import { Product } from './product'
import { InsertableProductRow } from './product.table'

export async function createProduct(params: InsertableProductRow) {
    // const result = await db.product.insert(params)
    const result = await db.insertInto('product').values({seller: params.seller, row: params.row, col: params.col, price1: params.price1, currency1: params.currency1, price2: params.price2, currency2: params.currency2, price3: params.price3, currency3: params.currency3}).executeTakeFirst()
    return result
}
