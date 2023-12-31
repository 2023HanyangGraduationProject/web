import { Generated, Insertable, Selectable, Updateable, ColumnType } from 'kysely'

export interface ProductTable {
    id: Generated<number>
    collection_id: number
    img: string

    // You can specify a different type for each operation (select, insert and
    // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
    // wrapper. Here we define a column `createdAt` that is selected as
    // a `Date`, can optionally be provided as a `string` in inserts and
    // can never be updated:
    //   createdAt: ColumnType<Date, string | undefined, never>
}

export type ProductRow = Selectable<ProductTable>
export type InsertableProductRow = Insertable<ProductTable>
export type UpdateableProductRow = Updateable<ProductTable>
