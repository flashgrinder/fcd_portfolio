import Swiper, { Navigation, Autoplay, EffectFade } from 'swiper';

function init() {

    Swiper.use([Navigation, Autoplay, EffectFade]);

    const portfolio = new Swiper(".js-portfolio-slider", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        autoHeight: true,
        speed: 1500,
        navigation: {
            nextEl: '.portfolio__swiper-button-next',
            prevEl: '.portfolio__swiper-button-prev'
        },
    });
}

export default { init }