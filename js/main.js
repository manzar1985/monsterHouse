$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 160) {
            $("header").addClass("height-0");
            if (scroll >= 300) {
                $("header").addClass("fixHeader");
            }else{
                $("header").removeClass("fixHeader");
            }
        }else{
            $("header").removeClass("height-0");
        }
    });

    var div_name = $('.sec_sticky');
    var div_name_1 = $('.sec_sticky_1');
    var div_top;
    var div_top_1;
    setTimeout(function(){ 
        div_top = div_name.offset().top;
        div_top = div_top - 130;

        div_top_1 = div_name_1.offset().top;
        div_top_1 = div_top_1 - 130;
     }, 500);
     function sticky_relocate() {
        var div_par_width = div_name.parents('.sticky_parent').width();
        var div_par_width_1 = div_name_1.parents('.sticky_parent').width();
        var window_top = $(window).scrollTop();
        if (window_top > div_top) {
            $('.sec_sticky').addClass('stick');
            $('.sec_sticky').css('width', div_par_width+'px');
        } else {
            $('.sec_sticky').removeClass('stick');
            $('.sec_sticky').removeAttr("style");
        }
        if (window_top > div_top_1) {
            $('.sec_sticky_1').addClass('stick');
            $('.sec_sticky_1').css('width', div_par_width_1+'px');
        } else {
            $('.sec_sticky_1').removeClass('stick');
            $('.sec_sticky_1').removeAttr("style"); 
        }
    }
    var viewportWidth = $(window).width();
    $(window).bind('resize load',function() {
        if(viewportWidth > 767){
            $(".nav-item.dropdown").hover(function(){
                $('.dropdown-toggle', this).trigger('click'); 
            });
            $(window).scroll(sticky_relocate);
        }
    });
    
})