const menuBtn = document.getElementById('mobile-activate');
const menu = document.querySelector('.mobile-nav ul');
const menuItems = document.querySelectorAll('.mobile-nav ul li');
let toggle = false;


/***********
 * Mobile Menu Toggle
 */

menuBtn.addEventListener('click', () => {
    if (!toggle) {
        menu.classList.toggle('slideDown');
    menu.style.height = 136 + 'px';
    toggle = true;
    } else if (toggle) {
        menu.classList.toggle('slideDown');
        menu.style.height = '0';
        toggle = false;
    }
})

/***********
 * Active Class
 */

 (function() {
let path = window.location.pathname;
let links = document.querySelectorAll('.desktop-nav > ul > li');


 })()
   




