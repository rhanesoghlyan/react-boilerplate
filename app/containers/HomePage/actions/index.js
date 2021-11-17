import { CHANGE_USERNAME } from '../constants';

/**
 * change username action
 * @param username
 * @returns {{type: *, username: *}}
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}
