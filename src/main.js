import './main.css';
import { initI18n } from './i18n/index.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar sistema de internacionalización (i18n)
  initI18n();

  // Toggle Menú Hamburguesa
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMenu = () => {
    if (!menuBtn || !mobileMenu) return;
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    if (openIcon) openIcon.classList.toggle('hidden');
    if (closeIcon) closeIcon.classList.toggle('hidden');
  };

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
          toggleMenu();
        }
      });
    });
  }

  // Scroll suave para todos los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        history.pushState(null, null, targetId);
      }
    });
  });
});
