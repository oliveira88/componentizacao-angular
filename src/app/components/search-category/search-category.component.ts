import { Component, Input } from '@angular/core';
import { Category } from 'src/model/category';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.scss']
})
export class SearchCategoryComponent {

  @Input() category!: Category;

  hasSubcategories(): boolean {
    
    return (
      this.category.members != undefined &&
      this.category.members.length != 0
    );
  }
}
