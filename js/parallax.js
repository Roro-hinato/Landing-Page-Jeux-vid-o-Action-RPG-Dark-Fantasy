/* ═══════════════════════════════════════════════
   PARALLAX — mouse-based (compatible avec scroll-snap)
   Optimisé : pause le rAF quand aucun élément .prx-* n'est visible.
═══════════════════════════════════════════════ */
'use strict';

const setupParallax = () => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = [
        ...document.querySelectorAll('.prx-1'),
        ...document.querySelectorAll('.prx-2'),
        ...document.querySelectorAll('.prx-3'),
    ];
    if (!layers.length) return;

    const getDepth = el =>
        el.classList.contains('prx-3') ? 3 :
        el.classList.contains('prx-2') ? 2 : 1;

    let mx = 0, my = 0, cx = 0, cy = 0;
    const LERP = 0.08;
    const EPSILON = 0.001;       // skip frames when movement is invisible
    let running = false;
    let visible = false;

    window.addEventListener('mousemove', e => {
        mx = (e.clientX / window.innerWidth  - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
        if (visible && !running) startLoop();
    }, { passive: true });

    const tick = () => {
        if (!visible) { running = false; return; }
        const dx = mx - cx, dy = my - cy;
        // Stop loop when the cursor stops and easing is done
        if (Math.abs(dx) < EPSILON && Math.abs(dy) < EPSILON) { running = false; return; }
        cx += dx * LERP;
        cy += dy * LERP;
        for (let i = 0; i < layers.length; i++) {
            const d = getDepth(layers[i]);
            layers[i].style.transform = `translate3d(${-cx*d*8}px,${-cy*d*8}px,0)`;
        }
        requestAnimationFrame(tick);
    };

    function startLoop() { if (!running) { running = true; requestAnimationFrame(tick); } }

    // Only run when a parallax element is actually in the viewport
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            visible = entries.some(e => e.isIntersecting);
            if (visible) startLoop();
        }, { threshold: 0 });
        layers.forEach(el => io.observe(el));
    } else {
        visible = true;
        startLoop();
    }
};
