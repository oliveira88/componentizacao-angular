import { Component } from '@angular/core';
import { SiteHeaderService } from './site-header.service';

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
  categories: Category[] = [];
  menuItems: MenuItem[] = [];

  constructor(private menuService: SiteHeaderService) {}

  ngOnInit(): void {
    this.categories = this.menuService.getCategories();
    this.menuItems = this.menuService.getMenuItems();
  }
}
