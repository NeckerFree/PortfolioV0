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
const link = document.getElementById('hamburguerLink');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
// const popupDelete = document.querySelector('.popup');
const popupContent = document.querySelector('.popupContent');
const container = document.querySelector('.grid-container');
const headerContent = document.querySelector('header');
const footerContent = document.querySelector('footer');

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

link.addEventListener('click', togleMobile);
button1.addEventListener('click', showPopup.bind(null, 1), false);
button2.addEventListener('click', showPopup.bind(null, 2), false);
button3.addEventListener('click', showPopup.bind(null, 3), false);
button4.addEventListener('click', showPopup.bind(null, 4), false);
