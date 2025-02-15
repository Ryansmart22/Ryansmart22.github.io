"use strict";
const images = ["Media/springtime.jpg", "Media/summertime.jpg", "Media/falltime.jpg", "Media/snowyforest.jpg"];
let currentIndex = 0;

function changeImage(index) {
    currentIndex = index;
    document.getElementById('displayedImage').src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('displayedImage').src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('displayedImage').src = images[currentIndex];
}
