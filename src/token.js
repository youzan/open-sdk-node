
// 获取Token可选的type类型枚举
const types = ['silent', 'authorization_code', 'refresh_token'];

const configHttp = require('./config/http');
const utilHttp = require('./utils/http');

/**
 * 获取Token
 *
 * type 授权类型
 * type = silent, 自用型应用获取Token
 * type = authorization_code, 工具型应用获取Token
 * type = refresh_token, 工具型应用刷新Token
 *
 * params 授权必传参数 client_id client_secret
 * type = silent, 必传 grant_id
 * type = authorization_code, 必传 code redirect_uri
 * type = refresh_token, 必传 refresh_token
 *
 * @param {String} type 授权类型
 * @param {Map<String, String>} params 参数
 */
function get(type, params = {}) {
  if (!type || !types.includes(type)) {
    throw new Error('参数异常: type类型错误');
  }

  if (params.size < 1) {
    throw new Error('参数异常: params不可为空');
  }

  if (!params.has('client_id') || !params.has('client_secret')) {
    throw new Error('参数异常: client_id client_secret 必传');
  }

  params.set('authorize_type', type);

  // 参数校验
  switch (type) {
    case 'silent':
      if (!params.has('grant_id')) {
        throw new Error('参数异常: grant_id 必传');
      }
      break;
    case 'authorization_code':
      if (!params.has('code') || !params.has('redirect_uri')) {
        throw new Error('参数异常: code redirect_uri 必传');
      }
      break;
    case 'refresh_token':
      if (!params.has('refresh_token')) {
        throw new Error('参数异常: refresh_token 必传');
      }
      params.set('scope', 'scope');
      break;
    default:
      break;
  }

  return utilHttp.post(configHttp.getUrlToken(), params);
}

module.exports = {
  get,
};
