const menuBtn = document.getElementById('mobile-activate');
const menu = document.querySelector('.mobile-nav ul');
const menuItems = document.querySelectorAll('.mobile-nav ul li');
let listItems = document.querySelectorAll('.desktop-nav ul li');
let links = document.querySelectorAll('.desktop-nav ul li a');
let topRow = document.querySelector('.row .header-top-nav .row .desktop-nav');
let logoImg = document.querySelector('a.center img');
let navContainer = document.querySelector('.header-top-nav');
let listBefore = document.querySelector('.desktop-nav > ul');
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
 * Sticky Header
 */


        window.addEventListener('scroll', () => {
            if (window.innerWidth >= 801) {
                    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    navContainer.style.height = 70 + 'px';
                    listBefore.style.marginTop = 20 + 'px';
            
                } else if (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) {
                    navContainer.style.height = 86 + 'px';
                    listBefore.style.marginTop = 0 + 'px';
            
                }
            } else {
                return;
            }
        })    
    
 



 /**********
  * Time Stamp
  */

 let year = new Date().getFullYear();
 const cont = document.getElementById('year');
 cont.innerHTML = `<span>Copyright 2015-${year} Top Line Electrical, LLC | Website developed & hosted by <a href="https://schrader.co" class="footer-brand">Schrader Web Solutions</a></span>`;

 





