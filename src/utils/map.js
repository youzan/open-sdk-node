
function toObj(map) {
  const obj = {};
  if (map.size > 0) {
    map.forEach((v, k) => {
      obj[k] = v;
    });
  }
  return obj;
}

module.exports = {
  toObj,
};
