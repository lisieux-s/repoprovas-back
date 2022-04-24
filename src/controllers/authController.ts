import { Request, Response } from "express";

export async function signIn(req: Request, res: Response) {
    const user = req.body;

    res.sendStatus(201);
}

export async function signUp(req: Request, res: Response) {
    const user = req.body;
}
