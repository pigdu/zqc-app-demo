/**
 * 在球场
 * zaiqiuchang.com
 */

import {getApi, postApi} from './';

export function lbsRegeo(location) {
  let {longitude, latitude} = location;
  return getApi('/lbs/regeo', {
    location: `${longitude},${latitude}`,
  });
}