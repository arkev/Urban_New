$(document).on("ready", inicio);

function inicio() {

    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {
        dataslide = $(this).attr('data-slide');
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        } else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    });

    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    // browser window scroll (in pixels) after which the "menu" link is shown
    var offset = 300;

    var navigationContainer = $('#cd-nav'),
        mainNavigation = navigationContainer.find('#cd-main-nav ul');

    //hide or show the "menu" link
    checkMenu();
    $(window).scroll(function () {
        checkMenu();
    });

    //open or close the menu clicking on the bottom "menu" link
    $('.cd-nav-trigger').on('click', function () {
        $(this).toggleClass('menu-is-open');
        //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
        mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

    });

    function checkMenu() {
        if ($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
            navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                mainNavigation.addClass('has-transitions');
            });
        } else if ($(window).scrollTop() <= offset) {
            //check if the menu is open when scrolling up
            if (mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
                //close the menu with animation
                mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    //wait for the menu to be closed and do the rest
                    mainNavigation.removeClass('is-visible is-hidden has-transitions');
                    navigationContainer.removeClass('is-fixed');
                    $('.cd-nav-trigger').removeClass('menu-is-open');
                });
                //check if the menu is open when scrolling up - fallback if transitions are not supported
            } else if (mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
                mainNavigation.removeClass('is-visible has-transitions');
                navigationContainer.removeClass('is-fixed');
                $('.cd-nav-trigger').removeClass('menu-is-open');
                //scrolling up with menu closed
            } else {
                navigationContainer.removeClass('is-fixed');
                mainNavigation.removeClass('has-transitions');
            }
        }
    }
}

//Remplazar el evento hover por touchstar
var myLinks = document.getElementsByClassName('hover');
for (var i = 0; i < myLinks.length; i++) {
    myLinks[i].addEventListener('touchstart', function () {
        this.className = "hover";
    }, false);
    myLinks[i].addEventListener('touchend', function () {
        this.className = "";
    }, false);
}

//Grid del portafolio
$(function () {
    Grid.init();
});

//Portfolio Filter
$(".filtro").click(function filtrar(){
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
});

$("#especiales").click(function filtrarEspeciales() {
    var especiales = $(".elevados") || $(".caja_luz") || $(".impresion") || $(".letras");
    if (especiales = true){
        $(".elevados").addClass("hide");
        $(".caja_luz").addClass("hide");
        $(".impresion").addClass("hide");
        $(".letras").addClass("hide");
        $(".especiales").removeClass("hide").addClass("show");
    } 
});

$("#elevados").click(function filtrarElevados() {
    var elevados = $(".especiales") || $(".caja_luz") || $(".impresion") || $(".letras");
    if (elevados = true){
        $(".especiales").addClass("hide");
        $(".caja_luz").addClass("hide");
        $(".impresion").addClass("hide");
        $(".letras").addClass("hide");
        $(".elevados").removeClass("hide").addClass("show");
    } 
});

$("#caja_luz").click(function filtrarCajaLuz() {
    var caja = $(".especiales") || $(".elevados") || $(".impresion") || $(".letras");
    if (caja = true){
        $(".especiales").addClass("hide");
        $(".elevados").addClass("hide");
        $(".impresion").addClass("hide");
        $(".letras").addClass("hide");
        $(".caja_luz").removeClass("hide").addClass("show");
    } 
});

$("#impresion").click(function filtrarImpresion() {
    var impresion = $(".especiales") || $(".elevados") || $(".caja_luz") || $(".letras");
    if (impresion = true){
        $(".especiales").addClass("hide");
        $(".elevados").addClass("hide");
        $(".caja_luz").addClass("hide");
        $(".letras").addClass("hide");
        $(".impresion").removeClass("hide").addClass("show");
    } 
});

$("#letras").click(function filtrarLetras() {
    var letras = $(".especiales") || $(".elevados") || $(".caja_luz") || $(".impresión");
    if (impresion = true){
        $(".especiales").addClass("hide");
        $(".elevados").addClass("hide");
        $(".caja_luz").addClass("hide");
        $(".impresion").addClass("hide");
        $(".letras").removeClass("hide").addClass("show");
    } 
});

$("#todo").click(function noFiltrar() {
    $(".entry").removeClass("hide").addClass("show");
});


//Google Analytics

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-56321654-1', 'auto');
ga('send', 'pageview');