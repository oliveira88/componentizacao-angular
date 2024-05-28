import { Injectable } from '@angular/core';

interface FooterItens {
  title: string;
  ref: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SiteFooterService {
  constructor() {}

  getFooter(): FooterItens[] {
    return [
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
}
