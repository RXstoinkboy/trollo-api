import db from '../../../config/db'
import query from '../models/query'

type Params = {
    public_id: string
    new_login: string
    repeat_new_login: string
}

export default async function updateUsername({
    public_id,
    new_login,
    repeat_new_login,
}: Params): Promise<boolean> {
    if (!public_id) throw new Error('public_id not specified')
    if (!new_login) throw new Error('new_login not specified')
    if (!repeat_new_login) throw new Error('repeat_new_login not specified')

    if (new_login === repeat_new_login) {
        let updateUsernameParams: [string, string] = [public_id, new_login]
        await db.query(query.updateUsername, updateUsernameParams)
        return true
    }
    return false
}
