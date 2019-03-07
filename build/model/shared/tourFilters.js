"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TourFilters {
    constructor(data) {
        this.location = data.location;
        this.priceMin = data.priceMine;
        this.priceMax = data.priceMax;
    }
}
exports.TourFilters = TourFilters;
