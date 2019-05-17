const youzanyun = require('../src/index');

const token = 'f59b1a6bb04f4eqweqd1c6af315d';

const resp1 = youzanyun.client.call({
  api: 'youzan.trade.get',
  version: '4.0.0',
  token,
  params: {
    tid: 'E20190509110527067500013',
  },
});
resp1.then((data) => {
  console.log(data);
});
