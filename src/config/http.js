
const URL_BASE = 'https://open.youzanyun.com';

const URL_TOKEN = '/auth/token';

const URL_API = '/api/{0}/{1}?access_token={2}';

const URL_AUTH_EXEMPT = '/api/auth_exempt/{0}/{1}';


function getBaseUrl() {
  return URL_BASE;
}

function getUrlToken() {
  return URL_TOKEN;
}

function getUrlAPI(api, version, token) {
  return URL_API.format(api, version, token);
}

function getUrlAPIExempt(api, version) {
  return URL_AUTH_EXEMPT.format(api, version);
}


module.exports = {
  getBaseUrl, getUrlToken, getUrlAPI, getUrlAPIExempt,
};
