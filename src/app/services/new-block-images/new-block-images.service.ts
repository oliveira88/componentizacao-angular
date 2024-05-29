import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewBlockImagesService {

  constructor() { }

  getNewBlockImages(): string[] {
    return [
      "assets/images/ad-1.jpg",
      "assets/images/ad-2.jpg",
      "assets/images/ad-3.jpg",
      "assets/images/ad-4.jpg",
      "assets/images/ad-5.jpg",
      "assets/images/ad-6.jpg",
      "assets/images/ad-7.jpg",
      "assets/images/ad-8.jpg"
    ]
  }
}
