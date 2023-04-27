// Selecting the slideshow container
const slideshow = document.querySelector('.slideshow-container');

// Selecting the individual slides
const slides = document.querySelectorAll('.slide');

// Initializing variables to keep track of the current slide index
let slideIndex = 0;

// Function to display the slides
function showSlides() {
  // Hiding all the slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // Incrementing the slide index
  slideIndex++;
  // Resetting the index if it goes beyond the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // Displaying the current slide
  slides[slideIndex - 1].style.display = 'block';
  // Calling the function recursively to create a slideshow effect
  setTimeout(showSlides, 3000);
}

// Calling the function to start the slideshow
showSlides();
