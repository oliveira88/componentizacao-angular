import { Component } from '@angular/core';

interface Footer {
  title: string;
  ref?: string[];
}
@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
})
export class SiteFooterComponent {
  footer: Footer[] = [
    {
      title: 'ABOUT MARKET',
      ref: ['About', 'UsContactPrivacy', 'PolicySite', 'Map'],
    },
    {
      title: 'MAKE MONEY WITH US',
      ref: [
        'Martketplace',
        'Compensation',
        'FirstMy',
        'AccountReturn',
        'PolicyAffiliate',
      ],
    },
    {
      title: 'PAYMENT & SHIPPING',
      ref: [
        'Terms of Use',
        'Payment Methods',
        'Shipping Methods',
        'Locations We Ship To',
        'Estimated Delivery Time',
      ],
    },
    {
      title: 'LET US HELP YOU',
      ref: ['Join Free', 'Blog', 'Faqs', 'Store Location', 'Shop By Brands'],
    },
  ];
}
