/* ═══════════════════════════════════════════════
   PARALLAX — mouse-based (compatible avec scroll-snap)
   Chaque élément .prx-* suit le curseur selon sa profondeur.
═══════════════════════════════════════════════ */
'use strict';

const setupParallax = () => {
    // Disabled on touch / reduced motion
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // depth classes : higher number = stronger movement
    const layers = [
        ...$$('.prx-1'),  // shallow
        ...$$('.prx-2'),
        ...$$('.prx-3'),  // deep
    ];
    if (!layers.length) return;

    const getDepth = el =>
        el.classList.contains('prx-3') ? 3 :
        el.classList.contains('prx-2') ? 2 : 1;

    let mx = 0, my = 0;     // target (normalized -1..1)
    let cx = 0, cy = 0;     // current (eased)
    const LERP = 0.08;

    window.addEventListener('mousemove', e => {
        mx = (e.clientX / window.innerWidth  - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    const tick = () => {
        cx += (mx - cx) * LERP;
        cy += (my - cy) * LERP;
        layers.forEach(el => {
            const d = getDepth(el);
            const tx = -cx * d * 8;   // px offsets
            const ty = -cy * d * 8;
            el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        });
        requestAnimationFrame(tick);
    };
    tick();
};
