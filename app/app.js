var newsList = new NewsList(NewsItem);

newsList.addNewsItem('Test1', 'www.test1.com');

newsList.addNewsItem('Test2', 'www.test2.com');

var updateList = function(){
	document.getElementById('newslist').innerHTML = newsList.printHeadlines();
};

var ajax = function() {
	$.getJSON('https://content.guardianapis.com/search?api-key=e97b8640-e260-412c-a473-203f1c78756a', function(data) {
		var array = data.response.results;
		var n = array.length;
		for (var i=0; i<n; i++) {
			newsList.addNewsItem(array[i].webTitle, array[i].webUrl);
			updateList();
		}	
	});
};

ajax();


