// ==========================
// ONE PLUS TWO BITE
// script.js
// ==========================

// Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.8s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1500);
});

// Dark / Light Mode

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Contact Form Validation

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = contactForm.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "none";
        }

    });

    if (valid) {

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    } else {

        alert("Please fill in all fields.");

    }

});

// Auto Sliding Reviews

let reviewIndex = 0;

const reviews = document.querySelectorAll(".review");

function showReviews() {

    reviews.forEach((review) => {
        review.style.display = "none";
    });

    reviewIndex++;

    if (reviewIndex > reviews.length) {
        reviewIndex = 1;
    }

    reviews[reviewIndex - 1].style.display = "block";
}

if (reviews.length > 0) {

    showReviews();

    setInterval(showReviews, 3000);

}

// Fade In Animation On Scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

const animatedElements = document.querySelectorAll(
    ".section, .menu-card, .story-card, .review"
);

animatedElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.8s ease";

    observer.observe(element);

});

// Gallery Image Click Effect

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";

        const largeImg = document.createElement("img");

        largeImg.src = img.src;
        largeImg.style.maxWidth = "90%";
        largeImg.style.maxHeight = "90%";
        largeImg.style.borderRadius = "10px";

        overlay.appendChild(largeImg);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            document.body.removeChild(overlay);
        });

    });

});

// Welcome Message

setTimeout(() => {

    console.log(
        "Welcome to One Plus Two Bite - Every Bite Tells a Story!"
    );

}, 2000);

// Smooth Navigation Highlight

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});