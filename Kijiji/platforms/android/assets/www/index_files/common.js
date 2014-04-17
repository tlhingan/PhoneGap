var Kj=(function(){var C={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.defaults();
this.setLanguage();
this.cache();
this.bindListeners();
if(this.opt.disableRun!=true){this.resetLocations()
}},defaults:function(){this.selectedLocation=0;
this.selectedLocationName="";
this.globalSelectedLocation=0;
this.lang="En";
this.selectedClass="selected";
this.moreClass="more";
this.nextLevelClass="children"
},cache:function(){this.dom=[];
this.dom.locationMenus=$("#LocationMenus .jsonly");
this.dom.levels=[];
this.dom.levels[0]=this.dom.locationMenus.find(".level-1");
this.dom.levels[1]=this.dom.locationMenus.find(".level-2");
this.dom.levels[2]=this.dom.locationMenus.find(".level-3");
this.dom.submitButton=$("#LocUpdate");
this.dom.locMenu=$(".locMenu",this.dom.locationMenus);
this.dom.locationIdInput=$("#LocationIdInput");
this.dom.locationForm=$("#FormLocationPicker")
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.currentLocationId,required:true,typeofString:"number",name:"currentLocationId"});
Kj.Utilities.verifyPassedArgs({val:J.lang,required:true,typeofString:"string",name:"lang"});
Kj.Utilities.verifyPassedArgs({val:J.submitForm,required:true,typeofString:"boolean",name:"submitForm"});
Kj.Utilities.verifyPassedArgs({val:J.ajaxUrl,required:true,typeofString:"string",name:"ajaxUrl",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.disableRun,required:true,typeofString:"boolean",name:"disableRun"});
Kj.Utilities.verifyPassedArgs({val:J.isSRP,required:true,typeofString:"boolean",name:"isSRP"});
Kj.Utilities.verifyPassedArgs({val:J.srpChangeLocationUrl,required:true,typeofString:"string",name:"srpChangeLocationUrl"})
},bindListeners:function(){var J=this;
J.dom.submitButton.click(function(){J.changeLocation()
});
J.dom.locMenu.on("click","a",function(K){K.preventDefault()
});
J.dom.locationMenus.on("click","li",function(){var M=Number($(this).attr("data-loc-id"));
var L=$.trim($(this).text());
var K=$(this).parent().index();
J.setSelectedLocation(M,L);
$(this).siblings().removeClass(J.selectedClass);
$(this).siblings().removeClass(J.nextLevelClass);
$(this).addClass(J.selectedClass);
J.displayMenu(K);
J.dom.submitButton.removeClass("disabled")
});
J.dom.locationMenus.on("dblclick","li."+J.selectedClass,function(){J.changeLocation()
})
},changeLocation:function(){if(this.selectedLocation!=0){if(this.opt.submitForm===true){Kj.Tracking.api.TrackLocationSelection.trackForm({id:this.selectedLocation,catRoot:true})
}else{var K=this.findLocationById(locationsTree,this.selectedLocation),J=this.getLocationUrl(K);
this.redirectToLocation(K.id,J)
}}},getLocationUrl:function(J){return(this.opt.isSRP===true&&J.migratedLocation===true)?this.opt.srpChangeLocationUrl+J.id:J.homePageSEOUrl
},callLocationChange:function(){var K=this,J={locationId:this.selectedLocation};
$.ajax({url:K.opt.ajaxUrl,data:J,success:function(L){if(L.status==="OK"){K.redirectToLocation(K.selectedLocation,L.hpSeoUrl)
}}})
},redirectToLocation:function(K,J){Kj.Tracking.api.TrackLocationSelection.trackLink({id:K,href:J,catRoot:true})
},compareLocations:function(L,K,J){if(L[J]<K[J]){return -1
}if(L[J]>K[J]){return 1
}return 0
},setLanguage:function(){this.opt.lang=this.opt.lang.substr(0,2);
this.lang=this.opt.lang.charAt(0).toUpperCase()+this.opt.lang.slice(1)
},setHeight:function(){var K=1,L=this.dom.levels.length;
for(;
K<L;
K++){var N=this.dom.levels[K-1],V=N.find("li").length,R=parseInt(N.css("margin-top"),10),S=N.find("."+this.selectedClass),T=S.index(),Q=S.outerHeight(true),U=this.dom.levels[K],M=U.find("li").length,P=(M-1)/2,J=0,O=0;
U.css("margin-top",O);
if((K==1)&&(P>(V-(T+1)))){O=((V-M)*Q)+R
}else{J=(T*Q)+R;
O=J-(P*Q)
}if(O<0){O=0
}U.css("margin-top",O+"px")
}},setSelectedLocation:function(K,J){K=typeof K!=="undefined"?K:0;
this.selectedLocation=K;
this.selectedLocationName=J;
if(typeof locationsTree.children=="object"){$.each(locationsTree.children,function(L,M){if(M.id==K){K=J;
return false
}})
}this.dom.locationIdInput.val(K)
},doesNextMenuHaveChildren:function(J){var K=this.dom.locMenu.eq(J);
if(K!=="undefined"&&K.length>0){return true
}return false
},removeOldChildren:function(J){if(this.doesNextMenuHaveChildren(J)){this.removeMenuChildren(J)
}},removeMenuChildren:function(J){this.dom.levels[J].html("")
},resetLocations:function(){this.setSelectedLocation(this.opt.currentLocationId);
this.displayMenu()
},findLocationById:function(M,N){var L=false,K=this,J;
if(typeof M.children=="object"){$.each(M.children,function(O,P){if(P.id==N){L=P;
return false
}else{if(typeof P.children=="object"){J=K.findLocationById(P,N);
if(J!=false){L=J;
return false
}}}})
}return L
},displayMenu:function(M){var K=[this.selectedLocation],L;
this.buildLocationPath(K,locationsTree);
if(typeof M=="undefined"){K.pop();
M=0;
L=locationsTree
}else{L=locationsTree;
for(var J=0;
J<=M;
J++){K.pop();
$.each(L.children,function(N,O){if($.inArray(O.id,K)>-1){L=O
}})
}M++
}if(L.children.length>0){this.displayLinks(L,K,(M+1))
}else{this.removeOldChildren(M)
}this.setHeight()
},buildLocationPath:function(L,K){var J=this;
if(typeof K.children=="object"){$.each(K.children,function(M,N){J.buildLocationPath(L,N);
if($.inArray(N.id,L)>-1){L.push(K.id)
}})
}},displayLinks:function(M,V,J){var K=typeof M.children!=="undefined"?M.children:[],O="name"+this.lang,U=this,R=V.length,N=V.pop(),S=false,L=this.dom.levels[(J-1)],P,Q=new Array(),T="";
K.sort(function(X,W){return U.compareLocations(X,W,O)
});
$.each(K,function(W,Z){var Y="",X=Z[O];
if(Z.id==N){S=true;
Y=U.selectedClass;
if(!Z.leaf){P=Z
}if(J==1&&Z.id==this.selectedLocation){U.dom.locationIdInput.val(X)
}}if(!Z.leaf){Y+=(Y!="")?" "+U.moreClass:U.moreClass
}Q.push({locId:Z.id,locClasses:Y,locName:X})
});
T+=Kj.Utilities.useTemplate({template:"locationPickerList",data:{locations:Q}});
L.html(T);
if(typeof P!=="undefined"){this.displayLinks(P,V,J+1)
}else{if(S===false){L.find("li").addClass(this.nextLevelClass)
}this.removeOldChildren(J)
}}};
var H={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={};
this.dom.$tooltipTriggers=$(".tooltip-trigger")
},bindListeners:function(){var J=this;
J.dom.$tooltipTriggers.each(function(){$(this).qtip({content:{text:J.getTooltipContent($(this)),title:{button:true}},position:J.toolTipPosition($(this)),show:"mouseover",hide:{event:"mouseout",fixed:true,delay:1000}})
})
},getTooltipContent:function(J){return $("#"+J.attr("data-content")).html()
},toolTipPosition:function(K){var J={my:"bottom ",at:"top center"};
if(K.hasClass("left")){J.my+="right"
}else{J.my+="left"
}return J
},hideToolTips:function(){$("*").qtip("hide")
}};
var A={defaultOpt:function(){return{onClose:function(){},scrollOnRender:true,messageContainer:$("#MessageContainer")}
},init:function(J){J=$.extend({},this.defaultOpt(),J);
this.checkPassedArgs(J);
this.opt=J;
this.cache();
this.bindListeners();
if(this.opt.setMessage){this.buildTemplate()
}},cache:function(){this.dom={};
this.dom.$mainContainer=$("#MainContainer");
this.dom.$messageContainer=this.opt.messageContainer
},bindListeners:function(){var J=this;
J.dom.$mainContainer.on({click:function(){J.removeMessage($(this).parent())
}},".message-container .close-x")
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.setMessage,required:true,typeofString:"boolean",name:"setMessage"});
if(J.setMessage===true){Kj.Utilities.verifyPassedArgs({val:J.messageData,required:true,typeofString:"object",name:"messageData",lengthMin:true})
}if(J.messageContainer){Kj.Utilities.verifyPassedArgs({val:J.messageContainer,required:true,typeofString:"object",name:"messageContainer",lengthMin:true})
}if(J.onClose){Kj.Utilities.verifyPassedArgs({val:J.onClose,required:true,typeofString:"function",name:"onClose"})
}if(J.scrollOnRender){Kj.Utilities.verifyPassedArgs({val:J.scrollOnRender,required:true,typeofString:"boolean",name:"scrollOnRender"})
}},removeMessage:function(J){this.opt.onClose.call(J);
J.removeClass().addClass("message-container")
},buildTemplate:function(){var K=Kj.Utilities.useTemplate({template:"message",data:this.opt.messageData}),J=(this.dom.$messageContainer.offset().top)-10;
this.dom.$messageContainer.html(K);
if(this.opt.scrollOnRender){$(document).scrollTop(J)
}}};
var F={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.cache();
this.defaults();
this.addOverlay();
this.bindListeners();
this.setForm();
Kj.api.ToolTips.hideToolTips();
this.centerModalWindow();
this.setAdvancedMenu()
},defaults:function(){this.modalWindowOpen=true
},cache:function(){this.dom={};
this.dom.modalWindow=this.opt.modalID;
this.dom.modalOverlay=$(".modal-overlay");
this.dom.modalCloseButton=$(".close-modal");
this.dom.advancedMenuContent=$(".category-details");
this.dom.advancedMenuTabs=$("#adv_options");
this.dom.allModals=$(".modal");
this.dom.documentObj=$(document)
},bindListeners:function(){var J=this;
J.dom.modalCloseButton.on("click",function(K){K.preventDefault();
J.closeModalWindow()
});
J.dom.modalWindow.draggable({containment:"body",handle:".header",scroll:true});
J.dom.documentObj.on({keydown:function(K){if(K.which===27&&J.modalWindowOpen){J.closeModalWindow()
}}});
if(!this.opt.forced){J.dom.modalOverlay.on("click",function(K){J.closeModalWindow()
})
}},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.modalID,required:true,typeofString:"object",name:"modalID"});
Kj.Utilities.verifyPassedArgs({val:J.formID,required:false,typeofString:"object",name:"formID"});
Kj.Utilities.verifyPassedArgs({val:J.advancedMenu,required:false,typeofString:"string",name:"advancedMenu"});
Kj.Utilities.verifyPassedArgs({val:J.clearForm,required:false,typeofString:"boolean",name:"clearForm"});
Kj.Utilities.verifyPassedArgs({val:J.forced,required:false,typeofString:"boolean",name:"forced"})
},setForm:function(){if(typeof this.opt.formID!=="undefined"&&this.opt.formID!==null){var J=Kj.Forms.initForm({form:this.opt.formID});
if(typeof this.opt.clearForm!="undefined"&&this.opt.clearForm===true){J.clearForm()
}}},setAdvancedMenu:function(){if(typeof this.opt.advancedMenu!=="undefined"&&this.opt.advancedMenu!==null){this.dom.advancedMenuContent.find("div").hide();
this.dom.advancedMenuTabs.find("li").removeClass("selected");
this.dom.advancedMenuContent.find("#"+this.opt.advancedMenu).show();
this.dom.advancedMenuTabs.find("#"+this.opt.advancedMenu+"_option").addClass("selected")
}},addOverlay:function(){if(this.dom.modalOverlay.length<1){$("body").append('<div class="modal-overlay"></div>');
this.cache()
}this.dom.modalOverlay.show()
},centerModalWindow:function(){var J=($(window).width()-this.dom.modalWindow.width())/2,L=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset||0,K=L+($(window).height()-this.dom.modalWindow.height())/3;
if(J<0){J=0
}if(K<0){K=0
}this.dom.modalWindow.css({top:K+"px",left:J+"px"});
this.dom.modalWindow.fadeIn(150)
},closeModalWindow:function(){this.modalWindowOpen=false;
this.dom.allModals.find(".error").removeClass("error");
this.dom.modalOverlay.fadeOut(150);
this.dom.modalWindow.fadeOut(150)
}};
var G={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={$hoverButtons:$(".js-hover")}
},bindListeners:function(){var J=this;
this.dom.$hoverButtons.on({mouseover:function(){J.addHover($(this))
},mouseleave:function(){J.removeHover($(this))
}})
},addHover:function(J){J.addClass("hover")
},removeHover:function(J){J.removeClass("hover")
}};
var I={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={historyBackLinks:$(".history-back")}
},bindListeners:function(){var J=this;
this.dom.historyBackLinks.on({click:function(K){K.preventDefault();
J.goHistoryBack()
}})
},goHistoryBack:function(){history.go(-1)
}};
var E={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.bindListeners()
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.specs,required:true,typeofString:"object",name:"specs",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.windowPopUpLinks,required:true,typeofString:"object",name:"windowPopUpLinks"})
},bindListeners:function(){var J=this;
this.opt.windowPopUpLinks.on({click:function(K){K.preventDefault();
J.openWindowPopUp($(this))
}})
},openWindowPopUp:function(J){Kj.Utilities.initWindowPopUp({url:J.attr("href"),specs:this.opt.specs})
}};
var B={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={$printLinks:$(".print-link")}
},bindListeners:function(){var J=this;
this.dom.$printLinks.on({click:function(K){K.preventDefault();
J.printPage()
}})
},printPage:function(){window.print()
}};
var D={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={$collapseBanners:$(".collapse-banner")}
},bindListeners:function(){var J=this;
J.dom.$collapseBanners.on({renderEnded:function(K,L){J.bannerCheck($(this),L)
}})
},bannerCheck:function(J,K){if(this.isBannerToHeight(J,K)){J.removeClass("collapse-banner")
}else{this.hideBanner(J)
}},getDeterminedHeight:function(J){if(J[0].constructor===Array){return this.getLowestHeight(J)
}else{return J[1]
}},getLowestHeight:function(M){var K=0,L=0,J=M.length;
for(;
L<J;
L++){if(M[L][1]<K||K===0){K=M[L][1]
}}return K
},isBannerToHeight:function(J,K){return(J.height()<this.getDeterminedHeight(K))?false:true
},hideBanner:function(J){var K=J.parent();
if(K.hasClass("centered-item")){K.hide()
}else{J.hide()
}}};
return{test:{SelectLocation:C,ModalWindow:F,Messages:A,ToolTips:H,HoverButtons:G,HistoryBackLink:I,CollapseBanners:D,WindowPopUpLink:E,PrintLinks:B},initSelectLocation:function(J){return C.init(J)
},initModalWindow:function(J){return F.init(J)
},initMessages:function(J){return A.init(J)
},initToolTips:function(){return H.init()
},initHoverButtons:function(){return G.init()
},initHistoryBackLink:function(){return I.init()
},initCollapseBanners:function(){return D.init()
},initWindowPopUpLink:function(J){E.init(J)
},initPrintLinks:function(){B.init()
},api:{SelectLocation:{resetLocations:function(){return C.resetLocations()
},findLocationById:function(J,K){return C.findLocationById(J,K)
}},ModalWindow:{closeModalWindow:function(){return F.closeModalWindow()
}},ToolTips:{hideToolTips:function(){return H.hideToolTips()
}}}}
})();
(function(A){A.fn.ellipsis=function(B){var C={row:5,"char":"..."};
B=A.extend(C,B);
this.each(function(){var H=A(this);
var J=H.text();
var I=H.height();
H.text("a");
var G=H.height();
var D=G*B.row;
if(I<=D){H.text(J);
return 
}var K=1;
var E=J.length;
while(K<E){var F=Math.ceil((K+E)/2);
H.text(J.slice(0,F)+B["char"]);
if(H.height()<=D){K=F
}else{E=F-1
}}H.text(J.slice(0,K)+B["char"])
});
return this
}
})(jQuery);
Kj.Utilities=(function(){var F={init:function(G){this.checkPassedArgs(G);
this.opt=G;
if(typeof dust==="undefined"){throw new Error("kjTemplate - dust.js library not found. Please ensure dust is loading")
}return this.render()
},checkPassedArgs:function(G){Kj.Utilities.verifyPassedArgs({val:G,required:true,typeofString:"object",name:"Options object"});
Kj.Utilities.verifyPassedArgs({val:G.template,required:true,typeofString:"string",name:"template"});
if(typeof dust.cache[G.template]==="undefined"){throw new Error('kjTemplate - "'+G.template+'" - No such template found, did you compile it and register it in the page JS controller?')
}Kj.Utilities.verifyPassedArgs({val:G.data,required:true,typeofString:"object",name:"data"})
},render:function(){var G="";
dust.render(this.opt.template,this.opt.data,function(I,H){G=H
});
return G
}};
var E={init:function(G){this.checkPassedArgs(G);
this.opt=G;
this.runThroughData();
return this.opt.dataCheck
},checkPassedArgs:function(G){Kj.Utilities.verifyPassedArgs({val:G,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:G.dataCheck,required:true,typeofString:"object",name:"dataCheck"});
Kj.Utilities.verifyPassedArgs({val:G.dataDefault,required:true,typeofString:"object",name:"dataDefault",lengthMin:true})
},runThroughData:function(){for(data in this.opt.dataDefault){this.replaceData(data)
}},replaceData:function(G){if(typeof this.opt.dataCheck[G]==="undefined"||this.opt.dataCheck[G]===null||this.opt.dataCheck[G]===""){this.opt.dataCheck[G]=this.opt.dataDefault[G]
}}};
var A={init:function(G){this.opt=G;
this.verifyValue()
},verifyValue:function(){if(typeof this.opt.val==="undefined"||this.opt.val===null){if(this.opt.required===true){throw new Error("Please define '"+this.opt.name+"'")
}}else{if(typeof this.opt.val!==this.opt.typeofString){throw new Error("Please define the '"+this.opt.name+"' as a "+this.opt.typeofString)
}if(this.opt.lengthMin===true){if(this.opt.typeofString==="object"){if(this.opt.val.constructor===Array){if(this.opt.val.length<=0){throw new Error("Please define '"+this.opt.name+"' keys")
}}else{var H=0,G;
for(G in this.opt.val){H++
}if(H<=0){throw new Error("Please define '"+this.opt.name+"' keys")
}}}else{if(this.opt.typeofString==="string"){if($.trim(this.opt.val)===""){throw new Error("Please do not leave '"+this.opt.name+"' empty")
}}}}}}};
var B={init:function(G){this.checkPassedArgs(G);
this.opt=G;
return this.changeQuery()
},checkPassedArgs:function(G){Kj.Utilities.verifyPassedArgs({val:G,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:G.url,required:true,typeofString:"string",name:"url"});
Kj.Utilities.verifyPassedArgs({val:G.paramName,required:true,typeofString:"string",name:"paramName",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:G.paramValue,required:true,typeofString:"string",name:"paramValue",lengthMin:true})
},changeQuery:function(){var K=this.opt.url.replace(/^[?]/,""),I=/([^&=]+)=([^&]*)/g,H={},G;
while(G=I.exec(K)){var J=decodeURIComponent(G[1].replace("+"," ","g"));
H[J]=decodeURIComponent(G[2].replace("+"," ","g"))
}if((this.opt.paramName==="fl"||this.opt.paramName==="locationId")&&$.isNumeric(this.opt.paramValue)){this.opt.paramValue=this.opt.paramValue%100000000
}H[this.opt.paramName]=this.opt.paramValue;
return $.param(H)
}};
var D={init:function(G){this.checkPassedArgs(G);
this.opt=G;
return this.getQuery()
},checkPassedArgs:function(G){Kj.Utilities.verifyPassedArgs({val:G,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:G.url,required:true,typeofString:"string",name:"url"});
Kj.Utilities.verifyPassedArgs({val:G.paramName,required:true,typeofString:"string",name:"paramName",lengthMin:true})
},getQuery:function(){var G=this.getUrlVars();
if(typeof this.opt.paramName==="undefined"){return G
}if(typeof G[this.opt.paramName]==="undefined"){return""
}return G[this.opt.paramName]
},getUrlVars:function(){var J=[],I;
var G=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
for(var H=0;
H<G.length;
H++){I=G[H].split("=");
J.push(I[0]);
J[I[0]]=I[1]
}return J
}};
var C={init:function(G){this.checkPassedArgs(G);
this.opt=G;
this.openWindowPopUp()
},checkPassedArgs:function(G){Kj.Utilities.verifyPassedArgs({val:G,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:G.url,required:true,typeofString:"string",name:"url"});
Kj.Utilities.verifyPassedArgs({val:G.specs,required:true,typeofString:"object",name:"specs",lengthMin:true})
},openWindowPopUp:function(){window.open(this.opt.url,"_blank",this.getSpecString())
},getSpecString:function(){var G,H="";
for(G in this.opt.specs){H+=G+"="+this.opt.specs[G]+","
}return H
}};
return{test:{kjTemplate:F,replaceDefaults:E,verifyPassedArgs:A,changeUrlParam:B,getUrlParam:D,WindowPopUp:C},replaceDefaults:function(G){return E.init(G)
},useTemplate:function(G){return F.init(G)
},verifyPassedArgs:function(G){return A.init(G)
},changeUrlParam:function(G){return B.init(G)
},getUrlParam:function(G){return D.init(G)
},initWindowPopUp:function(G){C.init(G)
}}
})();
Kj.Tracking=(function(){var G={init:function(I){this.checkPassedArgs(I);
this.opt=I;
this.trackMediaplex()
},checkPassedArgs:function(I){Kj.Utilities.verifyPassedArgs({val:I,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:I.trackingUrl,required:true,typeofString:"string",name:"trackingUrl",lengthMin:true})
},trackMediaplex:function(){var I=this.buildMediaPlexImage();
$("body").append(I)
},buildMediaPlexImage:function(){var I=new Image();
I.src=this.opt.trackingUrl+Math.floor((Math.random()*100000000000000000)+1);
I.width=1;
I.height=1;
I.border="0";
return I
}};
var E={init:function(I){this.startWebTrends()
},startWebTrends:function(){if(this.isWTLuckyNumber()&&this.isWebTrendsDefined()){_tag=new WebTrends();
_tag.dcsGetId();
_tag.dcsCollect()
}},isWTLuckyNumber:function(){var K="luckynumber",I=$.cookie(K);
if(I===null){I=Math.floor(Math.random()*1000000);
var J=new Date();
J.setTime(J.getTime()+(30*24*60*60*1000));
$.cookie(K,I,{domain:Kj.extVars.domainUrl,expires:J,path:"/"})
}return((I%1000)<100)
},isWebTrendsDefined:function(){return typeof WebTrends!=="undefined"
}};
var C={init:function(I){this.checkPassedArgs(I);
this.opt=I;
this.trackEvent()
},checkPassedArgs:function(I){Kj.Utilities.verifyPassedArgs({val:I,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:I.event,required:true,typeofString:"string",name:"event",lengthMin:true})
},trackEvent:function(){if(Kj.Tracking.isWTLuckyNumber()){dcsMultiTrack("DCSext.event",this.opt.event)
}}};
var F={init:function(I){this.checkPassedArgs(I);
this.opt=I;
this.trackEvent()
},checkPassedArgs:function(I){Kj.Utilities.verifyPassedArgs({val:I,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:I.action,required:true,typeofString:"string",name:"action",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:I.label,required:false,typeofString:"string",name:"label",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:I.delayHref,required:false,typeofString:"string",name:"delayHref",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:I.delayForm,required:false,typeofString:"object",name:"delayForm"})
},trackEvent:function(){var I={event:this.opt.action,eventLabel:this.optionalLabel()};
Kj.Tracking.updateDataLayer({param:I});
if(this.isDelayed()){this.delay()
}},optionalLabel:function(){return(typeof this.opt.label!=="undefined")?this.opt.label:Kj.extVars.tracking.label
},delay:function(){var I=this.getDelayFunction();
setTimeout(I,100)
},isDelayed:function(){return(typeof this.opt.delayHref!=="undefined"||typeof this.opt.delayForm!=="undefined")?true:false
},getDelayFunction:function(){var J=this,I;
if(typeof this.opt.delayHref!=="undefined"){I=function(){document.location.href=J.opt.delayHref
}
}else{if(typeof this.opt.delayForm!=="undefined"){I=function(){J.opt.delayForm.submit()
}
}}return I
}};
var H={init:function(I){this.checkPassedArgs(I);
this.opt=I;
this.updateDataLayer()
},checkPassedArgs:function(I){Kj.Utilities.verifyPassedArgs({val:I,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:I.param,required:true,typeofString:"object",name:"param",lengthMin:true})
},updateDataLayer:function(){dataLayer.push(this.opt.param)
}};
var D={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={categoryLinks:$(".category-selected")}
},bindListeners:function(){var I=this;
I.dom.categoryLinks.on({click:function(J){J.preventDefault();
Kj.Tracking.trackGAEvent({action:"CategorySelected",label:I.populateLabel($(this).attr("data-id")),delayHref:$(this).attr("href")})
}})
},populateLabel:function(I){return"catId="+I+";locID="+Kj.extVars.tracking.locId+";"
}};
var B={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={locationLinks:$(".location-selected"),locationForm:$("#FormLocationPicker"),locationIdInput:$("#LocationIdInput")}
},bindListeners:function(){var I=this;
I.dom.locationLinks.on({click:function(J){J.preventDefault();
I.trackLink({id:$(this).attr("data-id"),href:$(this).attr("href"),catRoot:$(this).hasClass("location-hp")})
}})
},populateLabel:function(K,J){var I="catId=";
if(J!==true&&typeof Kj.extVars.tracking.catId!=="undefined"&&Kj.extVars.tracking.catId!==""){I+=Kj.extVars.tracking.catId
}else{I+="0"
}return I+";locID="+K+";"
},trackLink:function(I){Kj.Tracking.trackGAEvent({action:"LocationSelected",label:this.populateLabel(I.id,I.catRoot),delayHref:I.href})
},trackForm:function(I){Kj.Tracking.trackGAEvent({action:"LocationSelected",label:this.populateLabel(I.id,I.catRoot),delayForm:this.dom.locationForm})
}};
var A={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={attributeLinks:$("a.attribute-selected"),attributeForm:$("form.attribute-selected")}
},bindListeners:function(){var I=this;
I.dom.attributeLinks.on({click:function(J){J.preventDefault();
I.trackLink({event:$(this).attr("data-event"),href:$(this).attr("href"),label:I.populateLabelForLink($(this))})
}})
},hasAttributeId:function(I){return(typeof I.attr("data-id")!=="undefined"&&I.attr("data-id")!=="")?true:false
},attributeValue:function(I){return I.attr("data-id")
},populateLabelForLink:function(J){var I=this.labelCatLoc();
if(this.hasAttributeId(J)){I+="value="+this.attributeValue(J)+";"
}return I
},populateLabelForForm:function(I){var K=this,J=K.labelCatLoc(),L=1;
I.each(function(){J+="value"+L+"="+$(this).val()+";";
L++
});
return J
},labelCatLoc:function(){var I=0,J=0;
if(typeof Kj.extVars.tracking.catId!=="undefined"&&Kj.extVars.tracking.catId!==""){I=Kj.extVars.tracking.catId
}if(typeof Kj.extVars.tracking.locId!=="undefined"&&Kj.extVars.tracking.locId!==""){J=Kj.extVars.tracking.locId
}return"catId="+I+";locId="+J+";"
},trackLink:function(I){Kj.Tracking.trackGAEvent({action:I.event,label:I.label,delayHref:I.href})
},trackForm:function(I){Kj.Tracking.trackGAEvent({action:I.event,label:this.populateLabelForForm(I.form.find("input[type=text]")),delayForm:I.form})
}};
return{test:{TrackMediaplex:G,WebTrendsSetup:E,TrackWebTrendsEvent:C,TrackGAEvent:F,TrackCategorySelection:D,TrackLocationSelection:B,TrackAttributeSelection:A,UpdateDataLayer:H},initTrackMediaplex:function(I){return G.init(I)
},initWebTrends:function(I){E.init(I)
},isWTLuckyNumber:function(){return E.isWTLuckyNumber()
},trackWebTrendsEvent:function(){C.init()
},trackGAEvent:function(I){F.init(I)
},updateDataLayer:function(I){H.init(I)
},initTrackCategorySelection:function(){D.init()
},initTrackLocationSelection:function(){B.init()
},initTrackAttributeSelection:function(){A.init()
},api:{TrackLocationSelection:{trackLink:function(I){B.trackLink(I)
},trackForm:function(I){B.trackForm(I)
}},TrackAttributeSelection:{trackLink:function(I){A.trackLink(I)
},trackForm:function(I){A.trackForm(I)
}}}}
})();
Kj.Forms=(function(){var D={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.cache();
this.bindListeners();
this.populateFormPlaceholders()
},cache:function(){this.dom={};
this.dom.$form=this.opt.form;
this.dom.$formInputs=this.dom.$form.find("input[type=text], textarea, password");
this.dom.$formInputPlaceholders=this.dom.$form.find(" *[data-placeholder]")
},bindListeners:function(){var J=this;
J.dom.$formInputPlaceholders.on({focus:function(){J.removePlaceholder($(this))
},blur:function(){J.addPlaceholder($(this))
}});
if(this.hasSubmitValidation(this.opt)){J.dom.$form.on({submit:function(){if(J.isFormValid()===true){J.removePlaceholders();
return true
}else{return false
}}})
}},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.form,required:true,typeofString:"object",name:"form"});
Kj.Utilities.verifyPassedArgs({val:J.submitValidation,required:false,typeofString:"boolean",name:"submitValidation"});
if(this.hasSubmitValidation(J)){Kj.Utilities.verifyPassedArgs({val:J.showInputMessages,required:true,typeofString:"boolean",name:"showInputMessages"});
Kj.Utilities.verifyPassedArgs({val:J.showBoxMessages,required:true,typeofString:"boolean",name:"showBoxMessages"})
}},clearForm:function(){this.dom.$form.find("input[type=text], textarea").val("").removeAttr("checked").removeAttr("selected");
this.dom.$form.find(" .error").removeClass("error");
this.populateFormPlaceholders()
},populateFormPlaceholders:function(){var J=this;
J.dom.$formInputPlaceholders.each(function(){if(J.isFieldEmpty($(this))){J.populateFormPlaceholdersValue($(this))
}})
},populateFormPlaceholdersValue:function(J){J.addClass("placeholder-text").val(J.data("placeholder"))
},removePlaceholder:function(J){if(J.hasClass("placeholder-text")){J.val("").removeClass("placeholder-text")
}},removePlaceholders:function(){var J=this;
J.dom.$formInputPlaceholders.each(function(){if(J.isFieldEmpty($(this))){J.removePlaceholder($(this))
}})
},addPlaceholder:function(J){if(this.isFieldEmpty(J)){this.populateFormPlaceholdersValue(J)
}},isFieldEmpty:function(J){return(J.val()===""||J.val()===J.attr("data-placeholder"))?true:false
},hasSubmitValidation:function(J){return(typeof J.submitValidation!=="undefined"&&J.submitValidation===true)?true:false
},isFormValid:function(){return Kj.Forms.initValidateForm({form:this.opt.form,showInputMessages:this.opt.showInputMessages,showBoxMessages:this.opt.showBoxMessages})
}};
var C={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.defaults();
this.cache();
this.clearPreviousErrors();
this.validateInputs();
return this.formValid
},defaults:function(){this.formValid=true;
this.errorClass="error";
this.errorMessageClass=".field-message"
},cache:function(){this.dom={};
this.dom.$form=this.opt.form;
this.dom.$formInputs=this.dom.$form.find("input,textarea,file,password");
if(this.opt.showInputMessages===true){this.dom.$errorMessage=this.dom.$form.find(this.errorMessageClass)
}if(this.opt.showBoxMessages===true){this.dom.$errorBoxMessage=$(".message-container.error")
}},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.form,required:true,typeofString:"object",name:"form"});
Kj.Utilities.verifyPassedArgs({val:J.showInputMessages,required:true,typeofString:"boolean",name:"showInputMessages"});
Kj.Utilities.verifyPassedArgs({val:J.showBoxMessages,required:true,typeofString:"boolean",name:"showBoxMessages"})
},validateInputs:function(){var J=this,K;
this.dom.$formInputs.each(function(){K=Kj.Forms.initValidateInput({form:J.dom.$form,inputField:$(this),showInputMessages:J.opt.showInputMessages,showBoxMessages:J.opt.showBoxMessages});
if(K===false&&J.formValid===true){J.formValid=false
}})
},clearPreviousErrors:function(){if(this.opt.showInputMessages===true){this.dom.$errorMessage.removeClass(this.errorClass)
}if(this.opt.showBoxMessages===true){this.dom.$errorBoxMessage.removeClass(this.errorClass)
}}};
var I={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.cache();
this.defaults();
this.clearPreviousError();
this.validateInputsTypes(this.dom.$inputField);
return this.isInputValid()
},cache:function(){this.dom={};
this.dom.$form=this.opt.form;
this.dom.$inputField=this.opt.inputField
},defaults:function(){this.inputValid=true;
this.requiredAttr="req";
this.inputRegEx={email:/^([A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]+(\.[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]+)*)@(([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)?\.)+[a-zA-Z]{2,7})$/,number:/^[-+]?[\d]*$/,phone:/^[()\- 0-9]*$/};
this.fieldErrors=[];
this.errorClass="error"
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.form,required:true,typeofString:"object",name:"form"});
Kj.Utilities.verifyPassedArgs({val:J.inputField,required:true,typeofString:"object",name:"inputField"});
Kj.Utilities.verifyPassedArgs({val:J.showInputMessages,required:true,typeofString:"boolean",name:"showInputMessages"});
Kj.Utilities.verifyPassedArgs({val:J.showBoxMessages,required:true,typeofString:"boolean",name:"showBoxMessages"})
},isValidEmail:function(J){return this.inputRegEx.email.test($.trim(J))
},isValidPhone:function(J){return this.inputRegEx.phone.test(J)
},isValidCreditCard:function(M){var J=M.length,N=0,L=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],K=0;
while(J--){K+=L[N][parseInt(M.charAt(J),10)];
N^=1
}return K%10===0&&K>0
},isValidNumber:function(J){return this.inputRegEx.number.test(J)
},isValidPrice:function(K){var J=$.parseNumber(K.val(),{format:"#,###.##",locale:(Kj.extVars.locale==="fr_CA"?"fr":"us")});
if(J!==null){K.val(J);
return true
}J=parseFloat(K.val());
if(J!==null&&!isNaN(J)){J=Math.round(J*100)/100;
K.val(J);
return true
}return false
},isUnderMaxLength:function(J){var K=true,M=J.attr("maxlength"),L=J.val().length;
if(typeof M!=="undefined"){if(M<L){K=false
}}return K
},isOverOrEqualMinLength:function(L){var K=true,J=L.attr("data-minlength"),M=L.val().length;
if(typeof J!=="undefined"){if(J>M){K=false
}}return K
},isNumberInRange:function(K){var M=true,J=parseInt(K.val(),10),L=K.attr("data-max"),N=K.attr("data-min");
if(typeof L!=="undefined"){if(J>L){M=false
}}if(typeof N!=="undefined"){if(J<N){M=false
}}return M
},numberRangeErrorMessage:function(J){var K=Kj.extVars.validationMessages.numberRange,L=J.attr("data-max"),M=J.attr("data-min");
if(typeof M==="undefined"){M=0
}K=K.replace("{{max}}",L);
K=K.replace("{{min}}",M);
return K
},maxLengthErrorMessage:function(K){var L=Kj.extVars.validationMessages.maxlength,J=K.attr("maxlength");
L=L.replace("{{max}}",J);
return L
},minLengthErrorMessage:function(K){var L=Kj.extVars.validationMessages.minlength,J=K.attr("data-minlength");
L=L.replace("{{min}}",J);
return L
},isMatchingInput:function(J){return(this.getMatchingInputValue(J)===J.val())?true:false
},isInputFilled:function(J){return((typeof J.val()!=="undefined")&&($.trim(J.val())!=="")&&(J.val()!==J.attr("data-placeholder")))?true:false
},isInputRequired:function(J){return(J.attr(this.requiredAttr)!==undefined)?true:false
},isChecked:function(J){return J.is(":checked")
},getMatchingInputValue:function(J){return $("#"+J.attr("data-matching")).val()
},hasMatchingInput:function(J){return(typeof J.attr("data-matching")!=="undefined"&&$.trim(J.attr("data-matching")!==""))?true:false
},inputType:function(J){var K;
if(J.attr("type")==="text"||J.is("textarea")||(J.attr("type")==="password")){K="text"
}else{if(J.attr("type")==="radio"){K="radio"
}else{if(J.attr("type")==="file"){K="file"
}}}return K
},validateInputsTypes:function(J){var L=this.inputType(J),K=J.attr("name");
switch(L){case"radio":if(this.isInputRequired(J)){if(!this.validateRadioButtons(K)){this.addError(K,Kj.extVars.validationMessages.req)
}}break;
case"text":this.validateInputText(J,K);
break;
case"file":if(!this.isInputFilled(J)){if(this.isInputRequired(J)){this.addError(K,Kj.extVars.validationMessages.req)
}}break;
default:break
}},validateRadioButtons:function(K){var M=this.dom.$form.find('[name="'+K+'"]'),J=M.length,L=0,N=false;
for(L;
L<J;
L++){if(this.isChecked(M.eq(L))){N=true
}}return N
},validateInputText:function(J,K){if(this.isInputFilled(J)){if(this.isUnderMaxLength(J)){if(this.isOverOrEqualMinLength(J)){if(this.hasMatchingInput(J)){if(this.isMatchingInput(J)){this.validateInputTextTypes(J)
}else{this.addError(K,Kj.extVars.validationMessages.matching)
}}else{this.validateInputTextTypes(J)
}}else{this.addError(K,this.minLengthErrorMessage(J))
}}else{this.addError(K,this.maxLengthErrorMessage(J))
}}else{if(this.isInputRequired(J)){this.addError(K,Kj.extVars.validationMessages.req)
}}},validateInputTextTypes:function(J){switch(J.attr("data-type")){case"email":if(!this.isValidEmail(J.val())){this.addError(J.attr("name"),Kj.extVars.validationMessages.email)
}break;
case"phone":if(!this.isValidPhone(J.val())){this.addError(J.attr("name"),Kj.extVars.validationMessages.phone)
}break;
case"number":if(!this.isValidNumber(J.val())){this.addError(J.attr("name"),Kj.extVars.validationMessages.number)
}else{if(!this.isNumberInRange(J)){this.addError(J.attr("name"),this.numberRangeErrorMessage(J))
}}break;
case"price":if(!this.isValidPrice(J)){this.addError(J.attr("name"),Kj.extVars.validationMessages.number)
}else{if(!this.isNumberInRange(J)){this.addError(J.attr("name"),this.numberRangeErrorMessage(J))
}}break;
case"creditcard":if(!this.isValidCreditCard(J.val())){this.addError(J.attr("name"),Kj.extVars.validationMessages.creditcard)
}break;
default:break
}},addError:function(K,L){var J={field:K,errmsg:L};
this.fieldErrors.push(J);
this.inputValid=false
},isInputValid:function(){if(this.inputValid===false){Kj.Forms.initDisplayFormErrors({form:this.dom.$form,showInputMessages:this.opt.showInputMessages,showBoxMessages:this.opt.showBoxMessages,fieldErrors:this.fieldErrors})
}return this.inputValid
},getFieldLabel:function(){return this.dom.$form.find('label[for="'+this.dom.$inputField.attr("id")+'"]')
},clearPreviousError:function(){this.getFieldLabel().removeClass(this.errorClass);
this.dom.$inputField.removeClass(this.errorClass)
}};
var E={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.defaults();
this.cache();
this.throwErrors()
},cache:function(){this.dom={};
this.dom.$form=this.opt.form;
this.dom.$formInputs=this.dom.$form.find("input, textarea, select");
if(this.opt.showInputMessages===true){this.dom.$errorMessage=this.dom.$form.find(this.errorMessageClass)
}},defaults:function(){this.errorClass="error";
this.errorMessageClass=".field-message";
this.groupErrorMessages={}
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.form,required:true,typeofString:"object",name:"form"});
Kj.Utilities.verifyPassedArgs({val:J.showInputMessages,required:true,typeofString:"boolean",name:"showInputMessages"});
Kj.Utilities.verifyPassedArgs({val:J.showBoxMessages,required:true,typeofString:"boolean",name:"showBoxMessages"});
Kj.Utilities.verifyPassedArgs({val:J.fieldErrors,required:true,typeofString:"object",name:"fieldErrors",lengthMin:true})
},getFieldInput:function(J){return this.dom.$form.find('[name="'+J+'"]')
},getFieldLabel:function(J){return this.dom.$form.find('label[for="'+J+'"]')
},getFieldErrorContainer:function(J){return this.dom.$form.find(this.errorMessageClass+'[data-for="'+J+'"]')
},getGroupName:function(J){return J.attr("data-group")
},isInAGroup:function(J){return(typeof J.attr("data-group")!=="undefined")?true:false
},getGroupErrorContainer:function(J){return this.dom.$form.find(this.errorMessageClass+'[data-for-group="'+J+'"]')
},addGroupErrorMessage:function(K,J){if(typeof this.groupErrorMessages[K]!=="undefined"&&this.groupErrorMessages[K].constructor===Array){this.groupErrorMessages[K].push(J)
}else{this.groupErrorMessages[K]=[J]
}},hasGroupErrorMessages:function(){return(_.size(this.groupErrorMessages)>0)?true:false
},throwErrors:function(){var L=0,J=this.opt.fieldErrors.length,K=[];
for(L;
L<J;
L++){K.push({text:this.opt.fieldErrors[L].errmsg,url:"#"+this.getFieldInput(this.opt.fieldErrors[L].field).attr("id")});
this.throwError(this.opt.fieldErrors[L])
}if(this.opt.showBoxMessages===true){this.boxErrorMessage(K)
}if(this.hasGroupErrorMessages()===true){this.throwGroupErrors()
}},throwError:function(K){var M=this.getFieldInput(K.field),J=M.attr("id"),L=this.getFieldLabel(J);
L.addClass(this.errorClass);
M.addClass(this.errorClass);
if(this.opt.showInputMessages===true){this.inputErrorMessage(K,J)
}if(this.isInAGroup(M)){this.addGroupErrorMessage(this.getGroupName(M),K.errmsg)
}},throwGroupErrors:function(){for(var J in this.groupErrorMessages){this.throwGroupError(J)
}},throwGroupError:function(J){var K=this.getGroupErrorContainer(J);
if(this.groupErrorContainerAlreadyExists(K)){this.addToGroupContainerMessage(K,J)
}else{this.createGroupContainerMessage(K,J)
}},createGroupContainerMessage:function(L,K){var J=Kj.Utilities.useTemplate({template:"groupValidationErrors",data:{mainErrorMessage:Kj.extVars.validationMessages.group,errorMessages:_.uniq(this.groupErrorMessages[K])}});
L.addClass("error");
L.html(J)
},addToGroupContainerMessage:function(M,K){var N=M.find("ul"),L=this.getUniqueGroupErrors(M,K),J=Kj.Utilities.useTemplate({template:"groupValidationErrors",data:{errorMessages:L}});
if(L.length>0){N.append(J)
}},getUniqueGroupErrors:function(L,K){var J=[],M=L.find("li");
M.each(function(){J.push($(this).text())
});
return _.difference(this.groupErrorMessages[K],J)
},groupErrorContainerAlreadyExists:function(J){return(J.hasClass("error")&&J.find("ul").length>0)?true:false
},inputErrorMessage:function(L,K){var J=this.getFieldErrorContainer(K);
J.html(L.errmsg);
J.addClass(this.errorClass)
},boxErrorMessage:function(J){Kj.initMessages({setMessage:true,messageData:{messageClass:"error",messageTextHeadline:Kj.extVars.validationMessages.headline,links:J}})
}};
var H={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.defaults();
this.cache();
this.clearErrors()
},cache:function(){this.dom={};
this.dom.$form=this.opt.form;
this.dom.$formInputs=this.dom.$form.find("input,textarea")
},defaults:function(){this.errorClass="error";
this.errorMessageClass=".field-message"
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.form,required:true,typeofString:"object",name:"form"});
Kj.Utilities.verifyPassedArgs({val:J.fieldErrors,required:true,typeofString:"object",name:"fieldErrors",lengthMin:true})
},getFieldInput:function(J){return this.dom.$form.find('[name="'+J+'"]')
},getFieldLabel:function(J){return this.dom.$form.find('label[for="'+J+'"]')
},getFieldErrorContainer:function(J){return this.dom.$form.find(this.errorMessageClass+'[data-for="'+J+'"]')
},clearErrors:function(){var L=0,J=this.opt.fieldErrors.length,K=[];
for(L;
L<J;
L++){K.push({text:this.opt.fieldErrors[L].errmsg,url:"#"+this.getFieldInput(this.opt.fieldErrors[L].field).attr("id")});
this.clearError(this.opt.fieldErrors[L])
}},clearError:function(K){var M=this.getFieldInput(K.field),J=M.attr("id"),L=this.getFieldLabel(J);
L.removeClass(this.errorClass);
M.removeClass(this.errorClass);
this.clearInputErrorMessage(K,J)
},clearInputErrorMessage:function(L,K){var J=this.getFieldErrorContainer(K);
J.html("");
J.removeClass(this.errorClass)
}};
var G={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.cache();
this.bindListeners()
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.form,required:true,typeofString:"object",name:"form"});
Kj.Utilities.verifyPassedArgs({val:J.matchingExtensions,required:true,typeofString:"string",name:"matchingExtensions",lengthMin:true})
},cache:function(){this.dom={fileUploadInput:$(".file-upload-input",this.opt.form),fileUploadWrapper:$(".file-input-wrapper",this.opt.form),fileUploadButton:$(".file-upload-button",this.opt.form)}
},bindListeners:function(){var J=this;
J.dom.fileUploadInput.on({mouseenter:function(){J.dom.fileUploadButton.addClass("hover")
},mouseleave:function(){J.dom.fileUploadButton.removeClass("hover")
}})
},hasFile:function(){return(this.dom.fileUploadInput.val()!=="")?true:false
},hasValidFileType:function(){var J=new RegExp("^("+this.opt.matchingExtensions+")$");
return J.test(this.getFileExtension())
},getFileExtension:function(){return this.getFilename().match(/[^.]*$/)[0].toLowerCase()
},getFilename:function(){return this.dom.fileUploadInput.val().match(/[^/\\]*$/)[0]
},throwError:function(){Kj.Forms.initDisplayFormErrors({form:this.opt.form,showInputMessages:true,showBoxMessages:false,fieldErrors:[{field:this.dom.fileUploadInput.attr("name"),errmsg:Kj.extVars.validationMessages.fileType}]})
},clearError:function(){this.dom.fileUploadWrapper.find(".error").removeClass("error")
},isValidFile:function(){var J;
this.clearError();
if(this.hasFile()){if(this.hasValidFileType()){J=true
}else{this.throwError();
J=false
}}return J
}};
var F={init:function(J){this.checkPassedArgs(J);
this.opt=J;
this.cache();
this.bindListeners();
Kj.Forms.initUploadFile({form:this.opt.form,matchingExtensions:this.opt.matchingExtensions})
},cache:function(){this.dom={fileUploadInput:$(".file-upload-input",this.opt.form),fileUploadWrapper:$(".file-input-wrapper",this.opt.form),fileUploadButton:$(".file-upload-button",this.opt.form)}
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.form,required:true,typeofString:"object",name:"form"});
Kj.Utilities.verifyPassedArgs({val:J.matchingExtensions,required:true,typeofString:"string",name:"matchingExtensions",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:J.callbackSuccessful,required:true,typeofString:"function",name:"callbackSuccessful"});
Kj.Utilities.verifyPassedArgs({val:J.callbackUnsuccessful,required:false,typeofString:"function",name:"callbackUnsuccessful"})
},bindListeners:function(){var J=this;
J.dom.fileUploadInput.on({change:function(){J.isValidFile()
}})
},hasUnsuccessfulCallback:function(){return(typeof this.opt.callbackUnsuccessful!=="undefined")?true:false
},isValidFile:function(){if(Kj.Forms.api.UploadFile.isValidFile()===true){this.opt.callbackSuccessful()
}else{if(this.hasUnsuccessfulCallback()){this.opt.callbackUnsuccessful()
}}}};
var A={init:function(J){this.opt=J;
this.defaults();
this.cache(J);
this.checkPassedArgs(J);
this.applyTraits()
},defaults:function(){this.attributes=[""]
},cache:function(){this.dom={};
this.dom.$container=this.opt&&this.opt.container?this.opt.container:$("body")
},checkPassedArgs:function(J){Kj.Utilities.verifyPassedArgs({val:J,typeofString:"object",name:"argument"});
if(typeof J==="object"){Kj.Utilities.verifyPassedArgs({val:J.container,typeofString:"object",name:"container",lengthMin:true})
}},applyTraits:function(){var L=this,K,M,J;
for(K in L.glossary){M="[data-"+K+"]";
$(M,L.dom.$container).each(function(){J=L.getData(K,this);
L.glossary[K].init(this,J)
})
}},getData:function(P,M){var J,L,N,R=this.glossary[P].keys,K={},O="data-"+P,Q=0;
for(Q;
Q<R.length;
Q++){J=R[Q];
L=J.name==="_self"?O:O+"-"+J.name;
N=$(M).attr(L);
if(J.required===true&&typeof N==="undefined"){throw new Error("Please define property "+L+' for trait "'+P+".")
}if(J.multiple===true){N=N.split(",")
}if(typeof J["default"]!=="undefined"&&typeof N==="undefined"){N=J["default"]
}K[J.name]=N
}return K
},glossary:{}};
A.glossary.dependent={keys:[{name:"_self"},{name:"on",required:true},{name:"change",required:false,multiple:true,"default":"disabled"},{name:"group",required:false,"default":true}],handlers:{disabled:{off:function(){$(this).prop("disabled",true)
},on:function(){$(this).prop("disabled",false)
}},visibility:{off:function(){$(this).hide()
},on:function(){$(this).show()
}},required:{off:function(){$(this).removeAttr("req")
},on:function(){$(this).attr("req",true)
}},focus:{off:function(){},on:function(){$(this).focus()
}}},init:function(K,O){var J=$(O.on),N=$('[name="'+J.attr("name")+'"]'),L=this;
if(N.length===0||O.group===false){N=J
}function M(){var Q=J.is(":checked"),P;
if(Q){for(P=0;
P<O.change.length;
P++){L.handlers[O.change[P]].on.call(K)
}}else{for(P=0;
P<O.change.length;
P++){L.handlers[O.change[P]].off.call(K)
}}}N.bind("change",M).trigger("change")
}};
var B={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom={sortOrderForm:$("#SortOrderForm"),sortOrderField:$("#SortField"),sortSelectField:$("#SortSelectField")}
},bindListeners:function(){var J=this;
this.dom.sortSelectField.on({change:function(){J.updateSortOrderForm($(this).val())
}})
},updateSortOrderForm:function(J){this.dom.sortOrderField.val(J);
this.dom.sortOrderForm.submit()
}};
return{test:{Form:D,ValidateForm:C,DisplayFormErrors:E,ClearFormErrors:H,UploadFile:G,Traits:A,UploadFileButton:F,ValidateInput:I,SortAds:B},initForm:function(J){D.init(J);
return{clearForm:function(){D.clearForm()
},populateFormPlaceholders:function(){D.populateFormPlaceholders()
}}
},initTraits:function(J){return A.init(J)
},initDisplayFormErrors:function(J){return E.init(J)
},initClearFormErrors:function(J){return H.init(J)
},initUploadFile:function(J){return G.init(J)
},initValidateForm:function(J){return C.init(J)
},initUploadFileButton:function(J){return F.init(J)
},initValidateInput:function(J){return I.init(J)
},initSortAds:function(){return B.init()
},api:{UploadFile:{hasFile:function(){return G.hasFile()
},getFilename:function(){return G.getFilename()
},isValidFile:function(){return G.isValidFile()
}}}}
})();
Kj.Header=(function(){var F={init:function(H){this.checkPassedArgs(H);
this.opt=H;
Kj.initSelectLocation(this.opt);
this.cache();
this.bindListeners()
},cache:function(){this.dom=[];
this.dom.currentLocation=$("#CurrentLocation");
this.dom.listsContainer=$("#ListsContainer");
this.dom.locationLabel=$("#LocationLabel");
this.dom.cancelButton=$(".loc-cancel")
},bindListeners:function(){var H=this;
$(document).mouseup(function(I){if(H.dom.currentLocation.has(I.target).length===0){H.hideMenu()
}});
H.dom.locationLabel.click(function(I){if(H.dom.listsContainer.is(":hidden")){H.showMenu();
Kj.api.SelectLocation.resetLocations()
}else{H.hideMenu()
}});
H.dom.cancelButton.click(function(){H.hideMenu();
return false
})
},checkPassedArgs:function(H){Kj.Utilities.verifyPassedArgs({val:H,required:true,typeofString:"object",name:"argument",lengthMin:true})
},hideMenu:function(){this.dom.currentLocation.removeClass("open");
this.dom.listsContainer.hide()
},showMenu:function(){this.dom.currentLocation.addClass("open");
this.dom.listsContainer.show()
}};
var E={init:function(H){this.checkPassedArgs(H);
this.opt=H;
this.cache();
this.bindListeners()
},cache:function(){this.dom=[];
this.dom.dropDown=this.opt.dropDown
},bindListeners:function(){this.dom.dropDown.on({mouseenter:function(){$(this).addClass("hover")
},mouseleave:function(){$(this).removeClass("hover");
$(this).removeClass("open")
},click:function(){$(this).toggleClass("open")
}})
},checkPassedArgs:function(H){Kj.Utilities.verifyPassedArgs({val:H,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:H.dropDown,required:true,typeofString:"object",name:"dropDown",lengthMin:true})
}};
var G={init:function(){this.cache();
this.bindListeners();
Kj.Header.initDropDown({dropDown:this.dom.searchIn})
},cache:function(){this.dom=[];
this.dom.searchIn=$("#SearchIn");
this.dom.cLinkMslctbx=$(".c-lnk-mslctbx");
this.dom.searchCategoryValue=$("#SearchCategoryValue");
this.dom.searchCategorySelected=$("#SearchCategorySelected")
},bindListeners:function(){var H=this;
H.dom.cLinkMslctbx.click(function(I){I.preventDefault();
H.dom.searchCategoryValue.val($(this).attr("id"));
H.dom.searchCategorySelected.text($(this).text())
})
}};
var D={init:function(H){this.checkPassedArgs(H);
this.opt=H;
this.cache();
this.bindListeners();
this.resizeSearchInput()
},cache:function(){this.dom=[];
this.dom.headerBar=$("#HeaderBar");
this.dom.searchForm=$("#SearchForm");
this.dom.searchInput=$("#SearchInput");
this.dom.searchContainer=$("#InputContainer");
this.dom.searchClear=$("#InputClear");
this.dom.searchGoButton=$("#SearchGoButton")
},bindListeners:function(){var H=this;
$(window).resize(function(){H.resizeSearchInput()
});
H.dom.searchInput.focus(function(){H.dom.searchContainer.addClass("active")
});
H.dom.searchInput.blur(function(){if(H.dom.searchInput.val()!==""){H.dom.searchClear.addClass("active")
}H.dom.searchContainer.removeClass("active")
});
H.dom.searchClear.mousedown(function(){H.dom.searchInput.val("");
H.dom.searchClear.removeClass("active")
});
H.dom.searchGoButton.click(function(){H.dom.searchForm.submit()
})
},checkPassedArgs:function(H){Kj.Utilities.verifyPassedArgs({val:H,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:H.pixelDifference,required:true,typeofString:"number",name:"pixelDifference"});
if(H.pixelDifference<0){throw new Error("Please define the 'pixelDifference' higher than 0")
}},resizeSearchInput:function(){var H=this.dom.headerBar.outerWidth();
this.dom.searchInput.css("width",H-this.opt.pixelDifference+"px")
}};
var B={init:function(){this.cache();
this.bindListeners()
},cache:function(){this.dom=[];
this.dom.userLogged=$("#UserLogged")
},bindListeners:function(){var H=this;
this.dom.userLogged.on({mouseleave:function(){$(this).removeClass("drop-down")
},click:function(){$(this).toggleClass("drop-down")
}})
}};
var A={init:function(H){this.checkPassedArgs(H);
this.opt=H;
this.cache();
this.bindListeners()
},cache:function(){this.dom={};
this.dom.changeLocaleLink=$("#ChangeLocale")
},bindListeners:function(){var H=this;
this.dom.changeLocaleLink.click(function(J){J.preventDefault();
var I=Kj.Utilities.changeUrlParam({url:location.search,paramName:"siteLocale",paramValue:H.opt.locale});
location.search=I
})
},checkPassedArgs:function(H){Kj.Utilities.verifyPassedArgs({val:H,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:H.locale,required:true,typeofString:"string",name:"locale",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:H.enableSearchNavigation,required:true,typeofString:"boolean",name:"enableSearchNavigation"})
}};
var C={init:function(H){this.checkPassedArgs(H);
this.opt=H;
this.cache();
this.defaults();
this.bindListeners()
},defaults:function(){this.timeoutId;
this.ajaxCalldelay=300;
this.search={};
this.search.query="";
this.search.catId="";
this.search.locId="";
this.search.otherLang=""
},cache:function(){this.dom=[];
this.dom.searchForm=$("#SearchForm");
this.dom.searchInput=$("#SearchInput");
this.dom.suggestedSearches=$("#SuggestedSearches");
this.dom.searchCategoryValueInput=$("#SearchCategoryValue")
},bindListeners:function(){var H=this;
H.dom.searchInput.on({keyup:function(){H.checkSuggestions()
},focus:function(){H.showSuggestions()
},blur:function(){}});
H.dom.suggestedSearches.on({click:function(){H.selectedSuggestion($(this))
},hover:function(){console.log("HOVER")
}},"li");
H.dom.suggestedSearches.on("click","a",function(I){I.preventDefault()
})
},checkPassedArgs:function(H){Kj.Utilities.verifyPassedArgs({val:H,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:H.ajaxUrl,required:true,typeofString:"string",name:"ajaxUrl",lengthMin:true})
},selectedSuggestion:function(H){this.dom.searchInput.val(H.attr("title"));
this.dom.searchCategoryValueInput.val(H.data("cat-id"));
this.dom.searchForm.submit()
},moveHover:function(){},isBlankKeyword:function(H){var I=true;
if(H!==""){I=false
}return I
},isNewKeyword:function(H){var I=true;
if(this.search.query===H){I=false
}return I
},getNewKeywords:function(){return $.trim(this.dom.searchInput.val())
},checkSuggestions:function(){var H=this.getNewKeywords();
if(!this.isBlankKeyword(H)){this.showSuggestions();
if(this.isNewKeyword(H)){this.search.query=H;
this.setAjaxCall()
}else{this.showSuggestions()
}}else{this.resetSuggestions()
}},setAjaxCall:function(){var H=this;
clearTimeout(H.timeoutId);
H.timeoutId=setTimeout(H.callSuggestions(),H.ajaxCalldelay)
},callSuggestions:function(){var H=this;
$.ajax({url:H.opt.ajaxUrl,data:H.search,success:function(I){if(I.length>0){H.renderDropDown(I)
}else{H.resetSuggestions()
}}})
},renderDropDown:function(H){var I=this;
this.dom.suggestedSearches.html(I.buildDropDown(H))
},buildDropDown:function(H){var I;
for(I in H){H[I].suggestionClasses="";
if(H[I].categoryId!==0){H[I].suggestionClasses="hasCategory"
}}return Kj.Utilities.useTemplate({template:"suggestionBox",data:H})
},showSuggestions:function(){this.dom.suggestedSearches.show()
},hideSuggestions:function(){this.dom.suggestedSearches.hide()
},clearSuggestions:function(){this.dom.suggestedSearches.html("")
},resetSuggestions:function(){this.hideSuggestions();
this.clearSuggestions()
}};
return{test:{LocationPicker:F,SearchCategories:G,SearchInput:D,DropDown:E,UserLoggedIn:B,SuggestionBox:C,ChangeLocale:A},initLocationPicker:function(H){return F.init(H)
},initSearchCategories:function(){return G.init()
},initSearchInput:function(H){return D.init(H)
},initDropDown:function(H){return E.init(H)
},initUserLoggedIn:function(){return B.init()
},initSuggestionBox:function(H){return C.init(H)
},initChangeLocale:function(H){return A.init(H)
},api:{SuggestionBox:{resetSuggestions:function(){return C.resetSuggestions()
}}}}
})();
