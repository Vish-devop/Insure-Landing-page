const hamBurger=document.querySelector(".hamburger");
const navBarNav=document.querySelector(".navbar-nav");
const navItems=document.querySelector(".nav-item");

hamBurger.addEventListener("click",function(){
    navBarNav.classList.toggle("open");
});