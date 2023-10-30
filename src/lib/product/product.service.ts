import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'
import { db } from '../database'
import { Product } from './product'
import { InsertableProductRow } from './product.table'

export async function createProduct(params: InsertableProductRow) {
    const result = await db.insertInto('product').values({collection_id: params.collection_id, img: params.img}).executeTakeFirst()
    return result
}

export async function getProductsByCollectionId(id: number) { 
    const result = await db.selectFrom('product').selectAll().where('collection_id','=',id).execute()
    return result
}

export async function getProductById(id: number) {
    const result = await db.selectFrom('product').selectAll().where('id','=',id).execute()
    return result
}
