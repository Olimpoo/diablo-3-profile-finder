import { get } from 'axios';

import store from '../store/index';

const protocol = 'https://';
const host = '.api.blizzard.com/';

// eslint-disable-next-line
/**
 * Returns the specified account profile.
 *
 * @link GET – /d3/profile/{account}
 *
 * @param region {String}
 * @param account {String}
 *
 * @returns {Promise}
 **/
function getApiAccount({ region, account }) {
  const resource = `d3/profile/${account}/`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = 'en_GB';

  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(API_URL, { params });
}

/**
 * Returns a single hero
 * GET – /d3/profile/{account}/hero/{heroId}
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiHero({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = 'en_GB';

  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(API_URL, { params });
}

/**
 * Returns a list of items for the specified hero.
 * GET – /d3/profile/{account}/hero/{heroId}/items
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiDetailedHeroItems({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = 'en_GB';

  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(API_URL, { params });
}

// eslint-disable-next-line
export { getApiAccount, getApiHero, getApiDetailedHeroItems };
