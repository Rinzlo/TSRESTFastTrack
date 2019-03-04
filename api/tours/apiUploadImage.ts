import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { getFileUploader } from '../general/static';
import { PublicInfo, APIError } from '../../model/shared/messages';

export const apiUploadImage: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
    if(tourIndex == -1) {
        return next(new APIError("Validation Error", "Could not locate tour", 400));
    }
    else {
        const upload = getFileUploader(req.app.get("env"));
        upload(req, res, (err) => {
            if(err) {
                console.log(err);
                return next(new APIError("Upload Failure", "Failed to upload image.", 400));
            }
            else {
                DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(new PublicInfo("Tour image uploaded!", 200));
            }
        })
    }
};