//Projects Data
let projects=[];
projects.push({
  id: 1,
  name: 'Project 1',
  description: 'Description project 1',
  featuredImage: '../images/SnapshootPortfolio.png',
  technologies: 'HTML',
  liveVersion: 'https://neckerfree.github.io/PortfolioV2/index.html',
  sourcelink: 'https://github.com/NeckerFree/PortfolioV2'
});
projects.push({
  id: 2,
  name: 'Project 2',
  description: 'Description project 2',
  featuredImage: '../images/SnapshootPortfolio.png',
  technologies: 'HTML',
  liveVersion: 'https://neckerfree.github.io/PortfolioV2/index.html',
  sourcelink: 'https://github.com/NeckerFree/PortfolioV2'
});
projects.push({
  id: 3,
  name: 'Project 3',
  description: 'Description project 3',
  featuredImage: '../images/SnapshootPortfolio.png',
  technologies: 'HTML',
  liveVersion: 'https://neckerfree.github.io/PortfolioV2/index.html',
  sourcelink: 'https://github.com/NeckerFree/PortfolioV2'
});
projects.push({
  id: 4,
  name: 'Project 4',
  description: 'Description project 4',
  featuredImage: '../images/SnapshootPortfolio.png',
  technologies: 'HTML',
  liveVersion: 'https://neckerfree.github.io/PortfolioV2/index.html',
  sourcelink: 'https://github.com/NeckerFree/PortfolioV2'
});
const link = document.getElementById('hamburguerLink');
const button1=document.getElementById('button1');
const button2=document.getElementById('button2');
const button3=document.getElementById('button3');
const button4=document.getElementById('button4');
const popup=document.querySelector('.popup');
const closeButton=document.querySelector('.close');
const popupContent=document.querySelector('.popupContent');

function togleMobile() {
  link.classList.toggle('open');
  const menuImg = document.querySelector('.hamburguer');
  menuImg.classList.toggle('hamburg');
  const brand = document.querySelector('.nick');
  brand.classList.toggle('hideBrand');
}
function showPopup(projectId){
  let project = projects.find(pr => pr.id === projectId);
  fetch('DetailsPopup.html')
  .then(response=> response.text())
  .then(text=> popupContent.innerHTML=text.replace('{project.name}', project.name)
  .replace('{project.description}', project.description)
  .replace('{project.liveVersion}', project.liveVersion)
  .replace('{project.sourcelink}', project.sourcelink)
  .replace('{project.technologies}', project.technologies));
  popup.style.display='block';
}
function closePopup(){
  popup.style.display='none';
}
link.addEventListener('click', togleMobile);
button1.addEventListener('click', showPopup.bind(null,1), false);
button2.addEventListener('click', showPopup.bind(null,2), false);
button3.addEventListener('click', showPopup.bind(null,3), false);
button4.addEventListener('click', showPopup.bind(null,4), false);
closeButton.addEventListener('click',closePopup);