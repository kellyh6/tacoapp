var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');

describe('GET /', function(){
	//this is where we write our tests
	it("should return a 200 responce", function(done){
		request(app).get('/').expect(200, done);
	})
});