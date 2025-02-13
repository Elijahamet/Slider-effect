// Step 1: Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
    showNext();
}

prevDom.onclick = function () {
    showPrev();
}

let isShow = true;

// Function to show next item
function showNext() {
    if (isShow) {
        isShow = false;
        let firstItem = SliderDom.querySelector('.item');
        SliderDom.appendChild(firstItem);
        setTimeout(() => {
            isShow = true;
        }, timeRunning);
    }
}

// Function to show previous item
function showPrev() {
    if (isShow) {
        isShow = false;
        let firstItem = SliderDom.querySelector('.item');
        SliderDom.prepend(firstItem);
        setTimeout(() => {
            isShow = true;
        }, timeRunning);
    }
}
