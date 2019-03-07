"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCheckTourFilters_1 = require("./apiCheckTourFilters");
const apiGetTourDetail_1 = require("./apiGetTourDetail");
const apiGetTours_1 = require("./apiGetTours");
const apiCreateTour_1 = require("./apiCreateTour");
const apiDeleteTour_1 = require("./apiDeleteTour");
const apiUpdateTour_1 = require("./apiUpdateTour");
const apiUploadImage_1 = require("./apiUploadImage");
const bodyParser_1 = require("../general/bodyParser");
exports.toursRouter = express_1.Router();
exports.toursRouter.get("/", apiCheckTourFilters_1.apiCheckTourFilters, apiGetTours_1.apiGetTours);
exports.toursRouter.get("/:id", apiGetTourDetail_1.apiGetTourDetail);
// url, middleware, routing/controller
exports.toursRouter.post("/", bodyParser_1.jsonParser, apiCreateTour_1.apiCreateTour);
exports.toursRouter.delete("/:id", apiDeleteTour_1.apiDeleteTour);
exports.toursRouter.patch("/:id", bodyParser_1.jsonParser, apiUpdateTour_1.apiUpdateTour);
exports.toursRouter.post("/:id/img", apiUploadImage_1.apiUploadImage);
