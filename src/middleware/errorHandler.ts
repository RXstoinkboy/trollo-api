import { Request, Response, NextFunction } from "express";

class HttpException extends Error {
    statusCode: number;
    message: string;
    error: string | null;

    constructor(statusCode: number, message: string, error?: string) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
        this.error = error || null;
    }
}

export default function errorHandler(
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const status = error.statusCode || 500;
    const message =
        error.message || "Internal server error";

    res.status(status).send(message);
};