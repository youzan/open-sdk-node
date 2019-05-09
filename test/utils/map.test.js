/* global it, describe */

const chai = require('chai');
const utilMap = require('../../src/utils/map');

describe('test configHttp', () => {
  it('for toObj', () => {
    chai.expect(utilMap.toObj(new Map())).to.eql({});
  });

  it('for toObj', () => {
    chai.expect(utilMap.toObj((new Map()).set('k', 'v'))).to.eql({ k: 'v' });
  });
});
