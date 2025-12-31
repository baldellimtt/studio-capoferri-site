/**
 * Scroll Animations con Intersection Observer API
 * Animazioni moderne e performanti per elementi al scroll
 */

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    this.init();
  }

  init() {
    // Crea observer per animazioni fade-in
    this.fadeObserver = new IntersectionObserver(
      this.handleFadeIn.bind(this),
      this.observerOptions
    );

    // Crea observer per counter animati
    this.counterObserver = new IntersectionObserver(
      this.handleCounter.bind(this),
      { threshold: 0.5 }
    );

    // Osserva elementi con classe fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
      this.fadeObserver.observe(el);
    });

    // Osserva counter
    document.querySelectorAll('.counter').forEach(el => {
      this.counterObserver.observe(el);
    });

    // Animazione slide-in per card
    this.slideObserver = new IntersectionObserver(
      this.handleSlideIn.bind(this),
      this.observerOptions
    );

    document.querySelectorAll('.slide-in').forEach(el => {
      this.slideObserver.observe(el);
    });
  }

  handleFadeIn(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        this.fadeObserver.unobserve(entry.target);
      }
    });
  }

  handleSlideIn(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('slide-in-visible');
        }, index * 100);
        this.slideObserver.unobserve(entry.target);
      }
    });
  }

  handleCounter(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        this.animateCounter(entry.target);
        entry.target.classList.add('counted');
        this.counterObserver.unobserve(entry.target);
      }
    });
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + suffix;
      }
    };

    updateCounter();
  }
}

// Inizializza quando il DOM è pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
  });
} else {
  new ScrollAnimations();
}


