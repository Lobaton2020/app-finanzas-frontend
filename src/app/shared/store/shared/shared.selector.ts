import { SharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});

export const getNotifyMessage = createSelector(getSharedState, (state) => {
  const isError = state.notifyMessage.isError;
  return [
    state.notifyMessage.show,
    `${isError ? "ERROR: " : ""}${state.notifyMessage.message}`,
  ];
});
