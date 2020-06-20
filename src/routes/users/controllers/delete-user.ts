import db from '../../../config/db'
import { QueryResult } from 'pg'
import query from '../models/query'
import DeleteConfirmation from '../interfaces/delete-confirmation.interface'
import Params from '../interfaces/delete-params.interface'

export default async function deleteUser({
    user_id,
}: string | any): Promise<DeleteConfirmation> {
    if (!user_id) throw new Error('user_id not specified')

    let deleteParams: [string] = [user_id]

    let queryResult: QueryResult = await db.query(
        query.deleteUser,
        deleteParams,
    )
    return {
        id: queryResult.rows[0].public_id,
        active: queryResult.rows[0].active,
    }
}
