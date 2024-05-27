export enum Rating {
    One,
    Two,
    Three,
    Four,
    Five
}

export interface Product {
    name: string;
    imgURL: string;
    productPageURL: string;
    oldPrice: number;
    newPrice: number;
    discount: number;
    rating: Rating;
    liked: boolean;
}