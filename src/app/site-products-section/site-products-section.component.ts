import { Component } from '@angular/core';

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
  products: Products[] = [
    {
      image: 'assets/images/ring-3.jpg',
      title: 'Philips Sonicare FlexCare Black',
      oldPrice: '136.00$',
      newPrice: '100.00$',
      discount: '',
      hasDiscount: false,
      rating: 5,
    },
    {
      image: 'assets/images/ring-4.jpg',
      title: 'Philips Sonicare FlexCare Black',
      oldPrice: '136.00$',
      newPrice: '100.00$',
      discount: '26%',
      hasDiscount: true,
      rating: 5,
    },
    {
      image: 'assets/images/ring-1.jpg',
      title: 'Philips Sonicare FlexCare Black',
      oldPrice: '136.00$',
      newPrice: '100.00$',
      discount: '',
      hasDiscount: false,
      rating: 5,
    },
    {
      image: 'assets/images/ring-2.jpg',
      title: 'Philips Sonicare FlexCare Black',
      oldPrice: '136.00$',
      newPrice: '100.00$',
      discount: '26%',
      hasDiscount: true,
      rating: 5,
    },
  ];
}
