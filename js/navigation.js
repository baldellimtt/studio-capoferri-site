/**
 * Gestione Navigazione e Menu Mobile
 */

class Navigation {
  constructor() {
    this.nav = document.querySelector('.main-nav');
    this.hamburger = document.querySelector('.hamburger-menu');
    this.init();
  }

  init() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
    }

    // Chiudi menu quando si clicca fuori
    document.addEventListener('click', (event) => {
      if (
        this.nav?.classList.contains('active') &&
        !this.nav.contains(event.target) &&
        !this.hamburger?.contains(event.target)
      ) {
        this.closeMenu();
      }
    });

    // Chiudi menu quando si clicca su un link
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Smooth scroll per anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  toggleMenu() {
    const isActive = this.nav.classList.toggle('active');
    this.hamburger.setAttribute('aria-expanded', isActive);
    
    // Previene scroll del body quando menu è aperto
    if (isActive) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  closeMenu() {
    this.nav.classList.remove('active');
    this.hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }
}

// Inizializza
let navigationInstance;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    navigationInstance = new Navigation();
  });
} else {
  navigationInstance = new Navigation();
}

// Funzione globale per compatibilità con onclick nell'HTML
function toggleMenu() {
  // Se l'istanza non è ancora creata, creala al volo
  if (!navigationInstance) {
    navigationInstance = new Navigation();
  }
  
  if (navigationInstance && navigationInstance.nav && navigationInstance.hamburger) {
    navigationInstance.toggleMenu();
  } else {
    // Fallback: gestione diretta se l'istanza non funziona
    const nav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger-menu');
    if (nav && hamburger) {
      const isActive = nav.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive);
      
      // Previene scroll del body quando menu è aperto
      if (isActive) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }
  }
}


