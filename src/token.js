
// 获取Token可选的type类型枚举
const types = ['silent', 'authorization_code', 'refresh_token'];

const _ = require('lodash');
const configHttp = require('./config/http');
const utilHttp = require('./utils/http');

/**
 * 获取Token
 *
 * @param {Object} tokenParam 参数
 *
 * 必要字段: authorize_type client_id client_secret
 *
 * 自用型应用获取Token: authorize_type = silent, 必传 grant_id
 * 工具型应用获取Token: authorize_type = authorization_code, 必传 code redirect_uri
 * 工具型应用刷新Token: authorize_type = refresh_token, 必传 refresh_token
 */
function get(tokenParam) {
  // 参数类型校验
  if (!tokenParam || _.size(tokenParam) < 4) {
    throw new Error('参数异常: 参数缺少必要字段');
  }

  if (!_.has(tokenParam, 'authorize_type') || !types.includes(tokenParam.authorize_type)) {
    throw new Error('参数异常: authorize_type 类型错误');
  }

  if (!_.has(tokenParam, 'client_id') || !_.has(tokenParam, 'client_secret')) {
    throw new Error('参数异常: client_id client_secret 必传');
  }

  // 参数校验
  switch (tokenParam.authorize_type) {
    case 'silent':
      if (!_.has(tokenParam, 'grant_id')) {
        throw new Error('参数异常: grant_id 必传');
      }
      break;
    case 'authorization_code':
      if (!_.has(tokenParam, 'code') || !_.has(tokenParam, 'redirect_uri')) {
        throw new Error('参数异常: code redirect_uri 必传');
      }
      break;
    case 'refresh_token':
      if (!_.has(tokenParam, 'refresh_token')) {
        throw new Error('参数异常: refresh_token 必传');
      }
      break;
    default:
      break;
  }

  let urlPath = configHttp.getUrlToken();
  if (_.has(tokenParam, 'host')) {
    urlPath = tokenParam.host + urlPath;
  }

  return utilHttp.post(urlPath, tokenParam);
}

module.exports = {
  get,
};
