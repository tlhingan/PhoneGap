(function(){dust.register("locationPickerList",B);
function B(D,C){return D.section(C._get(false,["locations"]),C,{block:A},null)
}function A(D,C){return D.write('<li data-loc-id="').reference(C._get(false,["locId"]),C,"h").write('" class="').reference(C._get(false,["locClasses"]),C,"h").write('"><a href="javascript: void(0)">').reference(C._get(false,["locName"]),C,"h").write("</a></li>")
}return B
})();