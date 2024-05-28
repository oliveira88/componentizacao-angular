import { Injectable } from '@angular/core';
import { CarouselItem, CheckBox } from './site-modal.component';

@Injectable({
  providedIn: 'root',
})
export class SiteModalService {
  constructor() {}

  private carouselItems: CarouselItem[] = [
    { id: 1, imageUrl: 'assets/images/ring-1.jpg' },
    { id: 2, imageUrl: 'assets/images/ring-2.jpg' },
    { id: 3, imageUrl: 'assets/images/ring-3.jpg' },
    { id: 4, imageUrl: 'assets/images/ring-4.jpg' },
  ];

  private checkBox: CheckBox[] = [
    {
      icon: 'icofont-vehicle-delivery-van',
      title: 'Free Shipping',
      description: 'On all orders $199.00',
    },
    {
      icon: 'icofont-money-bag',
      title: '90 Day',
      description: 'Money Come Black',
    },
    {
      icon: 'icofont-safety',
      title: 'Safe Shopping',
      description: 'Guarantee 100%',
    },
  ];

  getCarousel(): CarouselItem[] {
    return this.carouselItems;
  }

  getBox(): CheckBox[] {
    return this.checkBox;
  }
}
