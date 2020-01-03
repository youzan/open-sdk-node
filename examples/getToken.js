
/**
 * 本示例演示自用型应用获取Token
 */

const youzanyun = require('../src/index');

const resp = youzanyun.token.get({
  authorize_type: 'silent',
  grant_id: 110,
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  refresh: true, // 是否获取refresh_token(可通过refresh_token刷新token)
});

resp.then((data) => {
  console.log(data.data);
});
