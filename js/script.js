//Javascript to toggle the menu
document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

// typed js
const typed = new Typed('.multiple-text', {
    strings:['Chef de projet digital', 'Webdesigner', 'Intégrateur web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});