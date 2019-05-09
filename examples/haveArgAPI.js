const youzanyun = require('../lib/index');

const token = 'f59b1a6bb04f4eqweqd1c6af315d';

const params = new Map();
params.set('tid', 'E20190509110527067500013');

const resp1 = youzanyun.client.call('youzan.trade.get', '4.0.0', token, params);
resp1.then((data) => {
  console.log(data);
});
