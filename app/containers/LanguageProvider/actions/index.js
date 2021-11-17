/*
 * LanguageProvider actions
 */

import { CHANGE_LOCALE } from '../constants';

/**
 * change language action
 * @param languageLocale
 * @returns {{type: *, locale: *}}
 */
export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
