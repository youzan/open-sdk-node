const youzanyun = require('../lib/index');

const token = 'f59b1a6bb0asdasq613d1c6af315d';

const resp1 = youzanyun.client.call('youzan.shop.get', '3.0.0', token);
resp1.then((data) => {
  console.log(data);
});
