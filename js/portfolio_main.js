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

// Live preview button

const previewButton = document.querySelector('.featured-project-preview-button');
const featuredProjectIframe = document.querySelector('.featured-project-iframe');
let featuredProjectIframeHeight;

function enableLivePreview (){
  featuredProjectIframe.dataset.state = 'open';
  previewButton.innerHTML = 'Disable Live Preview';

  featuredProjectIframe.style.display = 'inline';
  if (!featuredProjectIframeHeight){
    featuredProjectIframeHeight = featuredProjectIframe.clientHeight;
  }
  featuredProjectIframe.style.maxHeight = '0';
  requestAnimationFrame(() => {
    featuredProjectIframe.style.maxHeight = `${featuredProjectIframeHeight}px`;
  })
}

function disableLivePreview (){
  featuredProjectIframe.dataset.state = 'closed';
  previewButton.innerHTML = 'Enable Live Preview';

  featuredProjectIframe.style.maxHeight = '0';
}

previewButton.addEventListener('click', () => {
  if (featuredProjectIframe.dataset.state !== 'open'){
    enableLivePreview();
  } else {
    disableLivePreview();
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