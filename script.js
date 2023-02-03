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

const portfolioObj = [
  {
    name: 'Keeping track of hundreds of components',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam finibus porttitor lectus, id feugiat dolor pretium id. Praesent tristique facilisis odio a vehicula. Nunc ut tellus placerat, vehicula nisi vitae, vestibulum nunc. Suspendisse laoreet erat ipsum, sed iaculis nisl efficitur vitae. Nullam facilisis turpis ut enim feugiat sagittis et quis ex. Mauris non erat vel libero dapibus venenatis. Nulla nec nisi id nisi eleifend consequat eget eget ligula.',
    featuredImage: 'images/snapsnap.png',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam finibus porttitor lectus, id feugiat dolor pretium id. Praesent tristique facilisis odio a vehicula. Nunc ut tellus placerat, vehicula nisi vitae, vestibulum nunc. Suspendisse laoreet erat ipsum, sed iaculis nisl efficitur vitae. Nullam facilisis turpis ut enim feugiat sagittis et quis ex. Mauris non erat vel libero dapibus venenatis. Nulla nec nisi id nisi eleifend consequat eget eget ligula.',
    featuredImage: 'images/snapsnap.png',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam finibus porttitor lectus, id feugiat dolor pretium id. Praesent tristique facilisis odio a vehicula. Nunc ut tellus placerat, vehicula nisi vitae, vestibulum nunc. Suspendisse laoreet erat ipsum, sed iaculis nisl efficitur vitae. Nullam facilisis turpis ut enim feugiat sagittis et quis ex. Mauris non erat vel libero dapibus venenatis. Nulla nec nisi id nisi eleifend consequat eget eget ligula.',
    featuredImage: 'images/snapsnap.png',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam finibus porttitor lectus, id feugiat dolor pretium id. Praesent tristique facilisis odio a vehicula. Nunc ut tellus placerat, vehicula nisi vitae, vestibulum nunc. Suspendisse laoreet erat ipsum, sed iaculis nisl efficitur vitae. Nullam facilisis turpis ut enim feugiat sagittis et quis ex. Mauris non erat vel libero dapibus venenatis. Nulla nec nisi id nisi eleifend consequat eget eget ligula.',
    featuredImage: 'images/snapsnap.png',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam finibus porttitor lectus, id feugiat dolor pretium id. Praesent tristique facilisis odio a vehicula. Nunc ut tellus placerat, vehicula nisi vitae, vestibulum nunc. Suspendisse laoreet erat ipsum, sed iaculis nisl efficitur vitae. Nullam facilisis turpis ut enim feugiat sagittis et quis ex. Mauris non erat vel libero dapibus venenatis. Nulla nec nisi id nisi eleifend consequat eget eget ligula.',
    featuredImage: 'images/snapsnap.png',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam finibus porttitor lectus, id feugiat dolor pretium id. Praesent tristique facilisis odio a vehicula. Nunc ut tellus placerat, vehicula nisi vitae, vestibulum nunc. Suspendisse laoreet erat ipsum, sed iaculis nisl efficitur vitae. Nullam facilisis turpis ut enim feugiat sagittis et quis ex. Mauris non erat vel libero dapibus venenatis. Nulla nec nisi id nisi eleifend consequat eget eget ligula.',
    featuredImage: 'images/snapsnap.png',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveVersion: '',
    linkSource: '',
  },
];

const cardsPortfolio = document.querySelector('.cards-portfolio');
let portfolioSection = '';

portfolioObj.forEach((item, index) => {
  let technologies = '';
  item.technologies.forEach((tech) => {
    technologies = `<li>
    <a href='#'
      ><button class='btn-hover btn-active btn-pressed'>
        ${tech}
      </button></a
    >
  </li>`;
  });

  const newItem = `
  <div class='project'>
    <div class='image-back'></div>
    <div class='project-footer'>
      <div class='project-title-back'>
        <h4>${item.name}</h4>
      </div>
      <ul class='project-buttons-back'>
        ${technologies}
      </ul>
      <button id='${index}' class='works-button btn-hover btn-active btn-pressed'>
        See Project
      </button>
    </div>
  </div>
  `;
  portfolioSection += newItem;
});

cardsPortfolio.innerHTML += portfolioSection;

const worksButtons = document.querySelectorAll('.works-button');
const popupContainer = document.querySelector('.popup-container');
const popupMenu = document.querySelector('.popup-menu');

worksButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const portfolioItem = portfolioObj[Number(e.target.id)];

    let technologies = '';
    portfolioItem.technologies.forEach((tech) => {
      technologies += `<li>
      <button class='btn-hover btn-active btn-pressed'>
        ${tech}
      </button>
    </li>`;
    });

    popupMenu.innerHTML = `
      <i class='fa fa-close close-popup' id="close-popup"></i>
      <div class="close-popup-image">
        <i class='fa fa-close close-popup'></i>
        <img alt='' src='${portfolioItem.featuredImage}' />
      </div>
      <div class="popup-header">
        <h2>${portfolioItem.name}</h2>      
        <div class='popup-buttons-desktop'>
          <button>
            See Live
            <i class='fa-solid fa-arrow-up-right-from-square'></i>
          </button>
          <button>
            See Source
            <i class='fa-brands fa-github'></i>
          </button>
        </div>
      </div>
      <ul>
        ${technologies}
      </ul>
      <p>
        ${portfolioItem.description}
      </p>
      <div class='popup-buttons'>
        <button>
          Live
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </button>
        <button>
          Source
          <i class='fa-brands fa-github'></i>
        </button>
      </div>
    `;
    popupContainer.style.display = 'flex';
    const closePopupButtons = document.querySelectorAll('#close-popup');
    closePopupButtons.forEach((button) => {
      button.addEventListener('click', () => {
        popupContainer.style.display = 'none';
      });
    });
  });
});

function validateForm(e) {
  const emailInput = document.querySelector('.email-form');

  if (emailInput.value !== emailInput.value.toLowerCase()) {
    document.querySelector('#error-message').style.display = 'block';
    e.preventDefault();
    e.stopPropagation();
  }
}

const contactForm = document.forms['contact-form'];
contactForm.addEventListener('submit', validateForm);

const nameBox = document.getElementById('name-box');
const emailBox = document.getElementById('email-box');
const textBox = document.getElementById('textbox');

contactForm.addEventListener('input', () => {
  const formData = {
    name: nameBox.value,
    email: emailBox.value,
    message: textBox.value,
  };
  localStorage.setItem('user-data', JSON.stringify(formData));
});

const getDataFromLocalStorage = JSON.parse(localStorage.getItem('user-data'));

nameBox.value = getDataFromLocalStorage.name;
emailBox.value = getDataFromLocalStorage.email;
textBox.value = getDataFromLocalStorage.message;