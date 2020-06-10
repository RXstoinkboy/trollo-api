import Params from '../interfaces/get-categories-params.interface'
import db from '../../../config/db'
import query from '../models/get-categories'
import { QueryResult } from 'pg'

export default async function getCategories({
    user_id,
}: Params): Promise<any[]> {
    try {
        let getCategoriesParams: [string] = [user_id]
        const queryResult: QueryResult = await db.query(
            query.getCategories,
            getCategoriesParams,
        )
        return queryResult.rows
    } catch (err) {
        console.error(err)
        throw err
    }
}
