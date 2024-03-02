/*
 * Written by tppfidze on 2 march 2024
 *
 * function would not run if if paced in window.onload perhaps next.js loads file after that event
 * 
 */

console.log("custom js loaded")
const menuIcon = document.querySelector('.navbar-menu-icon');
const dropdownNav = document.querySelector('.dropdown-nav');

if(menuIcon && dropdownNav) {
    menuIcon.addEventListener('click', function() {
        dropdownNav.classList.toggle('dropdown-nav-show');
        dropdownNav.classList.toggle('dropdown-nav-hidden');
    });
} else {
    console.error("Navbar menu icon or dropdown nav not found.");
}
