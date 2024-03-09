//Javascript to toggle the menu
document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

let hamburger = document.getElementById('hamburgerbtn');
    
let mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle('activeMenuIcon');
});