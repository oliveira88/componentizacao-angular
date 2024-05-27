
import { Injectable } from '@angular/core';
import { Block } from 'src/model/block';

@Injectable({
  providedIn: 'root'
})
export class NewBlockService {

  constructor() { }

  getBlocks(): Block[] {
    return [
      { imageURL: "assets/images/ad-1.jpg", link: "#" },
      { imageURL: "assets/images/ad-2.jpg", link: "#" },
      { imageURL: "assets/images/ad-3.jpg", link: "#" },
      { imageURL: "assets/images/ad-4.jpg", link: "#" },
      { imageURL: "assets/images/ad-5.jpg", link: "#" },
      { imageURL: "assets/images/ad-6.jpg", link: "#" },
      { imageURL: "assets/images/ad-7.jpg", link: "#" },
      { imageURL: "assets/images/ad-8.jpg", link: "#" }
    ]
  }
}
