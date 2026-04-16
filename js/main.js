/* ═══════════════════════════════════════════════
   MAIN — entry point
   Critical setup runs immediately; non-critical deferred via requestIdleCallback
   to reduce Total Blocking Time.
═══════════════════════════════════════════════ */
'use strict';

const defer = (fn) => ('requestIdleCallback' in window) ? requestIdleCallback(fn) : setTimeout(fn, 1);

document.addEventListener('DOMContentLoaded', () => {
    // ── CRITICAL (affects first paint / core navigation) ──
    renderAll();
    setupNavbar();
    setupHamburger();
    setupReveal();
    const scrollApi = setupSectionScroll();
    setupSectionNav(scrollApi);

    // ── DEFERRED (non-blocking — interactions, animations, polish) ──
    defer(() => {
        setupGameplay();
        setupZones();
        setupCitadelleButtons();
    });
    defer(() => {
        setupModal();
        setupInfoModals();
        setupForm();
        setupLiveCounter();
    });
    defer(() => {
        setupMobileTouch();
        setupParallax();
    });
});
