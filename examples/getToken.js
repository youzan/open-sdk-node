
/**
 * 本示例演示自用型应用获取Token
 */

const youzanyun = require('../lib/index');

const params = new Map();
params.set('grant_id', 110);
params.set('client_id', 'YOUR_CLIENT_ID');
params.set('client_secret', 'YOUR_CLIENT_SECRET');

const tokenPromise = youzanyun.token.get('silent', params);

tokenPromise.then((data) => {
  console.log(data);
});
