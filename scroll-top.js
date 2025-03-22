// Scroll to top functionality
const scrollTop = document.querySelector('.scroll-top');

// Show/hide button based on scroll position
const toggleScrollButton = () => {
  if (window.pageYOffset > 300) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
};

// Scroll to top when clicked
scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Listen for scroll events
window.addEventListener('scroll', toggleScrollButton);