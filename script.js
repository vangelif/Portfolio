const btn = document.querySelector('#btn-menu');

btn.addEventListener('click', () => {
  const menu = document.querySelector('.btn-menu');
  menu.style.display = 'flex';
});

const xBtn = document.querySelector('.fa-xmark');

xBtn.addEventListener('click', () => {
  const menu = document.querySelector('.btn-menu');
  menu.style.display = 'none';
});

const portfolioLink = document.querySelector('#portfolio-link');
const aboutLink = document.querySelector('#about-link');
const contactLink = document.querySelector('#contact-link');

portfolioLink.addEventListener('click', () => {
  const menu = document.querySelector('.btn-menu');
  menu.style.display = 'none';
});

aboutLink.addEventListener('click', () => {
  const menu = document.querySelector('.btn-menu');
  menu.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  const menu = document.querySelector('.btn-menu');
  menu.style.display = 'none';
});
