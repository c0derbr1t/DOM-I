const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll('a');

navLinks.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index+1}`];
})

let mainImg = document.querySelector('#cta-img');
mainImg.setAttribute('src', siteContent['cta']['img-src'])

let title = document.querySelector('.cta-text>h1');
title.textContent = siteContent['cta']['h1'];


let button = document.querySelector('.cta-text>button');
button.textContent = siteContent['cta']['button'];

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// let features = document.querySelector('div:nth-child(1) h4');
// features.textContent = siteContent['main-content']['features-h4'];

// let featuresText = document.querySelector('div:nth-child(1) p');
// featuresText.textContent = siteContent['main-content']['features-content'];

// let about = document.querySelector('div:nth-child(2) h4');
// about.textContent = siteContent['main-content']['about-h4'];

// let aboutText = document.querySelector('div:nth-child(2) p');
// aboutText.textContent = siteContent['main-content']['about-content'];

// let services = document.querySelector('div:nth-child(3) h4');
// services.textContent = siteContent['main-content']['services-h4'];

// let servicesText = document.querySelector('div:nth-child(3) p');
// servicesText.textContent = siteContent['main-content']['services-content'];

// let product = document.querySelector('div:nth-child(4) h4');
// product.textContent = siteContent['main-content']['product-h4'];

// let productText = document.querySelector('div:nth-child(4) p');
// productText.textContent = siteContent['main-content']['product-content'];

// let vision = document.querySelector('div:nth-child(5) h4');
// vision.textContent = siteContent['main-content']['vision-h4'];

// let visionText = document.querySelector('div:nth-child(5) p');
// visionText.textContent = siteContent['main-content']['vision-content'];

let headers = document.querySelectorAll('h4');
headers[0].textContent = siteContent['main-content']['features-h4'];
headers[1].textContent = siteContent['main-content']['about-h4'];
headers[2].textContent = siteContent['main-content']['services-h4'];
headers[3].textContent = siteContent['main-content']['product-h4'];
headers[4].textContent = siteContent['main-content']['vision-h4'];
headers[5].textContent = siteContent['contact']['contact-h4'];


let paragraphs = document.querySelectorAll('p'); 
paragraphs[0].textContent = siteContent['main-content']['features-content']; 
paragraphs[1].textContent = siteContent['main-content']['about-content']; 
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];
paragraphs[5].textContent = siteContent['contact']['address'];
paragraphs[6].textContent = siteContent['contact']['phone'];
paragraphs[7].textContent = siteContent['contact']['email'];
// let topText = document.querySelectorAll('.top-content > .text-content')
// console.log(topText);

// let headers = document.querySelectorAll('h4:nth-of-type(1)');
// console.log(headers);

// headers.forEach((link, index) => {
//   link.textContent = siteContent['main-content'][index];
// })

// featuresHead.textContent = siteContent['main-content']['features-h4'];

// console.log(featuresHead);

// let aboutHead = document.querySelectorAll('.top-content .text-content:last-child > h4');

// aboutHead.textContent = siteContent['main-content']['about-h4'];

// console.log(aboutHead);

// let featuresText = document.querySelectorAll('.top-content > .text-content:first-child p');

// featuresText.textContent = siteContent['main-content']['features-content'];

// let aboutText = document.querySelectorAll('.top-content > .text-content:last-child p');

// aboutText.textContent = siteContent['main-content']['about-content'];



