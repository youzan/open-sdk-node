

function post(api, version, params, files) {
  return api + version + params + files;
}

module.exports = {
  post,
};
