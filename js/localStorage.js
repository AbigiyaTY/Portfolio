const formStorage = document.getElementById('contactForm');

formStorage.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('#comments').value,
  };
  localStorage.setItem('DATA', JSON.stringify(obj));
});

const dataValue = localStorage.getItem('DATA');
const getDataValue = JSON.parse(dataValue);

window.addEventListener('load', () => {
  if (localStorage.getItem('DATA')) {
    document.querySelector('#name').value = getDataValue.name;
    document.querySelector('#email').value = getDataValue.email;
    document.querySelector('#comments').value = getDataValue.message;
  }
});