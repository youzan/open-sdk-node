/* global it, describe */

const chai = require('chai');
const client = require('../src/client');

describe('test client', () => {
  it('call for empty params', () => {
    chai.expect(() => client.call()).to.throw('api version 必传');
  });

  it('call for without params', () => {
    chai.expect(() => client.call('youzan.shop.get', '3.0.0')).to.be.an.instanceof(Function);
  });

  it('call for with empty params', () => {
    chai.expect(() => client.call('youzan.shop.get', '3.0.0', {})).to.be.an.instanceof(Function);
  });

  it('call for with params', () => {
    chai.expect(() => client.call('youzan.shop.get', '3.0.0', { id: 'aa' })).to.be.an.instanceof(Function);
  });

  it('call for upload files', () => {
    chai.expect(() => client.call('youzan.shop.get', '3.0.0', {}, { image: './o.png' }))
      .to.be.an.instanceof(Function);
  });
});
