(function(){dust.register("galleryItem",B);
function B(D,C){return D.section(C._get(true,[]),C,{block:A},null)
}function A(D,C){return D.write('<table data-link="').reference(C._get(false,["viewAdSeoLink"]),C,"h").write('"><tr><td class="').reference(C._get(false,["classUrgent"]),C,"h").write('"><div class="img-container"><img src="').reference(C._get(false,["imageUrl"]),C,"h").write('"/></div><div class="urgent-item"/></td></tr><tr><td><div class="description">').reference(C._get(false,["title"]),C,"h",["s"]).write("</div>").reference(C._get(false,["priceString"]),C,"h",["s"]).write("</td></tr></table>")
}return B
})();