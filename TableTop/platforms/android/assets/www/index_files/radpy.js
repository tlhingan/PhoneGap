
//Base js object, loads children
var root = 'http://'+window.location.hostname+'/';
var radpy = {
    config      :   {
        scriptsLoaded   : 0,
        //Scripts to load.  NOTE: dependancies must be loaded first, order matters here
        scripts         : [
            'Enums.js',
            'Ajax.js',
            'SearchMethods.js',
            'FormEvents.js',
            'Dom.js',
            'BDOForms.js',
            'Gridview.js',
            'popup.js',
        ],
        root            :   root,
        jsroot          :   root+'Javascript/',
        themes          :   root+'Themes/',
        theme           :   'default'
    },
            
    loadfile            :   function(filename, filetype) {
        if (filetype==="js"){ //if filename is a external JavaScript file
            var fileref=document.createElement('script')
            fileref.setAttribute("type","text/javascript")
            fileref.setAttribute("src", filename)
        }
        else if (filetype==="css"){ //if filename is an external CSS file
            var fileref=document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }
        if (typeof fileref!=="undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)
    },
          
    cache               :   {},
    display             :   {},
    gridview            :   {},
    
    createElement		:	function(tag, attributes){
    	var element = document.createElement(tag),
    		style = element.style,
    		index = '';
    	for(var i in attributes) {
    		if(i === 'style') {
    			for(var j in attributes.style) {
    				if(j.indexOf('-') === -1) {
    					style[j] = attributes.style[j];
    				} else {
    					index = j.split('-');
    					index[1] = index[1][0].toUpperCase() + index[1].substring(1);
    					style[index.join('')] = attributes.style[j];
    				}  				
    			}
    		}
    		if(element.hasOwnProperty(i)) {
    			element[i] = attributes[i];
    		}
    	}
    	return element;
    },
    
    isArray             :   function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    },
    isObject            :   function(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    },
    getParameterByName  :   function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
            
    dateFormat          :   function(dt) {
        var d = new Date(dt);
        var curr_date = d.getDate() + "",
            curr_month = d.getMonth() + "",
            curr_year = d.getFullYear() + "",
            curr_hour = d.getHours() + "",
            curr_min = d.getMinutes() + "";
    
        if (curr_date.length === 1) {
            curr_date = "0" + curr_date;
        }
        if (curr_month.length === 1) {
            curr_month = "0" + curr_month;
        }
        if (curr_min.length === 1) {
            curr_min = "0" + curr_min;
        }

        return '' + curr_year + '-' + curr_month + '-' + curr_date + ', ' + curr_hour + ':' + curr_min;
    },
    
    error			:	function(err) {
		if($('#messages').length) {
			$('#messages').append('<li class="ui-state-error ui-corner-all" onclick="(function(context){ context.fadeOut(); }($(this)))">'+err+'</li>');
		} else {
			console.log(err);	
		}
    },

    /**
    * Parses the data from a jquery AJAX call object
    * @param Object ajax The AJAX request object created by the jQuery.ajax call
    * @return JSON
    */
    parseAJAX: function (ajax) {
        //Check structure of response text for convention indicating that the ajax is the result of a call to a .Net webservice
        data = JSON.parse(ajax.responseText);
        if (radpy.display.gridview.sizeOf(data) === 1 && data.hasOwnProperty('d')) { 
            //probably .Net, parse on that assumption
            return JSON.parse(data.d);
        }
        return data;
    }
}; //Namespace declaration

radpy.localStorage = function() {
   return (radpy.cache['localStorage'] = typeof window.localStorage !== 'undefined');
};

radpy.trim = function(str){
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
};

/**
 * init
 * ------------------------------------------------------------------------------------------
 */
var scripts = radpy.config.scripts;

if(typeof $ === 'undefined') {
    //Jquery is a dependancy, load it if not already loaded
    scripts.unshift('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js');
}

//Load scripts
for(var i in scripts) {
    //radpy.loadfile(radpy.config.jsroot + scripts[i], "js") //dynamically load and add this .js file
}

//Load template css/js
radpy.loadfile(radpy.config.themes + radpy.config.theme + '/' + 'main.css', 'css');
radpy.loadfile(radpy.config.themes + radpy.config.theme + '/' + 'template.js', 'js');
