document.addEventListener('scroll', () => {
  const offerImage = document.querySelector('.offer-image');
  const saleText = document.querySelector('.offer-content h1');
  const rectImage = offerImage.getBoundingClientRect();
  const rectText = saleText.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rectImage.top < windowHeight && rectImage.bottom > 0) {
    offerImage.classList.add('scroll-in');
    offerImage.classList.remove('scroll-out');
  } else {
    offerImage.classList.add('scroll-out');
    offerImage.classList.remove('scroll-in');
  }

  if (rectText.top < windowHeight && rectText.bottom > 0) {
    saleText.classList.add('scroll-in');
    saleText.classList.remove('scroll-out');
  } else {
    saleText.classList.add('scroll-out');
    saleText.classList.remove('scroll-in');
  }
});
