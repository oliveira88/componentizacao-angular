import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBlocksComponent } from './site-blocks.component';

describe('SiteBlocksComponent', () => {
  let component: SiteBlocksComponent;
  let fixture: ComponentFixture<SiteBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteBlocksComponent]
    });
    fixture = TestBed.createComponent(SiteBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
