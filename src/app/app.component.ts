import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string | undefined;
  title = 'Tour of Heroes';

  search() {
    console.log(this.searchTerm);
  }
}
