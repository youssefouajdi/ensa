import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursListeComponent } from './cours-liste.component';

describe('CoursListeComponent', () => {
  let component: CoursListeComponent;
  let fixture: ComponentFixture<CoursListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
