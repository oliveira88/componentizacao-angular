import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteProductsSectionComponent } from './site-products-section.component';

describe('SiteProductsSectionComponent', () => {
  let component: SiteProductsSectionComponent;
  let fixture: ComponentFixture<SiteProductsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteProductsSectionComponent]
    });
    fixture = TestBed.createComponent(SiteProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
