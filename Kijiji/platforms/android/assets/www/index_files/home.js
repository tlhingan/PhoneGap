Kj.AreaHome=(function(){var A={init:function(B){this.checkPassedArgs(B);
this.opt=B;
this.defaults();
this.cache();
this.getGalleryWidth();
this.numberOfVisibleAds();
this.makePlaceHolder();
if(this.opt.disableRun!=true){this.callGallery()
}this.bindListeners();
this.galleryTextLink()
},defaults:function(){this.data={};
this.visibleAds=0;
this.navigateIndex=0;
this.leftPositionMultipler=1;
this.galleryWidth=0;
this.galleryWidthCache=0;
this.itemWidth=105;
this.marginMax=10;
this.defaultValues={viewAdSeoLink:"http://kijiji.ca/c-SelectCategory?hpFeaturedAd=checked",imageUrl:"http://pic.classistatic.com/image/pics/classifieds/en-CA/imageplaceholder10-gs.gif",title:"Your Ad Here",priceString:"",classUrgent:""};
this.placeHolder={};
this.search={};
this.search.locId=this.opt.currentLocationId;
this.animationComplete=true;
this.counterUrl=""
},cache:function(){this.dom={};
this.dom.galleryContent=$("#GalleryContent");
this.dom.galleryArrows=$("#ArrowNext, #ArrowPrev");
this.dom.galleryArrowPrev=$("#ArrowPrev");
this.dom.galleryArrowNext=$("#ArrowNext");
this.dom.galleryContentTable=this.dom.galleryContent.find("table");
this.dom.galleryTextLinkContainer=$(".gallery-links .col-1 li:first-child")
},bindListeners:function(){var B=this;
$(window).resize(function(){B.resizeGallery()
});
B.dom.galleryContent.on({mouseenter:function(){$(this).addClass("hover")
},mouseleave:function(){$(this).removeClass("hover")
},click:function(){var D=$(this).data("link"),C=B.extractAdIdFromLink(D),E=($(this).index()+1);
B.trackClick(C,D,E)
}},"table");
B.dom.galleryArrows.not(".disabled").on({mouseenter:function(){$(this).addClass("hover")
},mouseleave:function(){$(this).removeClass("hover").removeClass("down")
}});
B.dom.galleryArrowPrev.on({mousedown:function(){$(this).addClass("down")
},mouseup:function(){$(this).removeClass("down")
},click:function(){if(!$(this).hasClass("disabled")){B.prevAd()
}}});
B.dom.galleryArrowNext.on({mousedown:function(){$(this).addClass("down")
},mouseup:function(){$(this).removeClass("down")
},click:function(){if(!$(this).hasClass("disabled")){B.nextAd()
}}})
},checkPassedArgs:function(B){Kj.Utilities.verifyPassedArgs({val:B,required:true,typeofString:"object",name:"argument",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:B.ajaxUrl,required:true,typeofString:"string",name:"ajaxUrl",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:B.counterUrl,required:true,typeofString:"string",name:"counterUrl",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:B.currentLocationId,required:true,typeofString:"number",name:"currentLocationId"});
Kj.Utilities.verifyPassedArgs({val:B.placeHolder,required:true,typeofString:"object",name:"placeHolder",lengthMin:true});
Kj.Utilities.verifyPassedArgs({val:B.disableRun,required:false,typeofString:"boolean",name:"disableRun"})
},makePlaceHolder:function(){this.placeHolder=Kj.Utilities.replaceDefaults({dataCheck:this.opt.placeHolder,dataDefault:this.defaultValues})
},nextAd:function(){if(this.animationComplete===true){this.navigateIndex+=this.visibleAds;
this.leftPositionMultipler=1;
this.buildGalleryAds();
this.moveGallery({animate:{left:this.moveAnimateAmount("-")}})
}},prevAd:function(){if(this.animationComplete===true){this.navigateIndex-=this.visibleAds;
if(this.navigateIndex<0){this.navigateIndex=0
}this.leftPositionMultipler=-1;
this.buildGalleryAds();
this.moveGallery({animate:{left:this.moveAnimateAmount("+")}})
}},moveAnimateAmount:function(B){return B+"="+(this.galleryWidth)+"px"
},moveGallery:function(B){var C=this;
C.toggleNav();
C.dom.galleryContent.find(".gallerySection:first-child").animate(B.animate,{duration:"slow",complete:function(){C.removePreviousGallery();
C.toggleNav();
C.animationComplete=true
}});
C.dom.galleryContent.find(".gallerySection:last-child").animate({left:"0px"},{duration:"slow"});
C.animationComplete=false
},toggleNav:function(){if(this.navigateIndex>0){this.dom.galleryArrowPrev.removeClass("disabled")
}else{this.dom.galleryArrowPrev.addClass("disabled")
}if((this.navigateIndex+this.visibleAds)<this.data.length){this.dom.galleryArrowNext.removeClass("disabled")
}else{this.dom.galleryArrowNext.addClass("disabled")
}},callGallery:function(){var B=this;
$.ajax({url:B.opt.ajaxUrl,data:B.search,success:function(C){B.responseGallery(C)
}})
},extractAdIdFromLink:function(B){var D=B.lastIndexOf("/")+1;
var C=B.length;
return B.substring(D,C)
},trackClick:function(B,D,E){var C=this;
$.ajax({url:C.opt.counterUrl,data:{adId:B},complete:function(){C.trackGAClick(D,E)
}})
},trackGAClick:function(B,C){Kj.Tracking.trackGAEvent({action:"FeaturedAdClick",delayHref:B,label:this.populateGALabel(C)})
},populateGALabel:function(B){return Kj.extVars.tracking.label+";ftr1=HPG;pos="+B+";"
},responseGallery:function(B){if(B.homepageGalleryAds.length>0){this.data=B.homepageGalleryAds
}this.buildGalleryAds();
this.toggleNav()
},buildGalleryAds:function(E){if(typeof E==="undefined"){E=(this.galleryWidth*this.dom.galleryContent.find(".gallerySection").length)*this.leftPositionMultipler
}var D="",C="",B=0,F;
for(;
B<this.visibleAds;
B++){D+=this.buildGalleryAd(B+this.navigateIndex)
}F={galleryAds:D,leftPosition:E};
C+=Kj.Utilities.useTemplate({template:"galleryItemContainer",data:F});
this.dom.galleryContent.append(C);
this.resizeItemMargin();
this.truncateDescription()
},buildGalleryAd:function(C){var B;
if(C<this.data.length){B=new Array(Kj.Utilities.replaceDefaults({dataCheck:this.data[C],dataDefault:this.placeHolder}));
B[0]["classUrgent"]=this.data[C].urgent===true?" urgent":""
}else{B=new Array(this.placeHolder)
}return Kj.Utilities.useTemplate({template:"galleryItem",data:B})
},removePreviousGallery:function(){this.dom.galleryContent.find(".gallerySection:first-child").remove()
},truncateDescription:function(){this.dom.galleryContent.find(".description").ellipsis({row:2})
},resizeGallery:function(){this.getGalleryWidth();
if(this.galleryWidthCache!=this.galleryWidth){this.numberOfVisibleAds();
this.buildGalleryAds(0);
this.removePreviousGallery();
this.toggleNav();
this.galleryWidthCache=this.galleryWidth
}},getGalleryWidth:function(){this.galleryWidth=this.dom.galleryContent.outerWidth()
},numberOfVisibleAds:function(B){if(typeof B==="undefined"){B=this.dom.galleryContent.outerWidth()
}this.visibleAds=Math.floor(B/this.itemWidth);
return this.visibleAds
},remainderAllMargin:function(B,H){var E=(B%this.itemWidth)/H;
var F=Math.floor(E);
var G=(F>this.marginMax)?this.marginMax:F;
var D=(F>this.marginMax)?F-this.marginMax:0;
var C=E-F;
return{marginMax:G,marginOverMax:D,marginPoint:C}
},remainderLastMargin:function(B,C){return(C*(B.marginPoint+B.marginOverMax))
},remainderMargins:function(C,E){var D=this.remainderAllMargin(C,E);
var B=this.remainderLastMargin(D,E);
return{remainderAllMargin:D.marginMax,remainderLastMargin:B}
},resizeItemMargin:function(){var B=this.remainderMargins(this.galleryWidth,this.visibleAds);
this.dom.galleryContent.find(".gallerySection table").css("margin-right",Math.floor(25+B.remainderAllMargin)+"px");
var C=this.dom.galleryContent.find(".gallerySection table").eq(this.visibleAds-1);
C.css("margin-right",Math.floor(25+B.remainderLastMargin)+"px")
},galleryTextLink:function(){if(typeof clickURL!="undefined"){var B='<a href="'+clickURL+'" target="_blank">'+displayText+"</a>";
this.dom.galleryTextLinkContainer.append(B)
}}};
return{test:{HomepageGallery:A},initHomepageGallery:function(B){A.init(B)
}}
})();