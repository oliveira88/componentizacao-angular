import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteProductsSectionComponent } from './site-products-section/site-products-section.component';
import { SiteBlocksComponent } from './site-blocks/site-blocks.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteModalComponent } from './site-modal/site-modal.component';
import { ProductsCardsComponent } from './products-cards/products-cards.component';

@NgModule({
  declarations: [AppComponent, SiteHeaderComponent, SiteProductsSectionComponent, SiteBlocksComponent, SiteFooterComponent, SiteModalComponent, ProductsCardsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
