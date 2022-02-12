(function($){
    $(function(){
        //SCROLLING FUNCTIONS
        $(".survey-scroll").click(function(){
            $("html, body").animate({scrollTop: $("#about-anket").offset().top - 70},800);
        });
        $(".winners-scroll").click(function(){
            $("html, body").animate({scrollTop: $("#carousel").offset().top - 70},800);
        });
        $(".support-us-scroll").click(function(){
            $("html, body").animate({scrollTop: $("#support-us").offset().top - 70},800);
        });
        $(".contact-scroll").click(function(){
            $("html, body").animate({scrollTop: $("#footer").offset().top - 70},800);
        });
        //NUMBER COUNT FUNCTION
        $(".counter").counterUp({delay:10,time:1000});
    });
})(jQuery);