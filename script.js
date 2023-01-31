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
    description: 'lorem  fkwifjijsfvi asfvicasjvasf asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem asdkfkasndfasdf asdfasd f asdf asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem adfknkadnfasdf df dasfdfipsum asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories <br /> Gain + Glory',
    description: 'lorem ipasdjfnkasdf asdf asdf sum asdasasasdd  asdasdasd asd d',
    featuredImage: '',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
]

const cardsPortfolio = document.querySelector('.cards-portfolio');
let portfolioSection = '';
portfolioObj.forEach((item, index) => {
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
      <button id="${index}" class="works-button btn-hover btn-active btn-pressed">
        See Project
      </button>
    </div>
  </div>
  `
  portfolioSection += newItem;
})
cardsPortfolio.innerHTML += portfolioSection;


const worksButtons = document.querySelectorAll('.works-button');
const popupMenu = document.querySelector('.popup-menu');

worksButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const portfolioItem = portfolioObj[Number(e.target.id)];

    let technologies = '';
    portfolioItem.technologies.forEach((tech) => {
      technologies += `<li>
      <button class="btn-hover btn-active btn-pressed">
        ${tech}
      </button>
    </li>`;
    });

    popupMenu.innerHTML = `
      <i class="fa fa-close" id="close-popup"></i>
      <img alt="" src="${portfolioItem.featuredImage}" />
      <h2>${portfolioItem.name}</h2>
      <ul>
        ${technologies}
      </ul>
      <p>
        ${portfolioItem.description}
      </p>
      <div class="popup-buttons">
        <button>
          See Live
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
        <button>
          See Source
          <i class="fa-brands fa-github"></i>
        </button>
      </div>
    `;
    popupMenu.style.display = 'flex';
    const closePopup = document.querySelector('#close-popup');
    closePopup.addEventListener('click', () => {
      popupMenu.style.display = 'none';
    });
  });
})

