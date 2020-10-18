 // Navbar Scroll-Effect
 const navbar = document.querySelector('#navbar-wrapper');
 window.onscroll = () => {
   if (document.documentElement.scrollTop >= 50 ) {
     navbar.style.background = "black";
     navbar.style.transition = '0.8s ease'
   }
   else {
     navbar.style.background = "transparent";
   }
 };

 // Automated update Month and Year in footer
 const update = () => {
   const newDate = new Date();
   const year = newDate.getFullYear();
   const month = newDate.getMonth() + 1;
   const months = ['January', 'February', 'March',
   'April', 'May', 'June', 'July',
   'August', 'September', 'October',
   'November', 'December'
   ];

   for (let i = 0; i < months.length; i++) {
     if ((i + 1) === month) {
       document.querySelector('.footer-copyright').innerText = `Last update ${months[i]} ${year}`;
       break;
     };
   };
 };

 // mobile navbar
 const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.navbar-list');
   const navbar = document.querySelector('#navbar-wrapper');

   burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     navbar.style.background = "black";
     burger.classList.toggle('toggle');
   });
 };


navSlide();
update();
