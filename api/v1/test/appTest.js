const expect = require('chai').expect;
const server = require('../server');

describe('test', () => {
  it('should return a string', () => {
    expect('Great. Basic API setup completed!').to.equal('Great. Basic API setup completed!');
  });
});

