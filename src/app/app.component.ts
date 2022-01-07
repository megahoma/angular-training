import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter: number = 0;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.counter++;
  }
  decrease(): void {
    this.counter--;
  }
}
