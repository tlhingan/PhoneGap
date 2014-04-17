
// When tracking <a> element clicks (click-throughs) in Google Analytics (GA) as a custom event, and when that <a> loads in the same page, the GA needs a moment to process the custom tracking event before allowing a click-through:
function DelayClickthroughForGA(el, e) {
	if(typeof el === 'undefined' || typeof e === 'undefined')
		return;
	if (el.target != '_blank') {
	    e.preventDefault();
	    var url = el.href;
	    setTimeout(function() { location.href = url }, 150);
	}
}


//track header - news ticker - clicks
$(document).delegate('#cocis-news-play', 'click', function(e) {
	ga('send', 'event', 'news ticker clicks', 'click play', '');
});
$(document).delegate('#cocis-news-pause', 'click', function(e) {
	ga('send', 'event', 'news ticker clicks', 'click pause', '');
});
$(document).delegate('#cocis-news-items a', 'click', function(e) {
	// track the name and URL of the news item that was clicked
	var strNewsItemUrl = $(this).attr('href');
	ga('send', 'event', 'news ticker clicks', 'click news item', $(this).text() + ';' + strNewsItemUrl);
	// track the source of the news item that was clicked (ex: calgarycitynews.com)
	var strNewsSource = strNewsItemUrl.split('/')[2];  // get the domain of the news item URL
	ga('send', 'event', 'news ticker clicks', 'click feed source', strNewsSource);
	DelayClickthroughForGA(this, e);
});
$(document).delegate('#cocis-news-view-all', 'click', function(e) {
	ga('send', 'event', 'news ticker clicks', 'click view all news', '');
	DelayClickthroughForGA(this, e);
});
//track header - news ticker - track news items as they become visible to the user
//- this tracks name and URL of news items and also source of news items in the same format that user clicks on new items are tracked - this is done on purpose so we can compare to clicks in Google Analytics
//- this check runs once every 2 seconds and tracks news items as they become visible on a user's screen, and will not track the same item or feed more than once per user session
var arrNewsItems = [];
var arrNewsSources = [];
setInterval(function() {
	var $curNewsItem = $('#cocis-news-items a:visible:last');  // use last() because sometimes we have a news item with two links in it (ex: Calgary City News Blog | News Article Title) where the first link is not the actual news item.
	if($curNewsItem.length === 0)
		return;
	// track news item links
	var strNewsItem = $curNewsItem.attr('href');
	var foundNewsItem = false,
		cntNews = 0;
	for(cntNews = 0; cntNews < arrNewsItems.length; cntNews++) {
		if(arrNewsItems[cntNews] === strNewsItem)
			foundNewsItem = true;
	}
	if(!foundNewsItem) {
		arrNewsItems.push(strNewsItem);
		//This is to track news items as they become visible. The idea behind this was to be able to understand what news items are being pulled in to the news tracker, the frequency of those items, and the new sources. Reports would be able to compare this to the items users are actually clicking on.
		//Note: This has currently been disabled because it was generating too many events.
		//ga('send', 'event', 'news ticker feed', 'news item appeared', $curNewsItem.text() + ';' + strNewsItem);
		
	}
	// track news sources
	var strNewsSource = strNewsItem.split('/')[2];  // get the domain of the news item URL
	var foundNewsSource = false,
		cntSources = 0;
	for(cntSources = 0; cntSources < arrNewsSources.length; cntSources++) {
		if(arrNewsSources[cntSources] === strNewsSource)
			foundNewsSource = true;
	}
	if(!foundNewsSource) {
		arrNewsSources.push(strNewsSource);
		//This is to track news items as they become visible. The idea behind this was to be able to understand what news items are being pulled in to the news tracker, the frequency of those items, and the new sources. Reports would be able to compare this to the items users are actually clicking on.
		//Note: This has currently been disabled because it was generating too many events.
		//ga('send', 'event', 'news ticker feed', 'feed source appeared', strNewsSource);
	}
}, 2000);

//track header - COC logo
$(document).delegate('#cocis-cocLogo', 'click', function(e) {
	ga('send', 'event', 'header', 'click COC logo', 'go to home page: ' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});


//track header - alert messages
$(document).delegate('#alertbanner-container .alertbox a', 'click', function(e) {
	ga('send', 'event', 'alert message', 'click more info link', $(this).text() + ';' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});



//track footer - quick links - link
$(document).delegate('#cocis-floating-footer .cocis-rte-Style-NoMobileDisclaimer', 'click', function(e) {
	ga('send', 'event', 'footer quick links', 'click quick link', $(this).text() + ';' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});
//track footer - quick links - browse by topic
$(document).delegate('#cocis-footer-nav a', 'click', function(e) {
	ga('send', 'event', 'footer quick links', 'click browse by topic', $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});


//track footer - social media links
$(document).delegate('#cocis-facebook', 'click', function(e) { 
	ga('send', 'event', 'footer', 'click social media link', 'facebook icon: ' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});
$(document).delegate('#cocis-twitter', 'click', function(e) { 
	ga('send', 'event', 'footer', 'click social media link', 'twitter icon: ' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});
$(document).delegate('#cocis-youtube', 'click', function(e) { 
	ga('send', 'event', 'footer', 'click social media link', 'youtube icon: ' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});
$(document).delegate('#cocis-linkedIn', 'click', function(e) { 
	ga('send', 'event', 'footer', 'click social media link', 'linkedin icon: ' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});
$(document).delegate('#cocis-flickr', 'click', function(e) {
	ga('send', 'event', 'footer', 'click social media link', 'flickr icon: ' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});
$(document).delegate('#cocis-blogger', 'click', function(e) {
	ga('send', 'event', 'footer', 'click social media link', 'blogger icon: ' + $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});


//track footer - weather
$(document).delegate('.cocis-weather a', 'click', function(e) {
	ga('send', 'event', 'footer', 'click weather link', $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});


//track footer - feedback [+]
$(document).delegate('#cocis-footer-feedback-link a', 'click', function(e) {
	ga('send', 'event', 'footer', 'click feedback link', $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});


//track footer - links
$(document).delegate('#cocis-footer-links .cocis-rte-Style-NoMobileDisclaimer', 'click', function(e) {
	ga('send', 'event', 'footer', 'click link', $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});


//track footer - COC logo
$(document).delegate('#cocis-cityLogo-crest', 'click', function(e) {
	ga('send', 'event', 'footer', 'click COC logo', $(this).attr('href'));
	DelayClickthroughForGA(this, e);
});


/**********************************/
/*  Search results page tracking  */
/**********************************/

//track more and less buttons - search filters
$(document).delegate('.moreLessLists .cocis-moreLink', 'click', function(e) {
	var strFilterSection = $(this).closest('.accordion-group').find('.accordion-heading:first .accordion-toggle:first span:first').text();
	ga('send', 'event', 'search', 'filter see more button', 'filter section: ' + strFilterSection);
});
$(document).delegate('.moreLessLists .cocis-lessLink', 'click', function(e) {
	var strFilterSection = $(this).closest('.accordion-group').find('.accordion-heading:first .accordion-toggle:first span:first').text();
	ga('send', 'event', 'search', 'filter see less button', 'filter section: ' + strFilterSection);
});

//track zero result queries
$(document).ready(function() {
	if($("#cocis-search-no-results").length > 0)
		ga('send', 'event', 'search', 'zero result', $("#cocis-search-no-results-query").text());
});