import { Injectable } from '@angular/core';
import { Product, Rating } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products: Product[] =
  [
    {
      name: 'Philips Sonicare FlexCare Black',
      imgURL: 'assets/images/ring-1.jpg',
      productPageURL: 'product.html',
      oldPrice: 136.00,
      newPrice: 100.00,
      discount: 26,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Philips Sonicare FlexCare Black',
      imgURL: 'assets/images/ring-2.jpg',
      productPageURL: 'product.html',
      oldPrice: 100.00,
      newPrice: 100.00,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Philips Sonicare FlexCare Black',
      imgURL: 'assets/images/ring-3.jpg',
      productPageURL: 'product.html',
      oldPrice: 136.00,
      newPrice: 100.00,
      discount: 26,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Philips Sonicare FlexCare Black',
      imgURL: 'assets/images/ring-4.jpg',
      productPageURL: 'product.html',
      oldPrice: 100.00,
      newPrice: 100.00,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Driven Backpack K',
      imgURL: 'assets/images/fur-1.jpg',
      productPageURL: 'product.html',
      oldPrice: 200.00,
      newPrice: 200.00,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Driven Backpack K',
      imgURL: 'assets/images/fur-2.jpg',
      productPageURL: 'product.html',
      oldPrice: 200.00,
      newPrice: 200.00,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Driven Backpack K',
      imgURL: 'assets/images/fur-3.jpg',
      productPageURL: 'product.html',
      oldPrice: 200.00,
      newPrice: 200.00,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Driven Backpack K',
      imgURL: 'assets/images/fur-3.jpg',
      productPageURL: 'product.html',
      oldPrice: 200.00,
      newPrice: 200.00,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Driven Backpack K',
      imgURL: 'assets/images/fur-1.jpg',
      productPageURL: 'product.html',
      oldPrice: 200.00,
      newPrice: 200.00,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Driven Backpack K',
      imgURL: 'assets/images/fur-2.jpg',
      productPageURL: 'product.html',
      oldPrice: 200.00,
      newPrice: 200.00,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Iphone 5',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Iphone 5s',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Iphone 6',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Iphone 6s',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Galaxy S6',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Galaxy S7',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Galaxy S8',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'Galaxy S9',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'OPPO F1s',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'OPPO Neo 7',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'OPPO Neo 9',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    },
    {
      name: 'OPPO Neo 3',
      imgURL: '#',
      productPageURL: 'product.html',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      rating: Rating.Five,
      liked: false
    }
  ]

  getFlashSaleProducts(): Product[] {
    return this.products.slice(0,6);
  }

  getBestSellersProducts(): Product[] {
    return this.products.slice(0,6);
  }

  getFurnitureProducts(): Product[] {
    return this.products.slice(4, 10);
  }

  getIphoneProducts(): Product[] {
    return this.products.slice(10, 14);
  }

  getSamsungProducts(): Product[] {
    return this.products.slice(14, 18);
  }

  getOppoProducts(): Product[] {
    return this.products.slice(18, 22);
  }
}