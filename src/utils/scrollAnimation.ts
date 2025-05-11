
export function initScrollAnimation() {
  const sections = document.querySelectorAll('.reveal');
  
  const checkSections = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.85) {
        section.classList.add('active');
      }
    });
  };
  
  checkSections();
  window.addEventListener('scroll', checkSections);
}
