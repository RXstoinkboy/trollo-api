import db from '../../../config/db'
import query from '../models/query'
import Params from '../interfaces/update-username-params.interface'

export default async function updateUsername({
    new_login,
    repeat_new_login,
}: Params, { user_id }: string | any): Promise<boolean> {
    if (!user_id) throw new Error('user_id not specified')
    if (!new_login) throw new Error('new_login not specified')
    if (!repeat_new_login) throw new Error('repeat_new_login not specified')

    if (new_login === repeat_new_login) {
        let updateUsernameParams: [string, string] = [user_id, new_login]
        await db.query(query.updateUsername, updateUsernameParams)
        return true
    }
    return false
}
