import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOption = 0;

  onMenuOptionSelected(menuOptionSelected: number) {
    this.menuOption = menuOptionSelected;
  }
}
