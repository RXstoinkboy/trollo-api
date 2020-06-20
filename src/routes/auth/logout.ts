import { Request, Response } from 'express'

export async function logout(req: Request, res: Response) {
    req.logout();
    res.redirect('/login')

    // to make it safer there should be addition DB connected where blacklisted JWT tokens can be stored
    // then there should be middleware checking if a given token is on a blacklist or not
    // clear local storage client side
}