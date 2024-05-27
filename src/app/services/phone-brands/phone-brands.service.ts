import { Injectable } from '@angular/core';
import { Category } from 'src/model/category';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneBrandsService {

  constructor( private productsService: ProductsService ) { }

  // Forçação de barra
  getPhoneBrands(): any {
    return [
      {
        name: "Iphone",
        members: this.productsService.getIphoneProducts()
      },
      {
        name: "SamSung",
        members: this.productsService.getSamsungProducts()
      },
      { name: "SONY" },
      { name: "HUWAEI" },
      {
        name: "OPPO",
        members: this.productsService.getOppoProducts()
      },
      { name: "Xiaomi" }
    ];
  }
}
