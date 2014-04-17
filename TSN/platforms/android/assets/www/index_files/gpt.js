(function(){var e,h=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},k=function(a){return"array"==aa(a)},ba=function(a){var b=aa(a);return"array"==b||"object"==b&&"number"==typeof a.length},l=function(a){return"string"==typeof a},ca=function(a){return"boolean"==typeof a},m=function(a){return"number"==typeof a},da=function(a,b,c){return a.call.apply(a.bind,arguments)},ea=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=
Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},fa=function(a,b,c){fa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return fa.apply(null,arguments)},ga=function(a,b){function c(){}c.prototype=b.prototype;a.Sa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ra=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};var p=function(a,b){var c=parseFloat(a);return isNaN(c)||1<c||0>c?b:c},ha=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},ia=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ja=function(a,b){if(!a)return b;var c=a.match(ia);return c?c[0]:b};var ka=p("0.02",0),la=p("1",0),ma=p("0.0",0);var na=p("0.005",0),oa=p("0.01",0),pa=p("0.001",0),qa=ha("1500",1500),ra=p("0.01",0),sa=p("1.0",0),ta=p("0.1",0),ua=p("0.0",0),va=ha("1500",1500),wa=ha("1500",
1500),xa=p("",0.001),ya=ha("",200);var za=/^true$/.test("false")?!0:!1;var Aa=function(a){return/^[\s\xa0]*$/.test(a)},Ba=function(a,b){return a<b?-1:a>b?1:0};var q=function(){return h.googletag||(h.googletag={})},r=function(a,b,c){var d=q();a in d&&!c||(d[a]=b)},Ca=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)};var s={};s[1]=ja("","pagead2.googlesyndication.com");s[2]=ja("","pubads.g.doubleclick.net");s[3]=ja("","securepubads.g.doubleclick.net");s[4]=ja("","partner.googleadservices.com");s[5]="http://pagead2.googlesyndication.com/pagead/show_ads.js";s[6]=za;s[7]=ka;s[8]=la;s[10]=oa;s[11]=pa;s[12]=na;s[13]=qa;s[16]=ra;s[17]=sa;s[18]=ta;s[19]=ua;s[20]=ma;s[21]=va;s[22]=wa;s[23]=xa;s[24]=ya;r("_vars_",s);var t=function(a,b){this.d=a;this.a=b||[]};t.prototype.c=function(){return this.d};t.prototype.b=function(){return this.a};t.prototype.getMessageId=t.prototype.c;t.prototype.getMessageArgs=t.prototype.b;var u=function(a,b,c,d,g){this.a=new Date;this.T=d||null;this.S=c||null;this.D=a;this.c=b;this.b=g||null};e=u.prototype;e.Ea=function(){return this.T};e.Ba=function(){return this.S};e.xa=function(){return this.D};e.Ja=function(){return this.a};e.ya=function(){return this.c};e.Aa=function(){return this.b};var Da=["Debug","Info","Warning","Error","Fatal"];
u.prototype.toString=function(){var a=this.a.toTimeString()+": "+Da[this.D]+": "+this.c;this.b&&(a+=" Duration: "+(this.a.getTime()-this.b.a.getTime())+"ms.");return a};u.prototype.getTimestamp=u.prototype.Ja;u.prototype.getService=u.prototype.Ba;u.prototype.getSlot=u.prototype.Ea;u.prototype.getLevel=u.prototype.xa;u.prototype.getMessage=u.prototype.ya;u.prototype.getReference=u.prototype.Aa;var v=function(){this.a=[]};v.prototype.b=function(){return this.a};v.prototype.d=function(a){return Ea(this,function(b){return b.S===a})};v.prototype.f=function(a){return Ea(this,function(b){return b.T===a})};v.prototype.c=function(a){return Ea(this,function(b){return b.D>=a})};var Ea=function(a,b){for(var c=[],d=0;d<a.a.length;++d)b(a.a[d])&&c.push(a.a[d]);return c};v.prototype.log=function(a,b,c,d,g){a=new u(a,b,c,d,g);this.a.push(a);return a};
var w=function(a,b,c,d,g){return a.log(1,b,c,d,g)},x=function(a,b,c,d){a.log(2,b,c,d,void 0)},y=function(a,b,c,d){a.log(3,b,c,d,void 0)},z=function(){var a=q();return a.debug_log||(a.debug_log=new v)};r("getEventLog",z);v.prototype.getAllEvents=v.prototype.b;v.prototype.getEventsByService=v.prototype.d;v.prototype.getEventsBySlot=v.prototype.f;v.prototype.getEventsByLevel=v.prototype.c;var A=function(a){return function(){return new t(a,[])}},B=function(a){return function(b){return new t(a,[b])}},D=function(a){return function(b,c){return new t(a,[b,c])}},E=function(a){return function(b,c,d){return new t(a,[b,c,d])}},Fa=A(1),Ga=B(2),Ha=B(3),Ia=B(4),Ja=B(5),Ka=B(6),La=A(8),Ma=E(9),Na=E(10),Oa=E(11),Pa=D(12),Qa=B(13),Ra=B(14),Sa=A(15),Ta=A(16),Ua=E(17),Va=E(18),Wa=A(19),Xa=B(20),Ya=B(21),Za=D(22),$a=D(23),ab=B(26),bb=B(27),cb=B(28),db=E(29),eb=B(30),fb=D(31),gb=B(32),hb=B(33),ib=A(34),
jb=B(35),kb=E(36),lb=E(37),mb=A(38),nb=B(39),ob=D(40),pb=A(42),qb=D(43),rb=A(44),sb=A(45),tb=B(46),ub=B(47),vb=B(48),wb=A(49),xb=A(50),yb=B(51),zb=A(52),Ab=D(53),Bb=D(54),Cb=B(55),Db=B(56),Eb=D(57),Fb=E(58),Gb=B(59),Hb=B(60),Ib=D(61),Jb=D(62),Kb=B(63),Lb=D(64),Mb=B(65),Nb=A(66),Ob=A(67),Pb=A(68),Qb=A(69),Rb=A(70),Sb=A(71),Tb=A(72),Ub=B(73),Vb=B(74),G=B(75),Wb=E(77),Xb=B(78),Yb=A(79),Zb=B(80),$b=D(82),ac=D(83),bc=D(84),cc=B(85),dc=A(86),ec=A(87),fc=E(88),gc=E(89),hc=B(90),ic=A(91),jc=B(92),kc=B(93),
lc=B(94);var mc=function(){this.b=this.a=0};mc.prototype.push=function(a){for(var b=z(),c=0;c<arguments.length;++c)try{"function"==aa(arguments[c])&&(arguments[c](),this.a++)}catch(d){this.b++,y(b,eb(String(d.message)))}w(b,fb(String(this.a),String(this.b)));return this.a};mc.prototype.push=mc.prototype.push;(function(){function a(a){this.t={};this.tick=function(a,b,c){this.t[a]=[void 0!=c?c:(new Date).getTime(),b];if(void 0==c)try{window.console.timeStamp("CSI/"+a)}catch(d){}};this.tick("start",null,a)}var b;window.performance&&(b=window.performance.timing);var c=b?new a(b.responseStart):new a;window.GPT_jstiming={Timer:a,load:c};if(b){var d=b.navigationStart,g=b.responseStart;0<d&&g>=d&&(window.GPT_jstiming.srt=g-d)}if(b){var f=window.GPT_jstiming.load;0<d&&g>=d&&(f.tick("_wtsrt",void 0,d),f.tick("wtsrt_",
"_wtsrt",g),f.tick("tbsd_","wtsrt_"))}try{b=null,window.chrome&&window.chrome.csi&&(b=Math.floor(window.chrome.csi().pageT),f&&0<d&&(f.tick("_tbnd",void 0,window.chrome.csi().startE),f.tick("tbnd_","_tbnd",d))),null==b&&window.gtbExternal&&(b=window.gtbExternal.pageT()),null==b&&window.external&&(b=window.external.pageT,f&&0<d&&(f.tick("_tbnd",void 0,window.external.startE),f.tick("tbnd_","_tbnd",d))),b&&(window.GPT_jstiming.pt=b)}catch(n){}})();if(window.GPT_jstiming){window.GPT_jstiming.aa={};window.GPT_jstiming.da=1;var nc=function(a,b,c){var d=a.t[b],g=a.t.start;if(d&&(g||c))return d=a.t[b][0],void 0!=c?g=c:g=g[0],d-g},oc=function(a,b,c){var d="";window.GPT_jstiming.srt&&(d+="&srt="+window.GPT_jstiming.srt,delete window.GPT_jstiming.srt);window.GPT_jstiming.pt&&(d+="&tbsrt="+window.GPT_jstiming.pt,delete window.GPT_jstiming.pt);try{window.external&&window.external.tran?d+="&tran="+window.external.tran:window.gtbExternal&&window.gtbExternal.tran?
d+="&tran="+window.gtbExternal.tran():window.chrome&&window.chrome.csi&&(d+="&tran="+window.chrome.csi().tran)}catch(g){}var f=window.chrome;if(f&&(f=f.loadTimes)){f().wasFetchedViaSpdy&&(d+="&p=s");if(f().wasNpnNegotiated){var d=d+"&npn=1",n=f().npnNegotiatedProtocol;n&&(d+="&npnv="+(encodeURIComponent||escape)(n))}f().wasAlternateProtocolAvailable&&(d+="&apa=1")}var C=a.t,M=C.start,f=[],n=[],F;for(F in C)if("start"!=F&&0!=F.indexOf("_")){var N=C[F][1];N?C[N]&&n.push(F+"."+nc(a,F,C[N][0])):M&&f.push(F+
"."+nc(a,F))}delete C.start;if(b)for(var P in b)d+="&"+P+"="+b[P];(b=c)||(b="https:"==document.location.protocol?"https://csi.gstatic.com/csi":"http://csi.gstatic.com/csi");return[b,"?v=3","&s="+(window.GPT_jstiming.sn||"gpt")+"&action=",a.name,n.length?"&it="+n.join(","):"",d,"&rt=",f.join(",")].join("")},pc=function(a,b,c){a=oc(a,b,c);if(!a)return"";b=new Image;var d=window.GPT_jstiming.da++;window.GPT_jstiming.aa[d]=b;b.onload=b.onerror=function(){window.GPT_jstiming&&delete window.GPT_jstiming.aa[d]};
b.src=a;b=null;return a};window.GPT_jstiming.report=function(a,b,c){if("prerender"==document.webkitVisibilityState){var d=!1,g=function(){if(!d){b?b.prerender="1":b={prerender:"1"};var f;"prerender"==document.webkitVisibilityState?f=!1:(pc(a,b,c),f=!0);f&&(d=!0,document.removeEventListener("webkitvisibilitychange",g,!1))}};document.addEventListener("webkitvisibilitychange",g,!1);return""}return pc(a,b,c)}};var H=Array.prototype,qc=H.indexOf?function(a,b,c){return H.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},rc=H.forEach?function(a,b,c){H.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=l(a)?a.split(""):a,f=0;f<d;f++)f in g&&b.call(c,g[f],f,a)},sc=H.map?function(a,b,c){return H.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=Array(d),f=l(a)?a.split(""):
a,n=0;n<d;n++)n in f&&(g[n]=b.call(c,f[n],n,a));return g},tc=H.every?function(a,b,c){return H.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=l(a)?a.split(""):a,f=0;f<d;f++)if(f in g&&!b.call(c,g[f],f,a))return!1;return!0},uc=function(a,b){var c;t:{c=a.length;for(var d=l(a)?a.split(""):a,g=0;g<c;g++)if(g in d&&b.call(void 0,d[g],g,a)){c=g;break t}c=-1}return 0>c?null:l(a)?a.charAt(c):a[c]},vc=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},xc=
function(a,b){a.sort(b||wc)},zc=function(a){for(var b=yc,c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||wc;xc(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value},wc=function(a,b){return a>b?1:a<b?-1:0};var Ac=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},Bc=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};var Cc=function(a,b){this.b=a;this.a=b};Cc.prototype.ceil=function(){this.b=Math.ceil(this.b);this.a=Math.ceil(this.a);return this};Cc.prototype.floor=function(){this.b=Math.floor(this.b);this.a=Math.floor(this.a);return this};Cc.prototype.round=function(){this.b=Math.round(this.b);this.a=Math.round(this.a);return this};var I;t:{var Dc=h.navigator;if(Dc){var Ec=Dc.userAgent;if(Ec){I=Ec;break t}}I=""}var J=function(a){return-1!=I.indexOf(a)};var Fc=J("Opera")||J("OPR"),K=J("Trident")||J("MSIE"),Gc=J("Gecko")&&-1==I.toLowerCase().indexOf("webkit")&&!(J("Trident")||J("MSIE")),Hc=-1!=I.toLowerCase().indexOf("webkit"),Ic=function(){var a=h.document;return a?a.documentMode:void 0},Jc=function(){var a="",b;if(Fc&&h.opera)return a=h.opera.version,"function"==aa(a)?a():a;Gc?b=/rv\:([^\);]+)(\)|;)/:K?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Hc&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(I))?a[1]:"");return K&&(b=Ic(),b>parseFloat(a))?String(b):a}(),Kc={},
Lc=function(a){if(!Kc[a]){for(var b=0,c=String(Jc).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(c.length,d.length),f=0;0==b&&f<g;f++){var n=c[f]||"",C=d[f]||"",M=RegExp("(\\d*)(\\D*)","g"),F=RegExp("(\\d*)(\\D*)","g");do{var N=M.exec(n)||["","",""],P=F.exec(C)||["","",""];if(0==N[0].length&&0==P[0].length)break;b=Ba(0==N[1].length?0:parseInt(N[1],10),0==P[1].length?0:parseInt(P[1],10))||Ba(0==N[2].length,0==P[2].length)||Ba(N[2],
P[2])}while(0==b)}Kc[a]=0<=b}},Mc=h.document,Nc=Mc&&K?Ic()||("CSS1Compat"==Mc.compatMode?parseInt(Jc,10):5):void 0;if(Gc||K){var Oc;if(Oc=K)Oc=K&&9<=Nc;Oc||Gc&&Lc("1.9.1")}K&&Lc("9");var Pc=function(a,b,c){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var Qc=function(a){return m(a)&&isFinite(a)&&0==a%1&&0<=a},Rc=function(a){return a.replace(/[^a-zA-Z0-9]/g,function(a){return"&#"+a.charCodeAt()+";"})},Sc=function(){var a=null,b=window,c=null;try{for(;null!=b&&b!==a;){c=b.location.protocol;if("https:"===c)break;else if("http:"===c||"file:"===c)return"http:";a=b;b=b.parent}}catch(d){}return"https:"};var Tc=function(a){return k(a)&&2==a.length&&Qc(a[0])&&Qc(a[1])},Uc=function(a){return k(a)&&1<a.length&&m(a[0])&&m(a[1])};var L=function(a,b){this.d=a;this.c=b};L.prototype.b=function(){return this.d};L.prototype.a=function(){return this.c};var Vc=function(a){var b=[];if(k(a))if(Uc(a))b.push(new L(a[0],a[1]));else for(var c=0;c<a.length;++c){var d=a[c];Uc(d)&&b.push(new L(d[0],d[1]))}return b};L.prototype.getWidth=L.prototype.b;L.prototype.getHeight=L.prototype.a;var O=function(a,b,c){this.d=a;this.c=m(b)?b:0;this.b=this.d+"_"+this.c;this.a=c||"gpt_unit_"+this.b};e=O.prototype;e.ba=function(){return this.b};e.ha=function(){return this.d};e.wa=function(){return this.c};e.toString=O.prototype.ba;e.va=function(){return this.a};O.prototype.getId=O.prototype.ba;O.prototype.getName=O.prototype.ha;O.prototype.getDomId=O.prototype.va;O.prototype.getInstance=O.prototype.wa;var Wc={Ta:"slotRenderEnded"},Xc=function(a){this.slot=a;this.isEmpty=!1;this.lineItemId=this.creativeId=this.size=null};var Q=function(a,b){this.name=a;this.b=b?b:new h.GPT_jstiming.Timer;this.b.name=a;this.a=[]};Q.prototype.tick=function(a,b){this.b.tick(a,b)};Q.prototype.$=function(a){a&&this.a.push(a)};Q.prototype.report=function(){var a="https:"==h.location.protocol?"https://www.google.com/csi":"http://csi.gstatic.com/csi",b={};this.a.length&&(b.e=this.a.join());return h.GPT_jstiming.report(this.b,b,a)};Q.prototype.c=function(a){Ca(window,function(){setTimeout(a,10)})};var R=function(a){this.name=a};ga(R,Q);
R.prototype.tick=function(){};R.prototype.$=function(){};R.prototype.report=function(){return null};R.prototype.c=function(){};var Yc=function(){var a=h.GPT_jstiming.load,b,c=0.01;void 0==c&&(c=0.01);h.GPT_jstiming&&h.GPT_jstiming.load&&("http:"==h.location.protocol||"https:"==h.location.protocol)&&Math.random()<c?b=new Q("global",a):b=new R("global");return b};(function(){if(!q()._gpt_timer_&&h.GPT_jstiming){var a=Yc();a.c(function(){a.tick("load");a.report()});r("_gpt_timer_",a)}return q()._gpt_timer_})();var S=function(){this.d=[];this.G={};this.b=!1;this.v={};this.p={};this.log=z();w(this.log,jb(this.g()),this)};e=S.prototype;e.g=function(){return"unknown"};e.getVersion=function(){return"unversioned"};e.set=function(a,b){l(a)&&0<a.length?(this.v[a]=b,w(this.log,kb(a,String(b),this.g()),this,null)):x(this.log,lb(String(a),String(b),this.g()),this,null);return this};e.H=function(a){return this.v[a]};e.Z=function(){var a=[];Pc(this.v,function(b,c){a.push(c)});return a};e.Ha=function(){return this.d};
e.Ga=function(){return this.G};e.enable=function(){if(this.b)w(this.log,mb(),this);else{this.b=!0;try{this.I()}catch(a){y(this.log,nb(String(a)),this)}}};e.display=function(a,b,c,d){this.enable();a=c?Zc(a,b,c):Zc(a,b);a.addService(this);d&&a.setClickUrl(d);$c(a.b.a)};e.C=function(a){this.d.push(a);this.G[a.b.b]=a;w(this.log,ob(this.g(),a.c),this,a)};
e.addEventListener=function(a,b){if("function"!=aa(b))return x(this.log,ic(),this),this;if(!Bc(Wc,a))return x(this.log,kc(a),this),this;k(this.p[a])||(this.p[a]=[]);this.p[a].push(b);return this};var ad=function(a,b){var c=a.p.slotRenderEnded;k(c)&&rc(c,function(a){try{a(b)}catch(c){a=c&&l(c.name)?c.name:null;var f=c&&l(c.message)?c.message:null,n="";a&&f?n=a+": "+f:a?n=a:f&&(n=f);x(this.log,jc(n),this)}},a)};S.prototype.getName=S.prototype.g;S.prototype.getSlots=S.prototype.Ha;
S.prototype.getSlotIdMap=S.prototype.Ga;S.prototype.enable=S.prototype.enable;S.prototype.get=S.prototype.H;S.prototype.getAttributeKeys=S.prototype.Z;var bd=function(){this.a={};this.b=!1;this.c=z();this.f=w(this.c,La());Ca(window,fa(bd.prototype.d,this))},cd=function(a,b){var c=null;b in a.a&&(c=a.a[b]);return c},dd=function(){var a=T();Pc(a.a,function(a,c){a.enable();var d=q()._gpt_timer_;d&&d.$(c)})};bd.prototype.d=function(){this.b=!0;w(this.c,Fa(),null,null,this.f)};var T=function(){var a=q();return a.service_manager_instance||(a.service_manager_instance=new bd)};r("enableServices",function(){dd()});var ed=function(a,b){this.a=a;this.b=b};var fd=function(a){this.a=a},gd=function(a,b){var c=uc(a.a,function(a){a=a.a;return a.b<=b.b&&a.a<=b.a});return null==c?null:c.b},hd=function(a){if(!k(a)||2!=a.length)throw Error("Each mapping entry has to be an array of size 2");var b;b=a[0];if(!Tc(b))throw Error("Size has to be an array of two non-negative integers");b=new Cc(b[0],b[1]);if(k(a[1])&&0==a[1].length)a=[];else if(a=Vc(a[1]),0==a.length)throw Error("At least one slot size must be present");return new ed(b,a)};var U=function(a,b,c,d){this.c=a;this.w=Vc(c);this.m=null;this.b=new O(a,b,d);this.d=[];this.f={};this.i=null;this.a=z();w(this.a,Ga(this.b.toString()),null,this);this.h=this.p=null;this.v=this.u="";this.k=!0;this.j={};this.l=[];this.s=!1;this.r=this.o=null;this.n=0;this.q=-1};e=U.prototype;e.set=function(a,b){var c=this.c;(a=a||"")&&l(a)&&b?(this.f[a]=b,this.p||this.h?x(this.a,Na(a,String(b),c),null,this):w(this.a,Ma(a,String(b),c),null,this)):x(this.a,Oa(String(a),String(b),c),null,this);return this};
e.F=function(a){return a in this.f?this.f[a]:null};e.Y=function(){var a=[];Pc(this.f,function(b,c){a.push(c)});return a};e.addService=function(a){var b=T();if(!Bc(b.a,a))return x(this.a,lc(this.b.toString()),null,this),this;for(b=0;b<this.d.length;++b)if(a==this.d[b])return x(this.a,Pa(a.g(),this.b.toString()),a,this),this;this.d.push(a);a.C(this);return this};e.ia=function(){return this.c};e.Fa=function(){return this.b};e.Ca=function(){return this.d};
e.Da=function(a,b){return m(a)&&m(b)&&this.m?gd(this.m,new Cc(a,b)):this.w};e.defineSizeMapping=function(a){try{if(!k(a))throw Error("Size mapping has to be an array");var b=sc(a,hd);this.m=new fd(b)}catch(c){x(this.a,Qa(c.message),null,this)}return this};e.A=function(){return!!document.getElementById(this.b.a)};e.setClickUrl=function(a){this.v=a;return this};e.qa=function(){return this.v};
e.setCategoryExclusion=function(a){if(l(a)&&!Aa(null==a?"":String(a))){var b=this.l;0<=qc(b,a)||b.push(a);w(this.a,Ra(a),null,this)}else x(this.a,Sa(),null,this);return this};e.clearCategoryExclusions=function(){w(this.a,Ta(),null,this);this.l=[];return this};e.pa=function(){return vc(this.l)};e.setTargeting=function(a,b){var c=[];k(b)?c=b:b&&c.push(b.toString());a&&l(a)?(w(this.a,Ua(a,c.join(),this.c),null,this),this.j[a]=c):x(this.a,Va(String(a),c.join(),this.c),null,this);return this};
e.clearTargeting=function(){w(this.a,Wa(),null,this);this.j={};return this};e.Ia=function(){var a=this.j,b={},c;for(c in a)b[c]=a[c];return b};e.za=function(){return this.s};e.oa=function(){return this.n};e.setTagForChildDirectedTreatment=function(a){if(0===a||1===a)this.q=a};e.La=function(){return this.q};e.setCollapseEmptyDiv=function(a,b){this.r=(this.o=a)&&Boolean(b);b&&!a&&x(this.a,Xa(this.b.toString()),null,this);return this};e.ra=function(){return this.o};e.ua=function(){return this.r};
var id=function(a){if(!a.A())return y(a.a,Ya(a.b.toString()),null,a),!1;var b=h.document,c=a.b.a,b=b&&b.getElementById(c);if(!b)return y(a.a,Za(c,a.b.toString()),null,a),!1;c=a.i;return l(c)&&0<c.length?(a.X(),b.innerHTML=c,a.W(new Xc(a)),!0):!1};e=U.prototype;e.ma=function(a){this.p=w(this.a,Ha(this.c),null,this);this.u=a};e.sa=function(){return this.u};e.la=function(){w(this.a,Ia(this.c),null,this,this.p)};e.X=function(){this.h=w(this.a,Ja(this.c),null,this)};
e.W=function(a){w(this.a,Ka(this.c),null,this,this.h);rc(this.d,function(b){ad(b,a)})};U.prototype.get=U.prototype.F;U.prototype.getName=U.prototype.ia;U.prototype.getSlotId=U.prototype.Fa;U.prototype.getSizes=U.prototype.Da;U.prototype.getOutOfPage=U.prototype.za;U.prototype.getServices=U.prototype.Ca;U.prototype.getAttributeKeys=U.prototype.Y;U.prototype.fetchStarted=U.prototype.ma;U.prototype.fetchEnded=U.prototype.la;U.prototype.renderStarted=U.prototype.X;U.prototype.renderEnded=U.prototype.W;
U.prototype.hasWrapperDiv=U.prototype.A;U.prototype.getContentUrl=U.prototype.sa;U.prototype.getClickUrl=U.prototype.qa;U.prototype.getTargetingMap=U.prototype.Ia;U.prototype.getCategoryExclusions=U.prototype.pa;U.prototype.getCollapseEmptyDiv=U.prototype.ra;U.prototype.getDivStartsCollapsed=U.prototype.ua;U.prototype.getAudExtId=U.prototype.oa;U.prototype.gtfcd=U.prototype.La;var jd=function(){this.a={};this.b={};this.c=z()},kd=function(a,b,c,d){if(!l(b)||0>=b.length||!c)return null;b in a.a||(a.a[b]=[]);c=new U(b,a.a[b].length,c,d);d=c.b.a;if(a.b[d])return y(a.c,cb(d)),null;a.a[b].push(c);return a.b[c.b.a]=c};jd.prototype.d=function(a,b){var c=b||0,d=l(a)&&this.a[a]||[];return 0<=c&&c<d.length&&(d=d[c],d.b.c==c)?d:null};
var ld=function(a,b){return Ac(a.a,function(a){return 0<=qc(a,b)})},md=function(){var a=q();return a.slot_manager_instance||(a.slot_manager_instance=new jd)},Zc=function(a,b,c){var d=md();return d&&kd(d,a,b,c)};r("defineOutOfPageSlot",function(a,b){var c=md();return c?(c=kd(c,a,[1,1],b))?(c.s=!0,c):null:null});r("defineSlot",Zc);r("defineUnit",Zc);jd.prototype.find=jd.prototype.d;jd.getInstance=md;var $c=function(a){var b=z();if(l(a)){var c;c=md();if(c=c.b[a]?c.b[a]:null)if(c.k&&!c.A())x(c.a,$a(c.c,c.b.a),null,c);else for(a=0;a<c.d.length;++a)c.d[a].b&&c.d[a].q(c);else y(b,bb(String(a)))}else y(b,ab(String(a)))};r("display",$c,!0);var nd=null,od=Gc||Hc||Fc||"function"==typeof h.atob;var V=function(a,b,c){if(!l(a)||0>=a.length||!Boolean(b)||!c)y(z(),db(String(a),String(b),String(c)));else{var d=pd++;this.a=new U(a,d,b);this.a.addService(c);this.b=c}},pd=1;e=V.prototype;e.setClickUrl=function(a){this.a.setClickUrl(a);return this};e.setTargeting=function(a,b){this.a.setTargeting(a,b);return this};e.ea=function(a){Qc(a)&&(this.a.n=a);return this};e.setTagForChildDirectedTreatment=function(a){this.a.setTagForChildDirectedTreatment(a);return this};e.display=function(){qd(this.b,this.a)};
V.prototype.setAudExtId=V.prototype.ea;V.prototype.setTagForChildDirectedTreatment=V.prototype.setTagForChildDirectedTreatment;var W=function(){S.call(this);this.h=!1;this.a=null;this.L=0;this.n=-1;this.j={};this.s=[];this.K=this.r="";this.P=!1;this.N=!0;this.i=this.M=!1;this.c=!0;this.o=this.l=this.O=!1;this.f=[];this.k=[];this.m=[];this.w=!1;this.B={};this.u=!1;this.Q=this.R="";this.J=[]};ga(W,S);
var rd={adsense_ad_format:"google_ad_format",adsense_ad_types:"google_ad_type",adsense_allow_expandable_ads:"google_allow_expandable_ads",adsense_background_color:"google_color_bg",adsense_bid:"google_bid",adsense_border_color:"google_color_border",adsense_channel_ids:"google_ad_channel",adsense_content_section:"google_ad_section",adsense_cpm:"google_cpm",adsense_ed:"google_ed",adsense_encoding:"google_encoding",adsense_family_safe:"google_safe",adsense_feedback:"google_feedback",adsense_flash_version:"google_flash_version",
adsense_font_face:"google_font_face",adsense_font_size:"google_font_size",adsense_hints:"google_hints",adsense_host:"google_ad_host",adsense_host_channel:"google_ad_host_channel",adsense_host_tier_id:"google_ad_host_tier_id",adsense_keyword_type:"google_kw_type",adsense_keywords:"google_kw",adsense_line_color:"google_line_color",adsense_link_color:"google_color_link",adsense_relevant_content:"google_contents",adsense_reuse_colors:"google_reuse_colors",adsense_targeting:"google_targeting",adsense_targeting_types:"google_targeting",
adsense_test_mode:"google_adtest",adsense_text_color:"google_color_text",adsense_ui_features:"google_ui_features",adsense_ui_version:"google_ui_version",adsense_url_color:"google_color_url",alternate_ad_iframe_color:"google_alternate_color",alternate_ad_url:"google_alternate_ad_url",demographic_age:"google_cust_age",demographic_ch:"google_cust_ch",demographic_gender:"google_cust_gender",demographic_interests:"google_cust_interests",demographic_job:"google_cust_job",demographic_l:"google_cust_l",demographic_lh:"google_cust_lh",
demographic_u_url:"google_cust_u_url",demographic_unique_id:"google_cust_id",document_language:"google_language",geography_override_city:"google_city",geography_override_country:"google_country",geography_override_region:"google_region",page_url:"google_page_url"};
W.prototype.I=function(){if(this.c){if(!this.h){var a=document,b=a.createElement("script");T();b.async=!0;b.type="text/javascript";b.src=sd();(a=a.getElementsByTagName("head")[0]||a.getElementsByTagName("body")[0])?(w(this.log,tb("GPT PubAds"),this),a.appendChild(b),this.h=!0):y(this.log,ub("GPT PubAds"),this)}}else td(this)};W.prototype.g=function(){return"publisher_ads"};
var sd=function(){return Sc()+"//partner.googleadservices.com/gpt/pubads_impl_37.js"},td=function(a){var b=T();a.h||b.b||(b=document,a.h=!0,b.write('<script type="text/javascript" src="'+Rc(sd())+'">\x3c/script>'))};
W.prototype.fillSlot=function(a){w(this.log,xb());this.a.fillSlot(a);this.B[a.c]=!0;if(this.a)if(this.w)(a=this.d[0])&&a.c in this.B&&(this.refresh(),this.w=!1);else for(a=0;a<this.m.length;a++){var b=this.m[a];b[0].c in this.B&&(this.refresh(b),H.splice.call(this.m,a,1),a--)}else y(this.log,wb(),this)};
W.prototype.ja=function(){T();var a=q().impl;if(a&&a.pubads){this.a=a.pubads;w(this.log,vb("GPT"),this);this.a.setCookieOptions(this.L);this.a.setTagForChildDirectedTreatment(this.n);this.N||this.a.disableFetch();this.l&&this.a.collapseEmptyDivs(this.o);if(this.i){this.c?this.a.enableAsyncSingleRequest():this.a.enableSingleRequest();ud(this);for(var a=this.d,b=0;b<a.length;++b)vd(this,a[b])}else this.c&&this.a.enableAsyncRendering();this.M&&this.a.disableInitialLoad();wd(this);if(0<this.f.length)for(b=
0;b<this.f.length;++b)this.q(this.f[b]);if(0<this.k.length)for(b=0;b<this.k.length;++b)qd(this,this.k[b])}else y(this.log,yb(sd()),this)};W.prototype.C=function(a){this.c||(a.k=!1);S.prototype.C.call(this,a)};
W.prototype.q=function(a){if(T().b&&!this.c)y(this.log,zb(),this);else if(this.a)ud(this),vd(this,a)&&this.fillSlot(a);else if(this.c||this.h&&0==this.f.length){for(var b=!1,c=0;c<this.f.length;++c)a===this.f[c]&&(b=!0);b||(w(this.log,Ab(a.c,"GPT"),this,a),this.f.push(a))}else y(this.log,Cb(a.c),this,a)};
var vd=function(a,b){if(a.a&&null==a.a.addSlot(b))return y(a.log,Db(b.c),a,b),!1;for(var c=b.Y(),d=0;d<c.length;++d)c[d]in rd?a.a.addAdSenseSlotAttribute(b,rd[c[d]],b.F(c[d])):x(a.log,Fb(String(c[d]),String(b.F(c[d])),b.c),a,b);return!0},ud=function(a){if(!a.P){a.P=!0;for(var b=a.Z(),c=0;c<b.length;++c)b[c]in rd?a.a.addAdSensePageAttribute(rd[b[c]],a.H(b[c])):x(a.log,Eb(String(b[c]),String(a.H(b[c]))),a);a.a.addAdSensePageAttribute("google_tag_info","v2");Pc(a.j,function(a,b){if(k(a))for(var c=0;c<
a.length;++c)this.a.addAttribute(b,a[c])},a);rc(a.s,function(a){this.a.addPageCategoryExclusion(a)},a);a.a.setPublisherProvidedId(a.K);a.r&&a.a.setLocation(a.r);a.a.setCenterAds(a.O);rc(a.J,function(a){this.a.setApiExperiment(a)},a)}};e=W.prototype;e.setCookieOptions=function(a){if(!Qc(a))return x(this.log,Gb(String(a)),this),this;this.L=a;this.a&&this.a.setCookieOptions(a);return this};
e.setTagForChildDirectedTreatment=function(a){if(0!==a&&1!==a)return x(this.log,hc(String(a)),this),this;this.n=a;this.a&&this.a.setTagForChildDirectedTreatment(a);return this};e.ka=function(){this.n=-1;this.a&&this.a.setTagForChildDirectedTreatment(-1);return this};
e.setTargeting=function(a,b){var c=null;l(b)?c=[b]:k(b)?c=b:ba(b)&&(c=vc(b));var d=c?c.join():String(b);if(!l(a)||Aa(null==a?"":String(a))||!c)return x(this.log,gc(String(a),d,this.g()),this),this;this.j[a]=c;w(this.log,fc(a,d,this.g()),this);if(this.a)for(this.a.clearAttribute(a),d=0;d<c.length;++d)this.a.addAttribute(a,c[d]);return this};
e.ga=function(a){if(!l(a)||Aa(null==a?"":String(a)))return x(this.log,ac(String(a),this.g()),this),this;if(!this.j[a])return x(this.log,bc(a,this.g()),this),this;delete this.j[a];w(this.log,$b(a,this.g()),this);this.a&&this.a.clearAttribute(a);return this};e.setCategoryExclusion=function(a){if(!l(a)||Aa(null==a?"":String(a)))return x(this.log,dc(),this),this;var b=this.s;0<=qc(b,a)||b.push(a);w(this.log,cc(a),this);this.a&&this.a.addPageCategoryExclusion(a);return this};
e.fa=function(){this.s=[];w(this.log,ec(),this);this.a&&this.a.clearPageCategoryExclusions();return this};e.noFetch=function(){this.a?x(this.log,Ib("noFetch","pubads"),this):this.N=!1};e.disableInitialLoad=function(){this.a?x(this.log,Ib("disableInitialLoad","pubads"),this):this.M=!0};e.enableSingleRequest=function(){this.b&&!this.i?x(this.log,Hb("enableSingleRequest"),this):(w(this.log,Kb("single request"),this),this.i=!0);return this.i};
e.enableAsyncRendering=function(){this.b&&!this.c?x(this.log,Hb("enableAsyncRendering"),this):(w(this.log,Kb("asynchronous rendering"),this),this.c=!0);return this.c};e.enableSyncRendering=function(){if(this.b&&this.c)x(this.log,Hb("enableSyncRendering"),this);else{w(this.log,Kb("synchronous rendering"),this);this.c=!1;for(var a=this.d,b=0;b<a.length;++b)a[b].k=!1}return!this.c};e.Oa=function(a){w(this.log,Lb("centering",String(a)),this);this.O=a};
e.setPublisherProvidedId=function(a){this.b?x(this.log,Jb("setPublisherProvidedId",a),this):(w(this.log,Lb("PPID",a),this),this.K=a);return this};e.definePassback=function(a,b){return new V(a,b,this)};var qd=function(a,b){td(a);a.a?a.a.passback(b):(w(a.log,Bb(b.c,"GPT"),a,b),a.k.push(b))};e=W.prototype;
e.refresh=function(a){if(a&&!k(a))x(this.log,Ub("Slots to refresh"),this);else{var b=null;if(a&&(b=xd(this,a),!b.length)){y(this.log,Mb("Refresh"),this);return}this.a?(w(this.log,Rb(),this),this.a.refresh(b)):this.i?(w(this.log,Qb(),this),b?(a=this.m,0<=qc(a,b)||a.push(b)):this.w=!0):x(this.log,Nb(),this)}};
e.V=function(a,b,c,d,g,f){if(a&&!k(a))x(this.log,Ub("Slot list"),this);else if(b&&!m(b))x(this.log,G("Correlator"),this);else if(c&&!m(c))x(this.log,G("Pod number"),this);else if(d&&!m(d))x(this.log,G("Pod position"),this);else if(g&&!ca(g))x(this.log,Vb("Persistent roadblocks only"),this);else if(f&&!ca(f))x(this.log,Vb("Clear unfilled slots"),this);else if(this.a){var n=null;if(a&&(n=xd(this,a),!n.length)){y(this.log,Mb("refresh"),this);return}w(this.log,Rb(),this);this.a.refresh(n,b,c,d,g,f)}else x(this.log,
Nb(),this)};e.enableVideoAds=function(){this.u=!0;wd(this)};e.setVideoContent=function(a,b){this.u=!0;this.R=a;this.Q=b;wd(this)};e.Ka=function(){return this.a?this.a.getVideoContentInformation():null};var wd=function(a){a.u&&a.a&&a.a.setVideoContentInformation(a.R,a.Q)};e=W.prototype;e.getCorrelator=function(){return 0==this.d.length?"not_available":this.a?this.a.getCorrelator():"not_loaded"};
e.getVideoStreamCorrelator=function(){if(!this.a)return 0;var a=this.a.getVideoStreamCorrelator();return isNaN(a)?0:a};e.isAdRequestFinished=function(){return this.a?this.a.isAdRequestFinished():!1};e.isSlotAPersistentRoadblock=function(a){return this.a?this.a.isSlotAPersistentRoadblock(a):!1};e.collapseEmptyDivs=function(a){this.l?x(this.log,Yb(),this):this.b?x(this.log,Hb("collapseEmptyDivs"),this):(this.o=Boolean(a),w(this.log,Xb(String(this.o)),this),this.l=!0);return this.l};
e.clear=function(a){if(!this.a)return x(this.log,Pb(),this),!1;var b=null;if(a&&(b=xd(this,a),0==b.length))return y(this.log,Mb("Clear"),this),!1;w(this.log,Sb(),this);return this.a.clearSlotContents(b)};e.clearNoRefreshState=function(){this.a?(w(this.log,Tb(),this),this.a.clearNoRefreshState()):x(this.log,Ob(),this)};
e.setLocation=function(a,b,c){var d="role:1 producer:12";if(void 0!==b){if(!m(a))return x(this.log,G("Latitude")),this;if(!m(b))return x(this.log,G("Longitude")),this;d+=" latlng{ latitude_e7: "+Math.round(1E7*a)+" longitude_e7: "+Math.round(1E7*b)+"}";if(void 0!==c){if(isNaN(c))return x(this.log,G("Radius")),this;d+=" radius:"+Math.round(c)}}else 50<a.length&&(b=a.substring(0,50),x(this.log,Wb(String(a),"50",b)),a=b),d+=' loc:"'+a+'"';if(od)d=h.btoa(d);else{a=d;d=[];for(c=b=0;c<a.length;c++){for(var g=
a.charCodeAt(c);255<g;)d[b++]=g&255,g>>=8;d[b++]=g}if(!ba(d))throw Error("encodeByteArray takes an array as a parameter");if(!nd)for(nd={},a=0;65>a;a++)nd[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);a=nd;b=[];for(c=0;c<d.length;c+=3){var f=d[c],n=(g=c+1<d.length)?d[c+1]:0,C=c+2<d.length,M=C?d[c+2]:0,F=f>>2,f=(f&3)<<4|n>>4,n=(n&15)<<2|M>>6,M=M&63;C||(M=64,g||(n=64));b.push(a[F],a[f],a[n],a[M])}d=b.join("")}this.r="a "+d;return this};
e.getVersion=function(){return this.a?this.a.getVersion():void 0};e.na=function(a){this.b?x(this.log,Jb("forceExperiment",a),this):this.J.push(a)};var X=function(){var a=T(),b=cd(a,"publisher_ads");b||(b=new W,a.a[b.g()]=b);return b},xd=function(a,b){for(var c=[],d=0;d<b.length;++d){var g=b[d];g instanceof U?c.push(g):x(a.log,Zb(String(d)),a)}return c};r("pubads",X);W.prototype.clearNoRefreshState=W.prototype.clearNoRefreshState;W.prototype.enableVideoAds=W.prototype.enableVideoAds;
W.prototype.forceExperiment=W.prototype.na;W.prototype.getCorrelator=W.prototype.getCorrelator;W.prototype.getVideoContent=W.prototype.Ka;W.prototype.getVideoStreamCorrelator=W.prototype.getVideoStreamCorrelator;W.prototype.isAdRequestFinished=W.prototype.isAdRequestFinished;W.prototype.isSlotAPersistentRoadblock=W.prototype.isSlotAPersistentRoadblock;W.prototype.onGoogleAdsJsLoad=W.prototype.ja;W.prototype.clearTargeting=W.prototype.ga;W.prototype.clearCategoryExclusions=W.prototype.fa;
W.prototype.setVideoContent=W.prototype.setVideoContent;W.prototype.getVersion=W.prototype.getVersion;W.prototype.videoRefresh=W.prototype.V;W.prototype.setCentering=W.prototype.Oa;W.prototype.setPublisherProvidedId=W.prototype.setPublisherProvidedId;W.prototype.setCookieOptions=W.prototype.setCookieOptions;W.prototype.setTagForChildDirectedTreatment=W.prototype.setTagForChildDirectedTreatment;W.prototype.clearTagForChildDirectedTreatment=W.prototype.ka;var Y=function(){S.call(this);this.m=!0;this.f=this.i=!1;this.j=0;this.k=this.l=void 0;this.n=this.h=!1;this.c={};this.a=!1};ga(Y,S);e=Y.prototype;
e.I=function(){if(this.m){if(!this.n){var a=document,b=document.createElement("script");b.async=!0;b.type="text/javascript";b.src=yd();try{var c=a.getElementsByTagName("script")[0];w(this.log,tb("GPT CompanionAds"),this);this.n=!0;c.parentNode&&c.parentNode.insertBefore(b,c)}catch(d){y(this.log,ub("GPT CompanionAds"),this)}}}else this.h||(h.document.write('<script type="text/javascript" src="'+Rc(yd())+'">\x3c/script>'),this.h=!0)};e.enableSyncLoading=function(){this.m=!1};
e.setRefreshUnfilledSlots=function(a){ca(a)&&(this.i=a)};e.Pa=function(a){ca(a)&&(this.f=a)};e.Ma=function(a){if(this.i)zd(this,Ad(this,a));else if(this.f){a=Ad(this,a);var b=X();b.b?b.clear(a):y(this.log,qb("PubAds","clear"))}};e.U=function(){var a=X();if(!a.b)return!1;var a=a.d,b=this.d;if(a.length!=b.length)return!1;for(var c=0;c<b.length;++c){for(var d=!1,g=0;g<a.length;++g)if(b[c]===a[g]){d=!0;break}if(!d)return!1}return!0};e.Na=function(){this.i&&zd(this,null)};
e.ca=function(a,b,c,d,g,f,n){this.a=!1;this.j=0;this.k=this.l=void 0;this.j=a;void 0!==g&&(this.l=g);void 0!==f&&(this.k=f);void 0!==n&&(this.a=n)};e.Qa=function(a,b,c,d){this.ca(a,0,0,0,b,c,d)};e.ta=function(){return X().getCorrelator()};e.getVideoStreamCorrelator=function(){return X().getVideoStreamCorrelator()};var zd=function(a,b){var c=X();if(c.b){if(a.a){if(!a.U()){x(a.log,pb());return}c.clearNoRefreshState();c.clear()}c.V(b,a.j,a.l,a.k,a.a,a.f)}else y(a.log,qb("PubAds","refresh"))};
Y.prototype.isSlotAPersistentRoadblock=function(a){var b=X();if(b.b)return b.isSlotAPersistentRoadblock(a);y(this.log,rb());return!1};var Ad=function(a,b){for(var c=a.G,d=[],g=0;g<b.length;++g){var f=b[g];f in c?d.push(c[f]):x(a.log,sb(),a)}return d};Y.prototype.g=function(){return"companion_ads"};var yd=function(){return Sc()+"//pagead2.googlesyndication.com/pagead/show_companion_ad.js"};Y.prototype.o=function(){w(this.log,vb("GPT CompanionAds"),this);this.h=!0};
var Bd=function(a,b){var c=b&&b.b.b;return c&&c in a.c&&b.A()&&a.b&&!a.isSlotAPersistentRoadblock(b)?(b.i=a.c[c],id(b)):!1};Y.prototype.q=function(a){Bd(this,a)};Y.prototype.fillSlot=function(a,b){return a&&l(b)&&0<b.length?(this.c[a.b.toString()]=b,Bd(this,a)):!1};r("companionAds",function(){var a=T(),b=cd(a,"companion_ads");b||(b=new Y,a.a[b.g()]=b);return b});Y.prototype.fillSlot=Y.prototype.fillSlot;Y.prototype.isSlotAPersistentRoadblock=Y.prototype.isSlotAPersistentRoadblock;
Y.prototype.isRoadblockingSupported=Y.prototype.U;Y.prototype.onImplementationLoaded=Y.prototype.o;Y.prototype.notifyUnfilledSlots=Y.prototype.Ma;Y.prototype.refreshAllSlots=Y.prototype.Na;Y.prototype.setClearUnfilledSlots=Y.prototype.Pa;Y.prototype.setVideoSessionInfo=Y.prototype.ca;Y.prototype.setVideoSession=Y.prototype.Qa;Y.prototype.getDisplayAdsCorrelator=Y.prototype.ta;Y.prototype.getVideoStreamCorrelator=Y.prototype.getVideoStreamCorrelator;var Z=function(){S.call(this);this.a={}};ga(Z,S);Z.prototype.g=function(){return"content"};var Cd=function(a,b){var c=b&&b.b.b;c in a.a&&a.b&&b.A()&&!b.h&&(b.i=a.a[c],id(b))};Z.prototype.I=function(){for(var a=this.d,b=0;b<a.length;++b)Cd(this,a[b])};Z.prototype.q=function(a){Cd(this,a)};Z.prototype.setContent=function(a,b){ld(md(),a)&&l(b)&&0<b.length&&(this.a[a.b.b]=b,Cd(this,a))};r("content",function(){var a=T(),b=cd(a,"content");b||(b=new Z,a.a[b.g()]=b);return b});var Dd=/#|$/,Ed=function(a,b){var c=a.search(Dd),d;t:{d=0;for(var g=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+g),!f||61==f||38==f||35==f)break t;d+=g+1}d=-1}if(0>d)return null;g=a.indexOf("&",d);if(0>g||g>c)g=c;d+=b.length+1;return decodeURIComponent(a.substr(d,g-d).replace(/\+/g," "))};var Fd=function(){var a=window,b=document;if(q()._pubconsole_disable_)return!1;var c;c=document.cookie.split("google_pubconsole=");if(c=2==c.length?c[1].split(";")[0]:"")if(c=c.split("|"),0<c.length&&("1"==c[0]||"0"==c[0]))return!0;T();c=!1;try{c=a.top.document.URL===b.URL}catch(d){}a=c?b.URL:b.referrer;return null!==Ed(a,"google_debug")||null!==Ed(a,"google_console")||null!==Ed(a,"google_force_console")||null!==Ed(a,"googfc")},Gd=function(){if(Fd()){var a=document,b=a.createElement("script");b.type=
"text/javascript";b.src=Sc()+"//publisherconsole.appspot.com/js/loader.js";b.async=!0;(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(b,a)}};"complete"===document.readyState?Gd():Ca(window,Gd);r("disablePublisherConsole",function(){q()._pubconsole_disable_=!0});var $=function(){this.c=[];this.b=!1;this.a=z()};$.prototype.d=function(a,b){if(!Tc(a))return this.b=!0,x(this.a,hb(String(a))),this;var c;if(c=!Tc(b))c=!(k(b)&&tc(b,Tc));if(c)return this.b=!0,x(this.a,gb(String(b))),this;this.c.push([a,b]);return this};$.prototype.f=function(){if(this.b)return x(this.a,ib()),null;zc(this.c);return this.c};var yc=function(a,b){var c;t:{c=b[0];for(var d=a[0],g=wc,f=Math.min(c.length,d.length),n=0;n<f;n++){var C=g(c[n],d[n]);if(0!=C){c=C;break t}}c=wc(c.length,d.length)}return c};
r("sizeMapping",function(){return new $});$.prototype.addSize=$.prototype.d;$.prototype.build=$.prototype.f;r("getVersion",function(){return"37"});var Hd=q().cmd;if(!Hd||k(Hd)){var Id=q().cmd=new mc;Hd&&0<Hd.length&&Id.push.apply(Id,Hd)}(function(){var a=document.getElementsByTagName("script");0<a.length&&(a=a[a.length-1],a.src&&0<=a.src.indexOf("/tag/js/gpt.js")&&a.innerHTML&&!a.googletag_executed&&(a.googletag_executed=!0,eval(a.innerHTML)))})();})()
