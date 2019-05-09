"use strict";

function toObj(map) {
  var obj = {};
  if (map.size > 0) {
    map.forEach(function (v, k) {
      obj[k] = v;
    });
  }
  return obj;
}

module.exports = {
  toObj: toObj
};