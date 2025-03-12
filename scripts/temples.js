let menulist = document.getElementById("menulist");
let menuIcon = document.querySelector(".menu-icon i");

menulist.style.display = "none";

function toggleMenu() {
    if (menulist.style.display === "none") {
        menulist.style.display = "block";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menulist.style.display = "none";
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
}

window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        menulist.style.display = "flex";
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    } else {
        menulist.style.display = "none";
    }
});