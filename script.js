/* =====================================================
   EDIT BY HANNU
   PROFESSIONAL VIDEO & REEL EDITOR
   WEBSITE JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        // Change menu icon
        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    /* Close menu after clicking navigation link */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuBtn.textContent = "☰";

        });

    });

}


/* ================= PORTFOLIO FILTER ================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach(item => {

    item.style.transition =
        "opacity 0.3s ease, transform 0.3s ease";

});


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(0.9)";

                setTimeout(() => {

                    item.style.display = "none";

                }, 300);

            }

        });

    });

});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5, 5, 5, 0.95)";

            navbar.style.backdropFilter =
                "blur(15px)";

        } else {

            navbar.style.background =
                "rgba(7, 7, 7, 0.78)";

            navbar.style.backdropFilter =
                "blur(10px)";

        }

    });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ================= PORTFOLIO IMAGE EFFECT ================= */

portfolioItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "scale(1.02)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "scale(1)";

    });

});


/* ================= CURRENT YEAR ================= */

const footerText =
    document.querySelector(".footer-bottom p");

if (footerText) {

    const year = new Date().getFullYear();

    footerText.textContent =
        `© ${year} EDIT By HANNU. All Rights Reserved.`;

}


/* ================= WHATSAPP ================= */

const whatsappLinks =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );

whatsappLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "📱 Opening WhatsApp - EDIT By HANNU"
        );

    });

});


/* ================= INSTAGRAM ================= */

const instagramLinks =
    document.querySelectorAll(
        'a[href*="instagram.com"]'
    );

instagramLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "📸 Opening Instagram - @edit.with.hannu"
        );

    });

});


/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "🎬 EDIT By HANNU Website Loaded Successfully!"
    );

    console.log(
        "🎥 Professional Video & Reel Editor"
    );

    console.log(
        "📱 Instagram: @edit.with.hannu"
    );

    console.log(
        "📞 WhatsApp: 7568208877"
    );

});