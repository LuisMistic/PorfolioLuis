import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAgregarComponent } from './banner-agregar.component';

describe('BannerAgregarComponent', () => {
  let component: BannerAgregarComponent;
  let fixture: ComponentFixture<BannerAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
