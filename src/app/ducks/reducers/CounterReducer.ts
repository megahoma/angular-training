import { createReducer, on } from '@ngrx/store';
import { changeUpdateDate, decrease, increase } from '../actions/CounterAction';

export type CounterState = {
  count: number;
  updateDate?: number;
};

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrease, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(changeUpdateDate, (state, action) => ({
    ...state,
    updateDate: action.updateDate,
  }))
);
