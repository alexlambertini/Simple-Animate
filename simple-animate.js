const animateSelectors = [
    '.animate--fade',
    '.animate--right',
    '.animate--left',
    '.animate--up', 
    '.animate--down',
];

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
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateSelectors.forEach(selector => {
    const animateElements = document.querySelectorAll(selector);
    animateElements.forEach(element => {
        observer.observe(element);
    });
});
