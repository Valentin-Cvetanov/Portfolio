// Name buttons

document.querySelectorAll('.name').forEach(nameButton => {
  nameButton.addEventListener('click', () => {
    scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Projects buttons

[document.querySelector('.projects-button'), document.querySelector('.menu-projects-button')].forEach(projectsButton => {
  projectsButton.addEventListener('click', () => {
    if (document.querySelector('.menu-c').dataset.state === 'open'){
      closeMenu();
    }
    scrollTo({
      top: document.querySelector('.featured-project-heading').getBoundingClientRect().top + scrollY - (innerWidth >= 768? document.querySelector('.name-nav-buttons-c').clientHeight: document.querySelector('.name-menu-button-c').clientHeight),
      behavior: "smooth"
    });
  });
});

// Skills buttons

[document.querySelector('.skills-button'), document.querySelector('.menu-skills-button')].forEach(skillsButton => {
  skillsButton.addEventListener('click', () => {
    if (document.querySelector('.menu-c').dataset.state === 'open'){
      closeMenu();
    }
    scrollTo({
      top: document.querySelector('.skills-heading').getBoundingClientRect().top + scrollY - (innerWidth >= 768? document.querySelector('.name-nav-buttons-c').clientHeight: document.querySelector('.name-menu-button-c').clientHeight),
      behavior: "smooth"
    });
  });
});

// Desktop contact dropdown button

const contactDropdownButtonDesktop = document.querySelector('.contact-dropdown-button');
const contactDropdownMenuDesktop = document.querySelector('.contact-dropdown-c');

function openContactDropdownMenuDesktop (shouldChangeState = false){
  if (shouldChangeState){
    contactDropdownMenuDesktop.dataset.state = 'open';
  }
  contactDropdownMenuDesktop.style.display = 'flex';
  contactDropdownMenuDesktop.style.opacity = '0';
  contactDropdownMenuDesktop.style.opacity = '1';
}
function closeContactDropdownMenuDesktop (shouldChangeState = false){
  if (shouldChangeState){
    contactDropdownMenuDesktop.dataset.state = 'closed';
  }
  contactDropdownMenuDesktop.style.opacity = '0';
}

contactDropdownButtonDesktop.addEventListener('mouseenter', () => {
  if (contactDropdownMenuDesktop.dataset.state !== 'open'){
    openContactDropdownMenuDesktop();
  }
})
contactDropdownButtonDesktop.addEventListener('mouseleave', () => {
  if (contactDropdownMenuDesktop.dataset.state !== 'open'){
    closeContactDropdownMenuDesktop();
  }
})

contactDropdownButtonDesktop.addEventListener('click', () => {
  if (contactDropdownMenuDesktop.dataset.state !== 'open'){
    openContactDropdownMenuDesktop(true);
  } else {
    closeContactDropdownMenuDesktop(true);
  }
})

document.addEventListener('click', e => {
  if (contactDropdownMenuDesktop.dataset.state && contactDropdownMenuDesktop.dataset.state === 'open' && !e.target.closest('.contact-dropdown-c') && !e.target.closest('.navbar-desktop')){
    closeContactDropdownMenuDesktop(true);
  }
})

// Mobile hamburger menu

const menu = document.querySelector('.menu-c');
let menuHeight;

function openMenu (){
  menu.dataset.state = 'open';
  menu.style.display = 'flex';
  if (!menuHeight){
    menuHeight = menu.clientHeight;
  }
  menu.style.maxHeight = '0';
  menu.style.paddingTop = '0';
  requestAnimationFrame(() => {
    menu.style.maxHeight = `${menuHeight}px`;
    menu.style.paddingTop = '80px';
  })
}

function closeMenu (){
  menu.dataset.state = 'closed';
  menu.style.maxHeight = '0';
  menu.style.paddingTop = '0';

  closeMenuContactMenuMobile();
}

document.querySelector('.toggle-menu-button').addEventListener('click', () => {
  if (menu.dataset.state !== 'open'){
    openMenu();
  } else {
    closeMenu();
  }
})

// Mobile contacts dropdown button

const menuContactMenuMobile = document.querySelector('.menu-contact-c');
const menuContactButtonArrowIcon = document.querySelector('.menu-contact-toggle-button').querySelector('.menu-arrow-icon');
let menuContactMenuMobileHeight;

function openMenuContactMenuMobile (){
  menuContactMenuMobile.dataset.state = 'open';
  menuContactMenuMobile.style.display = 'flex';
  if (!menuContactMenuMobileHeight){
    menuContactMenuMobileHeight = menuContactMenuMobile.clientHeight;
  }
  menuContactMenuMobile.style.maxHeight = '0';
  requestAnimationFrame(() => {
    menuContactMenuMobile.style.maxHeight = `${menuContactMenuMobileHeight}px`;
    menuContactButtonArrowIcon.style.rotate = '180deg';
  })
}

function closeMenuContactMenuMobile (){
  menuContactMenuMobile.dataset.state = 'closed';
  menuContactMenuMobile.style.maxHeight = '0';
  requestAnimationFrame(() => {
    menuContactButtonArrowIcon.style.rotate = '90deg';
  })
}

document.querySelector('.menu-contact-toggle-button').addEventListener('click', () => {
  if (menuContactMenuMobile.dataset.state !== 'open'){
    openMenuContactMenuMobile();
  } else {
    closeMenuContactMenuMobile();
  }
})