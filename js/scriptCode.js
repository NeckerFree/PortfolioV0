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

/**
 * Details Popup
 */
const detailsPopup = `
<div class="detailsContainer">
<div class="heading">
<h6>{project.name}</h6> 
<a class="close" href="#">
<img src="./icons/x.png" alt="close icon">
</a> 
</div>
<div class="snapshoot">
</div>
<div class="supportingText">
<p>{project.description}</p>
</div>
<div class="tags">
<ul>
<li>
<a href="#">
<p>{project.technologies.t1}</p>
</a>
</li>
<li>
<a href="#">
<p>{project.technologies.t2}</p>
</a>
</li>
<li>
<a href="#">
<p>{project.technologies.t3}</p>
</a>
</li>
</ul>
</div>
<div class="buttons">
<a href="{project.liveVersion}" target="_blank"><button class="button">See Live<img src="./icons/Live-Icon.png" alt="Live Icon"></button></a>
<a href="{project.sourcelink}" target="_blank"><button class="button">See Source<img src="./icons/Source-Icon.png" alt="Source Icon"></button></a>
</div>
</div>`;

/* Declarations */
const link = document.getElementById('hamburguerLink');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const popupContent = document.querySelector('.popupContent');
const container = document.querySelector('.grid-container');
const headerContent = document.querySelector('header');
const footerContent = document.querySelector('footer');
// Input Validation & Local Storage:
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email_address');
const fullName = document.getElementById('full_name');
const comments = document.getElementById('comments_area');
const errorMessage = document.querySelector('span.error');

/**
 * Mobile menu function
 */
function togleMobile() {
  link.classList.toggle('open');
  const menuImg = document.querySelector('.hamburguer');
  menuImg.classList.toggle('hamburg');
  const brand = document.querySelector('.nick');
  brand.classList.toggle('hideBrand');
}

function blurContent() {
  container.classList.toggle('blurContent');
  headerContent.classList.toggle('blurContent');
  footerContent.classList.toggle('blurContent');
}

/*
* Details Popup Functions
*/
function closePopup() {
  popupContent.style.display = 'none';
  blurContent();
  document.body.style.overflow = 'visible';
}

function showPopup(projectId) {
  blurContent();
  closePopup();
  const project = projects.find((pr) => pr.id === projectId);
  popupContent.innerHTML = detailsPopup
    .replace('{project.name}', project.name)
    .replace('{project.description}', project.description)
    .replace('{project.liveVersion}', project.liveVersion)
    .replace('{project.sourcelink}', project.sourcelink)
    .replace('{project.technologies.t1}', project.technologies.t1)
    .replace('{project.technologies.t2}', project.technologies.t2)
    .replace('{project.technologies.t3}', project.technologies.t3)
    .replace('class="close"', 'class="close" onclick="closePopup()"');
  popupContent.style.display = 'block';
  popupContent.style.overflow = 'auto';
  document.body.style.overflow = 'hidden';
  blurContent();
}
/**
 * Validate Data functions
 */
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

/**
 * Local storage functions
 */
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
          // Firefox
          || e.code === 1014
          // test name field too, because code might not be present
          // everything except Firefox
          || e.name === 'QuotaExceededError'
          // Firefox
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
          // acknowledge QuotaExceededError only if there's something already stored
          && (storage && storage.length !== 0);
  }
}

function populateContactForm() {
  const data = { fullname: fullName.value, email: email.value, comments: comments.value };
  const contactData = JSON.stringify(data);
  localStorage.setItem('contactData', contactData);
}

function setContactForm() {
  const contactData = localStorage.getItem('contactData');
  const data = JSON.parse(contactData);
  fullName.value = data.fullname;
  email.value = data.email;
  comments.value = data.comments;
}

function ValidaStoreData(event) {
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
  if (storageAvailable('localStorage')) {
    populateContactForm();
  }
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
  ValidaStoreData(event);
});

form.addEventListener('change', (event) => {
  ValidaStoreData(event);
});

window.addEventListener('load', () => {
  if (storageAvailable('localStorage')) {
    if (localStorage.getItem('contactData')) {
      setContactForm();
    }
  }
});
