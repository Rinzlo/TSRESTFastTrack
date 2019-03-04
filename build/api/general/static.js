"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:8091/static/";
        case "production":
        //...CDN...
    }
}
exports.getStaticHome = getStaticHome;
function fileMapper(env) {
    return (filename) => getStaticHome(env) + filename;
}
exports.fileMapper = fileMapper;
