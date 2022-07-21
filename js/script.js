const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navitem = document.querySelectorAll('.mainMenu .nav-item .nav-link');
const overlay = document.querySelector('#ovelay');
const openModalButton = document.querySelectorAll('[data-modal-target]');


function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
openMenu.addEventListener('click', show);

function close() {
    mainMenu.style.top = '-100%';
}
closeMenu.addEventListener('click', close);

navitem.forEach((item) => {
    item.addEventListener('click', () => {
        close();
    });
});

const mobileModalContent = [{
    displayHeader: 'Multi-post stories',
    closeWork: '<i class="closeWork fa fa-times"></i>',
    displayImgSmall: './images/Snapshoot-Portfolio.png',
    displayP: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    diplayUl: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
}];

const desktopModalContent = [{
    displayHeader: 'Multi-post stories',
    closeWork: '<i class="closeWork fa fa-times"></i>',
    displayImgLarge: './images/Snapshoot-Portfolio-lg.png',
    displayP: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    diplayUl: ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'],
}];

const displayWork = document.getElementById('displayWork');
const langArray = mobileModalContent.diplayUl.join('  ');
displayWork.innerHTML = `<h2 class="displayHeader">${desktopModalContent.closeWork}</h2>
  <span> <a onclick="closePopupModal()" href="" class="close-popup"><img class="closeWork" src="${desktopModalContent.closeWork}" alt="Close icon Mobile modal" /></a></span>
  <img class="displayImg large" src="${desktopModalContent.displayImgLarge}" alt="Project Image on desktop device">
  <p class="displayP">${desktopModalContent.displayP}</p>
  <ul class="diplayUl">${langArray}</ul>
  <img class="displayImg small e" src="${mobileModalContent.displayImgSmall}" alt="Project Image on mobile device">
  <p class="mobile-modal-text">${mobileModalContent.displayP}</p>
  <button class="live-button" type="button">See Live <i class="disFA fa fa-chevron-right"></i></button>
  <button class="src-button" type="button">See Source <i class="disFA fa fa-github"></i></button>
`;

desktopModalContent.displayHeader = 'Multi-post stories';
desktopModalContent.displayP = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.';
desktopModalContent.displayImgLarge = './images/Snapshoot-Portfolio-lg.png';
desktopModalContent.closeWork = '<i class="closeWork fa fa-times"></i>';
desktopModalContent.diplayUl = ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'];
mobileModalContent.displayP = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.';
mobileModalContent.displayImgSmall = './images/modal-mobile.png';
mobileModalContent.diplayUl = ['|', 'html', '|', 'Ruby on rails', '|', 'css'];

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

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.displayWork.active');
    modals.forEach((modal) => {
        closeModal(modal);
    });
});