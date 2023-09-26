
jQuery(function ($) {
    // ハンバーガー・ドロワーメニュー //
    $(".js-hamburger,.js-drawer, .js-drawer a").click(function () {
        $(".js-hamburger,.js-drawer").toggleClass("is-active");
        event.stopPropagation();
    });


    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: "fade",
        speed: 3000,
        autoplay: {
            delay: 3000,
        },
    });

    $(".js-accordion__item:first-child .js-accordion__content").css(
        "display", "block"
    );
    $(".js-accordion__item:first-child .js-accordion__title").addClass("is-open");
    $(".js-accordion__title").on("click", function () {
        $(this).toggleClass("is-open");
        $(this).next().slideToggle(400);
    });


});
