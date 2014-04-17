var updateNav = function() {
    if($(window).width() > 1150) {
        $('nav').addClass('large').animate({height: "70px"}, 500);
        $('#nav-top').css({clear : 'none', display : 'inline-table'});
    } else {
        $('nav').removeClass('large');
        $('#nav-top').css({clear : 'both'});
        $('nav').animate({height: "70px"}, 500); //reqiored for menu to be visible in IE8...
        $('#nav-top').fadeOut();
    }
};


$(window).load(function(){
    $(window).resize(function() { updateNav(); });
    updateNav();

    $('#menu-button').on('click', function() {
        if($('#nav-top').is(':visible')) {
            $('#nav-top').fadeOut();
            $('nav').animate({height: "70px"}, 500);
        } else {
            $('#nav-top').fadeIn('fast', function() {  });
            $('nav').animate({height: "142px"}, 500);
        }
    });
});
