import {Component} from '@angular/core';
import {Hero} from '../models/hero';
import {HeroStoreService} from '../services/hero-store-service/hero-store.service';

@Component({
  selector: 'app-add-hero-area',
  templateUrl: './add-hero-area.component.html',
  styleUrls: ['./add-hero-area.component.css']
})
export class AddHeroAreaComponent {

  name = '';

  constructor(public heroStore: HeroStoreService) {
  }

  add(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroStore.addHero({name} as Hero);
    this.name = '';
  }

}
