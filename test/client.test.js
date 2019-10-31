/* global it, describe */

const chai = require('chai');
const client = require('../src/client');


describe('test client', () => {
  it('call for empty params', () => {
    chai.expect(() => client.call()).to.throw('api 必传');
  });

  it('call for empty params 1', () => {
    chai.expect(() => client.call({
      api: 'ee',
    })).to.throw('version 必传');
  });

  it('call for without params', () => {
    chai.expect(() => client.call({
      api: 'youzan.shop.get',
      version: '3.0.0',
    })).to.be.an.instanceof(Function);
  });

  it('call for with empty params', () => {
    chai.expect(() => client.call({
      api: 'youzan.shop.get',
      version: '3.0.0',
    })).to.be.an.instanceof(Function);
  });

  it('call for with params', () => {
    chai.expect(() => client.call({
      api: 'youzan.shop.get',
      version: '3.0.0',
      params: {
        id: 'aa',
      },
    })).to.be.an.instanceof(Function);
  });

  it('call for upload files', () => {
    chai.expect(() => client.call({
      api: 'youzan.shop.get',
      version: '3.0.0',
      token: 'ddd',
      host: 'dd',
      params: {},
      files: {
        image: './o.png',
      },
    })).to.be.an.instanceof(Function);
  });

  it('call for rich text', () => {
    chai.expect(() => client.call({
      api: 'youzan.shop.get',
      version: '3.0.0',
      params: {
        id: 'aa',
      },
      config: {
        isRichText: true,
      },
    })).to.be.an.instanceof(Function);
  });
});
