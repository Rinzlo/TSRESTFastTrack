import express from "express";
const app = express();

import * as bodyparser from "body-parser";
// build json parsing middlewear
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({extended: true});

import { DataStore } from './data/data';
import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';
import { apiCreateTour } from './api/tours/apiCreateTour';
import { apiDeleteTour } from './api/tours/apiDeleteTour';
import { apiUpdateTour } from './api/tours/apiUpdateTour';
import { CustomRequestHandler } from './model/express';
// adjusts path to OS
import path from "path";

import morgan from "morgan";
import { apiUploadImage } from './api/tours/apiUploadImage';
const logger = morgan("dev");

app.use(logger);

app.use("/static", express.static(path.resolve("./", "public", "img")));

app.get("/", (req, res, next) => {
    res.send("Tour Booking API");
});

app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

// url, middleware, routing/controller
app.post("/tours", jsonParser, apiCreateTour);

app.delete("/tours/:id", apiDeleteTour);

app.patch("/tours/:id", jsonParser, apiUpdateTour);

app.post("/tours/:id/img", apiUploadImage);

app.listen(process.env.PORT || 8091, () => {
    console.log("Server started...");
});