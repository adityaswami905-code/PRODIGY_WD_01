const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");
const themeToggle = document.getElementById("themeToggle");
const progressBar = document.getElementById("progressBar");

// Scroll Effects
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);

    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = scrolled + "%";
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeToggle.innerHTML = document.body.classList.contains("dark")
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
});
