// navbar toggle (hamburger)
var navToggle = document.querySelector('.nav-toggle');
var ul = document.querySelector('ul');

navToggle.addEventListener('click', ()=>{
    ul.classList.toggle('active');
    navToggle.classList.toggle('is-active');
});

