(function(exports) {

	var NewsList = function(NewsItem) {
		this.list = [];
		this.NewsItem = NewsItem;
	};

	NewsList.prototype.addNewsItem = function(title, url) {
		var newsItem = new this.NewsItem(title, url);
		this.list.push(newsItem);
	};

	NewsList.prototype.printHeadlines = function() {

		var headlineHTML = '';

	  for (var i = 0; i < this.list.length ; i++) {
	    var headlineHTML = headlineHTML.concat('<li id="' + (i + 1) + '"><a onclick="getSummary(' + (i+1) + ')">' + this.list[i].title + '</a></li>');
	  }
	  return '<ul>' + headlineHTML + '</ul>';

	};

	exports.NewsList = NewsList;

}(this));
