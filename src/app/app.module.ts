import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NewBlockComponent } from './components/new-block/new-block.component';
import { SearchCategoryComponent } from './components/search-category/search-category.component';
import { ToArrayPipe } from './pipes/to-array.pipe';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, NewBlockComponent, SearchCategoryComponent, ToArrayPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
