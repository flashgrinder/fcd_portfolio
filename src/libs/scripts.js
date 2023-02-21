import tabs from '../libs/modules/tabs';
import portfolio from '../libs/modules/portfolio';
import modal from './modules/modal';

document.addEventListener('DOMContentLoaded', function(e) {

    // gsap.config({
    //     nullTargetWarn: true,
    //     force3D: true
    // });

    const tabsTrue = document.querySelector('.tabs');
    const portfolioTrue = document.querySelector('.js-portfolio-slider');

    tabsTrue ? tabs.init() : false;
    portfolioTrue ? portfolio.init() : false;
    modal.init();
});