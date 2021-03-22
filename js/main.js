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


// Contact

const contactShowBtn = document.querySelector(".contact-show-btn");
const showList = document.querySelector(".contact-show-content");
const iconUp = document.querySelector("#icon");

contactShowBtn.addEventListener("click", () => {
    showList.classList.toggle("open");
    iconUp.classList.toggle("icon-up");
})