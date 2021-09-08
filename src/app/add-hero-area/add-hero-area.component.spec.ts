import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroAreaComponent } from './add-hero-area.component';

describe('AddHeroAreaComponent', () => {
  let component: AddHeroAreaComponent;
  let fixture: ComponentFixture<AddHeroAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeroAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
