import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from '../reducers/CounterReducer';

export const featureSelector = createFeatureSelector<CounterState>('counter');

export const countSelector = createSelector(
  featureSelector,
  (state) => state.count
);
