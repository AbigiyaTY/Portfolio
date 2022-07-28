const overlay = document.querySelector('#overlay');
const openModalButton = document.querySelectorAll('[data-modal-target]');
const displayWork = document.getElementById('displayWork');

const array = [{
  title: 'Multi-post stories',
  closeWork: '<i  onclick="closeModal()" class="closeWork fa fa-times"></i>',
  smallImg: './images/modal-mobile.png',
  largImg: './images/Snapshoot-Portfolio-lg.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  ulSmall: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
  ulLarge: ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'],
  buttonOne: '<a href="https://abigiyaty.github.io/Portofolio-/" target="_blank">See Live <i class="disFA fa fa-chevron-right"></i></a>',
  buttonTwo: '<a href="https://github.com/AbigiyaTY/Portofolio-" target="_blank">See Source <i class="disFA fa fa-github"></i></a>',
}];

array.title = 'Multi-post stories';
array.closeWork = '<i class="closeWork fa fa-times"></i>';
array.smallImg = './images/Snapshoot-Portfolio.png';
array.largImg = './images/Snapshoot-Portfolio-lg.png';
array.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.';
array.ulSmall = ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|'];
array.ulLarge = ['|   ', 'html   ', '|   ', 'Ruby on rails   ', '|   ', 'css   ', '|   ', 'Github   ', '|   '];
array.buttonOne = '<a href="https://abigiyaty.github.io/Portofolio-/" target="_blank">See Live <i class="disFA fa fa-chevron-right"></i></a>';
array.buttonTwo = '<a href="https://github.com/AbigiyaTY/Portofolio-" target="_blank">See Source <i class="disFA fa fa-github"></i></a>';

const langArray = array.ulSmall.join('  ');
const langArrayLg = array.ulLarge.join('  ');

displayWork.innerHTML = `<div class="headerDis"><h2 class="displayHeader">${array.title}</h2><a href='' onclick="closeModal()" class="closeWork">${array.closeWork}</a></div><img class="displayImg large" src="${array.smallImg}" alt="Project Image on desktop device"><img class="displayImg small" src="${array.largImg}" alt="Project Image on mobile device"><p class="displayP">${array.description}</p>
<ul class="diplayUl">${langArray}</ul>
<ul class="diplayUlLG">${langArrayLg}</ul>
<div class="footerDis">
<button class="buttonDis buttonOne" type="button">${array.buttonOne}</button>
<button class="buttonDis buttonTwo" type="button">${array.buttonTwo}</button>
</div>`;

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

openModalButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
closeModal();

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.displayWork.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});