import {TestBed} from '@angular/core/testing';

import {HeroService} from './hero.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Hero} from "../../models/hero";

describe('HeroService', () => {
  let service: HeroService
  let httpTestingController: HttpTestingController;
  let heroes: Hero[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService
      ]
    });
    service = TestBed.inject(HeroService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  })

  it('getHeroes() should call http Get method for given route', () => {
    heroes = [{id: 1, name: "Magneto"}];
    service.getHeroes().subscribe(response => {
      expect(response).toEqual(heroes);
    });
  });

});
