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
    title: 'Multi-post stories',
    closeWork: '<i class="closeWork fa fa-times"></i>',
    displayImgSmall: './images/modal-mobile.png',
    descriptionMobile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    diplayUl: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
}]

const desktopModalContent = [{
    title: 'Multi-post stories',
    closeWork: '<i class="closeWork fa fa-times"></i>',
    displayImgLarge: './images/Snapshoot-Portfolio-lg.png',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    diplayUl: ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'],
}];

const displayWork = document.getElementById('displayWork');

mobileModalContent.displayImgSmall = './images/Snapshoot-Portfolio.png';
mobileModalContent.descriptionMobile = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.';
mobileModalContent.diplayUl = ['|', 'html', '|', 'Ruby on rails', '|', 'css'];
desktopModalContent.title = 'Multi-post stories';
desktopModalContent.closeWork = '<i class="closeWork fa fa-times"></i>';
desktopModalContent.displayImgLarge = './images/Snapshoot-Portfolio-lg.png';
desktopModalContent.descriptionDesktop = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.';
desktopModalContent.diplayUl = ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github', '|'];

const langArray = mobileModalContent.diplayUl.join('  ');
const langArrayLg = desktopModalContent.diplayUl.join('  ');

displayWork.innerHTML = `<section class="displayWork"><div class="headerDis"><h2 class="displayHeader">${desktopModalContent.title}</h2><span> <a onclick="closePopupModal()" href="" class="closeWork">${desktopModalContent.closeWork}</a></span></div>
  <img class="displayImg large" src="${desktopModalContent.displayImgLarge}" alt="Project Image on desktop device">
  <p class="displayP">${desktopModalContent.descriptionDesktop}</p>
  <ul class="diplayUl">${langArray}</ul>
  <ul class="diplayUlLG">${langArrayLg}</ul>
  <img class="displayImg small" src="${mobileModalContent.displayImgSmall}" alt="Project Image on mobile device">
<div class="footerDis">
  <button class="buttonDis buttonOne" type="button">See Live <i class="disFA fa fa-chevron-right"></i></button>
  <button class="buttonDis buttonTwo" type="button">See Source <i class="disFA fa fa-github"></i></button>
</div>    </section>
`;

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

function closing() {
    closeModal.style.display = 'none';
}

closing();