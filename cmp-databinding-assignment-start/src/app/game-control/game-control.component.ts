import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  hasStarted = false;
  numberOfSeconds = 0;
  ref = null;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.hasStarted = true;
    this.ref = setInterval(() => {
      this.numberOfSeconds += 1;
      this.gameStarted.emit(this.numberOfSeconds);
    }, 1000);
  }
  
  onStop() {
    this.hasStarted = false;
    clearInterval(this.ref);
  }
}
