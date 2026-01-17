/**
 * Cookie Consent Banner
 * Conforme al GDPR per cookie tecnici e di terze parti
 */

(function() {
  'use strict';

  const COOKIE_CONSENT_NAME = 'cookie_consent_studio_capoferri';
  const COOKIE_EXPIRY_DAYS = 365;

  // Leggi un cookie
  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Verifica se l'utente ha già dato il consenso
  // Controlla sia localStorage che cookie per maggiore robustezza
  function hasConsent() {
    const localStorageConsent = localStorage.getItem(COOKIE_CONSENT_NAME) === 'accepted';
    const cookieConsent = getCookie(COOKIE_CONSENT_NAME) === 'accepted';
    const hasConsentValue = localStorageConsent || cookieConsent;
    return hasConsentValue;
  }

  // Funzione helper per resettare il consenso (utile per test)
  // Puoi chiamarla dalla console: window.resetCookieConsent()
  window.resetCookieConsent = function() {
    localStorage.removeItem(COOKIE_CONSENT_NAME);
    document.cookie = `${COOKIE_CONSENT_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log('Consenso cookie resettato. Ricarica la pagina per vedere il banner.');
  };

  // Salva il consenso
  function setConsent() {
    localStorage.setItem(COOKIE_CONSENT_NAME, 'accepted');
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
    document.cookie = `${COOKIE_CONSENT_NAME}=accepted; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
  }

  // Crea il banner cookie
  function createCookieBanner() {
    // Debug: verifica lo stato del consenso
    const localStorageConsent = localStorage.getItem(COOKIE_CONSENT_NAME);
    const cookieConsent = getCookie(COOKIE_CONSENT_NAME);
    console.log('Cookie consent check:', {
      localStorage: localStorageConsent,
      cookie: cookieConsent,
      hasConsent: hasConsent()
    });

    if (hasConsent()) {
      console.log('Banner non mostrato: consenso già dato');
      return; // L'utente ha già accettato
    }

    console.log('Creazione banner cookie...');

    // Verifica che il body esista
    if (!document.body) {
      console.error('document.body non è disponibile. Banner cookie non può essere creato.');
      return;
    }

    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Informativa sui cookie');
    
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <div class="cookie-banner-icon"></div>
        <div class="cookie-banner-text">
          <p><strong>Utilizzo dei Cookie</strong></p>
          <p>Questo sito utilizza cookie tecnici necessari al funzionamento e, in alcune pagine, cookie di terze parti (Google Maps). Continuando la navigazione accetti l'utilizzo dei cookie. <a href="privacy-policy.html#cookie" style="text-decoration: underline; color: inherit;">Maggiori informazioni</a></p>
        </div>
        <div class="cookie-banner-buttons">
          <button id="accept-cookies" class="cookie-btn cookie-btn-accept" aria-label="Accetta i cookie">Accetta</button>
          <button id="reject-cookies" class="cookie-btn cookie-btn-reject" aria-label="Rifiuta i cookie non essenziali">Rifiuta</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    // Gestione click su Accetta
    document.getElementById('accept-cookies').addEventListener('click', function() {
      setConsent();
      banner.style.display = 'none';
      // Abilita Google Maps se presente
      enableGoogleMaps();
    });

    // Gestione click su Rifiuta
    document.getElementById('reject-cookies').addEventListener('click', function() {
      setConsent(); // Salva la preferenza anche per il rifiuto
      banner.style.display = 'none';
      // Non abilitare Google Maps
    });
  }

  // Abilita Google Maps se il consenso è stato dato
  function enableGoogleMaps() {
    const mapsIframes = document.querySelectorAll('iframe[data-src*="maps.google.com"]');
    mapsIframes.forEach(function(iframe) {
      if (iframe.dataset.src && !iframe.src) {
        // Rimuovi il placeholder se presente
        const placeholder = document.getElementById('map-placeholder');
        if (placeholder) {
          placeholder.style.display = 'none';
        }
        // Carica la mappa
        iframe.src = iframe.dataset.src;
        iframe.style.display = 'block';
      }
    });
  }

  // Inizializza quando il DOM è pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createCookieBanner);
  } else {
    createCookieBanner();
  }

  // Se il consenso è già stato dato, abilita Google Maps
  if (hasConsent()) {
    enableGoogleMaps();
  }
})();

