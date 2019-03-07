"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUpdateUser = (req, res, next) => {
    res.send("Data updated for User " + req.params.id);
};
