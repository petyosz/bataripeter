document.addEventListener('DOMContentLoaded', () => {

    /* ===== PRO MENU ===== */
    const dropdown = document.querySelector('.has-submenu');
    const toggle = document.querySelector('.dropdown-toggle');

    if (dropdown && toggle) {

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                dropdown.classList.remove('active');
            }
        });
    }

    /* ===== SCROLL REVEAL ===== */
    const reveal = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    reveal.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
        observer.observe(el);
    });

});
