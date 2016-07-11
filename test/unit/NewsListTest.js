var expect = require('chai').expect;

var NewsList = require('../../app/models/NewsList').NewsList;
var NewsItem = require('../../app/models/NewsItem').NewsItem;

describe('NewsList', function() {

	var newslist;

	beforeEach(function() {
		newsList = new NewsList(NewsItem);
	});

it('can create a new news list of news items', function() {
	expect(newsList).to.be.instanceof(NewsList);
});

it('starts with no news items', function() {
	expect(newsList.list).to.be.empty;
});

it('can add news items to the list', function() {
	newsList.addNewsItem('Example Title', 'www.example.com');
	expect(newsList.list).not.to.be.empty;
});

it('prints the html for the headlines', function() {
	newsList.addNewsItem('Example Title', 'www.example.com');
	expect(newsList.printHeadlines()).to.eq('<ul><li id="1"><a onclick="getSummary(1)">Example Title</a></li></ul>')
});

});