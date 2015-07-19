$(document).ready(function () {
    //    $('#fullpage').fullpage({
    //        css3: false,
    //        scrollingSpeed: 1000,
    //    });
    $('.carousel').carousel()
    $(window).scroll(function () {
        if ($("body").scrollTop() > 700) {
            $(".outline").css("-webkit-animation-play-state", "paused");
            $(".outline").css("-o-animation-play-state", "paused");
            $(".outline").css("-moz-play-state", "paused");

            $(".outline").css("animation-play-state", "paused");
            $(".shadow").css("-webkit-animation-play-state", "paused");
            $(".shadow").css("-o-animation-play-state", "paused");
            $(".shadow").css("-moz-play-state", "paused");
            $(".shadow").css("animation-play-state", "paused");
            $(".fill").css("-webkit-animation-play-state", "paused");
            $(".fill").css("-o-animation-play-state", "paused");
            $(".fill").css("-moz-play-state", "paused");
            $(".fill").css("animation-play-state", "paused");
            $(".background").css("-webkit-animation-play-state", "paused");
            $(".background").css("-o-animation-play-state", "paused");
            $(".background").css("-moz-play-state", "paused");
            $(".background").css("animation-play-state", "paused");
        } else {
            $(".outline").css("-webkit-animation-play-state", "running");
            $(".outline").css("-o-animation-play-state", "running");
            $(".outline").css("-moz-play-state", "running");
            $(".outline").css("animation-play-state", "running");
            $(".shadow").css("-webkit-animation-play-state", "running");
            $(".shadow").css("-o-animation-play-state", "running");
            $(".shadow").css("-moz-play-state", "running");
            $(".shadow").css("animation-play-state", "running");
            $(".fill").css("-webkit-animation-play-state", "running");
            $(".fill").css("-o-animation-play-state", "running");
            $(".fill").css("-moz-play-state", "running");
            $(".fill").css("animation-play-state", "running");
            $(".background").css("-webkit-animation-play-state", "running");
            $(".background").css("-o-animation-play-state", "running");
            $(".background").css("-moz-play-state", "running");
            $(".background").css("animation-play-state", "running");
        }
    });


});
