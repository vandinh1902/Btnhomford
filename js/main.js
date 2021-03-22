// Menu mobile
const menuIcon = document.querySelector(".nav_hamburger_menu");
const hambergerBtn = document.querySelector(".hamburger_btn")
const menuText = document.querySelector(".menu_text");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    hambergerBtn.classList.toggle("change");
    
});


// Gallary
const viewBtn = document.querySelector(".view-btn");
const viewAll = document.querySelector(".view-all");
const viewLess = document.querySelector(".view-less");
const viewContent = document.querySelector(".list");
viewBtn.addEventListener("click", () => {
    viewBtn.classList.toggle("open");
    viewContent.classList.toggle("open");

})
