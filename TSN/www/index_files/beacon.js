writecomscoreBeacon= function(){

	var dist_id = "3005664";
	document.write("<img alt='comscorebeacon' id='img1' height='1' width='1' src='http://beacon.scorecardresearch.com/scripts/beacon.dll?C1=2&C2="+dist_id+"&C3="+dist_id+"&C4=" + escape(window.location.href) + "&C5=&C6=&C7=" + escape(window.location.href) + "&C8=" + escape(document.title) + "&C9=" + escape(document.referrer) + "&rn=" + Math.floor(Math.random()*99999999)+"'>");

}

writecomscoreBeacon();