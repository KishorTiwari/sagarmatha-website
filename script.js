$(document).ready(function () {
    $('.menu').on("click", () => {
        $('.mob-navlist')
            .show()
            .addClass('animate__animated animate__lightSpeedInRight');;
    });

    $('.close-icon').on("click", function () {
        $('.mob-navlist')
            .removeClass('animate__fadeInRight')
            .addClass('animate__lightSpeedOutRight').one('animationend', function () {
                $('.mob-navlist').hide();
                $('.mob-navlist').removeClass('animate__lightSpeedOutRight');
            });
    });
});