// Affichage menu mobile
$(document).ready(function () {
    $('#menu-toggle').click(function () {
        $('#mobile-menu').fadeIn({ queue: false, duration: 200 });
        $('#mobile-menu').animate({ right: '0px' }, 200);
    });
    $('#close').click(function () {
        $('#mobile-menu').fadeOut({ queue: false, duration: 200 });
        $('#mobile-menu').animate({ right: '-10px' }, 200);
    });
});