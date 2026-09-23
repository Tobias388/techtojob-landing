import { es } from './es.js';
import { en } from './en.js';

const dictionaries = { es, en };
const STORAGE_KEY = 'techtojob_lang';

/**
 * Resuelve una clave de tipo "hero.title" o "howItWorks.step1.desc" dentro del diccionario
 */
function resolveKey(obj, path) {
  if (!obj || !path) return null;
  return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
}

/**
 * Aplica las traducciones a todos los elementos del DOM con atributos data-i18n
 */
export function applyTranslations(lang = 'es') {
  const dict = dictionaries[lang] || dictionaries.es;

  // Actualizar atributo lang en <html>
  document.documentElement.lang = lang;

  // Textos simples (textContent)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = resolveKey(dict, key);
    if (val !== null && val !== undefined) {
      el.textContent = val;
    }
  });

  // Textos con formato HTML enriquecido (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    const val = resolveKey(dict, key);
    if (val !== null && val !== undefined) {
      el.innerHTML = val;
    }
  });

  // Atributos de placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = resolveKey(dict, key);
    if (val !== null && val !== undefined) {
      el.setAttribute('placeholder', val);
    }
  });

  // Atributos aria-label para accesibilidad
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const val = resolveKey(dict, key);
    if (val !== null && val !== undefined) {
      el.setAttribute('aria-label', val);
    }
  });

  // Actualizar estado visual de los botones de cambio de idioma
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === lang) {
      btn.classList.add('bg-primary', 'text-text-main', 'font-bold');
      btn.classList.remove('text-text-muted');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('bg-primary', 'text-text-main', 'font-bold');
      btn.classList.add('text-text-muted');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Disparar evento personalizado por si otros módulos lo requieren
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Cambia el idioma activo y persiste la preferencia del usuario
 */
export function setLanguage(lang) {
  const targetLang = dictionaries[lang] ? lang : 'es';
  localStorage.setItem(STORAGE_KEY, targetLang);
  applyTranslations(targetLang);
}

/**
 * Obtiene el idioma actualmente seleccionado
 */
export function getCurrentLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && dictionaries[urlLang]) return urlLang;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && dictionaries[stored]) return stored;

  return 'es';
}

/**
 * Inicializador del sistema i18n
 */
export function initI18n() {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);

  // Escuchar clics en botones de idioma
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang-btn');
      setLanguage(selected);
    });
  });
}
