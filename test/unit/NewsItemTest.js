var expect = require('chai').expect;
var assert = require('chai').assert;


var NewsItem = require('../../app/models/NewsItem').NewsItem;

describe('NewsItem', function() {

	var newsItem;

	beforeEach(function() {
		newsItem = new NewsItem('Example Title', 'www.example.com')
	});

	it('can create a new news item', function() {
		expect(newsItem).to.be.instanceOf(NewsItem);
	});

	it('has title Example Title', function() {
		assert.equal(newsItem.title, 'Example Title');
	});

	it('has url www.example.com', function() {
		assert.equal(newsItem.url, 'www.example.com');
	});

});