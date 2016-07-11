var server = require("http-server").createServer();
var Browser = require('zombie');
var assert = require('chai').assert;

describe('Home Page', function() {

	beforeEach(function(done) {
		server.listen(3000);
		browser = new Browser ({site: "http://localhost:3000"});
		browser.visit('/', done);
	});

	afterEach(function() {
		server.close(3000);
	});

	it('has a title attribute News Summary', function() {
		assert.equal(browser.text('title'), 'News Summary');
	});

	it('displays news headlines', function() {
		assert.include(browser.text('ul'), 'Test1');
	});

});