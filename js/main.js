$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 200) $('.details').addClass('fixed');
        else $('.details').removeClass('fixed');
    });
});