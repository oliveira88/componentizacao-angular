import { Component, ViewChild } from '@angular/core';

import { Product } from '../model/product';
import { Category } from 'src/model/category';
import { ProductsService } from './services/products/products.service';
import { SearchCategoriesService } from './services/search-categories/search-categories.service';
import { PhoneBrandsService } from './services/phone-brands/phone-brands.service';
import { NewBlockImagesService } from './services/new-block-images/new-block-images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private productsService: ProductsService,
    private searchCategoriesService: SearchCategoriesService,
    private phoneCategoriesService: PhoneBrandsService,
    private newBlockImagesService: NewBlockImagesService
  ) {}

  flashSaleProducts: Product[] = this.productsService.getFlashSaleProducts();
  bestSellersProducts: Product[] = this.productsService.getBestSellersProducts();
  furnitureProducts: Product[] = this.productsService.getFurnitureProducts();

  searchCategories: Category[] = this.searchCategoriesService.getSearchCategories();
  phoneCategories: any = this.phoneCategoriesService.getPhoneBrands();

  newBlockImgs: string[] = this.newBlockImagesService.getNewBlockImages();
}
