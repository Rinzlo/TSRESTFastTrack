import { Router } from 'express';
import { apiCheckTourFilters } from './apiCheckTourFilters';
import { apiGetTourDetail } from './apiGetTourDetail';
import { apiGetTours } from './apiGetTours';
import { apiCreateTour } from './apiCreateTour';
import { apiDeleteTour } from './apiDeleteTour';
import { apiUpdateTour } from './apiUpdateTour';
import { apiUploadImage } from './apiUploadImage';
import { jsonParser } from '../general/bodyParser';

export let toursRouter = Router();

toursRouter.get("/", apiCheckTourFilters, apiGetTours);

toursRouter.get("/:id", apiGetTourDetail);

// url, middleware, routing/controller
toursRouter.post("/", jsonParser, apiCreateTour);

toursRouter.delete("/:id", apiDeleteTour);

toursRouter.patch("/:id", jsonParser, apiUpdateTour);

toursRouter.post("/:id/img", apiUploadImage);