var Sub = require('./sub.js');
Sub(); // => hello! browser.

var _ = require('lodash');
var a = _.map([1,2,3,4], (val) => {
  return val * 2
});

console.log(a);
