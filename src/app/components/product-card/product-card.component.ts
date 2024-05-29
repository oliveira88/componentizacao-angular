import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {

  @Input() product!: Product;

  hasDiscount(): boolean {

    return this.product.discount > 0;
  }

  likedStatusChange(): void {

    this.product.liked = !this.product.liked;
  }
}
