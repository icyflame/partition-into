'use strict';
module.exports = function (object, num) {
  if (!num) {
    return [[]];
  }
  if (object.length <= num) {
    return [object];
  }
  var num_rows = parseInt(object.length / num, 10);
  var grouped_obj = [];
  for (var i = 0; i < num_rows; i++) {
    var this_row = [];
    for (var j = 0; j < num; j++) {
      this_row.push(object[i * num + j]);
    }
    grouped_obj.push(this_row);
  }
  var last_row = [];
  for (var k = num_rows * num; k < object.length; k++) {
    last_row.push(object[k]);
  }
  last_row.length > 0 ? grouped_obj.push(last_row) : false;
  return grouped_obj;
};
