/* ═══════════════════════════════════════════════
   CAROUSEL — factory used by §2 Gameplay and §5 Monde
═══════════════════════════════════════════════ */
'use strict';

/**
 * Generic fullscreen slideshow carousel.
 * One implementation for both sections — pass in the selectors & class names.
 */
const buildCarousel = ({
    sectionId, slideSel, slidesWrap,
    prev, next, dotsHost,
    activeClass, dotClass,
    autoMs = 6000, lockMs = 750
}) => {
    const slides = [...document.querySelectorAll(slideSel)];
    if (!slides.length) return null;
    const prevBtn = document.getElementById(prev);
    const nextBtn = document.getElementById(next);
    const dotsEl  = dotsHost ? document.getElementById(dotsHost) : null;

    const N = slides.length;
    let current = 0;
    let locked  = false;

    const dots = dotsEl ? slides.map((_, i) => {
        const d = document.createElement('button');
        d.className = dotClass + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', `Slide ${i + 1}`);
        d.addEventListener('click', () => { goTo(i); reset(); });
        dotsEl.appendChild(d);
        return d;
    }) : [];

    const updateDots = () => dots.forEach((d, i) => d.classList.toggle('active', i === current));

    const goTo = (nextIdx) => {
        if (locked || nextIdx === current) return;
        locked = true;
        const prevIdx = current;
        current = ((nextIdx % N) + N) % N;
        slides[prevIdx].classList.remove(activeClass);
        slides[current].classList.add(activeClass);
        updateDots();
        setTimeout(() => { locked = false; }, lockMs);
    };

    /** Reset instantly to slide 0 (no transition lock) — used when section enters viewport */
    const resetToFirst = () => {
        if (current === 0) { reset(); return; }
        slides.forEach((s, i) => s.classList.toggle(activeClass, i === 0));
        current = 0;
        updateDots();
        reset();
    };

    prevBtn?.addEventListener('click', () => { goTo(current - 1); reset(); });
    nextBtn?.addEventListener('click', () => { goTo(current + 1); reset(); });

    // Touch swipe
    let tx = 0;
    const container = document.querySelector(slidesWrap);
    container?.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    container?.addEventListener('touchend',   e => {
        const dx = tx - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 50) {
            e.stopPropagation();
            dx > 0 ? goTo(current + 1) : goTo(current - 1);
        }
    });

    // Keyboard arrows — only when section is in view
    document.addEventListener('keydown', e => {
        const sec = document.getElementById(sectionId);
        if (!sec) return;
        const r = sec.getBoundingClientRect();
        if (r.top > 50 || r.bottom < window.innerHeight - 50) return;
        if (e.key === 'ArrowRight') goTo(current + 1);
        if (e.key === 'ArrowLeft')  goTo(current - 1);
    });

    // Auto-advance
    let timer = autoMs ? setInterval(() => goTo(current + 1), autoMs) : null;
    function reset() {
        if (!autoMs) return;
        clearInterval(timer);
        timer = setInterval(() => goTo(current + 1), autoMs);
    }

    // Auto-reset to slide 0 whenever the section enters the viewport
    const sec = document.getElementById(sectionId);
    if (sec && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting && e.intersectionRatio > 0.6) resetToFirst(); });
        }, { threshold: [0, 0.6, 1] });
        io.observe(sec);
    }

    return { goTo, resetToFirst };
};

/* ── §5 MONDE ── */
const setupZones = () => buildCarousel({
    sectionId:   'monde',
    slideSel:    '.zs-slide',
    slidesWrap:  '.zs-slides',
    prev:        'zonePrev',
    next:        'zoneNext',
    dotsHost:    'zonesDots',
    activeClass: 'zs-active',
    dotClass:    'zs-dot'
});

/* ── §2 GAMEPLAY ── */
const setupGameplay = () => buildCarousel({
    sectionId:   'gameplay',
    slideSel:    '.gp-slide',
    slidesWrap:  '.gp-slides',
    prev:        'gpPrev',
    next:        'gpNext',
    dotsHost:    'gpDots',
    activeClass: 'gp-active',
    dotClass:    'gp-dot'
});
