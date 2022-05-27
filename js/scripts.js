let menu = document.querySelector('#menu');
let mobile = document.querySelector('#mobile-menu');

mobile.addEventListener('click', function() {
  menu.classList.toggle('menu-toggle');
})