'use strict';
$(document).ready(function() {

    $(window).resize(function() {
        if ($(window).width() >= 1281) {
            console.log('desktop');
            $("div").css("background-color", "green");
            $("aside").css("background-color", "green");
        }
        if ($(window).width() >= 320 && $(window).width() <= 480) {
            $("div").css("background-color", "red");
            $("aside").css("background-color", "red");
            console.log('mobile');
        }
        if ($(window).width() >= 768 && $(window).width() <= 1024) {
            $("div").css("background-color", "yellow");
            $("aside").css("background-color", "yellow");

        }

    });
});