// run things
if (window.TSNMedia !== undefined && window.TSNMedia.highliteCal !== undefined) {
TSNMedia.highliteCal();
}
//$('#tsnSuperHeader').find('img').attr('src','http://s0.2mdn.net/viewad/817-grey.gif').hide();
//tsnNavHover
ie6Hover = function() {
var tgLi = document.getElementById("tsnNav").getElementsByTagName("LI");
for (var i=0; i<tgLi.length; i++) {
if (tgLi[i].className == "hoverThis") {
tgLi[i].onmouseover=function() {
this.className+=" ieHover";
}
tgLi[i].onmouseout=function() {
this.className=this.className.replace(new RegExp(" ieHover\\b"), "");
}
}
}
var tgTri = document.getElementById("triNav");
if (tgTri) {
var tgLiTri = tgTri.getElementsByTagName("LI");
for (var i=0; i<tgLiTri.length; i++) {
if (tgLiTri[i].className == "hoverThis") {
tgLiTri[i].onmouseover=function() {
this.className+=" ieHover";
}
tgLiTri[i].onmouseout=function() {
this.className=this.className.replace(new RegExp(" ieHover\\b"), "");
}
}
}
}
}
if (window.ie6) { ie6Hover();}
function TSNLogin() {
var self = this;
var _username;
var _target;
var tagLoginLinks;
var tagLoginInfo;
this.renderLoginline = function() {
if (document.getElementById('tsnLoginBar') && document.getElementById('tsnLoginInfo') && document.getElementById('tsnLoginInfo').childNodes.length == 0) {
_username = this.getUsername();
if (_username) {
self.renderLoggedin();
}
else {
self.renderNotloggedin();
}
}
}
this.renderNotloggedin = function() {
// tsnLoginLinks
var tagLogin = self.createElement('a','LOGIN',{'href':'http://www.tsn.ca/mytsn/myprofile/'});
var tagRegister = self.createElement('a','REGISTER',{'href':'http://www.tsn.ca/mytsn/newuser/'});
var tagHelp = self.createElement('a','HELP',{'href':'http://www.tsn.ca/help/'});
var tagLoginSpan = self.createElement('span',[tagLogin,tagRegister,tagHelp]);
document.getElementById('tsnLoginLinks').appendChild(tagLoginSpan);
// tsnLoginInfo
var tagNotLoggedin = self.createElement('span','YOU ARE NOT LOGGED IN');
var tagSpan = self.createElement('span',tagNotLoggedin);
document.getElementById('tsnLoginInfo').appendChild(tagSpan);
}
this.renderLoggedin = function() {
// tsnLoginLinks
var tagLogout = self.createElement('a','LOGOUT',{'href':'http://www.tsn.ca/mytsn/logout.aspx'});
var tagProfile = self.createElement('a','MY PROFILE',{'href':'http://www.tsn.ca/mytsn/myprofile/'});
var tagHelp = self.createElement('a','HELP',{'href':'http://www.tsn.ca/help/'});
var tagLoginSpan = self.createElement('span',[tagLogout,tagProfile,tagHelp]);
document.getElementById('tsnLoginLinks').appendChild(tagLoginSpan);
// tsnLoginInfo
var tagSpanLoggedInAs = self.createElement('span','LOGGED IN AS: ' + _username);
var tagSpan = self.createElement('span',tagSpanLoggedInAs);
document.getElementById('tsnLoginInfo').appendChild(tagSpan);
}
this.createElement = function(t,v,a){ // t = tagname, v = tag value, a = attribute list
var objTag = document.createElement(t);
if (v != undefined && v != null) {
if (typeof(v) == 'string') {
v = document.createTextNode(v);
objTag.appendChild(v)
}
else if(v.length > 0) {
for (var i=0;i<v.length;i++) {
objTag.appendChild(v[i]);
}
}
else {
objTag.appendChild(v);
}
}
if (a != undefined) {
for (var s in a) {
var n = document.createAttribute(s);
n.value = a[s];
objTag.setAttributeNode(n);
}
}
return objTag;
}
this.getUsername = function() {
var username = document.cookie.match(/user_name=([^&]+)/i);
if (username && username.length > 0) {
return username[1].toUpperCase();
}
return '';
}
this.banUsers = function(s) {
var strBannedUsers = s;
var rxBannedUsers = new RegExp("user_name=(" + strBannedUsers + ")&");
if (document['cookie'] !== undefined && document.cookie !== null && rxBannedUsers.test(document.cookie)) {
document.cookie ='persistentTSN=null;bannedUser=true;expires=Thu, 1 Jan 1970 00:00:01 UTC;path=/;domain=.tsn.ca';
}
}
}
tsnl = new TSNLogin();
tsnl.banUsers("fistygalore|angelove35|truthhurts99");
tsnl.renderLoginline();
if (window.navigator !== undefined && window.FlashController !== undefined && window.TSNIDeviceController !== undefined && (/(ipad|ipod|iphone)/i).test(navigator.platform)) {
OneClipVideoListRenderer.PrerollFrequency = 0;
FlashController = TSNIDeviceController;
}
// OneClip player
if (window["OneClipVideoListRenderer"] && document.getElementById("OneClipViewer") && document.getElementById("Playlist")) {
OneClipVideoListRenderer.LoadOneClipPlayer();
}
 
$("div.inPageBigBox").attr({
id: "inPageBigBox1"
});
$("div.inPageBigBox").html("");
var ad10 = {
adunit: "/5479/ctv.tsn.ca/" + adpg,
size: "[300,250],[300,600],[300,1050]",
divid: "inPageBigBox1",
slot: 10
}
adserve(ad10);
$("div.playerBioAd").attr({
id: "inPageBigBox11"
});
$("div.playerBioAd").html("");
var ad11 = {
adunit: "/5479/ctv.tsn.ca/" + adpg,
size: "[300,250],[300,600],[300,1050]",
divid: "inPageBigBox11",
slot: 11
}
adserve(ad11);
$("div.inPageAd").attr({
id: "skyscraper1"
});
$("div.inPageAd").html("");
var ad30 = {
adunit: "/5479/ctv.tsn.ca/" + adpg,
size: "[160,600]",
divid: "skyscraper1",
slot: 30
}
adserve(ad30);
var ad60 = {
adunit: "/5479/ctv.tsn.ca/" + adpg,
size: "[320,30]",
divid: "inPageBellAd",
slot: 60
}
adserve(ad60);
$("div#tsnSuperHeader").html("");
var ad20 = {
adunit: "/5479/ctv.tsn.ca/" + adpg,
size: "[1000,45],[1000,250]",
divid: "tsnSuperHeader",
slot: 20
}
adserve(ad20);
var oopad = {
adunit: "/5479/ctv.tsn.ca/" + adpg,
divid: "Catfish",
slot: 40
}
adserveoop(oopad);
$(function() {
$("#Catfish").width(0).height(0);
});
window.Krux || ((Krux = function () { Krux.q.push(arguments) }).q = []);
(function () {
var k = document.createElement('script'); k.type = 'text/javascript'; k.async = true;
var m, src = (m = location.href.match(/\bkxsrc=([^&]+)/)) && decodeURIComponent(m[1]);
k.src = /^https?:\/\/([^\/]+\.)?krxd\.net(:\d{1,5})?\//i.test(src) ? src : src === "disable" ? "" :
(location.protocol === "https:" ? "https:" : "http:") + "//cdn.krxd.net/controltag?confid=IjHlQISs"
;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(k, s);
} ());
 
$(window).load(function() {
var DocTitle = document.title;
var getSiteSection = adpg
var getSubSections = "";
var getSubSection2 = "";
var getSubSection3 = "";
var getSubSection4 = "";
var hrefString = document.location.href;
var n;
var l;
Tracking.setPageName("tsn:" + adpg);
var getNumOfSubs = document.location.pathname.split('/').length - 2;
var url = document.location.pathname;
//get rid of the trailing /slash before doing a simple split on /slash
var url_parts = url.replace(/\/\s*$/,'').split('/');
url_parts.shift();
//Get Number of Sub sections
if (getNumOfSubs != 0)
{
if(getNumOfSubs >= 2){
getSubSections = url_parts[1];
Tracking.setPageName("tsn:" + adpg + ":" + getSubSections);
}
if(getNumOfSubs >= 3){
getSubSection2 = url_parts[2];
Tracking.setPageName("tsn:" + adpg + ":" + getSubSections + ":" + getSubSection2);
if (getNumOfSubs < 4){
n = hrefString.lastIndexOf("=");
l = document.location.href.length;
if (n + 1 < document.location.href.length){
getSubSection3 = hrefString.substring(n + 1,l);
Tracking.setPageName("tsn:" + adpg + ":" + getSubSections + ":" + getSubSection2 + ":" + getSubSection3);
}
}
}
if(getNumOfSubs >= 4){
getSubSection3 = url_parts[3];
Tracking.setPageName("tsn:" + adpg + ":" + getSubSections + ":" + getSubSection2 + ":" + getSubSection3);
n = hrefString.lastIndexOf("=");
l = document.location.href.length;
if (n + 1 < document.location.href.length){
getSubSection4 = hrefString.substring(n + 1,l);
Tracking.setPageName("tsn:" + adpg + ":" + getSubSections + ":" + getSubSection2 + ":" + getSubSection3 + ":" + getSubSection4);
}
}
}
//Special case for story's or fragments
if (adpg2 == "story" || adpg2 =="fragment") {
if (adpg2 =="fragment")
{
Tracking.setContentTitle(document.title);
if(adpg == document.title)
{
Tracking.setPageName("tsn:" + adpg );
}
else
{
Tracking.setPageName("tsn:" + adpg + ":" + document.title);
}
}
else
{
Tracking.setContentTitle(document.title);
Tracking.setPageName("tsn:" + adpg + ":" + getSubSections + ":" + document.title);
}
}
if ((adpg2 == "columnist" && adpg != "columnists") || (adpg2 == "blog" && adpg != "blogs")) {
getSiteSection = url_parts[0];
getSubSections = url_parts[1];
Tracking.setPageName("tsn:" + getSiteSection + ":" + getSubSections + ":" + document.title);
Tracking.setContentTitle(document.title);
}
if(adpg == "columnists" || adpg == "blogs"){
getSubSections = "";
getSubSection2 = "";
}
Tracking.setSiteAccount("ctvgmtvetsndesktop,ctvgmtsn");
Tracking.setSiteId("tsn")
Tracking.setSiteSection(getSiteSection);
Tracking.setSubSections(getSubSections,getSubSection2,getSubSection3,getSubSection4);
Tracking.track();
});
 
