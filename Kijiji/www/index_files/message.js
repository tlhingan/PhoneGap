(function(){dust.register("message",E);
function E(H,G){return H.write('<div class="message-container ').reference(G._get(false,["messageClass"]),G,"h").write('"><div class="icon"></div><div class="close-x"></div><div class="message">').section(G._get(false,["messageTextHeadline"]),G,{block:D},null).reference(G._get(false,["messageText"]),G,"h",["s"]).section(G._get(false,["links"]),G,{block:B},null).write("</div></div>")
}function D(H,G){return H.write("<strong>").reference(G._get(true,[]),G,"h",["s"]).write("</strong>").section(G._get(false,["messageText"]),G,{block:C},null)
}function C(H,G){return H.write("<br/>")
}function B(H,G){return H.helper("ne",G,{"else":A,block:F},{key:G._get(false,["$idx"]),value:0,type:"number"}).write("<a href='").reference(G._get(false,["url"]),G,"h").write("'>").reference(G._get(false,["text"]),G,"h",["s"]).write("</a>")
}function A(H,G){return H.write("<br>")
}function F(H,G){return H.write(" | ")
}return E
})();