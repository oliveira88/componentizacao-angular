import { Component } from '@angular/core';
import { SiteProductsSectionService } from './site-products-section.service';

//Interface 'Products' with your specific properties
interface Products {
  title: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  hasDiscount: boolean;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-site-products-section',
  templateUrl: './site-products-section.component.html',
  styleUrls: ['./site-products-section.component.scss'],
})
export class SiteProductsSectionComponent {
  //Array that holds 'Products' properties
  products: Products[];

  constructor(public siteProducts: SiteProductsSectionService) {
    this.products = this.siteProducts.getProducts();
  }
}
