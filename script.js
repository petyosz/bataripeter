document.addEventListener('DOMContentLoaded', () => {
    // 1. Üdvözlő kártya beúszása
    const welcomeBox = document.querySelector('.welcome-box');
    welcomeBox.style.opacity = '0';
    welcomeBox.style.transform = 'translateY(30px)';
    welcomeBox.style.transition = 'all 1s ease-out';

    // 2. Írógép effekt (csak a beúszás után indul)
    const textElement = document.getElementById('typing-text');
    const finalText = "Készítette: Szabó Dávid Róbert";
    textElement.innerText = '';
    
    setTimeout(() => {
        welcomeBox.style.opacity = '1';
        welcomeBox.style.transform = 'translateY(0)';
        
        let index = 0;
        function type() {
            if (index < finalText.length) {
                textElement.innerHTML += finalText.charAt(index);
                index++;
                setTimeout(type, 70);
            }
        }
        setTimeout(type, 500); 
    }, 200);

    // 3. Galéria elemek görgetésre való megjelenítése (Scroll Observer)
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.style.opacity = '0';
    galleryContainer.style.transform = 'translateY(50px)';
    galleryContainer.style.transition = 'all 0.8s ease-out';
    observer.observe(galleryContainer);
});
// Lightbox működése
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-lightbox');

// Csak a galériában lévő KÉPEKRE rakunk eseményfigyelőt (videókra nem kell)
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.onclick = function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
        captionText.innerHTML = this.nextElementSibling.innerHTML; // A <p> szövegét veszi át
    }
});

// Bezárás az X gombra kattintva
closeBtn.onclick = function() {
    lightbox.style.display = "none";
}

// Bezárás, ha a sötét háttérre kattintunk
lightbox.onclick = function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
}