
import app  from '../../src/app';
import assert  from 'assert';
import chai  from 'chai';
import request from 'supertest';

const expect = chai.expect;

describe('dummy test ', function() {

    it('should return OK status', function() {
        assert.equal("ok","ok")
    });

});
describe('Unit testing the api route ', function() {
    it('should return OK status', function() {
      return request(app)
        .get('/api')
        .then(function(response){
            assert.equal(response.status, 200)
            expect(response.text).to.contain('API is working');
        })
    });

});

