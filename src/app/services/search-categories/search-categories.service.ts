import { Injectable } from '@angular/core';
import { Category } from 'src/model/category';

@Injectable({
  providedIn: 'root'
})
export class SearchCategoriesService {

  constructor() { }

  getSearchCategories(): Category[] {
    return [
      {
          name: "Jewelry",
          members: [
              {
                  name: "Necklaces",
                  members: [
                      { name: "Beaded Necklaces" },
                      { name: "Pendants" },
                      { name: "Charm Necklaces" }
                  ]
              },
              {
                  name: "Earrings",
                  members: [
                      { name: "Hoop Earrings" },
                      { name: "Stud Earrings" },
                      { name: "Chandelier Earrings" },
                      { name: "Cluster Earrings" }
                  ]
              },
              { name: "Brooches" },
              { name: "Bracelets" },
              { name: "Rings" }
          ]
      },
      {
          name: "Sports",
          members: [
              {
                  name: "Football",
                  members: [
                      { name: "Nike" },
                      { name: "Puma" },
                      { name: "Adidas" }
                  ]
              }
          ]
      },
      {
          name: "Computers",
          members: [
              { name: "Accessories" },
              { name: "Storage" },
              { name: "Printers" },
              { name: "Network Components" }
          ]
      },
      {
          name: "Headphones & Headsets",
          members: [
              { name: "Accessories" },
              { name: "Storage" },
              { name: "Printers" },
              { name: "Network Components" }
          ]
      },
      { name: "Food" },
      { name: "Books" },
      { name: "Fashion" },
      { name: "Infant Toys" }
    ];
  }
}
