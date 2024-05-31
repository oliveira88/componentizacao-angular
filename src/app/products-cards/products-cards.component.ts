import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.scss'],
})
export class ProductsCardsComponent {
  // Input property that receives the values from the parent component
  @Input() product: any;
  public isLiked: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
}
