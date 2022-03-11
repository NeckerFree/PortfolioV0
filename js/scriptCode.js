// Projects Data
const projects = [];
projects.push({
  id: 1,
  name: 'Multi-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  featuredImage: '../images/SnapshootPortfolio.png',
  technologies: { t1: 'html', t2: 'javascript', t3: 'css' },
  liveVersion: 'https://neckerfree.github.io/PortfolioV2/index.html',
  sourcelink: 'https://github.com/NeckerFree/PortfolioV2',
});
projects.push({
  id: 2,
  name: 'Project 2',
  description: 'Description project 2',
  featuredImage: '../images/SnapshootPortfolio.png',
  technologies: { t1: 'html', t2: 'Ruby on rails', t3: 'css' },
  liveVersion: 'https://neckerfree.github.io/PortfolioV2/index.html',
  sourcelink: 'https://github.com/NeckerFree/PortfolioV2',
});
projects.push({
  id: 3,
  name: 'Project 3',
  description: 'Description project 3',
  featuredImage: '../images/SnapshootPortfolio.png',
  technologies: { t1: 'html', t2: 'Ruby on rails', t3: 'github' },
  liveVersion: 'https://neckerfree.github.io/PortfolioV2/index.html',
  sourcelink: 'https://github.com/NeckerFree/PortfolioV2',
});
projects.push({
  id: 4,
  name: 'Project 4',
  description: 'Description project 4',
  featuredImage: '../images/SnapshootPortfolio.png',
  technologies: { t1: 'bootstrap', t2: 'Ruby', t3: 'css' },
  liveVersion: 'https://neckerfree.github.io/PortfolioV2/index.html',
  sourcelink: 'https://github.com/NeckerFree/PortfolioV2',
});

/* Declarations */
const link = document.getElementById('hamburguerLink');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popupContent');
// Input Validation:
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email_address');
const fullName = document.getElementById('full_name');
const comments = document.getElementById('comments_area');
const errorMessage = document.querySelector('span.error');

function togleMobile() {
  link.classList.toggle('open');
  const menuImg = document.querySelector('.hamburguer');
  menuImg.classList.toggle('hamburg');
  const brand = document.querySelector('.nick');
  brand.classList.toggle('hideBrand');
}
/* Functions */
function closePopup() {
  popupContent.style.display = 'none';
  popup.style.display = 'none';
}

function showPopup(projectId) {
  closePopup();
  const project = projects.find((pr) => pr.id === projectId);
  fetch('DetailsPopup.txt')
    .then((response) => response.text())
    .then((text) => {
      popupContent.innerHTML = text
        .replace('{project.name}', project.name)
        .replace('{project.description}', project.description)
        .replace('{project.liveVersion}', project.liveVersion)
        .replace('{project.sourcelink}', project.sourcelink)
        .replace('{project.technologies.t1}', project.technologies.t1)
        .replace('{project.technologies.t2}', project.technologies.t2)
        .replace('{project.technologies.t3}', project.technologies.t3)
        .replace('class="close"', 'class="close" onclick="closePopup()"');
    });
  popupContent.style.display = 'block';
  popup.style.display = 'block';
}

function showCommentsError() {
  if (comments.validity.valueMissing) {
    errorMessage.textContent = 'You need to enter comments.';
  } else if (comments.validity.typeMismatch) {
    errorMessage.textContent = 'Entered value for comments needs to be text.';
  } else if (comments.validity.tooLong) {
    errorMessage.textContent = `Comments should be at most ${comments.maxLength} characters; you entered ${comments.value.length}.`;
  }
  errorMessage.className = 'error active';
}

function showNameError() {
  if (fullName.validity.valueMissing) {
    errorMessage.textContent = 'You need to enter the name.';
  } else if (fullName.validity.typeMismatch) {
    errorMessage.textContent = 'Entered value for name needs to be text.';
  } else if (fullName.validity.tooLong) {
    errorMessage.textContent = `Name should be at most ${fullName.maxLength} characters; you entered ${fullName.value.length}.`;
  }
  errorMessage.className = 'error active';
}

function showEmailError() {
  if (email.validity.valueMissing) {
    errorMessage.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    errorMessage.textContent = 'Entered value needs to be an e-mail address.';
  } if (email.validity.patternMismatch) {
    errorMessage.textContent = 'Entered value needs to be an e-mail address in lower case';
  }
  errorMessage.className = 'error active';
}
/* Events */
link.addEventListener('click', togleMobile);
button1.addEventListener('click', showPopup.bind(null, 1), false);
button2.addEventListener('click', showPopup.bind(null, 2), false);
button3.addEventListener('click', showPopup.bind(null, 3), false);
button4.addEventListener('click', showPopup.bind(null, 4), false);

fullName.addEventListener('input', () => {
  if (fullName.validity.valid) {
    errorMessage.textContent = '';
    errorMessage.className = 'error';
  } else {
    showNameError();
  }
});

email.addEventListener('input', () => {
  if (email.validity.valid) {
    errorMessage.textContent = '';
    errorMessage.className = 'error';
  } else {
    showEmailError();
  }
});

comments.addEventListener('input', () => {
  if (comments.validity.valid) {
    errorMessage.textContent = '';
    errorMessage.className = 'error';
  } else {
    showCommentsError();
  }
});

form.addEventListener('submit', (event) => {
  if (!fullName.validity.valid) {
    showNameError();
    event.preventDefault();
  } else if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  } else if (!comments.validity.valid) {
    showCommentsError();
    event.preventDefault();
  }
});