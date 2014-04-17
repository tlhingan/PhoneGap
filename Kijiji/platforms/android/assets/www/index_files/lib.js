/* jQuery UI - v1.10.4 - 2014-02-27
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.progressbar.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(B,F){var A=0,E=/^ui-id-\d+$/;
B.ui=B.ui||{};
B.extend(B.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
B.fn.extend({focus:(function(G){return function(H,I){return typeof H==="number"?this.each(function(){var J=this;
setTimeout(function(){B(J).focus();
if(I){I.call(J)
}},H)
}):G.apply(this,arguments)
}
})(B.fn.focus),scrollParent:function(){var G;
if((B.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){G=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(B.css(this,"position"))&&(/(auto|scroll)/).test(B.css(this,"overflow")+B.css(this,"overflow-y")+B.css(this,"overflow-x"))
}).eq(0)
}else{G=this.parents().filter(function(){return(/(auto|scroll)/).test(B.css(this,"overflow")+B.css(this,"overflow-y")+B.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!G.length?B(document):G
},zIndex:function(J){if(J!==F){return this.css("zIndex",J)
}if(this.length){var H=B(this[0]),G,I;
while(H.length&&H[0]!==document){G=H.css("position");
if(G==="absolute"||G==="relative"||G==="fixed"){I=parseInt(H.css("zIndex"),10);
if(!isNaN(I)&&I!==0){return I
}}H=H.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++A)
}})
},removeUniqueId:function(){return this.each(function(){if(E.test(this.id)){B(this).removeAttr("id")
}})
}});
function D(I,G){var K,J,H,L=I.nodeName.toLowerCase();
if("area"===L){K=I.parentNode;
J=K.name;
if(!I.href||!J||K.nodeName.toLowerCase()!=="map"){return false
}H=B("img[usemap=#"+J+"]")[0];
return !!H&&C(H)
}return(/input|select|textarea|button|object/.test(L)?!I.disabled:"a"===L?I.href||G:G)&&C(I)
}function C(G){return B.expr.filters.visible(G)&&!B(G).parents().addBack().filter(function(){return B.css(this,"visibility")==="hidden"
}).length
}B.extend(B.expr[":"],{data:B.expr.createPseudo?B.expr.createPseudo(function(G){return function(H){return !!B.data(H,G)
}
}):function(I,H,G){return !!B.data(I,G[3])
},focusable:function(G){return D(G,!isNaN(B.attr(G,"tabindex")))
},tabbable:function(I){var G=B.attr(I,"tabindex"),H=isNaN(G);
return(H||G>=0)&&D(I,!H)
}});
if(!B("<a>").outerWidth(1).jquery){B.each(["Width","Height"],function(I,G){var H=G==="Width"?["Left","Right"]:["Top","Bottom"],J=G.toLowerCase(),L={innerWidth:B.fn.innerWidth,innerHeight:B.fn.innerHeight,outerWidth:B.fn.outerWidth,outerHeight:B.fn.outerHeight};
function K(O,N,M,P){B.each(H,function(){N-=parseFloat(B.css(O,"padding"+this))||0;
if(M){N-=parseFloat(B.css(O,"border"+this+"Width"))||0
}if(P){N-=parseFloat(B.css(O,"margin"+this))||0
}});
return N
}B.fn["inner"+G]=function(M){if(M===F){return L["inner"+G].call(this)
}return this.each(function(){B(this).css(J,K(this,M)+"px")
})
};
B.fn["outer"+G]=function(M,N){if(typeof M!=="number"){return L["outer"+G].call(this,M)
}return this.each(function(){B(this).css(J,K(this,M,true,N)+"px")
})
}
})
}if(!B.fn.addBack){B.fn.addBack=function(G){return this.add(G==null?this.prevObject:this.prevObject.filter(G))
}
}if(B("<a>").data("a-b","a").removeData("a-b").data("a-b")){B.fn.removeData=(function(G){return function(H){if(arguments.length){return G.call(this,B.camelCase(H))
}else{return G.call(this)
}}
})(B.fn.removeData)
}B.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
B.support.selectstart="onselectstart" in document.createElement("div");
B.fn.extend({disableSelection:function(){return this.bind((B.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(G){G.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
B.extend(B.ui,{plugin:{add:function(H,I,K){var G,J=B.ui[H].prototype;
for(G in K){J.plugins[G]=J.plugins[G]||[];
J.plugins[G].push([I,K[G]])
}},call:function(G,I,H){var J,K=G.plugins[I];
if(!K||!G.element[0].parentNode||G.element[0].parentNode.nodeType===11){return 
}for(J=0;
J<K.length;
J++){if(G.options[K[J][0]]){K[J][1].apply(G.element,H)
}}}},hasScroll:function(J,H){if(B(J).css("overflow")==="hidden"){return false
}var G=(H&&H==="left")?"scrollLeft":"scrollTop",I=false;
if(J[G]>0){return true
}J[G]=1;
I=(J[G]>0);
J[G]=0;
return I
}})
})(jQuery);
(function(B,E){var A=0,D=Array.prototype.slice,C=B.cleanData;
B.cleanData=function(F){for(var G=0,H;
(H=F[G])!=null;
G++){try{B(H).triggerHandler("remove")
}catch(I){}}C(F)
};
B.widget=function(F,G,N){var K,L,I,M,H={},J=F.split(".")[0];
F=F.split(".")[1];
K=J+"-"+F;
if(!N){N=G;
G=B.Widget
}B.expr[":"][K.toLowerCase()]=function(O){return !!B.data(O,K)
};
B[J]=B[J]||{};
L=B[J][F];
I=B[J][F]=function(O,P){if(!this._createWidget){return new I(O,P)
}if(arguments.length){this._createWidget(O,P)
}};
B.extend(I,L,{version:N.version,_proto:B.extend({},N),_childConstructors:[]});
M=new G();
M.options=B.widget.extend({},M.options);
B.each(N,function(P,O){if(!B.isFunction(O)){H[P]=O;
return 
}H[P]=(function(){var Q=function(){return G.prototype[P].apply(this,arguments)
},R=function(S){return G.prototype[P].apply(this,S)
};
return function(){var U=this._super,S=this._superApply,T;
this._super=Q;
this._superApply=R;
T=O.apply(this,arguments);
this._super=U;
this._superApply=S;
return T
}
})()
});
I.prototype=B.widget.extend(M,{widgetEventPrefix:L?(M.widgetEventPrefix||F):F},H,{constructor:I,namespace:J,widgetName:F,widgetFullName:K});
if(L){B.each(L._childConstructors,function(P,Q){var O=Q.prototype;
B.widget(O.namespace+"."+O.widgetName,I,Q._proto)
});
delete L._childConstructors
}else{G._childConstructors.push(I)
}B.widget.bridge(F,I)
};
B.widget.extend=function(K){var G=D.call(arguments,1),J=0,F=G.length,H,I;
for(;
J<F;
J++){for(H in G[J]){I=G[J][H];
if(G[J].hasOwnProperty(H)&&I!==E){if(B.isPlainObject(I)){K[H]=B.isPlainObject(K[H])?B.widget.extend({},K[H],I):B.widget.extend({},I)
}else{K[H]=I
}}}}return K
};
B.widget.bridge=function(G,F){var H=F.prototype.widgetFullName||G;
B.fn[G]=function(K){var I=typeof K==="string",J=D.call(arguments,1),L=this;
K=!I&&J.length?B.widget.extend.apply(null,[K].concat(J)):K;
if(I){this.each(function(){var N,M=B.data(this,H);
if(!M){return B.error("cannot call methods on "+G+" prior to initialization; attempted to call method '"+K+"'")
}if(!B.isFunction(M[K])||K.charAt(0)==="_"){return B.error("no such method '"+K+"' for "+G+" widget instance")
}N=M[K].apply(M,J);
if(N!==M&&N!==E){L=N&&N.jquery?L.pushStack(N.get()):N;
return false
}})
}else{this.each(function(){var M=B.data(this,H);
if(M){M.option(K||{})._init()
}else{B.data(this,H,new F(K,this))
}})
}return L
}
};
B.Widget=function(){};
B.Widget._childConstructors=[];
B.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(F,G){G=B(G||this.defaultElement||this)[0];
this.element=B(G);
this.uuid=A++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=B.widget.extend({},this.options,this._getCreateOptions(),F);
this.bindings=B();
this.hoverable=B();
this.focusable=B();
if(G!==this){B.data(G,this.widgetFullName,this);
this._on(true,this.element,{remove:function(H){if(H.target===G){this.destroy()
}}});
this.document=B(G.style?G.ownerDocument:G.document||G);
this.window=B(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:B.noop,_getCreateEventData:B.noop,_create:B.noop,_init:B.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(B.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:B.noop,widget:function(){return this.element
},option:function(I,J){var F=I,K,H,G;
if(arguments.length===0){return B.widget.extend({},this.options)
}if(typeof I==="string"){F={};
K=I.split(".");
I=K.shift();
if(K.length){H=F[I]=B.widget.extend({},this.options[I]);
for(G=0;
G<K.length-1;
G++){H[K[G]]=H[K[G]]||{};
H=H[K[G]]
}I=K.pop();
if(arguments.length===1){return H[I]===E?null:H[I]
}H[I]=J
}else{if(arguments.length===1){return this.options[I]===E?null:this.options[I]
}F[I]=J
}}this._setOptions(F);
return this
},_setOptions:function(F){var G;
for(G in F){this._setOption(G,F[G])
}return this
},_setOption:function(F,G){this.options[F]=G;
if(F==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!G).attr("aria-disabled",G);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(I,H,G){var J,F=this;
if(typeof I!=="boolean"){G=H;
H=I;
I=false
}if(!G){G=H;
H=this.element;
J=this.widget()
}else{H=J=B(H);
this.bindings=this.bindings.add(H)
}B.each(G,function(P,O){function M(){if(!I&&(F.options.disabled===true||B(this).hasClass("ui-state-disabled"))){return 
}return(typeof O==="string"?F[O]:O).apply(F,arguments)
}if(typeof O!=="string"){M.guid=O.guid=O.guid||M.guid||B.guid++
}var N=P.match(/^(\w+)\s*(.*)$/),L=N[1]+F.eventNamespace,K=N[2];
if(K){J.delegate(K,L,M)
}else{H.bind(L,M)
}})
},_off:function(G,F){F=(F||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
G.unbind(F).undelegate(F)
},_delay:function(I,H){function G(){return(typeof I==="string"?F[I]:I).apply(F,arguments)
}var F=this;
return setTimeout(G,H||0)
},_hoverable:function(F){this.hoverable=this.hoverable.add(F);
this._on(F,{mouseenter:function(G){B(G.currentTarget).addClass("ui-state-hover")
},mouseleave:function(G){B(G.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(F){this.focusable=this.focusable.add(F);
this._on(F,{focusin:function(G){B(G.currentTarget).addClass("ui-state-focus")
},focusout:function(G){B(G.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(F,G,H){var K,J,I=this.options[F];
H=H||{};
G=B.Event(G);
G.type=(F===this.widgetEventPrefix?F:this.widgetEventPrefix+F).toLowerCase();
G.target=this.element[0];
J=G.originalEvent;
if(J){for(K in J){if(!(K in G)){G[K]=J[K]
}}}this.element.trigger(G,H);
return !(B.isFunction(I)&&I.apply(this.element[0],[G].concat(H))===false||G.isDefaultPrevented())
}};
B.each({show:"fadeIn",hide:"fadeOut"},function(G,F){B.Widget.prototype["_"+G]=function(J,I,L){if(typeof I==="string"){I={effect:I}
}var K,H=!I?G:I===true||typeof I==="number"?F:I.effect||F;
I=I||{};
if(typeof I==="number"){I={duration:I}
}K=!B.isEmptyObject(I);
I.complete=L;
if(I.delay){J.delay(I.delay)
}if(K&&B.effects&&B.effects.effect[H]){J[G](I)
}else{if(H!==G&&J[H]){J[H](I.duration,I.easing,L)
}else{J.queue(function(M){B(this)[G]();
if(L){L.call(J[0])
}M()
})
}}}
})
})(jQuery);
(function(B,C){var A=false;
B(document).mouseup(function(){A=false
});
B.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var D=this;
this.element.bind("mousedown."+this.widgetName,function(E){return D._mouseDown(E)
}).bind("click."+this.widgetName,function(E){if(true===B.data(E.target,D.widgetName+".preventClickEvent")){B.removeData(E.target,D.widgetName+".preventClickEvent");
E.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(F){if(A){return 
}(this._mouseStarted&&this._mouseUp(F));
this._mouseDownEvent=F;
var E=this,G=(F.which===1),D=(typeof this.options.cancel==="string"&&F.target.nodeName?B(F.target).closest(this.options.cancel).length:false);
if(!G||D||!this._mouseCapture(F)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){E.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(F)&&this._mouseDelayMet(F)){this._mouseStarted=(this._mouseStart(F)!==false);
if(!this._mouseStarted){F.preventDefault();
return true
}}if(true===B.data(F.target,this.widgetName+".preventClickEvent")){B.removeData(F.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(H){return E._mouseMove(H)
};
this._mouseUpDelegate=function(H){return E._mouseUp(H)
};
B(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
F.preventDefault();
A=true;
return true
},_mouseMove:function(D){if(B.ui.ie&&(!document.documentMode||document.documentMode<9)&&!D.button){return this._mouseUp(D)
}if(this._mouseStarted){this._mouseDrag(D);
return D.preventDefault()
}if(this._mouseDistanceMet(D)&&this._mouseDelayMet(D)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,D)!==false);
(this._mouseStarted?this._mouseDrag(D):this._mouseUp(D))
}return !this._mouseStarted
},_mouseUp:function(D){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(D.target===this._mouseDownEvent.target){B.data(D.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(D)
}return false
},_mouseDistanceMet:function(D){return(Math.max(Math.abs(this._mouseDownEvent.pageX-D.pageX),Math.abs(this._mouseDownEvent.pageY-D.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(E,C){E.ui=E.ui||{};
var J,K=Math.max,O=Math.abs,M=Math.round,D=/left|center|right/,H=/top|center|bottom/,A=/[\+\-]\d+(\.[\d]+)?%?/,L=/^\w+/,B=/%$/,G=E.fn.position;
function N(R,Q,P){return[parseFloat(R[0])*(B.test(R[0])?Q/100:1),parseFloat(R[1])*(B.test(R[1])?P/100:1)]
}function I(P,Q){return parseInt(E.css(P,Q),10)||0
}function F(Q){var P=Q[0];
if(P.nodeType===9){return{width:Q.width(),height:Q.height(),offset:{top:0,left:0}}
}if(E.isWindow(P)){return{width:Q.width(),height:Q.height(),offset:{top:Q.scrollTop(),left:Q.scrollLeft()}}
}if(P.preventDefault){return{width:0,height:0,offset:{top:P.pageY,left:P.pageX}}
}return{width:Q.outerWidth(),height:Q.outerHeight(),offset:Q.offset()}
}E.position={scrollbarWidth:function(){if(J!==C){return J
}var Q,P,S=E("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),R=S.children()[0];
E("body").append(S);
Q=R.offsetWidth;
S.css("overflow","scroll");
P=R.offsetWidth;
if(Q===P){P=S[0].clientWidth
}S.remove();
return(J=Q-P)
},getScrollInfo:function(T){var S=T.isWindow||T.isDocument?"":T.element.css("overflow-x"),R=T.isWindow||T.isDocument?"":T.element.css("overflow-y"),Q=S==="scroll"||(S==="auto"&&T.width<T.element[0].scrollWidth),P=R==="scroll"||(R==="auto"&&T.height<T.element[0].scrollHeight);
return{width:P?E.position.scrollbarWidth():0,height:Q?E.position.scrollbarWidth():0}
},getWithinInfo:function(Q){var R=E(Q||window),P=E.isWindow(R[0]),S=!!R[0]&&R[0].nodeType===9;
return{element:R,isWindow:P,isDocument:S,offset:R.offset()||{left:0,top:0},scrollLeft:R.scrollLeft(),scrollTop:R.scrollTop(),width:P?R.width():R.outerWidth(),height:P?R.height():R.outerHeight()}
}};
E.fn.position=function(Z){if(!Z||!Z.of){return G.apply(this,arguments)
}Z=E.extend({},Z);
var a,W,U,Y,T,P,V=E(Z.of),S=E.position.getWithinInfo(Z.within),Q=E.position.getScrollInfo(S),X=(Z.collision||"flip").split(" "),R={};
P=F(V);
if(V[0].preventDefault){Z.at="left top"
}W=P.width;
U=P.height;
Y=P.offset;
T=E.extend({},Y);
E.each(["my","at"],function(){var d=(Z[this]||"").split(" "),c,b;
if(d.length===1){d=D.test(d[0])?d.concat(["center"]):H.test(d[0])?["center"].concat(d):["center","center"]
}d[0]=D.test(d[0])?d[0]:"center";
d[1]=H.test(d[1])?d[1]:"center";
c=A.exec(d[0]);
b=A.exec(d[1]);
R[this]=[c?c[0]:0,b?b[0]:0];
Z[this]=[L.exec(d[0])[0],L.exec(d[1])[0]]
});
if(X.length===1){X[1]=X[0]
}if(Z.at[0]==="right"){T.left+=W
}else{if(Z.at[0]==="center"){T.left+=W/2
}}if(Z.at[1]==="bottom"){T.top+=U
}else{if(Z.at[1]==="center"){T.top+=U/2
}}a=N(R.at,W,U);
T.left+=a[0];
T.top+=a[1];
return this.each(function(){var c,l,e=E(this),g=e.outerWidth(),d=e.outerHeight(),f=I(this,"marginLeft"),b=I(this,"marginTop"),k=g+f+I(this,"marginRight")+Q.width,j=d+b+I(this,"marginBottom")+Q.height,h=E.extend({},T),i=N(R.my,e.outerWidth(),e.outerHeight());
if(Z.my[0]==="right"){h.left-=g
}else{if(Z.my[0]==="center"){h.left-=g/2
}}if(Z.my[1]==="bottom"){h.top-=d
}else{if(Z.my[1]==="center"){h.top-=d/2
}}h.left+=i[0];
h.top+=i[1];
if(!E.support.offsetFractions){h.left=M(h.left);
h.top=M(h.top)
}c={marginLeft:f,marginTop:b};
E.each(["left","top"],function(n,m){if(E.ui.position[X[n]]){E.ui.position[X[n]][m](h,{targetWidth:W,targetHeight:U,elemWidth:g,elemHeight:d,collisionPosition:c,collisionWidth:k,collisionHeight:j,offset:[a[0]+i[0],a[1]+i[1]],my:Z.my,at:Z.at,within:S,elem:e})
}});
if(Z.using){l=function(p){var r=Y.left-h.left,o=r+W-g,q=Y.top-h.top,n=q+U-d,m={target:{element:V,left:Y.left,top:Y.top,width:W,height:U},element:{element:e,left:h.left,top:h.top,width:g,height:d},horizontal:o<0?"left":r>0?"right":"center",vertical:n<0?"top":q>0?"bottom":"middle"};
if(W<g&&O(r+o)<W){m.horizontal="center"
}if(U<d&&O(q+n)<U){m.vertical="middle"
}if(K(O(r),O(o))>K(O(q),O(n))){m.important="horizontal"
}else{m.important="vertical"
}Z.using.call(this,p,m)
}
}e.offset(E.extend(h,{using:l}))
})
};
E.ui.position={fit:{left:function(T,S){var R=S.within,V=R.isWindow?R.scrollLeft:R.offset.left,X=R.width,U=T.left-S.collisionPosition.marginLeft,W=V-U,Q=U+S.collisionWidth-X-V,P;
if(S.collisionWidth>X){if(W>0&&Q<=0){P=T.left+W+S.collisionWidth-X-V;
T.left+=W-P
}else{if(Q>0&&W<=0){T.left=V
}else{if(W>Q){T.left=V+X-S.collisionWidth
}else{T.left=V
}}}}else{if(W>0){T.left+=W
}else{if(Q>0){T.left-=Q
}else{T.left=K(T.left-U,T.left)
}}}},top:function(S,R){var Q=R.within,W=Q.isWindow?Q.scrollTop:Q.offset.top,X=R.within.height,U=S.top-R.collisionPosition.marginTop,V=W-U,T=U+R.collisionHeight-X-W,P;
if(R.collisionHeight>X){if(V>0&&T<=0){P=S.top+V+R.collisionHeight-X-W;
S.top+=V-P
}else{if(T>0&&V<=0){S.top=W
}else{if(V>T){S.top=W+X-R.collisionHeight
}else{S.top=W
}}}}else{if(V>0){S.top+=V
}else{if(T>0){S.top-=T
}else{S.top=K(S.top-U,S.top)
}}}}},flip:{left:function(V,U){var T=U.within,Z=T.offset.left+T.scrollLeft,c=T.width,R=T.isWindow?T.scrollLeft:T.offset.left,W=V.left-U.collisionPosition.marginLeft,a=W-R,Q=W+U.collisionWidth-c-R,Y=U.my[0]==="left"?-U.elemWidth:U.my[0]==="right"?U.elemWidth:0,b=U.at[0]==="left"?U.targetWidth:U.at[0]==="right"?-U.targetWidth:0,S=-2*U.offset[0],P,X;
if(a<0){P=V.left+Y+b+S+U.collisionWidth-c-Z;
if(P<0||P<O(a)){V.left+=Y+b+S
}}else{if(Q>0){X=V.left-U.collisionPosition.marginLeft+Y+b+S-R;
if(X>0||O(X)<Q){V.left+=Y+b+S
}}}},top:function(U,T){var S=T.within,b=S.offset.top+S.scrollTop,c=S.height,P=S.isWindow?S.scrollTop:S.offset.top,W=U.top-T.collisionPosition.marginTop,Y=W-P,V=W+T.collisionHeight-c-P,Z=T.my[1]==="top",X=Z?-T.elemHeight:T.my[1]==="bottom"?T.elemHeight:0,d=T.at[1]==="top"?T.targetHeight:T.at[1]==="bottom"?-T.targetHeight:0,R=-2*T.offset[1],a,Q;
if(Y<0){Q=U.top+X+d+R+T.collisionHeight-c-b;
if((U.top+X+d+R)>Y&&(Q<0||Q<O(Y))){U.top+=X+d+R
}}else{if(V>0){a=U.top-T.collisionPosition.marginTop+X+d+R-P;
if((U.top+X+d+R)>V&&(a>0||O(a)<V)){U.top+=X+d+R
}}}}},flipfit:{left:function(){E.ui.position.flip.left.apply(this,arguments);
E.ui.position.fit.left.apply(this,arguments)
},top:function(){E.ui.position.flip.top.apply(this,arguments);
E.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var T,V,Q,S,R,P=document.getElementsByTagName("body")[0],U=document.createElement("div");
T=document.createElement(P?"div":"body");
Q={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(P){E.extend(Q,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(R in Q){T.style[R]=Q[R]
}T.appendChild(U);
V=P||document.documentElement;
V.insertBefore(T,V.firstChild);
U.style.cssText="position: absolute; left: 10.7432222px;";
S=E(U).offset().left;
E.support.offsetFractions=S>10&&S<11;
T.innerHTML="";
V.removeChild(T)
})()
}(jQuery));
(function(A,B){A.widget("ui.draggable",A.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(C){var D=this.options;
if(this.helper||D.disabled||A(C.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(C);
if(!this.handle){return false
}A(D.iframeFix===true?"iframe":D.iframeFix).each(function(){A("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(C){var D=this.options;
this.helper=this._createHelper(C);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(A.ui.ddmanager){A.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
A.extend(this.offset,{click:{left:C.pageX-this.offset.left,top:C.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(C);
this.originalPageX=C.pageX;
this.originalPageY=C.pageY;
(D.cursorAt&&this._adjustOffsetFromHelper(D.cursorAt));
this._setContainment();
if(this._trigger("start",C)===false){this._clear();
return false
}this._cacheHelperProportions();
if(A.ui.ddmanager&&!D.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,C)
}this._mouseDrag(C,true);
if(A.ui.ddmanager){A.ui.ddmanager.dragStart(this,C)
}return true
},_mouseDrag:function(C,E){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(C);
this.positionAbs=this._convertPositionTo("absolute");
if(!E){var D=this._uiHash();
if(this._trigger("drag",C,D)===false){this._mouseUp({});
return false
}this.position=D.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,C)
}return false
},_mouseStop:function(D){var C=this,E=false;
if(A.ui.ddmanager&&!this.options.dropBehaviour){E=A.ui.ddmanager.drop(this,D)
}if(this.dropped){E=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!A.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!E)||(this.options.revert==="valid"&&E)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,E))){A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(C._trigger("stop",D)!==false){C._clear()
}})
}else{if(this._trigger("stop",D)!==false){this._clear()
}}return false
},_mouseUp:function(C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(A.ui.ddmanager){A.ui.ddmanager.dragStop(this,C)
}return A.ui.mouse.prototype._mouseUp.call(this,C)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(C){return this.options.handle?!!A(C.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(D){var E=this.options,C=A.isFunction(E.helper)?A(E.helper.apply(this.element[0],[D])):(E.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!C.parents("body").length){C.appendTo((E.appendTo==="parent"?this.element[0].parentNode:E.appendTo))
}if(C[0]!==this.element[0]&&!(/(fixed|absolute)/).test(C.css("position"))){C.css("position","absolute")
}return C
},_adjustOffsetFromHelper:function(C){if(typeof C==="string"){C=C.split(" ")
}if(A.isArray(C)){C={left:+C[0],top:+C[1]||0}
}if("left" in C){this.offset.click.left=C.left+this.margins.left
}if("right" in C){this.offset.click.left=this.helperProportions.width-C.right+this.margins.left
}if("top" in C){this.offset.click.top=C.top+this.margins.top
}if("bottom" in C){this.offset.click.top=this.helperProportions.height-C.bottom+this.margins.top
}},_getParentOffset:function(){var C=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&A.contains(this.scrollParent[0],this.offsetParent[0])){C.left+=this.scrollParent.scrollLeft();
C.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&A.ui.ie)){C={top:0,left:0}
}return{top:C.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:C.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var C=this.element.position();
return{top:C.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:C.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var D,F,C,E=this.options;
if(!E.containment){this.containment=null;
return 
}if(E.containment==="window"){this.containment=[A(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,A(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,A(window).scrollLeft()+A(window).width()-this.helperProportions.width-this.margins.left,A(window).scrollTop()+(A(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return 
}if(E.containment==="document"){this.containment=[0,0,A(document).width()-this.helperProportions.width-this.margins.left,(A(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return 
}if(E.containment.constructor===Array){this.containment=E.containment;
return 
}if(E.containment==="parent"){E.containment=this.helper[0].parentNode
}F=A(E.containment);
C=F[0];
if(!C){return 
}D=F.css("overflow")!=="hidden";
this.containment=[(parseInt(F.css("borderLeftWidth"),10)||0)+(parseInt(F.css("paddingLeft"),10)||0),(parseInt(F.css("borderTopWidth"),10)||0)+(parseInt(F.css("paddingTop"),10)||0),(D?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(F.css("borderRightWidth"),10)||0)-(parseInt(F.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(D?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(F.css("borderBottomWidth"),10)||0)-(parseInt(F.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=F
},_convertPositionTo:function(E,F){if(!F){F=this.position
}var D=E==="absolute"?1:-1,C=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&A.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:C.scrollTop(),left:C.scrollLeft()}
}return{top:(F.top+this.offset.relative.top*D+this.offset.parent.top*D-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*D)),left:(F.left+this.offset.relative.left*D+this.offset.parent.left*D-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*D))}
},_generatePosition:function(D){var C,I,J,F,E=this.options,K=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&A.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,H=D.pageX,G=D.pageY;
if(!this.offset.scroll){this.offset.scroll={top:K.scrollTop(),left:K.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){I=this.relative_container.offset();
C=[this.containment[0]+I.left,this.containment[1]+I.top,this.containment[2]+I.left,this.containment[3]+I.top]
}else{C=this.containment
}if(D.pageX-this.offset.click.left<C[0]){H=C[0]+this.offset.click.left
}if(D.pageY-this.offset.click.top<C[1]){G=C[1]+this.offset.click.top
}if(D.pageX-this.offset.click.left>C[2]){H=C[2]+this.offset.click.left
}if(D.pageY-this.offset.click.top>C[3]){G=C[3]+this.offset.click.top
}}if(E.grid){J=E.grid[1]?this.originalPageY+Math.round((G-this.originalPageY)/E.grid[1])*E.grid[1]:this.originalPageY;
G=C?((J-this.offset.click.top>=C[1]||J-this.offset.click.top>C[3])?J:((J-this.offset.click.top>=C[1])?J-E.grid[1]:J+E.grid[1])):J;
F=E.grid[0]?this.originalPageX+Math.round((H-this.originalPageX)/E.grid[0])*E.grid[0]:this.originalPageX;
H=C?((F-this.offset.click.left>=C[0]||F-this.offset.click.left>C[2])?F:((F-this.offset.click.left>=C[0])?F-E.grid[0]:F+E.grid[0])):F
}}return{top:(G-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(H-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(C,D,E){E=E||this._uiHash();
A.ui.plugin.call(this,C,[D,E]);
if(C==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return A.Widget.prototype._trigger.call(this,C,D,E)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
A.ui.plugin.add("draggable","connectToSortable",{start:function(D,F){var E=A(this).data("ui-draggable"),G=E.options,C=A.extend({},F,{item:E.element});
E.sortables=[];
A(G.connectToSortable).each(function(){var H=A.data(this,"ui-sortable");
if(H&&!H.options.disabled){E.sortables.push({instance:H,shouldRevert:H.options.revert});
H.refreshPositions();
H._trigger("activate",D,C)
}})
},stop:function(D,F){var E=A(this).data("ui-draggable"),C=A.extend({},F,{item:E.element});
A.each(E.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
E.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(D);
this.instance.options.helper=this.instance.options._helper;
if(E.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",D,C)
}})
},drag:function(D,F){var E=A(this).data("ui-draggable"),C=this;
A.each(E.sortables,function(){var G=false,H=this;
this.instance.positionAbs=E.positionAbs;
this.instance.helperProportions=E.helperProportions;
this.instance.offset.click=E.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){G=true;
A.each(E.sortables,function(){this.instance.positionAbs=E.positionAbs;
this.instance.helperProportions=E.helperProportions;
this.instance.offset.click=E.offset.click;
if(this!==H&&this.instance._intersectsWith(this.instance.containerCache)&&A.contains(H.instance.element[0],this.instance.element[0])){G=false
}return G
})
}if(G){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=A(C).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return F.helper[0]
};
D.target=this.instance.currentItem[0];
this.instance._mouseCapture(D,true);
this.instance._mouseStart(D,true,true);
this.instance.offset.click.top=E.offset.click.top;
this.instance.offset.click.left=E.offset.click.left;
this.instance.offset.parent.left-=E.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=E.offset.parent.top-this.instance.offset.parent.top;
E._trigger("toSortable",D);
E.dropped=this.instance.element;
E.currentItem=E.element;
this.instance.fromOutside=E
}if(this.instance.currentItem){this.instance._mouseDrag(D)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",D,this.instance._uiHash(this.instance));
this.instance._mouseStop(D,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}E._trigger("fromSortable",D);
E.dropped=false
}}})
}});
A.ui.plugin.add("draggable","cursor",{start:function(){var C=A("body"),D=A(this).data("ui-draggable").options;
if(C.css("cursor")){D._cursor=C.css("cursor")
}C.css("cursor",D.cursor)
},stop:function(){var C=A(this).data("ui-draggable").options;
if(C._cursor){A("body").css("cursor",C._cursor)
}}});
A.ui.plugin.add("draggable","opacity",{start:function(D,E){var C=A(E.helper),F=A(this).data("ui-draggable").options;
if(C.css("opacity")){F._opacity=C.css("opacity")
}C.css("opacity",F.opacity)
},stop:function(C,D){var E=A(this).data("ui-draggable").options;
if(E._opacity){A(D.helper).css("opacity",E._opacity)
}}});
A.ui.plugin.add("draggable","scroll",{start:function(){var C=A(this).data("ui-draggable");
if(C.scrollParent[0]!==document&&C.scrollParent[0].tagName!=="HTML"){C.overflowOffset=C.scrollParent.offset()
}},drag:function(E){var D=A(this).data("ui-draggable"),F=D.options,C=false;
if(D.scrollParent[0]!==document&&D.scrollParent[0].tagName!=="HTML"){if(!F.axis||F.axis!=="x"){if((D.overflowOffset.top+D.scrollParent[0].offsetHeight)-E.pageY<F.scrollSensitivity){D.scrollParent[0].scrollTop=C=D.scrollParent[0].scrollTop+F.scrollSpeed
}else{if(E.pageY-D.overflowOffset.top<F.scrollSensitivity){D.scrollParent[0].scrollTop=C=D.scrollParent[0].scrollTop-F.scrollSpeed
}}}if(!F.axis||F.axis!=="y"){if((D.overflowOffset.left+D.scrollParent[0].offsetWidth)-E.pageX<F.scrollSensitivity){D.scrollParent[0].scrollLeft=C=D.scrollParent[0].scrollLeft+F.scrollSpeed
}else{if(E.pageX-D.overflowOffset.left<F.scrollSensitivity){D.scrollParent[0].scrollLeft=C=D.scrollParent[0].scrollLeft-F.scrollSpeed
}}}}else{if(!F.axis||F.axis!=="x"){if(E.pageY-A(document).scrollTop()<F.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)
}else{if(A(window).height()-(E.pageY-A(document).scrollTop())<F.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)
}}}if(!F.axis||F.axis!=="y"){if(E.pageX-A(document).scrollLeft()<F.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)
}else{if(A(window).width()-(E.pageX-A(document).scrollLeft())<F.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)
}}}}if(C!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(D,E)
}}});
A.ui.plugin.add("draggable","snap",{start:function(){var C=A(this).data("ui-draggable"),D=C.options;
C.snapElements=[];
A(D.snap.constructor!==String?(D.snap.items||":data(ui-draggable)"):D.snap).each(function(){var F=A(this),E=F.offset();
if(this!==C.element[0]){C.snapElements.push({item:this,width:F.outerWidth(),height:F.outerHeight(),top:E.top,left:E.left})
}})
},drag:function(O,L){var C,T,H,I,N,K,J,U,P,G,F=A(this).data("ui-draggable"),M=F.options,S=M.snapTolerance,R=L.offset.left,Q=R+F.helperProportions.width,E=L.offset.top,D=E+F.helperProportions.height;
for(P=F.snapElements.length-1;
P>=0;
P--){N=F.snapElements[P].left;
K=N+F.snapElements[P].width;
J=F.snapElements[P].top;
U=J+F.snapElements[P].height;
if(Q<N-S||R>K+S||D<J-S||E>U+S||!A.contains(F.snapElements[P].item.ownerDocument,F.snapElements[P].item)){if(F.snapElements[P].snapping){(F.options.snap.release&&F.options.snap.release.call(F.element,O,A.extend(F._uiHash(),{snapItem:F.snapElements[P].item})))
}F.snapElements[P].snapping=false;
continue
}if(M.snapMode!=="inner"){C=Math.abs(J-D)<=S;
T=Math.abs(U-E)<=S;
H=Math.abs(N-Q)<=S;
I=Math.abs(K-R)<=S;
if(C){L.position.top=F._convertPositionTo("relative",{top:J-F.helperProportions.height,left:0}).top-F.margins.top
}if(T){L.position.top=F._convertPositionTo("relative",{top:U,left:0}).top-F.margins.top
}if(H){L.position.left=F._convertPositionTo("relative",{top:0,left:N-F.helperProportions.width}).left-F.margins.left
}if(I){L.position.left=F._convertPositionTo("relative",{top:0,left:K}).left-F.margins.left
}}G=(C||T||H||I);
if(M.snapMode!=="outer"){C=Math.abs(J-E)<=S;
T=Math.abs(U-D)<=S;
H=Math.abs(N-R)<=S;
I=Math.abs(K-Q)<=S;
if(C){L.position.top=F._convertPositionTo("relative",{top:J,left:0}).top-F.margins.top
}if(T){L.position.top=F._convertPositionTo("relative",{top:U-F.helperProportions.height,left:0}).top-F.margins.top
}if(H){L.position.left=F._convertPositionTo("relative",{top:0,left:N}).left-F.margins.left
}if(I){L.position.left=F._convertPositionTo("relative",{top:0,left:K-F.helperProportions.width}).left-F.margins.left
}}if(!F.snapElements[P].snapping&&(C||T||H||I||G)){(F.options.snap.snap&&F.options.snap.snap.call(F.element,O,A.extend(F._uiHash(),{snapItem:F.snapElements[P].item})))
}F.snapElements[P].snapping=(C||T||H||I||G)
}}});
A.ui.plugin.add("draggable","stack",{start:function(){var C,E=this.data("ui-draggable").options,D=A.makeArray(A(E.stack)).sort(function(G,F){return(parseInt(A(G).css("zIndex"),10)||0)-(parseInt(A(F).css("zIndex"),10)||0)
});
if(!D.length){return 
}C=parseInt(A(D[0]).css("zIndex"),10)||0;
A(D).each(function(F){A(this).css("zIndex",C+F)
});
this.css("zIndex",(C+D.length))
}});
A.ui.plugin.add("draggable","zIndex",{start:function(D,E){var C=A(E.helper),F=A(this).data("ui-draggable").options;
if(C.css("zIndex")){F._zIndex=C.css("zIndex")
}C.css("zIndex",F.zIndex)
},stop:function(C,D){var E=A(this).data("ui-draggable").options;
if(E._zIndex){A(D.helper).css("zIndex",E._zIndex)
}}})
})(jQuery);
(function(E,G){var C,B="ui-button ui-widget ui-state-default ui-corner-all",F="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",D=function(){var H=E(this);
setTimeout(function(){H.find(":ui-button").button("refresh")
},1)
},A=function(I){var H=I.name,J=I.form,K=E([]);
if(H){H=H.replace(/'/g,"\\'");
if(J){K=E(J).find("[name='"+H+"']")
}else{K=E("[name='"+H+"']",I.ownerDocument).filter(function(){return !this.form
})
}}return K
};
E.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,D);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var J=this,H=this.options,K=this.type==="checkbox"||this.type==="radio",I=!K?"ui-state-active":"";
if(H.label===null){H.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(B).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(H.disabled){return 
}if(this===C){E(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(H.disabled){return 
}E(this).removeClass(I)
}).bind("click"+this.eventNamespace,function(L){if(H.disabled){L.preventDefault();
L.stopImmediatePropagation()
}});
this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")
},blur:function(){this.buttonElement.removeClass("ui-state-focus")
}});
if(K){this.element.bind("change"+this.eventNamespace,function(){J.refresh()
})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(H.disabled){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(H.disabled){return false
}E(this).addClass("ui-state-active");
J.buttonElement.attr("aria-pressed","true");
var L=J.element[0];
A(L).not(L).map(function(){return E(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(H.disabled){return false
}E(this).addClass("ui-state-active");
C=this;
J.document.one("mouseup",function(){C=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(H.disabled){return false
}E(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(L){if(H.disabled){return false
}if(L.keyCode===E.ui.keyCode.SPACE||L.keyCode===E.ui.keyCode.ENTER){E(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){E(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(L){if(L.keyCode===E.ui.keyCode.SPACE){E(this).click()
}})
}}}this._setOption("disabled",H.disabled);
this._resetButton()
},_determineButtonType:function(){var H,J,I;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){H=this.element.parents().last();
J="label[for='"+this.element.attr("id")+"']";
this.buttonElement=H.find(J);
if(!this.buttonElement.length){H=H.length?H.siblings():this.element.siblings();
this.buttonElement=H.filter(J);
if(!this.buttonElement.length){this.buttonElement=H.find(J)
}}this.element.addClass("ui-helper-hidden-accessible");
I=this.element.is(":checked");
if(I){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",I)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(B+" ui-state-active "+F).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(H,I){this._super(H,I);
if(H==="disabled"){this.element.prop("disabled",!!I);
if(I){this.buttonElement.removeClass("ui-state-focus")
}return 
}this._resetButton()
},refresh:function(){var H=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(H!==this.options.disabled){this._setOption("disabled",H)
}if(this.type==="radio"){A(this.element[0]).each(function(){if(E(this).is(":checked")){E(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{E(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return 
}var L=this.buttonElement.removeClass(F),J=E("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(L.empty()).text(),I=this.options.icons,H=I.primary&&I.secondary,K=[];
if(I.primary||I.secondary){if(this.options.text){K.push("ui-button-text-icon"+(H?"s":(I.primary?"-primary":"-secondary")))
}if(I.primary){L.prepend("<span class='ui-button-icon-primary ui-icon "+I.primary+"'></span>")
}if(I.secondary){L.append("<span class='ui-button-icon-secondary ui-icon "+I.secondary+"'></span>")
}if(!this.options.text){K.push(H?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){L.attr("title",E.trim(J))
}}}else{K.push("ui-button-text-only")
}L.addClass(K.join(" "))
}});
E.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(H,I){if(H==="disabled"){this.buttons.button("option",H,I)
}this._super(H,I)
},refresh:function(){var H=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return E(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(H?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(H?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return E(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(E,G){E.extend(E.ui,{datepicker:{version:"1.10.4"}});
var F="datepicker",C;
function B(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
E.extend(this._defaults,this.regional[""]);
this.dpDiv=D(E("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}E.extend(B.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(H){A(this._defaults,H||{});
return this
},_attachDatepicker:function(K,H){var L,J,I;
L=K.nodeName.toLowerCase();
J=(L==="div"||L==="span");
if(!K.id){this.uuid+=1;
K.id="dp"+this.uuid
}I=this._newInst(E(K),J);
I.settings=E.extend({},H||{});
if(L==="input"){this._connectDatepicker(K,I)
}else{if(J){this._inlineDatepicker(K,I)
}}},_newInst:function(I,H){var J=I[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:J,input:I,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:H,dpDiv:(!H?this.dpDiv:D(E("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(J,I){var H=E(J);
I.append=E([]);
I.trigger=E([]);
if(H.hasClass(this.markerClassName)){return 
}this._attachments(H,I);
H.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(I);
E.data(J,F,I);
if(I.settings.disabled){this._disableDatepicker(J)
}},_attachments:function(J,M){var I,L,H,N=this._get(M,"appendText"),K=this._get(M,"isRTL");
if(M.append){M.append.remove()
}if(N){M.append=E("<span class='"+this._appendClass+"'>"+N+"</span>");
J[K?"before":"after"](M.append)
}J.unbind("focus",this._showDatepicker);
if(M.trigger){M.trigger.remove()
}I=this._get(M,"showOn");
if(I==="focus"||I==="both"){J.focus(this._showDatepicker)
}if(I==="button"||I==="both"){L=this._get(M,"buttonText");
H=this._get(M,"buttonImage");
M.trigger=E(this._get(M,"buttonImageOnly")?E("<img/>").addClass(this._triggerClass).attr({src:H,alt:L,title:L}):E("<button type='button'></button>").addClass(this._triggerClass).html(!H?L:E("<img/>").attr({src:H,alt:L,title:L})));
J[K?"before":"after"](M.trigger);
M.trigger.click(function(){if(E.datepicker._datepickerShowing&&E.datepicker._lastInput===J[0]){E.datepicker._hideDatepicker()
}else{if(E.datepicker._datepickerShowing&&E.datepicker._lastInput!==J[0]){E.datepicker._hideDatepicker();
E.datepicker._showDatepicker(J[0])
}else{E.datepicker._showDatepicker(J[0])
}}return false
})
}},_autoSize:function(N){if(this._get(N,"autoSize")&&!N.inline){var K,I,J,M,L=new Date(2009,12-1,20),H=this._get(N,"dateFormat");
if(H.match(/[DM]/)){K=function(O){I=0;
J=0;
for(M=0;
M<O.length;
M++){if(O[M].length>I){I=O[M].length;
J=M
}}return J
};
L.setMonth(K(this._get(N,(H.match(/MM/)?"monthNames":"monthNamesShort"))));
L.setDate(K(this._get(N,(H.match(/DD/)?"dayNames":"dayNamesShort")))+20-L.getDay())
}N.input.attr("size",this._formatDate(N,L).length)
}},_inlineDatepicker:function(I,H){var J=E(I);
if(J.hasClass(this.markerClassName)){return 
}J.addClass(this.markerClassName).append(H.dpDiv);
E.data(I,F,H);
this._setDate(H,this._getDefaultDate(H),true);
this._updateDatepicker(H);
this._updateAlternate(H);
if(H.settings.disabled){this._disableDatepicker(I)
}H.dpDiv.css("display","block")
},_dialogDatepicker:function(O,I,M,J,N){var H,R,L,Q,P,K=this._dialogInst;
if(!K){this.uuid+=1;
H="dp"+this.uuid;
this._dialogInput=E("<input type='text' id='"+H+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);
E("body").append(this._dialogInput);
K=this._dialogInst=this._newInst(this._dialogInput,false);
K.settings={};
E.data(this._dialogInput[0],F,K)
}A(K.settings,J||{});
I=(I&&I.constructor===Date?this._formatDate(K,I):I);
this._dialogInput.val(I);
this._pos=(N?(N.length?N:[N.pageX,N.pageY]):null);
if(!this._pos){R=document.documentElement.clientWidth;
L=document.documentElement.clientHeight;
Q=document.documentElement.scrollLeft||document.body.scrollLeft;
P=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(R/2)-100+Q,(L/2)-150+P]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
K.settings.onSelect=M;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(E.blockUI){E.blockUI(this.dpDiv)
}E.data(this._dialogInput[0],F,K);
return this
},_destroyDatepicker:function(J){var K,H=E(J),I=E.data(J,F);
if(!H.hasClass(this.markerClassName)){return 
}K=J.nodeName.toLowerCase();
E.removeData(J,F);
if(K==="input"){I.append.remove();
I.trigger.remove();
H.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(K==="div"||K==="span"){H.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(K){var L,J,H=E(K),I=E.data(K,F);
if(!H.hasClass(this.markerClassName)){return 
}L=K.nodeName.toLowerCase();
if(L==="input"){K.disabled=false;
I.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(L==="div"||L==="span"){J=H.children("."+this._inlineClass);
J.children().removeClass("ui-state-disabled");
J.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=E.map(this._disabledInputs,function(M){return(M===K?null:M)
})
},_disableDatepicker:function(K){var L,J,H=E(K),I=E.data(K,F);
if(!H.hasClass(this.markerClassName)){return 
}L=K.nodeName.toLowerCase();
if(L==="input"){K.disabled=true;
I.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(L==="div"||L==="span"){J=H.children("."+this._inlineClass);
J.children().addClass("ui-state-disabled");
J.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=E.map(this._disabledInputs,function(M){return(M===K?null:M)
});
this._disabledInputs[this._disabledInputs.length]=K
},_isDisabledDatepicker:function(I){if(!I){return false
}for(var H=0;
H<this._disabledInputs.length;
H++){if(this._disabledInputs[H]===I){return true
}}return false
},_getInst:function(I){try{return E.data(I,F)
}catch(H){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(N,I,M){var J,H,L,O,K=this._getInst(N);
if(arguments.length===2&&typeof I==="string"){return(I==="defaults"?E.extend({},E.datepicker._defaults):(K?(I==="all"?E.extend({},K.settings):this._get(K,I)):null))
}J=I||{};
if(typeof I==="string"){J={};
J[I]=M
}if(K){if(this._curInst===K){this._hideDatepicker()
}H=this._getDateDatepicker(N,true);
L=this._getMinMaxDate(K,"min");
O=this._getMinMaxDate(K,"max");
A(K.settings,J);
if(L!==null&&J.dateFormat!==G&&J.minDate===G){K.settings.minDate=this._formatDate(K,L)
}if(O!==null&&J.dateFormat!==G&&J.maxDate===G){K.settings.maxDate=this._formatDate(K,O)
}if("disabled" in J){if(J.disabled){this._disableDatepicker(N)
}else{this._enableDatepicker(N)
}}this._attachments(E(N),K);
this._autoSize(K);
this._setDate(K,H);
this._updateAlternate(K);
this._updateDatepicker(K)
}},_changeDatepicker:function(J,H,I){this._optionDatepicker(J,H,I)
},_refreshDatepicker:function(I){var H=this._getInst(I);
if(H){this._updateDatepicker(H)
}},_setDateDatepicker:function(J,H){var I=this._getInst(J);
if(I){this._setDate(I,H);
this._updateDatepicker(I);
this._updateAlternate(I)
}},_getDateDatepicker:function(J,H){var I=this._getInst(J);
if(I&&!I.inline){this._setDateFromField(I,H)
}return(I?this._getDate(I):null)
},_doKeyDown:function(K){var I,H,M,L=E.datepicker._getInst(K.target),N=true,J=L.dpDiv.is(".ui-datepicker-rtl");
L._keyEvent=true;
if(E.datepicker._datepickerShowing){switch(K.keyCode){case 9:E.datepicker._hideDatepicker();
N=false;
break;
case 13:M=E("td."+E.datepicker._dayOverClass+":not(."+E.datepicker._currentClass+")",L.dpDiv);
if(M[0]){E.datepicker._selectDay(K.target,L.selectedMonth,L.selectedYear,M[0])
}I=E.datepicker._get(L,"onSelect");
if(I){H=E.datepicker._formatDate(L);
I.apply((L.input?L.input[0]:null),[H,L])
}else{E.datepicker._hideDatepicker()
}return false;
case 27:E.datepicker._hideDatepicker();
break;
case 33:E.datepicker._adjustDate(K.target,(K.ctrlKey?-E.datepicker._get(L,"stepBigMonths"):-E.datepicker._get(L,"stepMonths")),"M");
break;
case 34:E.datepicker._adjustDate(K.target,(K.ctrlKey?+E.datepicker._get(L,"stepBigMonths"):+E.datepicker._get(L,"stepMonths")),"M");
break;
case 35:if(K.ctrlKey||K.metaKey){E.datepicker._clearDate(K.target)
}N=K.ctrlKey||K.metaKey;
break;
case 36:if(K.ctrlKey||K.metaKey){E.datepicker._gotoToday(K.target)
}N=K.ctrlKey||K.metaKey;
break;
case 37:if(K.ctrlKey||K.metaKey){E.datepicker._adjustDate(K.target,(J?+1:-1),"D")
}N=K.ctrlKey||K.metaKey;
if(K.originalEvent.altKey){E.datepicker._adjustDate(K.target,(K.ctrlKey?-E.datepicker._get(L,"stepBigMonths"):-E.datepicker._get(L,"stepMonths")),"M")
}break;
case 38:if(K.ctrlKey||K.metaKey){E.datepicker._adjustDate(K.target,-7,"D")
}N=K.ctrlKey||K.metaKey;
break;
case 39:if(K.ctrlKey||K.metaKey){E.datepicker._adjustDate(K.target,(J?-1:+1),"D")
}N=K.ctrlKey||K.metaKey;
if(K.originalEvent.altKey){E.datepicker._adjustDate(K.target,(K.ctrlKey?+E.datepicker._get(L,"stepBigMonths"):+E.datepicker._get(L,"stepMonths")),"M")
}break;
case 40:if(K.ctrlKey||K.metaKey){E.datepicker._adjustDate(K.target,+7,"D")
}N=K.ctrlKey||K.metaKey;
break;
default:N=false
}}else{if(K.keyCode===36&&K.ctrlKey){E.datepicker._showDatepicker(this)
}else{N=false
}}if(N){K.preventDefault();
K.stopPropagation()
}},_doKeyPress:function(J){var I,H,K=E.datepicker._getInst(J.target);
if(E.datepicker._get(K,"constrainInput")){I=E.datepicker._possibleChars(E.datepicker._get(K,"dateFormat"));
H=String.fromCharCode(J.charCode==null?J.keyCode:J.charCode);
return J.ctrlKey||J.metaKey||(H<" "||!I||I.indexOf(H)>-1)
}},_doKeyUp:function(J){var H,K=E.datepicker._getInst(J.target);
if(K.input.val()!==K.lastVal){try{H=E.datepicker.parseDate(E.datepicker._get(K,"dateFormat"),(K.input?K.input.val():null),E.datepicker._getFormatConfig(K));
if(H){E.datepicker._setDateFromField(K);
E.datepicker._updateAlternate(K);
E.datepicker._updateDatepicker(K)
}}catch(I){}}return true
},_showDatepicker:function(I){I=I.target||I;
if(I.nodeName.toLowerCase()!=="input"){I=E("input",I.parentNode)[0]
}if(E.datepicker._isDisabledDatepicker(I)||E.datepicker._lastInput===I){return 
}var K,O,J,M,N,H,L;
K=E.datepicker._getInst(I);
if(E.datepicker._curInst&&E.datepicker._curInst!==K){E.datepicker._curInst.dpDiv.stop(true,true);
if(K&&E.datepicker._datepickerShowing){E.datepicker._hideDatepicker(E.datepicker._curInst.input[0])
}}O=E.datepicker._get(K,"beforeShow");
J=O?O.apply(I,[I,K]):{};
if(J===false){return 
}A(K.settings,J);
K.lastVal=null;
E.datepicker._lastInput=I;
E.datepicker._setDateFromField(K);
if(E.datepicker._inDialog){I.value=""
}if(!E.datepicker._pos){E.datepicker._pos=E.datepicker._findPos(I);
E.datepicker._pos[1]+=I.offsetHeight
}M=false;
E(I).parents().each(function(){M|=E(this).css("position")==="fixed";
return !M
});
N={left:E.datepicker._pos[0],top:E.datepicker._pos[1]};
E.datepicker._pos=null;
K.dpDiv.empty();
K.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
E.datepicker._updateDatepicker(K);
N=E.datepicker._checkOffset(K,N,M);
K.dpDiv.css({position:(E.datepicker._inDialog&&E.blockUI?"static":(M?"fixed":"absolute")),display:"none",left:N.left+"px",top:N.top+"px"});
if(!K.inline){H=E.datepicker._get(K,"showAnim");
L=E.datepicker._get(K,"duration");
K.dpDiv.zIndex(E(I).zIndex()+1);
E.datepicker._datepickerShowing=true;
if(E.effects&&E.effects.effect[H]){K.dpDiv.show(H,E.datepicker._get(K,"showOptions"),L)
}else{K.dpDiv[H||"show"](H?L:null)
}if(E.datepicker._shouldFocusInput(K)){K.input.focus()
}E.datepicker._curInst=K
}},_updateDatepicker:function(J){this.maxRows=4;
C=J;
J.dpDiv.empty().append(this._generateHTML(J));
this._attachHandlers(J);
J.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var L,H=this._getNumberOfMonths(J),K=H[1],I=17;
J.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(K>1){J.dpDiv.addClass("ui-datepicker-multi-"+K).css("width",(I*K)+"em")
}J.dpDiv[(H[0]!==1||H[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
J.dpDiv[(this._get(J,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(J===E.datepicker._curInst&&E.datepicker._datepickerShowing&&E.datepicker._shouldFocusInput(J)){J.input.focus()
}if(J.yearshtml){L=J.yearshtml;
setTimeout(function(){if(L===J.yearshtml&&J.yearshtml){J.dpDiv.find("select.ui-datepicker-year:first").replaceWith(J.yearshtml)
}L=J.yearshtml=null
},0)
}},_shouldFocusInput:function(H){return H.input&&H.input.is(":visible")&&!H.input.is(":disabled")&&!H.input.is(":focus")
},_checkOffset:function(M,K,J){var L=M.dpDiv.outerWidth(),P=M.dpDiv.outerHeight(),O=M.input?M.input.outerWidth():0,H=M.input?M.input.outerHeight():0,N=document.documentElement.clientWidth+(J?0:E(document).scrollLeft()),I=document.documentElement.clientHeight+(J?0:E(document).scrollTop());
K.left-=(this._get(M,"isRTL")?(L-O):0);
K.left-=(J&&K.left===M.input.offset().left)?E(document).scrollLeft():0;
K.top-=(J&&K.top===(M.input.offset().top+H))?E(document).scrollTop():0;
K.left-=Math.min(K.left,(K.left+L>N&&N>L)?Math.abs(K.left+L-N):0);
K.top-=Math.min(K.top,(K.top+P>I&&I>P)?Math.abs(P+H):0);
return K
},_findPos:function(K){var H,J=this._getInst(K),I=this._get(J,"isRTL");
while(K&&(K.type==="hidden"||K.nodeType!==1||E.expr.filters.hidden(K))){K=K[I?"previousSibling":"nextSibling"]
}H=E(K).offset();
return[H.left,H.top]
},_hideDatepicker:function(J){var I,M,L,H,K=this._curInst;
if(!K||(J&&K!==E.data(J,F))){return 
}if(this._datepickerShowing){I=this._get(K,"showAnim");
M=this._get(K,"duration");
L=function(){E.datepicker._tidyDialog(K)
};
if(E.effects&&(E.effects.effect[I]||E.effects[I])){K.dpDiv.hide(I,E.datepicker._get(K,"showOptions"),M,L)
}else{K.dpDiv[(I==="slideDown"?"slideUp":(I==="fadeIn"?"fadeOut":"hide"))]((I?M:null),L)
}if(!I){L()
}this._datepickerShowing=false;
H=this._get(K,"onClose");
if(H){H.apply((K.input?K.input[0]:null),[(K.input?K.input.val():""),K])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(E.blockUI){E.unblockUI();
E("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(H){H.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(I){if(!E.datepicker._curInst){return 
}var H=E(I.target),J=E.datepicker._getInst(H[0]);
if(((H[0].id!==E.datepicker._mainDivId&&H.parents("#"+E.datepicker._mainDivId).length===0&&!H.hasClass(E.datepicker.markerClassName)&&!H.closest("."+E.datepicker._triggerClass).length&&E.datepicker._datepickerShowing&&!(E.datepicker._inDialog&&E.blockUI)))||(H.hasClass(E.datepicker.markerClassName)&&E.datepicker._curInst!==J)){E.datepicker._hideDatepicker()
}},_adjustDate:function(L,K,J){var I=E(L),H=this._getInst(I[0]);
if(this._isDisabledDatepicker(I[0])){return 
}this._adjustInstDate(H,K+(J==="M"?this._get(H,"showCurrentAtPos"):0),J);
this._updateDatepicker(H)
},_gotoToday:function(K){var H,J=E(K),I=this._getInst(J[0]);
if(this._get(I,"gotoCurrent")&&I.currentDay){I.selectedDay=I.currentDay;
I.drawMonth=I.selectedMonth=I.currentMonth;
I.drawYear=I.selectedYear=I.currentYear
}else{H=new Date();
I.selectedDay=H.getDate();
I.drawMonth=I.selectedMonth=H.getMonth();
I.drawYear=I.selectedYear=H.getFullYear()
}this._notifyChange(I);
this._adjustDate(J)
},_selectMonthYear:function(L,H,K){var J=E(L),I=this._getInst(J[0]);
I["selected"+(K==="M"?"Month":"Year")]=I["draw"+(K==="M"?"Month":"Year")]=parseInt(H.options[H.selectedIndex].value,10);
this._notifyChange(I);
this._adjustDate(J)
},_selectDay:function(M,K,H,L){var I,J=E(M);
if(E(L).hasClass(this._unselectableClass)||this._isDisabledDatepicker(J[0])){return 
}I=this._getInst(J[0]);
I.selectedDay=I.currentDay=E("a",L).html();
I.selectedMonth=I.currentMonth=K;
I.selectedYear=I.currentYear=H;
this._selectDate(M,this._formatDate(I,I.currentDay,I.currentMonth,I.currentYear))
},_clearDate:function(I){var H=E(I);
this._selectDate(H,"")
},_selectDate:function(L,H){var I,K=E(L),J=this._getInst(K[0]);
H=(H!=null?H:this._formatDate(J));
if(J.input){J.input.val(H)
}this._updateAlternate(J);
I=this._get(J,"onSelect");
if(I){I.apply((J.input?J.input[0]:null),[H,J])
}else{if(J.input){J.input.trigger("change")
}}if(J.inline){this._updateDatepicker(J)
}else{this._hideDatepicker();
this._lastInput=J.input[0];
if(typeof (J.input[0])!=="object"){J.input.focus()
}this._lastInput=null
}},_updateAlternate:function(L){var K,J,H,I=this._get(L,"altField");
if(I){K=this._get(L,"altFormat")||this._get(L,"dateFormat");
J=this._getDate(L);
H=this.formatDate(K,J,this._getFormatConfig(L));
E(I).each(function(){E(this).val(H)
})
}},noWeekends:function(I){var H=I.getDay();
return[(H>0&&H<6),""]
},iso8601Week:function(H){var I,J=new Date(H.getTime());
J.setDate(J.getDate()+4-(J.getDay()||7));
I=J.getTime();
J.setMonth(0);
J.setDate(1);
return Math.floor(Math.round((I-J)/86400000)/7)+1
},parseDate:function(X,S,Z){if(X==null||S==null){throw"Invalid arguments"
}S=(typeof S==="object"?S.toString():S+"");
if(S===""){return null
}var K,U,I,Y=0,N=(Z?Z.shortYearCutoff:null)||this._defaults.shortYearCutoff,J=(typeof N!=="string"?N:new Date().getFullYear()%100+parseInt(N,10)),Q=(Z?Z.dayNamesShort:null)||this._defaults.dayNamesShort,b=(Z?Z.dayNames:null)||this._defaults.dayNames,H=(Z?Z.monthNamesShort:null)||this._defaults.monthNamesShort,L=(Z?Z.monthNames:null)||this._defaults.monthNames,M=-1,c=-1,W=-1,P=-1,V=false,a,R=function(e){var f=(K+1<X.length&&X.charAt(K+1)===e);
if(f){K++
}return f
},d=function(g){var e=R(g),h=(g==="@"?14:(g==="!"?20:(g==="y"&&e?4:(g==="o"?3:2)))),i=new RegExp("^\\d{1,"+h+"}"),f=S.substring(Y).match(i);
if(!f){throw"Missing number at position "+Y
}Y+=f[0].length;
return parseInt(f[0],10)
},O=function(f,g,i){var e=-1,h=E.map(R(f)?i:g,function(l,j){return[[j,l]]
}).sort(function(k,j){return -(k[1].length-j[1].length)
});
E.each(h,function(k,l){var j=l[1];
if(S.substr(Y,j.length).toLowerCase()===j.toLowerCase()){e=l[0];
Y+=j.length;
return false
}});
if(e!==-1){return e+1
}else{throw"Unknown name at position "+Y
}},T=function(){if(S.charAt(Y)!==X.charAt(K)){throw"Unexpected literal at position "+Y
}Y++
};
for(K=0;
K<X.length;
K++){if(V){if(X.charAt(K)==="'"&&!R("'")){V=false
}else{T()
}}else{switch(X.charAt(K)){case"d":W=d("d");
break;
case"D":O("D",Q,b);
break;
case"o":P=d("o");
break;
case"m":c=d("m");
break;
case"M":c=O("M",H,L);
break;
case"y":M=d("y");
break;
case"@":a=new Date(d("@"));
M=a.getFullYear();
c=a.getMonth()+1;
W=a.getDate();
break;
case"!":a=new Date((d("!")-this._ticksTo1970)/10000);
M=a.getFullYear();
c=a.getMonth()+1;
W=a.getDate();
break;
case"'":if(R("'")){T()
}else{V=true
}break;
default:T()
}}}if(Y<S.length){I=S.substr(Y);
if(!/^\s+/.test(I)){throw"Extra/unparsed characters found in date: "+I
}}if(M===-1){M=new Date().getFullYear()
}else{if(M<100){M+=new Date().getFullYear()-new Date().getFullYear()%100+(M<=J?0:-100)
}}if(P>-1){c=1;
W=P;
do{U=this._getDaysInMonth(M,c-1);
if(W<=U){break
}c++;
W-=U
}while(true)
}a=this._daylightSavingAdjust(new Date(M,c-1,W));
if(a.getFullYear()!==M||a.getMonth()+1!==c||a.getDate()!==W){throw"Invalid date"
}return a
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(Q,K,L){if(!K){return""
}var S,T=(L?L.dayNamesShort:null)||this._defaults.dayNamesShort,I=(L?L.dayNames:null)||this._defaults.dayNames,O=(L?L.monthNamesShort:null)||this._defaults.monthNamesShort,M=(L?L.monthNames:null)||this._defaults.monthNames,R=function(U){var V=(S+1<Q.length&&Q.charAt(S+1)===U);
if(V){S++
}return V
},H=function(W,X,U){var V=""+X;
if(R(W)){while(V.length<U){V="0"+V
}}return V
},N=function(U,W,V,X){return(R(U)?X[W]:V[W])
},J="",P=false;
if(K){for(S=0;
S<Q.length;
S++){if(P){if(Q.charAt(S)==="'"&&!R("'")){P=false
}else{J+=Q.charAt(S)
}}else{switch(Q.charAt(S)){case"d":J+=H("d",K.getDate(),2);
break;
case"D":J+=N("D",K.getDay(),T,I);
break;
case"o":J+=H("o",Math.round((new Date(K.getFullYear(),K.getMonth(),K.getDate()).getTime()-new Date(K.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":J+=H("m",K.getMonth()+1,2);
break;
case"M":J+=N("M",K.getMonth(),O,M);
break;
case"y":J+=(R("y")?K.getFullYear():(K.getYear()%100<10?"0":"")+K.getYear()%100);
break;
case"@":J+=K.getTime();
break;
case"!":J+=K.getTime()*10000+this._ticksTo1970;
break;
case"'":if(R("'")){J+="'"
}else{P=true
}break;
default:J+=Q.charAt(S)
}}}}return J
},_possibleChars:function(L){var K,J="",I=false,H=function(M){var N=(K+1<L.length&&L.charAt(K+1)===M);
if(N){K++
}return N
};
for(K=0;
K<L.length;
K++){if(I){if(L.charAt(K)==="'"&&!H("'")){I=false
}else{J+=L.charAt(K)
}}else{switch(L.charAt(K)){case"d":case"m":case"y":case"@":J+="0123456789";
break;
case"D":case"M":return null;
case"'":if(H("'")){J+="'"
}else{I=true
}break;
default:J+=L.charAt(K)
}}}return J
},_get:function(I,H){return I.settings[H]!==G?I.settings[H]:this._defaults[H]
},_setDateFromField:function(M,J){if(M.input.val()===M.lastVal){return 
}var H=this._get(M,"dateFormat"),O=M.lastVal=M.input?M.input.val():null,N=this._getDefaultDate(M),I=N,K=this._getFormatConfig(M);
try{I=this.parseDate(H,O,K)||N
}catch(L){O=(J?"":O)
}M.selectedDay=I.getDate();
M.drawMonth=M.selectedMonth=I.getMonth();
M.drawYear=M.selectedYear=I.getFullYear();
M.currentDay=(O?I.getDate():0);
M.currentMonth=(O?I.getMonth():0);
M.currentYear=(O?I.getFullYear():0);
this._adjustInstDate(M)
},_getDefaultDate:function(H){return this._restrictMinMax(H,this._determineDate(H,this._get(H,"defaultDate"),new Date()))
},_determineDate:function(L,I,M){var K=function(O){var N=new Date();
N.setDate(N.getDate()+O);
return N
},J=function(U){try{return E.datepicker.parseDate(E.datepicker._get(L,"dateFormat"),U,E.datepicker._getFormatConfig(L))
}catch(T){}var O=(U.toLowerCase().match(/^c/)?E.datepicker._getDate(L):null)||new Date(),P=O.getFullYear(),S=O.getMonth(),N=O.getDate(),R=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,Q=R.exec(U);
while(Q){switch(Q[2]||"d"){case"d":case"D":N+=parseInt(Q[1],10);
break;
case"w":case"W":N+=parseInt(Q[1],10)*7;
break;
case"m":case"M":S+=parseInt(Q[1],10);
N=Math.min(N,E.datepicker._getDaysInMonth(P,S));
break;
case"y":case"Y":P+=parseInt(Q[1],10);
N=Math.min(N,E.datepicker._getDaysInMonth(P,S));
break
}Q=R.exec(U)
}return new Date(P,S,N)
},H=(I==null||I===""?M:(typeof I==="string"?J(I):(typeof I==="number"?(isNaN(I)?M:K(I)):new Date(I.getTime()))));
H=(H&&H.toString()==="Invalid Date"?M:H);
if(H){H.setHours(0);
H.setMinutes(0);
H.setSeconds(0);
H.setMilliseconds(0)
}return this._daylightSavingAdjust(H)
},_daylightSavingAdjust:function(H){if(!H){return null
}H.setHours(H.getHours()>12?H.getHours()+2:0);
return H
},_setDate:function(N,K,M){var H=!K,J=N.selectedMonth,L=N.selectedYear,I=this._restrictMinMax(N,this._determineDate(N,K,new Date()));
N.selectedDay=N.currentDay=I.getDate();
N.drawMonth=N.selectedMonth=N.currentMonth=I.getMonth();
N.drawYear=N.selectedYear=N.currentYear=I.getFullYear();
if((J!==N.selectedMonth||L!==N.selectedYear)&&!M){this._notifyChange(N)
}this._adjustInstDate(N);
if(N.input){N.input.val(H?"":this._formatDate(N))
}},_getDate:function(I){var H=(!I.currentYear||(I.input&&I.input.val()==="")?null:this._daylightSavingAdjust(new Date(I.currentYear,I.currentMonth,I.currentDay)));
return H
},_attachHandlers:function(I){var H=this._get(I,"stepMonths"),J="#"+I.id.replace(/\\\\/g,"\\");
I.dpDiv.find("[data-handler]").map(function(){var K={prev:function(){E.datepicker._adjustDate(J,-H,"M")
},next:function(){E.datepicker._adjustDate(J,+H,"M")
},hide:function(){E.datepicker._hideDatepicker()
},today:function(){E.datepicker._gotoToday(J)
},selectDay:function(){E.datepicker._selectDay(J,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){E.datepicker._selectMonthYear(J,this,"M");
return false
},selectYear:function(){E.datepicker._selectMonthYear(J,this,"Y");
return false
}};
E(this).bind(this.getAttribute("data-event"),K[this.getAttribute("data-handler")])
})
},_generateHTML:function(x){var a,Z,s,k,L,AB,v,o,AE,i,AI,S,U,T,I,AA,Q,d,AD,q,AJ,c,h,R,M,t,m,p,n,P,f,V,w,z,K,AC,AG,l,W,y=new Date(),b=this._daylightSavingAdjust(new Date(y.getFullYear(),y.getMonth(),y.getDate())),AF=this._get(x,"isRTL"),AH=this._get(x,"showButtonPanel"),r=this._get(x,"hideIfNoPrevNext"),g=this._get(x,"navigationAsDateFormat"),X=this._getNumberOfMonths(x),O=this._get(x,"showCurrentAtPos"),j=this._get(x,"stepMonths"),e=(X[0]!==1||X[1]!==1),J=this._daylightSavingAdjust((!x.currentDay?new Date(9999,9,9):new Date(x.currentYear,x.currentMonth,x.currentDay))),N=this._getMinMaxDate(x,"min"),Y=this._getMinMaxDate(x,"max"),H=x.drawMonth-O,u=x.drawYear;
if(H<0){H+=12;
u--
}if(Y){a=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth()-(X[0]*X[1])+1,Y.getDate()));
a=(N&&a<N?N:a);
while(this._daylightSavingAdjust(new Date(u,H,1))>a){H--;
if(H<0){H=11;
u--
}}}x.drawMonth=H;
x.drawYear=u;
Z=this._get(x,"prevText");
Z=(!g?Z:this.formatDate(Z,this._daylightSavingAdjust(new Date(u,H-j,1)),this._getFormatConfig(x)));
s=(this._canAdjustMonth(x,-1,u,H)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+Z+"'><span class='ui-icon ui-icon-circle-triangle-"+(AF?"e":"w")+"'>"+Z+"</span></a>":(r?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+Z+"'><span class='ui-icon ui-icon-circle-triangle-"+(AF?"e":"w")+"'>"+Z+"</span></a>"));
k=this._get(x,"nextText");
k=(!g?k:this.formatDate(k,this._daylightSavingAdjust(new Date(u,H+j,1)),this._getFormatConfig(x)));
L=(this._canAdjustMonth(x,+1,u,H)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+k+"'><span class='ui-icon ui-icon-circle-triangle-"+(AF?"w":"e")+"'>"+k+"</span></a>":(r?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+k+"'><span class='ui-icon ui-icon-circle-triangle-"+(AF?"w":"e")+"'>"+k+"</span></a>"));
AB=this._get(x,"currentText");
v=(this._get(x,"gotoCurrent")&&x.currentDay?J:b);
AB=(!g?AB:this.formatDate(AB,v,this._getFormatConfig(x)));
o=(!x.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(x,"closeText")+"</button>":"");
AE=(AH)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(AF?o:"")+(this._isInRange(x,v)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+AB+"</button>":"")+(AF?"":o)+"</div>":"";
i=parseInt(this._get(x,"firstDay"),10);
i=(isNaN(i)?0:i);
AI=this._get(x,"showWeek");
S=this._get(x,"dayNames");
U=this._get(x,"dayNamesMin");
T=this._get(x,"monthNames");
I=this._get(x,"monthNamesShort");
AA=this._get(x,"beforeShowDay");
Q=this._get(x,"showOtherMonths");
d=this._get(x,"selectOtherMonths");
AD=this._getDefaultDate(x);
q="";
AJ;
for(c=0;
c<X[0];
c++){h="";
this.maxRows=4;
for(R=0;
R<X[1];
R++){M=this._daylightSavingAdjust(new Date(u,H,x.selectedDay));
t=" ui-corner-all";
m="";
if(e){m+="<div class='ui-datepicker-group";
if(X[1]>1){switch(R){case 0:m+=" ui-datepicker-group-first";
t=" ui-corner-"+(AF?"right":"left");
break;
case X[1]-1:m+=" ui-datepicker-group-last";
t=" ui-corner-"+(AF?"left":"right");
break;
default:m+=" ui-datepicker-group-middle";
t="";
break
}}m+="'>"
}m+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+t+"'>"+(/all|left/.test(t)&&c===0?(AF?L:s):"")+(/all|right/.test(t)&&c===0?(AF?s:L):"")+this._generateMonthYearHeader(x,H,u,N,Y,c>0||R>0,T,I)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
p=(AI?"<th class='ui-datepicker-week-col'>"+this._get(x,"weekHeader")+"</th>":"");
for(AJ=0;
AJ<7;
AJ++){n=(AJ+i)%7;
p+="<th"+((AJ+i+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+S[n]+"'>"+U[n]+"</span></th>"
}m+=p+"</tr></thead><tbody>";
P=this._getDaysInMonth(u,H);
if(u===x.selectedYear&&H===x.selectedMonth){x.selectedDay=Math.min(x.selectedDay,P)
}f=(this._getFirstDayOfMonth(u,H)-i+7)%7;
V=Math.ceil((f+P)/7);
w=(e?this.maxRows>V?this.maxRows:V:V);
this.maxRows=w;
z=this._daylightSavingAdjust(new Date(u,H,1-f));
for(K=0;
K<w;
K++){m+="<tr>";
AC=(!AI?"":"<td class='ui-datepicker-week-col'>"+this._get(x,"calculateWeek")(z)+"</td>");
for(AJ=0;
AJ<7;
AJ++){AG=(AA?AA.apply((x.input?x.input[0]:null),[z]):[true,""]);
l=(z.getMonth()!==H);
W=(l&&!d)||!AG[0]||(N&&z<N)||(Y&&z>Y);
AC+="<td class='"+((AJ+i+6)%7>=5?" ui-datepicker-week-end":"")+(l?" ui-datepicker-other-month":"")+((z.getTime()===M.getTime()&&H===x.selectedMonth&&x._keyEvent)||(AD.getTime()===z.getTime()&&AD.getTime()===M.getTime())?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(l&&!Q?"":" "+AG[1]+(z.getTime()===J.getTime()?" "+this._currentClass:"")+(z.getTime()===b.getTime()?" ui-datepicker-today":""))+"'"+((!l||Q)&&AG[2]?" title='"+AG[2].replace(/'/g,"&#39;")+"'":"")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(l&&!Q?"&#xa0;":(W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===b.getTime()?" ui-state-highlight":"")+(z.getTime()===J.getTime()?" ui-state-active":"")+(l?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>"))+"</td>";
z.setDate(z.getDate()+1);
z=this._daylightSavingAdjust(z)
}m+=AC+"</tr>"
}H++;
if(H>11){H=0;
u++
}m+="</tbody></table>"+(e?"</div>"+((X[0]>0&&R===X[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
h+=m
}q+=h
}q+=AE;
x._keyEvent=false;
return q
},_generateMonthYearHeader:function(L,J,T,N,R,U,P,H){var Y,I,Z,W,M,V,S,O,K=this._get(L,"changeMonth"),a=this._get(L,"changeYear"),b=this._get(L,"showMonthAfterYear"),Q="<div class='ui-datepicker-title'>",X="";
if(U||!K){X+="<span class='ui-datepicker-month'>"+P[J]+"</span>"
}else{Y=(N&&N.getFullYear()===T);
I=(R&&R.getFullYear()===T);
X+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(Z=0;
Z<12;
Z++){if((!Y||Z>=N.getMonth())&&(!I||Z<=R.getMonth())){X+="<option value='"+Z+"'"+(Z===J?" selected='selected'":"")+">"+H[Z]+"</option>"
}}X+="</select>"
}if(!b){Q+=X+(U||!(K&&a)?"&#xa0;":"")
}if(!L.yearshtml){L.yearshtml="";
if(U||!a){Q+="<span class='ui-datepicker-year'>"+T+"</span>"
}else{W=this._get(L,"yearRange").split(":");
M=new Date().getFullYear();
V=function(d){var c=(d.match(/c[+\-].*/)?T+parseInt(d.substring(1),10):(d.match(/[+\-].*/)?M+parseInt(d,10):parseInt(d,10)));
return(isNaN(c)?M:c)
};
S=V(W[0]);
O=Math.max(S,V(W[1]||""));
S=(N?Math.max(S,N.getFullYear()):S);
O=(R?Math.min(O,R.getFullYear()):O);
L.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
S<=O;
S++){L.yearshtml+="<option value='"+S+"'"+(S===T?" selected='selected'":"")+">"+S+"</option>"
}L.yearshtml+="</select>";
Q+=L.yearshtml;
L.yearshtml=null
}}Q+=this._get(L,"yearSuffix");
if(b){Q+=(U||!(K&&a)?"&#xa0;":"")+X
}Q+="</div>";
return Q
},_adjustInstDate:function(K,N,M){var J=K.drawYear+(M==="Y"?N:0),L=K.drawMonth+(M==="M"?N:0),H=Math.min(K.selectedDay,this._getDaysInMonth(J,L))+(M==="D"?N:0),I=this._restrictMinMax(K,this._daylightSavingAdjust(new Date(J,L,H)));
K.selectedDay=I.getDate();
K.drawMonth=K.selectedMonth=I.getMonth();
K.drawYear=K.selectedYear=I.getFullYear();
if(M==="M"||M==="Y"){this._notifyChange(K)
}},_restrictMinMax:function(K,I){var J=this._getMinMaxDate(K,"min"),L=this._getMinMaxDate(K,"max"),H=(J&&I<J?J:I);
return(L&&H>L?L:H)
},_notifyChange:function(I){var H=this._get(I,"onChangeMonthYear");
if(H){H.apply((I.input?I.input[0]:null),[I.selectedYear,I.selectedMonth+1,I])
}},_getNumberOfMonths:function(I){var H=this._get(I,"numberOfMonths");
return(H==null?[1,1]:(typeof H==="number"?[1,H]:H))
},_getMinMaxDate:function(I,H){return this._determineDate(I,this._get(I,H+"Date"),null)
},_getDaysInMonth:function(H,I){return 32-this._daylightSavingAdjust(new Date(H,I,32)).getDate()
},_getFirstDayOfMonth:function(H,I){return new Date(H,I,1).getDay()
},_canAdjustMonth:function(K,M,J,L){var H=this._getNumberOfMonths(K),I=this._daylightSavingAdjust(new Date(J,L+(M<0?M:H[0]*H[1]),1));
if(M<0){I.setDate(this._getDaysInMonth(I.getFullYear(),I.getMonth()))
}return this._isInRange(K,I)
},_isInRange:function(L,J){var I,O,K=this._getMinMaxDate(L,"min"),H=this._getMinMaxDate(L,"max"),P=null,M=null,N=this._get(L,"yearRange");
if(N){I=N.split(":");
O=new Date().getFullYear();
P=parseInt(I[0],10);
M=parseInt(I[1],10);
if(I[0].match(/[+\-].*/)){P+=O
}if(I[1].match(/[+\-].*/)){M+=O
}}return((!K||J.getTime()>=K.getTime())&&(!H||J.getTime()<=H.getTime())&&(!P||J.getFullYear()>=P)&&(!M||J.getFullYear()<=M))
},_getFormatConfig:function(H){var I=this._get(H,"shortYearCutoff");
I=(typeof I!=="string"?I:new Date().getFullYear()%100+parseInt(I,10));
return{shortYearCutoff:I,dayNamesShort:this._get(H,"dayNamesShort"),dayNames:this._get(H,"dayNames"),monthNamesShort:this._get(H,"monthNamesShort"),monthNames:this._get(H,"monthNames")}
},_formatDate:function(K,H,L,J){if(!H){K.currentDay=K.selectedDay;
K.currentMonth=K.selectedMonth;
K.currentYear=K.selectedYear
}var I=(H?(typeof H==="object"?H:this._daylightSavingAdjust(new Date(J,L,H))):this._daylightSavingAdjust(new Date(K.currentYear,K.currentMonth,K.currentDay)));
return this.formatDate(this._get(K,"dateFormat"),I,this._getFormatConfig(K))
}});
function D(I){var H="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return I.delegate(H,"mouseout",function(){E(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){E(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){E(this).removeClass("ui-datepicker-next-hover")
}}).delegate(H,"mouseover",function(){if(!E.datepicker._isDisabledDatepicker(C.inline?I.parent()[0]:C.input[0])){E(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
E(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){E(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){E(this).addClass("ui-datepicker-next-hover")
}}})
}function A(J,I){E.extend(J,I);
for(var H in I){if(I[H]==null){J[H]=I[H]
}}return J
}E.fn.datepicker=function(I){if(!this.length){return this
}if(!E.datepicker.initialized){E(document).mousedown(E.datepicker._checkExternalClick);
E.datepicker.initialized=true
}if(E("#"+E.datepicker._mainDivId).length===0){E("body").append(E.datepicker.dpDiv)
}var H=Array.prototype.slice.call(arguments,1);
if(typeof I==="string"&&(I==="isDisabled"||I==="getDate"||I==="widget")){return E.datepicker["_"+I+"Datepicker"].apply(E.datepicker,[this[0]].concat(H))
}if(I==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return E.datepicker["_"+I+"Datepicker"].apply(E.datepicker,[this[0]].concat(H))
}return this.each(function(){typeof I==="string"?E.datepicker["_"+I+"Datepicker"].apply(E.datepicker,[this].concat(H)):E.datepicker._attachDatepicker(this,I)
})
};
E.datepicker=new B();
E.datepicker.initialized=false;
E.datepicker.uuid=new Date().getTime();
E.datepicker.version="1.10.4"
})(jQuery);
(function(A,B){A.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});
this.valueDiv=A("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(C){if(C===B){return this.options.value
}this.options.value=this._constrainedValue(C);
this._refreshValue()
},_constrainedValue:function(C){if(C===B){C=this.options.value
}this.indeterminate=C===false;
if(typeof C!=="number"){C=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,C))
},_setOptions:function(C){var D=C.value;
delete C.value;
this._super(C);
this.options.value=this._constrainedValue(D);
this._refreshValue()
},_setOption:function(C,D){if(C==="max"){D=Math.max(this.min,D)
}this._super(C,D)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var D=this.options.value,C=this._percentage();
this.valueDiv.toggle(this.indeterminate||D>this.min).toggleClass("ui-corner-right",D===this.options.max).width(C.toFixed(0)+"%");
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=A("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":D});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==D){this.oldValue=D;
this._trigger("change")
}if(D===this.options.max){this._trigger("complete")
}}})
})(jQuery);
(function(D){var B=0;
function C(F,G){var E=(F.attr("aria-describedby")||"").split(/\s+/);
E.push(G);
F.data("ui-tooltip-id",G).attr("aria-describedby",D.trim(E.join(" ")))
}function A(G){var H=G.data("ui-tooltip-id"),F=(G.attr("aria-describedby")||"").split(/\s+/),E=D.inArray(H,F);
if(E!==-1){F.splice(E,1)
}G.removeData("ui-tooltip-id");
F=D.trim(F.join(" "));
if(F){G.attr("aria-describedby",F)
}else{G.removeAttr("aria-describedby")
}}D.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var E=D(this).attr("title")||"";
return D("<a>").text(E).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(E,G){var F=this;
if(E==="disabled"){this[G?"_disable":"_enable"]();
this.options[E]=G;
return 
}this._super(E,G);
if(E==="content"){D.each(this.tooltips,function(I,H){F._updateContent(H)
})
}},_disable:function(){var E=this;
D.each(this.tooltips,function(H,F){var G=D.Event("blur");
G.target=G.currentTarget=F[0];
E.close(G,true)
});
this.element.find(this.options.items).addBack().each(function(){var F=D(this);
if(F.is("[title]")){F.data("ui-tooltip-title",F.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var E=D(this);
if(E.data("ui-tooltip-title")){E.attr("title",E.data("ui-tooltip-title"))
}})
},open:function(F){var E=this,G=D(F?F.target:this.element).closest(this.options.items);
if(!G.length||G.data("ui-tooltip-id")){return 
}if(G.attr("title")){G.data("ui-tooltip-title",G.attr("title"))
}G.data("ui-tooltip-open",true);
if(F&&F.type==="mouseover"){G.parents().each(function(){var I=D(this),H;
if(I.data("ui-tooltip-open")){H=D.Event("blur");
H.target=H.currentTarget=this;
E.close(H,true)
}if(I.attr("title")){I.uniqueId();
E.parents[this.id]={element:this,title:I.attr("title")};
I.attr("title","")
}})
}this._updateContent(G,F)
},_updateContent:function(J,I){var H,E=this.options.content,G=this,F=I?I.type:null;
if(typeof E==="string"){return this._open(I,J,E)
}H=E.call(J[0],function(K){if(!J.data("ui-tooltip-open")){return 
}G._delay(function(){if(I){I.type=F
}this._open(I,J,K)
})
});
if(H){this._open(I,J,H)
}},_open:function(I,K,H){var J,G,F,L=D.extend({},this.options.position);
if(!H){return 
}J=this._find(K);
if(J.length){J.find(".ui-tooltip-content").html(H);
return 
}if(K.is("[title]")){if(I&&I.type==="mouseover"){K.attr("title","")
}else{K.removeAttr("title")
}}J=this._tooltip(K);
C(K,J.attr("id"));
J.find(".ui-tooltip-content").html(H);
function E(M){L.of=M;
if(J.is(":hidden")){return 
}J.position(L)
}if(this.options.track&&I&&/^mouse/.test(I.type)){this._on(this.document,{mousemove:E});
E(I)
}else{J.position(D.extend({of:K},this.options.position))
}J.hide();
this._show(J,this.options.show);
if(this.options.show&&this.options.show.delay){F=this.delayedShow=setInterval(function(){if(J.is(":visible")){E(L.of);
clearInterval(F)
}},D.fx.interval)
}this._trigger("open",I,{tooltip:J});
G={keyup:function(M){if(M.keyCode===D.ui.keyCode.ESCAPE){var N=D.Event(M);
N.currentTarget=K[0];
this.close(N,true)
}},remove:function(){this._removeTooltip(J)
}};
if(!I||I.type==="mouseover"){G.mouseleave="close"
}if(!I||I.type==="focusin"){G.focusout="close"
}this._on(true,K,G)
},close:function(F){var E=this,H=D(F?F.currentTarget:this.element),G=this._find(H);
if(this.closing){return 
}clearInterval(this.delayedShow);
if(H.data("ui-tooltip-title")){H.attr("title",H.data("ui-tooltip-title"))
}A(H);
G.stop(true);
this._hide(G,this.options.hide,function(){E._removeTooltip(D(this))
});
H.removeData("ui-tooltip-open");
this._off(H,"mouseleave focusout keyup");
if(H[0]!==this.element[0]){this._off(H,"remove")
}this._off(this.document,"mousemove");
if(F&&F.type==="mouseleave"){D.each(this.parents,function(J,I){D(I.element).attr("title",I.title);
delete E.parents[J]
})
}this.closing=true;
this._trigger("close",F,{tooltip:G});
this.closing=false
},_tooltip:function(E){var G="ui-tooltip-"+B++,F=D("<div>").attr({id:G,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
D("<div>").addClass("ui-tooltip-content").appendTo(F);
F.appendTo(this.document[0].body);
this.tooltips[G]=E;
return F
},_find:function(E){var F=E.data("ui-tooltip-id");
return F?D("#"+F):D()
},_removeTooltip:function(E){E.remove();
delete this.tooltips[E.attr("id")]
},_destroy:function(){var E=this;
D.each(this.tooltips,function(H,F){var G=D.Event("blur");
G.target=G.currentTarget=F[0];
E.close(G,true);
D("#"+H).remove();
if(F.data("ui-tooltip-title")){F.attr("title",F.data("ui-tooltip-title"));
F.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
(function(){var W=this;
var K=W._;
var d={};
var c=Array.prototype,F=Object.prototype,R=Function.prototype;
var h=c.push,O=c.slice,Y=c.concat,D=F.toString,J=F.hasOwnProperty;
var l=c.forEach,Q=c.map,e=c.reduce,C=c.reduceRight,B=c.filter,b=c.every,P=c.some,N=c.indexOf,L=c.lastIndexOf,U=Array.isArray,E=Object.keys,f=R.bind;
var m=function(n){if(n instanceof m){return n
}if(!(this instanceof m)){return new m(n)
}this._wrapped=n
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=m
}exports._=m
}else{W._=m
}m.VERSION="1.5.2";
var i=m.each=m.forEach=function(s,p,o){if(s==null){return 
}if(l&&s.forEach===l){s.forEach(p,o)
}else{if(s.length===+s.length){for(var n=0,r=s.length;
n<r;
n++){if(p.call(o,s[n],n,s)===d){return 
}}}else{var q=m.keys(s);
for(var n=0,r=q.length;
n<r;
n++){if(p.call(o,s[q[n]],q[n],s)===d){return 
}}}}};
m.map=m.collect=function(q,p,o){var n=[];
if(q==null){return n
}if(Q&&q.map===Q){return q.map(p,o)
}i(q,function(t,r,s){n.push(p.call(o,t,r,s))
});
return n
};
var G="Reduce of empty array with no initial value";
m.reduce=m.foldl=m.inject=function(r,q,n,p){var o=arguments.length>2;
if(r==null){r=[]
}if(e&&r.reduce===e){if(p){q=m.bind(q,p)
}return o?r.reduce(q,n):r.reduce(q)
}i(r,function(u,s,t){if(!o){n=u;
o=true
}else{n=q.call(p,n,u,s,t)
}});
if(!o){throw new TypeError(G)
}return n
};
m.reduceRight=m.foldr=function(t,q,n,p){var o=arguments.length>2;
if(t==null){t=[]
}if(C&&t.reduceRight===C){if(p){q=m.bind(q,p)
}return o?t.reduceRight(q,n):t.reduceRight(q)
}var s=t.length;
if(s!==+s){var r=m.keys(t);
s=r.length
}i(t,function(w,u,v){u=r?r[--s]:--s;
if(!o){n=t[u];
o=true
}else{n=q.call(p,n,t[u],u,v)
}});
if(!o){throw new TypeError(G)
}return n
};
m.find=m.detect=function(q,p,o){var n;
a(q,function(t,r,s){if(p.call(o,t,r,s)){n=t;
return true
}});
return n
};
m.filter=m.select=function(q,p,o){var n=[];
if(q==null){return n
}if(B&&q.filter===B){return q.filter(p,o)
}i(q,function(t,r,s){if(p.call(o,t,r,s)){n.push(t)
}});
return n
};
m.reject=function(p,o,n){return m.filter(p,function(s,q,r){return !o.call(n,s,q,r)
},n)
};
m.every=m.all=function(q,p,o){p||(p=m.identity);
var n=true;
if(q==null){return n
}if(b&&q.every===b){return q.every(p,o)
}i(q,function(t,r,s){if(!(n=n&&p.call(o,t,r,s))){return d
}});
return !!n
};
var a=m.some=m.any=function(q,p,o){p||(p=m.identity);
var n=false;
if(q==null){return n
}if(P&&q.some===P){return q.some(p,o)
}i(q,function(t,r,s){if(n||(n=p.call(o,t,r,s))){return d
}});
return !!n
};
m.contains=m.include=function(o,n){if(o==null){return false
}if(N&&o.indexOf===N){return o.indexOf(n)!=-1
}return a(o,function(p){return p===n
})
};
m.invoke=function(p,q){var n=O.call(arguments,2);
var o=m.isFunction(q);
return m.map(p,function(r){return(o?q:r[q]).apply(r,n)
})
};
m.pluck=function(o,n){return m.map(o,function(p){return p[n]
})
};
m.where=function(o,n,p){if(m.isEmpty(n)){return p?void 0:[]
}return m[p?"find":"filter"](o,function(r){for(var q in n){if(n[q]!==r[q]){return false
}}return true
})
};
m.findWhere=function(o,n){return m.where(o,n,true)
};
m.max=function(q,p,o){if(!p&&m.isArray(q)&&q[0]===+q[0]&&q.length<65535){return Math.max.apply(Math,q)
}if(!p&&m.isEmpty(q)){return -Infinity
}var n={computed:-Infinity,value:-Infinity};
i(q,function(u,r,t){var s=p?p.call(o,u,r,t):u;
s>n.computed&&(n={value:u,computed:s})
});
return n.value
};
m.min=function(q,p,o){if(!p&&m.isArray(q)&&q[0]===+q[0]&&q.length<65535){return Math.min.apply(Math,q)
}if(!p&&m.isEmpty(q)){return Infinity
}var n={computed:Infinity,value:Infinity};
i(q,function(u,r,t){var s=p?p.call(o,u,r,t):u;
s<n.computed&&(n={value:u,computed:s})
});
return n.value
};
m.shuffle=function(q){var p;
var o=0;
var n=[];
i(q,function(r){p=m.random(o++);
n[o-1]=n[p];
n[p]=r
});
return n
};
m.sample=function(p,q,o){if(arguments.length<2||o){return p[m.random(p.length-1)]
}return m.shuffle(p).slice(0,Math.max(0,q))
};
var A=function(n){return m.isFunction(n)?n:function(o){return o[n]
}
};
m.sortBy=function(q,p,n){var o=A(p);
return m.pluck(m.map(q,function(t,r,s){return{value:t,index:r,criteria:o.call(n,t,r,s)}
}).sort(function(u,t){var s=u.criteria;
var r=t.criteria;
if(s!==r){if(s>r||s===void 0){return 1
}if(s<r||r===void 0){return -1
}}return u.index-t.index
}),"value")
};
var T=function(n){return function(s,r,p){var o={};
var q=r==null?m.identity:A(r);
i(s,function(v,t){var u=q.call(p,v,t,s);
n(o,u,v)
});
return o
}
};
m.groupBy=T(function(n,o,p){(m.has(n,o)?n[o]:(n[o]=[])).push(p)
});
m.indexBy=T(function(n,o,p){n[o]=p
});
m.countBy=T(function(n,o){m.has(n,o)?n[o]++:n[o]=1
});
m.sortedIndex=function(u,t,q,p){q=q==null?m.identity:A(q);
var s=q.call(p,t);
var n=0,r=u.length;
while(n<r){var o=(n+r)>>>1;
q.call(p,u[o])<s?n=o+1:r=o
}return n
};
m.toArray=function(n){if(!n){return[]
}if(m.isArray(n)){return O.call(n)
}if(n.length===+n.length){return m.map(n,m.identity)
}return m.values(n)
};
m.size=function(n){if(n==null){return 0
}return(n.length===+n.length)?n.length:m.keys(n).length
};
m.first=m.head=m.take=function(q,p,o){if(q==null){return void 0
}return(p==null)||o?q[0]:O.call(q,0,p)
};
m.initial=function(q,p,o){return O.call(q,0,q.length-((p==null)||o?1:p))
};
m.last=function(q,p,o){if(q==null){return void 0
}if((p==null)||o){return q[q.length-1]
}else{return O.call(q,Math.max(q.length-p,0))
}};
m.rest=m.tail=m.drop=function(q,p,o){return O.call(q,(p==null)||o?1:p)
};
m.compact=function(n){return m.filter(n,m.identity)
};
var X=function(o,p,n){if(p&&m.every(o,m.isArray)){return Y.apply(n,o)
}i(o,function(q){if(m.isArray(q)||m.isArguments(q)){p?h.apply(n,q):X(q,p,n)
}else{n.push(q)
}});
return n
};
m.flatten=function(o,n){return X(o,n,[])
};
m.without=function(n){return m.difference(n,O.call(arguments,1))
};
m.uniq=m.unique=function(t,s,r,q){if(m.isFunction(s)){q=r;
r=s;
s=false
}var o=r?m.map(t,r,q):t;
var p=[];
var n=[];
i(o,function(v,u){if(s?(!u||n[n.length-1]!==v):!m.contains(n,v)){n.push(v);
p.push(t[u])
}});
return p
};
m.union=function(){return m.uniq(m.flatten(arguments,true))
};
m.intersection=function(o){var n=O.call(arguments,1);
return m.filter(m.uniq(o),function(p){return m.every(n,function(q){return m.indexOf(q,p)>=0
})
})
};
m.difference=function(o){var n=Y.apply(c,O.call(arguments,1));
return m.filter(o,function(p){return !m.contains(n,p)
})
};
m.zip=function(){var p=m.max(m.pluck(arguments,"length").concat(0));
var o=new Array(p);
for(var n=0;
n<p;
n++){o[n]=m.pluck(arguments,""+n)
}return o
};
m.object=function(r,o){if(r==null){return{}
}var n={};
for(var p=0,q=r.length;
p<q;
p++){if(o){n[r[p]]=o[p]
}else{n[r[p][0]]=r[p][1]
}}return n
};
m.indexOf=function(r,p,q){if(r==null){return -1
}var n=0,o=r.length;
if(q){if(typeof q=="number"){n=(q<0?Math.max(0,o+q):q)
}else{n=m.sortedIndex(r,p);
return r[n]===p?n:-1
}}if(N&&r.indexOf===N){return r.indexOf(p,q)
}for(;
n<o;
n++){if(r[n]===p){return n
}}return -1
};
m.lastIndexOf=function(r,p,q){if(r==null){return -1
}var n=q!=null;
if(L&&r.lastIndexOf===L){return n?r.lastIndexOf(p,q):r.lastIndexOf(p)
}var o=(n?q:r.length);
while(o--){if(r[o]===p){return o
}}return -1
};
m.range=function(s,p,r){if(arguments.length<=1){p=s||0;
s=0
}r=arguments[2]||1;
var q=Math.max(Math.ceil((p-s)/r),0);
var n=0;
var o=new Array(q);
while(n<q){o[n++]=s;
s+=r
}return o
};
var g=function(){};
m.bind=function(q,o){var n,p;
if(f&&q.bind===f){return f.apply(q,O.call(arguments,1))
}if(!m.isFunction(q)){throw new TypeError
}n=O.call(arguments,2);
return p=function(){if(!(this instanceof p)){return q.apply(o,n.concat(O.call(arguments)))
}g.prototype=q.prototype;
var s=new g;
g.prototype=null;
var r=q.apply(s,n.concat(O.call(arguments)));
if(Object(r)===r){return r
}return s
}
};
m.partial=function(o){var n=O.call(arguments,1);
return function(){return o.apply(this,n.concat(O.call(arguments)))
}
};
m.bindAll=function(o){var n=O.call(arguments,1);
if(n.length===0){throw new Error("bindAll must be passed function names")
}i(n,function(p){o[p]=m.bind(o[p],o)
});
return o
};
m.memoize=function(p,o){var n={};
o||(o=m.identity);
return function(){var q=o.apply(this,arguments);
return m.has(n,q)?n[q]:(n[q]=p.apply(this,arguments))
}
};
m.delay=function(o,p){var n=O.call(arguments,2);
return setTimeout(function(){return o.apply(null,n)
},p)
};
m.defer=function(n){return m.delay.apply(m,[n,1].concat(O.call(arguments,1)))
};
m.throttle=function(o,q,u){var n,s,v;
var t=null;
var r=0;
u||(u={});
var p=function(){r=u.leading===false?0:new Date;
t=null;
v=o.apply(n,s)
};
return function(){var w=new Date;
if(!r&&u.leading===false){r=w
}var x=q-(w-r);
n=this;
s=arguments;
if(x<=0){clearTimeout(t);
t=null;
r=w;
v=o.apply(n,s)
}else{if(!t&&u.trailing!==false){t=setTimeout(p,x)
}}return v
}
};
m.debounce=function(r,u,o){var t,p,q,s,n;
return function(){q=this;
p=arguments;
s=new Date();
var w=function(){var x=(new Date())-s;
if(x<u){t=setTimeout(w,u-x)
}else{t=null;
if(!o){n=r.apply(q,p)
}}};
var v=o&&!t;
if(!t){t=setTimeout(w,u)
}if(v){n=r.apply(q,p)
}return n
}
};
m.once=function(p){var n=false,o;
return function(){if(n){return o
}n=true;
o=p.apply(this,arguments);
p=null;
return o
}
};
m.wrap=function(n,o){return function(){var p=[n];
h.apply(p,arguments);
return o.apply(this,p)
}
};
m.compose=function(){var n=arguments;
return function(){var o=arguments;
for(var p=n.length-1;
p>=0;
p--){o=[n[p].apply(this,o)]
}return o[0]
}
};
m.after=function(o,n){return function(){if(--o<1){return n.apply(this,arguments)
}}
};
m.keys=E||function(p){if(p!==Object(p)){throw new TypeError("Invalid object")
}var o=[];
for(var n in p){if(m.has(p,n)){o.push(n)
}}return o
};
m.values=function(r){var q=m.keys(r);
var p=q.length;
var n=new Array(p);
for(var o=0;
o<p;
o++){n[o]=r[q[o]]
}return n
};
m.pairs=function(r){var p=m.keys(r);
var o=p.length;
var q=new Array(o);
for(var n=0;
n<o;
n++){q[n]=[p[n],r[p[n]]]
}return q
};
m.invert=function(r){var n={};
var q=m.keys(r);
for(var o=0,p=q.length;
o<p;
o++){n[r[q[o]]]=q[o]
}return n
};
m.functions=m.methods=function(p){var o=[];
for(var n in p){if(m.isFunction(p[n])){o.push(n)
}}return o.sort()
};
m.extend=function(n){i(O.call(arguments,1),function(o){if(o){for(var p in o){n[p]=o[p]
}}});
return n
};
m.pick=function(o){var p={};
var n=Y.apply(c,O.call(arguments,1));
i(n,function(q){if(q in o){p[q]=o[q]
}});
return p
};
m.omit=function(p){var q={};
var o=Y.apply(c,O.call(arguments,1));
for(var n in p){if(!m.contains(o,n)){q[n]=p[n]
}}return q
};
m.defaults=function(n){i(O.call(arguments,1),function(o){if(o){for(var p in o){if(n[p]===void 0){n[p]=o[p]
}}}});
return n
};
m.clone=function(n){if(!m.isObject(n)){return n
}return m.isArray(n)?n.slice():m.extend({},n)
};
m.tap=function(o,n){n(o);
return o
};
var j=function(u,t,o,p){if(u===t){return u!==0||1/u==1/t
}if(u==null||t==null){return u===t
}if(u instanceof m){u=u._wrapped
}if(t instanceof m){t=t._wrapped
}var r=D.call(u);
if(r!=D.call(t)){return false
}switch(r){case"[object String]":return u==String(t);
case"[object Number]":return u!=+u?t!=+t:(u==0?1/u==1/t:u==+t);
case"[object Date]":case"[object Boolean]":return +u==+t;
case"[object RegExp]":return u.source==t.source&&u.global==t.global&&u.multiline==t.multiline&&u.ignoreCase==t.ignoreCase
}if(typeof u!="object"||typeof t!="object"){return false
}var n=o.length;
while(n--){if(o[n]==u){return p[n]==t
}}var s=u.constructor,q=t.constructor;
if(s!==q&&!(m.isFunction(s)&&(s instanceof s)&&m.isFunction(q)&&(q instanceof q))){return false
}o.push(u);
p.push(t);
var x=0,w=true;
if(r=="[object Array]"){x=u.length;
w=x==t.length;
if(w){while(x--){if(!(w=j(u[x],t[x],o,p))){break
}}}}else{for(var v in u){if(m.has(u,v)){x++;
if(!(w=m.has(t,v)&&j(u[v],t[v],o,p))){break
}}}if(w){for(v in t){if(m.has(t,v)&&!(x--)){break
}}w=!x
}}o.pop();
p.pop();
return w
};
m.isEqual=function(o,n){return j(o,n,[],[])
};
m.isEmpty=function(o){if(o==null){return true
}if(m.isArray(o)||m.isString(o)){return o.length===0
}for(var n in o){if(m.has(o,n)){return false
}}return true
};
m.isElement=function(n){return !!(n&&n.nodeType===1)
};
m.isArray=U||function(n){return D.call(n)=="[object Array]"
};
m.isObject=function(n){return n===Object(n)
};
i(["Arguments","Function","String","Number","Date","RegExp"],function(n){m["is"+n]=function(o){return D.call(o)=="[object "+n+"]"
}
});
if(!m.isArguments(arguments)){m.isArguments=function(n){return !!(n&&m.has(n,"callee"))
}
}if(typeof (/./)!=="function"){m.isFunction=function(n){return typeof n==="function"
}
}m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))
};
m.isNaN=function(n){return m.isNumber(n)&&n!=+n
};
m.isBoolean=function(n){return n===true||n===false||D.call(n)=="[object Boolean]"
};
m.isNull=function(n){return n===null
};
m.isUndefined=function(n){return n===void 0
};
m.has=function(o,n){return J.call(o,n)
};
m.noConflict=function(){W._=K;
return this
};
m.identity=function(n){return n
};
m.times=function(s,r,q){var o=Array(Math.max(0,s));
for(var p=0;
p<s;
p++){o[p]=r.call(q,p)
}return o
};
m.random=function(o,n){if(n==null){n=o;
o=0
}return o+Math.floor(Math.random()*(n-o+1))
};
var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};
M.unescape=m.invert(M.escape);
var k={escape:new RegExp("["+m.keys(M.escape).join("")+"]","g"),unescape:new RegExp("("+m.keys(M.unescape).join("|")+")","g")};
m.each(["escape","unescape"],function(n){m[n]=function(o){if(o==null){return""
}return(""+o).replace(k[n],function(p){return M[n][p]
})
}
});
m.result=function(n,p){if(n==null){return void 0
}var o=n[p];
return m.isFunction(o)?o.call(n):o
};
m.mixin=function(n){i(m.functions(n),function(o){var p=m[o]=n[o];
m.prototype[o]=function(){var q=[this._wrapped];
h.apply(q,arguments);
return S.call(this,p.apply(m,q))
}
})
};
var Z=0;
m.uniqueId=function(n){var o=++Z+"";
return n?n+o:o
};
m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var V=/(.)^/;
var H={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var I=/\\|'|\r|\n|\t|\u2028|\u2029/g;
m.template=function(v,q,p){var o;
p=m.defaults({},p,m.templateSettings);
var r=new RegExp([(p.escape||V).source,(p.interpolate||V).source,(p.evaluate||V).source].join("|")+"|$","g");
var s=0;
var n="__p+='";
v.replace(r,function(x,y,w,AA,z){n+=v.slice(s,z).replace(I,function(AB){return"\\"+H[AB]
});
if(y){n+="'+\n((__t=("+y+"))==null?'':_.escape(__t))+\n'"
}if(w){n+="'+\n((__t=("+w+"))==null?'':__t)+\n'"
}if(AA){n+="';\n"+AA+"\n__p+='"
}s=z+x.length;
return x
});
n+="';\n";
if(!p.variable){n="with(obj||{}){\n"+n+"}\n"
}n="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+n+"return __p;\n";
try{o=new Function(p.variable||"obj","_",n)
}catch(t){t.source=n;
throw t
}if(q){return o(q,m)
}var u=function(w){return o.call(this,w,m)
};
u.source="function("+(p.variable||"obj")+"){\n"+n+"}";
return u
};
m.chain=function(n){return m(n).chain()
};
var S=function(n){return this._chain?m(n).chain():n
};
m.mixin(m);
i(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var o=c[n];
m.prototype[n]=function(){var p=this._wrapped;
o.apply(p,arguments);
if((n=="shift"||n=="splice")&&p.length===0){delete p[0]
}return S.call(this,p)
}
});
i(["concat","join","slice"],function(n){var o=c[n];
m.prototype[n]=function(){return S.call(this,o.apply(this._wrapped,arguments))
}
});
m.extend(m.prototype,{chain:function(){this._chain=true;
return this
},value:function(){return this._wrapped
}})
}).call(this);
function getGlobal(){return function(){return this.dust
}.call(null)
}var dust={};
(function(dust){function Context(e,t,n,r){this.stack=e,this.global=t,this.blocks=n,this.templateName=r
}function Stack(e,t,n,r){this.tail=t,this.isObject=!dust.isArray(e)&&e&&typeof e=="object",this.head=e,this.index=n,this.of=r
}function Stub(e){this.head=new Chunk(this),this.callback=e,this.out=""
}function Stream(){this.head=new Chunk(this)
}function Chunk(e,t,n){this.root=e,this.next=t,this.data=[],this.flushable=!1,this.taps=n
}function Tap(e,t){this.head=e,this.tail=t
}if(!dust){return 
}var ERROR="ERROR",WARN="WARN",INFO="INFO",DEBUG="DEBUG",levels=[DEBUG,INFO,WARN,ERROR],logger=function(){};
dust.isDebug=!1,dust.debugLevel=INFO,typeof window!="undefined"&&window&&window.console&&window.console.log?logger=window.console.log:typeof console!="undefined"&&console&&console.log&&(logger=console.log),dust.log=function(e,t){var t=t||INFO;
dust.isDebug&&levels.indexOf(t)>=levels.indexOf(dust.debugLevel)&&(dust.logQueue||(dust.logQueue=[]),dust.logQueue.push({message:e,type:t}),logger.call(console||window.console,"[DUST "+t+"]: "+e))
},dust.onError=function(e,t){dust.log(e.message||e,ERROR);
if(dust.isDebug){throw e
}return t
},dust.helpers={},dust.cache={},dust.register=function(e,t){if(!e){return 
}dust.cache[e]=t
},dust.render=function(e,t,n){var r=(new Stub(n)).head;
try{dust.load(e,r,Context.wrap(t,e)).end()
}catch(i){dust.onError(i,r)
}},dust.stream=function(e,t){var n=new Stream;
return dust.nextTick(function(){try{dust.load(e,n.head,Context.wrap(t,e)).end()
}catch(r){dust.onError(r,n.head)
}}),n
},dust.renderSource=function(e,t,n){return dust.compileFn(e)(t,n)
},dust.compileFn=function(e,t){var n=dust.loadSource(dust.compile(e,t));
return function(e,r){var i=r?new Stub(r):new Stream;
return dust.nextTick(function(){typeof n=="function"?n(i.head,Context.wrap(e,t)).end():dust.onError(new Error("Template ["+t+"] cannot be resolved to a Dust function"))
}),i
}
},dust.load=function(e,t,n){var r=dust.cache[e];
return r?r(t,n):dust.onLoad?t.map(function(t){dust.onLoad(e,function(r,i){if(r){return t.setError(r)
}dust.cache[e]||dust.loadSource(dust.compile(i,e)),dust.cache[e](t,n).end()
})
}):t.setError(new Error("Template Not Found: "+e))
},dust.loadSource=function(source,path){return eval(source)
},Array.isArray?dust.isArray=Array.isArray:dust.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"
},dust.nextTick=function(){return typeof process!="undefined"?process.nextTick:function(e){setTimeout(e,0)
}
}(),dust.isEmpty=function(e){return dust.isArray(e)&&!e.length?!0:e===0?!1:!e
},dust.filter=function(e,t,n){if(n){for(var r=0,i=n.length;
r<i;
r++){var s=n[r];
s==="s"?(t=null,dust.log("Using unescape filter on ["+e+"]",DEBUG)):typeof dust.filters[s]=="function"?e=dust.filters[s](e):dust.onError(new Error("Invalid filter ["+s+"]"))
}}return t&&(e=dust.filters[t](e)),e
},dust.filters={h:function(e){return dust.escapeHtml(e)
},j:function(e){return dust.escapeJs(e)
},u:encodeURI,uc:encodeURIComponent,js:function(e){return JSON?JSON.stringify(e):(dust.log("JSON is undefined.  JSON stringify has not been used on ["+e+"]",WARN),e)
},jp:function(e){return JSON?JSON.parse(e):(dust.log("JSON is undefined.  JSON parse has not been used on ["+e+"]",WARN),e)
}},dust.makeBase=function(e){return new Context(new Stack,e)
},Context.wrap=function(e,t){return e instanceof Context?e:new Context(new Stack(e),{},null,t)
},Context.prototype.get=function(e,t){return typeof e=="string"&&(e[0]==="."&&(t=!0,e=e.substr(1)),e=e.split(".")),this._get(t,e)
},Context.prototype._get=function(e,t){var n=this.stack,r=1,i,s,o,u;
dust.log("Searching for reference [{"+t.join(".")+"}] in template ["+this.templateName+"]",DEBUG),s=t[0],o=t.length;
if(e&&o===0){u=n,n=n.head
}else{if(!e){while(n){if(n.isObject){u=n.head,i=n.head[s];
if(i!==undefined){break
}}n=n.tail
}i!==undefined?n=i:n=this.global?this.global[s]:undefined
}else{n=n.head[s]
}while(n&&r<o){u=n,n=n[t[r]],r++
}}if(typeof n=="function"){var a=function(){return n.apply(u,arguments)
};
return a.isFunction=!0,a
}return n===undefined&&dust.log("Cannot find the value for reference [{"+t.join(".")+"}] in template ["+this.templateName+"]"),n
},Context.prototype.getPath=function(e,t){return this._get(e,t)
},Context.prototype.push=function(e,t,n){return new Context(new Stack(e,this.stack,t,n),this.global,this.blocks,this.templateName)
},Context.prototype.rebase=function(e){return new Context(new Stack(e),this.global,this.blocks,this.templateName)
},Context.prototype.current=function(){return this.stack.head
},Context.prototype.getBlock=function(e,t,n){if(typeof e=="function"){var r=new Chunk;
e=e(r,this).data.join("")
}var i=this.blocks;
if(!i){dust.log("No blocks for context[{"+e+"}] in template ["+this.templateName+"]",DEBUG);
return 
}var s=i.length,o;
while(s--){o=i[s][e];
if(o){return o
}}},Context.prototype.shiftBlocks=function(e){var t=this.blocks,n;
return e?(t?n=t.concat([e]):n=[e],new Context(this.stack,this.global,n,this.templateName)):this
},Stub.prototype.flush=function(){var e=this.head;
while(e){if(!e.flushable){if(e.error){this.callback(e.error),dust.onError(new Error("Chunk error ["+e.error+"] thrown. Ceasing to render this template.")),this.flush=function(){};
return 
}return 
}this.out+=e.data.join(""),e=e.next,this.head=e
}this.callback(null,this.out)
},Stream.prototype.flush=function(){var e=this.head;
while(e){if(!e.flushable){if(e.error){this.emit("error",e.error),dust.onError(new Error("Chunk error ["+e.error+"] thrown. Ceasing to render this template.")),this.flush=function(){};
return 
}return 
}this.emit("data",e.data.join("")),e=e.next,this.head=e
}this.emit("end")
},Stream.prototype.emit=function(e,t){if(!this.events){return dust.log("No events to emit",INFO),!1
}var n=this.events[e];
if(!n){return dust.log("Event type ["+e+"] does not exist",WARN),!1
}if(typeof n=="function"){n(t)
}else{if(dust.isArray(n)){var r=n.slice(0);
for(var i=0,s=r.length;
i<s;
i++){r[i](t)
}}else{dust.onError(new Error("Event Handler ["+n+"] is not of a type that is handled by emit"))
}}},Stream.prototype.on=function(e,t){return this.events||(this.events={}),this.events[e]?typeof this.events[e]=="function"?this.events[e]=[this.events[e],t]:this.events[e].push(t):(dust.log("Event type ["+e+"] does not exist. Using just the specified callback.",WARN),t?this.events[e]=t:dust.log("Callback for type ["+e+"] does not exist. Listener not registered.",WARN)),this
},Stream.prototype.pipe=function(e){return this.on("data",function(t){try{e.write(t,"utf8")
}catch(n){dust.onError(n,e.head)
}}).on("end",function(){try{return e.end()
}catch(t){dust.onError(t,e.head)
}}).on("error",function(t){e.error(t)
}),this
},Chunk.prototype.write=function(e){var t=this.taps;
return t&&(e=t.go(e)),this.data.push(e),this
},Chunk.prototype.end=function(e){return e&&this.write(e),this.flushable=!0,this.root.flush(),this
},Chunk.prototype.map=function(e){var t=new Chunk(this.root,this.next,this.taps),n=new Chunk(this.root,t,this.taps);
return this.next=n,this.flushable=!0,e(n),t
},Chunk.prototype.tap=function(e){var t=this.taps;
return t?this.taps=t.push(e):this.taps=new Tap(e),this
},Chunk.prototype.untap=function(){return this.taps=this.taps.tail,this
},Chunk.prototype.render=function(e,t){return e(this,t)
},Chunk.prototype.reference=function(e,t,n,r){if(typeof e=="function"){e.isFunction=!0,e=e.apply(t.current(),[this,t,null,{auto:n,filters:r}]);
if(e instanceof Chunk){return e
}}return dust.isEmpty(e)?this:this.write(dust.filter(e,n,r))
},Chunk.prototype.section=function(e,t,n,r){if(typeof e=="function"){e=e.apply(t.current(),[this,t,n,r]);
if(e instanceof Chunk){return e
}}var i=n.block,s=n["else"];
r&&(t=t.push(r));
if(dust.isArray(e)){if(i){var o=e.length,u=this;
if(o>0){t.stack.head&&(t.stack.head.$len=o);
for(var a=0;
a<o;
a++){t.stack.head&&(t.stack.head.$idx=a),u=i(u,t.push(e[a],a,o))
}return t.stack.head&&(t.stack.head.$idx=undefined,t.stack.head.$len=undefined),u
}if(s){return s(this,t)
}}}else{if(e===!0){if(i){return i(this,t)
}}else{if(e||e===0){if(i){return i(this,t.push(e))
}}else{if(s){return s(this,t)
}}}}return dust.log("Not rendering section (#) block in template ["+t.templateName+"], because above key was not found",DEBUG),this
},Chunk.prototype.exists=function(e,t,n){var r=n.block,i=n["else"];
if(!dust.isEmpty(e)){if(r){return r(this,t)
}}else{if(i){return i(this,t)
}}return dust.log("Not rendering exists (?) block in template ["+t.templateName+"], because above key was not found",DEBUG),this
},Chunk.prototype.notexists=function(e,t,n){var r=n.block,i=n["else"];
if(dust.isEmpty(e)){if(r){return r(this,t)
}}else{if(i){return i(this,t)
}}return dust.log("Not rendering not exists (^) block check in template ["+t.templateName+"], because above key was found",DEBUG),this
},Chunk.prototype.block=function(e,t,n){var r=n.block;
return e&&(r=e),r?r(this,t):this
},Chunk.prototype.partial=function(e,t,n){var r;
r=dust.makeBase(t.global),r.blocks=t.blocks,t.stack&&t.stack.tail&&(r.stack=t.stack.tail),n&&(r=r.push(n)),typeof e=="string"&&(r.templateName=e),r=r.push(t.stack.head);
var i;
return typeof e=="function"?i=this.capture(e,r,function(e,t){dust.load(e,t,r).end()
}):i=dust.load(e,this,r),i
},Chunk.prototype.helper=function(e,t,n,r){var i=this;
try{return dust.helpers[e]?dust.helpers[e](i,t,n,r):dust.onError(new Error("Invalid helper ["+e+"]"),i)
}catch(s){return dust.onError(s,i)
}},Chunk.prototype.capture=function(e,t,n){return this.map(function(r){var i=new Stub(function(e,t){e?r.setError(e):n(t,r)
});
e(i.head,t).end()
})
},Chunk.prototype.setError=function(e){return this.error=e,this.root.flush(),this
},Tap.prototype.push=function(e){return new Tap(e,this)
},Tap.prototype.go=function(e){var t=this;
while(t){e=t.head(e),t=t.tail
}return e
};
var HCHARS=new RegExp(/[&<>\"\']/),AMP=/&/g,LT=/</g,GT=/>/g,QUOT=/\"/g,SQUOT=/\'/g;
dust.escapeHtml=function(e){return typeof e=="string"?HCHARS.test(e)?e.replace(AMP,"&amp;").replace(LT,"&lt;").replace(GT,"&gt;").replace(QUOT,"&quot;").replace(SQUOT,"&#39;"):e:e
};
var BS=/\\/g,FS=/\//g,CR=/\r/g,LS=/\u2028/g,PS=/\u2029/g,NL=/\n/g,LF=/\f/g,SQ=/'/g,DQ=/"/g,TB=/\t/g;
dust.escapeJs=function(e){return typeof e=="string"?e.replace(BS,"\\\\").replace(FS,"\\/").replace(DQ,'\\"').replace(SQ,"\\'").replace(CR,"\\r").replace(LS,"\\u2028").replace(PS,"\\u2029").replace(NL,"\\n").replace(LF,"\\f").replace(TB,"\\t"):e
}
})(dust),typeof exports!="undefined"&&(typeof process!="undefined"&&require("./server")(dust),module.exports=dust);
(function(dust){var _console=(typeof console!=="undefined")?console:{log:function(){}};
function isSelect(context){var value=context.current();
return typeof value==="object"&&value.isSelect===true
}function jsonFilter(key,value){if(typeof value==="function"){return value.toString()
}return value
}function filter(chunk,context,bodies,params,filterOp){params=params||{};
var body=bodies.block,actualKey,expectedValue,filterOpType=params.filterOpType||"";
if(typeof params.key!=="undefined"){actualKey=dust.helpers.tap(params.key,chunk,context)
}else{if(isSelect(context)){actualKey=context.current().selectKey;
if(context.current().isResolved){filterOp=function(){return false
}
}}else{_console.log("No key specified for filter in:"+filterOpType+" helper ");
return chunk
}}expectedValue=dust.helpers.tap(params.value,chunk,context);
if(filterOp(coerce(expectedValue,params.type,context),coerce(actualKey,params.type,context))){if(isSelect(context)){context.current().isResolved=true
}if(body){return chunk.render(body,context)
}else{_console.log("Missing body block in the "+filterOpType+" helper ");
return chunk
}}else{if(bodies["else"]){return chunk.render(bodies["else"],context)
}}return chunk
}function coerce(value,type,context){if(value){switch(type||typeof (value)){case"number":return +value;
case"string":return String(value);
case"boolean":value=(value==="false"?false:value);
return Boolean(value);
case"date":return new Date(value);
case"context":return context.get(value)
}}return value
}var helpers={tap:function(input,chunk,context){var output=input;
if(typeof input==="function"){if(input.isFunction===true){output=input()
}else{output="";
chunk.tap(function(data){output+=data;
return""
}).render(input,context).untap();
if(output===""){output=false
}}}return output
},sep:function(chunk,context,bodies){var body=bodies.block;
if(context.stack.index===context.stack.of-1){return chunk
}if(body){return bodies.block(chunk,context)
}else{return chunk
}},idx:function(chunk,context,bodies){var body=bodies.block;
if(body){return bodies.block(chunk,context.push(context.stack.index))
}else{return chunk
}},contextDump:function(chunk,context,bodies,params){var p=params||{},to=p.to||"output",key=p.key||"current",dump;
to=dust.helpers.tap(to,chunk,context),key=dust.helpers.tap(key,chunk,context);
if(key==="full"){dump=JSON.stringify(context.stack,jsonFilter,2)
}else{dump=JSON.stringify(context.stack.head,jsonFilter,2)
}if(to==="console"){_console.log(dump);
return chunk
}else{return chunk.write(dump)
}},"if":function(chunk,context,bodies,params){var body=bodies.block,skip=bodies["else"];
if(params&&params.cond){var cond=params.cond;
cond=dust.helpers.tap(cond,chunk,context);
if(eval(cond)){if(body){return chunk.render(bodies.block,context)
}else{_console.log("Missing body block in the if helper!");
return chunk
}}if(skip){return chunk.render(bodies["else"],context)
}}else{_console.log("No condition given in the if helper!")
}return chunk
},math:function(chunk,context,bodies,params){if(params&&typeof params.key!=="undefined"&&params.method){var key=params.key,method=params.method,operand=params.operand,round=params.round,mathOut=null,operError=function(){_console.log("operand is required for this math method");
return null
};
key=dust.helpers.tap(key,chunk,context);
operand=dust.helpers.tap(operand,chunk,context);
switch(method){case"mod":if(operand===0||operand===-0){_console.log("operand for divide operation is 0/-0: expect Nan!")
}mathOut=parseFloat(key)%parseFloat(operand);
break;
case"add":mathOut=parseFloat(key)+parseFloat(operand);
break;
case"subtract":mathOut=parseFloat(key)-parseFloat(operand);
break;
case"multiply":mathOut=parseFloat(key)*parseFloat(operand);
break;
case"divide":if(operand===0||operand===-0){_console.log("operand for divide operation is 0/-0: expect Nan/Infinity!")
}mathOut=parseFloat(key)/parseFloat(operand);
break;
case"ceil":mathOut=Math.ceil(parseFloat(key));
break;
case"floor":mathOut=Math.floor(parseFloat(key));
break;
case"round":mathOut=Math.round(parseFloat(key));
break;
case"abs":mathOut=Math.abs(parseFloat(key));
break;
default:_console.log("method passed is not supported")
}if(mathOut!==null){if(round){mathOut=Math.round(mathOut)
}if(bodies&&bodies.block){return chunk.render(bodies.block,context.push({isSelect:true,isResolved:false,selectKey:mathOut}))
}else{return chunk.write(mathOut)
}}else{return chunk
}}else{_console.log("Key is a required parameter for math helper along with method/operand!")
}return chunk
},select:function(chunk,context,bodies,params){var body=bodies.block;
if(params&&typeof params.key!=="undefined"){var key=dust.helpers.tap(params.key,chunk,context);
if(body){return chunk.render(bodies.block,context.push({isSelect:true,isResolved:false,selectKey:key}))
}else{_console.log("Missing body block in the select helper ");
return chunk
}}else{_console.log("No key given in the select helper!")
}return chunk
},eq:function(chunk,context,bodies,params){if(params){params.filterOpType="eq"
}return filter(chunk,context,bodies,params,function(expected,actual){return actual===expected
})
},ne:function(chunk,context,bodies,params){if(params){params.filterOpType="ne";
return filter(chunk,context,bodies,params,function(expected,actual){return actual!==expected
})
}return chunk
},lt:function(chunk,context,bodies,params){if(params){params.filterOpType="lt";
return filter(chunk,context,bodies,params,function(expected,actual){return actual<expected
})
}},lte:function(chunk,context,bodies,params){if(params){params.filterOpType="lte";
return filter(chunk,context,bodies,params,function(expected,actual){return actual<=expected
})
}return chunk
},gt:function(chunk,context,bodies,params){if(params){params.filterOpType="gt";
return filter(chunk,context,bodies,params,function(expected,actual){return actual>expected
})
}return chunk
},gte:function(chunk,context,bodies,params){if(params){params.filterOpType="gte";
return filter(chunk,context,bodies,params,function(expected,actual){return actual>=expected
})
}return chunk
},"default":function(chunk,context,bodies,params){if(params){params.filterOpType="default"
}return filter(chunk,context,bodies,params,function(expected,actual){return true
})
},size:function(chunk,context,bodies,params){var key,value=0,nr,k;
params=params||{};
key=params.key;
if(!key||key===true){value=0
}else{if(dust.isArray(key)){value=key.length
}else{if(!isNaN(parseFloat(key))&&isFinite(key)){value=key
}else{if(typeof key==="object"){nr=0;
for(k in key){if(Object.hasOwnProperty.call(key,k)){nr++
}}value=nr
}else{value=(key+"").length
}}}}return chunk.write(value)
}};
dust.helpers=helpers
})(typeof exports!=="undefined"?module.exports=require("dustjs-linkedin"):dust);
(function(A,C,B){(function(D){"function"==typeof define&&define.amd?define(["jquery","imagesloaded"],D):jQuery&&!jQuery.fn.qtip&&D(jQuery)
})(function(AO){function AP(E,G,D,F){this.id=D,this.target=E,this.tooltip=A3,this.elements=elements={target:E},this._id=BD+"-"+D,this.timers={img:{}},this.options=G,this.plugins={},this.cache=cache={event:{},target:AO(),disabled:An,attr:F,onTooltip:An,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=An
}function AK(D){return D===A3||"object"!==AO.type(D)
}function Ad(D){return !(AO.isFunction(D)||D&&D.attr||D.length||"object"===AO.type(D)&&(D.jquery||D.then))
}function AV(E){var G,D,F,H;
return AK(E)?An:(AK(E.metadata)&&(E.metadata={type:E.metadata}),"content" in E&&(G=E.content,AK(G)||G.jquery||G.done?G=E.content={text:D=Ad(G)?An:G}:D=G.text,"ajax" in G&&(F=G.ajax,H=F&&F.once!==An,delete G.ajax,G.text=function(J,L){var K=D||AO(this).attr(L.options.content.attr)||"Loading...",I=AO.ajax(AO.extend({},F,{context:L})).then(F.success,A3,F.error).then(function(M){return M&&H&&L.set("content.text",M),M
},function(N,M,O){L.destroyed||0===N.status||L.set("content.text",M+": "+O)
});
return H?K:(L.set("content.text",K),I)
}),"title" in G&&(AK(G.title)||(G.button=G.title.button,G.title=G.title.text),Ad(G.title||An)&&(G.title=An))),"position" in E&&AK(E.position)&&(E.position={my:E.position,at:E.position}),"show" in E&&AK(E.show)&&(E.show=E.show.jquery?{target:E.show}:E.show===Au?{ready:Au}:{event:E.show}),"hide" in E&&AK(E.hide)&&(E.hide=E.hide.jquery?{target:E.hide}:{event:E.hide}),"style" in E&&AK(E.style)&&(E.style={classes:E.style}),AO.each(At,function(){this.sanitize&&this.sanitize(E)
}),E)
}function AS(E,G){for(var D,F=0,H=E,I=G.split(".");
H=H[I[F++]];
){I.length>F&&(D=H)
}return[D||E,I.pop()]
}function Aa(E,G){var D,F,H;
for(D in this.checks){for(F in this.checks[D]){(H=RegExp(F,"i").exec(E))&&(G.push(H),("builtin"===D||this.plugins[D])&&this.checks[D][F].apply(this.plugins[D]||this,G))
}}}function AN(D){return A0.concat("").join(D?"-"+D+" ":" ")
}function AZ(D){if(this.tooltip.hasClass(A5)){return An
}clearTimeout(this.timers.show),clearTimeout(this.timers.hide);
var E=AO.proxy(function(){this.toggle(Au,D)
},this);
this.options.show.delay>0?this.timers.show=setTimeout(E,this.options.show.delay):E()
}function AJ(E){if(this.tooltip.hasClass(A5)){return An
}var H=AO(E.relatedTarget),D=H.closest(A1)[0]===this.tooltip[0],F=H[0]===this.options.show.target[0];
if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==H[0]&&"mouse"===this.options.position.target&&D||this.options.hide.fixed&&/mouse(out|leave|move)/.test(E.type)&&(D||F)){try{E.preventDefault(),E.stopImmediatePropagation()
}catch(I){}}else{var G=AO.proxy(function(){this.toggle(An,E)
},this);
this.options.hide.delay>0?this.timers.hide=setTimeout(G,this.options.hide.delay):G()
}}function AY(D){return this.tooltip.hasClass(A5)||!this.options.hide.inactive?An:(clearTimeout(this.timers.inactive),this.timers.inactive=setTimeout(AO.proxy(function(){this.hide(D)
},this),this.options.hide.inactive),B)
}function AX(D){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(D)
}function AQ(E,D,F){AO(C.body).delegate(E,(D.split?D:D.join(BH+" "))+BH,function(){var G=Al.api[AO.attr(this,Ag)];
G&&!G.disabled&&F.apply(G,arguments)
})
}function AI(P,H,Q){var D,M,G,L,E,K=AO(C.body),O=P[0]===C?K:P,J=P.metadata?P.metadata(Q.metadata):A3,I="html5"===Q.metadata.type&&J?J[Q.metadata.name]:A3,F=P.data(Q.metadata.name||"qtipopts");
try{F="string"==typeof F?AO.parseJSON(F):F
}catch(N){}if(L=AO.extend(Au,{},Al.defaults,Q,"object"==typeof F?AV(F):A3,AV(I||J)),M=L.position,L.id=H,"boolean"==typeof L.content.text){if(G=P.attr(L.content.attr),L.content.attr===An||!G){return An
}L.content.text=G
}if(M.container.length||(M.container=K),M.target===An&&(M.target=O),L.show.target===An&&(L.show.target=O),L.show.solo===Au&&(L.show.solo=M.container.closest("body")),L.hide.target===An&&(L.hide.target=O),L.position.viewport===Au&&(L.position.viewport=M.container),M.container=M.container.eq(0),M.at=new AU(M.at,Au),M.my=new AU(M.my),P.data(BD)){if(L.overwrite){P.qtip("destroy")
}else{if(L.overwrite===An){return An
}}}return P.attr(Ah,H),L.suppress&&(E=P.attr("title"))&&P.removeAttr("title").attr(AR,E).attr("title",""),D=new AP(P,L,H,!!G),P.data(BD,D),P.one("remove.qtip-"+H+" removeqtip.qtip-"+H,function(){var R;
(R=AO(this).data(BD))&&R.destroy()
}),D
}function AF(D){return D.charAt(0).toUpperCase()+D.slice(1)
}function Ac(F,H){var E,I,J=H.charAt(0).toUpperCase()+H.slice(1),G=(H+" "+AD.join(J+" ")+J).split(" "),D=0;
if(BB[H]){return F.css(BB[H])
}for(;
E=G[D++];
){if((I=F.css(E))!==B){return BB[H]=E,I
}}}function AH(D,E){return parseInt(Ac(D,E),10)
}function AG(D,E){this._ns="tip",this.options=E,this.offset=E.offset,this.size=[E.width,E.height],this.init(this.qtip=D)
}function Ae(D,E){this.options=E,this._ns="-modal",this.init(this.qtip=D)
}function AM(D){this._ns="ie6",this.init(this.qtip=D)
}var Al,A6,AU,AE,Ai,Au=!0,An=!1,A3=null,Ar="x",Ao="y",Ay="width",AT="height",A7="top",Av="left",Aq="bottom",Aj="right",A4="center",A8="flipinvert",A2="shift",At={},BD="qtip",Ah="data-hasqtip",Ag="data-qtip-id",A0=["ui-widget","ui-tooltip"],A1="."+BD,Ak="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),Ap=BD+"-fixed",Ax=BD+"-default",Aw=BD+"-focus",Af=BD+"-hover",A5=BD+"-disabled",s="_replacedByqTip",AR="oldtitle";
BROWSER={ie:function(){for(var E=3,D=C.createElement("div");
(D.innerHTML="<!--[if gt IE "+ ++E+"]><i></i><![endif]-->")&&D.getElementsByTagName("i")[0];
){}return E>4?E:0/0
}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||An},A6=AP.prototype,A6.render=function(M){if(this.rendered||this.destroyed){return this
}var J=this,H=this.options,N=this.cache,F=this.elements,D=H.content.text,L=H.content.title,I=H.content.button,G=H.position,K="."+this._id+" ",E=[];
return AO.attr(this.target[0],"aria-describedby",this._id),this.tooltip=F.tooltip=tooltip=AO("<div/>",{id:this._id,"class":[BD,Ax,H.style.classes,BD+"-pos-"+H.position.my.abbrev()].join(" "),width:H.style.width||"",height:H.style.height||"",tracking:"mouse"===G.target&&G.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":An,"aria-describedby":this._id+"-content","aria-hidden":Au}).toggleClass(A5,this.disabled).attr(Ag,this.id).data(BD,this).appendTo(G.container).append(F.content=AO("<div />",{"class":BD+"-content",id:this._id+"-content","aria-atomic":Au})),this.rendered=-1,this.positioning=Au,L&&(this._createTitle(),AO.isFunction(L)||E.push(this._updateTitle(L,An))),I&&this._createButton(),AO.isFunction(D)||E.push(this._updateContent(D,An)),this.rendered=Au,this._setWidget(),AO.each(H.events,function(O,P){AO.isFunction(P)&&tooltip.bind(("toggle"===O?["tooltipshow","tooltiphide"]:["tooltip"+O]).join(K)+K,P)
}),AO.each(At,function(P){var O;
"render"===this.initialize&&(O=this(J))&&(J.plugins[P]=O)
}),this._assignEvents(),AO.when.apply(AO,E).then(function(){J._trigger("render"),J.positioning=An,J.hiddenDuringWait||!H.show.ready&&!M||J.toggle(Au,N.event,An),J.hiddenDuringWait=An
}),Al.api[this.id]=this,this
},A6.destroy=function(D){function E(){if(!this.destroyed){this.destroyed=Au;
var F=this.target,G=F.attr(AR);
this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),AO.each(this.plugins,function(){this.destroy&&this.destroy()
}),clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this._unassignEvents(),F.removeData(BD).removeAttr(Ag).removeAttr("aria-describedby"),this.options.suppress&&G&&F.attr("title",G).removeAttr(AR),this._unbind(F),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=A3,delete Al.api[this.id]
}}return this.destroyed?this.target:(D!==Au&&this.rendered?(tooltip.one("tooltiphidden",AO.proxy(E,this)),!this.triggering&&this.hide()):E.call(this),this.target)
},AE=A6.checks={builtin:{"^id$":function(E,H,D,F){var I=D===Au?Al.nextid:D,G=BD+"-"+I;
I!==An&&I.length>0&&!AO("#"+G).length?(this._id=G,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):E[H]=F
},"^prerender":function(E,F,D){D&&!this.rendered&&this.render(this.options.show.ready)
},"^content.text$":function(E,F,D){this._updateContent(D)
},"^content.attr$":function(E,G,D,F){this.options.content.text===this.target.attr(F)&&this._updateContent(this.target.attr(D))
},"^content.title$":function(E,F,D){return D?(D&&!this.elements.title&&this._createTitle(),this._updateTitle(D),B):this._removeTitle()
},"^content.button$":function(E,F,D){this._updateButton(D)
},"^content.title.(text|button)$":function(E,F,D){this.set("content."+F,D)
},"^position.(my|at)$":function(E,F,D){"string"==typeof D&&(E[F]=new AU(D,"at"===F))
},"^position.container$":function(E,F,D){this.tooltip.appendTo(D)
},"^show.ready$":function(E,F,D){D&&(!this.rendered&&this.render(Au)||this.toggle(Au))
},"^style.classes$":function(E,G,D,F){this.tooltip.removeClass(F).addClass(D)
},"^style.width|height":function(E,F,D){this.tooltip.css(F,D)
},"^style.widget|content.title":function(){this._setWidget()
},"^style.def":function(E,F,D){this.tooltip.toggleClass(Ax,!!D)
},"^events.(render|show|move|hide|focus|blur)$":function(E,F,D){tooltip[(AO.isFunction(D)?"":"un")+"bind"]("tooltip"+F,D)
},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var D=this.options.position;
tooltip.attr("tracking","mouse"===D.target&&D.adjust.mouse),this._unassignEvents(),this._assignEvents()
}}},A6.get=function(E){if(this.destroyed){return this
}var F=AS(this.options,E.toLowerCase()),D=F[0][F[1]];
return D.precedance?D.string():D
};
var BC=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,AW=/^prerender|show\.ready/i;
A6.set=function(F,H){if(this.destroyed){return this
}var E,I=this.rendered,G=An,D=this.options;
return this.checks,"string"==typeof F?(E=F,F={},F[E]=H):F=AO.extend({},F),AO.each(F,function(L,J){if(!I&&!AW.test(L)){return delete F[L],B
}var K,M=AS(D,L.toLowerCase());
K=M[0][M[1]],M[0][M[1]]=J&&J.nodeType?AO(J):J,G=BC.test(L)||G,F[L]=[M[0],M[1],J,K]
}),AV(D),this.positioning=Au,AO.each(F,AO.proxy(Aa,this)),this.positioning=An,this.rendered&&this.tooltip[0].offsetWidth>0&&G&&this.reposition("mouse"===D.position.target?A3:this.cache.event),this
},A6._update=function(E,G){var D=this,F=this.cache;
return this.rendered&&E?(AO.isFunction(E)&&(E=E.call(this.elements.target,F.event,this)||""),AO.isFunction(E.then)?(F.waiting=Au,E.then(function(H){return F.waiting=An,D._update(H,G)
},A3,function(H){return D._update(H,G)
})):E===An||!E&&""!==E?An:(E.jquery&&E.length>0?G.children().detach().end().append(E.css({display:"block"})):G.html(E),F.waiting=Au,(AO.fn.imagesLoaded?G.imagesLoaded():AO.Deferred().resolve(AO([]))).done(function(H){F.waiting=An,H.length&&D.rendered&&D.tooltip[0].offsetWidth>0&&D.reposition(F.event,!H.length)
}).promise())):An
},A6._updateContent=function(D,E){this._update(D,this.elements.content,E)
},A6._updateTitle=function(D,E){this._update(D,this.elements.title,E)===An&&this._removeTitle(An)
},A6._createTitle=function(){var D=this.elements,E=this._id+"-title";
D.titlebar&&this._removeTitle(),D.titlebar=AO("<div />",{"class":BD+"-titlebar "+(this.options.style.widget?AN("header"):"")}).append(D.title=AO("<div />",{id:E,"class":BD+"-title","aria-atomic":Au})).insertBefore(D.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(F){AO(this).toggleClass("ui-state-active ui-state-focus","down"===F.type.substr(-4))
}).delegate(".qtip-close","mouseover mouseout",function(F){AO(this).toggleClass("ui-state-hover","mouseover"===F.type)
}),this.options.content.button&&this._createButton()
},A6._removeTitle=function(D){var E=this.elements;
E.title&&(E.titlebar.remove(),E.titlebar=E.title=E.button=A3,D!==An&&this.reposition())
},A6.reposition=function(U,K){if(!this.rendered||this.positioning||this.destroyed){return this
}this.positioning=Au;
var P,M,o=this.cache,V=this.tooltip,R=this.options.position,Z=R.target,O=R.my,Y=R.at,J=R.viewport,X=R.container,W=R.adjust,Q=W.method.split(" "),I=V.outerWidth(An),F=V.outerHeight(An),k=0,H=0,G=V.css("position"),BJ={left:0,top:0},N=V[0].offsetWidth>0,D=U&&"scroll"===U.type,L=AO(A),S=X[0].ownerDocument,E=this.mouse;
if(AO.isArray(Z)&&2===Z.length){Y={x:Av,y:A7},BJ={left:Z[0],top:Z[1]}
}else{if("mouse"===Z&&(U&&U.pageX||o.event.pageX)){Y={x:Av,y:A7},U=!E||!E.pageX||!W.mouse&&U&&U.pageX?(!U||"resize"!==U.type&&"scroll"!==U.type?U&&U.pageX&&"mousemove"===U.type?U:(!W.mouse||this.options.show.distance)&&o.origin&&o.origin.pageX?o.origin:U:o.event)||U||o.event||E||{}:E,"static"!==G&&(BJ=X.offset()),S.body.offsetWidth!==(A.innerWidth||S.documentElement.clientWidth)&&(M=AO(S.body).offset()),BJ={left:U.pageX-BJ.left+(M&&M.left||0),top:U.pageY-BJ.top+(M&&M.top||0)},W.mouse&&D&&(BJ.left-=E.scrollX-L.scrollLeft(),BJ.top-=E.scrollY-L.scrollTop())
}else{if("event"===Z&&U&&U.target&&"scroll"!==U.type&&"resize"!==U.type?o.target=AO(U.target):"event"!==Z&&(o.target=AO(Z.jquery?Z:elements.target)),Z=o.target,Z=AO(Z).eq(0),0===Z.length){return this
}Z[0]===C||Z[0]===A?(k=BROWSER.iOS?A.innerWidth:Z.width(),H=BROWSER.iOS?A.innerHeight:Z.height(),Z[0]===A&&(BJ={top:(J||Z).scrollTop(),left:(J||Z).scrollLeft()})):At.imagemap&&Z.is("area")?P=At.imagemap(this,Z,Y,At.viewport?Q:An):At.svg&&Z[0].ownerSVGElement?P=At.svg(this,Z,Y,At.viewport?Q:An):(k=Z.outerWidth(An),H=Z.outerHeight(An),BJ=Z.offset()),P&&(k=P.width,H=P.height,M=P.offset,BJ=P.position),BJ=this.reposition.offset(Z,BJ,X),(BROWSER.iOS>3.1&&4.1>BROWSER.iOS||BROWSER.iOS>=4.3&&4.33>BROWSER.iOS||!BROWSER.iOS&&"fixed"===G)&&(BJ.left-=L.scrollLeft(),BJ.top-=L.scrollTop()),(!P||P&&P.adjustable!==An)&&(BJ.left+=Y.x===Aj?k:Y.x===A4?k/2:0,BJ.top+=Y.y===Aq?H:Y.y===A4?H/2:0)
}}return BJ.left+=W.x+(O.x===Aj?-I:O.x===A4?-I/2:0),BJ.top+=W.y+(O.y===Aq?-F:O.y===A4?-F/2:0),At.viewport?(BJ.adjusted=At.viewport(this,BJ,R,k,H,I,F),M&&BJ.adjusted.left&&(BJ.left+=M.left),M&&BJ.adjusted.top&&(BJ.top+=M.top)):BJ.adjusted={left:0,top:0},this._trigger("move",[BJ,J.elem||J],U)?(delete BJ.adjusted,K===An||!N||isNaN(BJ.left)||isNaN(BJ.top)||"mouse"===Z||!AO.isFunction(R.effect)?V.css(BJ):AO.isFunction(R.effect)&&(R.effect.call(V,this,AO.extend({},BJ)),V.queue(function(T){AO(this).css({opacity:"",height:""}),BROWSER.ie&&this.style.removeAttribute("filter"),T()
})),this.positioning=An,this):this
},A6.reposition.offset=function(M,H,N){function F(O,P){H.left+=P*O.scrollLeft(),H.top+=P*O.scrollTop()
}if(!N[0]){return H
}var D,L,I,G,K=AO(M[0].ownerDocument),E=!!BROWSER.ie&&"CSS1Compat"!==C.compatMode,J=N[0];
do{"static"!==(L=AO.css(J,"position"))&&("fixed"===L?(I=J.getBoundingClientRect(),F(K,-1)):(I=AO(J).position(),I.left+=parseFloat(AO.css(J,"borderLeftWidth"))||0,I.top+=parseFloat(AO.css(J,"borderTopWidth"))||0),H.left-=I.left+(parseFloat(AO.css(J,"marginLeft"))||0),H.top-=I.top+(parseFloat(AO.css(J,"marginTop"))||0),D||"hidden"===(G=AO.css(J,"overflow"))||"visible"===G||(D=AO(J)))
}while(J=J.offsetParent);
return D&&(D[0]!==K[0]||E)&&F(D,1),H
};
var Az=(AU=A6.reposition.Corner=function(E,F){E=(""+E).replace(/([A-Z])/," $1").replace(/middle/gi,A4).toLowerCase(),this.x=(E.match(/left|right/i)||E.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(E.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!F;
var D=E.charAt(0);
this.precedance="t"===D||"b"===D?Ao:Ar
}).prototype;
Az.invert=function(D,E){this[D]=this[D]===Av?Aj:this[D]===Aj?Av:E||this[D]
},Az.string=function(){var D=this.x,E=this.y;
return D===E?D:this.precedance===Ao||this.forceY&&"center"!==E?E+" "+D:D+" "+E
},Az.abbrev=function(){var D=this.string().split(" ");
return D[0].charAt(0)+(D[1]&&D[1].charAt(0)||"")
},Az.clone=function(){return new AU(this.string(),this.forceY)
},A6.toggle=function(Q,I){var R=this.cache,F=this.options,D=this.tooltip;
if(I){if(/over|enter/.test(I.type)&&/out|leave/.test(R.event.type)&&F.show.target.add(I.target).length===F.show.target.length&&D.has(I.relatedTarget).length){return this
}R.event=AO.extend({},I)
}if(this.waiting&&!Q&&(this.hiddenDuringWait=Au),!this.rendered){return Q?this.render(1):this
}if(this.destroyed||this.disabled){return this
}var O,J,H=Q?"show":"hide",N=this.options[H],E=(this.options[Q?"hide":"show"],this.options.position),M=this.options.content,P=this.tooltip.css("width"),L=this.tooltip[0].offsetWidth>0,K=Q||1===N.target.length,G=!I||2>N.target.length||R.target[0]===I.target;
return(typeof Q).search("boolean|number")&&(Q=!L),O=!D.is(":animated")&&L===Q&&G,J=O?A3:!!this._trigger(H,[90]),J!==An&&Q&&this.focus(I),!J||O?this:(AO.attr(D[0],"aria-hidden",!Q),Q?(R.origin=AO.extend({},this.mouse),AO.isFunction(M.text)&&this._updateContent(M.text,An),AO.isFunction(M.title)&&this._updateTitle(M.title,An),!Ai&&"mouse"===E.target&&E.adjust.mouse&&(AO(C).bind("mousemove."+BD,this._storeMouse),Ai=Au),P||D.css("width",D.outerWidth(An)),this.reposition(I,arguments[2]),P||D.css("width",""),N.solo&&("string"==typeof N.solo?AO(N.solo):AO(A1,N.solo)).not(D).not(N.target).qtip("hide",AO.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete R.origin,Ai&&!AO(A1+'[tracking="true"]:visible',N.solo).not(D).length&&(AO(C).unbind("mousemove."+BD),Ai=An),this.blur(I)),after=AO.proxy(function(){Q?(BROWSER.ie&&D[0].style.removeAttribute("filter"),D.css("overflow",""),"string"==typeof N.autofocus&&AO(this.options.show.autofocus,D).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):D.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(Q?"visible":"hidden")
},this),N.effect===An||K===An?(D[H](),after()):AO.isFunction(N.effect)?(D.stop(1,1),N.effect.call(D,this),D.queue("fx",function(S){after(),S()
})):D.fadeTo(90,Q?1:0,after),Q&&N.target.trigger("qtip-"+this.id+"-inactive"),this)
},A6.show=function(D){return this.toggle(Au,D)
},A6.hide=function(D){return this.toggle(An,D)
},A6.focus=function(E){if(!this.rendered||this.destroyed){return this
}var G=AO(A1),D=this.tooltip,F=parseInt(D[0].style.zIndex,10),H=Al.zindex+G.length;
return D.hasClass(Aw)||this._trigger("focus",[H],E)&&(F!==H&&(G.each(function(){this.style.zIndex>F&&(this.style.zIndex=this.style.zIndex-1)
}),G.filter("."+Aw).qtip("blur",E)),D.addClass(Aw)[0].style.zIndex=H),this
},A6.blur=function(D){return !this.rendered||this.destroyed?this:(this.tooltip.removeClass(Aw),this._trigger("blur",[this.tooltip.css("zIndex")],D),this)
},A6.disable=function(D){return this.destroyed?this:("boolean"!=typeof D&&(D=!(this.tooltip.hasClass(A5)||this.disabled)),this.rendered&&this.tooltip.toggleClass(A5,D).attr("aria-disabled",D),this.disabled=!!D,this)
},A6.enable=function(){return this.disable(An)
},A6._createButton=function(){var E=this,H=this.elements,D=H.tooltip,F=this.options.content.button,I="string"==typeof F,G=I?F:"Close tooltip";
H.button&&H.button.remove(),H.button=F.jquery?F:AO("<a />",{"class":"qtip-close "+(this.options.style.widget?"":BD+"-icon"),title:G,"aria-label":G}).prepend(AO("<span />",{"class":"ui-icon close-x",html:"&nbsp;"})),H.button.prependTo(H.titlebar||D).attr("role","button").click(function(J){return D.hasClass(A5)||E.hide(J),An
})
},A6._updateButton=function(D){if(!this.rendered){return An
}var E=this.elements.button;
D?this._createButton():E.remove()
},A6._setWidget=function(){var E=this.options.style.widget,G=this.elements,D=G.tooltip,F=D.hasClass(A5);
D.removeClass(A5),A5=E?"ui-state-disabled":"qtip-disabled",D.toggleClass(A5,F),D.toggleClass("ui-helper-reset "+AN(),E).toggleClass(Ax,this.options.style.def&&!E),G.content&&G.content.toggleClass(AN("content"),E),G.titlebar&&G.titlebar.toggleClass(AN("header"),E),G.button&&G.button.toggleClass(BD+"-icon",!E)
},A6._storeMouse=function(D){this.mouse={pageX:D.pageX,pageY:D.pageY,type:"mousemove",scrollX:A.pageXOffset||C.body.scrollLeft||C.documentElement.scrollLeft,scrollY:A.pageYOffset||C.body.scrollTop||C.documentElement.scrollTop}
},A6._bind=function(E,H,D,F,I){var G="."+this._id+(F?"-"+F:"");
H.length&&AO(E).bind((H.split?H:H.join(G+" "))+G,AO.proxy(D,I||this))
},A6._unbind=function(D,E){AO(D).unbind("."+this._id+(E?"-"+E:""))
};
var BH="."+BD;
AO(function(){AQ(A1,["mouseenter","mouseleave"],function(E){var G="mouseenter"===E.type,D=AO(E.currentTarget),F=AO(E.relatedTarget||E.target),H=this.options;
G?(this.focus(E),D.hasClass(Ap)&&!D.hasClass(A5)&&clearTimeout(this.timers.hide)):"mouse"===H.position.target&&H.hide.event&&H.show.target&&!F.closest(H.show.target[0]).length&&this.hide(E),D.toggleClass(Af,G)
}),AQ("["+Ag+"]",Ak,AY)
}),A6._trigger=function(E,G,D){var F=AO.Event("tooltip"+E);
return F.originalEvent=D&&AO.extend({},D)||this.cache.event||A3,this.triggering=Au,this.tooltip.trigger(F,[this].concat(G||[])),this.triggering=An,!F.isDefaultPrevented()
},A6._assignEvents=function(){var I=this.options,F=I.position,D=this.tooltip,N=I.show.target,J=I.hide.target,H=F.container,K=F.viewport,E=AO(C),G=(AO(C.body),AO(A)),O=I.show.event?AO.trim(""+I.show.event).split(" "):[],M=I.hide.event?AO.trim(""+I.hide.event).split(" "):[],L=[];
/mouse(out|leave)/i.test(I.hide.event)&&"window"===I.hide.leave&&this._bind(E,["mouseout","blur"],function(P){/select|option/.test(P.target.nodeName)||P.relatedTarget||this.hide(P)
}),I.hide.fixed?J=J.add(D.addClass(Ap)):/mouse(over|enter)/i.test(I.show.event)&&this._bind(J,"mouseleave",function(){clearTimeout(this.timers.show)
}),(""+I.hide.event).indexOf("unfocus")>-1&&this._bind(H.closest("html"),["mousedown","touchstart"],function(Q){var S=AO(Q.target),P=this.rendered&&!this.tooltip.hasClass(A5)&&this.tooltip[0].offsetWidth>0,R=S.parents(A1).filter(this.tooltip[0]).length>0;
S[0]===this.target[0]||S[0]===this.tooltip[0]||R||this.target.has(S[0]).length||!P||this.hide(Q)
}),"number"==typeof I.hide.inactive&&(this._bind(N,"qtip-"+this.id+"-inactive",AY),this._bind(J.add(D),Al.inactiveEvents,AY,"-inactive")),M=AO.map(M,function(P){var Q=AO.inArray(P,O);
return Q>-1&&J.add(N).length===J.length?(L.push(O.splice(Q,1)[0]),B):P
}),this._bind(N,O,AZ),this._bind(J,M,AJ),this._bind(N,L,function(P){(this.tooltip[0].offsetWidth>0?AJ:AZ).call(this,P)
}),this._bind(N.add(D),"mousemove",function(P){if("number"==typeof I.hide.distance){var R=this.cache.origin||{},Q=this.options.hide.distance,S=Math.abs;
(S(P.pageX-R.pageX)>=Q||S(P.pageY-R.pageY)>=Q)&&this.hide(P)
}this._storeMouse(P)
}),"mouse"===F.target&&F.adjust.mouse&&(I.hide.event&&this._bind(N,["mouseenter","mouseleave"],function(P){this.cache.onTarget="mouseenter"===P.type
}),this._bind(E,"mousemove",function(P){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(A5)&&this.tooltip[0].offsetWidth>0&&this.reposition(P)
})),(F.adjust.resize||K.length)&&this._bind(AO.event.special.resize?K:G,"resize",AX),F.adjust.scroll&&this._bind(G.add(F.container),"scroll",AX)
},A6._unassignEvents=function(){var D=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],A,C];
this.rendered?this._unbind(AO([]).pushStack(AO.grep(D,function(E){return"object"==typeof E
}))):AO(D[0]).unbind("."+this._id+"-create")
},Al=AO.fn.qtip=function(G,I,F){var K=(""+G).toLowerCase(),H=A3,E=AO.makeArray(arguments).slice(1),D=E[E.length-1],J=this[0]?AO.data(this[0],BD):A3;
return !arguments.length&&J||"api"===K?J:"string"==typeof G?(this.each(function(){var L=AO.data(this,BD);
if(!L){return Au
}if(D&&D.timeStamp&&(L.cache.event=D),!I||"option"!==K&&"options"!==K){L[K]&&L[K].apply(L,E)
}else{if(F===B&&!AO.isPlainObject(I)){return H=L.get(I),An
}L.set(I,F)
}}),H!==A3?H:this):"object"!=typeof G&&arguments.length?B:(J=AV(AO.extend(Au,{},G)),Al.bind.call(this,J,D))
},Al.bind=function(D,E){return this.each(function(H){function M(N){function O(){L.render("object"==typeof N||J.show.ready),G.show.add(G.hide).unbind(F)
}return L.disabled?An:(L.cache.event=AO.extend({},N),L.cache.target=N?AO(N.target):[B],J.show.delay>0?(clearTimeout(L.timers.show),L.timers.show=setTimeout(O,J.show.delay),I.show!==I.hide&&G.hide.bind(I.hide,function(){clearTimeout(L.timers.show)
})):O(),B)
}var J,G,I,F,L,K;
return K=AO.isArray(D.id)?D.id[H]:D.id,K=!K||K===An||1>K.length||Al.api[K]?Al.nextid++:K,F=".qtip-"+K+"-create",L=AI(AO(this),K,D),L===An?Au:(Al.api[K]=L,J=L.options,AO.each(At,function(){"initialize"===this.initialize&&this(L)
}),G={show:J.show.target,hide:J.hide.target},I={show:AO.trim(""+J.show.event).replace(/ /g,F+" ")+F,hide:AO.trim(""+J.hide.event).replace(/ /g,F+" ")+F},/mouse(over|enter)/i.test(I.show)&&!/mouse(out|leave)/i.test(I.hide)&&(I.hide+=" mouseleave"+F),G.show.bind("mousemove"+F,function(N){L._storeMouse(N),L.cache.onTarget=Au
}),G.show.bind(I.show,M),(J.show.ready||J.prerender)&&M(E),B)
})
},Al.api={},AO.each({attr:function(E,G){if(this.length){var D=this[0],F="title",H=AO.data(D,"qtip");
if(E===F&&H&&"object"==typeof H&&H.options.suppress){return 2>arguments.length?AO.attr(D,AR):(H&&H.options.content.attr===F&&H.cache.attr&&H.set("content.text",G),this.attr(AR,G))
}}return AO.fn["attr"+s].apply(this,arguments)
},clone:function(D){var E=(AO([]),AO.fn["clone"+s].apply(this,arguments));
return D||E.filter("["+AR+"]").attr("title",function(){return AO.attr(this,AR)
}).removeAttr(AR),E
}},function(E,F){if(!F||AO.fn[E+s]){return Au
}var D=AO.fn[E+s]=AO.fn[E];
AO.fn[E]=function(){return F.apply(this,arguments)||D.apply(this,arguments)
}
}),AO.ui||(AO["cleanData"+s]=AO.cleanData,AO.cleanData=function(E){for(var G,D=0;
(G=AO(E[D])).length;
D++){if(G.attr(Ah)){try{G.triggerHandler("removeqtip")
}catch(F){}}}AO["cleanData"+s].apply(this,arguments)
}),Al.version="2.1.1",Al.nextid=0,Al.inactiveEvents=Ak,Al.zindex=15000,Al.defaults={prerender:An,id:An,overwrite:Au,suppress:Au,content:{text:Au,attr:"title",title:An,button:An},position:{my:"top left",at:"bottom right",target:An,container:An,viewport:An,adjust:{x:0,y:0,mouse:Au,scroll:Au,resize:Au,method:"flipinvert flipinvert"},effect:function(D,E){AO(this).animate(E,{duration:200,queue:An})
}},show:{target:An,event:"mouseenter",effect:Au,delay:90,solo:An,ready:An,autofocus:An},hide:{target:An,event:"mouseleave",effect:Au,delay:0,fixed:An,inactive:An,leave:"window",distance:An},style:{classes:"",widget:An,width:An,height:An,def:Au},events:{render:A3,move:A3,show:A3,hide:A3,toggle:A3,visible:A3,hidden:A3,focus:A3,blur:A3}};
var A9,As="margin",BG="border",AL="color",AC="background-color",AB="transparent",Ab=" !important",BF=!!C.createElement("canvas").getContext,BA=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,BB={},AD=["Webkit","O","Moz","ms"];
BF||(createVML=function(E,F,D){return"<qtipvml:"+E+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(F||"")+' style="behavior: url(#default#VML); '+(D||"")+'" />'
}),AO.extend(AG.prototype,{init:function(E){var F,D;
D=this.element=E.elements.tip=AO("<div />",{"class":BD+"-tip"}).prependTo(E.tooltip),BF?(F=AO("<canvas />").appendTo(this.element)[0].getContext("2d"),F.lineJoin="miter",F.miterLimit=100,F.save()):(F=createVML("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(F+F),E._bind(AO("*",D).add(D),["click","mousedown"],function(G){G.stopPropagation()
},this._ns)),E._bind(E.tooltip,"tooltipmove",this.reposition,this._ns,this),this.create()
},_swapDimensions:function(){this.size[0]=this.options.height,this.size[1]=this.options.width
},_resetDimensions:function(){this.size[0]=this.options.width,this.size[1]=this.options.height
},_useTitle:function(D){var E=this.qtip.elements.titlebar;
return E&&(D.y===A7||D.y===A4&&this.element.position().top+this.size[1]/2+this.options.offset<E.outerHeight(Au))
},_parseCorner:function(D){var E=this.qtip.options.position.my;
return D===An||E===An?D=An:D===Au?D=new AU(E.string()):D.string||(D=new AU(D),D.fixed=Au),D
},_parseWidth:function(E,G,D){var F=this.qtip.elements,H=BG+AF(G)+"Width";
return(D?AH(D,H):AH(F.content,H)||AH(this._useTitle(E)&&F.titlebar||F.content,H)||AH(tooltip,H))||0
},_parseRadius:function(E){var F=this.qtip.elements,D=BG+AF(E.y)+AF(E.x)+"Radius";
return 9>BROWSER.ie?0:AH(this._useTitle(E)&&F.titlebar||F.content,D)||AH(F.tooltip,D)||0
},_invalidColour:function(E,G,D){var F=E.css(G);
return !F||D&&F===E.css(D)||BA.test(F)?An:F
},_parseColours:function(F){var I=this.qtip.elements,E=this.element.css("cssText",""),G=BG+AF(F[F.precedance])+AF(AL),J=this._useTitle(F)&&I.titlebar||I.content,H=this._invalidColour,D=[];
return D[0]=H(E,AC)||H(J,AC)||H(I.content,AC)||H(tooltip,AC)||E.css(AC),D[1]=H(E,G,AL)||H(J,G,AL)||H(I.content,G,AL)||H(tooltip,G,AL)||tooltip.css(G),AO("*",E).add(E).css("cssText",AC+":"+AB+Ab+";"+BG+":0"+Ab+";"),D
},_calculateSize:function(O){var K,I,P,F=O.precedance===Ao,G=this.options[F?"height":"width"],D=this.options[F?"width":"height"],N="c"===O.abbrev(),J=G*(N?0.5:1),H=Math.pow,M=Math.round,E=Math.sqrt(H(J,2)+H(D,2)),L=[this.border/J*E,this.border/D*E];
return L[2]=Math.sqrt(H(L[0],2)-H(this.border,2)),L[3]=Math.sqrt(H(L[1],2)-H(this.border,2)),K=E+L[2]+L[3]+(N?0:L[0]),I=K/E,P=[M(I*G),M(I*D)],F?P:P.reverse()
},_calculateTip:function(E){var G=this.size[0],D=this.size[1],F=Math.ceil(G/2),H=Math.ceil(D/2),I={br:[0,0,G,D,G,0],bl:[0,0,G,0,0,D],tr:[0,D,G,0,G,D],tl:[0,0,0,D,G,D],tc:[0,D,F,0,G,D],bc:[0,0,G,0,F,D],rc:[0,0,G,H,0,D],lc:[G,0,G,D,0,H]};
return I.lt=I.br,I.rt=I.bl,I.lb=I.tr,I.rb=I.tl,I[E.abbrev()]
},create:function(){var D=this.corner=(BF||BROWSER.ie)&&this._parseCorner(this.options.corner);
return(this.enabled=!!this.corner&&"c"!==this.corner.abbrev())&&(this.qtip.cache.corner=D.clone(),this.update()),this.element.toggle(this.enabled),this.corner
},update:function(Q,L){if(!this.enabled){return this
}var H,R,F,D,O,I,G,N=(this.qtip.elements,this.element),E=N.children(),M=this.options,P=this.size,K=M.mimic,J=Math.round;
Q||(Q=this.qtip.cache.corner||this.corner),K===An?K=Q:(K=new AU(K),K.precedance=Q.precedance,"inherit"===K.x?K.x=Q.x:"inherit"===K.y?K.y=Q.y:K.x===K.y&&(K[Q.precedance]=Q[Q.precedance])),R=K.precedance,Q.precedance===Ar?this._swapDimensions():this._resetDimensions(),H=this.color=this._parseColours(Q),H[1]!==AB?(G=this.border=this._parseWidth(Q,Q[Q.precedance]),M.border&&1>G&&(H[0]=H[1]),this.border=G=M.border!==Au?M.border:G):this.border=G=0,D=this._calculateTip(K),I=this.size=this._calculateSize(Q),N.css({width:I[0],height:I[1],lineHeight:I[1]+"px"}),O=Q.precedance===Ao?[J(K.x===Av?G:K.x===Aj?I[0]-P[0]-G:(I[0]-P[0])/2),J(K.y===A7?I[1]-P[1]:0)]:[J(K.x===Av?I[0]-P[0]:0),J(K.y===A7?G:K.y===Aq?I[1]-P[1]-G:(I[1]-P[1])/2)],BF?(E.attr(Ay,I[0]).attr(AT,I[1]),F=E[0].getContext("2d"),F.restore(),F.save(),F.clearRect(0,0,3000,3000),F.fillStyle=H[0],F.strokeStyle=H[1],F.lineWidth=2*G,F.translate(O[0],O[1]),F.beginPath(),F.moveTo(D[0],D[1]),F.lineTo(D[2],D[3]),F.lineTo(D[4],D[5]),F.closePath(),G&&("border-box"===tooltip.css("background-clip")&&(F.strokeStyle=H[0],F.stroke()),F.strokeStyle=H[1],F.stroke()),F.fill()):(D="m"+D[0]+","+D[1]+" l"+D[2]+","+D[3]+" "+D[4]+","+D[5]+" xe",O[2]=G&&/^(r|b)/i.test(Q.string())?8===BROWSER.ie?2:1:0,E.css({coordsize:P[0]+G+" "+(P[1]+G),antialias:""+(K.string().indexOf(A4)>-1),left:O[0]-O[2]*Number(R===Ar),top:O[1]-O[2]*Number(R===Ao),width:P[0]+G,height:P[1]+G}).each(function(S){var T=AO(this);
T[T.prop?"prop":"attr"]({coordsize:P[0]+G+" "+(P[1]+G),path:D,fillcolor:H[0],filled:!!S,stroked:!S}).toggle(!(!G&&!S)),!S&&T.html(createVML("stroke",'weight="'+2*G+'px" color="'+H[1]+'" miterlimit="1000" joinstyle="miter"'))
})),L!==An&&this.calculate(Q)
},calculate:function(K){if(!this.enabled){return An
}var I,G,L,E=this,D=this.qtip.elements,J=this.element,H=this.options.offset,F=(this.qtip.tooltip.hasClass("ui-widget"),{});
return K=K||this.corner,I=K.precedance,G=this._calculateSize(K),L=[K.x,K.y],I===Ar&&L.reverse(),AO.each(L,function(N,P){var M,Q,O;
P===A4?(M=I===Ao?Av:A7,F[M]="50%",F[As+"-"+M]=-Math.round(G[I===Ao?0:1]/2)+H):(M=E._parseWidth(K,P,D.tooltip),Q=E._parseWidth(K,P,D.content),O=E._parseRadius(K),F[P]=Math.max(-E.border,N?Q:H+(O>M?O:-M)))
}),F[K[I]]-=G[I===Ar?0:1],J.css({margin:"",top:"",bottom:"",left:"",right:""}).css(F),F
},reposition:function(P,K,I){if(this.enabled){var F,G,D=K.cache,N=this.corner.clone(),J=I.adjusted,H=K.options.position.adjust.method.split(" "),M=H[0],E=H[1]||H[0],L={left:An,top:An,x:0,y:0},O={};
this.corner.fixed!==Au&&(M===A2&&N.precedance===Ar&&J.left&&N.y!==A4?N.precedance=N.precedance===Ar?Ao:Ar:M!==A2&&J.left&&(N.x=N.x===A4?J.left>0?Av:Aj:N.x===Av?Aj:Av),E===A2&&N.precedance===Ao&&J.top&&N.x!==A4?N.precedance=N.precedance===Ao?Ar:Ao:E!==A2&&J.top&&(N.y=N.y===A4?J.top>0?A7:Aq:N.y===A7?Aq:A7),N.string()===D.corner.string()||D.cornerTop===J.top&&D.cornerLeft===J.left||this.update(N,An)),F=this.calculate(N,J),F.right!==B&&(F.left=-F.right),F.bottom!==B&&(F.top=-F.bottom),F.user=this.offset,(L.left=M===A2&&!!J.left)&&(N.x===A4?O[As+"-left"]=L.x=F[As+"-left"]-J.left:(G=F.right!==B?[J.left,-F.left]:[-J.left,F.left],(L.x=Math.max(G[0],G[1]))>G[0]&&(I.left-=J.left,L.left=An),O[F.right!==B?Aj:Av]=L.x)),(L.top=E===A2&&!!J.top)&&(N.y===A4?O[As+"-top"]=L.y=F[As+"-top"]-J.top:(G=F.bottom!==B?[J.top,-F.top]:[-J.top,F.top],(L.y=Math.max(G[0],G[1]))>G[0]&&(I.top-=J.top,L.top=An),O[F.bottom!==B?Aq:A7]=L.y)),this.element.css(O).toggle(!(L.x&&L.y||N.x===A4&&L.y||N.y===A4&&L.x)),I.left-=F.left.charAt?F.user:M!==A2||L.top||!L.left&&!L.top?F.left:0,I.top-=F.top.charAt?F.user:E!==A2||L.left||!L.left&&!L.top?F.top:0,D.cornerLeft=J.left,D.cornerTop=J.top,D.corner=N.clone()
}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns),this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()
}}),A9=At.tip=function(D){return new AG(D,D.options.style.tip)
},A9.initialize="render",A9.sanitize=function(D){D.style&&"tip" in D.style&&(opts=D.style.tip,"object"!=typeof opts&&(opts=D.style.tip={corner:opts}),/string|boolean/i.test(typeof opts.corner)||(opts.corner=Au))
},AE.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create(),this.qtip.reposition()
},"^style.tip.(height|width)$":function(D){this.size=size=[D.width,D.height],this.update(),this.qtip.reposition()
},"^content.title|style.(classes|widget)$":function(){this.update()
}},AO.extend(Au,Al.defaults,{style:{tip:{corner:Au,mimic:An,width:6,height:6,border:Au,offset:0}}});
var BE,Am,AA="qtip-modal",BI="."+AA;
Am=function(){function H(N){if(AO.expr[":"].focusable){return AO.expr[":"].focusable
}var Q,M,O,R=!isNaN(AO.attr(N,"tabindex")),P=N.nodeName&&N.nodeName.toLowerCase();
return"area"===P?(Q=N.parentNode,M=Q.name,N.href&&M&&"map"===Q.nodeName.toLowerCase()?(O=AO("img[usemap=#"+M+"]")[0],!!O&&O.is(":visible")):!1):/input|select|textarea|button|object/.test(P)?!N.disabled:"a"===P?N.href||R:R
}function L(M){1>E.length&&M.length?M.not("body").blur():E.first().focus()
}function F(N){if(G.is(":visible")){var P,M=AO(N.target),Q=D.tooltip,O=M.closest(A1);
P=1>O.length?An:parseInt(O[0].style.zIndex,10)>parseInt(Q[0].style.zIndex,10),P||M.closest(A1)[0]===Q[0]||L(M),K=N.target===E[E.length-1]
}}var D,K,I,G,J=this,E={};
AO.extend(J,{init:function(){function M(){var N=AO(this);
G.css({height:N.height(),width:N.width()})
}return G=J.elem=AO("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return An
}}).hide(),AO(A).bind("resize"+BI,M),M(),AO(C.body).bind("focusin"+BI,F),AO(C).bind("keydown"+BI,function(N){D&&D.options.show.modal.escape&&27===N.keyCode&&D.hide(N)
}),G.bind("click"+BI,function(N){D&&D.options.show.modal.blur&&D.hide(N)
}),J
},update:function(M){D=M,E=M.options.show.modal.stealfocus!==An?M.tooltip.find("*").filter(function(){return H(this)
}):[]
},toggle:function(U,O,N){var S=(AO(C.body),U.tooltip),M=U.options.show.modal,R=M.effect,T=O?"show":"hide",Q=G.is(":visible"),P=AO(BI).filter(":visible:not(:animated)").not(S);
return J.update(U),O&&M.stealfocus!==An&&L(AO(":focus")),G.toggleClass("blurs",M.blur),O&&G.css({left:0,top:0}).appendTo(C.body),G.is(":animated")&&Q===O&&I!==An||!O&&P.length?J:(G.stop(Au,An),AO.isFunction(R)?R.call(G,O):R===An?G[T]():G.fadeTo(parseInt(N,10)||90,O?1:0,function(){O||G.hide()
}),O||G.queue(function(V){G.css({left:"",top:""}),AO(BI).length||G.detach(),V()
}),I=O,D.destroyed&&(D=A3),J)
}}),J.init()
},Am=new Am,AO.extend(Ae.prototype,{init:function(D){var E=D.tooltip;
return this.options.on?(D.elements.overlay=Am.elem,E.addClass(AA).css("z-index",At.modal.zindex+AO(BI).length),D._bind(E,["tooltipshow","tooltiphide"],function(G,F,H){var J=G.originalEvent;
if(G.target===E[0]){if(J&&"tooltiphide"===G.type&&/mouse(leave|enter)/.test(J.type)&&AO(J.relatedTarget).closest(overlay[0]).length){try{G.preventDefault()
}catch(I){}}else{(!J||J&&!J.solo)&&this.toggle(G,"tooltipshow"===G.type,H)
}}},this._ns,this),D._bind(E,"tooltipfocus",function(H,G){if(!H.isDefaultPrevented()&&H.target===E[0]){var I=AO(BI),K=At.modal.zindex+I.length,J=parseInt(E[0].style.zIndex,10);
Am.elem[0].style.zIndex=K-1,I.each(function(){this.style.zIndex>J&&(this.style.zIndex-=1)
}),I.filter("."+Aw).qtip("blur",H.originalEvent),E.addClass(Aw)[0].style.zIndex=K,Am.update(G);
try{H.preventDefault()
}catch(F){}}},this._ns,this),D._bind(E,"tooltiphide",function(F){F.target===E[0]&&AO(BI).filter(":visible").not(E).last().qtip("focus",F)
},this._ns,this),B):this
},toggle:function(E,F,D){return E&&E.isDefaultPrevented()?this:(Am.toggle(this.qtip,!!F,D),B)
},destroy:function(){this.qtip.tooltip.removeClass(AA),this.qtip._unbind(this.qtip.tooltip,this._ns),Am.toggle(this.qtip,An),delete this.qtip.elements.overlay
}}),BE=At.modal=function(D){return new Ae(D,D.options.show.modal)
},BE.sanitize=function(D){D.show&&("object"!=typeof D.show.modal?D.show.modal={on:!!D.show.modal}:D.show.modal.on===B&&(D.show.modal.on=Au))
},BE.zindex=Al.zindex-200,BE.initialize="render",AE.modal={"^show.modal.(on|blur)$":function(){this.destroy(),this.init(),this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)
}},AO.extend(Au,Al.defaults,{show:{modal:{on:An,effect:Au,blur:Au,stealfocus:Au,escape:Au}}}),At.viewport=function(S,J,O,P,L,j,U){function R(BJ,BU,BR,BN,BO,BL,BY,BS,BP){var BW=J[BO],BV=V[BJ],x=Q[BJ],BT=BR===A2,p=-k.offset[BO]+F.offset[BO]+F["scroll"+BO],g=BV===BO?BP:BV===BL?-BP:-BP/2,BX=x===BO?BS:x===BL?-BS:-BS/2,m=D&&D.size?D.size[BY]||0:0,BM=D&&D.corner&&D.corner.precedance===BJ&&!BT?m:0,BK=p-BW+BM,BQ=BW+BP-F[BY]-p+BM,T=g-(V.precedance===BJ||BV===V[BU]?BX:0)-(x===A4?BS/2:0);
return BT?(BM=D&&D.corner&&D.corner.precedance===BU?m:0,T=(BV===BO?1:-1)*g-BM,J[BO]+=BK>0?BK:BQ>0?-BQ:0,J[BO]=Math.max(-k.offset[BO]+F.offset[BO]+(BM&&D.corner[BJ]===A4?D.offset:0),BW-T,Math.min(Math.max(-k.offset[BO]+F.offset[BO]+F[BY],BW+T),J[BO]))):(BN*=BR===A8?2:0,BK>0&&(BV!==BO||BQ>0)?(J[BO]-=T+BN,N.invert(BJ,BO)):BQ>0&&(BV!==BL||BK>0)&&(J[BO]-=(BV===A4?-T:T)+BN,N.invert(BJ,BL)),p>J[BO]&&-J[BO]>BQ&&(J[BO]=BW,N=V.clone())),J[BO]-BW
}var Y,N,X,I=O.target,W=S.elements.tooltip,V=O.my,Q=O.at,H=O.adjust,E=H.method.split(" "),Z=E[0],G=E[1]||E[0],F=O.viewport,k=O.container,M=S.cache,D=S.plugins.tip,K={left:0,top:0};
return F.jquery&&I[0]!==A&&I[0]!==C.body&&"none"!==H.method?(Y="fixed"===W.css("position"),F={elem:F,width:F[0]===A?F.width():F.outerWidth(An),height:F[0]===A?F.height():F.outerHeight(An),scrollleft:Y?0:F.scrollLeft(),scrolltop:Y?0:F.scrollTop(),offset:F.offset()||{left:0,top:0}},k={elem:k,scrollLeft:k.scrollLeft(),scrollTop:k.scrollTop(),offset:k.offset()||{left:0,top:0}},("shift"!==Z||"shift"!==G)&&(N=V.clone()),K={left:"none"!==Z?R(Ar,Ao,Z,H.x,Av,Aj,Ay,P,j):0,top:"none"!==G?R(Ao,Ar,G,H.y,A7,Aq,AT,L,U):0},N&&M.lastClass!==(X=BD+"-pos-"+N.abbrev())&&W.removeClass(S.cache.lastClass).addClass(S.cache.lastClass=X),K):K
},At.polys={polygon:function(N,K){var I,O,F,G={width:0,height:0,position:{top:10000000000,right:0,bottom:0,left:10000000000},adjustable:An},D=0,M=[],J=1,H=1,L=0,E=0;
for(D=N.length;
D--;
){I=[parseInt(N[--D],10),parseInt(N[D+1],10)],I[0]>G.position.right&&(G.position.right=I[0]),I[0]<G.position.left&&(G.position.left=I[0]),I[1]>G.position.bottom&&(G.position.bottom=I[1]),I[1]<G.position.top&&(G.position.top=I[1]),M.push(I)
}if(O=G.width=Math.abs(G.position.right-G.position.left),F=G.height=Math.abs(G.position.bottom-G.position.top),"c"===K.abbrev()){G.position={left:G.position.left+G.width/2,top:G.position.top+G.height/2}
}else{for(;
O>0&&F>0&&J>0&&H>0;
){for(O=Math.floor(O/2),F=Math.floor(F/2),K.x===Av?J=O:K.x===Aj?J=G.width-O:J+=Math.floor(O/2),K.y===A7?H=F:K.y===Aq?H=G.height-F:H+=Math.floor(F/2),D=M.length;
D--&&!(2>M.length);
){L=M[D][0]-G.position.left,E=M[D][1]-G.position.top,(K.x===Av&&L>=J||K.x===Aj&&J>=L||K.x===A4&&(J>L||L>G.width-J)||K.y===A7&&E>=H||K.y===Aq&&H>=E||K.y===A4&&(H>E||E>G.height-H))&&M.splice(D,1)
}}G.position={left:M[0][0],top:M[0][1]}
}return G
},rect:function(E,G,D,F){return{width:Math.abs(D-E),height:Math.abs(F-G),position:{left:Math.min(E,D),top:Math.min(G,F)}}
},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:0.5,br:0.25,bl:0.75,rc:2,lc:1,c:0},ellipse:function(F,I,E,G,J){var K=At.polys._angles[J.abbrev()],H=E*Math.cos(K*Math.PI),D=G*Math.sin(K*Math.PI);
return{width:2*E-Math.abs(H),height:2*G-Math.abs(D),position:{left:F+H,top:I+D},adjustable:An}
},circle:function(E,G,D,F){return At.polys.ellipse(E,G,D,D,F)
}},At.svg=function(K,L,F){for(var D,J,H,G=AO(C),I=L[0],E={};
!I.getBBox;
){I=I.parentNode
}if(!I.getBBox||!I.parentNode){return An
}switch(I.nodeName){case"rect":J=At.svg.toPixel(I,I.x.baseVal.value,I.y.baseVal.value),H=At.svg.toPixel(I,I.x.baseVal.value+I.width.baseVal.value,I.y.baseVal.value+I.height.baseVal.value),E=At.polys.rect(J[0],J[1],H[0],H[1],F);
break;
case"ellipse":case"circle":J=At.svg.toPixel(I,I.cx.baseVal.value,I.cy.baseVal.value),E=At.polys.ellipse(J[0],J[1],(I.rx||I.r).baseVal.value,(I.ry||I.r).baseVal.value,F);
break;
case"line":case"polygon":case"polyline":for(points=I.points||[{x:I.x1.baseVal.value,y:I.y1.baseVal.value},{x:I.x2.baseVal.value,y:I.y2.baseVal.value}],E=[],i=-1,len=points.numberOfItems||points.length;
len>++i;
){next=points.getItem?points.getItem(i):points[i],E.push.apply(E,At.svg.toPixel(I,next.x,next.y))
}E=At.polys.polygon(E,F);
break;
default:if(D=I.getBBox(),mtx=I.getScreenCTM(),root=I.farthestViewportElement||I,!root.createSVGPoint){return An
}point=root.createSVGPoint(),point.x=D.x,point.y=D.y,tPoint=point.matrixTransform(mtx),E.position={left:tPoint.x,top:tPoint.y},point.x+=D.width,point.y+=D.height,tPoint=point.matrixTransform(mtx),E.width=tPoint.x-E.position.left,E.height=tPoint.y-E.position.top
}return E.position.left+=G.scrollLeft(),E.position.top+=G.scrollTop(),E
},At.svg.toPixel=function(E,H,D){var F,I,J=E.getScreenCTM(),G=E.farthestViewportElement||E;
return G.createSVGPoint?(I=G.createSVGPoint(),I.x=H,I.y=D,F=I.matrixTransform(J),[F.x,F.y]):An
},At.imagemap=function(L,I,G){I.jquery||(I=AO(I));
var M,E,D,K=I.attr("shape").toLowerCase().replace("poly","polygon"),H=AO('img[usemap="#'+I.parent("map").attr("name")+'"]'),F=I.attr("coords"),J=F.split(",");
if(!H.length){return An
}if("polygon"===K){result=At.polys.polygon(J,G)
}else{if(!At.polys[K]){return An
}for(D=-1,len=J.length,E=[];
len>++D;
){E.push(parseInt(J[D],10))
}result=At.polys[K].apply(this,E.concat(G))
}return M=H.offset(),M.left+=Math.ceil((H.outerWidth(An)-H.width())/2),M.top+=Math.ceil((H.outerHeight(An)-H.height())/2),result.position.left+=M.left,result.position.top+=M.top,result
};
var e,t='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';
AO.extend(AM.prototype,{_scroll:function(){var D=this.qtip.elements.overlay;
D&&(D[0].style.top=AO(A).scrollTop()+"px")
},init:function(D){var E=D.tooltip;
1>AO("select, object").length&&(this.bgiframe=D.elements.bgiframe=AO(t).appendTo(E),D._bind(E,"tooltipmove",this.adjustBGIFrame,this._ns,this)),this.redrawContainer=AO("<div/>",{id:BD+"-rcontainer"}).appendTo(C.body),D.elements.overlay&&D.elements.overlay.addClass("qtipmodal-ie6fix")&&(D._bind(A,["scroll","resize"],this._scroll,this._ns,this),D._bind(E,["tooltipshow"],this._scroll,this._ns,this)),this.redraw()
},adjustBGIFrame:function(){var E,G,D=this.qtip.tooltip,F={height:D.outerHeight(An),width:D.outerWidth(An)},H=this.qtip.plugins.tip,I=this.qtip.elements.tip;
G=parseInt(D.css("borderLeftWidth"),10)||0,G={left:-G,top:-G},H&&I&&(E="x"===H.corner.precedance?[Ay,Av]:[AT,A7],G[E[1]]-=I[E[0]]()),this.bgiframe.css(G).css(F)
},redraw:function(){if(1>this.qtip.rendered||this.drawing){return self
}var E,H,D,F,I=this.qtip.tooltip,J=this.qtip.options.style,G=this.qtip.options.position.container;
return this.qtip.drawing=1,J.height&&I.css(AT,J.height),J.width?I.css(Ay,J.width):(I.css(Ay,"").appendTo(this.redrawContainer),H=I.width(),1>H%2&&(H+=1),D=I.css("maxWidth")||"",F=I.css("minWidth")||"",E=(D+F).indexOf("%")>-1?G.width()/100:0,D=(D.indexOf("%")>-1?E:1)*parseInt(D,10)||H,F=(F.indexOf("%")>-1?E:1)*parseInt(F,10)||0,H=D+F?Math.min(Math.max(H,F),D):H,I.css(Ay,Math.round(H)).appendTo(G)),this.drawing=0,self
},destroy:function(){this.bgiframe&&this.bgiframe.remove(),this.qtip._unbind([A,this.qtip.tooltip],this._ns)
}}),e=At.ie6=function(D){return 6===BROWSER.ie?new AM(D):An
},e.initialize="render",AE.ie6={"^content|style$":function(){this.redraw()
}}
})
})(window,document);
jQuery.cookie=function(B,I,L){if(typeof I!="undefined"){L=L||{};
if(I===null){I="";
L.expires=-1
}var E="";
if(L.expires&&(typeof L.expires=="number"||L.expires.toUTCString)){var F;
if(typeof L.expires=="number"){F=new Date();
F.setTime(F.getTime()+(L.expires*24*60*60*1000))
}else{F=L.expires
}E="; expires="+F.toUTCString()
}var K=L.path?"; path="+(L.path):"";
var G=L.domain?"; domain="+(L.domain):"";
var A=L.secure?"; secure":"";
document.cookie=[B,"=",encodeURIComponent(I),E,K,G,A].join("")
}else{var D=null;
if(document.cookie&&document.cookie!=""){var J=document.cookie.split(";");
for(var H=0;
H<J.length;
H++){var C=jQuery.trim(J[H]);
if(C.substring(0,B.length+1)==(B+"=")){D=decodeURIComponent(C.substring(B.length+1));
break
}}}return D
}};
(function(A){A.fn.suggestionbox=function(G){if(this.length>1){this.each(function(){A(this).suggestionbox(G)
});
return this
}var O=-1,M=this,F=M.children("input:text"),S=M.children("input.j-suggstnbx-key"),D=A("#SuggestedSearchesContainer"),J=A("#SearchForm"),E=false,K,Q=true;
var N={ajaxCalldelay:300,ajaxUrl:"",cssHoverClass:"hover",cssHoverHighlightClass:"h-hvr-highlight",cssPreDefValue:"h-inpt-predefVal",additionalInputFieldsToSubmit:{},suggestionsMinLength:1,allowExactMatch:false,exactMatchSeparationChar:",",openSuggestions:true,suggestionListOverrides:{},hideButtonText:"Hide"};
var P=A.extend(N,G);
function U(){if(K!=null&&K.length&&!K.is(":hidden")){D.hide();
K.hide();
O=-1
}}function B(){if(F.val()&&F.val().length>0&&P.openSuggestions==true){O=-1;
if(K!=null&&K.length&&K.is(":hidden")){var V=K.children();
if(V.length>1){V.removeClass(P.cssHoverClass);
D.show();
K.show()
}}}}function I(V){var W=A("li",K);
if(W){O+=V;
if(O<0){O=0
}else{if(O>=W.size()){O=W.size()-1
}}W.removeClass(P.cssHoverClass);
A(W[O]).addClass(P.cssHoverClass)
}}function H(){K=A("ul:first",M);
if(K.length){var V=parseInt(K.css("border-left-width"))+parseInt(K.css("border-right-width")),X=F.outerWidth(false)-V,W=A("li",K);
K.mouseleave(function(){U()
});
W.mousedown(function(Y){Y.preventDefault();
if(!(A(this).hasClass("hide-suggestion"))){L(A(this).eq(0))
}U()
}).hover(function(){W.removeClass(P.cssHoverClass)
});
B()
}}function R(e,b){var a=A('<ul id="SuggestedSearches">');
for(var W in e){if(!e.hasOwnProperty(W)){continue
}var Y=e[W],X=Y.suggestion+"-"+Y.categoryId,c=Y.suggestionForDisplay;
if(!c){c=X
}if(b.highlight){var V=c.toLowerCase().indexOf(b.txt.toLowerCase());
if(V>=0){c=c.substring(0,V)+c.substr(V,b.txt.length)+c.substr(V+b.txt.length)
}}var Z=A("<li></li>").attr({id:"_"+X,title:Y.suggestion}).html('<a href="#">'+c+"</a>");
if(Y.categoryId!="0"){Z.addClass("hasCategoryName").data("category-id",Y.categoryId)
}else{Z.removeData("category-id")
}var d=Z.eq(0).children("b");
a.append(Z)
}a.on("mousedown","li",function(){if(A(this).hasClass("hide-suggestion")){P.openSuggestions=false;
U()
}else{var f=jQuery.Event("keypress",{keyCode:13,which:13});
C(f);
J.submit()
}});
J.on({submit:function(){if(E){if(Q){var f=F.val().replace(/\\'/g,"'"),g=Kj.extVars.tracking.label+";keyword="+f+";";
Kj.Tracking.trackGAEvent({action:"KeywordSelected",delayForm:J,label:g});
E=false;
Q=false
}return false
}}});
a.append('<li class="hide-suggestion"><a href="#">'+P.hideButtonText+"</a></li>");
return a
}function C(X){var Y=X.which;
switch(Y){case 38:X.preventDefault();
I(-1);
if(O!=-1){L(A(K.children("li").get(O)))
}break;
case 40:X.preventDefault();
I(1);
if(O!=-1){L(A(K.children("li").get(O)))
}if(K.is(":hidden")){B()
}break;
case 13:if(F.attr("strict")=="y"&&K&&K.children("li")){if(K.children("li").length==1){I(1);
if(O!=-1){L(A(K.children("li").get(O)))
}}else{if(P.allowExactMatch){var W=V();
if(W){L(W)
}}}}Q=true;
U();
break;
case 27:U();
break;
case 9:if(F.attr("strict")=="y"&&K&&K.children("li")&&K.children("li").length==1){I(1);
if(O!=-1){L(A(K.children("li").get(O)))
}}U();
break
}function V(){var Z=0;
var a;
K.children("li").each(function(){var b=this.textContent.split(P.exactMatchSeparationChar);
if(b.length>0&&F.val()&&F.val().toUpperCase()===b[0].toUpperCase()){++Z;
if(!a){a=A(this)
}}});
return Z===1?a:null
}}function L(V){E=true;
if(V.hasClass("hide-suggestion")){}else{F.val(V.attr("title"));
V.trigger("suggestionbox-search");
S.val(V.attr("id").substr(1)).trigger("change")
}}function T(){var V;
F.attr("autocomplete","off").bind("click focus",function(){B();
if(A(this).hasClass(P.cssPreDefValue)){A(this).val("").removeClass(P.cssPreDefValue)
}}).bind("blur",function(){U();
if(A(this).val()==""){A(this).val(A(this).attr("defaultvalue")).addClass(P.cssPreDefValue)
}});
if(P.ajaxUrl!=null&&P.ajaxUrl.length){F.keydown(function(W){if(A(this).hasClass(P.cssPreDefValue)){A(this).val("").removeClass(P.cssPreDefValue)
}var X=W.which;
if(X!=9&&X!=13){S.val("")
}C(W);
if(X==32||X==8||X>40){clearTimeout(V);
V=setTimeout(function(){if(F.val().length>=P.suggestionsMinLength){var Z={query:F.val()};
var Y={txt:F.val(),highlight:(F.attr("highlight")=="y")};
A.each(P.additionalInputFieldsToSubmit,function(a,b){var c=new Object();
c[a]=b.val();
A.extend(Z,c)
});
A.ajax({url:P.ajaxUrl,data:Z,success:function(a){if(a.length>0){if(K!=null&&K.length){K.replaceWith(R(a,Y))
}else{K=R(a,Y);
D.append(K)
}H()
}}})
}else{U()
}},P.ajaxCalldelay)
}})
}}T();
return this
}
})($);
(function(A){if(typeof define==="function"&&define.amd){define(["jquery"],A)
}else{A(jQuery)
}}(function(D){var G=[],E=D(document),C=navigator.userAgent.toLowerCase(),F=D(window),A=[];
var B={ieQuirks:null,msie:/msie/.test(C)&&!/opera/.test(C),opera:/opera/.test(C)};
B.ie6=B.msie&&/msie 6./.test(C)&&typeof window.XMLHttpRequest!=="object";
B.ie7=B.msie&&/msie 7.0/.test(C);
D.modal=function(I,H){return D.modal.impl.init(I,H)
};
D.modal.close=function(){D.modal.impl.close()
};
D.modal.focus=function(H){D.modal.impl.focus(H)
};
D.modal.setContainerDimensions=function(){D.modal.impl.setContainerDimensions()
};
D.modal.setPosition=function(){D.modal.impl.setPosition()
};
D.modal.update=function(H,I){D.modal.impl.update(H,I)
};
D.fn.modal=function(H){return D.modal.impl.init(this,H)
};
D.modal.defaults={appendTo:"body",focus:true,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:false,autoPosition:true,zIndex:1000,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:true,overlayClose:false,fixed:true,position:null,persist:false,modal:true,onOpen:null,onShow:null,onClose:null};
D.modal.impl={d:{},init:function(J,H){var I=this;
if(I.d.data){return false
}B.ieQuirks=B.msie&&!D.support.boxModel;
I.o=D.extend({},D.modal.defaults,H);
I.zIndex=I.o.zIndex;
I.occb=false;
if(typeof J==="object"){J=J instanceof D?J:D(J);
I.d.placeholder=false;
if(J.parent().parent().size()>0){J.before(D("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"}));
I.d.placeholder=true;
I.display=J.css("display");
if(!I.o.persist){I.d.orig=J.clone(true)
}}}else{if(typeof J==="string"||typeof J==="number"){J=D("<div></div>").html(J)
}else{alert("SimpleModal Error: Unsupported data type: "+typeof J);
return I
}}I.create(J);
J=null;
I.open();
if(D.isFunction(I.o.onShow)){I.o.onShow.apply(I,[I.d])
}return I
},create:function(I){var H=this;
H.getDimensions();
if(H.o.modal&&B.ie6){H.d.iframe=D('<iframe src="javascript:false;"></iframe>').css(D.extend(H.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:A[0],width:A[1],zIndex:H.o.zIndex,top:0,left:0})).appendTo(H.o.appendTo)
}H.d.overlay=D("<div></div>").attr("id",H.o.overlayId).addClass("simplemodal-overlay").css(D.extend(H.o.overlayCss,{display:"none",opacity:H.o.opacity/100,height:H.o.modal?G[0]:0,width:H.o.modal?G[1]:0,position:"fixed",left:0,top:0,zIndex:H.o.zIndex+1})).appendTo(H.o.appendTo);
H.d.container=D("<div></div>").attr("id",H.o.containerId).addClass("simplemodal-container").css(D.extend({position:H.o.fixed?"fixed":"absolute"},H.o.containerCss,{display:"none",zIndex:H.o.zIndex+2})).append(H.o.close&&H.o.closeHTML?D(H.o.closeHTML).addClass(H.o.closeClass):"").appendTo(H.o.appendTo);
H.d.wrap=D("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(H.d.container);
H.d.data=I.attr("id",I.attr("id")||H.o.dataId).addClass("simplemodal-data").css(D.extend(H.o.dataCss,{display:"none"})).appendTo("body");
I=null;
H.setContainerDimensions();
H.d.data.appendTo(H.d.wrap);
if(B.ie6||B.ieQuirks){H.fixIE()
}},bindEvents:function(){var H=this;
D("."+H.o.closeClass).bind("click.simplemodal",function(I){I.preventDefault();
H.close()
});
if(H.o.modal&&H.o.close&&H.o.overlayClose){H.d.overlay.bind("click.simplemodal",function(I){I.preventDefault();
H.close()
})
}E.bind("keydown.simplemodal",function(I){if(H.o.modal&&I.keyCode===9){H.watchTab(I)
}else{if((H.o.close&&H.o.escClose)&&I.keyCode===27){I.preventDefault();
H.close()
}}});
F.bind("resize.simplemodal orientationchange.simplemodal",function(){H.getDimensions();
H.o.autoResize?H.setContainerDimensions():H.o.autoPosition&&H.setPosition();
if(B.ie6||B.ieQuirks){H.fixIE()
}else{if(H.o.modal){H.d.iframe&&H.d.iframe.css({height:A[0],width:A[1]});
H.d.overlay.css({height:G[0],width:G[1]})
}}})
},unbindEvents:function(){D("."+this.o.closeClass).unbind("click.simplemodal");
E.unbind("keydown.simplemodal");
F.unbind(".simplemodal");
this.d.overlay.unbind("click.simplemodal")
},fixIE:function(){var H=this,I=H.o.position;
D.each([H.d.iframe||null,!H.o.modal?null:H.d.overlay,H.d.container.css("position")==="fixed"?H.d.container:null],function(T,M){if(M){var R="document.body.clientHeight",V="document.body.clientWidth",X="document.body.scrollHeight",U="document.body.scrollLeft",P="document.body.scrollTop",L="document.body.scrollWidth",K="document.documentElement.clientHeight",S="document.documentElement.clientWidth",Q="document.documentElement.scrollLeft",Y="document.documentElement.scrollTop",Z=M[0].style;
Z.position="absolute";
if(T<2){Z.removeExpression("height");
Z.removeExpression("width");
Z.setExpression("height",""+X+" > "+R+" ? "+X+" : "+R+' + "px"');
Z.setExpression("width",""+L+" > "+V+" ? "+L+" : "+V+' + "px"')
}else{var O,J;
if(I&&I.constructor===Array){var W=I[0]?typeof I[0]==="number"?I[0].toString():I[0].replace(/px/,""):M.css("top").replace(/px/,"");
O=W.indexOf("%")===-1?W+" + (t = "+Y+" ? "+Y+" : "+P+') + "px"':parseInt(W.replace(/%/,""))+" * (("+K+" || "+R+") / 100) + (t = "+Y+" ? "+Y+" : "+P+') + "px"';
if(I[1]){var N=typeof I[1]==="number"?I[1].toString():I[1].replace(/px/,"");
J=N.indexOf("%")===-1?N+" + (t = "+Q+" ? "+Q+" : "+U+') + "px"':parseInt(N.replace(/%/,""))+" * (("+S+" || "+V+") / 100) + (t = "+Q+" ? "+Q+" : "+U+') + "px"'
}}else{O="("+K+" || "+R+") / 2 - (this.offsetHeight / 2) + (t = "+Y+" ? "+Y+" : "+P+') + "px"';
J="("+S+" || "+V+") / 2 - (this.offsetWidth / 2) + (t = "+Q+" ? "+Q+" : "+U+') + "px"'
}Z.removeExpression("top");
Z.removeExpression("left");
Z.setExpression("top",O);
Z.setExpression("left",J)
}}})
},focus:function(K){var I=this,J=K&&D.inArray(K,["first","last"])!==-1?K:"first";
var H=D(":input:enabled:visible:"+J,I.d.wrap);
setTimeout(function(){H.length>0?H.focus():I.d.wrap.focus()
},10)
},getDimensions:function(){var I=this,H=typeof window.innerHeight==="undefined"?F.height():window.innerHeight;
G=[E.height(),E.width()];
A=[H,F.width()]
},getVal:function(H,I){return H?(typeof H==="number"?H:H==="auto"?0:H.indexOf("%")>0?((parseInt(H.replace(/%/,""))/100)*(I==="h"?A[0]:A[1])):parseInt(H.replace(/px/,""))):null
},update:function(H,J){var I=this;
if(!I.d.data){return false
}I.d.origHeight=I.getVal(H,"h");
I.d.origWidth=I.getVal(J,"w");
I.d.data.hide();
H&&I.d.container.css("height",H);
J&&I.d.container.css("width",J);
I.setContainerDimensions();
I.d.data.show();
I.o.focus&&I.focus();
I.unbindEvents();
I.bindEvents()
},setContainerDimensions:function(){var S=this,K=B.ie6||B.ie7;
var H=S.d.origHeight?S.d.origHeight:B.opera?S.d.container.height():S.getVal(K?S.d.container[0].currentStyle.height:S.d.container.css("height"),"h"),J=S.d.origWidth?S.d.origWidth:B.opera?S.d.container.width():S.getVal(K?S.d.container[0].currentStyle.width:S.d.container.css("width"),"w"),O=S.d.data.outerHeight(true),I=S.d.data.outerWidth(true);
S.d.origHeight=S.d.origHeight||H;
S.d.origWidth=S.d.origWidth||J;
var L=S.o.maxHeight?S.getVal(S.o.maxHeight,"h"):null,P=S.o.maxWidth?S.getVal(S.o.maxWidth,"w"):null,N=L&&L<A[0]?L:A[0],R=P&&P<A[1]?P:A[1];
var M=S.o.minHeight?S.getVal(S.o.minHeight,"h"):"auto";
if(!H){if(!O){H=M
}else{if(O>N){H=N
}else{if(S.o.minHeight&&M!=="auto"&&O<M){H=M
}else{H=O
}}}}else{H=S.o.autoResize&&H>N?N:H<M?M:H
}var Q=S.o.minWidth?S.getVal(S.o.minWidth,"w"):"auto";
if(!J){if(!I){J=Q
}else{if(I>R){J=R
}else{if(S.o.minWidth&&Q!=="auto"&&I<Q){J=Q
}else{J=I
}}}}else{J=S.o.autoResize&&J>R?R:J<Q?Q:J
}S.d.container.css({height:H,width:J});
S.d.wrap.css({overflow:(O>H||I>J)?"auto":"visible"});
S.o.autoPosition&&S.setPosition()
},setPosition:function(){var J=this,L,K,M=(A[0]/2)-(J.d.container.outerHeight(true)/2),I=(A[1]/2)-(J.d.container.outerWidth(true)/2),H=J.d.container.css("position")!=="fixed"?F.scrollTop():0;
if(J.o.position&&Object.prototype.toString.call(J.o.position)==="[object Array]"){L=H+(J.o.position[0]||M);
K=J.o.position[1]||I
}else{L=H+M;
K=I
}J.d.container.css({left:K,top:L})
},watchTab:function(I){var H=this;
if(D(I.target).parents(".simplemodal-container").length>0){H.inputs=D(":input:enabled:visible:first, :input:enabled:visible:last",H.d.data[0]);
if((!I.shiftKey&&I.target===H.inputs[H.inputs.length-1])||(I.shiftKey&&I.target===H.inputs[0])||H.inputs.length===0){I.preventDefault();
var J=I.shiftKey?"last":"first";
H.focus(J)
}}else{I.preventDefault();
H.focus()
}},open:function(){var H=this;
H.d.iframe&&H.d.iframe.show();
if(D.isFunction(H.o.onOpen)){H.o.onOpen.apply(H,[H.d])
}else{H.d.overlay.show();
H.d.container.show();
H.d.data.show()
}H.o.focus&&H.focus();
H.bindEvents()
},close:function(){var H=this;
if(!H.d.data){return false
}H.unbindEvents();
if(D.isFunction(H.o.onClose)&&!H.occb){H.occb=true;
H.o.onClose.apply(H,[H.d])
}else{if(H.d.placeholder){var I=D("#simplemodal-placeholder");
if(H.o.persist){I.replaceWith(H.d.data.removeClass("simplemodal-data").css("display",H.display))
}else{H.d.data.hide().remove();
I.replaceWith(H.d.orig)
}}else{H.d.data.hide().remove()
}H.d.container.hide().remove();
H.d.overlay.hide();
H.d.iframe&&H.d.iframe.hide().remove();
H.d.overlay.remove();
H.d={}
}}}
}));
var Belen={};
Belen.Global=(function(){return{ajaxUrls:{},urls:{},fbInitDone:false}
})();
Belen.Controller=(function(){return{}
})();
Belen.Controller.Home=(function(){return{}
})();
Belen.Controller.Post=(function(){return{}
})();
Belen.Controller.Search=(function(){return{}
})();
Belen.Controller.My=(function(){return{}
})();
Belen.Controller.StaticPages=(function(){return{}
})();
Belen.UI=(function(){return{}
})();
Belen.UI.Post=(function(){return{}
})();
Belen.UI.Search=(function(){return{}
})();
Belen.UI.My=(function(){return{}
})();
Belen.UI.StaticPages=(function(){return{}
})();
Belen.Lib=(function(){return{}
})();
/*
* jQuery Cycle2; version: 2.1.2 build: 20140216
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
(function(D){var A="2.1.2";
D.fn.cycle=function(E){var F;
if(this.length===0&&!D.isReady){F={s:this.selector,c:this.context};
D.fn.cycle.log("requeuing slideshow (dom not ready)");
D(function(){D(F.s,F.c).cycle(E)
});
return this
}return this.each(function(){var K,J,G,M;
var H=D(this);
var I=D.fn.cycle.log;
if(H.data("cycle.opts")){return 
}if(H.data("cycle-log")===false||(E&&E.log===false)||(J&&J.log===false)){I=D.noop
}I("--c2 init--");
K=H.data();
for(var L in K){if(K.hasOwnProperty(L)&&/^cycle[A-Z]+/.test(L)){M=K[L];
G=L.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,B);
I(G+":",M,"("+typeof M+")");
K[G]=M
}}J=D.extend({},D.fn.cycle.defaults,K,E||{});
J.timeoutId=0;
J.paused=J.paused||false;
J.container=H;
J._maxZ=J.maxZ;
J.API=D.extend({_container:H},D.fn.cycle.API);
J.API.log=I;
J.API.trigger=function(N,O){J.container.trigger(N,O);
return J.API
};
H.data("cycle.opts",J);
H.data("cycle.API",J.API);
J.API.trigger("cycle-bootstrap",[J,J.API]);
J.API.addInitialSlides();
J.API.preInitSlideshow();
if(J.slides.length){J.API.initSlideshow()
}})
};
D.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")
},addInitialSlides:function(){var F=this.opts();
var E=F.slides;
F.slideCount=0;
F.slides=D();
E=E.jquery?E:F.container.find(E);
if(F.random){E.sort(function(){return Math.random()-0.5
})
}F.API.add(E)
},preInitSlideshow:function(){var F=this.opts();
F.API.trigger("cycle-pre-initialize",[F]);
var E=D.fn.cycle.transitions[F.fx];
if(E&&D.isFunction(E.preInit)){E.preInit(F)
}F._preInitialized=true
},postInitSlideshow:function(){var F=this.opts();
F.API.trigger("cycle-post-initialize",[F]);
var E=D.fn.cycle.transitions[F.fx];
if(E&&D.isFunction(E.postInit)){E.postInit(F)
}},initSlideshow:function(){var G=this.opts();
var E=G.container;
var F;
G.API.calcFirstSlide();
if(G.container.css("position")=="static"){G.container.css("position","relative")
}D(G.slides[G.currSlide]).css({opacity:1,display:"block",visibility:"visible"});
G.API.stackSlides(G.slides[G.currSlide],G.slides[G.nextSlide],!G.reverse);
if(G.pauseOnHover){if(G.pauseOnHover!==true){E=D(G.pauseOnHover)
}E.hover(function(){G.API.pause(true)
},function(){G.API.resume(true)
})
}if(G.timeout){F=G.API.getSlideOpts(G.currSlide);
G.API.queueTransition(F,F.timeout+G.delay)
}G._initialized=true;
G.API.updateView(true);
G.API.trigger("cycle-initialized",[G]);
G.API.postInitSlideshow()
},pause:function(E){var G=this.opts(),F=G.API.getSlideOpts(),H=G.hoverPaused||G.paused;
if(E){G.hoverPaused=true
}else{G.paused=true
}if(!H){G.container.addClass("cycle-paused");
G.API.trigger("cycle-paused",[G]).log("cycle-paused");
if(F.timeout){clearTimeout(G.timeoutId);
G.timeoutId=0;
G._remainingTimeout-=(D.now()-G._lastQueue);
if(G._remainingTimeout<0||isNaN(G._remainingTimeout)){G._remainingTimeout=undefined
}}}},resume:function(G){var H=this.opts(),F=!H.hoverPaused&&!H.paused,E;
if(G){H.hoverPaused=false
}else{H.paused=false
}if(!F){H.container.removeClass("cycle-paused");
if(H.slides.filter(":animated").length===0){H.API.queueTransition(H.API.getSlideOpts(),H._remainingTimeout)
}H.API.trigger("cycle-resumed",[H,H._remainingTimeout]).log("cycle-resumed")
}},add:function(H,F){var I=this.opts();
var G=I.slideCount;
var J=false;
var E;
if(D.type(H)=="string"){H=D.trim(H)
}D(H).each(function(L){var M;
var K=D(this);
if(F){I.container.prepend(K)
}else{I.container.append(K)
}I.slideCount++;
M=I.API.buildSlideOpts(K);
if(F){I.slides=D(K).add(I.slides)
}else{I.slides=I.slides.add(K)
}I.API.initSlide(M,K,--I._maxZ);
K.data("cycle.opts",M);
I.API.trigger("cycle-slide-added",[I,M,K])
});
I.API.updateView(true);
J=I._preInitialized&&(G<2&&I.slideCount>=1);
if(J){if(!I._initialized){I.API.initSlideshow()
}else{if(I.timeout){E=I.slides.length;
I.nextSlide=I.reverse?E-1:1;
if(!I.timeoutId){I.API.queueTransition(I)
}}}}},calcFirstSlide:function(){var F=this.opts();
var E;
E=parseInt(F.startingSlide||0,10);
if(E>=F.slides.length||E<0){E=0
}F.currSlide=E;
if(F.reverse){F.nextSlide=E-1;
if(F.nextSlide<0){F.nextSlide=F.slides.length-1
}}else{F.nextSlide=E+1;
if(F.nextSlide==F.slides.length){F.nextSlide=0
}}},calcNextSlide:function(){var F=this.opts();
var E;
if(F.reverse){E=(F.nextSlide-1)<0;
F.nextSlide=E?F.slideCount-1:F.nextSlide-1;
F.currSlide=E?0:F.nextSlide+1
}else{E=(F.nextSlide+1)==F.slides.length;
F.nextSlide=E?0:F.nextSlide+1;
F.currSlide=E?F.slides.length-1:F.nextSlide-1
}},calcTx:function(H,F){var G=H;
var E;
if(F&&G.manualFx){E=D.fn.cycle.transitions[G.manualFx]
}if(!E){E=D.fn.cycle.transitions[G.fx]
}if(!E){E=D.fn.cycle.transitions.fade;
G.API.log('Transition "'+G.fx+'" not found.  Using fade.')
}return E
},prepareTx:function(G,F){var J=this.opts();
var L,K,H,I,E;
if(J.slideCount<2){J.timeoutId=0;
return 
}if(G&&(!J.busy||J.manualTrump)){J.API.stopTransition();
J.busy=false;
clearTimeout(J.timeoutId);
J.timeoutId=0
}if(J.busy){return 
}if(J.timeoutId===0&&!G){return 
}K=J.slides[J.currSlide];
H=J.slides[J.nextSlide];
I=J.API.getSlideOpts(J.nextSlide);
E=J.API.calcTx(I,G);
J._tx=E;
if(G&&I.manualSpeed!==undefined){I.speed=I.manualSpeed
}if(J.nextSlide!=J.currSlide&&(G||(!J.paused&&!J.hoverPaused&&J.timeout))){J.API.trigger("cycle-before",[I,K,H,F]);
if(E.before){E.before(I,K,H,F)
}L=function(){J.busy=false;
if(!J.container.data("cycle.opts")){return 
}if(E.after){E.after(I,K,H,F)
}J.API.trigger("cycle-after",[I,K,H,F]);
J.API.queueTransition(I);
J.API.updateView(true)
};
J.busy=true;
if(E.transition){E.transition(I,K,H,F,L)
}else{J.API.doTransition(I,K,H,F,L)
}J.API.calcNextSlide();
J.API.updateView()
}else{J.API.queueTransition(I)
}},doTransition:function(I,J,F,G,L){var E=I;
var M=D(J),H=D(F);
var K=function(){H.animate(E.animIn||{opacity:1},E.speed,E.easeIn||E.easing,L)
};
H.css(E.cssBefore||{});
M.animate(E.animOut||{},E.speed,E.easeOut||E.easing,function(){M.css(E.cssAfter||{});
if(!E.sync){K()
}});
if(E.sync){K()
}},queueTransition:function(G,E){var F=this.opts();
var H=E!==undefined?E:G.timeout;
if(F.nextSlide===0&&--F.loop===0){F.API.log("terminating; loop=0");
F.timeout=0;
if(H){setTimeout(function(){F.API.trigger("cycle-finished",[F])
},H)
}else{F.API.trigger("cycle-finished",[F])
}F.nextSlide=F.currSlide;
return 
}if(F.continueAuto!==undefined){if(F.continueAuto===false||(D.isFunction(F.continueAuto)&&F.continueAuto()===false)){F.API.log("terminating automatic transitions");
F.timeout=0;
if(F.timeoutId){clearTimeout(F.timeoutId)
}return 
}}if(H){F._lastQueue=D.now();
if(E===undefined){F._remainingTimeout=G.timeout
}if(!F.paused&&!F.hoverPaused){F.timeoutId=setTimeout(function(){F.API.prepareTx(false,!F.reverse)
},H)
}}},stopTransition:function(){var E=this.opts();
if(E.slides.filter(":animated").length){E.slides.stop(false,true);
E.API.trigger("cycle-transition-stopped",[E])
}if(E._tx&&E._tx.stopTransition){E._tx.stopTransition(E)
}},advanceSlide:function(F){var E=this.opts();
clearTimeout(E.timeoutId);
E.timeoutId=0;
E.nextSlide=E.currSlide+F;
if(E.nextSlide<0){E.nextSlide=E.slides.length-1
}else{if(E.nextSlide>=E.slides.length){E.nextSlide=0
}}E.API.prepareTx(true,F>=0);
return false
},buildSlideOpts:function(F){var H=this.opts();
var K,E;
var G=F.data()||{};
for(var J in G){if(G.hasOwnProperty(J)&&/^cycle[A-Z]+/.test(J)){K=G[J];
E=J.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,B);
H.API.log("["+(H.slideCount-1)+"]",E+":",K,"("+typeof K+")");
G[E]=K
}}G=D.extend({},D.fn.cycle.defaults,H,G);
G.slideNum=H.slideCount;
try{delete G.API;
delete G.slideCount;
delete G.currSlide;
delete G.nextSlide;
delete G.slides
}catch(I){}return G
},getSlideOpts:function(F){var H=this.opts();
if(F===undefined){F=H.currSlide
}var E=H.slides[F];
var G=D(E).data("cycle.opts");
return D.extend({},H,G)
},initSlide:function(H,E,F){var G=this.opts();
E.css(H.slideCss||{});
if(F>0){E.css("zIndex",F)
}if(isNaN(H.speed)){H.speed=D.fx.speeds[H.speed]||D.fx.speeds._default
}if(!H.sync){H.speed=H.speed/2
}E.addClass(G.slideClass)
},updateView:function(E,J,F){var I=this.opts();
if(!I._initialized){return 
}var H=I.API.getSlideOpts();
var G=I.slides[I.currSlide];
if(!E&&J!==true){I.API.trigger("cycle-update-view-before",[I,H,G]);
if(I.updateView<0){return 
}}if(I.slideActiveClass){I.slides.removeClass(I.slideActiveClass).eq(I.currSlide).addClass(I.slideActiveClass)
}if(E&&I.hideNonActive){I.slides.filter(":not(."+I.slideActiveClass+")").css("visibility","hidden")
}if(I.updateView===0){setTimeout(function(){I.API.trigger("cycle-update-view",[I,H,G,E])
},H.speed/(I.sync?2:1))
}if(I.updateView!==0){I.API.trigger("cycle-update-view",[I,H,G,E])
}if(E){I.API.trigger("cycle-update-view-after",[I,H,G])
}},getComponent:function(F){var G=this.opts();
var E=G[F];
if(typeof E==="string"){return(/^\s*[\>|\+|~]/).test(E)?G.container.find(E):D(E)
}if(E.jquery){return E
}return D(E)
},stackSlides:function(J,H,G){var I=this.opts();
if(!J){J=I.slides[I.currSlide];
H=I.slides[I.nextSlide];
G=!I.reverse
}D(J).css("zIndex",I.maxZ);
var F;
var K=I.maxZ-2;
var E=I.slideCount;
if(G){for(F=I.currSlide+1;
F<E;
F++){D(I.slides[F]).css("zIndex",K--)
}for(F=0;
F<I.currSlide;
F++){D(I.slides[F]).css("zIndex",K--)
}}else{for(F=I.currSlide-1;
F>=0;
F--){D(I.slides[F]).css("zIndex",K--)
}for(F=E-1;
F>I.currSlide;
F--){D(I.slides[F]).css("zIndex",K--)
}}D(H).css("zIndex",I.maxZ-1)
},getSlideIndex:function(E){return this.opts().slides.index(E)
}};
D.fn.cycle.log=function C(){if(window.console&&console.log){console.log("[cycle2] "+Array.prototype.join.call(arguments," "))
}};
D.fn.cycle.version=function(){return"Cycle2: "+A
};
function B(E){return(E||"").toLowerCase()
}D.fn.cycle.transitions={custom:{},none:{before:function(G,H,F,E){G.API.stackSlides(F,H,E);
G.cssBefore={opacity:1,visibility:"visible",display:"block"}
}},fade:{before:function(H,I,G,F){var E=H.API.getSlideOpts(H.nextSlide).slideCss||{};
H.API.stackSlides(I,G,F);
H.cssBefore=D.extend(E,{opacity:0,visibility:"visible",display:"block"});
H.animIn={opacity:1};
H.animOut={opacity:0}
}},fadeout:{before:function(H,I,G,F){var E=H.API.getSlideOpts(H.nextSlide).slideCss||{};
H.API.stackSlides(I,G,F);
H.cssBefore=D.extend(E,{opacity:1,visibility:"visible",display:"block"});
H.animOut={opacity:0}
}},scrollHorz:{before:function(H,I,G,F){H.API.stackSlides(I,G,F);
var E=H.container.css("overflow","hidden").width();
H.cssBefore={left:F?E:-E,top:0,opacity:1,visibility:"visible",display:"block"};
H.cssAfter={zIndex:H._maxZ-2,left:0};
H.animIn={left:0};
H.animOut={left:F?-E:E}
}}};
D.fn.cycle.defaults={allowWrap:true,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:true,loop:0,manualFx:undefined,manualSpeed:undefined,manualTrump:true,maxZ:100,pauseOnHover:false,reverse:false,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:true,timeout:4000,updateView:0};
D(document).ready(function(){D(D.fn.cycle.defaults.autoSelector).cycle()
})
})(jQuery);
/* Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
(function(D){D.extend(D.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null});
D(document).on("cycle-initialized",function(L,K){var G=K.autoHeight;
var H=D.type(G);
var F=null;
var I;
if(H!=="string"&&H!=="number"){return 
}K.container.on("cycle-slide-added cycle-slide-removed",B);
K.container.on("cycle-destroyed",C);
if(G=="container"){K.container.on("cycle-before",E)
}else{if(H==="string"&&/\d+\:\d+/.test(G)){I=G.match(/(\d+)\:(\d+)/);
I=I[1]/I[2];
K._autoHeightRatio=I
}}if(H!=="number"){K._autoHeightOnResize=function(){clearTimeout(F);
F=setTimeout(J,50)
};
D(window).on("resize orientationchange",K._autoHeightOnResize)
}setTimeout(J,30);
function J(){B(L,K)
}});
function B(I,H){var K,F,J;
var G=H.autoHeight;
if(G=="container"){F=D(H.slides[H.currSlide]).outerHeight();
H.container.height(F)
}else{if(H._autoHeightRatio){H.container.height(H.container.width()/H._autoHeightRatio)
}else{if(G==="calc"||(D.type(G)=="number"&&G>=0)){if(G==="calc"){J=A(I,H)
}else{if(G>=H.slides.length){J=0
}else{J=G
}}if(J==H._sentinelIndex){return 
}H._sentinelIndex=J;
if(H._sentinel){H._sentinel.remove()
}K=D(H.slides[J].cloneNode(true));
K.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel");
K.css({position:"static",visibility:"hidden",display:"block"}).prependTo(H.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active");
K.find("*").css("visibility","hidden");
H._sentinel=K
}}}}function A(I,H){var G=0,F=-1;
H.slides.each(function(J){var K=D(this).height();
if(K>F){F=K;
G=J
}});
return G
}function E(K,J,H,F,G){var I=D(F).outerHeight();
J.container.animate({height:I},J.autoHeightSpeed,J.autoHeightEasing)
}function C(G,F){if(F._autoHeightOnResize){D(window).off("resize orientationchange",F._autoHeightOnResize);
F._autoHeightOnResize=null
}F.container.off("cycle-slide-added cycle-slide-removed",B);
F.container.off("cycle-destroyed",C);
F.container.off("cycle-before",E);
if(F._sentinel){F._sentinel.remove();
F._sentinel=null
}}})(jQuery);
/* caption plugin for Cycle2;  version: 20130306 */
(function(A){A.extend(A.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"});
A(document).on("cycle-update-view",function(F,E,D,C){if(E.captionModule!=="caption"){return 
}var B;
A.each(["caption","overlay"],function(){var G=this;
var I=D[G+"Template"];
var H=E.API.getComponent(G);
if(H.length&&I){H.html(E.API.tmpl(I,D,E,C));
H.show()
}else{H.hide()
}})
});
A(document).on("cycle-destroyed",function(D,C){var B;
A.each(["caption","overlay"],function(){var E=this,F=C[E+"Template"];
if(C[E]&&F){B=C.API.getComponent("caption");
B.empty()
}})
})
})(jQuery);
/* command plugin for Cycle2;  version: 20130707 */
(function(B){var A=B.fn.cycle;
B.fn.cycle=function(D){var G,F,E;
var C=B.makeArray(arguments);
if(B.type(D)=="number"){return this.cycle("goto",D)
}if(B.type(D)=="string"){return this.each(function(){var H;
G=D;
E=B(this).data("cycle.opts");
if(E===undefined){A.log('slideshow must be initialized before sending commands; "'+G+'" ignored');
return 
}else{G=G=="goto"?"jump":G;
F=E.API[G];
if(B.isFunction(F)){H=B.makeArray(C);
H.shift();
return F.apply(E.API,H)
}else{A.log("unknown command: ",G)
}}})
}else{return A.apply(this,arguments)
}};
B.extend(B.fn.cycle,A);
B.extend(A.API,{next:function(){var D=this.opts();
if(D.busy&&!D.manualTrump){return 
}var C=D.reverse?-1:1;
if(D.allowWrap===false&&(D.currSlide+C)>=D.slideCount){return 
}D.API.advanceSlide(C);
D.API.trigger("cycle-next",[D]).log("cycle-next")
},prev:function(){var D=this.opts();
if(D.busy&&!D.manualTrump){return 
}var C=D.reverse?1:-1;
if(D.allowWrap===false&&(D.currSlide+C)<0){return 
}D.API.advanceSlide(C);
D.API.trigger("cycle-prev",[D]).log("cycle-prev")
},destroy:function(){this.stop();
var D=this.opts();
var C=B.isFunction(B._data)?B._data:B.noop;
clearTimeout(D.timeoutId);
D.timeoutId=0;
D.API.stop();
D.API.trigger("cycle-destroyed",[D]).log("cycle-destroyed");
D.container.removeData();
C(D.container[0],"parsedAttrs",false);
if(!D.retainStylesOnDestroy){D.container.removeAttr("style");
D.slides.removeAttr("style");
D.slides.removeClass(D.slideActiveClass)
}D.slides.each(function(){B(this).removeData();
C(this,"parsedAttrs",false)
})
},jump:function(D){var E;
var F=this.opts();
if(F.busy&&!F.manualTrump){return 
}var C=parseInt(D,10);
if(isNaN(C)||C<0||C>=F.slides.length){F.API.log("goto: invalid slide index: "+C);
return 
}if(C==F.currSlide){F.API.log("goto: skipping, already on slide",C);
return 
}F.nextSlide=C;
clearTimeout(F.timeoutId);
F.timeoutId=0;
F.API.log("goto: ",C," (zero-index)");
E=F.currSlide<F.nextSlide;
F.API.prepareTx(true,E)
},stop:function(){var D=this.opts();
var C=D.container;
clearTimeout(D.timeoutId);
D.timeoutId=0;
D.API.stopTransition();
if(D.pauseOnHover){if(D.pauseOnHover!==true){C=B(D.pauseOnHover)
}C.off("mouseenter mouseleave")
}D.API.trigger("cycle-stopped",[D]).log("cycle-stopped")
},reinit:function(){var C=this.opts();
C.API.destroy();
C.container.cycle()
},remove:function(E){var I=this.opts();
var C,D,H=[],G=1;
for(var F=0;
F<I.slides.length;
F++){C=I.slides[F];
if(F==E){D=C
}else{H.push(C);
B(C).data("cycle.opts").slideNum=G;
G++
}}if(D){I.slides=B(H);
I.slideCount--;
B(D).remove();
if(E==I.currSlide){I.API.advanceSlide(1)
}else{if(E<I.currSlide){I.currSlide--
}else{I.currSlide++
}}I.API.trigger("cycle-slide-removed",[I,E,D]).log("cycle-slide-removed");
I.API.updateView()
}}});
B(document).on("click.cycle","[data-cycle-cmd]",function(E){E.preventDefault();
var D=B(this);
var F=D.data("cycle-cmd");
var C=D.data("cycle-context")||".cycle-slideshow";
B(C).cycle(F,D.data("cycle-arg"))
})
})(jQuery);
/* hash plugin for Cycle2;  version: 20130905 */
(function(B){B(document).on("cycle-pre-initialize",function(D,C){A(C,true);
C._onHashChange=function(){A(C,false)
};
B(window).on("hashchange",C._onHashChange)
});
B(document).on("cycle-update-view",function(E,D,C){if(C.hash&&("#"+C.hash)!=window.location.hash){D._hashFence=true;
window.location.hash=C.hash
}});
B(document).on("cycle-destroyed",function(D,C){if(C._onHashChange){B(window).off("hashchange",C._onHashChange)
}});
function A(D,C){var E;
if(D._hashFence){D._hashFence=false;
return 
}E=window.location.hash.substring(1);
D.slides.each(function(G){if(B(this).data("cycle-hash")==E){if(C===true){D.startingSlide=G
}else{var F=D.currSlide<G;
D.nextSlide=G;
D.API.prepareTx(true,F)
}return false
}})
}})(jQuery);
/* loader plugin for Cycle2;  version: 20131121 */
(function(A){A.extend(A.fn.cycle.defaults,{loader:false});
A(document).on("cycle-bootstrap",function(D,B){var E;
if(!B.loader){return 
}E=B.API.add;
B.API.add=C;
function C(K,I){var H=[];
if(A.type(K)=="string"){K=A.trim(K)
}else{if(A.type(K)==="array"){for(var J=0;
J<K.length;
J++){K[J]=A(K[J])[0]
}}}K=A(K);
var G=K.length;
if(!G){return 
}K.css("visibility","hidden").appendTo("body").each(function(P){var Q=0;
var N=A(this);
var M=N.is("img")?N:N.find("img");
N.data("index",P);
M=M.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])');
if(!M.length){--G;
H.push(N);
return 
}Q=M.length;
M.each(function(){if(this.complete){O()
}else{A(this).load(function(){O()
}).on("error",function(){if(--Q===0){B.API.log("slide skipped; img not loaded:",this.src);
if(--G===0&&B.loader=="wait"){E.apply(B.API,[H,I])
}}})
}});
function O(){if(--Q===0){--G;
F(N)
}}});
if(G){B.container.addClass("cycle-loading")
}function F(M){var N;
if(B.loader=="wait"){H.push(M);
if(G===0){H.sort(L);
E.apply(B.API,[H,I]);
B.container.removeClass("cycle-loading")
}}else{N=A(B.slides[B.currSlide]);
E.apply(B.API,[M,I]);
N.show();
B.container.removeClass("cycle-loading")
}}function L(N,M){return N.data("index")-M.data("index")
}}})
})(jQuery);
/* pager plugin for Cycle2;  version: 20130525 */
(function(C){C.extend(C.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerTemplate:"<span>&bull;</span>"});
C(document).on("cycle-bootstrap",function(F,E,D){D.buildPagerLink=A
});
C(document).on("cycle-slide-added",function(F,E,D,G){if(E.pager){E.API.buildPagerLink(E,D,G);
E.API.page=B
}});
C(document).on("cycle-slide-removed",function(H,G,E,F){if(G.pager){var D=G.API.getComponent("pager");
D.each(function(){var I=C(this);
C(I.children()[E]).remove()
})
}});
C(document).on("cycle-update-view",function(G,F,E){var D;
if(F.pager){D=F.API.getComponent("pager");
D.each(function(){C(this).children().removeClass(F.pagerActiveClass).eq(F.currSlide).addClass(F.pagerActiveClass)
})
}});
C(document).on("cycle-destroyed",function(F,E){var D=E.API.getComponent("pager");
if(D){D.children().off(E.pagerEvent);
if(E.pagerTemplate){D.empty()
}}});
function A(G,F,D){var H;
var E=G.API.getComponent("pager");
E.each(function(){var I=C(this);
if(F.pagerTemplate){var J=G.API.tmpl(F.pagerTemplate,F,G,D[0]);
H=C(J).appendTo(I)
}else{H=I.children().eq(G.slideCount-1)
}H.on(G.pagerEvent,function(K){K.preventDefault();
G.API.page(I,K.currentTarget)
})
})
}function B(D,I){var G=this.opts();
if(G.busy&&!G.manualTrump){return 
}var E=D.children().index(I);
var H=E;
var F=G.currSlide<H;
if(G.currSlide==H){return 
}G.nextSlide=H;
G.API.prepareTx(true,F);
G.API.trigger("cycle-pager-activated",[G,D,I])
}})(jQuery);
/* prevnext plugin for Cycle2;  version: 20130709 */
(function(A){A.extend(A.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:false});
A(document).on("cycle-initialized",function(E,C){C.API.getComponent("next").on(C.nextEvent,function(F){F.preventDefault();
C.API.next()
});
C.API.getComponent("prev").on(C.prevEvent,function(F){F.preventDefault();
C.API.prev()
});
if(C.swipe){var B=C.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle";
var D=C.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";
C.container.on(B,function(F){C.API.next()
});
C.container.on(D,function(){C.API.prev()
})
}});
A(document).on("cycle-update-view",function(G,B,F,I){if(B.allowWrap){return 
}var J=B.disabledClass;
var D=B.API.getComponent("next");
var C=B.API.getComponent("prev");
var H=B._prevBoundry||0;
var E=(B._nextBoundry!==undefined)?B._nextBoundry:B.slideCount-1;
if(B.currSlide==E){D.addClass(J).prop("disabled",true)
}else{D.removeClass(J).prop("disabled",false)
}if(B.currSlide===H){C.addClass(J).prop("disabled",true)
}else{C.removeClass(J).prop("disabled",false)
}});
A(document).on("cycle-destroyed",function(C,B){B.API.getComponent("prev").off(B.nextEvent);
B.API.getComponent("next").off(B.prevEvent);
B.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
})
})(jQuery);
/* progressive loader plugin for Cycle2;  version: 20130315 */
(function(A){A.extend(A.fn.cycle.defaults,{progressive:false});
A(document).on("cycle-pre-initialize",function(G,B){if(!B.progressive){return 
}var E=B.API;
var J=E.next;
var H=E.prev;
var K=E.prepareTx;
var I=A.type(B.progressive);
var C,D;
if(I=="array"){C=B.progressive
}else{if(A.isFunction(B.progressive)){C=B.progressive(B)
}else{if(I=="string"){D=A(B.progressive);
C=A.trim(D.html());
if(!C){return 
}if(/^(\[)/.test(C)){try{C=A.parseJSON(C)
}catch(F){E.log("error parsing progressive slides",F);
return 
}}else{C=C.split(new RegExp(D.data("cycle-split")||"\n"));
if(!C[C.length-1]){C.pop()
}}}}}if(K){E.prepareTx=function(O,N){var M,L;
if(O||C.length===0){K.apply(B.API,[O,N]);
return 
}if(N&&B.currSlide==(B.slideCount-1)){L=C[0];
C=C.slice(1);
B.container.one("cycle-slide-added",function(Q,P){setTimeout(function(){P.API.advanceSlide(1)
},50)
});
B.API.add(L)
}else{if(!N&&B.currSlide===0){M=C.length-1;
L=C[M];
C=C.slice(0,M);
B.container.one("cycle-slide-added",function(Q,P){setTimeout(function(){P.currSlide=1;
P.API.advanceSlide(-1)
},50)
});
B.API.add(L,true)
}else{K.apply(B.API,[O,N])
}}}
}if(J){E.next=function(){var M=this.opts();
if(C.length&&M.currSlide==(M.slideCount-1)){var L=C[0];
C=C.slice(1);
M.container.one("cycle-slide-added",function(O,N){J.apply(N.API);
N.container.removeClass("cycle-loading")
});
M.container.addClass("cycle-loading");
M.API.add(L)
}else{J.apply(M.API)
}}
}if(H){E.prev=function(){var N=this.opts();
if(C.length&&N.currSlide===0){var M=C.length-1;
var L=C[M];
C=C.slice(0,M);
N.container.one("cycle-slide-added",function(P,O){O.currSlide=1;
O.API.advanceSlide(-1);
O.container.removeClass("cycle-loading")
});
N.container.addClass("cycle-loading");
N.API.add(L,true)
}else{H.apply(N.API)
}}
}})
})(jQuery);
/* tmpl plugin for Cycle2;  version: 20121227 */
(function(A){A.extend(A.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"});
A.extend(A.fn.cycle.API,{tmpl:function(E,D){var C=new RegExp(D.tmplRegex||A.fn.cycle.defaults.tmplRegex,"g");
var B=A.makeArray(arguments);
B.shift();
return E.replace(C,function(G,K){var H,F,J,L,I=K.split(".");
for(H=0;
H<B.length;
H++){J=B[H];
if(!J){continue
}if(I.length>1){L=J;
for(F=0;
F<I.length;
F++){J=L;
L=L[I[F]]||K
}}else{L=J[K]
}if(A.isFunction(L)){return L.apply(J,B)
}if(L!==undefined&&L!==null&&L!=K){return L
}}return K
})
}})
})(jQuery);
$(document).ready(function(){$("#ImageScroll #ArrowNext, #ImageScroll #ArrowPrev").on({mouseenter:function(){$(this).addClass("hover")
},mouseleave:function(){$(this).removeClass("hover")
}});
$("#RefineSearchButton, #FiltersFormContainer .drop-down-close").on("click",function(){$("#MapSearchLeft").toggleClass("open")
});
$("#MapAddressInput").focus(function(){$("#MapSearchLeft").addClass("open")
});
$("#ResetFilters").on({mouseenter:function(){$(this).addClass("hover")
},mouseleave:function(){$(this).removeClass("hover")
},click:function(){}});
$(".button-toggle").on({mouseenter:function(){if(!$(this).hasClass("active")){$(this).addClass("hover")
}},mouseleave:function(){$(this).removeClass("hover")
},click:function(){$(".button-toggle.active").removeClass("active");
$(this).addClass("active")
}});
$("#KijijiAlert").find(".button-open").on("click",function(){MRP.search.fillAlertsForm();
openModal("KijijiAlerts")
});
$("#SaveSearch").on("click",function(A){A.preventDefault();
openModal("SaveSearchModal")
});
$("#SaveSearchSubmit").on("click",function(){$("#SaveSearchForm").submit()
});
$("#SaveSearchForm").submit(function(){$(".SaveSearchForm").find(".error").removeClass("error");
$(".error-message").hide();
var A=0;
if($("#SavedSearch").val()==""){$("#SaveSearchLabel").addClass("error");
$("#Error1").show();
A=1;
return false
}else{$("#SavedSearches").find("option").each(function(){if($(this).text()===$("#SavedSearch").val()){$("#SaveSearchLabel").addClass("error");
$("#Error2").show();
A=1;
return false
}})
}if(A==1){return false
}else{$("#SavedSearchForm").submit()
}});
$("#SavedSearches").on("change",function(){if($("#SavedSearches").find(":selected").val()==0){$("#SaveSearchLabel, p.or").removeClass("disabled");
$("#SavedSearch").removeAttr("disabled")
}else{$("#SaveSearchLabel, p.or").addClass("disabled");
$("#SavedSearch").attr("disabled","disabled")
}});
$("#SavedSearches").on({mouseenter:function(){$(this).addClass("hover")
},mouseleave:function(){$(this).removeClass("hover")
},click:function(){$(this).toggleClass("open")
}});
$(window).resize(function(){adjustMapHeight()
});
adjustMapHeight();
$(".price-button").on("click",function(){if($(this).attr("id")=="priceType1"){$("#priceAmount").removeAttr("disabled")
}else{$("#priceAmount").val("").attr("disabled","disabled")
}})
});
function adjustMapHeight(){var A=$(window).height();
if(A>660){$("#MRPMap, #ListCollapse, #ListCollapse").css("height",A-325+"px");
$("#ResultsList").css("height",A-357+"px")
}else{$("#MRPMap, #ListCollapse, #ListCollapse").css("height","360px");
$("#ResultsList").css("height","328px")
}}function clearForm(A){$("#"+A).find("input[type=text], textarea").val("").removeAttr("checked").removeAttr("selected");
$("#"+A+" .error").removeClass("error")
}function populateFormPlaceholders(A){$("#"+A+" *[data-placeholder]").each(function(){$(this).val($(this).data("placeholder")).addClass("placeholder-text")
})
}function openModal(D,C){if(C){clearForm(C);
populateFormPlaceholders(C)
}if($(".modal-overlay").length<1){$("body").prepend('<div class="modal-overlay"></div>')
}$(".modal-overlay").fadeIn(150);
var B=$("#"+D),A=$(window);
posLeft=(A.width()-B.width())/2,posTop=window.pageYOffset+(A.height()-B.height())/3;
if(posLeft<0){posLeft=0
}if(posTop<0){posTop=0
}B.css({top:posTop+"px",left:posLeft+"px"});
B.fadeIn(150);
$(".close-modal").on("click",function(E){E.preventDefault();
$(".modal-overlay").fadeOut(150);
$(this).closest(".modal").fadeOut(150)
})
};
