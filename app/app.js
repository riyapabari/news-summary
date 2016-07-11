var newsList = new NewsList(NewsItem);

newsList.addNewsItem('Test1', 'www.test1.com');

newsList.addNewsItem('Test2', 'www.test2.com');

var updateList = function(){
		document.getElementById('newslist').innerHTML = newsList.printHeadlines();
	};

updateList();

