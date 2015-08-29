# partition-into

> Partition an array into required sets of n numbers, and the remaining values

[![Build Status](https://travis-ci.org/icyflame/partition-into.svg?branch=master)](https://travis-ci.org/icyflame/partition-into)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --save partition-into
```


## Usage

```js
var partitionInto = require('partition-into');

partitionInto([1, 2, 3, 4, 5], 3);
//=> [[1, 2, 3], [4, 5]]

partitionInto([1, 2, 3, 4, 5, 6, 7], 5);
//=> [[1, 2, 3, 4, 5], [6, 7]]

partitionInto([1, 2, 3, 4, 5]);
//=> [ [ ] ]
```


## API

### partitionInto(input_obj, num)

#### input_obj

*Required*  
Type: `Array`

Input 1-dimensional array

#### num

*Required*  
Type: `integer`  
Default: `undefined`

Number of items per partition


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
