import { createAction, props } from '@ngrx/store';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');

export const changeUpdateDate = createAction(
  '[COUNTER] change-update-Date',
  props<{ updateDate: number }>()
);
