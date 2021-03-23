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



// footer-menu

const shopPing = document.querySelector(".shopping");
const shoppingBtn = document.querySelector("#shopping-btn-list");
// const shoppingList = document.querySelector(".shopping-list");
const item_1 = document.querySelector(".finance");
const item_2 = document.querySelector(".owner");
const item_3 = document.querySelector(".experience");
const itemBtn1 = document.querySelector("#item-btn1");
const itemBtn2 = document.querySelector("#item-btn2");
const itemBtn3 = document.querySelector("#item-btn3");



shoppingBtn.addEventListener("click", () => {
    shopPing.classList.toggle("open");
    item_1.classList.remove("open");
    item_2.classList.remove("open");
    item_3.classList.remove("open");
})

itemBtn1.addEventListener("click", () => {
    item_1.classList.toggle("open");
    shopPing.classList.remove("open");
    item_2.classList.remove("open");
    item_3.classList.remove("open");
})
itemBtn2.addEventListener("click", () => {
    item_2.classList.toggle("open");
    item_1.classList.remove("open");
    shopPing.classList.remove("open");
    item_3.classList.remove("open");
})
itemBtn3.addEventListener("click", () => {
    item_3.classList.toggle("open");
    item_2.classList.remove("open");
    shopPing.classList.remove("open");
    item_1.classList.remove("open");
})

