import {Component} from '@angular/core';
import {HeroStoreService} from '../services/hero-store-service/hero-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public heroStore: HeroStoreService) {
  }

}
