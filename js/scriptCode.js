const link = document.getElementById('hamburguerLink');
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email_address');
const fullName = document.getElementById('full_name');
const comments = document.getElementById('comments_area');

function togleMobile() {
  link.classList.toggle('open');
  const menuImg = document.querySelector('.hamburguer');
  menuImg.classList.toggle('hamburg');
  const brand = document.querySelector('.nick');
  brand.classList.toggle('hideBrand');
}

function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function populateContactForm() {
 
  var data = { fullname: fullName.value, email: email.value, comments: comments.value }
  var contactData = JSON.stringify(data);
  localStorage.setItem('contactData', contactData);
}

function setContactForm(){
   const contactData=localStorage.getItem('contactData');
   var data=JSON.parse(contactData);
   fullName.value = data.fullname;
   email.value = data.email;
  comments.value = data.comments;
}

link.addEventListener('click', togleMobile);

form.addEventListener('submit', (event) => {
  if (storageAvailable('localStorage')) {
      populateContactForm();
  }
  else {
   alert ('Local Storage not avalailable');
  }
});

window.addEventListener('load', (event) => {
  if (storageAvailable('localStorage')) {
    if (localStorage.getItem('contactData')) {
      setContactForm();
    }
  }
  else {
   alert ('Local Storage not avalailable');
  }
} )