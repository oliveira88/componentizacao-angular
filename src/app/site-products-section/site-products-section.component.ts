import { Component } from '@angular/core';
import { SiteProductsSectionService } from './site-products-section.service';
import { Products } from '../products.model';

//Interface 'Products' with your specific properties

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
