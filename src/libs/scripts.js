import tabs from '../libs/modules/tabs';
// import portfolio from '../libs/modules/portfolio';

document.addEventListener('DOMContentLoaded', function(e) {

    // gsap.config({
    //     nullTargetWarn: true,
    //     force3D: true
    // });

    const tabsTrue = document.querySelector('.tabs');
    // const portfolioTrue = document.querySelector('.portfolio__slider');

    tabsTrue ? tabs.init() : false;
    // portfolioTrue ? portfolio.init() : false;
});