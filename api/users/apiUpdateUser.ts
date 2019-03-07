import { RequestHandler } from 'express';

export const apiUpdateUser: RequestHandler = (req, res, next) => {
    res.send("Data updated for User " + req.params.id);
};