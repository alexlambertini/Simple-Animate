// const animateSelectors = [
//     '.animate--fade',
//     '.animate--right',
//     '.animate--left',
//     '.animate--up', 
//     '.animate--down',
// ];

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             if (animateBothDirections) {
//                 entry.target.classList.add('visible');
//             } else {
//                 entry.target.classList.remove('visible');
//                 if (resetAnimation) {
//                     entry.target.classList.remove('visible');
//                 }
//             }
//         }
//     });
// }, observerOptions);

// animateSelectors.forEach(selector => {
//     const animateElements = document.querySelectorAll(selector);
//     animateElements.forEach(element => {
//         observer.observe(element);
//     });
// });


/**************************************************************
# 
#   SETUP SIMPLE ANIMATE
#   Write by: Alexandre Lambertini
#   Date: 15/08/2023
#  
/**************************************************************/

function fetchDataFromServer() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = { message: "Data fetched from the server." };
            resolve(data);
        }, 2000); // Simulando um atraso de 2 segundos
    });
}

async function startWatchingAnimation(options) {
    const animateSelectors = [
        '.animate--fade',
        '.animate--right',
        '.animate--left',
        '.animate--up', 
        '.animate--down',
    ];

    const shouldRemoveVisibleClass = options.removeVisibleClass !== false;

    const defaultObserverOptions = {
        root: null,
        rootMargin: '200px',
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                if (shouldRemoveVisibleClass) {
                    entry.target.classList.remove('visible');
                }
            }
        });
    }, { ...defaultObserverOptions, ...options });

    animateSelectors.forEach(selector => {
        const animateElements = document.querySelectorAll(selector);
        animateElements.forEach(element => {
            observer.observe(element);
        });
    });

    // Simular uma operação assíncrona real
    const serverData = await fetchDataFromServer();
    console.log("Animation observation started. Server data:", serverData);
}

startWatchingAnimation({ removeVisibleClass: false});