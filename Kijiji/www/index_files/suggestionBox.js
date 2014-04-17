(function(){dust.register("suggestionBox",B);
function B(D,C){return D.section(C._get(true,[]),C,{block:A},null)
}function A(D,C){return D.write('<li class="').reference(C._get(false,["suggestionClasses"]),C,"h").write('" data-cat-id="').reference(C._get(false,["categoryId"]),C,"h").write('" data-loc-id="').reference(C._get(false,["locId"]),C,"h").write('" title="').reference(C._get(false,["suggestion"]),C,"h").write('"><a href="#">').reference(C._get(false,["suggestionForDisplay"]),C,"h").write("</a></li>")
}return B
})();