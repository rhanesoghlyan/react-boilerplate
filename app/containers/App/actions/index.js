/*
 * App Actions
 */

import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from '../constants';

/**
 * load repos action
 * @returns {{type: *}}
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * load repos success action
 * action to handle success case of the load repos
 * @param repos
 * @param username
 * @returns {{repos: *, type: *, username: *}}
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * load repos error action
 * action to handle error case of the load repos
 * @param error
 * @returns {{type: *, error: *}}
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
