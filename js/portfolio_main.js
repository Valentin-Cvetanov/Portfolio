// View projects buttons

document.querySelector('.introduction-projects-button').addEventListener('click', () => {
  if (document.querySelector('.menu-c').dataset.state === 'open'){
    document.querySelector('.menu-c').dataset.state = 'closed';
    document.querySelector('.menu-c').style.display = 'none';
  }
  scrollTo({
    top: document.querySelector('.featured-project-heading').getBoundingClientRect().top + scrollY - (innerWidth >= 768? document.querySelector('.name-nav-buttons-c').clientHeight: document.querySelector('.name-menu-button-c').clientHeight),
    behavior: "smooth"
  });
})

// Download CV button

// Featured project description expansion

const descriptionAdditionalText = document.querySelector('.featured-project-description-additional-text');
const seeMoreButton = document.querySelector('.featured-project-description-see-more-button');
const seeLessButton = document.querySelector('.featured-project-description-see-less-button');
let descriptionAdditionalTextHeight;
let descriptionExpansionActiveTimeouts = [];

seeMoreButton.addEventListener('click', () => {
  if (descriptionAdditionalText.dataset.state !== 'open'){
    descriptionAdditionalText.dataset.state = 'open';

    if (descriptionExpansionActiveTimeouts.length !== 0){
      descriptionExpansionActiveTimeouts.forEach(timeout => {
        clearTimeout(timeout);
        descriptionExpansionActiveTimeouts.length = 0;
      })
    }

    const seeMoreButtonDisplayTimeout = setTimeout(() => {
      seeMoreButton.style.display = 'none';
    }, 260);
    descriptionExpansionActiveTimeouts.push(seeMoreButtonDisplayTimeout);
    seeMoreButton.style.opacity = '0';
    seeMoreButton.style.cursor = 'default';

    descriptionAdditionalText.style.display = 'block';
    if (!descriptionAdditionalTextHeight){
      descriptionAdditionalTextHeight = descriptionAdditionalText.clientHeight;
    }
    descriptionAdditionalText.style.maxHeight = '0';
    requestAnimationFrame(() => {
      descriptionAdditionalText.style.maxHeight = `${descriptionAdditionalTextHeight}px`;
      descriptionAdditionalText.style.opacity = '1';
    })
  }
})

seeLessButton.addEventListener('click', () => {
  if (descriptionAdditionalText.dataset.state === 'open'){
    descriptionAdditionalText.dataset.state = 'closed';

    if (descriptionExpansionActiveTimeouts.length !== 0){
      descriptionExpansionActiveTimeouts.forEach(timeout => {
        clearTimeout(timeout);
        descriptionExpansionActiveTimeouts.length = 0;
      })
    }
    
    seeMoreButton.style.display = '';
    seeMoreButton.style.opacity = '1';
    seeMoreButton.style.cursor = '';

    const descriptionAdditionalTextDisplayTimeout = setTimeout(() => {
      descriptionAdditionalText.style.display = '';
    }, 260);
    descriptionExpansionActiveTimeouts.push(descriptionAdditionalTextDisplayTimeout);
    requestAnimationFrame(() => {
      descriptionAdditionalText.style.maxHeight = '0';
      descriptionAdditionalText.style.opacity = '0';
    })
  }
})

// Screenshot modal

const screenshotModal = document.querySelector('.featured-project-screenshot-modal');
let screenshotModalActiveTimeouts = [];

document.querySelector('.featured-project-screenshot').addEventListener('click', () => {
  if (screenshotModal.dataset.state !== 'open'){
    screenshotModal.dataset.state = 'open';

    if (screenshotModalActiveTimeouts.length !== 0){
      screenshotModalActiveTimeouts.forEach(timeout => {
        clearTimeout(timeout);
        screenshotModalActiveTimeouts.length = 0;
      })
    }

    screenshotModal.style.display = 'flex';
    screenshotModal.style.opacity = '0';

    requestAnimationFrame(() => {
      screenshotModal.style.opacity = '1';
    })
  }
})

screenshotModal.addEventListener('click', () => {
  if (screenshotModal.dataset.state === 'open'){
    screenshotModal.dataset.state = 'closed';

    if (screenshotModalActiveTimeouts.length !== 0){
      screenshotModalActiveTimeouts.forEach(timeout => {
        clearTimeout(timeout);
        screenshotModalActiveTimeouts.length = 0;
      })
    }

    const screenshotModalDisplayTimeout = setTimeout(() => {
      screenshotModal.style.display = '';
      screenshotModal.style.overscrollBehaviorY = '';
    }, 260)
    screenshotModalActiveTimeouts.push(screenshotModalDisplayTimeout);
    screenshotModal.style.opacity = '0';
    screenshotModal.style.overscrollBehaviorY = 'auto';
  }
})

// Document scrolling

/*
const contactFooter = document.querySelector('.contact-heading-c');
const contactFooterHeight = contactFooter.clientHeight;
let lastScrollPosition = scrollY;

contactFooter.dataset.state = 'open';

function openContactFooter (){
  contactFooter.dataset.state = 'open';
  contactFooter.style.maxHeight = '0';
  contactFooter.style.paddingBlock = innerWidth >= 768? '13px': '10px';
  requestAnimationFrame(() => {
    contactFooter.style.maxHeight = `${contactFooterHeight}px`;
  })
}

function closeContactFooter (){
  contactFooter.dataset.state = 'closed';
  contactFooter.style.maxHeight = '0';
  contactFooter.style.paddingBlock = '0';
}

document.addEventListener('scroll', () => {
  if (scrollY > lastScrollPosition){
    lastScrollPosition = scrollY;
    if (contactFooter.dataset.state === 'open'){
      closeContactFooter();
    }
  } else {
    lastScrollPosition = scrollY;
    if (contactFooter.dataset.state === 'closed'){
      openContactFooter();
    }
  }
})
*/

// Contact buttons

document.querySelectorAll('.contact-button').forEach(contactButton => {
  contactButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(contactButton.innerHTML);
    } catch {}
  })
})