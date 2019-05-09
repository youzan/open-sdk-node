
function getBaseUrl() {
  return 'https://open.youzanyun.com';
}

function getUrlToken() {
  return '/auth/token';
}

function getUrlAPI(api, version, token) {
  return `/api/${api}/${version}?access_token=${token}`;
}

function getUrlAPIExempt(api, version) {
  return `/api/auth_exempt/${api}/${version}`;
}


module.exports = {
  getBaseUrl, getUrlToken, getUrlAPI, getUrlAPIExempt,
};
