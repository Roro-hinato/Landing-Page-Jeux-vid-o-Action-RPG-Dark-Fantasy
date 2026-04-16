/* ═══════════════════════════════════════════════
   MAIN — entry point
   Order: render templates → setup all interactions
═══════════════════════════════════════════════ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render data-driven sections
    renderAll();

    // 2. Setup interactions (render must happen first)
    setupNavbar();
    setupHamburger();
    setupReveal();
    setupGameplay();          // §2 carousel
    setupZones();             // §5 carousel
    setupCursor();
    setupModal();             // disclaimer modal
    setupInfoModals();        // footer info modals
    setupForm();
    const scrollApi = setupSectionScroll();
    setupSectionNav(scrollApi);   // floating ↑ ↓ ⇞ buttons
    setupCitadelleButtons();  // §4 crossfade
    setupLiveCounter();
    setupMobileTouch();
    setupParallax();          // mouse parallax
});
