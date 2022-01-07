import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  changeUpdateDate,
  decrease,
  increase,
} from './ducks/actions/CounterAction';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  updateDate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease),
      map(() => changeUpdateDate({ updateDate: Date.now() }))
    )
  );
}
