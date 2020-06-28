'use strict';
$(document).ready(function() {

    $(window).resize(function() {
        if ($(window).width() >= 768 && $(window).width() <= 960) {
            console.log('desktop');
            $("div").css("background-color", "green");
            $("aside").css("background-color", "green");
        }
        if ($(window).width() >= 480 && $(window).width() <= 767) {
            $("div").css("background-color", "red");
            $("aside").css("background-color", "red");
            console.log('mobile');
        }
    });
});