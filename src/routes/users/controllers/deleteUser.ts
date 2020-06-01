import db from '../../../config/db'
import { QueryResult } from 'pg'
import query from '../models/query'
import DeleteConfirmation from '../interfaces/delete-confirmation.interface'

type Params = string

export default async function deleteUser(
    public_id: Params,
): Promise<DeleteConfirmation> {
    let deleteParams: [string] = [public_id]

    let queryResult: QueryResult = await db.query(
        query.deleteUser,
        deleteParams,
    )
    return {
        id: queryResult.rows[0].public_id,
        active: queryResult.rows[0].active,
    }
}
