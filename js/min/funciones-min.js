function inicio(){function s(s){htmlbody.animate({scrollTop:$('.slide[data-slide="'+s+'"]').offset().top},2e3,"easeInOutQuint")}function e(){$(window).scrollTop()>i&&!n.hasClass("is-fixed")?n.addClass("is-fixed").find(".cd-nav-trigger").one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){d.addClass("has-transitions")}):$(window).scrollTop()<=i&&(d.hasClass("is-visible")&&!$("html").hasClass("no-csstransitions")?d.addClass("is-hidden").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){d.removeClass("is-visible is-hidden has-transitions"),n.removeClass("is-fixed"),$(".cd-nav-trigger").removeClass("menu-is-open")}):d.hasClass("is-visible")&&$("html").hasClass("no-csstransitions")?(d.removeClass("is-visible has-transitions"),n.removeClass("is-fixed"),$(".cd-nav-trigger").removeClass("menu-is-open")):(n.removeClass("is-fixed"),d.removeClass("has-transitions")))}$(window).stellar();var a=$(".navigation").find("li");slide=$(".slide"),button=$(".button"),mywindow=$(window),htmlbody=$("html,body"),slide.waypoint(function(s,e){dataslide=$(this).attr("data-slide"),"down"===e?$('.navigation li[data-slide="'+dataslide+'"]').addClass("active").prev().removeClass("active"):$('.navigation li[data-slide="'+dataslide+'"]').addClass("active").next().removeClass("active")}),mywindow.scroll(function(){0==mywindow.scrollTop()&&($('.navigation li[data-slide="1"]').addClass("active"),$('.navigation li[data-slide="2"]').removeClass("active"))}),a.click(function(e){e.preventDefault(),dataslide=$(this).attr("data-slide"),s(dataslide)}),button.click(function(e){e.preventDefault(),dataslide=$(this).attr("data-slide"),s(dataslide)});var i=300,n=$("#cd-nav"),d=n.find("#cd-main-nav ul");e(),$(window).scroll(function(){e()}),$(".cd-nav-trigger").on("click",function(){$(this).toggleClass("menu-is-open"),d.off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend").toggleClass("is-visible")})}$(document).on("ready",inicio);for(var myLinks=document.getElementsByClassName("hover"),i=0;i<myLinks.length;i++)myLinks[i].addEventListener("touchstart",function(){this.className="hover"},!1),myLinks[i].addEventListener("touchend",function(){this.className=""},!1);$(function(){Grid.init()}),$(".filtro").click(function s(){$(".selected").removeClass("selected"),$(this).addClass("selected")}),$("#especiales").click(function e(){var s=$(".elevados")||$(".caja_luz")||$(".impresion")||$(".letras");(s=!0)&&($(".elevados").addClass("hide"),$(".caja_luz").addClass("hide"),$(".impresion").addClass("hide"),$(".letras").addClass("hide"),$(".especiales").removeClass("hide").addClass("show"))}),$("#elevados").click(function a(){var s=$(".especiales")||$(".caja_luz")||$(".impresion")||$(".letras");(s=!0)&&($(".especiales").addClass("hide"),$(".caja_luz").addClass("hide"),$(".impresion").addClass("hide"),$(".letras").addClass("hide"),$(".elevados").removeClass("hide").addClass("show"))}),$("#caja_luz").click(function n(){var s=$(".especiales")||$(".elevados")||$(".impresion")||$(".letras");(s=!0)&&($(".especiales").addClass("hide"),$(".elevados").addClass("hide"),$(".impresion").addClass("hide"),$(".letras").addClass("hide"),$(".caja_luz").removeClass("hide").addClass("show"))}),$("#impresion").click(function d(){var s=$(".especiales")||$(".elevados")||$(".caja_luz")||$(".letras");(s=!0)&&($(".especiales").addClass("hide"),$(".elevados").addClass("hide"),$(".caja_luz").addClass("hide"),$(".letras").addClass("hide"),$(".impresion").removeClass("hide").addClass("show"))}),$("#letras").click(function l(){var s=$(".especiales")||$(".elevados")||$(".caja_luz")||$(".impresión");(impresion=!0)&&($(".especiales").addClass("hide"),$(".elevados").addClass("hide"),$(".caja_luz").addClass("hide"),$(".impresion").addClass("hide"),$(".letras").removeClass("hide").addClass("show"))}),$("#todo").click(function t(){$(".entry").removeClass("hide").addClass("show")}),function(){[].slice.call(document.querySelectorAll("select.cs-select")).forEach(function(s){new SelectFx(s)})}(),$("#form_cotizador").html5form({method:"POST",messages:"es",responseDiv:"#res_cotizador",allBrowsers:!0}),$("#form_contacto").html5form({method:"POST",messages:"es",responseDiv:"#res_contacto",allBrowsers:!0}),document.getElementsByName("cnombre")[0].placeholder="Nombre",document.getElementsByName("cmail")[0].placeholder="Email",document.getElementsByName("ctelefono")[0].placeholder="Teléfono",function(s,e,a,i,n,d,l){s.GoogleAnalyticsObject=n,s[n]=s[n]||function(){(s[n].q=s[n].q||[]).push(arguments)},s[n].l=1*new Date,d=e.createElement(a),l=e.getElementsByTagName(a)[0],d.async=1,d.src=i,l.parentNode.insertBefore(d,l)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-56321654-1","auto"),ga("send","pageview");