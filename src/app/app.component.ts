import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { decrease, increase } from './ducks/actions/CounterAction';
import { countSelector } from './ducks/selectors/CounterSelector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  updateDate?: number;

  constructor(private store: Store) {}

  increase(): void {
    this.updateDate = Date.now();
    this.store.dispatch(increase());
  }
  decrease(): void {
    this.updateDate = Date.now();
    this.store.dispatch(decrease());
  }
}
