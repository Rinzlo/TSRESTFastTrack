import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { TourDetail } from '../../model/shared/tourDetail';
import { fileMapper } from '../general/static';
import { APIError } from '../../model/shared/messages';

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = DataStore.tours.find((element: any) => element.id == tourID);
    if(selectedTour) {
        const imageURLs = selectedTour.img.map(fileMapper(req.app.get("env")));
        const selectedReviews = DataStore.reviews.filter((item: any) => item.tourID == tourID);
        res.json(new TourDetail(selectedTour, selectedReviews, imageURLs));
    }
    else {
        return next(new APIError("Validation Error", "Tour not found.", 400));
    }
}