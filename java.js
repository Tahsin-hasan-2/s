// scroll-reveal.js
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1, // Triggers early for a smoother feel
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-active");
            } else {
                // This is what makes it "Traditional": 
                // It removes the class when the element leaves the view.
                entry.target.classList.remove("is-active");
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll(".reveal-on-scroll");
    targets.forEach((el) => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    // Open Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            body.classList.add('menu-open'); // Stops background scrolling
        });
    }

    // Close Menu
    if (menuClose) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    }

    // Close menu when a link is clicked
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
