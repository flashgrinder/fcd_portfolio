import HystModal from 'hystmodal';

function init() {

    const modalsForms = new HystModal({
        linkAttributeName: "data-hystmodal",
        catchFocus: true,
        waitTransitions: true,
        backscroll: false,
    });

}

export default { init }