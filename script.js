document.addEventListener('DOMContentLoaded', () => {

    /* udvozlo animacio */
    const welcomeBox = document.querySelector('.welcome-box');
    if (welcomeBox) {
        welcomeBox.animate([
            { opacity: 0, transform: 'translateY(40px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards'
        });
    }

    /* iroeffekt */
    const textElement = document.getElementById('typing-text');
    const finalText = "Készítette: Szabó Dávid Róbert";

    if (textElement) {
        let index = 0;

        const type = () => {
            if (index < finalText.length) {
                textElement.textContent += finalText[index];
                index++;
                requestAnimationFrame(() => setTimeout(type, 45));
            }
        };

        setTimeout(type, 700);
    }

    /*gorgos reveal */
    const revealElements = document.querySelectorAll('.gallery-container, .reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.animate([
                    { opacity: 0, transform: 'translateY(50px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], {
                    duration: 800,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));

    /* lightbox*/
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-lightbox');

    if (lightbox && lightboxImg) {

        document.querySelectorAll('.gallery-item img').forEach(image => {
            image.addEventListener('click', () => {
                lightbox.style.display = "flex";

                lightbox.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], {
                    duration: 300,
                    fill: 'forwards'
                });

                lightboxImg.src = image.src;
                captionText.innerHTML = image.nextElementSibling?.innerHTML || "";
            });
        });

        const closeLightbox = () => {
            lightbox.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 250,
                fill: 'forwards'
            });

            setTimeout(() => {
                lightbox.style.display = "none";
            }, 250);
        };

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") closeLightbox();
        });
    }

});
