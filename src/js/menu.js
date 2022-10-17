(() => {
  const mobileMenu = document.querySelector('[js-menu-container]');
  const openMenuBtn = document.querySelector('[js-open-menu]');
  
  const toggleMenu = () => {
    const isMenuOpen = 
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    mobileMenu.classList.toggle('is-open');
    let a = mobileMenu.classList.contains('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  mobileMenu .addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
    
})();

// Coded by Łukasik Grzegorz
// https://github.com/lukasikgrzegorz
