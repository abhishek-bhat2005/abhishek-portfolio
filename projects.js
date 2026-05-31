const slides = document.querySelectorAll('.project-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

let currentIndex = 0;

const updateSlides = () => {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });

    if (counter) {
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    }
};

const showNext = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
};

const showPrev = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
};

if (nextBtn) {
    nextBtn.addEventListener('click', showNext);
}

if (prevBtn) {
    prevBtn.addEventListener('click', showPrev);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showNext();
    }
    if (event.key === 'ArrowLeft') {
        showPrev();
    }
});

updateSlides();