import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { decrease, increase } from './ducks/actions/CounterAction';
import {
  countSelector,
  updateDateSelector,
} from './ducks/selectors/CounterSelector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count$ = this.store.select(countSelector);
  updateDate$ = this.store.select(updateDateSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));

  constructor(private store: Store) {}

  increase(): void {
    this.store.dispatch(increase());
  }
  decrease(): void {
    this.store.dispatch(decrease());
  }
}
