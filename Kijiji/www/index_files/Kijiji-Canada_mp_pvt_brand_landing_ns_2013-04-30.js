<!--
// Last Updated: 06/21/2013

function ns_filter(search_page_url, d_filter_paid, d_filter, ns_search_sites){
// Filters for natural search landings; Returns true for natural search events
  var d_filter_u = d_filter.replace(/\./g, "\\.");
  if ((!d_filter_paid)||(search_page_url.search(new RegExp(":\\/\\/[^\\/\\?]*"+d_filter_u,"i"))==-1)){
    var regex_str = ":\\/\\/[^\\/\\?]*(";
    for (var i=0;i<ns_search_sites.length;i++){
      var ns_search_site_u = ns_search_sites[i].replace(/\./g, "\\.");	    
      regex_str = regex_str + ns_search_site_u + "|";	  
    }
    var regex_str_2 = regex_str.substring(0, regex_str.length-1) + ")";
    myregexp = new RegExp(regex_str_2, "i");
    if (search_page_url.search(myregexp)!=-1){
      return true;
    }
    else
      return false;
  }
  else
    return false;
}

function ns_tracking(landing_page_url, search_page_url, protocol, server_farm, ns_placement_id){
// Calls a natural search tracking tag
  var lt_tag;
  if ((server_farm == "adfarm.mediaplex.com")||(server_farm == "altfarm.mediaplex.com"))
    lt_tag = "/ad/lt/";
  else
    lt_tag = "/cm/lt/";
  var mpt = new Date();
  var mpts = mpt.getTimezoneOffset() + mpt.getTime();

  //eBay custom parameter
  var mpcl;
  if ((typeof mpx_custom !== 'undefined') && (mpx_custom.new_mpcl != null)) {
    mpcl = mpx_custom.new_mpcl;
  } else {
    mpcl = landing_page_url;
  }



  var ns_tag = "<img src=\"" + protocol + "//" + server_farm + lt_tag + ns_placement_id + "?mpt=" + mpts + "&mpcl=" + escape(mpcl) + "&mpvl=" + escape(search_page_url) + "\" border=\"0\">";

try{
  document.getElementById("mediaplex_tracking").innerHTML = ns_tag;	
}
catch(e){
  try{
    document.write(ns_tag);	
  } catch(e1){  
  }
}

}	

function ns_landing(landing_page_url, search_page_url, d_filter_paid, d_filter, ns_search_sites, protocol, server_farm, ns_placement_id){
// Determines what to do for a natural search landing; Returns true on natural search landings	
  if ((search_page_url != "")&&(ns_filter(search_page_url, d_filter_paid, d_filter, ns_search_sites))){
    ns_tracking(landing_page_url, search_page_url, protocol, server_farm, ns_placement_id); // Call an ns tag on an ns landing
    return true;
  }
  else 
    return false;
}

function paid_filter(landing_page_url, p_filter){
// Filters for paid landings; Returns true for paid landings	
  if ((landing_page_url.search(new RegExp(p_filter[0][0]+"=([^\\"+p_filter[0][1]+"]*)","i"))!= -1)){
    var p_val = RegExp.$1;
    for (var i=1;i<p_filter.length;i++){
      if (p_val.search(new RegExp(p_filter[i][1],"ig"))!= -1){
        return true;
      }	  
    }
    return false;
  }
  else
    return false;
}

function mp_landing(){
// Determines overall logic for landing page event filtering and tracking
  var landing_page_url = document.URL;
  var search_page_url = document.referrer;

//eBay custom modification
  if ((typeof mpx_custom !== 'undefined') && (mpx_custom.new_mpvl != null)) {
    search_page_url = mpx_custom.new_mpvl;
  } else {
    search_page_url = document.referrer;
  }



   // General Client Setup Configuration
  var server_farm = "mktg.kijiji.ca"; // specify adfarm, altfarm, or private branding URL
  var protocol = window.location.protocol;
  
  // Domain Filter Configuration
  // Enter information in the section below if filtering paid events from the referring URL domain
  // Click-Thru Wrap must be enabled in MOJO for all paid placements
  var d_filter_paid = true;  // enter true to enable domain filtering for paid landings
  var d_filter = "mediaplex.com"; // enter URL domain for filtering out paid landings via Click-Thru Wrap
  
  // Parameter Filter Configuration
  // Enter information in the section below if filtering paid events from a landing page parameter
  // Channel Parameters must be enabeled in MOJO for all paid placements
  // Otherwise Click-Thru Wrap must be enabled in MOJO for all paid placements
  var p_filter_paid = true; // enter true to enable parameter filtering or false for domain filtering only
  var p_filter = new Array; 
  p_filter[0] = new Array("mpch", "&"); // enter landing page parameter for filtering paid events and delimiter
  p_filter[1] = new Array("search", "sem"); // enter paid channel and corresponding parameter value (supports regular expression matching)
  p_filter[2] = new Array("display", "ads"); // enter paid channel and corresponding parameter value (supports regular expression matching)
  p_filter[3] = new Array("email", "mail"); // enter paid channel and corresponding parameter value (supports regular expression matching)
  
  // Natural Search Tracking Configuration
  var ns_placement_id = "5152-39300-15468-0"; // enter ID of natural search placement in MOJO including dashes
  // Enter all search engine domains below for filtering natural search events
  // Each domain must be configured for natural search tracking in MOJO Adserver
var ns_search_sites = new Array("bing.","search.yahoo.com","www.google.","plus.url.google.","translate.google","images.google.",".googleusercontent.",
"msn","aol.com","teoma","hotbot.com","altavista.com","overture","wisenut","netscape","freeserve","web.de","bluewin.ch",
"search.ch","toile.qc.ca","alltheweb.com","looksmart.com","ask.com","ask.co.uk","lycos.co.uk","lycos.com","freenet.de","shopping.freenet.de","t-online.de",
"shopping1.t-online.de","webkatalog.lycos.de","lycos.at","lycos.de","aol.de","aol.co.uk","tw.imagesearch.yahoo.com","images.aol.fr","lycos.fr","lycos.ca",
"advalvas.be","au.altavista.com","yellowpages.com.au","yatv.com","wps.yam.com","dir.yam.com",".ya.com","wanadoo.es","voila.fr","ricerca.virgilio.it","ricercaimmagini.virgilio.it","terra.es","tiscali.fr",
"search.tiscali.it","arianna.libero.it","goeureka.com.au","bigpond.com","ww2.austronaut.at","www.pchome.com.tw","austronaut.at","dir.pchome.com.tw","ilse.nl","aon.at","free.fr",
"www.toile.com","news.baidu.com","baidu.com","seek.3721.com","page.zhongsou.com","cha.iask.com","search.sina.com.cn","www.sogou.com/dir/","so.sohu.com",
"nisearch.163.com","psearch.163.com","search.tom.com","sitesearch.tom.com","cn.websearch.yahoo.com","go.8848.com","sogou.com","yisou.com","cari.com.my","yehey.com",
"startpagina.nl",".pagina.nl","vinden.nl","lycos.nl","vindex.nl","zoeken.nl","ixquick.com","zoek.nl",".naver.com",".alexa.com","optonline.net",
"yahoo.com.jp","orange.co.uk","tw.search.yahoo.com");
  
  // Begin landing page filtering and tracking
  if ((p_filter_paid)&&(paid_filter(landing_page_url, p_filter))){
    return 1;
  }
  else{
    ns_landing(landing_page_url, search_page_url, d_filter_paid, d_filter, ns_search_sites, protocol, server_farm, ns_placement_id);
    return 2;
  }
}

mp_landing();
//-->