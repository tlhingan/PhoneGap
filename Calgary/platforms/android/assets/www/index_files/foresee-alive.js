var $$FSR = {
   'timestamp': 'December 17, 2012 @ 10:44 AM',
   'version': '15.2.8',
   'enabled': true,
   'frames' : false,
   'sessionreplay': true,
   'auto' : true,
   'encode' : false,
   'files': '/foresee/',
   // needs to be set when foresee-transport.swf is not located at 'files'
   //'swf_files': '__swf_files_'
   'id': 'cAnS1A9X5dDoi0NWFYoVqw==',
   'definition': 'foresee-surveydef.js',
   'embedded': false,
   'replay_id': 'calgary.ca',
   'attach': false,
   'renderer':'W3C',	// or "ASRECORDED"
   'layout':'CENTERFIXED',	// or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
   'pools' : [
      {
         path: '.',
         sp: 30  // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
      }
   ],
   'sites': [
      {
         path: 'calgary.ca'
      },
      {
         path: '.',
         domain: 'default'
      }
   ],
   storageOption: 'cookie'
};

var FSRCONFIG = {};

// -------------------------------- DO NOT MODIFY ANYTHING BETWEEN THE DASHED LINES --------------------------------
(function(a,c,f){for(var c=a.sites,b=0,g=c.length;b<g;b++){var d;"[object Array]"!==Object.prototype.toString.call(c[b].path)&&(c[b].path=[c[b].path]);for(var e=0,h=c[b].path.length;e<h;e++)if(d=f.location.href.toLowerCase().match(c[b].path[e])){a.siteid=b;a.site=a.sites[b];a.site.domain?"default"==a.site.domain&&(a.site.domain=null):a.site.domain=d[0];a.site.secure||(a.site.secure=null);a.site.name||(a.site.name=d[0]);break}if(d)break}f.cookie="fsr.a"+(a.site.cookie?"."+a.site.cookie:"")+"=suspended;path=/"+
(a.site.domain?";domain="+a.site.domain+";":";")+(a.site.secure?"secure":"")})($$FSR,window,window.document);