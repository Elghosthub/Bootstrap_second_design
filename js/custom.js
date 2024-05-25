/*global $*/

$(document).ready(function () {
    
    "use strict";
    
    $('.carousel').carousel({
        
        interval: 5000
        
    });
    
    //start loading screen
    
    $(window).on("load", function () {
    
        $(".loading-screen .sk-chase").fadeOut(1000, function () {
           
            $("body").css("overflow", "auto");
            
            $(this).parent().fadeOut(1000, function () {
                
                $(this).remove();
                
            });
            
        });
    });
    
    // scroll button
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 500) {
            
            scrollButton.fadeIn();
            
        } else {
            
            scrollButton.fadeOut();
            
        }
        
    });
    
    // click on button
    
    scrollButton.click(function () {
        
        $("html, body").animate({scrollTop : 0}, 1000);
        
    });
    
    // trigglr nice scroll
    
    $("html, body").niceScroll();
    
});