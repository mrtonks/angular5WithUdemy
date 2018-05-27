import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seconds = [];

  onGameStarted(secondsPassed: number) {
    this.seconds.push(secondsPassed);
  }

  isEvenOrOddNumber(second) {
    return second % 2;
  }
}
