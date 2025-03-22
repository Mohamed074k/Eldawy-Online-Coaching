// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
 
  // Animate hamburger icon
  const spans = navToggle.querySelectorAll('span');
  spans.forEach(span => span.classList.toggle('active'));
  spans.forEach(span => span.classList.toggle('active'));
});



// Close mobile menu when clicking outside of it
window.addEventListener('click', e => {
  if (navLinks.classList.contains('active') && e.target !== navToggle && !navToggle.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Add active class to nav links when scrolling
// const sections = document.querySelectorAll('section[id]');
// const navLinksLi = document.querySelectorAll('.nav-links li');
// sections.forEach(section => {
//   const top = section.offsetTop;
//   const height = section.clientHeight;
//   const id = section.getAttribute('id');
//   const link = navLinksLi.find(link => link.getAttribute('href') === `#${id}`);
//   section.scrollMarginTop = 100;
//   section.scrollMarginBottom = 100;
//   window.addEventListener('scroll', () => {
//     const scroll = window.scrollY;
//     if (scroll >= top && scroll < top + height) {
//       link.classList.add('active');
//     } else {
//       link.classList.remove('active');
//     }
//   }
//   );
// }
// );


// add active class to links i clicked and remove from others
// const navLinksLi = document.querySelectorAll('.nav-links li');
// navLinksLi.forEach(link => {
//   link.addEventListener('click', () => {
//     navLinksLi.forEach(li => li.classList.remove('active'));
//     link.classList.add('active');
//   });
// });


///////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll("nav a"); // Select all navbar links
//   const sections = document.querySelectorAll("section"); // Select all sections
//   const homeLink = document.querySelector('nav a[href="index.html"]'); // Home link

//   function setActiveClass(targetLink) {
//       navLinks.forEach(link => link.classList.remove("active")); // Remove active from all
//       if (targetLink) {
//           targetLink.classList.add("active"); // Add active to the correct link
//       }
//   }

//   // Highlight correct link on page load
//   function highlightActivePage() {
//       let currentPage = window.location.pathname.split("/").pop(); // Get current page name
//       let currentHash = window.location.hash; // Get section if exists
//       let found = false; // Track if a match is found

//       navLinks.forEach(link => {
//           let linkHref = link.getAttribute("href");

//           // Check if current link matches the page or section
//           if (linkHref === currentPage || linkHref === currentHash || (linkHref === "index.html" && currentPage === "")) {
//               setActiveClass(link);
//               found = true;
//           }
//       });

//       // If no match, remove "Home" active and activate correct page
//       if (!found) {
//           let currentPath = window.location.pathname;
//           navLinks.forEach(link => {
//               if (link.href.includes(currentPath)) {
//                   setActiveClass(link);
//               }
//           });
//       }
//   }

//   // Handle click events
//   navLinks.forEach(link => {
//       link.addEventListener("click", function (event) {
//           setActiveClass(event.target);
//       });
//   });

//   // Handle scroll events on the main page
//   function onScroll() {
//       let scrollPosition = window.scrollY + 150; // Adjusted offset for better detection
//       let found = false; // Flag to check if a section is in view

//       sections.forEach(section => {
//           let sectionTop = section.offsetTop;
//           let sectionHeight = section.offsetHeight;

//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//               let sectionId = section.getAttribute("id");
//               let targetLink = document.querySelector(`nav a[href="#${sectionId}"]`);
//               setActiveClass(targetLink);
//               found = true;
//           }
//       });

//       // If no section is in view (user is at the very top), activate "Home"
//       if (!found) {
//           setActiveClass(homeLink);
//       }
//   }

//   // Run highlight function on page load
//   highlightActivePage();

//   // Run scroll function only if sections exist (i.e., on index.html)
//   if (sections.length > 0) {
//       window.addEventListener("scroll", onScroll);
//   }
// });



/////////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll("nav a"); // Select all navbar links
//   const sections = document.querySelectorAll("section"); // Select all sections
//   const homeLink = document.querySelector('nav a[href="index.html"]'); // Home link

//   function setActiveClass(targetLink) {
//       navLinks.forEach(link => link.classList.remove("active")); // Remove active from all
//       if (targetLink) {
//           targetLink.classList.add("active"); // Add active to the correct link
//       }
//   }

//   // Handle click events
//   navLinks.forEach(link => {
//       link.addEventListener("click", function (event) {
//           setActiveClass(event.target);
//       });
//   });

//   // Handle scroll events
//   function onScroll() {
//       let scrollPosition = window.scrollY + 150; // Adjusted offset for better detection

//       let found = false; // Flag to check if a section is in view

//       sections.forEach(section => {
//           let sectionTop = section.offsetTop;
//           let sectionHeight = section.offsetHeight;

//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//               let sectionId = section.getAttribute("id");
//               let targetLink = document.querySelector(`nav a[href="#${sectionId}"]`);
//               setActiveClass(targetLink);
//               found = true; // A section is found in view
//           }
//       });

//       // If no section is in view (i.e., user is at the very top), activate "Home"
//       if (!found) {
//           setActiveClass(homeLink);
//       }
//   }

//   window.addEventListener("scroll", onScroll); // Listen to scroll event
// });


/////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a"); // Select all navbar links
  const sections = document.querySelectorAll("section"); // Select all sections

  function setActiveClass(targetLink) {
      navLinks.forEach(link => link.classList.remove("active")); // Remove active from all
      if (targetLink) {
          targetLink.classList.add("active"); // Add active to the correct link
      }
  }

  // Handle click events
  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          setActiveClass(event.target);
      });
  });

  // Handle scroll events
  function onScroll() {
      let scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach(section => {
          let sectionTop = section.offsetTop;
          let sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              let sectionId = section.getAttribute("id");
              let targetLink = document.querySelector(`nav a[href="#${sectionId}"]`);
              setActiveClass(targetLink);
          }
      });
  }

  window.addEventListener("scroll", onScroll); // Listen to scroll event
});




document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a"); // Select all navbar links

  function setActiveClass(event) {
      navLinks.forEach(link => link.classList.remove("active")); // Remove active from all
      event.target.classList.add("active"); // Add active to clicked link
  }

  // Add click event to each navbar link
  navLinks.forEach(link => {
      link.addEventListener("click", setActiveClass);
  });

  // Highlight the correct menu item when navigating to a different page
  function highlightActiveLink() {
      let currentPage = window.location.pathname.split("/").pop(); // Get current page name
      let currentHash = window.location.hash; // Get section if exists

      navLinks.forEach(link => {
          let linkHref = link.getAttribute("href");

          if (linkHref === currentPage || linkHref === currentHash || (linkHref === "index.html" && currentPage === "")) {
              link.classList.add("active");
          } else {
              link.classList.remove("active");
          }
      });
  }

  highlightActiveLink(); // Run on page load
});





////////////////////////////////////////////////////////////









// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll("nav a"); // Select all navbar links
//   const sections = document.querySelectorAll("section"); // Select all sections
//   const homeLink = document.querySelector('nav a[href="index.html"]'); // Home link

//   function setActiveClass(targetLink) {
//       navLinks.forEach(link => link.classList.remove("active")); // Remove active from all
//       if (targetLink) {
//           targetLink.classList.add("active"); // Add active to the correct link
//       }
//   }

//   // Highlight correct link on page load
//   function highlightActivePage() {
//       let currentPage = window.location.pathname.split("/").pop(); // Get current page name
//       let currentHash = window.location.hash; // Get section if exists
//       let found = false; // Track if a match is found

//       // If no hash exists, set Home as active
//       if (!currentHash) {
//           setActiveClass(homeLink);
//       }

//       navLinks.forEach(link => {
//           let linkHref = link.getAttribute("href");

//           // Check if current link matches the page or section
//           if (linkHref === currentPage || linkHref === currentHash || (linkHref === "index.html" && currentPage === "")) {
//               setActiveClass(link);
//               found = true;
//           }
//       });

//       // If no match is found, set active based on the current page
//       if (!found) {
//           let currentPath = window.location.pathname;
//           navLinks.forEach(link => {
//               if (link.href.includes(currentPath)) {
//                   setActiveClass(link);
//               }
//           });
//       }
//   }

//   // Handle click events
//   navLinks.forEach(link => {
//       link.addEventListener("click", function (event) {
//           setActiveClass(event.target);
//       });
//   });

//   // Handle scroll events on the main page
//   function onScroll() {
//       let scrollPosition = window.scrollY + 150; // Adjusted offset for better detection
//       let found = false; // Flag to check if a section is in view

//       sections.forEach(section => {
//           let sectionTop = section.offsetTop;
//           let sectionHeight = section.offsetHeight;

//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//               let sectionId = section.getAttribute("id");
//               let targetLink = document.querySelector(`nav a[href="#${sectionId}"]`);
//               setActiveClass(targetLink);
//               found = true;
//           }
//       });

//       // If no section is in view (user is at the very top), activate "Home"
//       if (!found && !window.location.hash) {
//           setActiveClass(homeLink);
//       }
//   }

//   // Run highlight function on page load
//   highlightActivePage();

//   // Run scroll function only if sections exist (i.e., on index.html)
//   if (sections.length > 0) {
//       window.addEventListener("scroll", onScroll);
//   }
// });
