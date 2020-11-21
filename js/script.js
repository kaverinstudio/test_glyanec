$(document).ready(function () {
    $('.header_burger').click(function () {
        $('.header_burger, .nav_mobile').toggleClass('activ');
    });
});

$('#phones').toggle(
    function () {
        $("#tel").fadeIn(200);
    },
    function () {
        $("#tel").fadeOut(200);
    }
);
$('#phones_footer').toggle(
    function () {
        $("#tel_footer").fadeIn(200);
    },
    function () {
        $("#tel_footer").fadeOut(200);
    }
);
