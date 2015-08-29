/* global it */
'use strict';
var assert = require('assert');
var partitionInto = require('./');

it('should partition arrays well', function () {
  assert.deepEqual(partitionInto([1, 2, 3, 4, 5, 6], 3), [[1, 2, 3], [4, 5, 6]]);
  assert.deepEqual(partitionInto([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]]);
  assert.deepEqual(partitionInto([1, 2, 3, 4, 5, 6], 5), [[1, 2, 3, 4, 5], [6]]);
  assert.deepEqual(partitionInto([1, 2, 3, 4, 5], 5), [[1, 2, 3, 4, 5]]);
  assert.deepEqual(partitionInto([1, 2, 3], 5), [[1, 2, 3]]);
  assert.deepEqual(partitionInto([1, 2, 3]), [[]]);
});
