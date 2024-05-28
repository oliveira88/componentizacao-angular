import { Component } from '@angular/core';
import { SiteFooterService } from './site-footer.service';

interface FooterItens {
  title: string;
  ref: string[];
}
@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
})
export class SiteFooterComponent {
  footer: FooterItens[];

  constructor(private Sitefooter: SiteFooterService) {
    this.footer = this.Sitefooter.getFooter();
  }
}
