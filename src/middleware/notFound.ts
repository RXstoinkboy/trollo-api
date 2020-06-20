import { Request, Response, NextFunction } from 'express'

export default function notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404).send("What you're lookin' for is not here, my friend...")
}