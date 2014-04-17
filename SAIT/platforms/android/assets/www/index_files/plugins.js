window.log = function(){
  log.history = log.history || [];
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

/***
	Plugin: Random Image
	
	Options: none

***/
(function ($) {
	$.fn.randImage = function (options) {
		
		var o = {};
		ceiling = num = null;
		
		return this.each(function () {
			$this = $(this);
			
			ceiling = $this.children().length;
			num = Math.floor(Math.random()*ceiling);
			
			if(options) { $.extend(o, options); }
			
			$this.children().eq(num).show();
			
		});
	
	};
})(jQuery);

/***
	Plugin: Banner Rotator
	
	Options:
		@thumbs: {string}
		@titles: {string} 
		@speed:  {int}
***/
(function ($) {
	$.fn.bannerRotate = function (options) {
		
		// global var declaration(s)
		var o = {
			titles: null,
			speed: 2
		},
		$banner = $lnk = total = run = ele = null;	
    
    function intervalTrigger(int, index) { 
			return setInterval(function () {
				index++;
				if (index >= total) {
					index = 0;
				}
				setBannerElements($banner, index);
			}, int);
		}
		
		function intervalCancel(int) {
			clearInterval(int);
		}
		
		function setBannerElements($banner, num) {
			// banner fade in / fade out
			$banner.children().fadeOut('slow');
			$banner.children().eq(num).fadeIn('slow');
			
			// thumbs nav
			$(o.thumbs).find(ele).removeClass('active');
			$(o.thumbs).find(ele).eq(num).addClass('active');
			
			// titles nav
			if(o.titles) {
				if (num === 0 || num === 1) {
					$(o.titles).find('li a').removeClass().eq(0).addClass('active');
				} else if (num === 2 || num === 3) {
					$(o.titles).find('li a').removeClass().eq(1).addClass('active');
				} else {
					$(o.titles).find('li a').removeClass().eq(2).addClass('active');
				}
			}
		}
		
		function randomize(ceiling) {
			return Math.floor(Math.random()*ceiling);
		}
        
		return this.each(function () {
			$banner = $(this);
			total = $banner.children().length;
			
			//Start on a specific banner
			//var index = 0;
			var index = randomize(total);
			
			if (options) { $.extend(o, options); }
			
			if(total > 1) {
				o.speed = o.speed * 1000;
			
				// Find the element type on which active should be set
				ele = $(o.thumbs).find('a:eq('+ index +')').get(0).nodeName;
								
				// Set up thunbnail behaviour
				$(o.thumbs).find('li a').click(function (ev) {
					ev.preventDefault();
					$lnk = $(this);
					intervalCancel(run);
					setBannerElements($banner, $lnk.parent().prevAll().length);
				});
				
				// Set up title behaviour
				if (o.titles) {
					$(o.titles).find('li a').click(function (ev) {
						ev.preventDefault();
						$lnk = $(this);
						intervalCancel(run);
						var $num = $lnk.parent().index();
						switch ($num) {
						case 1: $num = 2;
							break;
						case 2: $num = 4;
							break;
						default: break;
						}
						setBannerElements($banner, $num);
					});
				}
				
				setBannerElements($banner, index);
				
				run = intervalTrigger(o.speed, index);
				
			} else {
				// Because we only have one image element, we hide the thumbnail
				$(o.thumbs).hide();
			}

    });
		
  };
})(jQuery);

/***
	Plugin: Internet Explorer Text Shadows
***/

/* Created by Martin Hintzmann 2008 martin [a] hintzmann.dk
 * MIT (http://www.opensource.org/licenses/mit-license.php) licensed.
 *
 * Version: 0.2
 * Requires: jQuery 1.2+
 * http://plugins.jquery.com/project/textshadow
 *
 */
(function ($) {
	$.fn.textShadow = function(option) {
		if (!$.browser.msie) {return;}
		var IE6 = $.browser.version < 7;
		return this.each(function() {
			var el = $(this);
			var shadow = el.textShadowParse(this.currentStyle["text-shadow"]);
			shadow = $.extend(shadow, option);

			el.textShadowRemove();

			if (shadow.x === 0 && shadow.y === 0 && shadow.radius === 0) {return;}

			if (el.css("position")==="static") {
				el.css({position:"relative"});
			}
			el.css({zIndex:"0"});
			if (IE6) {
				el.css({zoom:"1"});
			}
			
			var span=document.createElement("span");
			$(span).addClass("jQueryTextShadow");
			$(span).html(el.html());
			$(span).css({
				padding:		this.currentStyle['padding'],	
				width:		el.width(),
				position:	"absolute",
				zIndex:		"-1",
				color:		shadow.color!==null?shadow.color:el.css("color"),
				left:			(-parseInt(shadow.radius, 10)+parseInt(shadow.x, 10))+"px",
				top:			(-parseInt(shadow.radius, 10)+parseInt(shadow.y, 10))+"px"
			});
			
			if (shadow.radius !== 0) {
				if (shadow.opacity !== null) {
					$(span).css("filter", "progid:DXImageTransform.Microsoft.Blur(pixelradius="+parseInt(shadow.radius, 10)+", enabled='true', makeShadow='true', ShadowOpacity="+shadow.opacity+")");
				} else {
					$(span).css("filter", "progid:DXImageTransform.Microsoft.Blur(pixelradius="+parseInt(shadow.radius, 10)+", enabled='true')");
				}
			}	
			el.append(span);
		
	  });
	};
	
	$.fn.textShadowParse = function(value) 
	{
		value = String(value)
			.replace(/^\s+|\s+$/gi, '')
			.replace(/\s*!\s*important/i, '')
			.replace(/\(\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^\)]+)\s*\)/g, '($1/$2/$3/$4)')
			.replace(/\(\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^\)]+)\s*\)/g, '($1/$2/$3)');
	
		var shadow = {
			x      : 0,
			y      : 0,
			radius : 0,
			color  : null
		};

		if (value.length > 1 || value[0].toLowerCase() !== 'none') {
			value = value.replace(/\//g, ',');
			var color;
			if ( value.match(/(\#[0-9a-f]{6}|\#[0-9a-f]{3}|(rgb|hsb)a?\([^\)]*\)|\b[a-z]+\b)/i) && (color = RegExp.$1) ) {
				shadow.color = color.replace(/^\s+/, '');
				value = value.replace(shadow.color, '');
			}

			value = value
				.replace(/^\s+|\s+$/g, '')
				.split(/\s+/)
				.map(function(item) {
						return (item || '').replace(/^0[a-z]*$/, '') ? item : 0 ;
					});

			switch (value.length)
			{
				case 1:
					shadow.x = shadow.y = value[0];
					break;
				case 2:
					shadow.x = value[0];
					shadow.y = value[1];
					break;
				case 3:
					shadow.x = value[0];
					shadow.y = value[1];
					shadow.radius = value[2];
					break;
			}
			if ((!shadow.x && !shadow.y && !shadow.radius) || shadow.color === 'transparent') {
				shadow.x = shadow.y = shadow.radius = 0;
				shadow.color = null;
			}
		}

		return shadow;
	};

	$.fn.textShadowRemove = function() {
		if (!$.browser.msie) {return;}
		return this.each(function() {
			$(this).children("span.jQueryTextShadow").remove();
		});
	};
})(jQuery);

if(typeof Array.prototype.map === 'undefined') {
	Array.prototype.map = function(fnc) {
		var a = new Array(this.length);
		for (var i = 0; i < this.length; i++) {
			a[i] = fnc(this[i]);
		}
		return a;
	};
}

/***
	Plugin: International Students Guide (isg) - Custom Flag/PDF Dropdown
	
	Options:
		@index: {string} - starting language in dropdown
***/
(function ($) {
	$.fn.isgDropDown = function (opts) {
		
		// global var declaration(s)
		var o = {
				start:0
		},
		$div, $dl, $imgDiv, $pdfLnk, eq, selected, max,
		$dt = $('<dt/>'), $dd = $('<dd/>'), $ul = $('<ul/>'),
		objs = new Array(), imgs = new Array(), imgLang = new Array();
		
		// Object containing languge, images, pdfs.
		obj = [
			{lang:'English',country:'canada.jpg,england.jpg',pdf:'English.pdf'},
			{lang:'Arabic',country:'arabic.jpg,uae.jpg',pdf:'Arabica.pdf'},
			{lang:'Traditional Chinese',country:'china.jpg',pdf:'Traditional_Chinese.pdf'},
			{lang:'Simplified Chinese',country:'china.jpg',pdf:'Simplified_Chinese-updated.pdf'},
			{lang:'Spanish',country:'chile.jpg',pdf:'Spanish_euro.pdf'},
			{lang:'French',country:'france.jpg',pdf:'French.pdf'},
			{lang:'Hindi',country:'hindi.jpg',pdf:'Hindi.pdf'},
			{lang:'Indonesian',country:'indonesia.jpg',pdf:'Indonesian.pdf'},
			{lang:'Japanese',country:'japan.jpg',pdf:'Japanese.pdf'},
			{lang:'Kazakh',country:'kazakh.jpg',pdf:'Kazakh.pdf'},
			{lang:'Korean',country:'korean.jpg',pdf:'Korean.pdf'},
			{lang:'Mongolian',country:'mongolia.gif',pdf:'Mongolian.pdf'},
			{lang:'Portuguese',country:'portugal.jpg',pdf:'Portuguese.pdf'},
			{lang:'Punjabi',country:'india.jpg',pdf:'Punjabi.pdf'},
			{lang:'Russian',country:'russian.jpg',pdf:'Russian.pdf'},
			{lang:'Thai',country:'thailand.jpg',pdf:'Thai.pdf'},
			{lang:'Turkish',country:'turkey.jpg',pdf:'Turkish.pdf'},
			{lang:'Ukrainian',country:'ukrainian.jpg',pdf:'Ukrainian.pdf'},
			{lang:'Vietnamese',country:'vietnam.jpg',pdf:'Vietnamese.pdf'}
		];
		
		// Function to set the flag(s) and pdf link.
		function setImgsLnk(eq) {
			imgs = obj[eq].country.split(',');
			imgLang = obj[eq].lang;
			$imgDiv.html('');
			for (i=0, max=imgs.length; i<max; i++) {
				$('<img src="'+ escape('images/International Students/Right Column/flags/')+ imgs[i] +'" alt="'+ imgLang +'" />').appendTo($imgDiv);
			}
			$pdfLnk.html('<a href="'+ escape('documents/International Students/')+ obj[eq].pdf +'" target="_blank">'+ obj[eq].lang +'</a>')
		}
		
		// Maintain chainability :)
		return this.each(function () {
			
			$div = $(this),
			$dl = $('dl.sb-dd', $div);
			$imgDiv = $('div#flags', $div);
			$pdfLnk = $('span.guide', $div);

			if (opts) { $.extend(o, opts); }
			
			// Initialize starting elements
			$dt.html('<a href="#">'+ obj[o.start].lang +'</a>').appendTo($dl);
			
			setImgsLnk(o.start);
	
			$dt.find('a').click(function(e) { 
				e.preventDefault();
				$ul.trigger('toggle');			
			});

			$dd.appendTo($dl).append($ul);
			
			// Set up the li elements along with their nested a tags
			$.each(obj, function(key, val){				
				$('<li/>',{ html:'<a href="#" target="_blank">'+ val.lang +'</a>' }).appendTo($ul);			
			});
			
			// Set up click behavior of li a tags
			$ul.find('a').click(function(e) {
				e.preventDefault();
				
				$dt.find('a').html($(this).text());
				
				$ul.trigger('toggle');
				
				$(selected).removeClass('selected')
				selected = $(this).addClass('selected');

				eq = $(this).parentsUntil('ul').index();
				setImgsLnk(eq);		
			});
						
			// Event binding
			$ul.bind('show', function() {
				
				if ($ul.is(':animated')) {
					return false;
				}
				$dt.addClass('expanded');
				$ul.slideDown();
			
			}).bind('hide', function() {
				
				if($ul.is(':animated')) {
					return false;
				}
				$dt.removeClass('expanded');
				$ul.slideUp();
				
			}).bind('toggle', function() {
				
				if($dt.hasClass('expanded')) {
					$ul.trigger('hide');
				} else {
					$ul.trigger('show');
				}				
			});
			
			$(document).click(function() {
				$ul.trigger('hide');
			});
			
    }); // end return statement
  };
})(jQuery);

/***
	Plugin: Admissions (adm) - Who are you custom dropdown.
	
	Options: 
			
		@start: {string} - starting option in dropdown

***/
(function ($) {
	$.fn.admDropDown = function (opts) {
		
		// global var declaration(s)
		var o = {
			start:0,
			obj:[]
		},
		$h2, eq, selected, max,
		$div=$('<div/>'), $dl=$('<dl/>'), $dt=$('<dt/>'), $dd=$('<dd/>'), $ul=$('<ul/>'), $btn=$('<a/>');
		
		// Maintain chainability :)
		return this.each(function () {
			
			$h2 = $(this);
			
			if (opts) { $.extend(o, opts); }
			
			// Insert the required elements into the DOM
			$div.insertAfter($h2).attr('class','mod-adm').append($dl).append($btn);
			$btn.attr('class', 'btn');
			$dl.append($dt).append($dd);
			$ul.appendTo($dd);
			$dt.html('<a href="#">I am a...</a>');
			$btn.attr('href', '#');
			
			// Set up the li elements along with their nested a tags
			$.each(o.obj, function(key, val){				
				$('<li/>',{ html:'<a href="#" target="_blank">'+ val.title +'</a>' }).appendTo($ul);
			});
			
			$dt.find('a').click(function(e) { 
				e.preventDefault();
				$ul.trigger('toggle');
				//setTimeout(function() {
					//$btn.trigger('click');
				//}, 5000);
			});
			
			// Set up click behavior of li a tags
			$ul.find('a').click(function(e) {
				e.preventDefault();
				
				$dt.find('a').html($(this).text());
				
				$ul.trigger('toggle');
				
				$(selected).removeClass('selected')
				selected = $(this).addClass('selected');

				eq = $(this).parentsUntil('ul').index();
				$btn.attr('href', o.obj[eq].url);
			});
			
			// Event binding
			$btn.bind('click', function(e) {
				
				e.preventDefault();
				window.location.href = $(this).attr('href');
				
			});
			
			$ul.bind('show', function() {
				
				if ($ul.is(':animated')) {
					return false;
				}
				$dt.addClass('expanded');
				$ul.slideDown();
			
			}).bind('hide', function() {
				
				if($ul.is(':animated')) {
					return false;
				}
				$dt.removeClass('expanded');
				$ul.slideUp();
				
			}).bind('toggle', function() {
				
				if($dt.hasClass('expanded')) {
					$ul.trigger('hide');
				} else {
					$ul.trigger('show');
				}				
			});
			
			$(document).click(function() {
				$ul.trigger('hide');
			});

    }); // end return statement
  };
})(jQuery);

