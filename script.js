
/* =========================================
   SRN LOGISTICS — HOMEPAGE INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. HERO BACKGROUND CAROUSEL
    const slides = document.querySelectorAll(".hero-background");
    const indicators = document.querySelectorAll(".carousel-indicator");

    let currentIndex = 0;
    const SLIDE_INTERVAL = 4000;

    function showSlide(index) {
        if (slides.length === 0) return;

        currentIndex = (index + slides.length) % slides.length;

        slides.forEach(function (slide, i) {
            slide.classList.toggle("active", i === currentIndex);
            slide.setAttribute("aria-hidden", i !== currentIndex);
        });

        indicators.forEach(function (indicator, i) {
            indicator.classList.toggle("active", i === currentIndex);
        });
    }

    // Automatically change the background every 4 seconds.
    if (slides.length > 1) {
        showSlide(0);

        window.setInterval(function () {
            showSlide(currentIndex + 1);
        }, SLIDE_INTERVAL);
    } else {
        showSlide(0);
    }

    // 2. OPTIONAL PREVIOUS AND NEXT BUTTONS
    const previousButton = document.getElementById("previousSlide");
    const nextButton = document.getElementById("nextSlide");

    if (previousButton) {
        previousButton.addEventListener("click", function () {
            showSlide(currentIndex - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            showSlide(currentIndex + 1);
        });
    }

    // 3. OPTIONAL CAROUSEL INDICATORS
    indicators.forEach(function (indicator, index) {
        indicator.addEventListener("click", function () {
            showSlide(index);
        });
    });

    // 4. MOBILE NAVIGATION MENU
    const menuToggle = document.getElementById("menuToggle");
    const mainNavigation = document.getElementById("mainNavigation");

    if (menuToggle && mainNavigation) {
        menuToggle.addEventListener("click", function () {
            const isOpen = mainNavigation.classList.toggle("is-open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        });

        const navigationLinks = mainNavigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mainNavigation.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");
            });
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                mainNavigation.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");
            }
        });
    }

    // 5. COPYRIGHT YEAR
    const copyrightYear = document.getElementById("copyrightYear");

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

});
