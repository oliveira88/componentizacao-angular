import { Component, ViewChild } from '@angular/core';

import { Product } from '../model/product';
import { Category } from 'src/model/category';
import { ProductsService } from './services/products/products.service';
import { SearchCategoriesService } from './services/search-categories/search-categories.service';
import { PhoneBrandsService } from './services/phone-brands/phone-brands.service';
import { NewBlockService } from './services/new-block/new-block.service';
import { Block } from 'src/model/block';

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
    private newBlockImagesService: NewBlockService
  ) {}

  flashSaleProducts: Product[] = this.productsService.getFlashSaleProducts();
  bestSellersProducts: Product[] = this.productsService.getBestSellersProducts();
  furnitureProducts: Product[] = this.productsService.getFurnitureProducts();

  searchCategories: Category[] = this.searchCategoriesService.getSearchCategories();
  phoneCategories: any = this.phoneCategoriesService.getPhoneBrands();

  blocks: Block[] = this.newBlockImagesService.getBlocks();
}
