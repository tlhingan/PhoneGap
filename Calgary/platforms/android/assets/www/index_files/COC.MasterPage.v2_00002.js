/* enable: test new search frontend via redirect */
/* NOTE: Not for production use. Please replace existing cocis-frontend and remove test code on go live date */
/*$(function() {
	//console.log(document.getElementById('cocis-search-submit'));
	document.getElementById('cocis-search-submit').removeAttribute("onclick");
	
	document.getElementById('cocis-search-submit').onclick = function () {
		var searchString = $("#ctl00_PlaceHolderSearchArea_ctl00_txtSearch").val();
		var testRedirect = "/_layouts/CoCIS/GSASearchResults.aspx?getfields=*&output=xml_no_dtd&ud=1&oe=UTF-8&ie=UTF-8&proxystylesheet=CoC_frontend_new_31Oct2013&client=CoC_frontend_new_31Oct2013&entsp=a__all_policy&searchType=all&num=10&ulang=en&access=p&sort=date:D:L:d1&entqr=3&entqrm=0";
		
		SubmitSearchRedirect( testRedirect + "&q=" + searchString );
	};
	
	if ( window.location.href.indexOf('?k=') != -1 ) {
		var newRedirect = window.location.href.split('?k=')[0];
		window.location.href = newRedirect;
	};
});*/

/* Disable ads on search results page to optimize load times */
/* NOTE: do not have access to the page layout to control this properly */

if (typeof spdata !== 'undefined') {
	if ( spdata.FileName.indexOf('GSASearchresults.aspx') !== -1 ) {
		site.ads = 0;
	}
}

/* @ document ready, if user is in Prod Authoring mode and viewing or editing a Page then override scrolling for body tag */
$(document).ready(function() {
	if( window.location.host.indexOf('spprd-authoring.calgary.ca:47443') !== -1 && window.location.pathname.split('/')[1].toLowerCase() === 'pages' )
	{
		$('body').css('overflow','hidden !important');
		//console.log('test');
	} 
});

/* Calgary.ca v2.0 hack */
function qs(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}
try {
//	if(window.location.host === 'calgary.ca' || window.location.host === 'www.calgary.ca') {
		var qsHack = qs('hack');  // search for querystring param, "hack"
		if(qsHack === "1") {
			var site = site || {};
			site.mobile = site.mobile || 'false';  // detect if user is on mobile master page

			if(site.mobile === 'true') {
				var qsMobile = qs('mobile') || "";
				if(qsMobile === "1") {
					// when user is taken to mobile page for the first time, querystring params: "MobilePreview=1&redirect=?&mobile=1" are appended to the url
					// "mobile" querystring parameters need to be removed and page needs to be reloaded before we can properly kick user out to full-site view
					var strUrl = window.location.href;
					strUrl = strUrl.replace('mobile=1&','');
					strUrl = strUrl.replace('mobile=1','');
					strUrl = strUrl.replace('redirect=?&','');
					strUrl = strUrl.replace('redirect=?','');
					strUrl = strUrl.replace('MobilePreview=1&','');
					strUrl = strUrl.replace('MobilePreview=1','');
					strUrl = (strUrl.substr(strUrl.length - 1, 1) === '&') ? strUrl.substr(0,strUrl.length - 1) : strUrl;  // also remove any remaining "&" at the end of the url
					window.location.href = strUrl;  // reload same page without "mobile" querystring parameters
				} else {
					window.location.href = '/_layouts/cocis/mobile/ViewPreferenceRedirect.aspx';  // kick user out to full-site view
				}
			} else {
				// inject Javascript and CSS that will force the full-site view to be responsive.
				$(document).ready(function() {
					// inject code to affect calgary.ca v2.0 on Production or inject code to affect calgary.ca v2.5 on Test
					if(window.location.host === 'calgary.ca' || window.location.host === 'www.calgary.ca' || window.location.host === 'spprd-authoring.calgary.ca:47443')
						$.getScript('/Scripts/common/responsive-calgaryca/test/responsive.calgaryca.injection.js');
					if(window.location.host === 'wwwsptest.calgary.ca' || window.location.host === 'sptest-authoring.calgary.ca')
						$.getScript('/Scripts/common/responsive-calgaryca/test/responsive.calgaryca.2.5.injection.js');
				});
			}
		}
//	}
} catch(e) {}


/* Google Analytics - Only track if this is the live website */
if(window.location.host === 'calgary.ca' || window.location.host === 'www.calgary.ca') {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	ga('create', 'UA-42222905-1', 'calgary.ca');
	ga('send', 'pageview');
} else {
	// create dummy ga() function in global scope to prevent 'ga is undefined' script errors when in UAT or Prod-Authoring
	document.ga = function() { return; };
	window.ga = function() { return; };
}


var COC = COC || {};
COC.Analytics = ( function($) {
	
	var Track = function( config ) {
		dcsAction(config.webtrends_profile, "event:" + config.event_name, config.comment);
		ga("send", "event", config.ga_event, config.event_name, config.comment);
	};

	return {
		Track: Track
	};
})(jQuery);


/* alert_banner.js */
/*
	COC Alertbox 
	Revealing Module Pattern - Self-executing anonymous Javascript function that exposes public members or methods like an Object Oriented class
*/

var COC = COC || {};
COC.Alertbox = (function($){
	
	/*** MEMBERS ***/
		
	var createSoapEnv = function(strListName) {
		var soapEnv =
		"<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/'> \
			<soapenv:Body> \
				 <GetListItems xmlns='http://schemas.microsoft.com/sharepoint/soap/'> \
					<listName>" + strListName + "</listName> \
					<viewFields> \
						<ViewFields> \
							<FieldRef Name='ows_Title' /> \
							<FieldRef Name='AlertMessage' /> \
							<FieldRef Name='AlertMoreInfoLink' /> \
							<FieldRef Name='ows_AlertType' /> \
							<FieldRef Name='AlertHtml' /> \
							<FieldRef Name='CocisIsPublic' /> \
							<FieldRef Name='Is_x0020_Public' /> \
							<FieldRef Name='Page_x0020_Path' /> \
					   </ViewFields> \
					</viewFields> \
					<rowLimit>200</rowLimit> \
					<queryOptions> \
						<QueryOptions><ViewAttributes Scope='Recursive' /></QueryOptions> \
					</queryOptions> \
				</GetListItems> \
			</soapenv:Body> \
		</soapenv:Envelope>";

		return soapEnv;
	}
	
	/*** METHODS ***/
	
	/* public 	init
	 * return	void
	 **/
	var init = function() {

		// get global alert(s)
		$.ajax({
			url: '/_vti_bin/lists.asmx',
			type: 'post',
			dataType: 'xml',
			data: createSoapEnv('AlertBanner'),
			complete: GetAlertboxListItem,
			contentType: 'text/xml; charset="utf-8"'
		});

		// get BU-level alert(s)	
		var strCurBU = '/' + window.location.pathname.split('/')[1].toLowerCase();
		if(strCurBU === '/' || strCurBU === '/pages' || strCurBU === '/sitepages' || strCurBU === '/_layouts')
			return;
		
		// This code is important for Business Unit-level alerts. In the case where AlertBanner List is not found in a BU sub-site, the try/catch prevents this script from interfering with anything else.
		try {	
			$.ajax({
				url: strCurBU + '/_vti_bin/lists.asmx',
				type: 'post',
				dataType: 'xml',
				data: createSoapEnv('AlertBanner'),
				complete: GetAlertboxListItem,
				contentType: 'text/xml; charset="utf-8"'
			});
		} catch(ex) {
			// not all subsites have an AlertBanner List and this catches a 404 error
		}
	};
	
	var GetAlertboxListItem = function(xData, status) {
		var alertboxData = xData.responseXML || xData.responseText || '';
		$(alertboxData).find('z\\:row, row').each(CreateAlertboxHTML);
	};

	var CreateAlertboxHTML = function() {
		var $this = $(this);

		// don't display this alert if it is not set to "is public" - this is so we can test alerts internally on Prod-Authoring before making them live to the public
		var isPublic = $this.attr('ows_CocisIsPublic') || $this.attr('ows_Is_x0020_Public') || "1";  // Depends whether the Sharepoint column: Is Public was used or if a new column was created.. was running in to issues when a new column was created from scratch with the "Is Public" name
		isPublic = (isPublic == "1") ? true : false;
		if(!isPublic && (window.location.host.toLowerCase() === 'calgary.ca' || window.location.host.toLowerCase() === 'www.calgary.ca'))
			return;	
		
		var alertTitle = $this.attr('ows_Title');
		var alertMessage = $this.attr('ows_AlertMessage') || "";
		var alertMoreInfoLink = $this.attr('ows_AlertMoreInfoLink') || "";
		var alertLink = "";
		var alertLinkCaption = "";
		if(alertMoreInfoLink !== "") {
			alertLink = alertMoreInfoLink.slice(0, $this.attr('ows_AlertMoreInfoLink').indexOf(',')) || "";
			alertLinkCaption = alertMoreInfoLink.slice($this.attr('ows_AlertMoreInfoLink').indexOf(',') + 1) || "";
		}
		var alertType = $this.attr('ows_AlertType');
		var alertHtml = $this.attr('ows_AlertHtml') || "";
		
		// don't display this alert if a Page Path was specified and page does not match
		var pagePath = $this.attr('ows_Page_x0020_Path') || "";
		if(pagePath !== '' && window.location.pathname.toLowerCase().search(pagePath.toLowerCase()) < 0)
			return;
				
		// Max of one of each alert type allowed on the page at one time
		if (CheckIfAlertTypeUsedAlready(alertType)) 
			return;
		
		var htmlNewAlertBox = '<div class="alertbox ' + alertType + '"><div class="alertbanner-box"><div class="alertbanner-box-contents"><h2>' + alertTitle + '</h2>';
		if(alertMessage !== "")
			htmlNewAlertBox += '<p>' + alertMessage + '</p>';
		if(alertHtml !== "")
			htmlNewAlertBox += htmlDecode(alertHtml);
		if(alertLink !== "" && alertLinkCaption != "")
			htmlNewAlertBox += '<p><a target="_blank" href="' + alertLink + '">' + alertLinkCaption + '</a></p>';
		htmlNewAlertBox += '</div></div></div>';
		
		AddAlertboxToPage($(htmlNewAlertBox), alertType);
	};
	
	function htmlDecode(value){
	  return $('<div/>').html(value).text();
	}
	
	var arrAlertboxesAddedToPage = [];
	var CheckIfAlertTypeUsedAlready = function(alertType) {
		var i;
		for(i = 0; i < arrAlertboxesAddedToPage.length; i++) {
			if(arrAlertboxesAddedToPage[i] === alertType)
				return true;
		}
		return false;
	};

	/* This script is designed to add an alert to the home page, or other pages (calgary map page omitted), and also to the mobile site pages
	   It also checks which type of alert is being added, ensures only one of each type is added and that it is added in this order: "critical, warning, amber" where a "critical" alert will appear first and at the top of the page.
	   The "amber" alert is a special alert type set up on the CPS sub-site. Please ensure that any changes to this script are thoroughly tested on calgary.ca as well as on the CPS sub-site, with all 3 alert types active. */
	var AddAlertboxToPage = function($newAlertBox, alertType) {
		// store reference to the alertbox that is going to be added, so we can check what has been added later on, since a lot of the work from now on depends on "DOM ready"
		arrAlertboxesAddedToPage.push(alertType);
		
		// Do not add the alertbox HTML until DOM is ready
		$(document).ready(function() {

			// prevent Business Unit level alerts from appearing if any corporate-wide alert(s) visible
			if(alertType !== 'warning' && alertType !== 'critical' && (CheckIfAlertTypeUsedAlready('warning') || CheckIfAlertTypeUsedAlready('critical'))) {
				return;
			} else {			
				// a second check to prevent Business Unit level alerts from appearing if any corporate-wide alert(s) visible
				if(alertType === 'warning' || alertType === 'critical') {
					// hide any Business Unit level alerts that may have appeared prior to corporate-wide alert(s) appearing.
					$('.alertbox').not('.warning').not('.critical').hide();					
				}
			}
		
			var $alertContainer;
			
			// Do not add alerts to calgary map page - map code breaks when page content is pushes down
			if (window.location.pathname === '/_layouts/cocis/calgarymap/calgarymap.aspx') {
				return;
			}
			// Set alert container for mobile pages
			if (typeof(initMobileForm) !== 'undefined') {
				// check if container exists, because this AlertBanner script is trigged twice on the CPS sub-site so container may have already been created in first run
				if($('#alertbanner-container').length === 0) {
					// Add container immediately after "cocis-header"
					$('#cocis-header').before('<div id="alertbanner-container"></div>'); // insert alertbanner-container in to mobile site	
				}
				$alertContainer = $('#alertbanner-container');
			}
			/*
			// Set alert container for full-site main page
			if (window.location.pathname === '/SitePages/cocis/default.aspx'){
				if(typeof $alertContainer === 'undefined') {  // Note: this is for full-site main page only, so do not apply css changes if this main page is being viewed on mobile
					$alertContainer = $('#cocis-search-box');
					var $existingAlertbox = $alertContainer.find('.alertbox').first();
					if($existingAlertbox.length > 0)
						$existingAlertbox.css('top', '-137px');  // re-position any existing alertbox higher up
				}
			}
			*/
			// Set alert container for full-site pages
			if(typeof $alertContainer === 'undefined') {
				$alertContainer = $('#alertbanner-container');  // will target an existing container if it was already created
				if($('#alertbanner-container').length === 0) {
					// Check if main page 
					if (window.location.pathname === '/SitePages/cocis/default.aspx') {
						// Is main page - add container within start of absolute-positioned "cocis-search-box"
						$(/*'#cocis-search-box'*/'#s4-bodyContainer').prepend('<div id="alertbanner-container"></div>');
					} else {
						// Check if search page
						if($('#cocis-main-results').length > 0) {
							// Is search page - add container within start of "cocis-main-results"
							$('#cocis-main-results').prepend('<div id="alertbanner-container"></div>');
						} else {
							// Not search page - CPS sub-site and regular site master pages use a slightly different structure within the maincontent area
							if($('.cocis-maincontent-area').length > 0) {
								// Not search page - add container within start of "cocis-maincontent-area" (special <div> found in CPS sub-site master page)
								$('.cocis-maincontent-area').prepend('<div id="alertbanner-container"></div>');
							} else {
								// Not search page - add container within start of "cocis-maincontent" (main <div> of regular master page)
								$('#s4-bodyContainer').prepend('<div id="alertbanner-container"></div>');
							}
						}
					}
					$alertContainer = $('#alertbanner-container');  // will target the new container just created
					
					//console.log("alertbox: apply animation/easing...");
					if ( !( $('#ctl00_Html1').hasClass('lt-ie10') ) ) { // apply advanced animations on non-IE browsers only
					// Alert animation/easing... 
						// for alertbox:
						$("#alertbanner-container").slideUp(1).animate(600, 'easeOutBack', function () { 
							// for alertbox text:
							$("#alertbanner-container h2, #alertbanner-container p").fadeOut(1).animate(500, 'easeOutBack').fadeIn(1000);
						}).slideDown(700);
					} else if ( !( $('#ctl00_Html1').hasClass('lt-ie8') ) ) { // process animations for advanced IE
						$("#alertbanner-container").hide();
						$("#alertbanner-container").fadeIn(2000);
					} else { // simple banners for older IE
						$("#alertbanner-container").css('display','block');
					};
				}
			}
				
			// Alert placement
			var numAlerts = $alertContainer.find('.alertbox').length;
			if(numAlerts === 0) {
				$alertContainer.prepend($newAlertBox);
			} else {
				// at least one alert already exists, so make sure is displayed in this order: 'critical', then 'warning', then 'amber' alert
				if($newAlertBox.hasClass('critical')) {
					$alertContainer.prepend($newAlertBox);  // position first (appear before potential 'warning' or 'amber' alerts)
				} else {
					if($newAlertBox.hasClass('warning')) {
						if($alertContainer.find('.alertbox').first().hasClass('critical')) {
							$alertContainer.find('.alertbox').first().after($newAlertBox); // position after existing 'critical' alert
						} else {
							$alertContainer.prepend($newAlertBox);  // position first (appear before potential 'amber' alert)
						}
					} else {
						//if($newAlertBox.hasClass('amber')) {  // commented this out because now there are more than just "amber" alerts; position any business unit's alert at the bottom
							$alertContainer.append($newAlertBox);  // position last (appear after potential 'critical' or 'warning' alerts)
						//}
					}
				}
			}			
		});
	};
	
	return {
		init: init
	};
})(jQuery);

// Immediately execute the public "init" function
COC.Alertbox.init();


/* YouTube fix for documentMode < 8 (IE8, IE9 compatibility modes and IE7) */
$(document).ready(function() {
	if(document.documentMode && document.documentMode < 8) {
		$.each($('iframe'), function( key, value ) {
			var src=$(value).attr("src");
			var width = $(value).attr("width");
			var height = $(value).attr("height");
			var check = src.indexOf("youtube");
				
			if (check!=-1) {
				var check2=src.indexOf("?");
				var id=src.substr(0,check2).replace("http://www.youtube.com/embed/","");
				console.log(src);
				$(value).before('<object width="' + width + '" height="' + height + '"><param name="movie" value="http://www.youtube.com/v/'+id+'"/><embed height="' + height + '" src="http://www.youtube.com/v/'+id+'" type="application/x-shockwave-flash" width="' + width + '"></embed></object>');
				$(value).remove();
			}
		});
	}
});
  
/* Fix JavaScript error that sometimes prevents further script from executing: */

	var searchBox = searchBox || $('');  // searchBox is sometimes undefined once reached in outside GSASearchResults.aspx. It is supposed to reference a jQuery-selected-element and this ensures it is always defined.

/*
var isEditingPage = false;
if(typeof MSOWebPartPageFormName !== 'undefined') {
	var SPDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value || "0";
	isEditingPage = (SPDesignMode === "1") ? true : false;
}*/
var site = site || {};  // avoid javascript error
site.mode = site.mode || '';  // avoid javascript error
if(site.mode === 'edit') {

	/* Sharepoint fix for Javascript compatibility issues in IE9+ where Rich Textbox is not editable and cannot save in SharePoint "Edit Mode" */
	/* Basically, what is being fixed is changing any reference to legacy Javascript: document.frames() to: document.frames[] - occurences of ".frames()" can be found by opening Developer Tools in IE9+ and searching all scripts for ".frames(" */
		ExecuteOrDelayUntilScriptLoaded(function () {
			document.write('<script type="text/javascript">function RTE_GetEditorIFrame(b){ULSopi:;var c=null,a=document;if(null!=a.frames&&a.frames.length==0&&a.parentWindow.parent!=null)a=a.parentWindow.parent.document;if(null!=a.frames&&a.frames.length>0){var d=a.getElementById(RTE_GetEditorIFrameID(b));if(d!=null)c=a.frames[RTE_GetEditorIFrameID(b)]}return c} function RTE_DD_GetMenuFrame(){ULSopi:;var a=null,b=RTE_DD_GetMenuElement();if(null!=b)if(document.frames.length>0)a=document.frames[g_strRTETextEditorPullDownMenuID];else if(document.parentWindow!=null&&document.parentWindow.frames!=null)a=document.parentWindow.parent.document.frames[g_strRTETextEditorPullDownMenuID];if(null==a)if(g_fRTEFirstCallToGetMenu){g_fRTEFirstCallToGetMenu=false;return null}return a}</script>');
		}, "form.js");	
		ExecuteOrDelayUntilScriptLoaded(function () {
			document.write('<script type="text/javascript">function OnIframeLoadFinish(){ULSvmd:;if(this.Picker!=null&&this.Picker.readyState!=null&&this.Picker.readyState=="complete"){document.body.scrollLeft=g_scrollLeft;document.body.scrollTop=g_scrollTop;this.Picker.style.display="block";if(document.frames)document.frames[this.Picker.id].focus();else this.Picker.focus()}}</script>');
		}, "datepicker.js");
		
	
	/* SharePoint "Edit Mode" Adjustments: */
	
		/* Reposition Web Part Properties panel and make it draggable */
		$(document).ready(function (e) {
			// move web part console
			if($('.ms-ToolPaneOuter').size() > 0) {
			   // shrink the add column
			   $('.ms-ToolPaneOuter').parent().width('0px');
			   // calc a good max height
			   tpHeight = parseInt($(window).height()) - 300;
			   $('.ms-ToolPaneBody').css('max-height',tpHeight+'px');
			   // enable dragging of the panel, added handler to prevent scroll drag
			   $(".ms-ToolPaneOuter").draggable({handle: '#MSOTlPn_ToolPaneCaption'});
			} 
		});
}

/* MasterPage adjustments for special cases (usually to meet unique client needs): */

	// UEP > Waste and Recycling Services > What Goes Where tool customizations
	// - Check if we are in the UEP/WRS subsite and inject CSS and JS files required to override the theme and structure.
	if(location.href.match(new RegExp('/UEP\/WRS\/_layouts\/CoCIS\/GSASearchResults.aspx', 'i'))) {  // case-insensitive search for "/UEP/WRS/" + Search Results page substring in url
		if(location.href.match(new RegExp('/UEP\/WRS\/Pages\/What-goes-where', 'i'))) {  // case-insensitive search for "/UEP/WRS/" + What Goes Where folder substring in url

	        // inject css file in the DOM head
	        var fileref=document.createElement("link");
			fileref.setAttribute("rel", "stylesheet");
			fileref.setAttribute("type", "text/css");
			fileref.setAttribute("href", "/UEP/WRS/Scripts/WGW/SubSearch/css/WGWSearchResults.css");
			if (typeof fileref != "undefined") {
				document.getElementsByTagName("head")[0].appendChild(fileref);
			}
			// inject js file in the DOM head - note: this .js file depends on jquery
			var fileref=document.createElement("script");
			fileref.setAttribute("type", "text/javascript");
			fileref.setAttribute("src", "/UEP/WRS/Scripts/WGW/SubSearch/js/WGWSearchResults.js");
			if (typeof fileref != "undefined") {
				document.getElementsByTagName("head")[0].appendChild(fileref);
			}
		}
	}
		
	// Calgary Police Services icon next to search results that go to the CPS sub-site
	// - Check each link in search results for "/cps/" (case in-sensitive) present in string
	$(document).ready(function() {
		// full-site view
		$('#cocis-maincontent .cocis-searchResult').each(function() {
			var $searchResult = $(this);
			var $link = $searchResult.find('a').first();
			var strUrl = $link.attr('href').toLowerCase();
			if(strUrl.indexOf('/cps/') >= 0 || strUrl.indexOf('%2fcps%2f') >= 0) {
				// insert a "cps" icon before this search result title
				var $h3 = $searchResult.find('h3').first();
				$h3.css('position', 'relative');
				$h3.css('padding-left', '33px');
				$h3.prepend('<img src="/Style%20Library/cocis/images/search-icons/icon_cpsLink.png" style="position:absolute;top:6px;left:-4px;width:30px;height:30px;" alt="" title="" />');															
			}
		});
		// mobile view
		$('#cocis-content .cocis-searchResult').each(function() {
			var $searchResult = $(this);
			var $link = $searchResult.find('a').first();
			var strUrl = $link.attr('href').toLowerCase();
			if(strUrl.indexOf('/cps/') >= 0 || strUrl.indexOf('%2fcps%2f') >= 0) {
				// insert a "cps" icon before this search result title
				var $h3 = $searchResult.find('h3').first();
				$h3.css('position', 'relative');
				$h3.css('padding-left', '30px');
				$h3.prepend('<img src="/Style%20Library/cocis/images/search-icons/icon_cpsLink_s.png" style="position:absolute;top:-2px;left:-2px;width:25px;height:25px;" alt="" title="" />');
			}
		});
	});

/* Search overrides */

/* temp fix search button onclick attr */
$(document).ready(function() {
	
//unbind Cocis keydown handler... its broken...
	$('#ct100_PlaceHolderSearchArea_ct100_txtSearch').keydown( function () {} );	
});           

/* v2.5 floating elements */

	var _checkFloatTimeout;
    $(document).ready(function() {
    		SetUpFloatingEvent();	
  	});
    
    //var checkFloat = function() {
    function checkFloat() {
    /* v2.5 floating checker */
    	
    	// FLOATING HEADER / FOOTER CURRENTLY DISABLED FOR MOBILE
    	if($('#cocis-maincontent').length === 0)
    		return;
    		
    	//console.log( $(document).scrollTop() /*+ $(window).height()*/ );
    	if ( !$('body').hasClass('cocis-homepage') && !$('body').hasClass('cocis-mapping') ) //page exceptions list - header
    	{
	    	if( ( $(document).scrollTop() /*+ $(window).height()*/ ) > ( $('#cocis-news').height() + $('#alertbanner-container').height() ) 
		    	&& ( !$('body').hasClass('cocis-no-searchbar') 
		   		) ) {
	   	    	$('#cocis-header').css('position','fixed');
	   	    	$('#cocis-header').css('top','0px');
		    } else {
		    	//$('#cocis-header').addClass('is-fixed');
		    	$('#cocis-header').css('position','absolute');
		    	
		    	var newsHeight = $('#cocis-news').height();
		    	$('#cocis-header').css('top', newsHeight + 'px');
		    }
	
	    }
	    
     	/* v2.5 floating footer checker */
	    if( window.location.host == "calgary.ca" || window.location.host == "www.calgary.ca" || window.location.host == "wwwsptest.calgary.ca" ) {
		    if( !$('body').hasClass('cocis-searchresultpage') ) //page exceptions list - footer
		    {
		    	var mobileheight = window.innerHeight ? window.innerHeight : $(window).height();
		    	
		    	var targetheight;	
				if( !$('#ctl00_Html1').hasClass('ie') ) {
					targetheight = $(document).height() - $('footer').height();
				} else {
					targetheight = $(document).height() - $('footer').height();// + 1;// + $('#cocis-floating-footerWrapper').height();
				}	  
				 							
				if( ( $(document).scrollTop() + mobileheight < targetheight ) && ( !$('body').hasClass('cocis-no-searchbar') ) && !$('body').hasClass('cocis-mapping') ) {
			    	$('#cocis-floating-footerWrapper').removeClass('is-fixed');
			    	$('#cocis-wrapper').css('margin-bottom','36px');
					//$('.cocis-socialNetworks:first').css('padding-top','18px');
			    } else {
			    	$('#cocis-floating-footerWrapper').addClass('is-fixed');
			    	$('#cocis-wrapper').css('margin-bottom','0px');
			    	//$('.cocis-socialNetworks:first').css('padding-top','0px');
			    }
			} else {
				// hide footer...
				$('#cocis-floating-footerWrapper').css('display','none');
			};
		}
    };
    
    function SetUpFloatingEvent() {  // :Void
	    $(window).bind("orientationchange resize pageshow", checkFloat);
	    clearTimeout(_checkFloatTimeout);
	    //_checkFloatTimeout = setTimeout("checkFloat()", 100);
	    setInterval(checkFloat, 300);
    }

/* Google Translate - Note: Better to load this after other assets have finished loading. Do not load if user is editing a Sharepoint page */

	var initGoogleTranslate = function() {
		if(site.mode === 'edit')
			return;
		// Do not add Google Translate to calgary map page - map code breaks when page content is pushed down
		if (window.location.pathname === '/_layouts/cocis/calgarymap/calgarymap.aspx') {
			$('#cocis-translate').remove();
			return;
		}	
		// inject Google Translate js file in the DOM head, and run "googleTranslateElementInit()" on completion callback
		var fileref=document.createElement("script");
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
		if (typeof fileref != "undefined") {
			document.getElementsByTagName("head")[0].appendChild(fileref);
		}
	};
	
	/* note: this function below must have global scope */
	function googleTranslateElementInit() {
		$(document).ready(function() {
			// Do not initialize Google Translate if container element cannot be found
			if($('#google_translate_element').length === 0)
				return;
			// Do not initialize Google Translate if user is on true IE7/8 (true meaning that IE9+ running in IE8 mode is okay)
			if($('html').hasClass('lt-ie9'))
				return;			
			// Do not initialize Google Translate if this is the CPS sub-site
			if(location.href.match(new RegExp('/CPS\/', 'i')))
				return;
				
			// TEMPORARY: Do not initialize Google Translate if this is the calgary.ca landing page
			if(window.location.pathname === "/SitePages/cocis/default.aspx")
				return;
				
			// If Search Results page then move google translate container
			if (typeof spdata !== 'undefined') {
				if (spdata.FileName.toLowerCase().indexOf('gsasearchresults.aspx') !== -1) {
					if ($('#cocis-main-results-v2').length > 0) {
						$('#cocis-main-results-v2').prepend($('#google_translate_element'));
					}
				}
			}
			
			// Initialize Google Translate - if live website then also track use of Google Translate in Google Analytics
			if(window.location.host === 'calgary.ca' || window.location.host === 'www.calgary.ca')
				new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, gaTrack: true, gaId: 'UA-42222905-1'}, 'google_translate_element');
			else
				new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
		});
	}
	/* remove translate functionality for v2.5 release */
	initGoogleTranslate();
	
	/** Track history via sessionStorage **/
	
		$(function() {
			if ( Modernizr.sessionstorage ) 
            {
       	        //get paired of user history strings vis local storage
	            //cocUrlString = $.parseJSON(window.sessionStorage.getItem('cocUrlString'));
	            cocUrlString = JSON.parse(window.sessionStorage.getItem('cocUrlString'));
		 	
	            ( cocUrlString == null ) ? cocUrlString =  new Array() : 0;
		
	            //trim links beyond 5
	            ( cocUrlString.length > 5 ) ? cocUrlString = cocUrlString.splice(0, 5) : 0;
					
					
	            var doesExist = -1;
		
	            //prevent storing multiple instances of same page in our browsing session history, unless this is the search results page
	            if (typeof spdata !== 'undefined') {
		            if(spdata.PathName !== "/_layouts/CoCIS/GSASearchResults.aspx" && spdata.PathName !== "/cps/_layouts/CoCIS/GSASearchResults.aspx") {
				        $.each(cocUrlString, function (index, value) {
				        	//console.log(value.path + " " + spdata.PathName);
				          	( ( value.path==spdata.PathName ) ) ? doesExist = 1: 0;
				        });
					}		  
				  
		            if ( ( doesExist == -1 ) && ( spdata.PathName.indexOf("/SitePages/cocis/navigation/navigation.aspx" ) == -1 ) && ( spdata.PathName.indexOf("/_layouts/CoCIS/GSASearchresults.aspx" ) == -1 ) ) {
		                //store this page
		                var pageObj = {};
			
	  	                pageObj.key = document.title;
		                pageObj.title = document.title;
		                pageObj.path = spdata.PathName;
		                pageObj.query = window.location.search;
			 
		 				cocUrlString.unshift(pageObj);
			 
			        	window.sessionStorage.setItem('cocUrlString', JSON.stringify(cocUrlString) );
			    	}
			    }
			}
		});
		
// query and display related eServices link(s) within same content classification as current page
// var contentClassification = $(".cocis-breadcrumb a[selected='selected']");
// var contentClassificationText = "";
// if (contentClassification.length > 0) {
	// contentClassificationText = contentClassification.text().replace(/ /g,"%2520");
	// $.get("/_layouts/CoCIS/GSASearchResultsRSS.ashx?getfields=*&output=xml_no_dtd&ud=1&oe=UTF-8&ie=UTF-8&site=calgaryca&client=CoC_frontend&filter=p&entsp=a__all_policy&searchType=all&num=100&ulang=en&access=p&sort=date:D:L:d1&entqr=3&entqrm=0&q=inmeta:ContentType~eservice inmeta:Content%2520Classification%3D" + contentClassificationText, function(data) {
		// var results = $(data).find("R");
		// if (results.length > 0) {
			// $("#ctl00_PlaceHolderLeftColumn_RelatedLinks").prepend('<div id="cocis-sidebar-interested-in-eservices"><div class="cocis-body"><h2>Related eServices:</h2><ul id="cocis-related-eservices"></ul></div><div class="cocis-footer"></div></div>');
			// results.each(function () {
				// var esTitle = $(this).first().find("MT[N='title']").attr("V");
				// var esUrl = $(this).first().find("U").text();
				// $("#cocis-related-eservices").append("<li>» <a href='" + esUrl + "' onClick=\"ga('send', 'event', 'eServices', 'click', 'pageLeftNavRelatedButtons', '" + esTitle + "');\">" + esTitle + "</a></li>");
			// });
		// }
	// });
// }

// apply search dropdown class, style autocomplete.
// NOTE: live is deprecated in more recent versions of Jquery. update when Jquery library is updated.
/*$("#ctl00_PlaceHolderSearchArea_ctl00_txtSearch").live('keypress', function() {
	$(".ui-autocomplete").addClass('cocis-search-dropdown');
});*/

$("#ctl00_PlaceHolderSearchArea_ctl00_txtSearch").keypress( function() {
	$(".ui-autocomplete").addClass('cocis-search-dropdown');
});

// iOS zoom fix

if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) { 
	var viewportmeta = document.querySelector('meta[name="viewport"]'); 
	if (viewportmeta) { 
		viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0'; 
		document.body.addEventListener('gesturestart', function() { 
			viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6'; 
		}, false); 
	} 
}

// accessibility fixes 

$(document).ready(function() {
 
	//search area
	$('#cocis-search-submit').attr('href','#');
	
	// news ticker
	$('#cocis-all-news-item .cocis-close-button a').attr('href','#');
	$('#cocis-news-pause').attr('alt','Pause News');
	$('#cocis-news-play').attr('alt','Play News');	
});

//news ticker modifications
$(document).ready(function() {

$('#cocis-news-view-all').attr('href', 'http://newsroom.calgary.ca/');
$('#cocis-news-view-all').attr('target', '_blank');

//$('#cocis-news-ticker-container').attr('diplay','block !important');

});

// tag news ticker sources.

$( document ).ajaxComplete( function() {
	// source - city news blog
	$.each( $('#cocis-news-items li > a[href*="www.calgarycitynews.com"]'), function(index, value) {		 	
		if ( 
			( $(this).parent().find('.cocis-news-ticker-source').length == 0 ) &&  // add only once
		 	( !$(this).parent().is('a') ) // prevent recursively adding to dynamically added inner source link
		) {	
			
			$(this).parent().prepend('<span class="cocis-news-ticker-source"><a href="http://www.calgarycitynews.com/" target="_blank">Calgary City News Blog </a></span>'); 
		}
	});
	
	// source - twitter
	$.each( $('#cocis-news-items li > a[href*="https://twitter.com/cityofcalgary"]'), function(index, value) {		 	
		if ( 
			( $(this).parent().find('.cocis-news-ticker-twitter').length == 0 ) &&  // add only once
		 	( !$(this).parent().is('a') ) // prevent recursively adding to dynamically added inner source link
		) {	
			
			$(this).parent().prepend('<span class="cocis-news-ticker-twitter"><a href="https://twitter.com/cityofcalgary" target="_blank">"@cityofcalgary": </a></span>'); 
		}
	});
});

// Add an indicator class to the body tag of the embeded maps page to allow us to tailor it specifically for any given branding change.
// As IIS and PC6 require all mapping assets to be rolled out in a package form, the idea behind this snippet must be integrated into 
// their mapping framework in the future.

/*if ( window.location.href.indexOf('calgarymap.aspx') != -1 ) {
	$('body').addClass('embeded-mode');
	
	if ( spdata.QueryString["isIFrame"] == 1 ) {
		// inject css file in the DOM head
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", "/Scripts/eMapFix-test/cocis-embeded-map-fix.css");
		if (typeof fileref != "undefined") {
			document.getElementsByTagName("head")[0].appendChild(fileref);
		}
	}
}*/