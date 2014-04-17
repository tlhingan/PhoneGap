(function(){dust.register("groupValidationErrors",D);
function D(F,E){return F.section(E._get(false,["mainErrorMessage"]),E,{block:C},null).section(E._get(false,["errorMessages"]),E,{block:B},null).section(E._get(false,["mainErrorMessage"]),E,{block:A},null)
}function C(F,E){return F.write('<div class="error-list-heading">').reference(E._get(true,[]),E,"h",["s"]).write('</div><ul class="error-list">')
}function B(F,E){return F.write("<li>").reference(E._get(true,[]),E,"h",["s"]).write("</li>")
}function A(F,E){return F.write("</ul>")
}return D
})();