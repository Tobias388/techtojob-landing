import './main.css';
import { initI18n } from './i18n/index.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar sistema de internacionalización (i18n)
  initI18n();

  // Toggle Menú Hamburguesa con Overlay
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Cerrar menú de navegación');
    mobileMenu.classList.remove('hidden');
    if (backdrop) backdrop.classList.remove('hidden');
    if (openIcon) openIcon.classList.add('hidden');
    if (closeIcon) closeIcon.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const closeMobileMenu = () => {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    mobileMenu.classList.add('hidden');
    if (backdrop) backdrop.classList.add('hidden');
    if (openIcon) openIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  const toggleMenu = () => {
    if (!menuBtn || !mobileMenu) return;
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', toggleMenu);

    if (backdrop) {
      backdrop.addEventListener('click', closeMobileMenu);
    }

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        closeMobileMenu();
      }
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
