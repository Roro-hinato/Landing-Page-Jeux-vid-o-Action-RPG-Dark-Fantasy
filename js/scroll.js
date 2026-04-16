/* ═══════════════════════════════════════════════
   SCROLL — section snap engine + reveal animations + live counter
═══════════════════════════════════════════════ */
'use strict';

/* ── REVEAL on scroll ── */
const setupReveal = () => {
    const els = document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal-up');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            el.style.transitionDelay = el.style.getPropertyValue('--d') || '0s';
            el.classList.add('in');
            io.unobserve(el);
        });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
};

/* ── SECTION SNAP — wheel, touch, keyboard ──
   Returns an API { goTo, getCurrent, getTotal, onChange } for other modules
   (like the floating section-nav arrows) to drive the same state. */
const setupSectionScroll = () => {
    const sections = [...document.querySelectorAll('section')];
    let current = 0;
    let locked  = false;
    const LOCK_MS = 900;
    const listeners = [];

    const notify = () => listeners.forEach(fn => fn(current, sections.length));

    const updateActiveLink = () => {
        const secId = sections[current]?.id;
        document.querySelectorAll('#navbar a').forEach(a => {
            const href = a.getAttribute('href')?.replace('#', '');
            a.style.color = href === secId ? 'var(--gold)' : '';
        });
    };

    const insideHScroll = (el) => {
        while (el && el !== document.body) {
            const s = getComputedStyle(el);
            if ((s.overflowX === 'auto' || s.overflowX === 'scroll') && el.scrollWidth > el.clientWidth + 2) return true;
            el = el.parentElement;
        }
        return false;
    };

    const goTo = (idx) => {
        if (locked) return;
        const target = Math.max(0, Math.min(idx, sections.length - 1));
        if (target === current && document.body.scrollTop === sections[target]?.offsetTop) return;
        locked = true;
        current = target;
        sections[current]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        updateActiveLink();
        notify();
        setTimeout(() => { locked = false; }, LOCK_MS);
    };

    // Wheel
    window.addEventListener('wheel', e => {
        if (insideHScroll(e.target)) return;
        e.preventDefault();
        if      (e.deltaY >  30) goTo(current + 1);
        else if (e.deltaY < -30) goTo(current - 1);
    }, { passive: false });

    // Touch
    let ty = 0;
    window.addEventListener('touchstart', e => { ty = e.touches[0].clientY; }, { passive: true });
    window.addEventListener('touchend',   e => {
        if (insideHScroll(e.target)) return;
        const dy = ty - e.changedTouches[0].clientY;
        if      (dy >  55) goTo(current + 1);
        else if (dy < -55) goTo(current - 1);
    }, { passive: true });

    // Keyboard
    window.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(current + 1); }
        if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goTo(current - 1); }
    });

    // Keep current synced on natural scroll (e.g. mobile momentum, anchor jumps)
    window.addEventListener('scroll', () => {
        const mid = window.scrollY + window.innerHeight * 0.4;
        let newCurrent = 0;
        sections.forEach((s, i) => { if (s.offsetTop <= mid) newCurrent = i; });
        if (newCurrent !== current) {
            current = newCurrent;
            updateActiveLink();
            notify();
        }
    }, { passive: true });

    // Nav links
    document.querySelectorAll('#navbar a, .mob-a').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href')?.replace('#', '');
            const idx = sections.findIndex(s => s.id === id);
            if (idx >= 0) { e.preventDefault(); goTo(idx); }
        });
    });

    updateActiveLink();

    // Expose a small API so other modules (floating nav) can observe & control
    return {
        goTo,
        getCurrent: () => current,
        getTotal:   () => sections.length,
        onChange:   (fn) => { listeners.push(fn); fn(current, sections.length); }
    };
};

/* ── FLOATING SECTION NAV — petits boutons ↑ ↓ ⇞ en bas à droite ── */
const setupSectionNav = (api) => {
    if (!api) return;
    const nav = document.getElementById('sectionNav');
    if (!nav) return;
    const btnUp     = nav.querySelector('.sn-up');
    const btnDown   = nav.querySelector('.sn-down');
    const btnTop    = nav.querySelector('.sn-top');

    btnUp?.addEventListener('click',   () => api.goTo(api.getCurrent() - 1));
    btnDown?.addEventListener('click', () => api.goTo(api.getCurrent() + 1));
    btnTop?.addEventListener('click',  () => api.goTo(0));

    // React to section changes: enable/disable up/down, show/hide "back-to-top"
    api.onChange((idx, total) => {
        // idx is 0-based; section #3 = index 2 → show "back to top" from that point
        nav.classList.toggle('sn-show-top', idx >= 2);
        btnUp  && (btnUp.disabled   = idx === 0);
        btnDown && (btnDown.disabled = idx === total - 1);
    });
};

/* ── LIVE COUNTER — animates "guerriers inscrits" number ── */
const setupLiveCounter = () => {
    const el = document.getElementById('counterNum');
    if (!el) return;
    let count = 12847;
    const tick = () => {
        count += Math.floor(Math.random() * 4) + 1;
        el.textContent = count.toLocaleString('fr-FR');
        el.classList.add('bump');
        setTimeout(() => el.classList.remove('bump'), 400);
        setTimeout(tick, 3000 + Math.random() * 5000);
    };
    setTimeout(tick, 4000);
};
