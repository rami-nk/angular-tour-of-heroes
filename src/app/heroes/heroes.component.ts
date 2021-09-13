import {Component} from '@angular/core';
import {Hero} from '../models/hero';
import {HeroStoreService} from '../services/hero-store-service/hero-store.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  constructor(public heroStore: HeroStoreService) {
  }

  delete(hero: Hero): void {
    this.heroStore.deleteHero(hero);
  }
}
