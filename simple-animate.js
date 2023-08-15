const animateSelectors = [
    '.animate--fade',
    '.animate--right',
    '.animate--left',
    '.animate--up', 
    '.animate--down',
];

let resetAnimation = true; 

// Config Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '200px',
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
            if (resetAnimation) {
                entry.target.classList.remove('visible');
            }
        }
    });
}, observerOptions);

animateSelectors.forEach(selector => {
    const animateElements = document.querySelectorAll(selector);
    animateElements.forEach(element => {
        observer.observe(element);
    });
});


function setResetAnimation(value) {
    resetAnimation = value;
}