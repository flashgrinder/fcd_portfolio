import Swiper, { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';

function init() {

    Swiper.use([Navigation, Autoplay, EffectFade, Pagination]);

    const portfolio = new Swiper(".js-portfolio-slider", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        slidesPerView: 1,
        // loop: true,
        // autoplay: true,
        autoHeight: true,
        speed: 1500,
        navigation: {
            nextEl: '.portfolio__swiper-button-next',
            prevEl: '.portfolio__swiper-button-prev'
        },
        pagination: {
            el: '.portfolio__slider-pagination',
            type: 'bullets',
            clickable: true,
            bulletActiveClass: 'portfolio__slider-bullet--active',
            bulletClass: 'portfolio__slider-bullet',
        },
    });
}

export default { init }