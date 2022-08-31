import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesEditarComponent } from './habilidades-editar.component';

describe('HabilidadesEditarComponent', () => {
  let component: HabilidadesEditarComponent;
  let fixture: ComponentFixture<HabilidadesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
