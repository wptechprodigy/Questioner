import {
  expect,
  should
} from 'chai';
import supertest from 'supertest';
// import Meetup from '../server/models/Meetup';

const api = supertest('http://localhost:5000');

describe('Meetup', () => {
  it('should return a 200 response', (done) => {
    api.get('/api/v1/meetups')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});