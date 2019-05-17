/* global it, describe */

const chai = require('chai');
const index = require('../src/index');

describe('test token', () => {
  it('get for silent wrong type', () => {
    chai.expect(() => index.token.get('err')).to.throw('参数缺少必要字段');
  });

  it('get for wrong empty params', () => {
    chai.expect(() => index.token.get({
      authorize_type: 'silent',
    })).to.throw('参数缺少必要字段');
  });
  it('get for silent wrong params client_secret', () => {
    const params = {
      aaaaa: 'silent',
      client_id: 'aaa',
      ddd: '11',
      ddda: '11',
    };
    chai.expect(() => index.token.get(params)).to.throw('authorize_type');
  });

  it('get for silent wrong params client_secret', () => {
    const params = {
      authorize_type: 'silent',
      client_id: 'aaa',
      ddd: '11',
      ddda: '11',
    };
    chai.expect(() => index.token.get(params)).to.throw('client_id client_secret 必传');
  });

  it('get for silent wrong params', () => {
    const params = {
      authorize_type: 'silent',
      client_id: 'aaa',
      ddd: '11',
      client_secret: 'bb',
    };
    chai.expect(() => index.token.get(params)).to.throw('grant_id 必传');
  });

  it('get for silent success', () => {
    const params = {
      authorize_type: 'silent',
      client_id: 'aaa',
      client_secret: 'bb',
      grant_id: 110,
    };
    chai.expect(() => index.token.get(params)).to.be.an.instanceof(Function);
  });

  it('get for authorization_code wrong params', () => {
    const params = {
      authorize_type: 'authorization_code',
      client_id: 'aaa',
      code: '11',
      client_secret: 'bb',
    };
    chai.expect(() => index.token.get(params)).to.throw('code redirect_uri 必传');
  });

  it('get for authorization_code success', () => {
    const params = {
      authorize_type: 'authorization_code',
      client_id: 'aaa',
      client_secret: 'bb',
      code: 'aaa',
      redirect_uri: 'http://example.com',
    };
    chai.expect(() => index.token.get(params)).to.be.an.instanceof(Function);
  });

  it('get for refresh_token wrong params', () => {
    const params = {
      authorize_type: 'refresh_token',
      client_id: 'aaa',
      client_secret: 'bb',
      ddd: '11',
    };
    chai.expect(() => index.token.get(params)).to.throw('refresh_token 必传');
  });

  it('get for refresh_token success', () => {
    const params = {
      authorize_type: 'refresh_token',
      client_id: 'aaa',
      client_secret: 'bb',
      refresh_token: 'aaaa',
    };
    chai.expect(() => index.token.get(params)).to.be.an.instanceof(Function);
  });
});
