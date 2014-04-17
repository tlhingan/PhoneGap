/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test("�")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
jQuery.cookie=function(c,d,a){if("undefined"!=typeof d){a=a||{};null===d&&(d="",a.expires=-1);var b="";a.expires&&("number"==typeof a.expires||a.expires.toUTCString)&&("number"==typeof a.expires?(b=new Date,b.setTime(b.getTime()+864E5*a.expires)):b=a.expires,b="; expires="+b.toUTCString());var e=a.path?"; path="+a.path:"",f=a.domain?"; domain="+a.domain:"";a=a.secure?"; secure":"";document.cookie=[c,"=",encodeURIComponent(d),b,e,f,a].join("")}else{d=null;if(document.cookie&&""!=document.cookie)for(a=
document.cookie.split(";"),b=0;b<a.length;b++)if(e=jQuery.trim(a[b]),e.substring(0,c.length+1)==c+"="){d=decodeURIComponent(e.substring(c.length+1));break}return d}};
(function(c){void 0==window.DOMParser&&window.ActiveXObject&&(DOMParser=function(){},DOMParser.prototype.parseFromString=function(c){var a=new ActiveXObject("Microsoft.XMLDOM");a.async="false";a.loadXML(c);return a});c.xmlDOM=function(d,a){try{var b=(new DOMParser).parseFromString(d,"text/xml");if(c.isXMLDoc(b)){if(1==c("parsererror",b).length)throw"Error: "+c(b).text();}else throw"Unable to parse XML";}catch(e){return b=void 0==e.name?e:e.name+": "+e.message,c.isFunction(a)?a(b):c(document).trigger("xmlParseError",
[b]),c([])}return c(b)}})(jQuery);
 
// Add Douglas Coupland's JSON.stringify and JSON.parse, if not natively supported by the browser
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify')}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse')}}}());
// Error suppression
if (location && !(location.search && location.search.indexOf('showerror') > -1)) {window.onerror = function (m,u,l){a=window['errorlist'];if (!a) a=window['errorlist']=[];try {a[a.length]=u+' line '+l+': '+m;}catch (e) {a[a.length]='Unhandled exception';}return true;}}
// === text size start
var currFont = 1;
function setTextSize(s) {
var arrFont = new Array('.8em', '1em', '1.2em', '1.4em', '1.6em');
var arrHeight = new Array('1.3em', '1.35em', '1.4em', '1.45em', '1.5em');
if (s == 'up') {
currFont++;
}
if (s == 'down') {
currFont--;
}
if (currFont >= 4) {
currFont = 4;
}
if (currFont <= 0) {
currFont = 0;
}
document.getElementById('tsnStory').style.fontSize = arrFont[currFont];
document.getElementById('tsnStory').style.lineHeight = arrHeight[currFont];
}// --- text size end
function setFlashHeight(divId, newH) {
//alert(divId);
document.getElementById(divId).style.height = newH+"px";
}
// -- Legacy functions
function openNewWindow(URLtoOpen,windowName,windowFeatures){window.open(URLtoOpen,windowName,windowFeatures);}
function playClip(p_cid){openNewWindow('http://video.tsn.ca/?dl=main/latest/1/0/'+p_cid+'/clip/0','TSNVideoHub','height=820,width=1010,toolbar=0,scrollbars=1,resizable=1,status=0');}
function openGallery(intGalleryId){window.open('http://www.tsn.ca/window/gallery.aspx?galleryid='+intGalleryId,'TSNGallery','height=501,width=760,toolbar=no,scrollbars=no,resizable=no,status=no');}
TSNMedia = {
'ShowImagePopup': function (strImagePath, intWidth, intHeight, strParams) { window.open('/Story/Image.aspx?path=' + strImagePath + '&width=' + intWidth + '&height=' + intHeight, 'popupimage', "menubar=0,resizable=0,width=" + intWidth + ",height=" + intHeight); },
'openNewWindow': function (URLtoOpen, windowName, windowFeatures) { window.open(URLtoOpen, windowName, windowFeatures); return false; },
'playClip': function (p_cid) { openNewWindow('http://video.tsn.ca/?dl=main/latest/1/0/'+p_cid+'/clip/0', 'TSNVideoHub', 'height=820,width=1010,toolbar=0,scrollbars=1,resizable=1,status=0'); },
'openGallery': function (intGalleryId) { openNewWindow('http://www.tsn.ca/window/gallery.aspx?galleryid=' + intGalleryId, 'TSNGallery', 'height=591,width=760,toolbar=no,scrollbars=no,resizable=no,status=no'); return false; },
'openGalleryFromStory': function (intGalleryId) { openNewWindow('http://www.tsn.ca/window/gallery.aspx?galleryid=' + intGalleryId, 'TSNGallery', 'height=591,width=760,toolbar=no,scrollbars=no,resizable=no,status=no'); },
'swapImg': function (thisImg, newImg, imgDir) { newUrl = imgDir + newImg; if (document.images) { document.images[thisImg].src = newUrl; } return false; },
'placeScoreBoardOLD': function (showSport, showAll, showFull) { document.write('<div class="imgOnly"><div id="tsnLiveSB"><\/div><\/div>'); var flashvars = {}; flashvars.initSB = showSport; flashvars.showAll = showAll; flashvars.showFull = showFull; flashvars.cache = tsnFlashTimeStamp; var params = {}; params.wmode = 'transparent'; params.allowscriptaccess = 'always'; params.scale = 'noscale'; params.salign = 'tl'; var attributes = {}; swfobject.embedSWF('http://www2.tsn.ca/media/flash/scoreboard/scoreboard.swf', 'tsnLiveSB', '218', '122', '8.0.0', false, flashvars, params, attributes); },
'placeScoreBoardJAN2011': function (showSport, showAll, showFull) { intH = 94; if (showAll == 'true') { intH = 103; } document.write('<div class="imgOnly"><div id="tsnLiveSB"><\/div><\/div>'); var flashvars = {}; flashvars.initSB = showSport.toUpperCase(); flashvars.showAll = showAll; flashvars.showFull = showFull; flashvars.cache = tsnFlashTimeStamp; var params = {}; params.wmode = 'transparent'; params.allowscriptaccess = 'always'; params.scale = 'noscale'; params.salign = 'tl'; var attributes = {}; swfobject.embedSWF('http://www2.tsn.ca/media/flash/scoreboard9/scoreboard.swf', 'tsnLiveSB', '218', intH, '9.0.0', false, flashvars, params, attributes, function (o) { if (window.TSNWidget && TSNWidget.Scores) { TSNWidget.Scores.replaceIfNeeded(o, showSport, showAll, showFull); } }); },
'placeScoreBoard': function (showSport, showAll, showFull) { document.write('<div class="imgOnly"><div id="tsnLiveSB"><\/div><\/div>'); TSNWidget.Scores.replaceIfNeeded({ success: false }, showSport, showAll, showFull); },
'setDivHeight': function (divId, newH) { document.getElementById(divId).style.height = newH + "px"; },
'popupWindow': function (path, name, w, h) { window.open(path, name, 'width=' + w + ',height=' + h + ',toolbar=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no'); },
'highliteCal': function () { if (document.getElementsByTagName) { (function () { var dt = new Date(); var mo = ['January|0', 'February|1', 'March|2', 'April|3', 'May|4', 'June|5', 'July|6', 'August|7', 'September|8', 'October|9', 'November|10', 'December|11']; var rx = new RegExp('(' + mo[dt.getMonth()] + ')/' + dt.getDate() + '/' + dt.getFullYear(), 'i'); var atb, dtb, aan, dan, i, j; atb = document.getElementsByTagName('table'); for (i = 0; i < atb.length; i++) { dtb = atb[i]; if (dtb.className.indexOf('cal') > -1) { aan = dtb.getElementsByTagName('a'); for (j = 0; j < aan.length; j++) { dan = aan[j]; if (rx.test(dan.href)) { dan.parentNode.parentNode.style.backgroundColor = "#666"; dan.style.color = "#fff"; } } } } })() } },
'setParentWindow': function (url) { if (window.opener) {window.opener.location.href = url; } else { location.href = url; } },
'listenLive': function () {this.popupWindow('/radio/listen/', 'tsnradio', '775', '685');}
}
// -- Interrupt auto post
function stopRKey(evt) {
var evt = (evt) ? evt : ((event) ? event : null);
var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
if ((evt.keyCode == 13) && (node.type=="text"))  {return false;}
}
document.onkeypress = stopRKey;
// -- Ad code placement
var p=parent;
var d=document;
var adord = (typeof adord == 'undefined' ? (typeof p.ord == 'undefined' ? '' : p.ord) : adord)
var szone = (typeof szone == 'undefined' ? (typeof p.szone == 'undefined' ? '' : p.szone) : szone);
var smode = (typeof smode == 'undefined' ? (typeof p.smode == 'undefined' ? '' : p.smode) : smode);
var spos = (typeof spos == 'undefined' ? (typeof p.spos == 'undefined' ? '' : p.spos) : spos);
var sarena = (typeof sarena == 'undefined' ? (typeof p.sarena == 'undefined' ? 'sports' : p.sarena) : sarena);
var snc = typeof snc == 'undefined' ? "" : snc;
var sops = typeof sops == 'undefined' ? "" : sops;
var sloc = getLoc();
var size;
var stile;
var dclkBanner = true;
function quoteCleanUp(strInput) {
boolOdd = true;
while(strInput.indexOf('"') > -1) {
intReplacement = strInput.indexOf('"');
strInput = strInput.substr(0,intReplacement) + (boolOdd ? '\u201c' : '\u201d') + strInput.substr(intReplacement + 1);
boolOdd = !boolOdd;
}
return strInput;
}
function writeDClick() {
stile = typeof stile == 'undefined' ? "0" : stile;
adpg2 = window['adpg2'] ? adpg2:'unknown';
adCode='<scr'+'ipt language="javascript1.1" src="http://ad.ca.doubleclick.net/adj/ctv.tsn.ca/'+adpg+';abr=!webtv;mode='+smode+';loc='+sloc+';adpg='+adpg+';adpg2=' + adpg2 + ';arena=sports;ops='+sops+';pos='+spos+';kw=;nc='+snc+';sz='+size+';tile=' + stile + ';ord='+adord+'?"></scr'+'ipt>';
adCode+='<div style="position:absolute;visibility:hidden;display:inline;"><img src="http://adcounter.theglobeandmail.com/servlet/AdletCounter?ad1=TSNpg_'+adpg+'_'+size+'" width="1" height="1" border="0"></div>';
document.write(adCode);
}
function getLoc() {
try {
var c = ['teams/story','story','feature','scores','schedule','standings','statistics','teams','players','injuries','transactions','daily_line'];
var u = document.location.toString().toLowerCase();
for(i = 0; i < c.length;i++) {
if(u.indexOf('/'+c[i]+'/') > 0) return c[i];
}
if (u.indexOf('id=') > 0) return 'nonhub';
return 'hub';
}
catch(e) { return 'unknown'; }
}
function place728x90(stileOverride) {
stile = stileOverride ? stileOverride : "1";
size="728x90";
writeDClick();
}
function place300x250(stileOverride){
stile = stileOverride ? stileOverride : "2";
size="300x250";
writeDClick();
ad3=true;
}
function place160x600(stileOverride){
stile = stileOverride  ? stileOverride : "3";
size="160x600";
writeDClick();
}
function place468x60(stileOverride){
stile = stileOverride ? stileOverride : "4";
size="468x60";
writeDClick();
}
function place120x600(stileOverride){
stile = stileOverride ? stileOverride : "5";
size="120x600";
writeDClick();
}
function isNumeric(sText) {
var ValidChars = "0123456789.";
var IsNumber=true;
var Char;
for (i = 0; i < sText.length && IsNumber == true; i++) {
Char = sText.charAt(i);
if (ValidChars.indexOf(Char) == -1) {
IsNumber = false;
}
}
return IsNumber;
}
//Done
/* START OF INTERSTITIAL CODE */
/*  ADDED JANUARY 2009 */
CookieWriter =
{
nomCookie : '',
EcrireCookie : function(valeur)
{
var argv=this.EcrireCookie.arguments;
var argc=this.EcrireCookie.arguments.length;
var today = new Date();
var expires= 1 * 1000 * 60 * 60 * 24;
var expires_date = new Date( today.getTime() + (expires) );
var path=(argc > 3) ? argv[3] : null;
var domain=(argc > 4) ? argv[4] : null;
var secure=(argc > 5) ? argv[5] : false;
document.cookie=this.nomCookie+"="+escape(valeur)+
((expires==null) ? "" : ("; expires="+expires_date.toGMTString()))+
((path==null) ? "" : ("; path="+path))+
((domain==null) ? "" : ("; domain="+domain))+
((secure==true) ? "; secure" : "");
},
LireCookie : function ()
{
var arg=this.nomCookie+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while (i<clen){
var j=i+alen;
if (document.cookie.substring(i, j)==arg)
return this.CookieVal(j);
i=document.cookie.indexOf(" ",i)+1;
if (i==0)
break;
}
return null;
},
CookieVal: function (offset)
{
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1) endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
}
var cookieName = '';
var redirect_path = '';
var adDuration = 7;
var remaining = adDuration;
var codeInsert = '';
var userViews;
var maxViews;
function activateIntersticielle(){
CookieWriter.nomCookie = cookieName;
userViews = CookieWriter.LireCookie();
if(userViews != null){userViews = parseInt(userViews);}
else {userViews = 0;}
if(userViews >= maxViews)
{
redirect(redirect_path);
} else {
CookieWriter.EcrireCookie(userViews+1);
holder= document.getElementById('intersticielleHolder');
if(codeInsert == '')
{
holder.innerHTML = '<IFRAME SRC="http://ad.ca.doubleclick.net/adi/N3644.RDS/B2756644.3;sz=640x480;click=;ord=[timestamp]?" WIDTH=640 HEIGHT=480 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000">' +
'<SCRIPT language="JavaScript1.1" SRC="http://ad.ca.doubleclick.net/adj/N3644.RDS/B2756644.3;abr=!ie;sz=640x480;click=;ord=[timestamp]?">' +
'</SCRIPT>' +
'<NOSCRIPT>' +
'<A HREF="http://ad.ca.doubleclick.net/jump/N3644.RDS/B2756644.3;abr=!ie4;abr=!ie5;sz=640x480;ord=[timestamp]?">' +
'<IMG SRC="http://ad.ca.doubleclick.net/ad/N3644.RDS/B2756644.3;abr=!ie4;abr=!ie5;sz=640x480;ord=[timestamp]?" BORDER=0 WIDTH=640 HEIGHT=480 ALT="Click Here"></A>' +
'</NOSCRIPT>' +
'</IFRAME>';
} else {
holder.innerHTML = codeInsert;
}
setTimeout("redirect('"+redirect_path+"')", adDuration *1000);
setInterval("updateRemaining('counter')", 1000);
}
}
function redirect(path) {
window.location = path;
}
function updateRemaining(targetId){
if(remaining > 0){
remaining -= 1;
}
remainingHolder = document.getElementById(targetId);
remainingHolder.innerHTML = remaining;
}
/* END OF INTERSTITIAL CODE */
function tsnRequest(){
var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]
if (window.ActiveXObject){
for (var i=0; i<activexmodes.length; i++){
try{
return new ActiveXObject(activexmodes[i])
}
catch(e){
}
}
}
else if (window.XMLHttpRequest)
return new XMLHttpRequest()
else
return false
}
TsnDivCycle = function(p,m) {
var strMenuItemIdPrefix = p;
var intMaxNavCount = m;
this.show = function(i) {
var intSelectedIndex = i;
var objDiv;
if (!document.getElementById(strMenuItemIdPrefix + i.toString())) {
return false;
}
for (var i = 1; i <= intMaxNavCount; i++) {
objDiv = document.getElementById(strMenuItemIdPrefix + i.toString());
if (objDiv) {
objDiv.style.display = (i === intSelectedIndex) ? 'block' : 'none';
}
}
}
}
/* tsnSearch start */
function clearText(thefield) {
if (thefield.defaultValue == thefield.value)
thefield.value = ""
}
function doClick(buttonName, e) {
var key;
if (window.event)
key = window.event.keyCode; //IE
else
key = e.which; //firefox
if (key == 13) {
var btn = document.getElementById(buttonName);
if (btn != null) {
btn.click();
event.keyCode = 0
}
}
}
/* tsnSearch end */
 
/*SWFObject v2.0 rc4 <http://code.google.com/p/swfobject/>
Copyright (c) 2007 Geoff Stearns, Michael Williams, and Bobby van der Sluis
This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
/*SWFObject v2.2 <http://code.google.com/p/swfobject/>
is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
TSNMedia.embedSWF = swfobject.embedSWF;
TSNMedia.embedAdSWF = swfobject.embedSWF;
function placeSWFLogo(nm, w, h) {
var intRand = Math.floor((Math.random()*9999+1));
var strDivNm = nm+"_"+intRand;
var strDivHtml = '<div id="'+strDivNm+'"></div>';
document.write(strDivHtml);
var flashvars = {};
var params = {};
params.allowscriptaccess = 'always';
params.wmode = 'transparent';
var attributes = {};
TSNMedia.embedSWF('http://images.tsn.ca/images/silver/flash/' + nm + ".swf", strDivNm, w, h, '9.0.0', false, flashvars, params, attributes);
}
function placeH1SWF(nm, w, h, txt) {
var intRand = Math.floor((Math.random()*9999+1));
var flashvars = {};
flashvars.txtSub = txt;
flashvars.txtColor = '0x484f53';
var params = {};
params.wmode = 'transparent';
params.scale = 'noscale';
params.salign = 'tl';
var attributes = {};
TSNMedia.embedSWF('http://www.tsn.ca/media/flash/headlines/h1.swf', nm, w, h, '8.0.0', false, flashvars, params, attributes);
}
function placeFragmentH1(txt, div) {
theDiv = 'tsnH1';
if (div) {
theDiv = div;
}
var intRand = Math.floor((Math.random()*9999+1));
var flashvars = {};
flashvars.txtSub = txt;
flashvars.txtColor = '0x484f53';
var params = {};
params.wmode = 'transparent';
params.scale = 'noscale';
params.salign = 'tl';
var attributes = {};
TSNMedia.embedSWF('http://www.tsn.ca/media/flash/headlines/h1.swf', theDiv, 640, 44, '8.0.0', false, flashvars, params, attributes);
}
 
var TSNAd = {};
TSNAd.collapseSuperAd = function() {
$('#tsnSuperHeader').animate({'height':'45px'});
};
TSNAd.expandSuperAd = function() {
$('#tsnSuperHeader').animate({'height':'250px'});
};
TSNAd.Background = (function() {
var self = {},
settings = {
image:null,
bgcolor:'#000000',
fixed:false
},
gutterWidth = 11,
container,host, timeoutId;
self.state = 'unloaded';
var Linkable = function(a) {
var self = this,
url = a[0],
width = a[1],
height = a[2],
y = a[3],
x = a[4] < 0 ? Math.min(-gutterWidth, a[4]) : Math.max(gutterWidth,a[4]);
x = x < 0 ? x - width : x + 1000;
self.render = function() {
var link = $(
'<a href="%s" target="_blank" style="display:block;position:absolute;top:%spx;left:%spx;cursor:pointer;"><img src="http://images.tsn.ca/images/pix.gif" width="%s" height="%s" alt="" /></a>'
.replace('%s',url)
.replace('%s',y.toString())
.replace('%s', x.toString())
.replace('%s',width)
.replace('%s',height)
);
host.append(link);
};
};
Linkable.instances = [];
Linkable.create = function(a) {
Linkable.instances.push(new Linkable(a));
};
Linkable.renderAll = function() {
for (var i = 0; i < Linkable.instances.length; i++) {
Linkable.instances[i].render();
}
};
var getSettings = function(o) {
settings.image = o.image === undefined ? null : o.image;
settings.bgcolor = o.bgcolor === undefined ? null : o.bgcolor;
settings.fixed = !!o.fixed;
for (var i = 0; i < o.linklist.length; i++) {
Linkable.create(o.linklist[i]);
}
}
var checkSettings = function() {
var okay =
settings.image !== null &&
settings.bgcolor !== null &&
(/#[0-9a-f]{6}/).test(settings.bgcolor);
self.state = okay ? 'settings okay' : 'settings broken';
return okay;
};
var display = function() {
$('body').css({'background':'%s url(%s) center top %s no-repeat' .replace('%s', settings.bgcolor).replace('%s', settings.image).replace('%s', settings.fixed ? 'fixed' : '')});
$('#tsnBodyAdWrap').css({'background':'%s url(%s) center top %s no-repeat' .replace('%s', settings.bgcolor).replace('%s', settings.image).replace('%s', settings.fixed ? 'fixed' : '')});
host = $('<div></div>');
container = $('<div style="position:%s;top:0;left:50%;width:1000px;margin-left:-500px;height:100%;"></div>' .replace('%s', settings.fixed ? 'fixed' : 'absolute'));
container.append(host);
Linkable.renderAll();
$('#tsnWrap').before(container);
};
self.place = function(o) {
self.state = 'placing';
getSettings(o);
if (checkSettings()) {
$('body').css('backgroundColor',settings.bgcolor);
$(display);
}
};
return self;
}());
 
if (window.TSNUtils === undefined) { TSNUtils = {}; }
TSNUtils.autorefresh = (function($){
var self = {};
var intInitialScrollCountValue = 15;
var intScrollCount,intScrollTop,jBody,checkscrollposition,strError;
self.status = 'Initializing';
var refreshScript = 0;
try {
intScrollCount = intInitialScrollCountValue;
intScrollTop = -1;
jBody = $('html');
checkscrollposition = function() {
var intScrollTopNow = jBody.scrollTop();
if (window.Playlist && Playlist.GetInstance && Playlist.GetInstance() !== null && Playlist.GetInstance().Current !== null) {
self.status = 'Aborted due to video play';
return false;
}
intScrollCount = (intScrollTopNow === intScrollTop ? intScrollCount - 1 : intInitialScrollCountValue);
intScrollTop = intScrollTopNow;
if (intScrollCount < 1) {
self.status = 'Reloading page now';
intScrollCount = -1;
location.reload(true);
}
else {
self.status = 'At least ' + intScrollCount + ' minutes until next refresh.';
}
setTimeout(checkscrollposition,60000);
};
refreshScript = $('script[src*="min/hub/head"]').size();
if ( refreshScript > 0) {
checkscrollposition();
}
} catch(e){
self.status = 'Error: ' + e;
}
return self;
}(jQuery));
 
window.TSNWidget=window.TSNWidget||{};
TSNWidget.MobileTest=function(a,c,b,e){(new function(){this.cookieTest=function(a){a=(a=/(?:^|;\s*)(prefermobile=(true|false))/.exec(a))&&3===a.length?a[2]:null;return"true"===a?!0:"false"===a?!1:null};this.urlTest=function(a){a=(a=/(?:^|&|\?)(mobile=(true|false))(?:$|&)/.exec(a))&&3===a.length?a[2]:null;return"true"===a?!0:"false"===a?!1:null};this.isMobile=function(a){var b=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i;return/android.+(mobile|nexus)|avantgo|bada\/|blackberry|\bbb10|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||
b.test(a.substr(0,4))};this.isHome=function(a){return"/"===a};this.setCookie=function(a,b){a.cookie="prefermobile="+(b?"true":"false")};this.shouldRedirect=function(a,b){return null===a&&null===b};this.shouldShowPrompt=function(a,b){return null===a&&!1===b};this.redirectToMobile=function(){a.location="http://m.tsn.ca/"};this.start=function(){var h=b.userAgent||b.vendor||a.opera,d=this.cookieTest(c.cookie),l=this.urlTest(e.search);this.isHome(e.pathname)&&this.isMobile(h)&&(this.shouldRedirect(d,l)?
this.redirectToMobile():this.shouldShowPrompt(d,l)&&(h=a.confirm("Set the full web site as your default version?"))&&this.setCookie(c,!1))};return this}).start()}(window,document,navigator,location);TSNWidget.BrickSponsorRotator=function(){var a={},c,b,e,h=0,d,l=function(){b.delay(d).fadeOut("fast",function(){var a=h-e;-a>parseInt(b.height(),10)-e&&(a=0);h=a;b.css("margin-top",h);b.fadeIn("fast",function(){l()})})};a.rotate=function(a,k,j){c=$("#"+a);d=1E3*j;b=c.find("."+k);e=c.height();l()};return a}(jQuery);
TSNWidget.RadioRotator=function(a){var c={},b=0,e,h=function(b){a(e.children()[b]).show();a(e.children()[b]).css("margin-left",500)},d=function(){a(e.children()[b]).fadeOut("fast",function(){b=parseInt(b+1,10);b>=e.children("img").size()&&(b=0);var c=a(e.children()[b]);h(b);c.fadeIn("fast");c.animate({marginLeft:0},"fast")})};c.rotate=function(b,c){e=a("#"+b);var k=0;a("#"+b).children("img").each(function(){h(k);k++});a(e.children()[0]).show().css("margin-left",0);setInterval(d,1E3*c)};return c}(jQuery);
TSNWidget.Twitter=function(a){var c={},b=/^\s*#\w+/,e=null,h=null,d=null,l=null,g=null,k=null,j=null,p=null,q=null,n=null,t=20,w=null,s=0,v=(new Date).getTime(),r=null,u=5,m=!1,x=!0;c.tweetIndex=0;c.maxHeight=500;c.show=function(){j.removeClass("hidden");p.addClass("hidden")};c.formatTweetText=function(a,b){var c;c="@"+b+": "+a;return c=c.replace(/(http:\/\/\S*)/,'<a href="$1" onclick="window.open(this.href);return false;" class="external">$1</a>').replace(/(\#(\w+))/g,'<a href="http://twitter.com/#!/search?q=%23$2" onclick="window.open(this.href);return false;" class="external">$1</a>').replace(/(\@(\w+))/g,
'<a href="http://twitter.com/$2" onclick="window.open(this.href);return false;" class="external">$1</a>')};c.renderTweet=function(a,b){var d=[],e=v-a[3],f,g;if(document.getElementById("tweet"+a[0]))return null;0>e&&(e=0);g=Math.floor(e/864E5);f=Math.floor(e/36E5);e=Math.floor(e/6E4)%60;f=0<g?g+" day"+(1===g?" ago":"s ago"):0<f?f+" hour"+(1===f?" ago":"s ago"):1<e?e+" minute"+(1===e?" ago":"s ago"):"Moments ago";d.push('<div class="tweet'+(6===u&&null!==r?" hiddentweet":"")+'" id="tweet'+a[0]+'" style="min-height:70px">');
d.push('<img src="'+b+'" width="48" height="48" style="float: right; padding-left: 3px; padding-top: 17px;" alt="" />');d.push("<h2>"+f+"</h2>");d.push("<p>"+c.formatTweetText(a[4],a[2])+"</p>");d.push("</div>");return d.join("")};c.renderFilter=function(){var b=h.split(/[\s,]+/),e,g=function(){var b=a(this).text();j.empty();w=null;x=!0;"Show all"===b?(q.text("Showing All"),d=h,c.loadTSN()):(q.text("Showing "+b),c.loadTSN(b));c.toggleAuthorList()};n.empty();if(void 0!==h){n.append(a('<div class="tweetauthor">Show all</div>').bind("click",
g));for(e=0;e<b.length;e++)n.append(a('<div class="tweetauthor">'+b[e]+"</div>").bind("click",g))}};c.loadTSN=function(b){var g=[];if(null===e)throw"TSNWidget.Twitter requires you specify a place to insert tweet.";void 0!==b?(w=null,d=b,g.push("callback=TSNWidget.Twitter.replace")):g.push("callback=TSNWidget.Twitter.insert");w=null===w?0:w+1;g.push("page="+w);g.push("tweetsperpage="+t);void 0!==d&&g.push("authors="+d);a("body").append('<script type="text/javascript" src="http://www2.tsn.ca/widgets/Twitter/twitter.ashx?'+
g.join("&")+'">\x3c/script>');c.maxHeight=j.parent().height();return!0};c.toggleAuthorList=function(){n.toggle()};c.loadTwitter=function(){var b="http://search.twitter.com/search.json?q=%23"+l.replace("#","")+"&callback=TSNWidget.Twitter.loadsearch&rand="+Math.floor(999999999*Math.random()).toString();null!==r&&void 0!==r&&(b+="&since_id="+r);a("body").append('<script type="text/javascript" src="'+b+'">\x3c/script>')};c.createTSNTweetbox=function(b){h=d=b;u=5;void 0!==h&&h.split&&(q.show(),c.renderFilter());
a(function(){setTimeout(function(){c.loadTSN()},1E3)})};c.createTwitterTweetbox=function(b){l=b;u=6;a(function(){setTimeout(function(){c.loadTwitter()},1E3)})};c.create=function(d,l,m,h,f){e=d;t=l||t;d='<div class="navigation"><span class="button navigation activeauthor">Filter by author</span><span class="button navigation authorlist"></span></div><div class="tweetwindow"><div class="tweetloading"><img src="http://images.tsn.ca/images/silver/common/icons/loading_animated.silver.gif"width="16" height="16" alt="Loading..." /></div><div class="tweetcontents hidden"></div></div><div class="navigation footer"><a href="{calltoactionurl}">{calltoactiontext}</a></div>'.replace("{calltoactionurl}",
f||"/twitter/").replace("{calltoactiontext}",h||"More TSN on Twitter");g=a(e);g.html(d);k=g.find(".tweetwindow");j=g.find(".tweetcontents");p=g.find(".tweetloading");q=g.find(".activeauthor").hide().click(c.toggleAuthorList);n=g.find(".authorlist").hide();g.find(".tweetfilter");g.find(".button.filter");void 0!==m&&b.test(m)?c.createTwitterTweetbox(m):c.createTSNTweetbox(m)};c.addTweets=function(b){var d,e,g,f,l,m,k,h=function(){l.remove();a("div.hiddentweet",j).removeClass("hiddentweet");a(".tweet:gt(99)",
j).remove()};a(".loading",j).remove();try{if(d=b.tweets,e=b.images,0<d.length){m=!1;for(f=0;f<d.length;f++)g=c.renderTweet(d[f],e[d[f][1]]),null!==g&&(6===u?j.prepend(g):j.append(g),m=!0);m?5===u?j.append('<div class="tweet loading"><b>Loading more tweets...</b></div>'):null!==r&&(a(".hiddentweet:gt(49)",j).remove(),k=a("div.hiddentweet",j).size(),0<k&&(l=a('<div class="tweet waiting">Click for '+k.toString()+(1===k?" new tweet":" new tweets")+"</div>").click(h),a("div.waiting",j).remove(),j.prepend(l))):
x=!1}else x=!1}catch(q){}};c.watcher=function(){var a=k.scrollTop(),b=k.height(),d=j.height(),g=(new Date).getTime();x&&(a>d-2*b&&5E3<g-s)&&(s=g,c.loadTSN())};c.startWatcher=function(){!1===m&&(m=!0,k.bind("scroll",function(){setInterval(c.watcher,1E3);k.unbind("scroll")}))};c.insert=function(a,b){c.show();c.addTweets(a);!1!==b&&c.startWatcher()};c.replace=function(a){j.empty().scrollTop(0);c.addTweets(a)};c.loadsearch=function(a){var b={tweets:[],images:{}},d,g;if(void 0!==a.results){for(g=0;g<a.results.length;g++)d=
a.results[g],b.tweets.push([d.id.toString(),d.from_user_id,d.from_user,(new Date).getTime(d.created_at.replace(/([\-+]\d\d\d\d)/,"GMT$1")).toString(),d.text]),b.images[d.from_user_id]=d.profile_image_url;0<b.tweets.length&&(c.insert(b,!1),r=a.max_id)}setTimeout(c.loadTwitter,6E4)};return c}(jQuery);
TSNWidget.Scores=function(a){var c={},b={},e="NHL",h=/pre-?event/i,d=/\d:\d\d\s*(am|pm)/i,l=!1,g=!1,k="",j=null,p=null,q=0,n=a("<div>").addClass("sbloading"),t=a("<div>").addClass("sbheader"),w=a("<div>").addClass("sbcontainer").append(n),s=a("<div>").addClass("sbfooter"),v,r,u,m=function(){var a={};this.addListener=function(b,d){a[b]=a[b]||[];a[b].push(d)};this.broadcast=function(b,d){var c=a[b],g;if(c)for(g=0;g<c.length;g++)c[g](d)};return this},x=function(b,f){var d=this,c="away"===b?"Away":"Home",
g=a("<tr>"),e=a('<td class="score">');d.winning=!1;d.id=Math.random();var l=function(b){d.hub=a(c+"Hub",b).text();d.display=a(c+"Display",b).text();d.score=a(c+"Score",b).text()};d.update=function(b,f,c){c=!0===c;l(b);a(".score",f).text(d.score);f.toggleClass("winner",c)};d.render=function(){g.addClass(d.winning?"winner":"");e.text(d.score);g.append(a("<td>").text(d.display)).append(e);return g};l(f);return d},z=function(b){var f=this,c=b.toLowerCase(),g,e,l,k,m,j,q,n,u,z,w,p;f.id=null;f.type=null;
f.status=null;f.summary=null;f.message=null;f.hasgameday=null;f.hasboxscore=null;f.awayteam=null;f.hometeam=null;f.starttime=null;var s=function(){window.location="/"+c+"/scores/gameday/?hubname="+f.hometeam.hub},v=function(){window.location="/"+c+"/scores/gamelog/?id="+f.id},r=function(){var a="wjr"===c.toLowerCase()?"world_jrs":c;window.location="/"+a+"/scores/boxscore/?id="+f.id},t=function(){var a=c.toLowerCase();"nhl"===a?window.open("http://gametracker-nhl.tsn.ca/"+f.nhlid,"gametracker"):window.open("http://gametracker-"+
a+".tsn.ca/game/"+f.id,"gametracker")},B=function(b){g=b;e=a("<div>").addClass("game");l=a("<div>").text(f.ispregame&&f.hasstarttime?f.starttime:f.summary).addClass("summary");q=f.awayteam.render();j=f.hometeam.render();m=a("<table>").append(a("<tbody>").append(q).append(j));u=a("<span>").text(f.message).addClass(null!==f.messaging?"":"suppressed");p=a("<span>").addClass("link").text("Gameday").addClass(f.hasgameday&&f.ispregame?"":"suppressed").click(s);k=a("<span>").addClass("link").text("GameTracker").addClass(f.hastracker?
"":"suppressed").click(t);z=a("<span>");"ncaa"!==c.toLowerCase()&&"wjr"!==c.toLowerCase()&&z.addClass("link").text("Log").addClass(f.hasboxscore&&!f.ispregame?"":"suppressed").click(v);w=a("<span>").addClass("link").text("Boxscore").addClass(f.hasboxscore&&!f.ispregame?"":"suppressed").click(r);n=a('<div class="messaging">').append(n).append(p).append(z).append(w).append(k);g.append(e.append(l).append(m).append(n))},C=function(b){f.type=a("GameType",b).text();f.status=a("GameStatus",b).text();f.summary=
a("GameSummary",b).text();f.message=a("GameMessage",b).text();f.hasgameday="true"===a("GameDay",b).text();f.hastracker="true"===a("GameTracker",b).text();f.hasboxscore="true"===a("Boxscore",b).text();f.awayteam=new x("away",b);f.hometeam=new x("home",b);f.awayteam.winning=parseInt(f.awayteam.score,10)>parseInt(f.hometeam.score,10);f.hometeam.winning=parseInt(f.awayteam.score,10)<parseInt(f.hometeam.score,10);f.ispregame=h.test(f.status);f.hasstarttime=d.test(f.summary);var c=Date.parse(a("GameDateGMT",
b).text()),g=new Date;g.setTime(c);var c=g.getHours(),e=12>c,g=g.getMinutes(),c=c%12;f.starttime=(0===c?12:c).toString()+":"+(10>g?"0"+g.toString():g.toString())+["AM","PM"][e?0:1];f.nhlid=a("NHLEventId",b).text()},L=function(b,d){var c=a(d);C(c);l.text(f.ispregame&&f.hasstarttime?f.starttime:f.summary);u.text(f.message);f.awayteam.update(c,q,f.hometeam.score<f.awayteam.score);f.hometeam.update(c,j,f.hometeam.score>f.awayteam.score)};f.setData=function(b){b=a(b);try{return f.id=a("GameCode",b).text(),
C(b),f.render=B,f.update=L,f}catch(d){f.render=function(){}}};return f},B=function(b){var f=this;b=a(b);var d={},c=a("<span>"),m=a("<div>"),h=0;f.gamescontainer=a("<div>");f.id=b.attr("id");f.isActive=f.id===e;f.xmlfile=a("xmlFile",b).text();f.label=a("tabName",b).text();f.ison="true"===a("isOn",b).text();f.lastupdate=null;f.requiresupdate=!0;f.data=null;var s=function(a){!0===a?v.toggleClass("open","open"===k).toggleClass("closed","closed"===k):v.removeClass("open").removeClass("closed")},r=function(){clearTimeout(p);
0<h&&a("div.nogames",m).remove();if("open"===k||g){if(q=0,a("div.game:not(.nogames)",m).each(function(b,d){a(d).css("display","block")}),a.browser.msie){var b=a("div.game",m);setTimeout(function(){b.css("marginRight","1px"===b.css("marginRight")?"0px":"1px")},50)}}else a("div.game:not(.nogames)",m).each(function(b,d){a(d).css("display",b===q?"block":"none")}),1<h&&(q=(q+1)%h,p=setTimeout(r,5E3))},x=function(){a.ajax({url:"/datafiles/xml/today/"+f.xmlfile,success:function(b){var c=a(b),e;if(void 0!==
b)if(n.hide(),b=c.find("Games"),s(1<b.length),!g&&""===k&&(k="closed",s(1<b.length)),0===b.length){for(e in d)d.hasOwnProperty(e)&&(d[e]=void 0);a("div.game",m).remove();m.append(a("<div>").addClass("game nogames").text("NO GAMES SCHEDULED"));s(!1);h=0}else for(c=h=0;c<b.length;c++)e=(new z(f.label)).setData(b[c]),void 0===d[e.id]?(d[e.id]=e,d[e.id].render(m)):d[e.id].update(m,b[c]),h++;clearTimeout(j);r();j=setTimeout(x,6E4)},ifModified:!0,cache:!0})};b=function(){if(e===f.id)return!1;e=f.id;clearTimeout(p);
u.broadcast("setasactive")};u.addListener("setasactive",function(){clearTimeout(j);e===f.id?(s(1<h),q=0,f.isActive=!0,c.toggleClass("active",!0),m.show(),x(),r()):(f.isActive=!1,c.toggleClass("active",!1),m.hide())});u.addListener("openclose",function(){if(e!==f.id||2>h)return!1;k="open"===k?"closed":"open";v.toggleClass("closed","closed"===k).toggleClass("open","open"===k);r()});try{if(f.ison&&(l||e===f.id))l&&t.append(c.text(f.label).unbind().click(b).bind("selectstart",function(){return!1})),w.append(m),
f.isActive?(m.show(),c.addClass("active"),x()):(c.removeClass("active"),m.hide())}catch(B){}return f},C=function(){q=0;u.broadcast("openclose")};c.loadconfig=function(d){d=a(d);var c,e,m;try{if(void 0===b.loaded){c=d.find("sbTab");for(m=0;m<c.length;m++)e=new B(c[m]),b[e.id]=e;b.loaded=!0;v=a("div#tsnLiveSB").toggleClass("showfull",g);v.empty().append(t).append(w).append(s)}g||s.unbind().click(C)}catch(l){void 0!==window.errorlist&&window.errorlist.push("TSNWidget.Scores: Scores config file could not be parsed. Doing nothing.")}};
r=function(){a.ajax({url:"/media/flash/scoreboard9/config.xml",success:c.loadconfig,cache:!0})};c.replaceIfNeeded=function(a,b,d,c){a=void 0!==a&&!0===a.success;e=b;l="true"===d;g="true"===c;u=new m;l&&t.css("height",36);a||r()};return c}(jQuery);
TSNWidget.TVScheduleJSONP=function(a){var c={},b=0,e=[],h,d=a("<div>").addClass("nav"),l=a("<div>").addClass("content"),g=new Date,k={backgroundColor:"#9c0300"},j={backgroundColor:"#6A7073"},p={opacity:1},q={opacity:0},n,t=null,w=!1,s=function(){var a=b,d;if(null!==t)for(d=b+1;d<=b+e.length;d++)if(a=d%e.length,e[a].rotates){b=a;break}n.broadcast("update");t=setTimeout(s,1E4)},v=function(){var a={};this.addListener=function(b,d){a[b]=a[b]||[];a[b].push(d)};this.broadcast=function(b,d){var c=a[b],g;
if(c)for(g=0;g<c.length;g++)c[g](d)};return this},r=function(b,d,c,g){var e=this,l=b[0],f,h,k,j;e.starttime=new Date(b[1]);e.endtime=e.starttime;b=e.starttime.getHours();k=e.starttime.getMinutes();j=(0===b?"12":(12<b?b-12:b).toString())+":"+(10>k?"0"+k.toString():k.toString())+(11<b?"PM":"AM");n.addListener("render",function(){h=a("<th>").text(j);f=a("<tr>").append(h).append(a("<td>").append(a("<div>").text(l)));c>=g.startingitem&&c<=2+g.startingitem&&d.append(f)});n.addListener("update",function(){var a=
new Date;e.starttime<a&&a<e.endtime?(h.text("ON NOW"),f.addClass("onnow")):(h.text(j),f.removeClass("onnow"))});return e},u=function(c,e){var h=this,u=c.label,v=c.url,I=c.programs,f=a("<div>").addClass("navitem").text(u),D=a("<table>"),E=[],y;h.index=e;h.rotates=c.rotates;var J=function(){clearTimeout(t);t=setTimeout(s,1E4);b=h.index;n.broadcast("update")},A=function(){if(w)return!1;location.href=v},K=function(){w=!0;b===h.index?location.href=v:J();n.broadcast("update")};n.addListener("render",function(){d.append(f.bind("touchstart",
K).bind("click",A).hover(J,null)).css(j);l.append(D.css(q));h.startingitem=E[1].starttime<g?1:0});n.addListener("update",function(){f.css(b===h.index?k:j);D.stop().animate(b===h.index?p:q,"fast",function(){this.style&&(this.style.filter&&/(opacity=100)/.test(this.style.filter))&&(this.style.filter="")})});for(y=0;y<I.length;y++)u=new r(I[y],D,y,h),E.push(u),0!==y&&(E[y-1].endtime=u.starttime);return h};c.loadJson=function(a){var b,c;e=[];try{for(c=0;c<a.length;c++)b=new u(a[c],c),e.push(b);n.broadcast("render");
s();h.css("border","1px solid #fff").append(d,l)}catch(g){void 0!==window.errorlist&&window.errorlist.push("TSNWidget.TVSchedule: Schedule file could not be parsed. Hiding schedule.")}};c.create=function(){n=new v;h=a("div#tsnTvSchedule");a.getScript("http://www2.tsn.ca/Datafiles/JSON/TVSchedule/TSNWidget.TVSchedule.JSONP.js")};return c}(jQuery);
TSNWidget.HeadlineReplacement=function(a){var c={},b=[],e=function(b,c){var e=a(c),g,k,j;e.css("opacity",0);j=a("span",e);k=j.text();j.empty();g=e.text();j=a("<div>").addClass("headlineReplacementContainer");g=a("<div>").addClass("headlineReplacementHeadline").text(g);k=a("<div>").addClass("headlineReplacementSubhead").text(k);j.append(g).append(k);e.after(j);e.remove();var p;p=g.height();k.height();e=g.parent().width()/g.width();p*=e;g.css({fontSize:e+"em",top:0,lineHeight:Math.floor(15*e+"px")});
k.css("top",Math.floor(p)-2);j.height(g.height()+k.height()+7)};c.replaceIfNeeded=function(c){if(!(void 0!==c&&!0===c.success)&&window.navigator&&navigator.platform&&/(ipad|iphone|ipod)/i.test(navigator.platform))b=a("div#tsnH1"),a.each(b,e);else try{/MSIE /.test(navigator.userAgent)&&setTimeout(function(){a("#tsnMain div.imgFirst h2").css("borderWidth","0px")},300)}catch(d){}};return c}(jQuery);
TSNWidget.MobileScroll=function(a){var c={},b=[],e=!1,h=function(a){var b=a.scrollHeight,c=a.clientHeight,e=0,h=[],p,q,n=function(a){a.preventDefault()};a.style.position="relative";a.addEventListener("touchstart",function(a){p=a.touches[0].pageY;q=0;0<h.length?(a=parseInt(h[0].style.marginTop,10),isNaN(a)&&(a=0),e=a):e=0;document.addEventListener("touchstart",n,!1);document.addEventListener("touchmove",n,!1)},!1);a.addEventListener("touchend",function(){e-=q;document.removeEventListener("touchstart",
n,!1);document.removeEventListener("touchmove",n,!1);q=p=null},!1);a.addEventListener("touchmove",function(a){var d,n=p-a.touches[0].pageY;q=n;d=e-q;0<d&&(q=d=0);d<c-b&&(d=c-b,q=0);d=d.toString()+"px";for(n=0;n<h.length;n++)h[n].style.marginTop=d;a.preventDefault();return!1},!1);var t=a.childNodes;for(a=0;a<t.length;a++)void 0!==t[a].style&&h.push(t[a]);return this};c.init=function(){var a,c;if(!e&&void 0!==document.getElementsByClassName&&void 0!==window.ontouchstart){a=document.getElementsByClassName("TSNWidgetMobileScrollable");
for(c=0;c<a.length;c++)b.push(new h(a[c]))}e=!0};a(c.init);return c}(jQuery);
TSNWidget.LiveRadioButton=function(a){var c={},b=!1,e=100,h=void 0!==window.navigator&&/i(pod|phone|pad)/i.test(navigator.platform),d,l=function(){d.css({background:"transparent url(http://images.tsn.ca/images/silver/radio/TSN_Media.LiveRadioButton.sprite.png) 0 -59px no-repeat"}).stop().animate({height:147},200)},g=function(){d.stop().animate({height:58},100,function(){d.css({background:"transparent url(http://images.tsn.ca/images/silver/radio/TSN_Media.LiveRadioButton.sprite.png) 0 0 no-repeat"})})},k=
function(){b?(g(),b=!1):(l(),b=!0)},j=function(){0<=this.className.indexOf("winnipeg")?location.href="/Winnipeg/":0<=this.className.indexOf("toronto")?location.href="/Toronto/":0<=this.className.indexOf("montreal")?location.href="/Montreal/":h?k():location.href="/radio/";return!1},p=function(){var a=null;0<=this.className.indexOf("winnipeg")?a="/Winnipeg/":0<=this.className.indexOf("toronto")?a="/Toronto/":0<=this.className.indexOf("montreal")&&(a="/Montreal/");null!==a&&(window.open(a+"listen/",
"liveRadio","width=776,height=685,toolbar=0,status=0,scrollbars=0,resizable=1"),location.href=a);return!1};c.init=function(){d=a("#tsnRadio");if(0===d.size())return 0<e--&&setTimeout(c.init,100),!1;d.parent().css("zIndex",14);a("a.radio",d).click(j);a("a.winnipeg.link",d).click(j);a("a.toronto.link",d).click(j);a("a.montreal.link",d).click(j);a("a.winnipeg.listen",d).click(p);a("a.toronto.listen",d).click(p);a("a.montreal.listen",d).click(p);h?d.click(k):d.hover(l,g);return!0};return c}(jQuery);
TSNWidget.CoverItLive=function(a){a(function(){var c=a("div#coveritlive:eq(0)"),b=c.attr("title");b&&c.html('<iframe width="430" scrolling="no" height="550" frameborder="0" allowtransparency="allowtransparency" src="{0}"></iframe>'.replace("{0}",b))})}(jQuery);
var TSNIDeviceController=function(a,c){var b=this,e,h,d,l,g,k,j;TSNIDeviceController.__instance=b;var p=function(){k.toggleClass("playbutton",!1).toggleClass("waiting",!0).hide();try{b.status="error encountered but requesting new clip",j.IsAd||alert("Sorry. It looks like this clip can't be played at this time. Please try again later.")}catch(a){alert(a)}},q=function(){null!==d.error&&d.readyState===d.HAVE_NOTHING&&Playlist.GetInstance().Next()},n=function(){setTimeout(function(){Playlist.GetInstance().Next()},
5E3)},t=function(){g.css({display:"block",visibility:"hidden"});h.css({display:"block",visibility:"visible"});k.toggleClass("playbutton",!1).toggleClass("waiting",!0).hide();b.status="playing"},w=function(){},s=function(){b.status="requesting new clip";Playlist.GetInstance().Next()},v=function(){b.status="paused"};b.Loading=function(){k.toggleClass("playbutton",!1).toggleClass("waiting",!0).show()};b.getTimelinePosition=function(){return void 0!==d&&!isNaN(d.currentTime)?d.currentTime:-1};b.Wait=
function(){try{b.lastcommand="Wait",d.stop(),b.status="stopped"}catch(a){}};b.Play=function(a){j=a;b.lastcommand="Play";var c;c=((a=/(\d{4}\/\d{2}\/\d{2}\/[^\.]*\.(mp4|m4u))/i.exec(j.Url))?a[1]:!1)||"error";if("error"===c)return setTimeout(n,200),!1;l.attr("src","data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");k.toggleClass("playbutton",!1).toggleClass("waiting",!0).hide();j.IsAd?(l.unbind().click(function(){window.open(j.Permalink,"TSNAd")}),a=j.Url):a="http://iphone.tsn.ca.edgesuite.net/mobile/"+
c;h.attr("src",a).css({display:"block",visibility:"visible"});h[0].load();h[0].play();b.lastmediaclip=c;b.status="playing video";return!0};b.Destroy=function(){b.lastcommand="Destroy";$("video",e);d.removeEventListener("error",p);d.removeEventListener("playing",t);d.removeEventListener("ended",s);d.removeEventListener("pause",v);d.removeEventListener("loadeddata",w);e.empty().removeClass("TSNWidget_VideoPlayer_player");b.lastcommand="destroy";b.status=null;delete TSNIDeviceController.__instance};
b.startPlaylist=function(){b.lastcommand="startplaylist";l.attr("src","data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==").css("visibility","hidden").unbind().height(l.height()-30);k.toggleClass("playbutton",!1).toggleClass("waiting",!0).show();h.trigger("click");Playlist.GetInstance().Next();b.status="waiting for next clip after startPlaylist"};b.Format=Format.FlashVideo;b.ipadReplacement=!0;b.status=null;b.lastcommand="";b.lastmediaclip=null;b.doAutoplay=void 0===
c||null===c||c.constructor!==String||10>c.length;var r=function(a){a="We're sorry. There was an error playing this clip"+(void 0!==a.length&&void 0!==a?":\n"+a:".");alert(a)};b.lastcommand="init";/dev/i.test(location.host);null===b.status&&(Interface.DisplayPlayerControllerError=r,r=Interface.GetInstance().PlayerViewer.id,r=$("#"+r),h=$('<video width="'+r.width()+'" height="'+r.height()+'" controls>'),l=$("<img>").attr("src","data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),
k=$("<div>").addClass("overlay playbutton").click(b.startPlaylist),e=$('<div class="player"></div>').append(l).append(h).append(k),b.doAutoplay?($("img",e).attr("data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),$("video",e).css("display","block")):(l.attr("src",c),h.css("display","none")),r.append(e).addClass("TSNWidget_VideoPlayer_player"),d=$("video",r)[0],d.addEventListener("error",p),d.addEventListener("playing",t),d.addEventListener("ended",s),d.addEventListener("pause",
v),d.addEventListener("loadeddata",w),e=$("div.TSNWidget_VideoPlayer_player"),g=$("img",e),b.doAutoplay&&setTimeout(function(){Playlist.GetInstance().Next();b.lastcommand="autoplay"},500),b.status="initialized",$("div#pagecontrols p").remove(),setInterval(q,1E3));return b};TSNIDeviceController.GetInstance=function(){void 0===TSNIDeviceController.__instance&&(TSNIDeviceController.__instance=new TSNIDeviceController);return TSNIDeviceController.__instance};
TSNWidget.CommunityBrick=function(){var a={},c=-1,b={},e,h,d,l,g,k,j,p,q,n,t,w="",s="",v=0,r=!1,u="http://www2.tsn.ca/widgets/Twitter/twitter.ashx?tweetsperpage="+(50).toString()+"&callback=TSNWidget.CommunityBrick.loadTwitter&",m=1,x,z,B,C=function(a){window.jQuery&&jQuery.cookie&&(r=!0,jQuery.cookie("TSNWidget_Community",a,{expires:7,domain:location.host,path:"/"}))},I=function(){window.jQuery&&jQuery.cookie&&(r=!1,jQuery.cookie("TSNWidget_Community","",{expires:-1,domain:location.host,path:"/"}))},
f=function(){var a=document.createElement("script"),b=window.tsnFlashTimeStamp||"1";1===m&&(m=2,b=u+"&page="+v.toString()+"&rand="+b.substr(0,b.length-1),""!==s&&(b+="&authors="+s),a.type="text/javascript",a.src=b,document.getElementsByTagName("head")[0].appendChild(a))},D={},E,y,J=!1,A,K=0;D.filter=function(){var a=j.childNodes[j.selectedIndex].innerHTML;p.firstChild.innerHTML="";s="All"===a?w:a;m=1;K=v=0;f()};var Q=function(a,b){window.open(a,"twitter","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height="+
(b||"420"))},W=function(){A.onscroll=null;setInterval(function(){var a=A.scrollHeight,b=A.parentNode.scrollHeight;A.scrollTop>a-2*b&&(a>b&&K<a)&&(v++,K=a,f())},1E3)},X=function(a){Q("http://twitter.com/intent/user?screen_name="+a);return!1},Y=function(a){Q("http://twitter.com/intent/retweet?tweet_id="+a);return!1};D.render=function(a){var b="",c,d=[];c=function(a,b){a=a.toLowerCase();b=b.toLowerCase();return a>b?1:-1};TSNWidget.CommunityBrick.retweet=Y;TSNWidget.CommunityBrick.follow=X;E=a.images;
y=a.tweets;m=50===y.length?1:3;for(a=0;a<y.length;a++){var d=b,e=y[a],b=e[0],f=E[e[1]],g=e[2],h=e[3],e=e[4],h=(new Date).getTime()-h,k="Moments ago",l=void 0,n=void 0,q=void 0;!isNaN(h)&&0<h&&(n=Math.floor(h/864E5),q=Math.floor(h/36E5),l=Math.floor(h/6E4),0<n?k=n.toString()+" day"+(1===n?"":"s")+" ago":0<q?k=q.toString()+" hour"+(1===q?"":"s")+" ago":0<l&&(k=l.toString()+" minute"+(1===l?"":"s")+" ago"));h=k;e=e.replace(/(http:\/\/\S*)/,'<a href="$1" onclick="window.open(this.href);return false;" class="external">$1</a>').replace(/(\#(\w+))/g,
'<a href="http://twitter.com/#!/search?q=%23$2" onclick="window.open(this.href);return false;" class="external">$1</a>').replace(/(\@(\w+))/g,'<a href="http://twitter.com/$2" onclick="window.open(this.href);return false;" class="external">$1</a>');b='<div class="tweet author{2}"><img src="{1}" width="48" height="48" alt="{2}" /><div class="elapsedTime">{3}</div><div class="text"><a target="_blank" href="http://twitter.com/{2}">{2}</a>: {4}</div><div class="tools"><img src="http://si0.twimg.com/images/dev/cms/intents/bird/bird_gray/bird_16_gray.png" width="16" height="16" alt="Twitter" /><a href="http://twitter.com/intent/retweet?tweet_id={5}" onclick="return TSNWidget.CommunityBrick.retweet(\'{5}\')" class="retweet">Retweet</a> | <a href="http://twitter.com/intent/user?screen_name={2}" onclick="return TSNWidget.CommunityBrick.follow(\'{2}\')" class="follow">Follow</a></div></div>'.replace(/\{0\}/g,
g).replace("{1}",f).replace(/\{2\}/g,g).replace("{3}",h).replace(/\{5\}/g,b).replace("{4}",e.replace("$","&#36;"));b=d+b}if(0===v)if(!1===J){p.innerHTML='<div class="scroller TSNWidgetMobileScrollable">{0}</div><a href="/twitter/" class="twitterlink">See all Personalities on Twitter</a>'.replace("{0}",b.replace("$","&#36;"));b=document.createElement("div");b.className="label";b.innerHTML="<b>Filter by personality:</b>";j=document.createElement("select");d=w.split(",");d.sort(c);d.unshift("All");for(a=
0;a<d.length;a++)c=document.createElement("option"),d[a]===s&&(c.selected=!0),c.innerHTML=d[a],j.appendChild(c);j.onchange=D.filter;b.appendChild(j);p.appendChild(b);A=p.firstChild;A.onscroll=W;J=!0}else A.innerHTML=b;else A.innerHTML+=b};var R={},S=[],F,T,M,U,H,Z=function(a){var b=new Date;a=T[a];var c=a[0],d="http://images.tsn.ca/images/stories/mobile/"+c+".jpg",e=M[c],f=e[0],e=e[1],g=1E5>parseInt(c,10)?"feature":"story",h="/"+e+"/"+g+"/?id="+c+"&ref=communitywidget",k=U[a[1]][0],l=a[3],j=a[4],
n=a[5],q=0<=parseInt(n,10)?"+":"-",m=a[6].replace(/</g,"&tl;");b.setTime(a[2]);this.render=function(){var a=document.createElement("div"),b;a.className="comment";b='<img src="{0}" width="83" height="57" /><div class="link"><a href="{1}" class="headline">{2}</a></div><div class="score" title="{3} upvotes, {4} downvotes">{5}{6} Rating - <b>{7}</b></div><div class="text">{8}</div>'.replace("{0}",d).replace("{1}",h).replace("{2}",f.replace("$","&#36;")).replace("{3}",l).replace("{4}",j).replace("{5}",
q).replace("{6}",n).replace("{7}",k.replace("$","&#36;")).replace("{8}",m.replace("$","&#36;"));a.innerHTML=b;return a}},aa=function(a){var b="http://images.tsn.ca/images/stories/mobile/"+a+".jpg",c=M[a],d=c[0],e=c[1],f=c[2],c=1E5>parseInt(a,10)?"feature":"story",g="/"+e+"/"+c+"/?id="+a+"&ref=communitywidget";this.render=function(){var a=document.createElement("div"),c;a.className="comment story";c='<img src="{0}" width="83" height="57" /><div class="link"><a href="{1}" class="headline">{2}</a></div><div class="score"><b>{3} comments</b></div>'.replace("{0}",
b).replace("{1}",g).replace("{2}",d.replace("$","&#36;")).replace("{3}",f);a.innerHTML=c;return a}};R.render=function(a){var b,c;T=a.comments;M=a.articles;U=a.users;F=S=a.topstories;b=document.createElement("div");b.className="label";b.innerHTML="<b>Top commented stories</b>";a=document.createElement("div");a.className="commentscontainer TSNWidgetMobileScrollable";H=document.createElement("div");a.appendChild(H);c=document.createElement("div");c.className="invite";c.innerHTML='<a href="#">Register</a> to join the <a href="/community/">TSN Community</a>';
n.appendChild(b);n.appendChild(a);n.appendChild(c);H.innerHTML="";H.scrollTop=0;if(F===S)for(a=0;a<F.length;a++)H.appendChild((new aa(F[a])).render());else for(a=0;a<F.length;a++)H.appendChild((new Z(F[a])).render());return!0};var L=function(a){p.style.display="twitter"===a?"block":"none";q.style.display="facebook"===a?"block":"none";n.style.display="yourcall"===a?"block":"none"};z=function(a){void 0===b.twitter&&f();!0!==a&&(e.toggle("off"),C("twitter"));L("twitter");l.className="navigation twitter";
b.twitter=!0};a.loadTwitter=function(a){D.render(a)};a.loadYourcall=function(a){R.render(a)};x=function(a){!0!==a&&(e.toggle("off"),C("facebook"));void 0===b.facebook&&(q.innerHTML='<iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Ftsn&amp;width=420&amp;colorscheme=light&amp;show_faces=false&amp;border_color&amp;stream=true&amp;header=false&amp;height=270" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:420px; height:270px;" allowTransparency="true"></iframe>');
L("facebook");l.className="navigation facebook";b.facebook=!0};B=function(a){var c,d=window.tsnFlashTimeStamp||"1";void 0===b.yourcall&&(c=document.createElement("script"),c.type="text/javascript",c.src="http://www2.tsn.ca/datafiles/json/yourcall/TSNWidget.CommunityBrick.yourcall.js?"+d.substr(0,d.length-1),document.getElementsByTagName("head")[0].appendChild(c));!0!==a&&(e.toggle("off"),C("yourcall"));L("yourcall");l.className="navigation yourcall";b.yourcall=!0};a.advanceTab=function(){t||(t=[{onclick:z},
{onclick:x},{onclick:B}]);c++;t[c%t.length].onclick(!0)};a.render=function(b,c){var f,j,m;g=document.getElementById(b);s=w=c||"";if(!g)return setTimeout(function(){a.render(b)},200),!1;f="";if(window.jQuery&&jQuery.cookie&&(f=jQuery.cookie("TSNWidget_Community")))r=!0,"facebook"===f?t=[{onclick:x},{onclick:z}]:"yourcall"===f&&(t=[{onclick:B},{onclick:z},{onclick:x}]);h=document.createElement("div");h.setAttribute("id","countdown");h.onclick=function(){setTimeout(function(){e.toggle("on")},100)};d=
document.createElement("div");d.className="animation";f=document.createElement("div");f.setAttribute("id","state");h.appendChild(d);h.appendChild(f);l=document.createElement("div");l.className="navigation";f=document.createElement("div");f.className="twitter";f.onclick=z;j=document.createElement("div");j.className="facebook";j.onclick=x;m=document.createElement("div");m.className="yourcall";m.onclick=B;l.appendChild(f);l.appendChild(j);l.appendChild(m);k=document.createElement("div");k.className=
"content";p=document.createElement("div");p.className="twitter";p.style.display="none";q=document.createElement("div");q.className="facebook";q.style.display="none";n=document.createElement("div");n.className="yourcall";n.style.display="none";k.appendChild(p);k.appendChild(q);k.appendChild(n);g.className="CommunityBrick";void 0!==g.ontouchstart&&null!==g.ontouchstart?g.ontouchstart=function(){e.toggle(!1)}:(g.onmouseover=function(){e.toggle(!1)},g.onmouseout=function(){e.toggle(!0)});g.onclick=function(){};
g.appendChild(h);g.appendChild(l);g.appendChild(k);return!0};var G={},N=!1,O=33,V=null;G.enabled=!0;var ba=function(){h.className=G.enabled?"":"play"};G.toggle=function(a){clearTimeout(V);"on"===a?(void 0!==g.ontouchstart&&null!==g.ontouchstart?g.ontouchstart=function(){e.toggle(!1)}:(g.onmouseover=function(){e.toggle(!1)},g.onmouseout=function(){e.toggle(!0)}),I(),N=!1):"off"===a&&(void 0!==g.ontouchstart&&null!==g.ontouchstart?g.ontouchstart=function(){}:g.onmouseover=null,I(),N=!0);G.enabled=("off"===
a?!1:!!a)&&!N;V=setTimeout(ba,50)};var P=function(){if(G.enabled&&!r||-1===c){if(!h)return setTimeout(P,100),!1;O++;0===O%34&&a.advanceTab();d.style.top=(-25*((O+34-1)%34)).toString()+"px"}setTimeout(P,400)};P();e=G;return a}();
TSNWidget.ContentPaginator=function(a){var c={},b=[],e=!1,h=!1,d,l,g,k,j=function(b,c){var d=0,e=[],g=!1;this.setActivePage=function(h){d=Math.min(Math.max(0,h),c-1);if(g)for(h=0;h<c;h++)e[h].toggleClass("selected",h===d);else{h=a("<div>").addClass("TSNWidgetPagination").css("marginTop",b.height()-22);var j=a("<ul>"),l,m;j.append('<li class="left"><i>Page</i></li>');for(m=0;m<c;m++)l=a("<li><i>"+m.toString()+"</i></li>").mouseover(k),0===m&&l.addClass("selected"),e.push(l),j.append(l);j.append('<li class="right"><i>Page</i></li>');
h.append(j);b.append(h);g=!0}};return this},p=function(b,c){var e=a(b),p=a(c,e),s=p.length,v=0,r,u=0,m,x=function(a){var b,c=function(){void 0!==this.style&&void 0!==this.style.removeAttribute&&this.style.removeAttribute("filter")};if(!h||void 0!==a){u=void 0===a?(u+1)%s:a;for(b=0;b<s;b++)a=p[b],b!==u?a.fadeOut("slow"):a.fadeIn("fast",c);g.setActivePage(u)}};k=function(){var b=parseInt(a(this).text(),10);isNaN(b)||x(b)};if(1<s){e.mouseover(function(){h=!0}).mouseout(function(){clearInterval(l);l=
setInterval(function(){x()},7E3);h=!1});e.addClass("TSNWidgetContentPaginationManaged");for(m=0;m<s;m++)r=a(p[m]),p[m]=r,v=Math.max(v,r.height()),r.css({position:"absolute",width:"100%"}),0!==m&&r.fadeOut();d=a('<div class="paginationContainer">').height(v+30);p[s-1].after(d);g=new j(d,s);g.setActivePage(0);l=setInterval(function(){x()},7E3);e.css("visibility","visible")}};c.paginate=function(c,d){if(/noeffects/i.test(location.hash))return!1;e?p(c,d):(a(c).css("visibility","hidden"),b.push([c,d]))};
a(function(){var a;for(a=0;a<b.length;a++)p(b[a][0],b[a][1]);e=!0});return c}(jQuery);
 
//GPT Ad Script
var gptadslots = [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function () {
var gads = document.createElement('script');
gads.async = true; gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();
function adserve(ad) {
var adunit = ad.adunit,
size = ad.size,
divid = ad.divid
slot = ad.slot,
refresh = ad.refresh,
adscript = "$(window).load(function () {googletag.cmd.push(function(){gptadslots" + slot + "= googletag.defineSlot('" + adunit + "', [" + size + "],'" + divid + "').addService(googletag.pubads()).addService(googletag.companionAds());googletag.pubads().enableAsyncRendering();googletag.pubads().collapseEmptyDivs();googletag.enableServices();googletag.display('" + divid + "');});});"
var script = document.createElement("script");
script.type = "text/javascript";
script.text = adscript;               // use this for inline script
$("#" + divid).append(script);
}
function adserveoop(ad) {
var adunit = ad.adunit,
divid = ad.divid
slot = ad.slot,
adscript = "$(window).load(function () {googletag.cmd.push(function(){gptadslots" + slot + "= googletag.defineOutOfPageSlot('" + adunit + "','" + divid + "').addService(googletag.pubads()).addService(googletag.companionAds());;googletag.pubads().enableAsyncRendering();googletag.enableServices();googletag.display('" + divid + "');});});"
var script = document.createElement("script");
script.type = "text/javascript";
script.text = adscript;               // use this for inline script
$("#" + divid).append(script);
}
 
var vhBrand = { destinationCode: 'TSN_web'};
 
/*! axisAuthApi r5  build P 14.2.12
contact: Mariusz dot Maurer at Bellmedia dot Ca
*/
window.axisAuthApi = {},
axisAuthApi.name = "axisAuthApi",
axisAuthApi.ver = "R5P 14.2.12",
window.axisAuthApi.consoleLog = function(sourceModule)
{
var me = this;
return me.sourceModule = sourceModule, me.enable = document.location.search.indexOf("alfadebug") > -1 | document.location.search.indexOf("aginc0urt") > -1 ? !0 : !1, document.cookie.indexOf("alFadEbUg=125") > -1 && (me.enable = !0), function(messageText, logCode, options)
{
if (typeof console != "undefined")
{
logCode && typeof logCode == "string" && (logCode = logCode.toUpperCase(), "EWID".indexOf(logCode) == -1 && console.log("not valid logcode: " + logCode)),
logCode && typeof logCode != "string" && console.log("not valid logcode: " + logCode),
options = options ? options : {};
var sourceModule = me.sourceModule ? "[" + me.sourceModule + "] " : "";
if (options.sourceFn = options.sourceFn ? options.sourceFn : "", logCode == "E" & options.hide != !0)
{
console.error(sourceModule + messageText);
return
}
if (logCode == "E" & me.enable)
{
console.error(sourceModule + messageText);
return
}
options.force | me.enable && (logCode == "W" ? console.warn(sourceModule + messageText) : logCode == "I" ? console.info(sourceModule + messageText) : logCode == "D" ? (options.extraDescr = options.extraDescr ? options.extraDescr : "", console.log(sourceModule + options.sourceFn + " " + options.extraDescr), console.dir(messageText)) : console.log(sourceModule + messageText))
}
}
},
function(parent)
{
var me = {},
log;
me.ver = "13.10.23",
me.name = "cfg",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
me.debug = document.location.search.indexOf("alfadebug") > -1 | document.location.search.indexOf("aginc0urt") > -1 ? !0 : !1,
document.cookie.indexOf("alFadEbUg=125") > -1 && (me.debug = !0),
me.baseApiUrl = "http://cauth.9c9media.com/auth5/",
me.axisConfigUrl = "http://capi.9c9media.com/config/",
me.devNote = "",
me.baseApiUrl.indexOf("localhost") > -1 && (me.devNote = "DEV server!  - localhost"),
me.baseApiUrl.indexOf("etsdev.ctv.ca") > -1 && (me.devNote = "STAGING server!  - etsdev.ctv.ca"),
me.baseApiUrl.indexOf("esi2.ctv.ca") > -1 && (me.devNote = "STAGING server!  - esi2.ctv.ca"),
me.baseApiUrl.indexOf("cauth.9c9media") > -1 && (me.devNote = ""),
me.baseApiUrl.indexOf("wivx_videohub_dev") > -1 && (me.devNote = "test - wivx_videohub_dev.cms.9c9media.net"),
me.axisConfigUrl.indexOf("stage") > -1 && (me.devNote = "STAGING Axis Config"),
me.devNote != "" && log("WARNING: " + me.devNote, "E"),
me.screenDoor = {},
me.screenDoor.cookieExpiresDays = 30,
me.configFromAxis
}(axisAuthApi),
function(parent)
{
function convert2boolean(obj)
{
for (var prop in obj)
typeof obj[prop] == "string" && obj[prop].toLowerCase() == "true" && (obj[prop] = !0),
typeof obj[prop] == "string" && obj[prop].toLowerCase() == "false" && (obj[prop] = !1),
parent.lib.isObject(obj[prop]) && convert2boolean(obj[prop]);
return obj
}
function supportedVer()
{
var sv = parent.cfg.supportedVer,
found = !1,
prop;
if (sv)
{
for (prop in sv)
parent.cfg.baseApiUrl.indexOf(prop) > -1 && (found = !0, sv[prop] != axisAuthApi.ver && log("Release build out of date. Latest build: " + sv[prop], "E"));
found || log(" O B S O L E T E  UNSUPPORTED VERSION - " + parent.cfg.baseApiUrl, "E")
}
return found
}
var me = {},
log;
me.ver = "13.10.23",
me.name = "configFromAxis",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
me.get = function(fnCallback)
{
if (parent.cfg.configFromAxis)
{
fnCallback();
return
}
var destCode = parent.vhBrand.destinationCode ? parent.vhBrand.destinationCode + "/Web" : "/global/Web",
url = parent.cfg.axisConfigUrl + destCode + ".jsonp";
parent.retry.init("get", 1, arguments, 1),
parent.lib.getAjax(url, function(result)
{
var err,
obj1,
obj2,
dest_platform_id,
dest_responsetarget;
parent.cfg.configFromAxis = result,
err = !1;
try
{
obj1 = convert2boolean(result.Configuration.GlobalConfiguration.axisAuthApi.Settings),
$.extend(parent.cfg, obj1)
}
catch(ex)
{
log("AXIS Global Configuration: " + ex.message, "E"),
err = !0
}
try
{
obj2 = convert2boolean(result.Configuration.DestinationConfiguration.axisAuthApi.Settings),
$.extend(parent.vhBrand, obj2)
}
catch(ex)
{
log("AXIS Destination Configuration for " + destCode + " " + ex.message, "E"),
err = !0
}
try
{
dest_platform_id = result.Configuration.DestinationConfiguration.axisAuthApi.Settings.Akamai.platform_id
}
catch(ex)
{
log("AXIS Destination Configuration Akamai for " + destCode + " " + ex.message, "E", {hide: !0})
}
finally
{
err || (typeof dest_platform_id == "string" && (result.Configuration.GlobalConfiguration.axisAuthApi.Settings.Akamai.platform_id = dest_platform_id), typeof dest_responsetarget == "string" && (result.Configuration.GlobalConfiguration.axisAuthApi.Settings.Akamai.responsetarget = dest_responsetarget))
}
if (err)
{
parent.ui.closeWithMessage(null, {
text: {
en: "config oops!",
fr: "config oups!"
},
timer: 2500
}),
fnCallback({error: !0});
return
}
parent.cfg.Akamai.platform_id.indexOf("test") > -1 && (parent.cfg.devNote = parent.cfg.devNote + " Akamai TEST configuration!"),
parent.cfg.Akamai.responsetarget == "dev" && (parent.cfg.devNote = parent.cfg.devNote + " Akamai responsetarget=DEV !"),
supportedVer(),
fnCallback()
}, function(e)
{
log("get(" + url + ") " + e.errorThrown + " - " + e.textStatus + ". Attempting to retry.", "E", {hide: !0}),
parent.retry.go("get") || fnCallback({error: !0})
}, {jsonpCallback: "axisConfigFn"}, {caller: "configFromAxis()"})
}
}(axisAuthApi),
function(parent)
{
var me = {},
log;
me.ver = "13.10.22",
me.name = "retry",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
me.list = {},
me.init = function(methodName, maxTries, args, optionsIndex)
{
args[optionsIndex] && args[optionsIndex].retry == !0 || (me.list[methodName] = {
maxTries: maxTries,
methodArgs: args,
optionsIndex: optionsIndex
})
},
me.go = function(methodName)
{
if (me.list[methodName] && me.list[methodName].maxTries <= 0)
return log("go(" + methodName + ") max tries exceeded.", "E"), !1;
var mthd = me.list[methodName],
options = mthd.methodArgs[mthd.optionsIndex];
return typeof options == "undefined" && log("go(" + methodName + ") does not have 'options' argument!", "E"), $.extend(options, {retry: !0}), mthd.methodArgs.callee(mthd.methodArgs[0], mthd.methodArgs[1], mthd.methodArgs[2], mthd.methodArgs[3], mthd.methodArgs[4], mthd.methodArgs[5], mthd.methodArgs[6], mthd.methodArgs[7]), log("go(" + methodName + ") try " + mthd.maxTries), mthd.maxTries = mthd.maxTries - 1, !0
}
}(axisAuthApi),
function(){}(axisAuthApi),
function(){}(axisAuthApi),
function(parent)
{
function getEvName(caller, methodName, chainedCallback)
{
var idx = typeof chainedCallback == "number" ? chainedCallback.toString() : "";
return methodName + "(" + caller + ")" + idx
}
var me = {},
log,
callbacks;
me.ver = "13.7.31",
me.name = "callbackManager",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
callbacks = {},
me.add = function(caller, methodName, callback, options)
{
if (typeof callback == "function")
{
options = options ? options : {};
var evname = getEvName(caller, methodName, options.chainedCallback);
callbacks[evname] || (callbacks[evname] = $.Callbacks()),
callbacks[evname].add(callback)
}
},
me.call = function(caller, methodName, callback, ev, options)
{
if (typeof callback == "function")
{
options = options ? options : {};
var evname = getEvName(caller, methodName, options.chainedCallback);
callbacks[evname] ? (callbacks[evname].fire(ev, options), callbacks[evname].remove(callback)) : log(evname + " : callback was not registered!", "E"),
evname = getEvName(caller, methodName + "_ERR", options.chainedCallback),
typeof options.onError == "function" && callbacks[evname].remove(options.onError)
}
},
me.remove = function(caller, methodName, callback, options)
{
if (typeof callback == "function")
{
options = options ? options : {};
var evname = getEvName(caller, methodName, options.chainedCallback);
callbacks[evname] ? callbacks[evname].remove(callback) : log(evname + " : callback was not registered!", "E")
}
}
}(axisAuthApi),
function(parent)
{
var me = {},
log;
me.ver = "13.8.23a",
me.name = "lib",
parent[me.name] = me,
me.parent = parent,
log = new parent.consoleLog(parent.name + "." + me.name),
me.getAjax = function(url, onSuccess, onError, optAjaxParams, options)
{
options = options ? options : {};
try
{
var ajaxParams = {
url: url,
timeout: 1e4,
cache: parent.cfg.debug ? !1 : !0,
contentType: "application/javascript",
dataType: "jsonp",
success: function(result)
{
onSuccess && onSuccess(result, options.passThruValue)
},
error: function(XMLHttpRequest, textStatus, errorThrown)
{
var errmode = null;
onError ? onError({
XMLHttpRequest: XMLHttpRequest,
textStatus: textStatus,
errorThrown: errorThrown,
errmode: errmode
}) : log(errorThrown + " - lib.getAjax(" + url + ")  calling object: " + options.caller, "E", {hide: !0})
}
};
$.extend(ajaxParams, optAjaxParams),
log("lib.getAjax(" + ajaxParams.url + ")  calling object: " + options.caller),
$.ajax(ajaxParams)
}
catch(err)
{
log(err + " catch lib.getAjax(" + url + ")  calling object: " + options.caller, "E", {hide: !0})
}
},
me.getInterFrameMessage = function(event)
{
var data = event.data;
try
{
return data = JSON.parse(decodeURIComponent(data)), data.messageSender ? data : null
}
catch(ex)
{
return log("getInterFrameMessage(origin: " + event.origin + ") unrecognized message format."), null
}
},
me.parseUrlDomain = function(url)
{
var a = document.createElement("a"),
domain;
return a.href = url, domain = a.hostname, a = null, domain
},
me.isNumeric = function(n)
{
return !isNaN(parseFloat(n)) && isFinite(n)
},
me.isAlphaNumeric = function(txt)
{
return /^[a-zA-Z0-9]+$/.test(txt)
},
me.isEmptyObject = function(obj)
{
for (var prop in obj)
if (Object.prototype.hasOwnProperty.call(obj, prop))
return !1;
return !0
},
me.isArray = function(arr)
{
return Object.prototype.toString.call(arr) == "[object Array]"
},
me.isObject = function(obj)
{
return Object.prototype.toString.call(obj) == "[object Object]"
},
me.getObjectProperties = function(obj)
{
return Object.keys || (Object.keys = function(obj)
{
var keys = [],
k;
for (k in obj)
Object.prototype.hasOwnProperty.call(obj, k) && keys.push(k);
return keys
}), Object.keys(obj)
},
me.getParameterByName = function(name)
{
name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
results = regex.exec(location.search);
return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
},
me.randomString = function(length, chars)
{
for (var result = "", i = length; i > 0; --i)
result += chars[Math.round(Math.random() * (chars.length - 1))];
return result
},
function(t, e)
{
typeof exports == "object" ? module.exports = e() : typeof define == "function" && define.amd && define("spinjs", [], e),
t.Spinner = e()
}(me, function()
{
"use strict";
function o(t, e)
{
var i = document.createElement(t || "div"),
o;
for (o in e)
i[o] = e[o];
return i
}
function n(t)
{
for (var e = 1, i = arguments.length; e < i; e++)
t.appendChild(arguments[e]);
return t
}
function s(t, o, n, s)
{
var a = ["opacity", o, ~~(t * 100), n, s].join("-"),
f = .01 + n / s * 100,
l = Math.max(1 - (1 - t) / o * (100 - f), t),
d = i.substring(0, i.indexOf("Animation")).toLowerCase(),
u = d && "-" + d + "-" || "";
return e[a] || (r.insertRule("@" + u + "keyframes " + a + "{0%{opacity:" + l + "}" + f + "%{opacity:" + t + "}" + (f + .01) + "%{opacity:1}" + (f + o) % 100 + "%{opacity:" + t + "}100%{opacity:" + l + "}}", r.cssRules.length), e[a] = 1), a
}
function a(e, i)
{
var o = e.style,
n,
r;
if (o[i] !== undefined)
return i;
for (i = i.charAt(0).toUpperCase() + i.slice(1), r = 0; r < t.length; r++)
if (n = t[r] + i, o[n] !== undefined)
return n
}
function f(t, e)
{
for (var i in e)
t.style[a(t, i) || i] = e[i];
return t
}
function l(t)
{
for (var i, o, e = 1; e < arguments.length; e++)
{
i = arguments[e];
for (o in i)
t[o] === undefined && (t[o] = i[o])
}
return t
}
function d(t)
{
for (var e = {
x: t.offsetLeft,
y: t.offsetTop
}; t = t.offsetParent; )
e.x += t.offsetLeft,
e.y += t.offsetTop;
return e
}
function p(t)
{
if (typeof this == "undefined")
return new p(t);
this.opts = l(t || {}, p.defaults, u)
}
function c()
{
function t(t, e)
{
return o("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e)
}
r.addRule(".spin-vml", "behavior:url(#default#VML)"),
p.prototype.lines = function(e, i)
{
function s()
{
return f(t("group", {
coordsize: r + " " + r,
coordorigin: -o + " " + -o
}), {
width: r,
height: r
})
}
function u(e, r, a)
{
n(l, n(f(s(), {
rotation: 360 / i.lines * e + "deg",
left: ~~r
}), n(f(t("roundrect", {arcsize: i.corners}), {
width: o,
height: i.width,
left: i.radius,
top: -i.width >> 1,
filter: a
}), t("fill", {
color: i.color,
opacity: i.opacity
}), t("stroke", {opacity: 0}))))
}
var o = i.length + i.width,
r = 2 * o,
a = -(i.width + i.length) * 2 + "px",
l = f(s(), {
position: "absolute",
top: a,
left: a
}),
d;
if (i.shadow)
for (d = 1; d <= i.lines; d++)
u(d, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
for (d = 1; d <= i.lines; d++)
u(d);
return n(e, l)
},
p.prototype.opacity = function(t, e, i, o)
{
var n = t.firstChild;
o = o.shadow && o.lines || 0,
n && e + o < n.childNodes.length && (n = n.childNodes[e + o], n = n && n.firstChild, n = n && n.firstChild, n && (n.opacity = i))
}
}
var t = ["webkit", "Moz", "ms", "O"],
e = {},
i,
r = function()
{
var t = o("style", {type: "text/css"});
return n(document.getElementsByTagName("head")[0], t), t.sheet || t.styleSheet
}(),
u = {
lines: 12,
length: 7,
width: 5,
radius: 10,
rotate: 0,
corners: 1,
color: "#000",
direction: 1,
speed: 1,
trail: 100,
opacity: 1 / 4,
fps: 20,
zIndex: 2e9,
className: "spinner",
top: "auto",
left: "auto",
position: "relative"
},
h;
return p.defaults = {}, l(p.prototype, {
spin: function(t)
{
this.stop();
var e = this,
n = e.opts,
r = e.el = f(o(0, {className: n.className}), {
position: n.position,
width: 0,
zIndex: n.zIndex
}),
s = n.radius + n.length + n.width,
a,
l;
if (t && (t.insertBefore(r, t.firstChild || null), l = d(t), a = d(r), f(r, {
left: (n.left == "auto" ? l.x - a.x + (t.offsetWidth >> 1) : parseInt(n.left, 10) + s) + "px",
top: (n.top == "auto" ? l.y - a.y + (t.offsetHeight >> 1) : parseInt(n.top, 10) + s) + "px"
})), r.setAttribute("role", "progressbar"), e.lines(r, e.opts), !i)
{
var u = 0,
p = (n.lines - 1) * (1 - n.direction) / 2,
c,
h = n.fps,
m = h / n.speed,
y = (1 - n.opacity) / (m * n.trail / 100),
g = m / n.lines;
(function v()
{
u++;
for (var t = 0; t < n.lines; t++)
c = Math.max(1 - (u + (n.lines - t) * g) % m * y, n.opacity),
e.opacity(r, t * n.direction + p, c, n);
e.timeout = e.el && setTimeout(v, ~~(1e3 / h))
})()
}
return e
},
stop: function()
{
var t = this.el;
return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = undefined), this
},
lines: function(t, e)
{
function d(t, i)
{
return f(o(), {
position: "absolute",
width: e.length + e.width + "px",
height: e.width + "px",
background: t,
boxShadow: i,
transformOrigin: "left",
transform: "rotate(" + ~~(360 / e.lines * r + e.rotate) + "deg) translate(" + e.radius + "px,0)",
borderRadius: (e.corners * e.width >> 1) + "px"
})
}
for (var r = 0, a = (e.lines - 1) * (1 - e.direction) / 2, l; r < e.lines; r++)
l = f(o(), {
position: "absolute",
top: 1 + ~(e.width / 2) + "px",
transform: e.hwaccel ? "translate3d(0,0,0)" : "",
opacity: e.opacity,
animation: i && s(e.opacity, e.trail, a + r * e.direction, e.lines) + " " + 1 / e.speed + "s linear infinite"
}),
e.shadow && n(l, f(d("#000", "0 0 4px #000"), {top: "2px"})),
n(t, n(l, d(e.color, "0 0 1px rgba(0,0,0,.1)")));
return t
},
opacity: function(t, e, i)
{
e < t.childNodes.length && (t.childNodes[e].style.opacity = i)
}
}), h = f(o("group"), {behavior: "url(#default#VML)"}), !a(h, "transform") && h.adj ? c() : i = a(h, "animation"), p
}),
me.axisLog = function(txt, LogLevel, options)
{
switch (LogLevel)
{
case"Error":
$.ajax({
url: parent.cfg.axisLogger,
data: {
LogLevel: "Error",
Message: txt,
ApplicationName: "axisAuthApi"
},
dataType: "jsonp"
});
break;
case"Info":
$.ajax({
url: parent.cfg.axisLogger,
data: {
LogLevel: "Info",
Message: txt,
ApplicationName: "axisAuthApi",
DataValues: JSON.stringify([{
Key: options.name,
Value: options.time
}, {
Key: "platform",
Value: options.platform
}])
},
dataType: "jsonp"
})
}
},
me.browser = {},
me.browser.isIE11 = function()
{
return navigator.appName == "Netscape" && navigator.product == "Gecko" && navigator.userAgent.indexOf("Trident") > -1 ? (log(".browser() IE11"), !0) : !1
}
}(axisAuthApi),
function(parent)
{
var me = function(name, value, options)
{
var msPerDay = 864e5,
returnValue,
cookies = [],
path,
domain,
expires,
opts = {},
secure,
date,
defaults = {
expires: "",
domain: "",
path: "",
secure: !1
};
return arguments.length === 1 ? (document.cookie && document.cookie !== "" && (cookies = document.cookie.split(";"), $.each(cookies, function(i, cookie)
{
return cookie = $.trim(cookie), cookie.substring(0, name.length + 1) === name + "=" ? (returnValue = decodeURIComponent(cookie.substring(name.length + 1)), !1) : void 0
})), returnValue) : ($.extend(opts, defaults, me.settings, options), value === null && (value = "", opts.expires = -1), path = opts.path ? ";path=" + opts.path : "", domain = opts.domain ? ";domain=" + opts.domain : "", expires = opts.expires ? function(opts)
{
return typeof opts.expires == "number" ? (date = new Date, date.setTime(date.getTime() + opts.expires * msPerDay)) : $.type(opts.expires) === "date" ? date = opts.expires : (date = new Date, date.setTime(date.getTime() + msPerDay)), expires = ";expires=" + date.toUTCString()
}(opts) : "", secure = opts.secure ? ";secure" : "", document.cookie = name + "=" + encodeURIComponent(value) + expires + path + domain + secure, document.cookie.indexOf(name))
};
parent.cookie = me
}(axisAuthApi.lib),
function(parent)
{
var me = {};
me.ver = "13.6.14a",
me.name = "cookieSupport",
parent[me.name] = me,
me.test = function()
{
var persist = !0,
c;
do
if (c = "gCStest=" + Math.floor(Math.random() * 1e8), document.cookie = persist ? c + ";expires=Tue, 01-Jan-2030 00:00:00 GMT" : c, document.cookie.indexOf(c) !== -1)
return document.cookie = c + ";expires=Sat, 01-Jan-2000 00:00:00 GMT", persist;
while (!(persist = !persist));
return null
}
}(axisAuthApi.lib),
function(parent)
{
function getAlfacdcUrl()
{
return _alfacdcPath.slice(-1) != "/" && (_alfacdcPath = _alfacdcPath + "/"), _alfacdcPath + _alfacdc
}
var me = {},
log,
_herrFrame,
_herrForm,
_alfacdcPath,
_alfacdc,
_t;
me.ver = "13.6.21c",
me.name = "alfaCrossCookie",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
_alfacdc = "alfacdc.aspx",
me.fnCallback,
me.update = function(urlArg, fnCallback, alfacdcPath)
{
log("update(" + urlArg + ")"),
_t = +new Date,
_alfacdcPath = alfacdcPath,
urlArg = urlArg.indexOf("?") == 0 ? urlArg : "?" + urlArg;
var alfacdcUrl = getAlfacdcUrl() + urlArg;
me.fnCallback = fnCallback,
_herrFrame == undefined | _herrFrame == null && (_herrFrame = $('<iframe name="ifrEts42herring" id="ifrEts42herring" frameborder="0" width="0" height="0" />'), $("body").append(_herrFrame)),
_herrForm == undefined ? (_herrForm = $('<form action="' + getAlfacdcUrl() + urlArg + '" target="ifrEts42herring" method="POST" /><\/form>'), $("body").append(_herrForm)) : $(_herrForm).attr("action", getAlfacdcUrl() + urlArg);
try
{
_herrForm.submit()
}
catch(ex)
{
log("update() form.submit(" + alfacdcUrl + ") " + ex.message, "E")
}
},
me.clear = function(urlArg, fnCallback, alfacdcPath)
{
if (_t = +new Date, urlArg = urlArg ? urlArg + "&ciasteczka_zjedz=tak" : "?ciasteczka_zjedz=all", fnCallback = fnCallback ? fnCallback : me.fnCallback, fnCallback || log("clear(fnCallback) arg is unknown!", "W"), alfacdcPath = alfacdcPath ? alfacdcPath : _alfacdcPath, !alfacdcPath)
{
log("clear(alfacdcPath) arg is needed!", "W");
return
}
me.update(urlArg, fnCallback, alfacdcPath)
},
me.read = function(fnCallback, alfacdcPath)
{
if (_t = +new Date, fnCallback = fnCallback ? fnCallback : me.fnCallback, fnCallback || log("read(fnCallback) arg is needed!", "W"), alfacdcPath = alfacdcPath ? alfacdcPath : _alfacdcPath, !alfacdcPath)
{
log("read(alfacdcPath) arg is needed!", "W");
return
}
me.update("ciasteczka_czytaj=tak", fnCallback, alfacdcPath)
},
me.msgCallback = function(messageData)
{
messageData && messageData.messageSender != "alfacdc" || (_t = +new Date - _t, me.fnCallback ? (messageData.error && log("[alfacdc.aspx] " + messageData.error, "E"), me.fnCallback(messageData.data, messageData.error, {time: _t})) : log("fnCallback undefined"), $(_herrFrame).remove(), _herrFrame = null, $(_herrForm).remove(), _herrForm = null)
}
}(axisAuthApi),
function(parent, iframeSrc)
{
var me = {},
_t;
me.ver = "13.6.17b",
me.name = "alfaThirdPartyCookie",
parent[me.name] = me;
var log = new parent.consoleLog(parent.name + "." + me.name),
_try = 0,
_maxTry = 3;
me.isSupported,
me.iframe,
me.iframeSrc = iframeSrc,
me.customCallback,
me.checkSupport = function(customCallback, iframeSrc2)
{
function plantCookie()
{
_try++;
var cacheBust = "?" + Math.random().toString(36).substring(2, 10);
me.iframe == undefined | me.iframe == null ? (me.iframe = $('<iframe src="' + me.iframeSrc + cacheBust + '" frameborder="0" width="0" height="0" />'), $("body").append(me.iframe)) : ($(me.iframe).remove(), me.iframe = null, _try--, me.checkSupport(customCallback)),
log("checkSupport(" + _try + ") waiting for cross frame message ...")
}
if ((_t = +new Date, customCallback && (me.customCallback = customCallback), iframeSrc2 && (me.iframeSrc = iframeSrc2), typeof me.isSupported == "boolean" && me.isSupported === !0) || typeof me.isSupported == "boolean" && _try >= _maxTry)
return me.customCallback && me.customCallback(me.isSupported), log("checkSupport(" + _try + ")=" + me.isSupported), me.isSupported;
plantCookie()
},
me.msgCallback = function(messageData)
{
if (!messageData || messageData.messageSender == "alfatpc")
{
var isSupported = !1;
_t = +new Date - _t;
try
{
messageData.data.planted == messageData.data.read && (isSupported = !0)
}
catch(ex)
{
log("msgCallback() - " + ex.message, "W")
}
if (isSupported == !1 ? log("third party cookie not supported. " + _t + "ms") : log("third party cookie: TRUE " + _t + "ms"), me.isSupported = isSupported, isSupported == !1 && _try <= _maxTry)
{
setTimeout(function()
{
me.checkSupport(me.customCallback)
}, 500);
return
}
me.customCallback && me.customCallback(me.isSupported, {time: _t}),
$(me.iframe).remove(),
me.iframe = null
}
}
}(axisAuthApi),
function(parent)
{
var me = {},
log;
me.ver = "14.1.13",
me.name = "mobileApp",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
me.send = function(cmd, infoObj)
{
if (typeof infoObj == "undefined")
{
log("send() - missing argument: infoObj", "E");
return
}
log(cmd);
var message = {};
if (cmd == "close" && (infoObj.closer && infoObj.closer == "btnX" && (message.cancel = !0), infoObj.options && infoObj.options.authN && infoObj.options.authN == !0 && (message.authN = !0), parent.selectedBdu.AkamaiName && (message.selectedBdu = parent.selectedBdu)), cmd == "authenticationStateChange")
if (infoObj.options && infoObj.options.source && infoObj.options.source == "performLogout")
message.source = "performLogout",
message.authN = infoObj.authenticated;
else
return;
message = JSON.stringify(message),
typeof axisAuthApiAndroid != "undefined" && axisAuthApiAndroid.axAuth(cmd, message),
typeof axisAuthApiApple != "undefined" && axisAuthApiApple.axAuth(cmd, message)
}
}(axisAuthApi),
function($)
{
$.fn.alfaAutoSuggest = function(data, options)
{
var defaults = {
asHtmlID: !1,
startText: "Enter Name Here",
emptyText: "No Results Found",
preFill: {},
limitText: "No More Selections Are Allowed",
selectedItemProp: "value",
selectedValuesProp: "value",
searchObjProps: "value",
queryParam: "q",
retrieveLimit: !1,
extraParams: "",
matchCase: !1,
minChars: 1,
keyDelay: 400,
resultsHighlight: !0,
neverSubmit: !1,
selectionLimit: !1,
showResultList: !0,
start: function(){},
selectionClick: function(){},
selectionAdded: function(){},
selectionRemoved: function(elem)
{
elem.remove()
},
formatList: !1,
beforeRetrieve: function(string)
{
return string
},
retrieveComplete: function(data)
{
return data
},
resultClick: function(){},
resultsComplete: function(){}
},
opts = $.extend(defaults, options),
d_type = "object",
d_count = 0,
req_string,
org_data;
if (typeof data == "string")
d_type = "string",
req_string = data;
else
{
org_data = data;
for (k in data)
data.hasOwnProperty(k) && d_count++
}
if (d_type == "object" && d_count > 0 || d_type == "string")
return this.each(function(x)
{
function keyChange()
{
var string,
limit;
if (lastKeyPressCode == 46 || lastKeyPressCode > 8 && lastKeyPressCode < 32)
return results_holder.hide();
(string = input.val().replace(/[\\]+|[\/]+/g, ""), string != prev) && (prev = string, string.length >= opts.minChars ? (selections_holder.addClass("loading"), d_type == "string" ? (limit = "", opts.retrieveLimit && (limit = "&limit=" + encodeURIComponent(opts.retrieveLimit)), opts.beforeRetrieve && (string = opts.beforeRetrieve.call(this, string)), $.getJSON(req_string + "?" + opts.queryParam + "=" + encodeURIComponent(string) + limit + opts.extraParams, function(data)
{
d_count = 0;
var new_data = opts.retrieveComplete.call(this, data);
for (k in new_data)
new_data.hasOwnProperty(k) && d_count++;
processData(new_data, string)
})) : (opts.beforeRetrieve && (string = opts.beforeRetrieve.call(this, string)), processData(org_data, string))) : (selections_holder.removeClass("loading"), results_holder.hide()))
}
function processData(data, query)
{
var matchCount,
i,
num,
forward,
str,
names,
y,
name,
formatted,
this_data,
regx;
for (opts.matchCase || (query = query.toLowerCase()), matchCount = 0, results_holder.html(results_ul.html("")).hide(), i = 0; i < d_count; i++)
{
if (num = i, num_count++, forward = !1, opts.searchObjProps == "value")
str = data[num].value;
else
for (str = "", names = opts.searchObjProps.split(","), y = 0; y < names.length; y++)
name = $.trim(names[y]),
str = str + data[num][name] + " ";
if (str && (opts.matchCase || (str = str.toLowerCase()), str.search(query) != -1 && values_input.val().search("," + data[num][opts.selectedValuesProp] + ",") == -1 && (forward = !0)), forward && (formatted = $('<li class="as-result-item" id="as-result-item-' + num + '"><\/li>').click(function()
{
var raw_data = $(this).data("data"),
number = raw_data.num,
data;
$("#as-selection-" + number, selections_holder).length <= 0 && !tab_press && (data = raw_data.attributes, input.val("").focus(), prev = "", add_selected_item(data, number), opts.resultClick.call(this, raw_data), results_holder.hide()),
tab_press = !1
}).mousedown(function()
{
input_focus = !1
}).mouseover(function()
{
$("li", results_ul).removeClass("active"),
$(this).addClass("active")
}).data("data", {
attributes: data[num],
num: num_count
}), this_data = $.extend({}, data[num]), regx = opts.matchCase ? new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + query + ")(?![^<>]*>)(?![^&;]+;)", "g") : new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + query + ")(?![^<>]*>)(?![^&;]+;)", "gi"), opts.resultsHighlight && (this_data[opts.selectedItemProp] = this_data[opts.selectedItemProp].replace(regx, "<em>$1<\/em>")), formatted = opts.formatList ? opts.formatList.call(this, this_data, formatted) : formatted.html(this_data[opts.selectedItemProp]), results_ul.append(formatted), delete this_data, matchCount++, opts.retrieveLimit && opts.retrieveLimit == matchCount))
break
}
selections_holder.removeClass("loading"),
matchCount <= 0 && results_ul.html('<li class="as-message">' + opts.emptyText + "<\/li>"),
results_ul.css("width", selections_holder.outerWidth()),
results_holder.show(),
opts.resultsComplete.call(this)
}
function add_selected_item(data, num)
{
values_input.val(values_input.val() + data[opts.selectedValuesProp] + ",");
var item = $('<li class="as-selection-item" id="as-selection-' + num + '"><\/li>').click(function()
{
opts.selectionClick.call(this, $(this)),
selections_holder.children().removeClass("selected"),
$(this).addClass("selected")
}).mousedown(function()
{
input_focus = !1
}),
close = $('<a class="as-close">&times;<\/a>').click(function()
{
return values_input.val(values_input.val().replace("," + data[opts.selectedValuesProp] + ",", ",")), opts.selectionRemoved.call(this, item), input_focus = !0, input.focus(), !1
});
org_li.before(item.html(data[opts.selectedItemProp]).prepend(close)),
opts.selectionAdded.call(this, org_li.prev())
}
function moveSelection(direction)
{
var lis,
start,
active;
$(":visible", results_holder).length > 0 && (lis = $("li", results_holder), start = direction == "down" ? lis.eq(0) : lis.filter(":last"), active = $("li.active:first", results_holder), active.length > 0 && (start = direction == "down" ? active.next() : active.prev()), lis.removeClass("active"), start.addClass("active"))
}
var x_id,
input,
input_focus,
vals,
v_data,
prefill_count,
i,
new_v,
lastChar,
num_count;
opts.asHtmlID ? (x = opts.asHtmlID, x_id = x) : (x = x + "" + Math.floor(Math.random() * 100), x_id = "as-input-" + x),
opts.start.call(this),
input = $(this),
input.attr("autocomplete", "off").addClass("as-input").attr("id", x_id).val(opts.startText),
input_focus = !1,
input.wrap('<ul class="as-selections" id="as-selections-' + x + '"><\/ul>').wrap('<li class="as-original" id="as-original-' + x + '"><\/li>');
var selections_holder = $("#as-selections-" + x),
org_li = $("#as-original-" + x),
results_holder = $('<div class="as-results" id="as-results-' + x + '"><\/div>').hide(),
results_ul = $('<ul class="as-list"><\/ul>'),
values_input = $('<input type="hidden" class="as-values" name="as_values_' + x + '" id="as-values-' + x + '" />'),
prefill_value = "";
if (typeof opts.preFill == "string")
{
for (vals = opts.preFill.split(","), i = 0; i < vals.length; i++)
v_data = {},
v_data[opts.selectedValuesProp] = vals[i],
vals[i] != "" && add_selected_item(v_data, "000" + i);
prefill_value = opts.preFill
}
else
{
prefill_value = "",
prefill_count = 0;
for (k in opts.preFill)
opts.preFill.hasOwnProperty(k) && prefill_count++;
if (prefill_count > 0)
for (i = 0; i < prefill_count; i++)
new_v = opts.preFill[i][opts.selectedValuesProp],
new_v == undefined && (new_v = ""),
prefill_value = prefill_value + new_v + ",",
new_v != "" && add_selected_item(opts.preFill[i], "000" + i)
}
prefill_value != "" && (input.val(""), lastChar = prefill_value.substring(prefill_value.length - 1), lastChar != "," && (prefill_value = prefill_value + ","), values_input.val("," + prefill_value), $("li.as-selection-item", selections_holder).addClass("blur").removeClass("selected")),
input.after(values_input),
selections_holder.click(function()
{
input_focus = !0,
input.focus()
}).mousedown(function()
{
input_focus = !1
}).after(results_holder);
var timeout = null,
prev = "",
totalSelections = 0,
tab_press = !1;
input.focus(function()
{
return $(this).val() == opts.startText && values_input.val() == "" ? $(this).val("") : input_focus && ($("li.as-selection-item", selections_holder).removeClass("blur"), $(this).val() != "" && (results_ul.css("width", selections_holder.outerWidth()), results_holder.show())), input_focus = !0, !0
}).blur(function()
{
$(this).val() == "" && values_input.val() == "" && prefill_value == "" ? $(this).val(opts.startText) : input_focus && ($("li.as-selection-item", selections_holder).addClass("blur").removeClass("selected"), results_holder.hide())
}).keydown(function(e)
{
var last,
active;
lastKeyPressCode = e.keyCode,
first_focus = !1;
switch (e.keyCode)
{
case 38:
e.preventDefault(),
moveSelection("up");
break;
case 40:
e.preventDefault(),
moveSelection("down");
break;
case 8:
input.val() == "" && (last = values_input.val().split(","), last = last[last.length - 2], selections_holder.children().not(org_li.prev()).removeClass("selected"), org_li.prev().hasClass("selected") ? (values_input.val(values_input.val().replace("," + last + ",", ",")), opts.selectionRemoved.call(this, org_li.prev())) : (opts.selectionClick.call(this, org_li.prev()), org_li.prev().addClass("selected"))),
input.val().length == 1 && (results_holder.hide(), prev = ""),
$(":visible", results_holder).length > 0 && (timeout && clearTimeout(timeout), timeout = setTimeout(function()
{
keyChange()
}, opts.keyDelay));
break;
case 9:
case 188:
break;
case 13:
tab_press = !1,
active = $("li.active:first", results_holder),
active.length > 0 && (active.click(), results_holder.hide()),
(opts.neverSubmit || active.length > 0) && e.preventDefault();
break;
default:
opts.showResultList && (opts.selectionLimit && $("li.as-selection-item", selections_holder).length >= opts.selectionLimit ? (results_ul.html('<li class="as-message">' + opts.limitText + "<\/li>"), results_holder.show()) : (timeout && clearTimeout(timeout), timeout = setTimeout(function()
{
keyChange()
}, opts.keyDelay)))
}
}),
num_count = 0
})
}
}(jQuery),
function()
{
/*!
M A I N   M O D U L E
*/
function checkAfterLogin()
{
var maxTries,
interval,
url;
if (log("checkAfterLogin(" + _checkAuthCount + ") _isAuthenticated=" + _isAuthenticated), _performAuthentication_isPending = !1, _checkAfterLoginLoop != !1)
{
if (me.cfg.pinging == !1)
{
_checkAfterLoginLoop = !1;
return
}
if (maxTries = 20, interval = 2e3, _isAuthenticated)
{
authenticationResult("checkAfterLogin() loop");
return
}
if (_checkAuthCount++, _checkAuthCount > maxTries)
{
me.messaging.show("ERM-02"),
log("checkAfterLogin() timeout after " + maxTries * interval / 1e3 + "s.", "E");
return
}
url = getServiceUrl("/init/"),
aisGET(url, function(result)
{
authenticationStateChange(result.authenticated, {
source: "checkAfterLogin",
debug: "checkAfterLogin() callback"
}),
result.authenticated && log("authenticated after " + (me.cfg.pingingDelay + _checkAuthCount * interval) / 1e3 + "s.")
}, null, {cache: !1}),
setTimeout(checkAfterLogin, interval)
}
}
function authenticationResult(debugFrom)
{
log("authenticationResult(" + debugFrom + ")"),
me.ui.showItem("_message_box"),
_isAuthenticated ? (_checkAfterLoginLoop = !1, me.ui.closeWithMessage(null, {
text: {
en: "Video Sign In successful",
fr: "Video Connexion réussie"
},
timer: 300,
authN: !0
})) : me.messaging.show("ERM-02"),
me.events.triggerEvent("on_authentication_result", _isAuthenticated)
}
function authenticationStateChange(newState, options)
{
_isAuthenticated !== newState && (_isAuthenticated = newState, _isAuthenticated !== !0 && (_identity = undefined, me.storage("identity", null)), me.storage(null, null, {checkIfSupported: !0}) && me.storage("isAuthenticated", _isAuthenticated), me.events.triggerEvent("on_authentication_state_change", newState, options), me.mobileApp.send("authenticationStateChange", {
authenticated: newState,
options: options
}), log("on_authentication_state_change : " + newState), _isAuthenticated == !0 && me.selectedBdu.Id && me.tracking.storeAuthentication && me.tracking.storeAuthentication(me.selectedBdu.Id))
}
function logCallTimer(t, name, options)
{
t = +new Date - t;
var LogLevel;
LogLevel = options.result == "error" ? "Error" : "Info",
me.lib.axisLog("Akamai response time", LogLevel, {
name: name,
time: t,
platform: me.cfg.Akamai.platform_id
})
}
function checkCallerID(methodName, caller)
{
var txt,
isOK = !0;
return typeof caller != "string" && (txt = 'missing argument: "caller"', isOK = !1), me.lib.isAlphaNumeric(caller) || (txt = ' "caller" argumant is not alphanumeric.', isOK = !1), txt && (caller = typeof caller == "undefined" ? "*undefined*" : caller, log(methodName + "(" + caller + ") " + txt, "E")), isOK
}
function getServiceUrl(restApi)
{
return me.cfg.configFromAxis || log("getServiceUrl(" + restApi + ") - config from Axis not ready.", "W", {force: !0}), me.cfg.Akamai.apiUrl + me.cfg.Akamai.platform_id + restApi
}
function aisGET(serviceURL, onSuccess, onError, optAjaxParams, ajaxManager, options)
{
var ajaxParams,
url;
options = options ? options : {};
var timeStamp = (+new Date).toString().slice(-5),
callTimer = +new Date,
jsonpCallback = me.lib.randomString(5, "ABCDEFGHIJKLMNOPQRSTUWXYZ") + timeStamp;
try
{
ajaxParams = {
timeout: 15e3,
url: serviceURL + "?format=jsonp&responsefield=" + jsonpCallback,
contentType: "application/javascript",
cache: !0,
dataType: "jsonp",
jsonpCallback: jsonpCallback,
success: function(result)
{
logCallTimer(callTimer, options.akamaiService, {result: "success"}),
onSuccess && onSuccess(result)
},
error: function(XMLHttpRequest, textStatus, errorThrown)
{
logCallTimer(callTimer, options.akamaiService, {result: "error"});
var errmode = "E",
errMsg = errorThrown && errorThrown.message ? errorThrown.message : errorThrown;
errMsg == "timeout" && me.lib.axisLog("Akamai timeout after " + ajaxParams.timeout / 1e3 + "sec " + serviceURL, "Error"),
onError ? onError({
XMLHttpRequest: XMLHttpRequest,
textStatus: textStatus,
errorThrown: errorThrown,
errmode: errmode
}) : log(errorThrown + " - aisGet(" + serviceURL + ") ", errmode, {force: !0})
},
complete: function(){}
},
$.extend(ajaxParams, optAjaxParams),
log(timeStamp + " aisGET(" + ajaxParams.url + ")"),
$.ajax(ajaxParams)
}
catch(err)
{
url = ajaxParams.url ? ajaxParams.url : serviceURL,
log(timeStamp + " " + err + " aisGET(" + url + ")", "E")
}
}
function cerberus()
{
var cerberusId,
cerberusScale;
me.cfg.watchdogDisable != !0 && (cerberusId = me.lib.getParameterByName("cerberus"), cerberusId = cerberusId == null ? "" : cerberusId, cerberusScale = me.lib.getParameterByName("cerberusScale"), cerberusScale != null && $("body").css({transform: "scale(0.5, 0.5) !important"}), window.top.postMessage(encodeURIComponent(cerberusInfo(cerberusId)), "*"))
}
function cerberusInfo(cerberusId)
{
function findUrlinScriptTag(scrTag)
{
var url = "",
P;
try
{
var innerTxt = $(scrTag)[0].text,
txtTl = innerTxt.toLowerCase(),
idx = txtTl.indexOf("axisauthapi.js");
idx > -1 && (P = txtTl.lastIndexOf("http://", idx), P > -1 && (url = txtTl.substring(P, idx + 14)))
}
catch(e)
{
log("cerberus.findUrlinScriptTag()")
}
return url
}
var apiUrl,
info;
try
{
return apiUrl = "", $("script").each(function()
{
var src = $(this).attr("src"),
sr1;
typeof src != "undefined" && src != "" ? (sr1 = src.toLowerCase(), sr1.indexOf("axisauthapi.js") > -1 && (apiUrl = src)) : apiUrl == "" & apiUrl != "*" && (apiUrl = findUrlinScriptTag(this) + "*")
}), info = {
messageSender: "cerberus",
data: {
id: cerberusId,
destinationCode: vhBrand.destinationCode,
ver: me.ver,
ms: me.timeStat,
jquery: $.fn.jquery,
apiUrl: apiUrl,
baseApiUrl: me.cfg.baseApiUrl,
axisConfigUrl: me.cfg.axisConfigUrl,
href: document.location.href,
vhBrand: vhBrand
}
}, JSON.stringify(info)
}
catch(e)
{
info = {
messageSender: "cerberus",
data: {id: cerberusId},
error: e
};
try
{
return JSON.stringify(info)
}
catch(e)
{
log("JSON lib error, IE7 not supported.", "E")
}
}
}
var me = window.axisAuthApi,
log = new me.consoleLog(me.name),
_isAuthenticated,
_authenticatedResponse,
_identity,
_checkAuthCount,
_checkAfterLoginLoop,
_isReady,
auth,
identity,
configErr;
log("ver.: " + me.ver, "i", {force: !0}),
me.info = function()
{
var inf = {};
return inf.ver = me.ver, inf.name = me.name, inf._isAuthenticated = _isAuthenticated, inf._identity = _identity, inf.selectedBdu = me.selectedBdu, inf.vhBrand = me.vhBrand, inf.allowedResources = {}, inf.allowedResources.list = me.allowedResources.list, inf
},
me.possibleIdps,
me.selectedBdu = {},
Date.now = Date.now || function()
{
return +new Date
},
me.isAuthenticated = function(caller, options)
{
if (checkCallerID("isAuthenticated", caller) && (options = options ? options : {}, options.firstCall == !0 || me.isReady({
caller: caller,
methodName: "isAuthenticated"
})))
{
if (log("isAuthenticated(caller:" + caller + ", performAuthentication:" + (options.performAuthentication ? options.performAuthentication : "no") + ")  status:" + _isAuthenticated), typeof _isAuthenticated == "boolean" && !options.redirectAfterLogin)
{
if (_isAuthenticated)
{
if (typeof options.onSuccess == "function")
options.onSuccess({authenticated: !0});
return !0
}
if (options.performAuthentication != !0)
{
if (typeof options.onSuccess == "function")
options.onSuccess({authenticated: !1});
return !1
}
}
options.performAuthentication && me.messaging.show(null, {spinner: !0}),
me.callbackManager.add(caller, "isAuthenticated", options.onSuccess),
me.callbackManager.add(caller, "isAuthenticated_ERR", options.onError);
var url = getServiceUrl("/init/");
return aisGET(url, function(result)
{
result.authenticated ? _authenticatedResponse = result : me.possibleIdps = result.possible_idps;
var source = options.redirectAfterLogin ? "redirectAfterLogin" : "isAuthenticated";
if (authenticationStateChange(result.authenticated, {source: source}), options.redirectAfterLogin)
{
authenticationResult("redirectAfterLogin");
return
}
me.callbackManager.call(caller, "isAuthenticated", options.onSuccess, result),
options.performAuthentication && result.authenticated == !1 && me.bduChooser.open(result, "auth")
}, function(e)
{
log("isAuthenticated(" + caller + ")  url:" + url + " " + e.textStatus + " - " + e.errorThrown, e.errmode, {force: !0}),
me.callbackManager.call(caller, "isAuthenticated_ERR", options.onError, e, options.passThruValue)
}, null, {
methodName: "isAuthenticated",
methodArgs: arguments,
caller: caller
}, {akamaiService: "init"}), "WAITING_FOR_RESPONSE"
}
},
me.getIdentity = function(caller, options)
{
function isIdentityExpired()
{
if (_identity.jsig_block && _identity.jsig_block.timestamp)
return Math.floor(Date.now() / 1e3) - _identity.jsig_block.timestamp > 3600 ? (me.storage("identity", null), !0) : !1
}
if ((options = options ? options : {}, checkCallerID("getIdentity", caller)) && (options.firstCall == !0 || me.isReady({
caller: caller,
methodName: "getIdentity"
})))
{
if (log("getIdentity(" + caller + ")"), typeof _identity == "object" && _identity.authenticated !== !1)
if (isIdentityExpired())
log("cached identity expired.");
else if (log(_identity, "D", {sourceFn: "cached result: getIdentity(" + caller + ")"}), typeof options.onSuccess == "function")
{
options.onSuccess(_identity, options.passThruValue);
return !0
}
me.callbackManager.add(caller, "getIdentity", options.onSuccess),
me.callbackManager.add(caller, "getIdentity_ERR", options.onError);
var url = getServiceUrl("/identity/");
return aisGET(url, function(result)
{
result.authenticated !== !1 && (me.storage("identity", result), _identity = result),
log(result, "D", {sourceFn: "result: getIdentity(" + caller + ")"}),
me.callbackManager.call(caller, "getIdentity", options.onSuccess, result, options.passThruValue)
}, function(e)
{
log("error: getIdentity(" + caller + ") " + e.errorThrown, "E"),
me.callbackManager.call(caller, "getIdentity_ERR", options.onError, e, options.passThruValue)
}, null, {
methodName: "getIdentity",
methodArgs: arguments,
caller: caller
}, {akamaiService: "identity"}), "WAITING_FOR_RESPONSE"
}
},
me.performAuthentication = function(caller, options)
{
function performAuthentication()
{
var url = getServiceUrl("/init/");
aisGET(url, function(result)
{
authenticationStateChange(result.authenticated, {source: "performAuthentication"}),
result.authenticated ? me.ui.closeWithMessage(null, {
text: {
en: "Authenticated.",
fr: "Authentifié"
},
timer: 1e3,
authN: !0
}) : me.bduChooser.open(result, "auth")
}, function(e)
{
log("performAuthentication(" + caller + ") " + e.errorThrown, "E"),
me.callbackManager.call(caller, "performAuthentication_ERR", options.onError, e, options.passThruValue),
me.messaging.show("ERM-02")
}, null, {
methodName: "performAuthentication",
methodArgs: arguments,
caller: caller
}, {akamaiService: "init"})
}
if (checkCallerID("performAuthentication", caller) && me.isReady({
caller: caller,
methodName: "performAuthentication"
}))
{
if (log("performAuthentication(" + caller + ")"), options = options ? options : {}, _isAuthenticated == !0)
return !0;
if (me.possibleIdps !== undefined & !_isAuthenticated)
{
me.bduChooser.open(me.possibleIdps, "auth");
return
}
me.messaging.show(null, {spinner: !0}),
_identity = undefined,
me.callbackManager.add(caller, "performAuthentication_ERR", options.onError),
performAuthentication()
}
},
me.performLogout = function(caller, options)
{
if (checkCallerID("performLogout", caller) && me.isReady({
caller: caller,
methodName: "performLogout"
}))
{
options = options ? options : {},
log("performLogout(" + caller + ")");
var url = getServiceUrl("/slo/");
aisGET(url, function(result)
{
if (authenticationStateChange(result.authenticated, {
source: "performLogout",
caller: caller
}), options.onSuccess)
options.onSuccess(result)
}, null, {cache: !1}, {
methodName: "performLogout",
methodArgs: arguments,
caller: caller
}, {akamaiService: "slo"}),
me.allowedResources.clear(),
_identity = undefined
}
},
me.allowedResources = {},
me.allowedResources.list = [],
me.allowedResources.set = function(resourceId, status, akamaiResponse)
{
resourceId = resourceId ? resourceId.toString() : "";
var ndx = me.allowedResources.check(resourceId, !0);
typeof ndx != "undefined" && ndx > -1 && me.allowedResources.list.splice(ndx, 1),
me.allowedResources.list.push({
resource: resourceId,
authorization: status,
akamaiResponse: akamaiResponse
}),
me.allowedResources.webStorage_push()
},
me.allowedResources.check = function(resourceId, returnIndex)
{
me.allowedResources.webStorage_pull();
var retVal;
return $.each(me.allowedResources.list, function(i)
{
this.resource == resourceId && (retVal = returnIndex == !0 ? i : this.akamaiResponse)
}), retVal
},
me.allowedResources.webStorage_push = function()
{
me.storage(null, null, {checkIfSupported: !0}) && me.storage("allowedResources", me.allowedResources.list)
},
me.allowedResources.webStorage_pull = function()
{
if (me.storage(null, null, {checkIfSupported: !0}))
{
var storedList = me.storage("allowedResources");
Object.prototype.toString.call(storedList) === "[object Array]" && (me.allowedResources.list = storedList)
}
},
me.allowedResources.clear = function()
{
me.allowedResources.list.length = 0,
me.storage("allowedResources", "")
},
me.isAuthorizedForResource = function(caller, resourceId, options)
{
function isAuthorizationExpired()
{
if (resourceInfo.jsig_block && resourceInfo.jsig_block.timestamp)
return Math.floor(Date.now() / 1e3) - resourceInfo.jsig_block.timestamp > 3600 ? (me.allowedResources.clear(), !0) : !1
}
var err,
returnVal,
resourceInfo,
url;
if (checkCallerID("isAuthorizedForResource", caller) && me.isReady({
caller: caller,
methodName: "isAuthorizedForResource"
}))
{
if (options = options ? options : {}, err = !1, _isAuthenticated == !1 && (log("isAuthorizedForResource(" + caller + ") - user not authenticated", "e"), err = !0), resourceId || (log("isAuthorizedForResource(" + caller + ") missing resourceId", "E"), err = !0), err)
{
if (options.onError)
options.onError("ERROR");
return "ERROR"
}
if (log("isAuthorizedForResource(" + caller + ", " + resourceId + ") " + (axisAuthApi.lib.isNumeric(options.chainedCallback) ? "chainedCallback:" + options.chainedCallback : "")), returnVal = "WAITING_FOR_RESPONSE", me.callbackManager.add(caller, "isAuthorizedForResource", options.onSuccess, options), me.callbackManager.add(caller, "isAuthorizedForResource_ERR", options.onError), resourceInfo = me.allowedResources.check(resourceId), typeof resourceInfo == "object" && typeof resourceInfo.authorization == "boolean")
if (isAuthorizationExpired())
log("resource " + resourceId + " expired in session storage");
else
return me.callbackManager.call(caller, "isAuthorizedForResource", options.onSuccess, resourceInfo, options), options.showMessageWhenNotAuthorized & resourceInfo.authorization == !1 && me.messaging.show("ERM-01", {
txtVarName: "brand",
txtVarValue: resourceId
}), resourceInfo.authorization;
return url = getServiceUrl("/identity/resourceAccess/" + resourceId), aisGET(url, function(result)
{
result.authenticated == !1 ? authenticationStateChange(result.authenticated) : (authenticationStateChange(!0), options.showMessageWhenNotAuthorized & result.authorization == !1 && me.messaging.show("ERM-01", {
txtVarName: "brand",
txtVarValue: resourceId
}), me.allowedResources.set(resourceId, result.authorization, result)),
me.callbackManager.call(caller, "isAuthorizedForResource", options.onSuccess, result, options)
}, function(e)
{
log("isAuthorizedForResource(" + caller + ", " + resourceId + ") ptv:" + options.passThruValue + ", ERR: " + e.textStatus + " - " + e.errorThrown, e.errmode, {force: !0}),
me.callbackManager.call(caller, "isAuthorizedForResource_ERR", options.onError, e)
}, null, {
methodName: "isAuthorizedForResource",
methodArgs: arguments,
caller: caller,
chainedCallback: options.chainedCallback
}, {akamaiService: "identity/resourceAccess"}), returnVal
}
},
me.isAuthorizedForResources = function(caller, resources, options)
{
function loopCall()
{
me.isAuthorizedForResource(caller, resources[i], {
onSuccess: function(result)
{
if (processResult(result))
options.onSuccess(!0, options.passThruValue, result);
else if (i++, i < resources.length)
loopCall();
else
{
options.showMessageWhenNotAuthorized && me.messaging.show("ERM-01", {
txtVarName: "brand",
txtVarValue: listOfResources(resources)
});
options.onSuccess(!1, options.passThruValue)
}
},
chainedCallback: i
})
}
function processResult(result)
{
return result.authorization == !0 ? !0 : !1
}
function listOfResources(resources)
{
for (var OR = me.ui.currentLanguage == "fr" ? " ou " : " or ", res = "", j = 0; j < resources.length; j++)
res = res == "" ? resources[j] + " " : res + OR + resources[j] + " ";
return res
}
var err,
i;
if (checkCallerID("isAuthorizedForResources", caller) && me.isReady({methodName: "isAuthorizedForResources"}))
{
if (options = options ? options : {}, err = !1, _isAuthenticated || (log("isAuthorizedForResources(" + caller + ") - user not authenticated", "E"), err = !0), resources || (log("isAuthorizedForResources(" + caller + ") missing resources", "E"), err = !0), Object.prototype.toString.call(resources) != "[object Array]" && (log("isAuthorizedForResources(" + caller + ") resources is not JS Array", "E"), err = !0), err)
{
if (options.onError)
options.onError("ERROR");
return "ERROR"
}
if (options.vcmsFormat = typeof options.vcmsFormat == "boolean" ? options.vcmsFormat : !0, options.vcmsFormat === !0)
for (i = 0; i < resources.length; i++)
typeof resources[i].ResourceCode == "undefined" ? (log("isAuthorizedForResources(" + caller + ") - vcmsFormat ResourceCode==undefined", "E"), log(resources, "D", {force: !0})) : resources[i] = resources[i].ResourceCode;
return i = 0, loopCall(), "WAITING_FOR_RESPONSE"
}
},
me.akamai = function(caller, key, options)
{
if (checkCallerID("akamai", caller) && me.isReady({
caller: caller,
methodName: "akamai"
}))
{
if (log("akamai(" + caller + ", " + key + ")"), !key)
return log("akamai() missing key", "E"), "ERROR";
var url = getServiceUrl("/" + key + "/");
return aisGET(url, function(result)
{
if (options.onSuccess)
options.onSuccess(result, key, url)
}, function(e)
{
if (options.onError)
options.onError(e)
}, null, {
methodName: "akamai",
methodArgs: arguments,
caller: caller
}, {akamaiService: key}), "WAITING_FOR_RESPONSE"
}
},
me.bdu = function(encBduData, bduData)
{
encBduData && (bduData = JSON.parse(decodeURIComponent(encBduData))),
me.selectedBdu = bduData,
log("bdu(" + me.selectedBdu.Id + ") " + me.selectedBdu.DisplayName + " " + bduData.Urn),
me.events.triggerEvent("on_bdu_selection", me.selectedBdu),
me.ui.showItem("_bdu_login"),
me.selectedBdu.AdjustHeight && $("#ifrAxisAuthApi").height(me.selectedBdu.AdjustHeight + "%"),
me.selectedBdu.Scroll && $("#axAuthApi_main_bduLogin").css({"overflow-y": "scroll"}),
_checkAuthCount = 0,
_checkAfterLoginLoop = !0,
setTimeout(checkAfterLogin, me.cfg.pingingDelay)
},
_checkAuthCount = 0,
_checkAfterLoginLoop = !1,
me.checkAfterLoginLoopSet = function(val)
{
_checkAfterLoginLoop = val
},
me.storage = function(key, value, options)
{
function isHtml5storage()
{
try
{
return "sessionStorage" in window && window.sessionStorage !== null
}
catch(e)
{
return !1
}
}
if (options && options.checkIfSupported)
return isHtml5storage();
if (!isHtml5storage())
return null;
if (key = me.name + "_" + key, typeof value == "undefined")
try
{
var itm = sessionStorage.getItem(key);
return itm != "" ? JSON.parse(decodeURIComponent(itm)) : null
}
catch(ex)
{
log("storage(get, " + key + ") - " + ex.message, "E", {hide: !0})
}
else
value = value == null ? "" : encodeURIComponent(JSON.stringify(value)),
sessionStorage.setItem(key, value)
},
me.getServiceUrl = function(arg)
{
return getServiceUrl(arg)
},
me.makeBduRedirectUrl = function(bduStr)
{
var lang = me.vhBrand.lang.def ? me.vhBrand.lang.def : "";
return me.getServiceUrl("/init/") + bduStr + "?responsemethod=redirect&responsetarget=" + me.cfg.Akamai.responsetarget + "&lang=" + lang
},
me.events = {
log: document.location.search.indexOf("eventlog") > -1 ? !0 : !1,
list: {},
queue: [],
addEvent: function(evname, callback)
{
me.events.list[evname] || (me.events.list[evname] = $.Callbacks()),
me.events.list[evname].add(callback)
},
removeEvent: function(evname, callback)
{
me.events.list[evname] && me.events.list[evname].remove(callback)
},
triggerEvent: function(evname, ev, options)
{
if (options = options ? options : {}, evname != "on_ready" && _isReady == !1)
{
me.events.queue.push({
evname: evname,
ev: ev,
options: options
});
return
}
me.events.list[evname] ? (log(evname + " : event fired, source:" + options.source, "I", {force: !0}), me.events.list[evname].fire(ev, options)) : me.events.log | me.cfg.debug && log(evname + " : event fired before it was registered!", "W", {force: !0})
},
processQueue: function()
{
for (var i = 0; i < me.events.queue.length; i++)
log("firing event from queue: " + me.events.queue[i].evname),
me.events.triggerEvent(me.events.queue[i].evname, me.events.queue[i].ev, me.events.queue[i].options);
me.events.queue.length = 0
}
},
$(document).ready(function()
{
function msgListener(event)
{
var originDomain = me.lib.parseUrlDomain(me.cfg.baseApiUrl),
messageData = me.lib.getInterFrameMessage(event);
messageData != null && (log("msgListener(origin: " + event.origin + ") crossframe messageSender: " + messageData.messageSender), me.alfaCrossCookie.msgCallback(messageData), me.alfaThirdPartyCookie.msgCallback(messageData), me.forms.msgCallback(messageData), messageData.messageSender == "aisRedirect" && me.getIdentity("aisRedirect", {onSuccess: function(response)
{
var authN = response.authenticated == !1 ? !1 : !0;
authenticationStateChange(authN),
authenticationResult("aisRedirect")
}}))
}
window.addEventListener ? addEventListener("message", msgListener, !1) : attachEvent("onmessage", msgListener),
log("ver.: " + me.ver + " document.ready() completed")
}),
_isReady = !1,
me.isReady = function(option)
{
return option = option ? option : {}, typeof option.forceValue == "boolean" && (_isReady = option.forceValue), option.methodName && _isReady == !1 && log(option.methodName + "(" + option.caller + " )  API not ready.", "E"), _isReady
},
me.ready = function(caller, options)
{
function fnLoop()
{
if (_isReady)
readyCount = 0,
makeCall();
else if (readyCount++, readyCount > 32)
{
var e = {errorThrown: "ready() failed after " + (readyCount - 1) * loopInterval / 1e3 + " sec"};
me.events.triggerEvent("api_ready_timeout"),
readyCount = 0,
me.callbackManager.call(caller, "ready_ERR", options.onError, e),
me.callbackManager.remove(caller, "ready", options.onSuccess),
log(e.errorThrown, "E")
}
else
log("ready-fnLoop(" + caller + ", " + readyCount + ")"),
setTimeout(fnLoop, loopInterval)
}
function makeCall()
{
me.events.processQueue(),
me.callbackManager.call(caller, "ready", options.onSuccess, null, options)
}
me.callbackManager.add(caller, "ready", options.onSuccess, options),
me.callbackManager.add(caller, "ready_ERR", options.onError);
var readyCount = 0,
makeCallCount = 0,
loopInterval = 500;
_isReady ? makeCall() : fnLoop()
},
me.timeStat = +new Date,
me.storage(null, null, {checkIfSupported: !0}) && (auth = me.storage("isAuthenticated"), typeof auth == "boolean" && authenticationStateChange(auth, {source: "sessionStorage"}), identity = me.storage("identity"), identity != null && typeof identity == "object" && (_identity = identity)),
configErr = !1,
typeof vhBrand != "undefined" && vhBrand ? (me.vhBrand = $.extend({}, vhBrand), typeof vhBrand.destinationCode == "undefined" && (me.vhBrand.lang = {}, configErr = !0, log("vhBrand.destinationCode==undefined ! ERROR: destinationCode not set on hosting page.", "E"))) : (me.vhBrand = {}, me.vhBrand.lang = {}, configErr = !0, log("vhBrand==undefined ! ERROR: vhBrand Is missing at hosting page or declared AFTER this script loads.", "E")),
me.vhBrand.disabled ? (log("vhBrand.disabled=true ! Authentication is disabled !", "E"), _isReady = !0) : me.configFromAxis.get(function(response)
{
response && response.error == !0 || (vhBrand.override && ($.extend(me.vhBrand, vhBrand.override), log("vhBrand settings from Axis Config were overriden on host page!", "W", {force: !0})), me.ui.currentLanguage = me.vhBrand.lang.def, vhBrand.preloadAIS == !0 ? (log("preloadAIS=true", "i"), me.isAuthenticated(me.name, {
firstCall: !0,
onSuccess: function(result)
{
result.authenticated ? (me.getIdentity(me.name, {
firstCall: !0,
onSuccess: function(){},
onError: function(){}
}), _isReady = !0, me.events.triggerEvent("on_ready")) : (_isReady = !0, me.events.triggerEvent("on_ready")),
me.timeStat = +new Date - me.timeStat,
log("& [AIS] ready in " + me.timeStat + "ms", "i")
},
onError: function(e)
{
log("on startup " + e.errorThrown, "e")
}
})) : (_isReady = !0, me.events.triggerEvent("on_ready"), me.timeStat = +new Date - me.timeStat, log("ready in " + me.timeStat + "ms", "i")), cerberus())
}, {}),
me.setDebugCookie = function(n)
{
return me.lib.cookie("alFadEbUg", n, {
expires: "#$%",
path: "/"
}), n == 125 ? "Reload page after setting cookie." : "uzzzzh!"
}
}();
/*! AxisAuthApi.ui  13.12.2 */
(function(parent)
{
function build_HTML()
{
var htm = new uiHTML;
htm.container(),
htm.waitSpinner(),
htm.bduChooserList(),
htm.messageBox(),
htm.form(),
switchMode(),
parent.vhBrand.lang.bilingual == !1 && $(".axAuthApi_header_btm").hide(),
me.lang(me.currentLanguage)
}
function switchMode()
{
switch (me.mode)
{
case"auth":
$("#axAuthApi_container .m-auth").show(),
$("#axAuthApi_container .m-scrn").hide();
break;
case"screendoor":
$("#axAuthApi_container .m-auth").hide(),
$("#axAuthApi_container .m-scrn").show();
break;
case"message":
$("#axAuthApi_footer .m-auth").hide(),
$("#axAuthApi_footer .m-scrn").hide(),
$("#axAuthApi_footer .m-msg").show()
}
}
function makeOverlay()
{
if (parent.events.triggerEvent("on_ui_open"), vhBrand.uiOverlay == !1)
{
$("#axAuthApi_container").css({
"-moz-box-shadow": "0 0 0 #fff",
"-webkit-box-shadow": "0 0 0 #fff",
"box-shadow": "0 0 0 #fff"
});
return
}
if (!$("#" + _modalOverlay_id) || !($("#" + _modalOverlay_id).length > 0))
{
var divOverlay = document.createElement("div");
$(divOverlay).attr("id", _modalOverlay_id),
$(divOverlay).css({
"background-color": "#000",
opacity: .5,
filter: "alpha(opacity=50)",
position: "fixed",
top: 0,
left: 0,
width: "100%",
height: "100%",
"z-index": 2147483645
}),
$("body").append(divOverlay)
}
}
var me = {},
log,
mainCSS,
_header,
_waitMsg,
_bdu_chooser,
_bdu_chooser_list,
_bdu_chooser_autoSuggest,
_back2_bduchooser,
_bdu_login,
_message_box,
_message_box_txt,
_form_box,
_modalOverlay_id,
_ui_container,
_ui_inner_container,
uiHTML,
_headerText;
if (me.ver = "13.12.2", me.name = "ui", parent[me.name] = me, log = new parent.consoleLog(parent.name + "." + me.name), me.mode, me.status, typeof vhBrand == "undefined")
return log("vhBrand is undefined on hosting page", "E"), !1;
mainCSS = vhBrand.mobile ? parent.cfg.baseApiUrl + "axisAuthApi-320x480.css" : parent.cfg.baseApiUrl + "axisAuthApi-620x480.css",
$("head").append('<link type="text/css" rel="stylesheet" href="' + mainCSS + '"><\/link>'),
me.cfg = {},
me.cfg.loading_spinner_url = parent.cfg.baseApiUrl + "spinner.html",
me.info = function()
{
var inf = {};
return inf.ver = me.ver, inf.name = me.name, inf.status = me.status, inf.mode = me.mode, inf.currentLanguage = me.currentLanguage, inf.cfg = me.cfg, inf
},
_modalOverlay_id = "axAuthApiOvl",
uiHTML = function()
{
$(_ui_container).length != 0 && ($(_ui_container).remove(), log("uiHTML() removed exisitng UI before creating new.", "W"));
var helpLink1 = "",
helpLink2 = "",
helpLink3 = "";
try
{
var helpLink1 = {
en: parent.vhBrand.msgbox_needHelp_url_en,
fr: parent.vhBrand.msgbox_needHelp_url_fr
},
helpLink2 = {
en: parent.vhBrand.msgbox_thrdKuki_url_en,
fr: parent.vhBrand.msgbox_thrdKuki_url_fr
},
helpLink3 = {
en: parent.cfg.urls.ie11workaround,
fr: parent.cfg.urls.ie11workaround + "?lang=fr"
}
}
catch(e)
{
log("Axis config err " + e, "E")
}
this.container = function()
{
_ui_container = $('<div id="axAuthApi_container" class="axAuthApi_container">'),
$("body").append(_ui_container),
$(_ui_container).focus(),
_ui_header = $('<div id="axAuthApi_header">   <div class="axAuthApi_header_top">       <div class="axAuthApi_header_back">           <div id="axAuthApi_header_back_link" style="line-height: 2.5em !important;">               <div class="axAuthApi_arrow-left axAuthApi-fnt"><\/div><a onclick="axisAuthApi.ui.clk(\'bduchooser\'); return false;" class="axAuthApi-fnt" href="#" data-en="Back" data-fr="Retour">Back<\/a>           <\/div>       <\/div>       <div class="axAuthApi_header_title m-auth axAuthApi-fnt" data-en="Sign In"              data-fr="Se Connecter">Sign In<\/div>       <div class="axAuthApi_header_title m-scrn axAuthApi-fnt" data-en="Before You Continue" data-fr="Avant De Poursuivre" style="display:none;">Before You Continue<\/div>       <div class="axAuthApi_header_close"><a onclick="axisAuthApi.ui.close(\'btnX\'); return false;" class="axAuthApi-fnt" href="#" >&#215;&nbsp;<\/a><\/div>   <\/div>   <div class="axAuthApi_header_btm axAuthApi-fnt">       <a href="#" onclick="axisAuthApi.ui.lang(\'en\');">English<\/a> &nbsp;|&nbsp; <a href="#" onclick="axisAuthApi.ui.lang(\'fr\');">Français<\/a>   <\/div><\/div>'),
$(_ui_container).append(_ui_header),
_back2_bduchooser = $("#axAuthApi_header_back_link"),
_ui_inner_container = $('<div id="axAuthApi_main"><\/div>'),
$(_ui_container).append(_ui_inner_container),
_ui_footer = $('<div id="axAuthApi_footer">    <div class="axAuthApi_footer_btns" >        <div class="axAuthApi_footer_btns_1 m-auth">            <div class="axAuthApi_footer_btn axAuthApi-fnt" style="width: 70%; margin: 0 auto;" onclick="axisAuthApi.ui.clk(\'nosvcprov\')" data-en="I do not have a TV service provider" data-fr="Je n’ai pas de fournisseur de services de télévision">I do not have a TV service provider<\/div>        <\/div>        <div class="axAuthApi_footer_btns_2 m-scrn" style="display:none;">            <div style="float:left; width:50%;"><div class="axAuthApi_footer_btn axAuthApi-2ln axAuthApi-fnt" style="float:right; margin-right:5%" onclick="axisAuthApi.ui.clk(\'antenna\')"  data-fr="Aucun fournisseur&nbsp;télé/&lt;br/&gt;Antenne"            data-en="I use antenna service">I use antenna service<\/div><\/div>            <div style="float:right;width:50%;"><div class="axAuthApi_footer_btn axAuthApi-2ln axAuthApi-fnt" style="float:left;  margin-left: 5%" onclick="axisAuthApi.ui.clk(\'internet\')" data-fr="Aucun fournisseur&nbsp;télé/&lt;br/&gt;Internet seulement" data-en="I use internet connection">I use internet connection<\/div><\/div>        <\/div>        <div class="axAuthApi_footer_btns_3 m-msg" style="display:none;">            <div class="axAuthApi_footer_btn axAuthApi-fnt" style="width: 15%; margin: 0 auto;" onclick="axisAuthApi.ui.close(\'btnF\'); return false;" class="" data-en="Close" data-fr="Fermer">Close<\/div>        <\/div>    <\/div>    <div id="axAuthApi_footer_msg" class="axAuthApi_footer_links axAuthApi-2ln" style="">        <a href="' + helpLink1.en + '" target="_blank" class="axAuthApi-fnt" style="display:inline-block;    width: 40%" data-en-href="' + helpLink1.en + '" data-fr-href="' + helpLink1.fr + '" data-en="Need Help?" data-fr="Besoin d’aide?">Need Help?<\/a>        <br />        <a href="' + helpLink2.en + '" target="_blank" class="axAuthApi-fnt" style="display:inline-block;    width:100%" data-en-href="' + helpLink2.en + '" data-fr-href="' + helpLink2.fr + '" data-en="Having trouble? Make sure that 3rd party cookies are enabled. Why?" data-fr="Vous éprouvez des problèmes? Assurez-vous d’activer les cookies tiers.  Pourquoi?">Having trouble? Make sure that 3rd party cookies are enabled. Why? <\/a>        <a href="' + helpLink3.en + '" target="_blank" class="axAuthApi-fnt" style="display:none; color:red !important; width:100%" data-en-href="' + helpLink3.en + '" data-fr-href="' + helpLink3.fr + '" data-en="Having trouble with IE11? Please read this." data-fr="Ayant des problèmes avec IE11? S\'il vous plaît lire ceci.">Having trouble with IE11? Please read this. <\/a>    <\/div><\/div>'),
$(_ui_container).append(_ui_footer)
},
this.bduChooserList = function(onReady)
{
if (me.mode == "auth" | me.mode == "screendoor")
{
var html = '<div id="axAuthApi_main_bduChooser">   <div style="display: table; height:20%; width:100%">';
html = me.mode == "screendoor" ? html + '<div class="axAuthApi-fnt bb" style="display:table-cell; vertical-align: middle; text-align: center; height:100%;" data-en="Please select your TV service provider" data-fr="Veuillez sélectionner votre fournisseur de services de télévision.">Please select your TV service provider<\/div>' : html + '       <div class="axAuthApi-fnt bb" style="display:table-cell; vertical-align: middle; text-align: center; height:100%;" >           <div>               <span data-en="If you get ' + parent.vhBrand.displayName + " at home through a participating TV provider, you can watch " + parent.vhBrand.displayName + ' GO at no additional charge."                     data-fr="Si vous avez accès à ' + parent.vhBrand.displayName + " à domicile via un fournisseur de services de télévision participant, vous pouvez aussi profiter de " + parent.vhBrand.displayName + ' GO sur votre ordinateur portable ou appareil mobile sans frais supplémentaires">               <\/span>           <\/div><br/><br/>           <div class="axAuthApi_bdu2"              data-en="Select your TV service provider and login with your subscriber account info:"              data-fr="Connectez-vous avec vos accès:">               Select your TV service provider and login with your subscriber account info.           <\/div><\/div>',
html = html + '   <\/div>    <div class="axAuthApi_main_bduChooser-list axAuthApi-fnt"><\/div>    <div style="position:absolute; bottom:17%; left:0; width:80%; padding: 0 10%; " class="axAuthApi-fnt" data-en="TV provider not listed above? Search below:" data-fr="Votre fournisseur ne se trouve pas dans la liste?"><\/div>    <div id="axAuthApi_main_bduChooser-autoSuggest" ><\/div><\/div>',
_bdu_chooser = $(html),
$(_ui_inner_container).append(_bdu_chooser),
_bdu_chooser_list = $(".axAuthApi_main_bduChooser-list"),
_bdu_chooser_autoSuggest = $("#axAuthApi_main_bduChooser-autoSuggest"),
$(_bdu_chooser).hide(),
_bdu_login = $('<div id="axAuthApi_main_bduLogin" style="width:90%; padding:0 5%; height:90%;"><iframe src="' + me.cfg.loading_spinner_url + '" name="ifrAxisAuthApi" id="ifrAxisAuthApi" scrolling="no" frameborder="0" style="width:100%; height:100%;"/><\/div>'),
$(_ui_inner_container).append(_bdu_login)
}
onReady && onReady()
},
this.messageBox = function(onReady)
{
_message_box = $('<div id="axAuthApi_main_msgBox"><div style="display: table; height:100%; width:100%"><div class="axAuthApi_main_msgBox-txt" style="display:table-cell; vertical-align: middle; text-align: center;"><\/div><\/div><\/div>'),
$(_ui_inner_container).append(_message_box),
_message_box_txt = $(".axAuthApi_main_msgBox-txt"),
onReady && onReady()
},
this.waitSpinner = function()
{
_waitMsg = $('<div class="axAuthApi_spinner" style="width:100%; height:100%;"><\/div>'),
$(_ui_inner_container).append(_waitMsg);
var spinner = new parent.lib.Spinner({
lines: 12,
width: 4,
length: 12,
radius: 12,
color: "#000",
trail: 60,
shadow: !1,
hwaccel: !1,
className: "spinner",
zIndex: 0,
top: 100,
left: 100
}),
spinnerSize = 27;
spinner.opts.top = $(_ui_inner_container).height() / 2 - spinnerSize,
spinner.opts.left = $(_ui_inner_container).width() / 2 - spinnerSize,
spinner.spin(_waitMsg[0])
},
this.form = function()
{
_form_box = $('<div id="axAuthApi_main_form" style="height:120%;"><iframe src="' + me.cfg.loading_spinner_url + '" name="ifrAxisAuthApiFr" id="ifrAxisAuthApiFr" scrolling="no" frameborder="0" style="width:100%; height:100%;"/><\/div>'),
$(_form_box).hide(),
$(_ui_inner_container).append(_form_box)
}
},
me.htmlOfBduChooser = function(html)
{
$(_bdu_chooser_list).html(html)
},
me.htmlOfMessage = function(html)
{
$(_message_box_txt).html(html)
},
me.back2bduChooser = function(mode)
{
mode == "show" && $(_back2_bduchooser).css("visibility", "visible"),
mode == "hide" && $(_back2_bduchooser).css("visibility", "hidden")
},
_headerText = {},
me.headerText = function(txtObj, options)
{
var selector;
switch (me.mode)
{
case"auth":
selector = ".axAuthApi_header_title.m-auth";
break;
case"screendoor":
selector = ".axAuthApi_header_title.m-scrn"
}
options && options.restore ? ($(selector).attr("data-en", _headerText.en), $(selector).attr("data-fr", _headerText.fr)) : (_headerText.en = $(selector).attr("data-en"), _headerText.fr = $(selector).attr("data-fr"), $(selector).attr("data-en", txtObj.en), $(selector).attr("data-fr", txtObj.fr)),
me.lang(me.currentLanguage)
},
me.messageBoxClear = function()
{
$(_message_box).attr("data-id", ""),
$(_message_box_txt).css("color", "#808080"),
$(_message_box_txt).empty()
},
me.getElement = function(elem)
{
switch (elem)
{
case"_bdu_chooser_autoSuggest":
return _bdu_chooser_autoSuggest
}
},
me.showFooterMsg = function()
{
$($("#axAuthApi_footer_msg a")[1]).css("display", "none"),
$($("#axAuthApi_footer_msg a")[2]).css("display", "inline-block")
},
me.show = function(mode, onReady)
{
if (log("show(" + mode + ")"), me.status == "CSS_error")
{
me.closeWithMessage(null, {text: {
en: "Oops",
fr: "Oups"
}});
return
}
if (me.status == "open" && mode == "message")
{
onReady();
return
}
me.mode = mode,
makeOverlay(),
build_HTML(),
parent.configFromAxis.get(function()
{
me.status = "open",
onReady()
})
},
me.close = function(closer, options)
{
(log("close(" + me.mode + ")"), parent.messaging.messageStack("pull")) || (parent.checkAfterLoginLoopSet(!1), $(_ui_container).remove(), $("#" + _modalOverlay_id).remove(), parent.events.triggerEvent("on_ui_close"), parent.mobileApp.send("close", {
closer: closer,
options: options
}), me.mode == "screendoor" && parent.screenDoor.close(), me.mode == "auth" && closer == "btnX" && parent.events.triggerEvent("on_authentication_cancel"), me.mode = null, parent.bduChooser.mode = null, me.status = "closed")
},
me.closeWithMessage = function(msgCode, options)
{
var txt,
timeout;
if (msgCode)
{
log("closeWithMessage() msgCode argument unsupported.");
return
}
if (typeof options == "undefined" || typeof options.text == "undefined")
{
log("closeWithMessage() message text is undefined.", "E");
return
}
log("closeWithMessage(" + options.text.en + ")"),
me.close("closeWithMessage()", options),
makeOverlay();
switch (me.currentLanguage)
{
case"en":
txt = options.text.en;
break;
case"fr":
txt = options.text.fr;
break;
default:
txt = options.text.en
}
me.currentLanguage,
timeout = options && options.timer ? options.timer : 5e3,
$("#" + _modalOverlay_id).html('<div style="position:absolute; top:50%; left:50%; width:400px; margin-left:-200px; height:40px; margin-top:-30px; color:white; text-align:center; font-family:Arial; font-size:20px; ">' + txt + "<\/div>"),
setTimeout(function()
{
$("#" + _modalOverlay_id).remove(),
parent.events.triggerEvent("on_ui_close")
}, timeout)
},
me.lang = function(lang)
{
switch (lang)
{
case"en":
$("#axAuthApi_container [data-en]").each(function()
{
$(this).html($(this).attr("data-en"))
}),
$("#axAuthApi_container [data-en-href]").each(function()
{
$(this).attr("href", $(this).attr("data-en-href"))
});
break;
case"fr":
$("#axAuthApi_container [data-fr]").each(function()
{
$(this).html($(this).attr("data-fr"))
}),
$("#axAuthApi_container [data-fr-href]").each(function()
{
$(this).attr("href", $(this).attr("data-fr-href"))
});
break;
default:
lang = me.currentLanguage
}
me.currentLanguage = lang;
switch (lang)
{
case"en":
$('#axAuthApi_container [lang="en"]').show(),
$('#axAuthApi_container [lang="fr"]').hide();
break;
case"fr":
$('#axAuthApi_container [lang="en"]').hide(),
$('#axAuthApi_container [lang="fr"]').show();
break;
default:
lang = me.currentLanguage
}
me.mode == "auth" | me.mode == "screendoor" && parent.bduChooser.autoSuggest_build()
},
me.showItem = function(item)
{
function switchFooter(item)
{
switch (item)
{
case"_message_box":
$("#axAuthApi_footer .m-auth").hide(),
$("#axAuthApi_footer .m-scrn").hide(),
$("#axAuthApi_footer .m-msg").show();
break;
case"_bdu_chooser":
me.mode == "auth" && ($("#axAuthApi_footer .m-auth").show(), $("#axAuthApi_footer .m-scrn").hide(), $("#axAuthApi_footer .m-msg").hide()),
me.mode == "screendoor" && ($("#axAuthApi_footer .m-auth").hide(), $("#axAuthApi_footer .m-scrn").show(), $("#axAuthApi_footer .m-msg").hide());
break;
case"_bdu_login":
me.mode == "auth" && ($("#axAuthApi_footer .m-auth").hide(), $("#axAuthApi_footer .m-scrn").hide(), $("#axAuthApi_footer .m-msg").hide()),
me.mode == "screendoor" && ($("#axAuthApi_footer .m-auth").hide(), $("#axAuthApi_footer .m-scrn").show(), $("#axAuthApi_footer .m-msg").hide());
break;
case"_form_box":
$("#axAuthApi_footer .m-auth").hide(),
$("#axAuthApi_footer .m-scrn").hide(),
$("#axAuthApi_footer .m-msg").hide()
}
}
makeOverlay();
switch (item)
{
case"_bdu_chooser":
$(_bdu_chooser).show(),
$(_bdu_login).hide(),
$(_message_box).hide(),
$(_back2_bduchooser).css("visibility", "hidden"),
$(_waitMsg).hide(),
$(_form_box).hide(),
parent.messaging.show(null, {clear: !0});
break;
case"_bdu_login":
$(_bdu_chooser).hide(),
$(_bdu_login).show(),
$(_message_box).hide(),
$(_back2_bduchooser).css("visibility", "visible"),
$(_waitMsg).hide(),
$(_form_box).hide();
break;
case"_message_box":
$(_bdu_chooser).hide(),
$(_bdu_login).hide(),
$(_message_box).show(),
$(_back2_bduchooser).css("visibility", "hidden"),
$(_waitMsg).hide(),
$(_form_box).hide();
break;
case"_waitMsg":
$(_waitMsg).show();
break;
case"_form_box":
$(_bdu_chooser).hide(),
$(_bdu_login).hide(),
$(_message_box).hide(),
$(_back2_bduchooser).css("visibility", "visible"),
$(_waitMsg).hide(),
$(_form_box).show()
}
switchFooter(item)
},
me.clk = function(command)
{
switch (command)
{
case"bduchooser":
$("#ifrAxisAuthApi").attr("src", "about:blank"),
me.headerText(null, {restore: !0}),
parent.messaging.messageStack("pull"),
parent.bduChooser.autoSuggest_build(),
parent.checkAfterLoginLoopSet(!1),
parent.bduIsPreselected ? (me.close("clk()"), parent.performAuthentication("backBtn", {forceBduChooser: !0})) : me.showItem("_bdu_chooser");
break;
case"ndhelp":
break;
case"nosvcprov":
parent.checkAfterLoginLoopSet(!1),
parent.messaging.show("ERM-11", {
txtVarName: "brand",
txtVarValue: parent.vhBrand.displayName,
back2bduChooser: !0,
headerText: {
en: "Thank You",
fr: ""
}
});
break;
case"antenna":
parent.screenDoor.bdu(null, {
Id: 500,
Name: "antenna",
Order: 1
}),
parent.messaging.show("CFM-04", {
back2bduChooser: !0,
headerText: {
en: "Thank You",
fr: "Merci"
}
});
break;
case"internet":
parent.screenDoor.bdu(null, {
Id: 501,
Name: "internet",
Order: 1
}),
parent.messaging.show("CFM-04", {
back2bduChooser: !0,
headerText: {
en: "Thank You",
fr: "Merci"
}
});
break;
default:
log("ui.clk(command) - bad command: " + command, "E")
}
}
})(axisAuthApi),
function(parent)
{
function doLogosHtml()
{
function makeChooserItemHtml(bdu)
{
var bduData = encodeURIComponent(JSON.stringify(bdu)),
target = vhBrand.os == "ios" ? "" : "ifrAxisAuthApi",
url,
imgStyle,
name;
return me.mode == "auth" ? (url = makeBduRedirectUrl(bdu.Urn), imgStyle = bdu.ForceLogoStyle ? bdu.ForceLogoStyle : "width:120px; height:83px;", '<a href="' + url + '" target="' + target + '" onclick="axisAuthApi.bdu(\'' + bduData + '\');" ><img src="' + bdu.LogoUrl + '" + style="' + imgStyle + '" /><\/a>') : me.mode == "screendoor" ? (name = bdu.ScreenDoorName ? bdu.ScreenDoorName : bdu.DisplayName, '<a href="#" onclick="axisAuthApi.screenDoor.bdu(\'' + bduData + '\');" style="font-weight:medium;">' + name + "<\/a>") : void 0
}
var htm,
i,
bdu;
if (me.mode == "auth")
{
for (htm = '<table style="width:100%; height:100%;"><tr>', i = 0; i < me.bduList_supported.length; i++)
bdu = me.bduList_supported[i],
parent.lib.isNumeric(bdu.LogoOrder) & typeof bdu.LogoUrl == "string" ? htm = htm + '<td style="text-align:center;">' + makeChooserItemHtml(bdu) + "<\/td>" : log("LogoOrder=NaN or LogoUrl!=string - " + bdu.AkamaiName, "E", {hide: !0});
htm = htm + "<\/tr>"
}
if (me.mode == "screendoor")
{
for (htm = '<table style="width:100%; height:100%;"><tr>', i = 0; i < me.bduList_screenDoorLogos.length; i++)
{
if (i > 5)
{
log("doLogosHtml() too many logos in bduList_screenDoorLogos[].", "E");
break
}
bdu = me.bduList_screenDoorLogos[i],
htm = htm + '<td style="text-align:center; width:33.33%;">' + makeChooserItemHtml(bdu) + "<\/td>",
i == 2 && (htm = htm + "<\/tr><tr>")
}
htm = htm + "<\/tr>"
}
return htm + "<\/table>"
}
function makeBduRedirectUrl(bduStr)
{
return parent.makeBduRedirectUrl(bduStr)
}
function load_BDU_list(onSuccess, options)
{
parent.configFromAxis.get(function()
{
var bdus;
try
{
bdus = parent.cfg.configFromAxis.Configuration.GlobalConfiguration.axisAuthApi.bduList,
bdus = JSON.parse(bdus)
}
catch(e)
{
bdus = undefined,
log("bdu list reading failed.", "E")
}
parent.lib.isArray(bdus) && onSuccess(bdus, options)
});
return
}
function processBDUs()
{
var prop,
newObject,
i;
if (!me.bduList || Object.prototype.toString.apply(me.bduList) !== "[object Array]")
return log("processBDUs() BDU list is null", "E"), !1;
if (me.mode == "auth")
{
for (me.bduList_supported.length = 0, i = 0; i < me.bduList.length; i++)
{
me.bduList[i].Urn && (log("Urn can not be defined in Axis config", "w", {force: !0}), delete me.bduList[i].Urn);
for (prop in me.possibleIdps)
if (me.possibleIdps[prop].name == me.bduList[i].AkamaiName)
{
prop.indexOf(":") == -1 ? log("processBDUs(" + prop + ")  illegal urn", "e", {hide: !0}) : me.bduList[i].Urn = prop;
try
{
me.bduList[i].LogoUrl = me.possibleIdps[prop].logos.full
}
catch(e)
{
parent.lib.isNumeric(me.bduList[i].LogoOrder) && log("processBDUs(" + me.bduList[i].AkamaiName + ") missing/bad logo url.", "E")
}
newObject = jQuery.extend({}, me.bduList[i]),
me.bduList_supported.push(newObject)
}
}
me.bduList_supported.sort(function(obj1, obj2)
{
return obj1.LogoOrder - obj2.LogoOrder
})
}
if (me.mode == "screendoor")
{
for (me.bduList_screenDoorLogos.length = 0, i = 0; i < me.bduList.length; i++)
parent.lib.isNumeric(me.bduList[i].ScreenDoorLogoOrder) && me.bduList_screenDoorLogos.push(me.bduList[i]);
me.bduList_screenDoorLogos.sort(function(obj1, obj2)
{
return obj1.ScreenDoorLogoOrder - obj2.ScreenDoorLogoOrder
})
}
}
function isBduPreselectedCheck(objFromAkamai)
{
var bduID,
bduList,
bdu,
found,
possibleIdps,
prop;
if (parent.tracking && parent.tracking.getLastScreenDoorBdu)
{
if ((bduID = parent.tracking.getLastScreenDoorBdu(), bduID == null) || !parent.lib.isNumeric(bduID))
return !1;
try
{
bduList = parent.cfg.configFromAxis.Configuration.GlobalConfiguration.axisAuthApi.bduList,
bduList = JSON.parse(bduList)
}
catch(e)
{
return log("isBduPreselected() " + e.message), !1
}
if (!parent.lib.isArray(bduList))
return log("isBduPreselected() bduList not an array."), !1;
if (bdu = $.grep(bduList, function(e)
{
return e.Id == bduID
}), bdu.length > 0)
bdu = bdu[0];
else
return log("isBduPreselected() bdu " + bduID + " not found in bduList."), !1;
found = !1,
possibleIdps = objFromAkamai;
for (prop in possibleIdps)
if (possibleIdps[prop].name == bdu.AkamaiName)
if (found = !0, prop.indexOf(":") == -1)
{
found:!1;
log("isBduPreselectedCheck(" + bduID + " - " + prop + ")  illegal urn", "w")
}
else
bdu.Urn = prop;
return log("isBduPreselected()=true " + bduID), found ? bdu && bdu.Urn ? bdu : !1 : !1
}
return !1
}
function checkCookieSupport()
{
var ret = parent.lib.cookieSupport.test();
log("lib.cookieSupport.test()=" + ret);
switch (ret)
{
case null:
parent.messaging.show("", {
back2bduChooser: !1,
text: {
en: "Cookies are blocked in this browser. They are essential for user authentication. Please enable cookies including third party cookies.",
fr: "Les cookies sont bloqués dans votre navigateur. Ils sont essentiels pour l'authentification de l'utilisateur. S'il vous plaît activer cette option, y compris les cookies tiers."
}
})
}
ret == !0 && (log("check3rdPartyCookie()  "), parent.cfg.check3rdPartyCookieCapability != !1) && parent.alfaThirdPartyCookie.checkSupport(function(isSupported)
{
if (parent.lib.browser.isIE11())
{
parent.ui.showFooterMsg();
return
}
isSupported || parent.messaging.show("ERM-18", {back2bduChooser: !1})
}, parent.cfg.th3rdpartyCookie + "alfatpc.aspx")
}
var me = {},
log,
_is_autoSuggest_build;
me.ver = "13.7.17",
me.name = "bduChooser",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
me.mode,
me.bduList,
me.bduList_supported = [],
me.bduList_screenDoorLogos = [],
me.possibleIdps,
me.open = function(objFromAkamai, mode)
{
log("open(" + mode + ")");
switch (mode)
{
case"auth":
if (!objFromAkamai)
{
log("open(auth) possibleIdps from Akamai = null", "E");
return
}
if (me.possibleIdps = objFromAkamai.possible_idps ? objFromAkamai.possible_idps : objFromAkamai, me.possibleIdps.length == 0)
{
log("open(auth) possibleIdps.len=0"),
"E";
return
}
break;
case"screendoor":
break;
default:
log("open() missing mode", "E");
return
}
me.mode = mode,
load_BDU_list(function(response, options)
{
if (options = options ? options : {}, options.error)
{
log(error.errorThrown, "E");
return
}
if (me.bduList = response, processBDUs() == !1)
{
parent.ui.closeWithMessage(null, {text: {
en: "Oops",
fr: "Oups"
}});
return
}
parent.ui.show(mode, function()
{
var preselectedBdu,
url;
parent.ui.htmlOfBduChooser(doLogosHtml()),
parent.ui.showItem("_bdu_chooser"),
me.autoSuggest_build(),
checkCookieSupport(),
preselectedBdu = isBduPreselectedCheck(objFromAkamai),
mode == "auth" && preselectedBdu && (url = parent.makeBduRedirectUrl(preselectedBdu.Urn), $("#ifrAxisAuthApi").attr("src", url), parent.bdu(null, preselectedBdu))
})
})
},
_is_autoSuggest_build = !1,
me.autoSuggest_build = function()
{
var bdu_chooser_autoSuggest = parent.ui.getElement("_bdu_chooser_autoSuggest"),
autoSuggest;
if (_is_autoSuggest_build && $(bdu_chooser_autoSuggest).empty(), typeof $.fn.alfaAutoSuggest == "undefined")
{
log("$.fn.alfaAutoSuggest is undefined.", "E");
return
}
if (me.bduList == null)
{
log("autoSuggest_build() me.bduList=null", "E");
return
}
if (me.bduList.length == 0)
{
log("autoSuggest_build() me.bduList.length=0", "E");
return
}
autoSuggest = document.createElement("input"),
$(autoSuggest).attr("type", "text"),
$(bdu_chooser_autoSuggest).append(autoSuggest),
$(autoSuggest).alfaAutoSuggest(me.bduList, {
selectionLimit: 1,
keyDelay: 200,
selectedItemProp: "Id",
selectedItemProp: "DisplayName",
searchObjProps: "DisplayName",
startText: parent.ui.currentLanguage == "en" ? "Service provider" : "Fournisseur",
emptyText: parent.ui.currentLanguage == "en" ? "No results found" : "Aucun résultat trouvé",
resultClick: function(data)
{
var url;
me.mode == "auth" && (typeof data.attributes.Urn != "undefined" ? (url = parent.makeBduRedirectUrl(data.attributes.Urn), $("#ifrAxisAuthApi").attr("src", url), parent.bdu(null, data.attributes)) : (url = parent.forms.makeUrl_email(data), url == !1 ? parent.messaging.show("ERM-12_OLD", {
txtVarName: "brand",
txtVarValue: parent.vhBrand.displayName,
back2bduChooser: !0
}) : parent.messaging.show("ERM-12", {
txtVarName: "url",
txtVarValue: url,
back2bduChooser: !0
}))),
me.mode == "screendoor" && parent.screenDoor.bdu(null, data.attributes)
}
}),
_is_autoSuggest_build = !0
}
}(axisAuthApi),
function(parent)
{
var me = {},
log,
_messageStack;
me.ver = "13.11.15",
me.name = "messaging",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
_messageStack = [],
me.show = function(msgCode, options)
{
function doHtml(msgCode, options)
{
function textVariable(txt, options)
{
function loop(txt, options)
{
var found = txt.indexOf("<%" + options.txtVarName + "%>");
newText = txt.replace("<%" + options.txtVarName + "%>", options.txtVarValue),
found > -1 && loop(newText, options)
}
if (typeof txt == "undefined" || txt == null)
{
log("textVariable(" + msgCode + ") text of message is undefined.", "e");
return
}
var newText;
return loop(txt, options), newText
}
function checkVariables(txt, startIndex, options)
{
var P1,
P2,
testStr;
txt && ((startIndex = startIndex ? startIndex : 0, txt = txt.substring(startIndex), P1 = txt.indexOf("<%"), P2 = txt.indexOf("%>"), P1 == -1 | P2 == -1) || (options.txtVarName || startIndex == 0 && log("show(" + msgCode + ") message text contains variables, but options.txtVarName is undefined!", "E", {hide: !0}), P1 = P1 + 2, testStr = txt.substring(P1, P2), testStr.indexOf(" ") > -1 && log("show(" + msgCode + ") <%" + testStr + "%> contains spaces!", "E"), checkVariables(txt, P2 + 2, options)))
}
var msg,
currLang,
messages,
sEn,
sFr;
if (!options.spinner)
{
if (msg = {}, currLang = parent.ui.currentLanguage ? parent.ui.currentLanguage : parent.vhBrand.lang.def ? parent.vhBrand.lang.def : "en", options.text)
typeof options.text == "string" ? msg[currLang] = options.text : msg = options.text;
else
try
{
messages = parent.cfg.configFromAxis.Configuration.GlobalConfiguration.Resources.Messages,
msg = $.extend({}, messages[msgCode]),
parent.lib.isEmptyObject(msg) ? (msg = {}, msg.en = "Error loading message " + msgCode, msg.fr = "Message de chargement d`erreur " + msgCode, log("Message text not found for msgCode=" + msgCode, "E")) : log("show(" + msgCode + ") " + parent.ui.currentLanguage, "I")
}
catch(ex)
{
log("show(" + msgCode + ") - " + ex.message, "E"),
msg = {},
msg.en = "Error loading message...",
msg.fr = "Message de chargement d`erreur..."
}
return options.txtVarName && (msg.en = textVariable(msg.en, options), msg.fr = textVariable(msg.fr, options)), checkVariables(msg.en, undefined, options), checkVariables(msg.fr, undefined, options), sEn = parent.ui.currentLanguage == "fr" ? 'style="display:none"' : "", sFr = parent.ui.currentLanguage == "en" ? 'style="display:none"' : "", sEn == "" & msg.en == undefined && (msg.en = "en=undefined"), sFr == "" & msg.fr == undefined && (msg.fr = "fr=undefined"), '<div lang="en" ' + sEn + ' class="axAuthApi_main_msgBox-lang">' + msg.en + '<\/div><div lang="fr" ' + sFr + ' class="axAuthApi_main_msgBox-lang">' + msg.fr + "<\/div>"
}
}
if (options = options ? options : {}, options.clear)
{
parent.ui.status == "open" && parent.ui.messageBoxClear();
return
}
me.messageStack("pushing?", {
msgCode: msgCode,
options: options
}) || parent.ui.show("message", function()
{
if (parent.ui.htmlOfMessage(doHtml(msgCode, options)), parent.ui.showItem("_message_box"), options.back2bduChooser && parent.ui.back2bduChooser("show"), options.headerText && parent.ui.headerText(options.headerText), options.spinner)
{
parent.ui.showItem("_waitMsg");
return
}
options.fromStack == !0 || me.messageStack("push", {
msgCode: msgCode,
options: options
})
})
},
me.messageStack = function(mode, msgObj)
{
var returnVal = !1,
options;
switch (mode)
{
case"pushing?":
_messageStack.length > 0 && (msgObj.options && msgObj.options.fromStack == !0 || (_messageStack.push(msgObj), returnVal = !0));
break;
case"push":
_messageStack.push(msgObj),
returnVal = !0;
break;
case"pull":
_messageStack.shift(),
_messageStack.length > 0 && (msgObj = _messageStack[0], options = $.extend(msgObj.options, {fromStack: !0}), me.show(msgObj.msgCode, options), returnVal = !0)
}
return log("messageStack(" + mode + ", " + (msgObj && msgObj.msgCode ? msgObj.msgCode : "") + ") = " + returnVal + "  stack.len=" + _messageStack.length), returnVal
}
}(axisAuthApi);
/*! screenDoor.ui  13.7.17 */
(function(parent)
{
var me = {},
log,
_cookieName;
me.ver = "13.7.17",
me.name = "screenDoor",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
_cookieName = "screenDoorBduId",
me.open = function()
{
if (parent.vhBrand.screenDoorDisable)
{
parent.events.triggerEvent("on_screendoor_complete", !0, {screenDoorDisable: !0}),
log("screenDoor disabled for destinationCode=" + parent.vhBrand.destinationCode, "i");
return
}
if (parent.isAuthenticated("screendoor") === !0)
{
parent.events.triggerEvent("on_screendoor_complete", !0),
log("open() - user is authN, do not open screen door.");
return
}
var hasCookie = parent.lib.cookie(_cookieName);
if (hasCookie)
{
log("open() - ScreenDoor cokie found " + _cookieName + "=" + hasCookie + " do not open screen door ."),
me.close({doNotPost: !0});
return
}
log("open() - ScreenDoor shown"),
parent.selectedBdu = null,
parent.bduChooser.open(undefined, "screendoor")
},
me.close = function(options)
{
var hasCookie = parent.lib.cookie(_cookieName);
if (hasCookie = hasCookie ? !0 : !1, (typeof parent.selectedBdu == "undefined" || parent.selectedBdu == null) && (parent.selectedBdu = {Id: -1}), !options || options.doNotPost != !0)
try
{
parent.selectedBdu && typeof parent.selectedBdu.Id !== undefined ? $.post(parent.cfg.surveyApiUrl + "AddEntry?bduId=" + parent.selectedBdu.Id) : log(".close() - selectedBdu.Id=undefined")
}
catch(ex)
{
log(".close() - " + ex.message, "E")
}
parent.tracking.crossCookies && parent.tracking.crossCookies("sb=" + parent.selectedBdu.Id),
parent.events.triggerEvent("on_screendoor_complete", hasCookie)
},
me.bdu = function(encBduData, bduData)
{
encBduData && (bduData = JSON.parse(decodeURIComponent(encBduData))),
parent.selectedBdu = bduData,
parent.events.triggerEvent("on_bdu_selection", parent.selectedBdu),
typeof bduData.Order != "undefined" && bduData.Order > 0 || parent.messaging.show("CFM-03", {
txtVarName: "BDUName",
txtVarValue: parent.selectedBdu.DisplayName,
txtVarClass: "bduSelected",
back2bduChooser: !0,
headerText: {
en: "Thank You",
fr: "Merci"
}
}),
parent.lib.cookie(_cookieName, parent.selectedBdu.Id, {
path: "/",
expires: parent.cfg.screenDoor.cookieExpiresDays
}),
log("bdu() ScreenDoor cokie planted: " + _cookieName + "=" + parent.selectedBdu.Id + " expires=" + parent.cfg.screenDoor.cookieExpiresDays)
},
me.clearCookie = function()
{
parent.lib.cookie(_cookieName, "")
},
me.readCookie = function()
{
var c = {};
return c[_cookieName] = parent.lib.cookie(_cookieName), c
}
})(axisAuthApi),
function(parent)
{
var me = {},
log;
me.ver = "13.11.28",
me.name = "forms",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
me.open = function(formName, data)
{
switch (formName)
{
case"email":
var url = me.makeUrl_email(data);
if (typeof url == "boolean" && url == !1)
return !1;
me.show(url)
}
},
me.show = function(url)
{
parent.ui.showItem("_form_box"),
$("#ifrAxisAuthApiFr").attr("src", url),
log("show(" + url + ") loaded Form.")
},
me.msgCallback = function(messageData)
{
messageData && messageData.messageSender != "alfaForm" || parent.ui.close()
},
me.makeUrl_email = function(data)
{
var silverpopId,
urlArgs;
try
{
silverpopId = parent.cfg.forms.email.silverpopId
}
catch(e)
{
return log("open() - bad sillverpopId in axis config", "E"), !1
}
return typeof data.attributes.email == "undefined" ? !1 : (urlArgs = "bdu=" + encodeURIComponent(data.attributes.DisplayName) + "&e=" + encodeURIComponent(data.attributes.email) + "&i=" + silverpopId + "&brand=" + encodeURIComponent(parent.vhBrand.displayName) + "&lang=" + parent.ui.currentLanguage, parent.cfg.baseApiUrl + "forms/email.html?" + urlArgs)
}
}(axisAuthApi),
function(parent)
{
function listManupulation(list, action)
{
if (list)
{
var arr = list.split("+");
if (arr.length == 0)
return null;
if (action == "first")
return arr[0];
if (action == "last")
return arr[arr.length - 1];
if (action == "prev")
return arr.length == 1 ? arr[0] : arr[arr.length - 2]
}
return null
}
function checkCallerID(methodName, caller)
{
var txt,
isOK = !0;
return typeof caller != "string" && (txt = 'missing argument: "caller"', isOK = !1), parent.lib.isAlphaNumeric(caller) || (txt = ' "caller" argumant is not alphanumeric.', isOK = !1), txt && (caller = typeof caller == "undefined" ? "*undefined*" : caller, log(methodName + "(" + caller + ") " + txt, "E")), isOK
}
var me = {},
log,
_crossCookiesReady,
_documentReady;
me.ver = "13.7.17",
me.name = "tracking",
parent[me.name] = me,
log = new parent.consoleLog(parent.name + "." + me.name),
me.cookie = {},
me.wasAuthenticatedOnOtherSite = function()
{
var bdu = me.getLastAuthenticatedBdu(),
arr,
found,
i;
if (bdu == null)
return !1;
for (arr = me.cookie.ab.split("+"), found = !1, i = 0; i < arr.length; i++)
arr[i] != bdu && (found = !0);
return found
},
me.showCookie = function(pass)
{
var LF,
txt,
propertyName;
LF = pass == "alert" ? "\n" : "<br/>",
txt = "Tracking Cookie" + LF + LF;
for (propertyName in me.cookie)
txt = txt + propertyName + " : " + me.cookie[propertyName] + LF;
pass == "alert" && alert(txt)
},
me.getFirstVisitedSite = function()
{
return _crossCookiesReady == !1 ? (log("getFirstVisitedSite() called before tracking.crossCookiesReady() ", "E"), null) : listManupulation(me.cookie.ch, "first")
},
me.getAllVisitedSites = function()
{
return _crossCookiesReady == !1 ? (log("getAllVisitedSites() called before tracking.crossCookiesReady() ", "E"), null) : me.cookie.ch
},
me.getLastAuthenticatedBdu = function()
{
return _crossCookiesReady == !1 ? (log("getLastAuthenticatedBdu() called before tracking.crossCookiesReady() ", "E"), null) : (log("getLastAuthenticatedBdu()= " + listManupulation(me.cookie.ab, "last")), listManupulation(me.cookie.ab, "last"))
},
me.getPrevAuthenticatedBdu = function()
{
return _crossCookiesReady == !1 ? (log("getPrevAuthenticatedBdu() called before tracking.crossCookiesReady() ", "E"), null) : listManupulation(me.cookie.ab, "prev")
},
me.getFirstAuthenticatedBdu = function()
{
return _crossCookiesReady == !1 ? (log("getFirstAuthenticatedBdu() called before tracking.crossCookiesReady() ", "E"), null) : listManupulation(me.cookie.ab, "first")
},
me.getLastScreenDoorBdu = function()
{
return _crossCookiesReady == !1 ? (log("getLastScreenDoorBdu() called before tracking.crossCookiesReady() ", "E"), null) : listManupulation(me.cookie.sb, "last")
},
me.getLastScreenDoorBdu_local = function()
{
return _documentReady == !1 ? (log("getLastScreenDoorBdu_local() - called before $(document).ready()", "E"), null) : (log("getLastScreenDoorBdu_local()= " + parent.lib.cookie("screenDoorBduId")), parent.lib.cookie("screenDoorBduId"))
},
me.clearCookie = function()
{
parent.alfaCrossCookie.clear()
},
me.storeAuthentication = function(bduID)
{
var id = parent.vhBrand.id ? parent.vhBrand.id : "null";
me.crossCookies("ab=" + bduID + "-" + parent.vhBrand.id + "&ciasteczka_au=ab")
},
me.timeCrossCookie = +new Date,
_crossCookiesReady = !1,
me.crossCookies = function(urlArg)
{
parent.alfaCrossCookie.update(urlArg, function(cookieData, errMsg)
{
me.cookie = cookieData,
_crossCookiesReady = !0,
parent.events.triggerEvent("cross_cookie_ready", cookieData, {error: errMsg}),
errMsg && log("[alfacdc] - " + errMsg),
me.timeCrossCookie = +new Date - me.timeCrossCookie,
log("CrossCookie ready in " + me.timeCrossCookie + "ms", "i")
}, parent.cfg.baseApiUrl)
},
me.isCrossCookiesReady = function(option)
{
return option = option ? option : {}, typeof option.forceValue == "boolean" && (_crossCookiesReady = option.forceValue), option.methodName && _crossCookiesReady == !1 && log(option.methodName + "(" + option.caller + " )  _crossCookiesReady not ready.", "E"), _crossCookiesReady
},
me.crossCookiesReady = function(caller, onSuccess)
{
function fnLoop()
{
if (_crossCookiesReady)
tryCount = 0,
onSuccess();
else if (tryCount++, tryCount > 50)
{
var e = {errorThrown: "crossCookiesReady() failed after " + (tryCount - 1) + " tries"};
tryCount = 0,
log(e.errorThrown, "E")
}
else
log("crossCookiesReady-fnLoop(" + caller + ", " + tryCount + ")"),
setTimeout(fnLoop, 500)
}
if (checkCallerID("isAuthorizedForResource", caller))
{
var tryCount = 0;
_crossCookiesReady ? onSuccess() : fnLoop()
}
},
_documentReady = !1,
$(document).ready(function()
{
_documentReady = !0,
parent.ready("axisAuthApi.tracking", {onSuccess: function()
{
parent.vhBrand.disabled || typeof parent.vhBrand.id == "undefined" && log("<id> not set in Axis for :" + vhBrand.destinationCode, "w", {force: !0}),
me.crossCookies("ch=" + parent.vhBrand.id + "&ciasteczka_au=ch")
}})
})
}(axisAuthApi);
 
Tracking = function (auth) {
/* private vars*/
var pVersion = "2.0.5074.19057";
var pSetupAuthTracking = true;
var pAccount = "ctvgmdefault";
var pGlobalSuites = "ctvgmglobal";
var pTrackedPage = false;
var pTrackedAuth = false;
var pValidPageTypes = ['errorPage'];
var pScreenDoorBdu = null;
var pInitialTrackCompleted = false;
var pIsAuthenticated = false;
pAccount = pAccount + "," + pGlobalSuites;
/* private methods*/
function autoSetHierarchy() {
if (s.hier1 == "" || !s.hier1) {
if (s.prop6 != "" || s.prop7 != "" || s.prop8 != "" || s.prop9 != "") {
s.hier1 += s.prop6 != "" ? ("," + s.prop6) : "";
s.hier1 += s.prop7 != "" ? ("," + s.prop7) : "";
s.hier1 += s.prop8 != "" ? ("," + s.prop8) : "";
s.hier1 += s.prop9 != "" ? ("," + s.prop9) : "";
if (s.hier1 && s.hier1.length && s.hier1.length >= 1 && s.hier1.substring(0, 1) == ",") {
s.hier1 = s.hier1.substring(1);
}
}
}
}
function containsValue(value) {
return !(value == "" || value == null);
}
function getIdentity(callSource) {
auth.ready("gptGetidentityReady", {
onSuccess: function () {
auth.getIdentity("gptGetIdentity", {
onSuccess: function (response, data) {
trackLoginResult(response, data);
},
onError: function (response, data) {
track();
pTrackedAuth = true;
},
passThruValue: { source: callSource }
});
}
});
}
function isAuthenticated() {
auth.isAuthenticated("gptIsAuthenticated",
{
onSuccess: function (status) {
if (status) {
pIsAuthenticated = status.authenticated;
}
if (status && status.authenticated) {
getIdentity("page");
} else {
track();
}
},
onError: function () {
track();
}
});
}
function setBdu(checkisAuthenticated) {
if (auth) {
auth.tracking.crossCookiesReady("trackingSetBduReady",function() {
var value;
if (pScreenDoorBdu) {
value = pScreenDoorBdu.Id;
} else if (auth.tracking.getLastAuthenticatedBdu() && pIsAuthenticated) {
value = auth.tracking.getLastAuthenticatedBdu();
} else {
value = auth.tracking.getLastScreenDoorBdu_local();
}
setLinkTrackVarValue(14, value);
if (checkisAuthenticated) {
isAuthenticated();
}
}
);
}
}
function setLinkTrackVars(nums) {
s.linkTrackVars = "";
var length = nums.length;
for (var i = 0; i < length; i++) {
var num = nums[i];
var eVar = "eVar" + num;
var prop = "prop" + num;
s.linkTrackVars += "," + eVar + "," + prop;
}
}
function setLinkTrackVarValue(num, value) {
if (value) {
if (s.linkTrackVars.toLocaleLowerCase() === "none") {
s.linkTrackVars = "";
}
var eVar = "eVar" + num;
var prop = "prop" + num;
if (s.linkTrackVars.indexOf(eVar) == -1) {
s.linkTrackVars += "," + eVar;
}
if (s.linkTrackVars.indexOf(prop) == -1) {
s.linkTrackVars += "," + prop;
}
if (typeof(value) == "string") {
s[eVar] = s[prop] = value.toLowerCase();
} else {
s[eVar] = s[prop] = value;
}
}
return this;
}
function removeVarValue(num) {
var eVar = "eVar" + num;
var prop = "prop" + num;
s[eVar] = s[prop] = null;
}
function trackLogin(userId) {
setLinkTrackVarValue(11, userId);
setLinkTrackVarValue(12, "authenticated");
setBdu();
var referrerHost = document.referrer.substr(document.referrer.indexOf(".") + 1);
var currentHost = location.host.substr(location.host.indexOf(".") + 1);
if (referrerHost.indexOf(currentHost) != 0) {
var trackEvent4 = true;
if (typeof (Storage) !== "undefined") {
if (sessionStorage.bmTrackingEvent4) {
trackEvent4 = Boolean(sessionStorage.bmTrackingEvent4);
}
}
if (trackEvent4) {
sessionStorage.bmTrackingEvent4 = false;
s.prop52 = s.eVar52 = auth.tracking.wasAuthenticatedOnOtherSite();
if (s.prop52) {
s.prop53 = s.eVar53 = auth.tracking.getLastAuthenticatedBdu();
s.prop54 = s.eVar54 = auth.tracking.getFirstAuthenticatedBdu();
}
setLinkTrackVars([11, 12, 14, 52, 53, 54]);
s.linkTrackEvents = "event4";
s.events = "event4";
s.tl(true, 'o', "bdu-login");
}
}
};
function trackLoginResult(response, data) {
if (response != null && response.identity != null && data != null) {
var trackingSource = data.source;
var userId = response.identity.aisuid;
if (trackingSource === "page" && pTrackedAuth == false) {
trackLogin(userId);
track();
pTrackedAuth = true;
} else if (trackingSource === "login") {
vhTrackVideoHubLogin(userId);
}
}
};
/*public methods*/
function getSiteAccount() {
return pAccount;
}
function getVersion() {
return pVersion;
}
function raiseCustomEvent(eventId, eventDescription, varsToSend) {
if (varsToSend) {
setLinkTrackVars(varsToSend);
} else {
setLinkTrackVars([]);
}
s.linkTrackVars += ",events";
s.linkTrackEvents = eventId;
s.events = eventId;
s.tl(true, 'o', eventDescription);
return this;
}
function setContentTitle(contentTitle) {
if (contentTitle && contentTitle != "") {
setLinkTrackVarValue(3, contentTitle);
}
return this;
}
function setGalleryName(name) {
if (name && name != "") {
setLinkTrackVarValue(4, name);
}
return this;
}
function setSiteAccount(siteAccount) {
if ((siteAccount == "" || siteAccount == null)) {
return this;
}
if (s != null) {
s.un = s.un.replace("ctvgmdefault,", "");
s.un = s.un.replace(pAccount + ",", "");
s.un = siteAccount + "," + s.un;
}
pAccount = siteAccount + "," + pGlobalSuites;
return this;
};
function setSiteId(id) {
s.siteID = id;
}
function setPageName(pageName) {
if (pageName) {
s.pageName = s.eVar2 = pageName.toLowerCase();
}
return this;
};
function setPageType(pageType) {
if (pValidPageTypes.indexOf(pageType) > -1) {
s.pageType = pageType;
}
return this;
}
function setSiteSection(siteSection) {
if (containsValue(siteSection)) {
setLinkTrackVarValue(6, siteSection);
s.channel = siteSection;
}
return this;
};
function setSubSections(subSection2, subSection3, subSection4, subSection5) {
if (containsValue(subSection2)) {
setLinkTrackVarValue(7, subSection2);
}
if (containsValue(subSection3)) {
setLinkTrackVarValue(8, subSection3);
}
if (containsValue(subSection4)) {
setLinkTrackVarValue(9, subSection4);
}
if (containsValue(subSection5)) {
setLinkTrackVarValue(60, subSection5);
}
return this;
}
function track() {
if (pTrackedPage == false && pTrackedAuth == false) {
if (auth) {
if (pSetupAuthTracking) {
pSetupAuthTracking = false;
$(document).ready(function () {
auth.ready("tracking", {
onSuccess: function () {
auth.tracking.crossCookiesReady('trackingCrossCookieReady', function () {
setBdu(true);
});
},
onError: function () {
isAuthenticated();
}
});
auth.events.addEvent('on_bdu_selection', function (bduData) {
pScreenDoorBdu = bduData;
setBdu();
});
auth.events.addEvent('on_authentication_state_change', function (authenticationStatus, options) {
if (options != null && authenticationStatus) {
setBdu();
var tracking = {};
if (pScreenDoorBdu) {
tracking.source = "login";
getIdentity("login");
}
}
});
});
} else if (pInitialTrackCompleted == false) {
pInitialTrackCompleted = true;
pTrackedAuth = true;
trackPage();
}
} else {
pInitialTrackCompleted = true;
trackPage();
}
}
};
function trackPage() {
s.events = "";
if (s.linkTrackVars && s.linkTrackVars.length && s.linkTrackVars.length >= 1 && s.linkTrackVars.substring(0, 1) == ",") {
s.linkTrackVars = s.linkTrackVars.substring(1);
}
if (s.linkTrackEvents && s.linkTrackEvents.length && s.linkTrackEvents.length >= 1 && s.linkTrackEvents.substring(0, 1) == ",") {
s.linkTrackEvents = s.linkTrackEvents.substring(1);
}
if (s.events && s.events.length && s.events.length >= 1 && s.events.substring(0, 1) == ",") {
s.events = s.events.substring(1);
}
autoSetHierarchy();
setBdu();
var s_code = s.t();
if (s_code) {
document.write("<div style='display: none; margin: 0; padding: 0; height: 0; overflow: hidden;'>" + s_code + "</div>");
}
}
function trackLinks(value) {
if (typeof value === "boolean" && value) {
$(document).on("click", "[data-corp]", function (event) {
var linkName = ($(event.target).data("corp"));
trackCorporateLink(linkName);
event.preventDefault();
});
}
return this;
}
function trackLogout() {
pIsAuthenticated = false;
s.linkTrackEvents = s.events = "event24";
s.linkTrackVars += ",events";
removeVarValue(11);
removeVarValue(14);
setLinkTrackVarValue(12, "not authenticated");
setLinkTrackVars([12]);
s.tl(true, "o", "bdu-logout");
}
function trackExternalLinks(value) {
s.trackExternalLinks = value;
return this;
}
function trackCorporateLink(linkName) {
var label = "corporatelink_" + linkName + "_clicked";
s.pageName = s.eVar2 = "";
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.linkTrackVars = "None";
s.events = "";
s.tl(true, "o", label);
}
function trackSearch(term, count) {
if (term) {
setLinkTrackVarValue(1, term);
s.linkTrackEvents += ',prop1';
s.prop2 = count;
}
}
function trackSocial(value) {
setLinkTrackVars([40,41]);
setLinkTrackVarValue(40, value);
setLinkTrackVarValue(41, s.getPageName());
s.events = "";
s.tl(true, "o", value);
}
function vhTrackReleatedIndex(index) {
s.linkTrackVars = "events";
setLinkTrackVars([11, 13, 14,48]);
setLinkTrackVarValue(48, index.toString());
s.linkTrackEvents = "event18";
s.events = "event18";
s.tl(true, 'o', "video-hub-related-video");
return this;
}
function vhTrackSearchKeyword(keyword) {
s.linkTrackEvents = "None";
s.linkTrackVars = "";
s.events = "None";
setLinkTrackVars([57]);
setLinkTrackVarValue(57, keyword);
s.tl(true, "o", keyword);
return this;
}
function vhTrackZoneAndItem(clickZone, clickedItem) {
var clickZoneValue = "video_hub_clicked_zone_" + clickZone;
var clickedItemValue = "video_hub_clicked_item_" + clickedItem;
var linkAndCategoryInfo = "videohub_clicked_zone:" + clickZoneValue + ", video_hub_clicked_item:" + clickedItemValue;
s.linkTrackEvents = "None";
s.events = "None";
setLinkTrackVars([38, 39]);
setLinkTrackVarValue(38, clickZoneValue);
setLinkTrackVarValue(39, clickedItemValue);
s.tl(true, "o", linkAndCategoryInfo);
return this;
}
function vhTrackVideoHubLogin(userId) {
setLinkTrackVarValue(11, userId);
setLinkTrackVarValue(12, "authenticated");
setLinkTrackVarValue(13, document.location.href);
setBdu();
setLinkTrackVars([11, 12, 13, 14]);
s.linkTrackVars += ",events";
s.linkTrackEvents = "event3";
s.events = "event3";
s.tl(true, 'o', "video-hub-login");
s.prop13 = s.eVar13 = "";
};
return {
getSiteAccount: getSiteAccount,
raiseCustomEvent: raiseCustomEvent,
setContentTitle: setContentTitle,
setGalleryName: setGalleryName,
setPageName: setPageName,
setPageType: setPageType,
setSiteAccount: setSiteAccount,
setSiteId: setSiteId,
setSiteSection: setSiteSection,
setSubSections: setSubSections,
setValue: setLinkTrackVarValue,
track: track,
trackExternalLinks: trackExternalLinks,
trackLinks: trackLinks,
trackLogout: trackLogout,
trackCorporateLink: trackCorporateLink,
trackPage: trackPage,
trackSearch: trackSearch,
trackSocial: trackSocial,
version : getVersion,
videoHub: {
trackSearchKeyword: vhTrackSearchKeyword,
trackZoneAndItem: vhTrackZoneAndItem,
trackRelatedIndex: vhTrackReleatedIndex
}
};
}(typeof axisAuthApi === 'undefined' ? null : axisAuthApi);
var TrackingDomain = (window.location + "").match(/^https?:\/\/(\w*\.)?([^\/]+\.[\w]{2,4})\/?(\w*)\/?/i);
var s_visitorNamespace = "ctv";
var s_siteSection = "";
var s_subSection1 = "";
var s_siteFamily = "";
var s_siteName = "";
var s_siteCategory = "";
var s_pageName = "";
var foundValidDomain = TrackingDomain && TrackingDomain[2];
var s = s_gi(Tracking.getSiteAccount());
s.trackExternalLinks = false;
s.linkTrackVars = "none";
s.linkTrackEvents = "none";
s.prop1 = s.eVar1 = "";
s.prop2 = s.eVar2 = "";
s.prop6 = s.eVar6 = "";
s.prop7 = s.eVar7 = "";
s.prop8 = s.eVar8 = "";
s.prop9 = s.eVar9 = "";
s.prop11 = s.eVar11 = "";
s.prop12 = s.eVar12 = "not authenticated";
s.prop16 = s.eVar16 = "";
s.prop17 = s.eVar17 = "";
s.prop20 = s.eVar20 = "";
s.prop18 = s.eVar18 = "";
s.prop20 = s.eVar20 = "";
s.prop21 = s.eVar21 = "";
s.prop22 = s.eVar22 = "";
s.prop23 = s.eVar23 = "";
s.prop24 = s.eVar24 = "";
s.prop42 = s.eVar42 = location.href.toLowerCase();
s.prop43 = s.eVar43 = document.referrer.toLowerCase();
s.hier1 = "";
s.events = "";
s.products = "";
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* Link Tracking Config */
s.linkInternalFilters = "localhost,javascript:";
if (foundValidDomain) {
s.linkInternalFilters += "," + TrackingDomain[2];
}
s.trackDownloadLinks = true;
s.trackExternalLinks = false;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
//s.linkInternalFilters="javascript:,bravo,muchmusic"  //a comma delimited list of domains for each suite, put in the case statements above
s.linkLeaveQueryString = false;
s.trackingServer = "metrics.ctv.ca";
s.trackingServerSecure = "smetrics.ctv.ca";
s.vmk = "497CAD45";
/* PageName Plugin Config */
s.siteID = s_siteName; // optional
s.defaultPage = "home";
s.queryVarsList = ""; // if list, comma delimit
s.pathExcludeDelim = ";";
s.pathConcatDelim = ":"; // page name component separator
/* Plugin Config */
s.usePlugins = true;
function s_doPlugins(s) {
/* Add calls to plugins here */
/* Campaign */
if (!s.campaign) {
s.campaign = s.getQueryParam('kw');
if (!s.campaign) {
s.campaign = s.getQueryParam('cid');
}
s.campaign = s.getValOnce(s.campaign, 's_camp', 0);
}
/* Set Page View Event */
if (typeof (s.IsTrackLink) == "undefined" || typeof (s.IsTrackLink) == undefined || s.IsTrackLink == null || s.IsTrackLink != true) {
s.events = s.apl(s.events, 'event2', ',', 2);
}
/* Copy props to eVars */
var determineCharSet = function () {
var head = document.getElementsByTagName("head");
if (head) {
head = head[0];
if (head) {
var meta = head.getElementsByTagName("meta");
if (meta) {
for (var i = 0; i < meta.length; i++) {
var key = meta[i].getAttribute("http-equiv");
var value = meta[i].getAttribute("content");
if ((key && key.toLowerCase() == "content-type") || meta[i].httpEquiv.toLowerCase() == "content-type") {
if (value.indexOf("charset=") > -1) {
value = value.split(' ').join('');
var charset = value.substring(value.indexOf("charset=") + "charset=".length);
return charset;
}
}
}
}
}
}
return "ISO-8859-1";
};
s.charSet = determineCharSet();
/* Use pagename plugin */
if ((!window.s.pageType) && (!window.s.pageName || s.pageName == "")) {
s.pageName = s.getPageName().toLowerCase();
}
else if (s.pageName.indexOf(s_siteName + ":") != 0) {
s.pageName = s_siteName.toLowerCase() + ":" + s.pageName.toLowerCase();
if (s.pageName.charAt(0)) {
s.pageName = s.pageName.substring(1);
}
}
if ((!window.s.prop5) && (!window.s.prop5 || s.prop5 == "")) {
s.prop5 = s.eVar5 = "Web page";
}
if ((s_siteCategory != "") && (!window.s.prop24) && (!window.s.prop24 || s.prop24 == "")) {
s.prop24 = s.eVar24 = s_siteCategory + ":Web page";
}
if (s_siteFamily != "") {
s.prop25 = s.eVar25 = s_siteFamily;
}
/* Copy props to eVars */
if (s.pageName && !s.eVar2) s.eVar2 = s.pageName.toLowerCase();
if (s.prop3 && !s.eVar3) s.eVar3 = s.prop3;
if (s.prop4 && !s.eVar4) s.eVar4 = s.prop4;
if (s.prop5 && !s.eVar5) s.eVar5 = s.prop5;
if (s.prop6 && !s.eVar6) s.eVar6 = s.prop6;
if (s.prop7 && !s.eVar7) s.eVar7 = s.prop7;
if (s.prop8 && !s.eVar8) s.eVar8 = s.prop8;
if (s.prop9 && !s.eVar9) s.eVar9 = s.prop9;
if (s.prop10 && !s.eVar10) s.eVar10 = s.prop10;
if (s.prop11 && !s.eVar11) s.eVar11 = s.prop11;
if (s.prop12 && !s.eVar12) s.eVar12 = s.prop12;
if (s.prop13 && !s.eVar13) s.eVar13 = s.prop13;
if (s.prop14 && !s.eVar14) s.eVar14 = s.prop14;
if (s.prop15 && !s.eVar15) s.eVar15 = s.prop15;
if (s.prop16 && !s.eVar16) s.eVar16 = s.prop16;
if (s.prop17 && !s.eVar17) s.eVar17 = s.prop17;
if (s.prop20 && !s.eVar20) s.eVar20 = s.prop20;
if (s.prop21 && !s.eVar21) s.eVar21 = s.prop21;
if (s.prop22 && !s.eVar22) s.eVar22 = s.prop22;
if (s.prop23 && !s.eVar23) s.eVar23 = s.prop23;
if (s.prop24 && !s.eVar24) s.eVar24 = s.prop24;
if (s.prop25 && !s.eVar25) s.eVar25 = s.prop25;
}
s.doPlugins = s_doPlugins
/*Media Config Variables*/
s.loadModule("Media");
s.Media.autoTrack = false;
s.Media.trackWhilePlaying = true;
s.Media.trackVars = "events,eVar16,eVar17,eVar18,eVar20,prop16,prop17,prop18,prop20";
s.Media.trackEvents = "event5,event6,event7,event8,event9,event10";
var tracked80 = false;
var tracked20Sec = false;
var tracked120Sec = false;
s.Media.monitor = function (s, media) {
if (media.event == "PLAY") {
lastOffsetPosition = media.offset;
}
if (media.event == "MONITOR") {
secondsHolder += media.offset - lastOffsetPosition;
lastOffsetPosition = media.offset;
if ((!tracked80) && (media.percent >= 80)) {
s.events = "event10";
tracked80 = true;
fireRequest = true;
}
if ((!tracked20Sec) && (secondsHolder >= 20)) {
s.events = s.apl(s.events, "event9", ",");
tracked20Sec = true;
fireRequest = true;
}
if ((!tracked120Sec) && (secondsHolder >= 120)) {
fireRequest = true;
}
if (fireRequest) {
fireRequest = false;
s.products = ";;;;event7=" + secondsHolder;
s.events = s.apl(s.events, "event7", ",");
sendRequest();
}
}
if (media.event == "OPEN") {
lastOffsetPosition = 0;
s.prop16 = s.eVar16 = media.name;
s.prop17 = s.eVar17 = "xx"  //Set by CTV
s.prop18 = s.eVar18 = media.playerName;
s.prop20 = s.eVar20 = "xx"  //Set by CTV
s.events = "event6";
sendRequest();
tracked80 = false;
tracked20Sec = false
tracked120Sec = false
}
//Fire event8 for Video Incomplete if the video is closed prior to reaching 98%
if (media.event == "CLOSE" && (media.percent < 98)) {
s.products = ";;;;event7=" + secondsHolder;
s.events = s.apl(s.events, "event7", ",");
s.events = s.apl(s.events, "event8", ",");
sendRequest();
}
//Fire Close event if the Video is closed after at least 98% is viewed
if ((media.event == "CLOSE") && (media.percent >= 98)) {
s.products = ";;;;event7=" + secondsHolder;
s.events = s.apl(s.events, "event7", ",");
s.events = s.apl(s.events, "event6", ",");
sendRequest();
}
if (media.event == "STOP") {
secondsHolder += media.offset - lastOffsetPosition;
}
function sendRequest() {
s.Media.track(media.name);
s.events = "";
s.products = "";
secondsHolder = 0;
}
}
/************************** PLUGINS SECTION *************************/
/*
* Plugin: getQueryParam 2.3
*/
s.getQueryParam = new Function("p", "d", "u", ""
+ "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+ "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+ ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+ "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+ "=p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", ""
+ "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+ "=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", ""
+ "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+ "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+ "epa(v)}return ''");
/*
* Plugin: getValOnce 0.2 - get a value once per session or number of days
*/
s.getValOnce = new Function("v", "c", "e", ""
+ "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+ ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
/*
* Plugin: getTimeParting 1.3 - Set timeparting values based on time zone
*/
s.getTimeParting = new Function("t", "z", "y", ""
+ "dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"
+ "dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
+ "if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
+ ");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
+ "+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
+ "if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
+ "ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
+ ");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
+ "iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
+ "sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
+ "days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
+ "0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
+ "ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
+ ":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
+ "estring}if(t=='d'){return daystring};if(t=='w'){return en"
+ "dstring}}};"
);
/*
* Plugin Utility: apl v1.1
*/
s.apl = new Function("L", "v", "d", "u", ""
+ "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+ "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+ "e()));}}if(!m)L=L?L+d+v:v;return L");
/*
* Utility Function: split v1.5 - split a string (JS 1.0 compatible)
*/
s.split = new Function("l", "d", ""
+ "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+ "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
* Plugin: Dynamically Generate Page Name Based On Current U RL
*/
s.getPageName = new Function(""
+ "var s=this,pn=(s.siteID&&(''+s.siteID).length>0)?''+s.siteID:"
+ "'',l=location,dp=(s.defaultPage)?''+s.defaultPage:'',e="
+ "(s.pathExcludeDelim)?s.pathExcludeDelim:'',cs=(s.pathConcatDelim)?"
+ "s.pathConcatDelim:'',q=l.search.substring(1),"
+ "p=l.pathname.substring(1),x=p.indexOf(e);p=((x<0)?p:p.substring(0,"
+ "x)).split('/');for(j=0;j<p.length;j++){if(p[j].length>0){if(pn."
+ "length>0)pn+=cs;pn+=p[j]}else{if(dp.length>0){if(pn.length>0)pn+="
+ "cs;pn+=dp}}}if(q.length>0){if(s.queryVarsList){var qpa=new Array()"
+ ",qv=s.split(s.queryVarsList,','),qp=s.split(q,'&'),tmp,idx;for(i="
+ "0;i<qp.length;i++){tmp=s.split(qp[i],'=');qpa[i]=tmp[0]}for(i=0;"
+ "i<qv.length;i++){idx=s.ia(qpa,qv[i]);if(idx>=0){if(pn.length"
+ ">0)pn+=cs;pn+=qp[idx]}}}}return pn");
s.split = new Function("str", "sep", ""
+ "var si=0,sa=new Array(),i;while((str.length>0)&&(sep.length>0)){"
+ "i=str.indexOf(sep);if((!i)&&(sep!=str.substring(0,sep.length)))"
+ "break;if(i==-1){sa[si++] = str;break;}sa[si++]=str.substring(0,i);"
+ "str=str.substring(i+sep.length,str.length)}return sa");
s.ia = new Function("ar", "v", ""
+ "for(var i=0;i<ar.length;i++){if(ar[i]==v)return i}return -1");
/*
* Utility Function: Determine If A Particular Value Exists Within An Array
*/
s.ia = new Function("ar", "v", ""
+ "for(var i=0;i<ar.length;i++){if(ar[i]==v)return i}return -1");
/*
* Plugin: Return folder name (n) from path
*/
s.getFolderName = new Function("n", ""
+ "var p=s.wd.location.pathname,pa=p.split('/');if(pa[0]==''){for(var "
+ "i=0;i<pa.length;i++){pa[i]=i!=pa.length?pa[i+1]:null;}}return n?pa["
+ "parseInt(n)-1]:'';");
/****************************** MODULES *****************************/
/* Module: Media */
s.m_Media_c = ";`k~=new Function(~='s_media_'`z'_~o.Get~o.'+f~=function(~}return p');p=tcf(o)~=setTimeout(~){var m=this~,\"'+p+'\",x,x!=2?~MovieName()~=parseInt(~m.s.d.getElementsByTagName~ersionInfo~"
+ "\"a\",\"b\",c);o[f~'o','var e,p=~QuickTime~}catch(e){p=~s.wd.addEventListener~){this.e(n,~=new Object~||n==~m.s.wd[f1]~Media~.name~){`k~Player '+~s.wd.attachEvent~PlayState~m.s.rep(~tm.getTime()/1~"
+ "m.s.isie~.current~;c=v+',n~clearTimeout(~,tm=new Date,~var m=s_c_il[~p<p2||p-p2>5)~m.close~m.ae(~i.lo~m.ol~o.controls~load',m.as~,o)}~script';x.~if(~,t;try{t=~Version()~NewState~o.id~i.lx~i.lt~Posi"
+ "tion~v+';~3+')~){p='~&&m.l~l[n])~n==3)x=1~;m.l[n]=~+m._in+~!p){tcf~xc=m.s.~Title()~URL(),l~else~m.open~Change~+'(~,x=-1,~()/t;p~.'+n)}~\",''),~~var m=s.m_i('`N');^5`5n,l,p,b`8,i`K`Za='',x`0n&&l&&p`"
+ "P!m.l)m.l`K;n=`Tm.s.rep(`Tn,\"\\n^B\"\\r^B'--**--','')`0m.`w`c(n)`0b&&b.id)a=b.id;for (x in m.l)`km.l[x]`v[x].a==a)`c(m.l[x].n);i.n=n;i.l`Bl);i.p=p;i.a=a;i.t=0;i.s`B`U000);`p=0;`q=0;`e=0;i.e=''`yi}"
+ "};`c`5n`J0,-1)};m.play`5n,o`J1`i;m.stop`5n,o`J2`i;m.e`5n,x,o`8,i=n`v&&m.l[n]?m.l[n]:0`Zts`B`U000),d='--**--'`0i){if (x!=`p&&(x!=2||`p==1)) {`kx`Po<0&&`q>0){o=(ts-`q)+`e;o=o<i.l?o:i.l-1}o`Bo)`0x==2&"
+ "&`e<o)i.t+=o-`e;i.e+=(x==1?'S':'E')+o;`p=x;`q=ts;`e=o;m.s.pev3=i.n+d+i.l+d+i.p+d+i.t+d+i.s+d+i.e;m.s.pe='media';m.s.t(0,'`N^A^4{m.e(n,2,-1)`y0;m.s.fbr('`N^A}}};m.ae`5n,l,p,x,o,b`Pn&&p`8`0!m.l||!m.`"
+ "w^5(n,l,p,b);m.e(n,x`i};m.a`5o,t`8,i=`o?`o:o`O,n=o`O,p=0,v,c,^1h,x,e,f1,f2`2oc',f3`2t',f4`2s',f5`2l',tcf`0!i`P!m.c)m.c=0;i`2'+m.c;m.c++}`k!`o)`o=i`0!o`O)o`O=n=i`0!`f)`f`K`0`f[i])return;`f[i]=o`0!xc"
+ ")^1b;tcf`1`F0;try{`ko.v`D&&o`W`N&&`g)p=1`H0`6`0^0`1`F0`l`3`G`m`0t)p=2`H0`6`0^0`1`F0`l`3V`D()`0t)p=3`H0`6;}}v=\"`a\"`z\"],o=`f['\"+i+\"']\"`0p==1`uWindows `N `Qo.v`D`X=`n^8cm,c`0o){cm=o`W`N;c=`g`0cm"
+ "&&c`Pn==8)x=0`0`x`0n==1`L2`L4`L5`L6)x=2`0x>=0)`dcm`O?cm`O:c.URL,cm.duration`9c`W`r:-1`i}'`0`V&&xc){x=m.s.d.createElement('script');x.language='j`jtype='text/java`jhtmlFor=i;x.event='`S^6(`n)';x.def"
+ "er=true;x.text=c;xc.appendChild(x)}}`kp==2`u`G `Q(`3Is`GRegistered()?'Pro ':'')+`3`G`m;f1=f2`X,x,t,l,p,p2`0o){n=`3Rate();t=`3TimeScale();l=`3Duration^9=`3Time^92=`45+';`Y`4`t`0n!=`44+'||`b{x=2`0n!="
+ "0)x=1;^4 `kp>=l)x=0`0`b`d`3`A?`3`A:`3^3,\"'+p+'\",2,p2,o);`d`3`A?`3`A:`3^3`9p:-1`i`44+'=n;`45+'=p;`43+'`7\"'+`s`42^70,0)\",500)}';o[f1]`1`E4]=-1;o[f3]`7`s`41^70,0)',500)}`kp==3`uReal`Q`3V`D();f1=n+"
+ "'_On`S^6'`X^8l,p`0o){n=`3`S();l=`3Length()/1000;p=`3`r()/1000`0`4`t`Y`4`t`0n!=`44+'`P`x`0n==0`L2`L4`L5)x=2`0n==0&&(p>=l||p==0))x=0`0x>=0)`d`3^2?`3^2:`3Source(),l`9p:-1,o)`0`42+')`42^7o,n)}`44+'=n`0"
+ "`4`t`43+'`7\"'+`s`41^70,0)\",500)}'`0`M)o[f2]=`M;`M`1`E4]=-1`0`V){o[f1]`1`E3]`7`s`41^70,0)',500)}}};m.as`1'e','`a'`z'],l,n`0m.autoTrack&&`C){l=`C(`V?\"OBJECT\":\"EMBED\")`0l)for(n=0;n<l.length;n++)"
+ "m.a(`w;}')`0`R)`R('on`h);^4 `k`I)`I('`h,false)";
s.m_i("Media");
/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
//s.trackingServer="metrics.ctvdigital.net"   //this is the non-secure tracking server for first party cookies
//s.trackingServerSecure="smetrics.ctvdigital.net"  //this is the secure tracking server for first party cookies
//s.visitorNamespace="chumtv"   // this must be chumtv for all report suite ids that came from ChumTV - this MUST be ctv for all report suites created under the CTV company - currently in the case statements at the top, here for reference
s.dc = 122   //do not change
s.visitorNamespace = s_visitorNamespace;
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = '', s_objectID; function s_gi(un, pg, ss) {
var c = "s.version='H.25.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+ "\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+ "n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+ "urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+ "x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+ "bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+ "','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+ "'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+ "ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+ ";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+ "0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+ ",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+ "bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+ "e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+ ";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+ "nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+ "e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+ ".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+ "0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+ "0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+ ");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+ ";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+ "f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+ ".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+ ";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+ "s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+ "r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
+ "gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase()"
+ ";else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.t"
+ "cn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[u"
+ "n]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;retur"
+ "n ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if("
+ "!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nr"
+ "s){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'"
+ "].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return '"
+ "'}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=="
+ "'s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x"
+ ";i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h."
+ "substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length"
+ ">1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.lengt"
+ "h;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.subst"
+ "ring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nf"
+ "l[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!n"
+ "fl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk."
+ "substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+"
+ "ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',"
+ "fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring("
+ "0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+"
+ "s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!="
+ "'linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substrin"
+ "g(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&"
+ "&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1"
+ "';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k"
+ "=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascri"
+ "ptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='h"
+ "omepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k"
+ "=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')"
+ "q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eV"
+ "ar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'"
+ "';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLow"
+ "erCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h"
+ "=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||"
+ "s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e"
+ ");return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s"
+ ".bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTr"
+ "acking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t("
+ ");s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\""
+ "#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopI"
+ "mmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.alt"
+ "Key,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h."
+ "indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.ho"
+ "st:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.to"
+ "UpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=thi"
+ "s,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''"
+ "+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t"
+ "=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u"
+ "+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)re"
+ "turn s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return "
+ "0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',"
+ "q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&"
+ "s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i"
+ "<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=f"
+ "unction(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0"
+ "&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,"
+ "v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%"
+ "10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.subst"
+ "ring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if"
+ "(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){v"
+ "ar s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r"
+ ",l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s"
+ ";m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l="
+ "m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c="
+ "s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if("
+ "x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,"
+ "i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m"
+ "[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl"
+ ",i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':'"
+ ");if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');"
+ "i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'"
+ "')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s"
+ ".d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,"
+ "100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m"
+ "=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x"
+ " in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=n"
+ "ew Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if("
+ "!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if"
+ "(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Mat"
+ "h.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return f"
+ "id};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_"
+ "c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!vi"
+ "sitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*100000000"
+ "00000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds("
+ ")+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i"
+ ",x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&"
+ "s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1"
+ ".7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaE"
+ "nabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){"
+ "bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\""
+ ":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)whi"
+ "le(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.bro"
+ "wserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);i"
+ "f(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s."
+ "eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if"
+ "(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav"
+ "eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t"
+ "rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o"
+ "bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;"
+ "if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt("
+ "oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','"
+ "var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+("
+ "x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('"
+ "t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType"
+ "=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType="
+ "t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){va"
+ "r s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s"
+ "[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf("
+ "'s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i"
+ "<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElements"
+ "ByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf"
+ "('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6"
+ "));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.e"
+ "m=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visito"
+ "rID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCod"
+ "e,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookie"
+ "DomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,e"
+ "vents,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va"
+ "_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t"
+ "+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dy"
+ "namicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilter"
+ "s,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();i"
+ "f(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w = window, l = w.s_c_il, n = navigator, u = n.userAgent, v = n.appVersion, e = v.indexOf('MSIE '), m = u.indexOf('Netscape6/'), a, i, j, x, s; if (un) { un = un.toLowerCase(); if (l) for (j = 0; j < 2; j++) for (i = 0; i < l.length; i++) { s = l[i]; x = s._c; if ((!x || x == 's_c' || (j > 0 && x == 's_l')) && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) { if (s.sa) s.sa(un); if (x == 's_c') return s } else s = 0 } } w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+ "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+ "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+ "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+ "a");
w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+ "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+ "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c = s_d(c); if (e > 0) { a = parseInt(i = v.substring(e + 5)); if (a > 3) a = parseFloat(i) } else if (m > 0) a = parseFloat(u.substring(m + 10)); else a = parseFloat(v); if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) c = s_ft(c); if (!s) { s = new Object; if (!w.s_c_in) { w.s_c_il = new Array; w.s_c_in = 0 } s._il = w.s_c_il; s._in = w.s_c_in; s._il[s._in] = s; w.s_c_in++; } s._c = 's_c'; (new Function("s", "un", "pg", "ss", c))(s, un, pg, ss); return s
}
function s_giqf() { var w = window, q = w.s_giq, i, t, s; if (q) for (i = 0; i < q.length; i++) { t = q[i]; s = s_gi(t.oun); s.sa(t.un); s.setTagContainer(t.tagContainerName) } w.s_giq = 0 } s_giqf()
 
