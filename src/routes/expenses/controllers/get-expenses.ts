import db from '../../../config/db'
import query from '../models/get-expenses'
import { QueryResult } from 'pg'
import Params from '../interfaces/get-expenses-params.interface'

export default async function getExpenses({ user_id }: Params): Promise<any[]> {
    try {
        let getExpensesParams: [string] = [user_id]
        const queryResult: QueryResult = await db.query(
            query.getExpenses,
            getExpensesParams,
        )
        return queryResult.rows
    } catch (err) {
        console.error(err)
        throw err
    }
}
