const link = document.getElementById('hamburguerLink');

function togleMobile() {
  link.classList.toggle('open');
  const menuImg = document.querySelector('.hamburguer');
  menuImg.classList.toggle('hamburg');
}

link.addEventListener('click', togleMobile);