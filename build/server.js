"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// adjusts path to OS
const path_1 = __importDefault(require("path"));
const errorHandling_1 = require("./api/general/errorHandling");
const apiDownloadImage_1 = require("./api/tours/apiDownloadImage");
const apiUsers_1 = require("./api/users/apiUsers");
const apiTours_1 = require("./api/tours/apiTours");
const cors_1 = require("./api/general/cors");
const validation_1 = require("./api/general/validation");
const logging_1 = require("./api/general/logging");
app.disable("x-powered-by");
app.use(logging_1.logger);
app.use(cors_1.apiCors);
app.use(validation_1.apiValidation);
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "img")));
app.get("/", (req, res) => {
    res.send("Tour Booking API");
});
app.use("/users", apiUsers_1.userRouter);
app.use("/tours", apiTours_1.toursRouter);
app.get("/static/download/:id", apiDownloadImage_1.apiDownloadImage);
app.use(errorHandling_1.apiErrorHandler);
app.listen(process.env.PORT || 8091, () => {
    console.log("Server started...");
});
