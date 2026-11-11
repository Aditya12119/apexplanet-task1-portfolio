// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent = new Date().getFullYear();

// TYPING ANIMATION

const typingElement = document.getElementById("typing");

const roles = [
    "MCA Student",
    "Web Developer",
    "Technology Enthusiast",
    "Data Analytics Learner"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent = currentRole.substring(0, characterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// PROJECT CARD ANIMATION

const cards = document.querySelectorAll(".skill-card, .project-card");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

cards.forEach(function (card) {
    observer.observe(card);
});

console.log("Portfolio website loaded successfully!");