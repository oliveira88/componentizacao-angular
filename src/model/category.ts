import { Product } from "./product";

export interface Category {
    name: string;
    members?: Category[];
}