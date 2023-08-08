const displayWork = document.getElementById('displayWork');
const overlay = document.querySelector('#overlay');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

const popup = [{
  id: 1,
  title: 'Multi-post stories 1',
  closeWork: 'x',
  smallImg: './images/Snapshoot-Portfolio.png',
  largImg: './images/Snapshoot-Portfolio-lg.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  ulSmall: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
  ulLarge: ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'],
  buttonOne: 'https://abigiyaty.github.io/Portofolio-/',
  buttonTwo: 'https://github.com/AbigiyaTY/Portofolio-',
}, {
  id: 2,
  title: 'Multi-post stories 2',
  closeWork: 'x',
  smallImg: './images/Snapshoot-Portfolio.png',
  largImg: './images/Snapshoot-Portfolio-lg.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  ulSmall: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
  ulLarge: ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'],
  buttonOne: 'https://abigiyaty.github.io/Portofolio-/',
  buttonTwo: 'https://github.com/AbigiyaTY/Portofolio-',
}, {
  id: 3,
  title: 'Multi-post stories 3',
  closeWork: 'x',
  smallImg: './images/Snapshoot-Portfolio.png',
  largImg: './images/Snapshoot-Portfolio-lg.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  ulSmall: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
  ulLarge: ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'],
  buttonOne: 'https://abigiyaty.github.io/Portofolio-/',
  buttonTwo: 'https://github.com/AbigiyaTY/Portofolio-',
}, {
  id: 4,
  title: 'Multi-post stories 4',
  closeWork: 'x',
  smallImg: './images/Snapshoot-Portfolio.png',
  largImg: './images/Snapshoot-Portfolio-lg.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  ulSmall: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
  ulLarge: ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'],
  buttonOne: 'https://abigiyaty.github.io/Portofolio-/',
  buttonTwo: 'https://github.com/AbigiyaTY/Portofolio-',
}];

displayWork.innerHTML = `
      <div class="headerDis">
          <h2 class="displayHeader" id="titlePopup"></h2>
          <a href='' onclick="closeModal()" class="closeWork" id="closeworkPopup">
            x
          </a>
      </div>
      <img class="displayImg large" src="" id="largImg" alt="Project Image on desktop device">
      <img class="displayImg small" src="" id="smallImg" alt="Project Image on mobile device">
      <p class="displayP" id="description">$</p>
      <ul class="diplayUl" id="ulSmall"></ul>
      <ul class="diplayUlLG" id="ulLarge"></ul>
      <div class="footerDis">
        <button class="buttonDis buttonOne" type="button">
            <a href=" " id="buttonOne" target="_blank"> See Live <i class="disFA fa fa-chevron-right"></i></a>
        </button>
        <button class="buttonDis buttonTwo" type="button">
            <a href=" " id="buttonTwo" target="_blank"> See Source <i class="disFA fa fa-github"></i></a>
        </button>
      </div>
    `;

const title = document.querySelector('#titlePopup');
const closework = document.querySelector('#closeworkPopup');
const smallImg = document.querySelector('#smallImg');
const largImg = document.querySelector('#largImg');
const description = document.querySelector('#description');
const ulSmall = document.querySelector('#ulSmall');
const ulLarge = document.querySelector('#ulLarge');
const buttonOne = document.querySelector('#buttonOne');
const buttonTwo = document.querySelector('#buttonTwo');

let currentItem = 0;

const showPopup = () => {
  const item = popup[currentItem];
  title.textContent = item.title;
  closework.textContent = item.closeWork;
  smallImg.src = item.smallImg;
  largImg.src = item.largImg;
  description.textContent = item.description;
  ulSmall.textContent = item.ulSmall.join('  ');
  ulLarge.textContent = item.ulLarge.join('  ');
  buttonOne.href = item.buttonOne;
  buttonTwo.href = item.buttonTwo;
};

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  displayWork.style.transform = 'translate(0)';
}

const buttonEOne = () => {
  showPopup(currentItem);
  openModal(button1);
};

button1.addEventListener('click', buttonEOne);

const buttonETwo = () => {
  currentItem = 1;
  showPopup(currentItem);
  openModal(button2);
};

button2.addEventListener('click', buttonETwo);

const buttonEThree = () => {
  currentItem = 2;
  showPopup(currentItem);
  openModal(button3);
};

button3.addEventListener('click', buttonEThree);

const buttonEFour = () => {
  currentItem = 3;
  showPopup(currentItem);
  openModal(button4);
};

button4.addEventListener('click', buttonEFour);

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  displayWork.style.transform = '';
}
closeModal();
