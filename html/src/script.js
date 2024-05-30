/* script.js */
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlides(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides();
}

function autoMoveSlides() {
    moveSlides(1);
}

// Show the first slide initially
showSlides();

// Set interval for automatic slide movement
setInterval(autoMoveSlides, 5000); // Change slide every 5 seconds
