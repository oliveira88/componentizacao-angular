import { Component } from '@angular/core';

export interface Category {
  id: number;
  value: string;
  subcategories?: Category[];
}

export interface MenuItem {
  icon: string;
  name: string;
  submenu?: SubmenuItem[];
}

export interface SubmenuItem {
  name: string;
}
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent {
  categories: Category[] = [
    {
      id: 1,
      value: 'Jewelry',
      subcategories: [
        {
          id: 2,
          value: 'Necklaces',
          subcategories: [
            { id: 3, value: 'Beaded Necklaces' },
            { id: 4, value: 'Pendants' },
            { id: 5, value: 'Necklaces' },
            { id: 6, value: 'Charm Necklaces' },
          ],
        },
        {
          id: 7,
          value: 'Earrings',
          subcategories: [
            { id: 8, value: 'Hoop Earrings' },
            { id: 9, value: 'Stud Earrings' },
            { id: 10, value: 'Chandelier Earrings' },
            { id: 11, value: 'Cluster Earrings' },
          ],
        },
        { id: 12, value: 'Brooches' },
        { id: 13, value: 'Bracelets' },
        { id: 14, value: 'Rings' },
      ],
    },
    {
      id: 15,
      value: 'Sports',
      subcategories: [
        {
          id: 16,
          value: 'Football',
          subcategories: [
            { id: 17, value: 'Nike' },
            { id: 18, value: 'Puma' },
            { id: 19, value: 'Adidas' },
          ],
        },
        {
          id: 20,
          value: 'Football',
          subcategories: [
            { id: 21, value: 'Nike' },
            { id: 22, value: 'Puma' },
            { id: 23, value: 'Adidas' },
          ],
        },
      ],
    },
    {
      id: 24,
      value: 'Computers',
      subcategories: [
        { id: 25, value: 'Accessories' },
        { id: 26, value: 'Storage' },
        { id: 27, value: 'Printers' },
        { id: 28, value: 'Network Components' },
      ],
    },
    {
      id: 29,
      value: 'Headphones & Headsets',
      subcategories: [
        { id: 30, value: 'Accessories' },
        { id: 31, value: 'Storage' },
        { id: 32, value: 'Printers' },
        { id: 33, value: 'Network Components' },
      ],
    },
    { id: 34, value: 'Food' },
    { id: 35, value: 'Books' },
    { id: 36, value: 'Fashion' },
    { id: 37, value: 'Infant Toys' },
  ];

  menuItems: MenuItem[] = [
    {
      icon: 'icofont-smart-phone',
      name: 'Smart Phones',
      submenu: [
        { name: 'Iphone 5' },
        { name: 'Iphone 5s' },
        { name: 'Iphone 6' },
        { name: 'Iphone 6s' },
      ],
    },
    {
      icon: 'icofont-wheelchair',
      name: 'Furniture',
      submenu: [
        { name: 'Driven Backpack K' },
        { name: 'Driven Backpack K' },
        { name: 'Driven Backpack K' },
      ],
    },
  ];

  myCatSelect(event: any): void {
    console.log(event.target.value);
  }
}
