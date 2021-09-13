import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Hero} from '../models/hero';
import {HeroService} from '../services/hero-service/hero.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent implements OnInit {

  searchTerms = new Subject<string>();
  heroes$!: Observable<Hero[]>;

  constructor(public heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchForHero(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
