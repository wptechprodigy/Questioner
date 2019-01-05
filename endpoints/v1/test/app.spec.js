import { expect } from 'chai';
import app from '../app';

describe('app test', () => {
  describe('app function', () => {
    it('returns a json file', () => {
      const str = app();
      expect(str).to.be.an('object');
    });
  });
});
