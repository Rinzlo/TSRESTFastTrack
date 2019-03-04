"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const static_1 = require("../general/static");
const messages_1 = require("../../model/shared/messages");
exports.apiUploadImage = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id == tourID);
    if (tourIndex == -1) {
        return next(new messages_1.APIError("Validation Error", "Could not locate tour", 400));
    }
    else {
        const upload = static_1.getFileUploader(req.app.get("env"));
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                return next(new messages_1.APIError("Upload Failure", "Failed to upload image.", 400));
            }
            else {
                data_1.DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(new messages_1.PublicInfo("Tour image uploaded!", 200));
            }
        });
    }
};
