import express from "express";
const app = express();

// adjusts path to OS
import path from "path";
import { apiErrorHandler } from './api/general/errorHandling';
import { apiDownloadImage } from './api/tours/apiDownloadImage';
import { userRouter } from './api/users/apiUsers';
import { toursRouter } from "./api/tours/apiTours";
import { apiCors } from './api/general/cors';
import { apiValidation } from './api/general/validation';
import { logger } from './api/general/logging';

app.disable("x-powered-by");

app.use(logger);

app.use(apiCors);

app.use(apiValidation);

app.use("/static", express.static(path.resolve("./", "public", "img")));

app.get("/", (req, res) => {
    res.send("Tour Booking API");
});

app.use("/users", userRouter);

app.use("/tours", toursRouter);

app.get("/static/download/:id", apiDownloadImage);

app.use(apiErrorHandler);

app.listen(process.env.PORT || 8091, () => {
    console.log("Server started...");
});