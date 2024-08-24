const header = document.querySelector("[data-header");
const overlay = document.querySelector("[data-overlay");
const menu = document.querySelector("[data-toggler");
const menuLinks = document.querySelector("[data-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
});

menuLinks.addEventListener("click", function() {
    menuLinks.classList.remove("active");
    overlay.classList.remove("active");
    menu.setAttribute("class", "navbar__toggle");
});

window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

