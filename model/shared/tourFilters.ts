export class TourFilters {
    readonly location: string
    readonly priceMin: number
    readonly priceMax: number
    constructor(data: any) {
        this.location = data.location;
        this.priceMin = data.priceMine;
        this.priceMax = data.priceMax;
    }
}