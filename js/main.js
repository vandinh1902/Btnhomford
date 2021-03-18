const menuIcon = document.querySelector(".nav_hamburger_menu");
const hambergerBtn = document.querySelector(".hamburger_btn")
const menuText = document.querySelector(".menu_text");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    hambergerBtn.classList.toggle("change");
    
});