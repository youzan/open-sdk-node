
function toObj(map) {
  const obj = {};
  map.forEach((v, k) => { obj[k] = v; });
  return obj;
}

module.exports = {
  toObj,
};
