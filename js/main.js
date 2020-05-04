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

    var viewportWidth = $(window).width();
    console.log(viewportWidth)
    $(window).bind('resize load',function() {
        if(viewportWidth > 767){
            $(".nav-item.dropdown").hover(function(){
                $('.dropdown-toggle', this).trigger('click'); 
            });
        }
    });
})