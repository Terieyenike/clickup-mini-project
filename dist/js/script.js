const menu = document.querySelector('.navbar__toggle_menu');
const menuLinks = document.querySelector('.navbar__lists');
const lis = document.querySelectorAll('.navbar__lists-links');

const toggleMenu = () => {
  menuLinks.classList.toggle('active');
  menu.classList.toggle('is-active');
  lis.forEach((li) => li.classList.toggle('active'));
};

menu.addEventListener('click', toggleMenu);
lis.forEach((li) => li.addEventListener('click', toggleMenu));
