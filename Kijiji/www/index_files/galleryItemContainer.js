(function(){dust.register("galleryItemContainer",A);
function A(C,B){return C.write('<div class="gallerySection" style="left: ').reference(B._get(false,["leftPosition"]),B,"h").write('px;">').reference(B._get(false,["galleryAds"]),B,"h",["s"]).write("</div>")
}return A
})();