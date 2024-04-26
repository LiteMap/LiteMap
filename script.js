
const header = document.querySelector("header");
const menuClose = document.querySelector("#bx-x");
const menu = document.querySelector("#bx-menu");

menu.addEventListener("click",()=>{
    header.classList.toggle("show-menu");
})

menuClose.addEventListener("click",()=>{
    menu.click();
})

