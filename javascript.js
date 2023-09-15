// JavaScript code for the lightbox effect
const images = document.querySelectorAll('.imagewrap img');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeButton = document.querySelector('.close-button');

// Add click event listeners to each image
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxContent.src = image.src;
  });
});

// Close the lightbox when clicking the close button
closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close the lightbox when clicking the black background
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});