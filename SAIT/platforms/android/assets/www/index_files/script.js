/* Author: Shannon K. Wicks 

jQuery script calls:
	
	- Alumni/Event calender workaround
	- SAIT Insights Survey
	- Web feedback link
	- External & PDF link identifiers
	- Fancy Box Gallery
	- Fancy Box YouTube
	- Fancy Box Workopolis
	- Back to Top
	- IE Specific
		- text shadows
		- table 4 alternating table row colors
		- fee tables
	- International Students language dropdown
	- Fee table script
	- Email validation scripts
	** getUrlVars
			- need to move out of here and onto local page in XSLT
*/



$(document).ready(function(){

/** 
	Alumni/Event calender workaround
**/
	$('#side-bar h2')
	.filter(function(index) {
		return $(this).text() === "Alumni";
	})
		.next('#nav-sub')
		.find('ul li a')
		.filter(function(index) {
			return $(this).text() === "Events";
	}).attr("href", '/calendar.php?category=1635&catname=Alumni')


/** 
	Allows the print icon to print
**/
	$(".print a").click(function(){
		window.print();
		return false;
	});
	
/** 
	Letter List
**/
	$("#letterList li a").click(function(){
	var showThis = $(this).attr("rel");
		$(".sections, .letters li").hide();
		$(".letters li."+showThis).show();
		return false;
	});
	
/**
	Web Feedback link 
**/
//	$(".col-4 .privacy").append(' | <a href="#" onclick="FBY.showForm(\'2220\');return false;">Give Feedback</a>');
//$('<span> | </span> <a href="#" onclick="FBY.showForm(\'2220\');return false;">Give Feedback</a>').insertAfter('div.privacy a:nth-child(1)');
$('div.privacy a:last').before(' <a href="#" onclick="FBY.showForm(\'2220\');return false;">Give Feedback</a> <span> | </span> ');
	
	/* Identify External & PDF Links */
	$(".content-wrapper a[href$='pdf']").addClass("pdf");

	$(".content-wrapper a").not(".content-wrapper a[href$='pdf'], a.transfer-options-menu, .coursefinderBox a").filter(function() { return this.hostname && this.hostname !== location.hostname }).addClass("ext");
	
/** 
	Fancy Box Gallery 
**/
	$("div.fancybox-gallery a, a.fbphoto").fancybox();
		
/** 
	Fancybox Youtube
**/

	$('a[href*="youtube.com/"]:not(.nofancybox, li.lnk-youtube a, div.ins-footer div ul li a, li.youtube a)').addClass('fancybox-youtube');
	$('a[href*="youtu.be/"]:not(.nofancybox)').addClass('fancybox-youtube');

	$('a.fancybox-youtube').fancybox({
		'width' : 640, 
		'height' : 385, 
		'padding' : 10,
		helpers : {
			media : {}
		}
	});
	
	/*****
	var fb_timeout = null;
	var fb_opts = {
		'overlayShow':true,
		'overlayOpacity':0.5,
		'overlayColor':'#111',
		'showCloseButton':true,
		'showNavArrows':true,
		'autoScale':true,
		'centerOnScroll':true,
		'onCleanup': function() { 
			if(fb_timeout) {
					window.clearTimeout(fb_timeout); fb_timeout = null;
			}
		}};
	$('a[href*="youtube.com/"]:not(.nofancybox, li.lnk-youtube a, div.ins-footer div ul li a, li.youtube a)').addClass('fancybox-youtube');
	$('a[href*="youtu.be/"]:not(.nofancybox)').addClass('fancybox-youtube');
	$('a.fancybox-youtube, area.fancybox-youtube').fancybox( $.extend({}, fb_opts, { 'type' : 'iframe', 'width' : 640, 'height' : 385, 'padding' : 10, 'titlePosition' : 'float', 'onStart' : 			function(selectedArray, selectedIndex, selectedOpts) { selectedOpts.href = selectedArray[selectedIndex].href.replace(new RegExp('youtu.be', 'i'), 'www.youtube.com/embed').replace(new RegExp('watch\\?v=([a-z0-9\_\-]+)(&|\\?)?(.*)', 'i'), 'embed/$1?version=3&$3') } }) );
    *****/

	/*$("li.youtube a").removeClass("fancybox-youtube");
    $("li.youtube a").addClass("nofancybox");
    $("div.ins-footer div ul li a").removeClass("fancybox-youtube");
    $("div.ins-footer div ul li a").addClass("nofancybox"); */
	
/** 
	Fancybox Workopolis 
**/
	
	/* iOS fix for lack of scroll-bars (Dec 7, 2012)  */
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	if (agentID) {
 		$("a").removeClass('workopolis');
	}
	
	$("a.workopolis").fancybox({
		'autoDimensions' : false,
		'width' : 774,
		'height' : '90%',
		'transitionIn': 'none',
		'transitionOut': 'none',
		'showCloseButton' : true,
		'type': 'iframe'
	}); 
	
/** 
	Back to top 
**/
	$('.gotop').mouseover(function() { $(this).attr("src", "Images/back-to-top-on.png"); });
	$('.gotop').mouseout(function() { $(this).attr("src", "Images/back-to-top.png"); });
	$('.gotop').click(function(){
  	$('html, body').animate({scrollTop:0},627); return false; 
	});

/** 
	IE Specific Scripts 
**/
	
	/* text shadows */
	var ie7text = "html.ie7 #main2 #side-bar h2";
	var ie8text = "html.ie8 #main2 #side-bar h2";
	var ie9text = "html.ie9 #main2 #side-bar h2";	

	$(ie7text).textShadow({
		'x':      1, 
  	'y':      -2, 
  	'radius': 1,
  	'color':  "#2b2b2a"
	});
	$(ie8text).textShadow({
		'x':      1, 
  	'y':      -2, 
  	'radius': 1,
  	'color':  "#2b2b2a"
	});
	$(ie9text).textShadow({
		'x':      1, 
  	'y':      2, 
  	'radius': 1,
  	'color':  "#2b2b2a"
	});
	
	/* table styles */
	var ie7table4 = "html.ie7 table.style-4 > tbody > tr:nth-child(odd)";
	var ie8table4 = "html.ie8 table.style-4 > tbody > tr:nth-child(odd)";
	var ie9table4 = "html.ie9 table.style-4 > tbody > tr:nth-child(odd)";	
	$(ie7table4).addClass('odd');
	$(ie8table4).addClass('odd');
	$(ie9table4).addClass('odd');
	
		/* fee table */
	$("html.ie7 table.fees tr:nth-child(even)").css('background-color','#efedea');
	$("html.ie7 table.fees td:nth-child(2)").css('text-align','center');
	$("html.ie7 table.fees td:nth-child(n+3)").css('text-align','right');
	$("html.ie8 table.fees tr:nth-child(even)").css('background-color','#efedea');
	$("html.ie8 table.fees td:nth-child(2)").css('text-align','center');
	$("html.ie8 table.fees td:nth-child(n+3)").css('text-align','right');

/** 
	International students language dropdown 
**/
	$('.mod-isg').isgDropDown();
	
/** 
	Fee table "sticky" header row 
		  - does not work in IE7
**/
	
	function UpdateTableHeaders() {
	 $(".persist-area").each(function() {	 
			 var el             = $(this),
					 offset         = el.offset(),
					 scrollTop      = $(window).scrollTop(),
					 floatingHeader = $(".floatingHeader", this)
			 
			 if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
					 floatingHeader.css({
						"visibility": "visible"
					 });
			 } else {
					 floatingHeader.css({
						"visibility": "hidden"
					 });      
			 };
	 }); 
	}
	
/** 
	Fee table script
**/
	var clonedHeaderRow;
	
	$(".persist-area").each(function() {
		clonedHeaderRow = $(".persist-header", this);
		clonedHeaderRow
			.before(clonedHeaderRow.clone())
			.css("width", clonedHeaderRow.width())
			.addClass("floatingHeader"); 
		});
	 
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			var t = $('table.fees').offset();
			if(t != null || t != undefined){
				$('.floatingHeader').css('left',t.left);
			}
		}
	 
		$(window)
			.scroll(UpdateTableHeaders)
			.trigger("scroll");			



/**
	Email Validation Script:
		Known usage:
			- continuum newsletter signup
**/
	$('#btn-submit').click(function() {  

			$(".error").hide();
			var hasError = false;
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			
			var emailaddressVal = $("#email").val();
			if(emailaddressVal == '') {
					$("#continuum-signup").append('<span class="error">Please enter your email address.</span>');
					hasError = true;
			}

			else if(!emailReg.test(emailaddressVal)) {
					$("#continuum-signup").append('<span class="error">Enter a valid email address.</span>');
					hasError = true;
			}

			if(hasError == true) { return false; }

	});
	
	$('#btn-submit-rfi').click(function() {
		
		$(".error").hide();
		
		var hasError = false,
				str = '',
				email = $('#rfiEmail').val(),
				fname = $('#rfiFname').val(),
				lname = $('#rfiLname').val(),
				emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		if(email == '') {
			str += '<span class="error">Please enter your email address.</span>';
			hasError = true;
		}
		if(!emailReg.test(email)) {
			str += '<span class="error">Please enter a valid email address</span>';
			hasError = true;
		}
		if(fname == '') {
			str += '<span class="error">Please enter your first name.</span>';
			hasError = true;
		}
		if(lname == '') {
			str += '<span class="error">Please enter your last name</span>';
			hasError = true;
		}
		
		if(hasError == true) { 
			$('#rfi').prepend(str);
			return false; 
		}
		
	});

	$('#btn-elf-submit').click(function() {  

			$(".error").remove();
			$(".frm-msg").remove();
			var hasError = false;
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			
			var emailaddressVal = $("#email").val();
			if(emailaddressVal == '') {
					if ($('.mod-elf-form .intro').css('display') == 'none') {
 					  $('.mod-elf-form .intro').show();
					}
					$("#elf-signup-form").prepend('<span class="error">Please enter your email address.</span>');
					hasError = true;
			}

			else if(!emailReg.test(emailaddressVal)) {
					if ($('.mod-elf-form .intro').css('display') == 'none') {
 					  $('.mod-elf-form .intro').show();
					}
					$("#elf-signup-form").prepend('<span class="error">Enter a valid email address.</span>');
					hasError = true;
			}
			
			/* for IGX CMS testing purposes */
			//$('#elf-signup-form input[name=success]').val(window.location.href+ '&imSuccess=true');
			//$('#elf-signup-form input[name=failure]').val(window.location.href);
			
			/* for production purposes */
			$('#elf-signup-form input[name=success]').val('http://' + window.location.hostname + window.location.pathname + '?imSuccess=true');
			$('#elf-signup-form input[name=failure]').val('http://' + window.location.hostname + window.location.pathname);
			
			if(hasError == true) { return false; }	
	});
	
	var imRegError = getUrlVars()["imError"];
	if((imRegError != null) || (imRegError != undefined)) {	
		imRegError = imRegError.split('+').join(' ');
		$('#elf-signup-form').prepend('<span class="error">'+ imRegError +'</span>');
	}
	
	var imSuccess = getUrlVars()["imSuccess"];
	if(imSuccess != null && imSuccess != undefined && imSuccess != false) {
		$(".mod-elf-form .intro").hide();
		$("#elf-signup-form").prepend('<span class="frm-msg"><p style="color:#cc0000;">Thanks for your subscription request!</p><br /><p>Before you are added to the list, you will receive an email to confirm your email address.</p><br />');	
	}
	
	if (imSuccess || imRegError) {
		$(document).scrollTop( $("#elf-signup-form").offset().top - 200 );
	}
	
	function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
		}
		return vars;
	}

	var csError = getUrlVars()["error"];
		if((csError != null) || (csError != undefined)) {
			csError = csError.split('+').join(' ');
			$('#continuum-signup-error').append('<p class="csErrorMsg">'+ csError +'</p>');
		}


});  // end document.ready
