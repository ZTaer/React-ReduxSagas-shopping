import { createSelector } from 'reselect';

const selectDire = state => state.dire;

export const selectSections = createSelector(
    [selectDire],
    dire => dire.sections,
);