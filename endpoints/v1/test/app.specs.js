import { describe } from 'mocha';
import { expect } from 'chai';
import sayHello from '../app';

describe('app test', () => {
  describe('sayHello function', () => {
    it('returns Hello Andelans!', () => {
      const str = sayHello();
      expect(str).to.equal('Hello Andelans!');
    })
  })
})
