import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'
import { db } from '../database'
import { Collection } from './collection'
import { InsertableCollectionRow } from './collection.table'

export async function createCollection(params: InsertableCollectionRow) {
    const result = await db.insertInto('collection').values({seller: params.seller, name: params.name, row: params.row, col: params.col, price1: params.price1, currency1: params.currency1, price2: params.price2, currency2: params.currency2, price3: params.price3, currency3: params.currency3}).returningAll().executeTakeFirst()
    return result?.id ?? -1
}
