import { Component } from '@angular/core';

export interface CarouselItem {
  id: number;
  imageUrl: string;
}

export interface ShipBox {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-site-modal',
  templateUrl: './site-modal.component.html',
  styleUrls: ['./site-modal.component.scss'],
})
export class SiteModalComponent {
  carouselItems: CarouselItem[] = [
    { id: 1, imageUrl: 'assets/images/ring-1.jpg' },
    { id: 2, imageUrl: 'assets/images/ring-2.jpg' },
    { id: 3, imageUrl: 'assets/images/ring-3.jpg' },
    { id: 4, imageUrl: 'assets/images/ring-4.jpg' },
  ];

  shipBoxes: ShipBox[] = [
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
}
