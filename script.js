document.addEventListener("DOMContentLoaded", () => {

    const dropdown = document.querySelector(".has-submenu");
    const toggle = document.querySelector(".dropdown-toggle");

    if (dropdown && toggle) {

        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.classList.toggle("active");
        });

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("active");
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                dropdown.classList.remove("active");
            }
        });
    }

});
