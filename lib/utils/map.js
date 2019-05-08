"use strict";

function toObj(map) {
  var obj = {};
  map.forEach(function (v, k) {
    obj[k] = v;
  });
  return obj;
}

module.exports = {
  toObj: toObj
};