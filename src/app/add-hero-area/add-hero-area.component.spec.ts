import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddHeroAreaComponent} from './add-hero-area.component';
import {DebugElement, Pipe} from "@angular/core";
import {HeroStoreService} from "../services/hero-store-service/hero-store.service";
import {BehaviorSubject} from "rxjs";
import {Hero} from "../models/hero";
import {HeroService} from "../services/hero-service/hero.service";

describe('AddHeroAreaComponent', () => {
  let component: AddHeroAreaComponent;
  let fixture: ComponentFixture<AddHeroAreaComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHeroAreaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroAreaComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
