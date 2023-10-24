import { Generated, Insertable, Selectable, Updateable, ColumnType } from 'kysely'

export interface CollectionTable {
    id: Generated<number>
    seller: string
    name: string
    row: number
    col: number
    price1: number
    currency1: number
    price2: number
    currency2: number
    price3: number
    currency3: number

    // You can specify a different type for each operation (select, insert and
    // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
    // wrapper. Here we define a column `createdAt` that is selected as
    // a `Date`, can optionally be provided as a `string` in inserts and
    // can never be updated:
    //   createdAt: ColumnType<Date, string | undefined, never>
}

export type CollectionRow = Selectable<CollectionTable>
export type InsertableCollectionRow = Insertable<CollectionTable>
export type UpdateableCollectionRow = Updateable<CollectionTable>
