/**
 * Language provider selectors
 */

import { createSelector } from 'reselect';

import { initialState } from '../reducer';

const selectLanguage = state => state.language || initialState;

/**
 * Select the language locale
 */
const makeSelectLocale = () =>
  createSelector(
    selectLanguage,
    languageState => languageState.locale,
  );

export { selectLanguage, makeSelectLocale };
