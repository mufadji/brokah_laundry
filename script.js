document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // MOBILE NAVIGATION DRAWER & BACKDROP LOGIC
  // ==========================================================================
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Create backdrop overlay element dynamically
  const backdrop = document.createElement('div');
  backdrop.className = 'drawer-backdrop';
  document.body.appendChild(backdrop);

  // Toggle mobile navigation drawer open/close
  function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    backdrop.classList.toggle('active');
    
    // Prevent background scrolling when drawer is open
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Bind clicks
  menuToggle.addEventListener('click', toggleMobileMenu);
  backdrop.addEventListener('click', toggleMobileMenu);

  // Close drawer when any mobile navigation anchor is clicked
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  // ==========================================================================
  // STICKY HEADER SCROLL LOGIC
  // ==========================================================================
  const mainHeader = document.getElementById('main-header');
  
  function checkHeaderScroll() {
    if (window.scrollY > 50) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  }

  // Verify immediately on load and on scroll
  window.addEventListener('scroll', checkHeaderScroll);
  checkHeaderScroll();

  // ==========================================================================
  // FAQ ACCORDION INTERACTIVITY
  // ==========================================================================
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const currentItem = question.parentElement;
      const answerContainer = question.nextElementSibling;
      const isActive = currentItem.classList.contains('active');

      // Close all other FAQ items first
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        currentItem.classList.remove('active');
        answerContainer.style.maxHeight = null;
      } else {
        currentItem.classList.add('active');
        // Set maximum height to the scroll height of inner text
        answerContainer.style.maxHeight = answerContainer.scrollHeight + 'px';
      }
    });
  });

  // ==========================================================================
  // ACTIVE LINK SCROLL SPY LOGIC
  // ==========================================================================
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function scrollSpy() {
    const scrollPosition = window.scrollY + 100; // Offset for threshold detection

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);
  // Run scrollSpy once to set initial active states
  scrollSpy();
});
