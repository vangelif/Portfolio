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

//create popup window

const portfolioObj = [
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem ipsum asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem ipsum asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem ipsum asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem ipsum asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem ipsum asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem ipsum asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
]

const cardsPortfolio = document.querySelector('.cards-portfolio');
let portfolioSection = '';
portfolioObj.forEach((item) => {
  let technologies = '';
  item.technologies.forEach((tech) => {
    technologies += `<li>
    <a href="#"
      ><button class="btn-hover btn-active btn-pressed">
        ${tech}
      </button></a
    >
  </li>`;
  })

  const newItem = `
  <div class="project">
    <div class="image-back"></div>
    <div class="project-footer">
      <div class="project-title-back">
        <h4>${item.name}</h4>
      </div>
      <ul class="project-buttons-back">
        ${technologies}
      </ul>
      <button class="works-button btn-hover btn-active btn-pressed">
        See Project
      </button>
    </div>
  </div>
  `
  portfolioSection += newItem;
})
cardsPortfolio.innerHTML += portfolioSection;


