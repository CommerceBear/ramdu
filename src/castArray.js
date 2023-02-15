import { when, of } from 'ramda';

import isNot from './isNot';

/**
 * Forces an argument to be of type Array when is not undefined
 *
 * @function
 * @param {*}
 * @returns {Array|undefined}
 *
 * @example
 * castArray('a'); // ['a']
 * castArray(['a']); // ['a']
 * castArray(undefined); // [undefined]
 */
const castArray = when(isNot(Array), of);

export default castArray;
