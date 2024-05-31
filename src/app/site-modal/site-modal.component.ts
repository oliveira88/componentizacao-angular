import { Component } from '@angular/core';
import { SiteModalService } from './site-modal.service';

export interface CarouselItem {
  id: number;
  imageUrl: string;
}

export interface CheckBox {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-site-modal',
  templateUrl: './site-modal.component.html',
  styleUrls: ['./site-modal.component.scss'],
})
export class SiteModalComponent {
  carouselItems: CarouselItem[] = [];
  checkBox: CheckBox[] = [];

  constructor(private modalService: SiteModalService) {}

  ngOnInit(): void {
    this.carouselItems = this.modalService.getCarousel();
    this.checkBox = this.modalService.getBox();
  }
}
