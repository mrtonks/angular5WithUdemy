import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textShowed = false;
  clicksArray = [];
  // numberOfClicks = 0;

  onShowText() {
    this.textShowed = !this.textShowed;
    // this.numberOfClicks++;
    // this.clicksArray.push(this.numberOfClicks);
    this.clicksArray.push(new Date());
  }

  getBackgroundColor(clickNumber) {
    return clickNumber > 4 ? 'blue' : 'transparent';
  }
}
