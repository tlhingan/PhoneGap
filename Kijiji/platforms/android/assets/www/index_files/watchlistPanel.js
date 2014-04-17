Belen.Controller.Search.Watchlist=(function(){var Q;
var W=[];
var S={};
var X=false;
var D="ad_ids_s";
var U="p-vap-lnk-actn-addwtch",V="open",H="p-vap-lnk-actn-rmwtch";
this.addCallback=null;
this.removeCallback=null;
var M={init:function(){Q=Belen.Controller.Search.extVars;
$(".watch").click(I);
$("#watchlistContent .body").mouseenter(function(){$("#WatchlistContainer > header").addClass("hover")
});
$("#watchlistContent .body").mouseleave(function(){$("#WatchlistContainer > header").removeClass("hover")
});
$("#WatchlistContainer > header").click(P);
var c=Z();
W=B(c.saved_s);
X=L(c.panel_state);
C();
var f=$("#WatchlistItems li:not(.last) .tooltip-container");
var d;
for(var b=0;
b<f.length;
b++){var a=$(f[b]);
var e=((100+a.height())*-1)+"px";
a.css("top",e)
}$("#WatchlistItems").on({mouseenter:function(){d=$(this).find(".tooltip-container");
timeout=window.setTimeout(function(){d.fadeIn("fast")
},500)
},mouseleave:function(){window.clearTimeout(timeout);
d.fadeOut("fast")
}},"li:not(.last)")
},add:function(a){if(W.length==0){X=true
}K("add",a);
var b=Belen.Controller.Search.Watchlist;
if(b.addCallback!=null){b.addCallback(a)
}},remove:function(a){for(var b=0;
b<W.length;
++b){if(W[b].indexOf(a)!=-1){W.splice(b,1);
break
}}K("remove",a);
var c=Belen.Controller.Search.Watchlist;
if(c.removeCallback!=null){c.removeCallback(a)
}},contains:function(a){for(var b=0;
b<W.length;
++b){if(W[b]==a){return true
}}return false
}};
var K=function(b,a){$.ajax({cache:false,url:Q.editWatchlistAjaxUrl,data:{adId:a,action:b}}).done(function(c){A(b,a,c)
})
};
var A=function(d,b,a){var c=a===undefined||(a.status!=="OK"&&a.status!=="ok"&&a!=="ok"&&a!=="OK"),e=$(".watch[data-adid='"+b+"']");
if(c){T(a.message);
return 
}if(d=="add"){W.push(b);
Kj.Tracking.trackGAEvent({action:"WatchlistAdd"});
if(typeof Kj.extVars.tracking.watchAdMediaplexUrl!=="undefined"){Kj.Tracking.initTrackMediaplex({trackingUrl:Kj.extVars.tracking.watchAdMediaplexUrl})
}e.removeClass(U).addClass(V).addClass(H)
}else{if(d=="remove"){Kj.Tracking.trackGAEvent({action:"WatchlistRemove"});
e.removeClass(H).addClass(U).removeClass(V)
}}C();
E()
};
var T=function(a){$(".watch").removeClass(H).addClass(U).removeClass(V);
Kj.initMessages({setMessage:true,messageData:{messageClass:"error",messageText:a?a:"no response from server"}})
};
var B=function(b){var c=[];
if(typeof b!="undefined"&&b!=""){c=b.split("&");
c.reverse();
for(var a=0;
a<c.length;
++a){c[a]=c[a].substring(0,c[a].lastIndexOf("#"))
}}return c
};
var L=function(a){return(typeof a!="undefined"&&a==="opened")
};
var I=function(c){c.preventDefault();
c.stopPropagation();
var b=$(this).attr("data-action"),a=$(this).attr("data-adId");
if(b!=""){$(this).attr("data-action",b=="add"?"rm":"add")
}else{return true
}if(b=="rm"){M.remove(a)
}else{if(b=="add"){M.add(a)
}}return false
};
var C=function(){if(W.length!=0){if(X){$("#WatchlistContainer").addClass("open");
N()
}else{$("#WatchlistContainer").removeClass("open")
}$("#WatchlistContainer").show()
}else{$("#WatchlistContainer").hide()
}$("#WatchListCount").html(W.length);
$("#CompareWatchListAdsButton").attr("disabled","true").addClass("disabled")
};
var N=function(){$("#WatchlistItems").find("li:not(.last)").remove();
var d=W.length;
if(d>5){d=5
}for(var b=d;
b>0;
b--){var c=W[(W.length-b)].split("#")[0];
var a=S[c];
if(typeof a==="undefined"){a='<img src="'+Q.staticContentBaseUrl+'/img/ajax-loader.gif"/>';
$.ajax({url:Q.getWatchlistEntryAjaxUrl+"?adId="+c,success:F})
}a='<li data-adId="'+c+'">'+a+"</li>";
$("#WatchlistItems").prepend(a);
Y()
}};
function R(b){var a=document.createElement("div");
a.innerHTML=b;
return a.textContent||a.innerText
}var F=function(e,b,g){var a=e.ad;
var c="",f="";
if(!a.imageUri){c='<div class="no-thumb"><a href="'+a.viewItemPageUri+'">'+a.title+"</a></div>"
}else{c='<div class="image"><a href="'+a.viewItemPageUri+'"><img class="ad-thumb" src="'+a.imageUri.replace("18.JPG","14.JPG")+'" alt="'+a.title+'"/></a></div>'
}if(typeof a.price!="undefined"&&a.price!=""){f='<p style="font-size: 9px;" class="price">'+R(a.price)+"</p>"
}var d='<div class="tooltip-container"><div class="top"></div><div class="mid"><h4 style="font-size: 12px;">'+R(a.title)+'</h4> <p style="font-size: 9px;">'+R(a.description)+"</p>"+f+'</div><div class="btm"></div></div><div class="close-x" data-adId="'+a.adId+'"></div>'+c+'<input type="checkbox" name="AdId" value="'+a.adId+'">';
$("#WatchlistItems li[data-adId='"+a.adId+"']").html(d);
S[a.adId]=d;
G();
Y()
};
var G=function(){$("#WatchlistItems .no-thumb > a").ellipsis()
};
var Y=function(){$("#WatchlistItems input[type=checkbox]").off("change");
$("#WatchlistItems input[type=checkbox]").change(O);
$(".close-x").off("click");
$(".close-x").click(function(){J($(this))
})
};
var J=function(b){var a=b.attr("data-adId");
M.remove(a)
};
var O=function(d){var b=$("#CompareWatchListAdsButton");
var a=$("#WatchlistItems input[type=checkbox]:checked");
var c=a.length;
if(c>=2){b.removeAttr("disabled").removeClass("disabled")
}else{b.attr("disabled","true").addClass("disabled")
}};
var P=function(){X=X?false:true;
E();
C();
return false
};
var Z=function(){var c={};
if($.cookie(D)!=null){var e=$.cookie(D).substring(1).split("^");
for(var b=0;
b<e.length;
++b){var a=e[b];
if(a==""){continue
}var d=a.split("=",2);
c[d[0]]=$.trim(d[1])
}}return c
};
var E=function(){if(Q.writeToGlobal===true){if(W.length!=0){var a=Q.globalFavoritesPanelUrl+"&opened="+X;
$.ajax({cache:false,url:a})
}}};
return M
})();