$(".hambergur").on("click", () => {
  $(".fullscreen").removeClass("reverse_anim").toggleClass("active");
});

$(".close").on("click", () => {
  $(".fullscreen").toggleClass("reverse_anim");
});

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header__top").addClass("nav__active");
    } else {
      $(".header__top").removeClass("nav__active");
    }
  });
});
AOS.init({
  once: true,
});


$('.center').slick({
  dots: true,
  centerMode: false,
  infinite: true,
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});