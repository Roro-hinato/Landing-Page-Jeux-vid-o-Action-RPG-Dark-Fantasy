/* ═══════════════════════════════════════════════
   UI — navbar, hamburger, modal, form, citadelle, mobile touch
═══════════════════════════════════════════════ */
'use strict';

const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ── NAVBAR scroll state ── */
const setupNavbar = () => {
    const nav = $('#navbar');
    window.addEventListener('scroll', () => {
        nav?.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
};

/* ── HAMBURGER + mobile menu ── */
const setupHamburger = () => {
    const btn  = $('#hamburger');
    const menu = $('#mobileMenu');
    const cls  = $('#mobileClose');
    if (!btn || !menu) return;
    const toggle = () => { menu.classList.toggle('open'); btn.classList.toggle('open'); };
    btn.addEventListener('click', toggle);
    cls?.addEventListener('click', toggle);
    $$('.mob-a').forEach(a => a.addEventListener('click', toggle));
};

/* ── DISCLAIMER MODAL — opened by all platform/store buttons ── */
const setupModal = () => {
    const modal = $('#disclaimerModal');
    if (!modal) return;
    const open  = () => modal.classList.remove('hidden');
    const close = () => modal.classList.add('hidden');

    $$('.modal-trigger').forEach(btn => btn.addEventListener('click', open));
    $('#modalClose')?.addEventListener('click', close);
    $('#modalOk')?.addEventListener('click',    close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
};

/* ── SIGNUP FORM ── */
const setupForm = () => {
    const form    = $('#ctaForm');
    const success = $('#formSuccess');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!$('#emailInput').value.trim()) return;
        form.style.display = 'none';
        success?.classList.remove('hidden');
    });
};

/* ── CITADELLE — boutons à gauche, click = crossfade BG + swap contenu ── */
const setupCitadelleButtons = () => {
    if (typeof CITADELLE === 'undefined') return;
    const btns    = $$('.cit-btn');
    const details = $('#citDetails');
    const layerA  = $('.cit-bg-a');
    const layerB  = $('.cit-bg-b');
    if (!btns.length || !details || !layerA || !layerB) return;

    // Preload all citadelle images for snappy crossfades
    CITADELLE.forEach(c => { const img = new Image(); img.src = c.img; });

    // Initialize layer A to match the first button's image
    layerA.style.backgroundImage = `url('${CITADELLE[0].img}')`;
    let frontIsA = true;       // which layer is currently visible
    let currentIdx = 0;

    const activate = (idx) => {
        if (idx === currentIdx) return;
        const data = CITADELLE[idx];
        if (!data) return;
        currentIdx = idx;

        // 1. Toggle button active class
        btns.forEach((b, i) => b.classList.toggle('active', i === idx));

        // 2. Fade-out details, set new image on BACK layer
        details.classList.add('fading');
        const front = frontIsA ? layerA : layerB;
        const back  = frontIsA ? layerB : layerA;
        back.style.backgroundImage = `url('${data.img}')`;

        // 3. Crossfade: back fades in, front fades out
        requestAnimationFrame(() => {
            back.style.opacity  = '1';
            front.style.opacity = '0';
        });
        frontIsA = !frontIsA;

        // 4. Swap details text after the details fade-out completes
        setTimeout(() => {
            details.innerHTML = `
                <h3>${data.name}</h3>
                <div class="orn-rule"></div>
                <p>${data.text}</p>
            `;
            requestAnimationFrame(() => details.classList.remove('fading'));
        }, 320);
    };

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => activate(i));
        btn.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(i); }
        });
    });
};

/* ── INFO MODALS (Confidentialité / Conditions / Contact) ── */
const setupInfoModals = () => {
    const modals = $$('.info-modal');
    $$('.info-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const id = trigger.dataset.target;
            document.getElementById(id)?.classList.remove('hidden');
        });
    });
    modals.forEach(m => {
        m.querySelector('.modal-close')?.addEventListener('click', () => m.classList.add('hidden'));
        m.querySelector('.modal-btn')?.addEventListener('click',   () => m.classList.add('hidden'));
        m.addEventListener('click', e => { if (e.target === m) m.classList.add('hidden'); });
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') modals.forEach(m => m.classList.add('hidden'));
    });
};

/* ── MOBILE TOUCH — tap = hover pour les cartes. Sur mobile, la carte tapée passe
   en .touch-active ; taper ailleurs ferme toutes les cartes actives. ── */
const setupMobileTouch = () => {
    if (!window.matchMedia('(pointer: coarse)').matches) return;
    const sel = '.char-card, .bonus-card';

    document.addEventListener('touchstart', e => {
        const card = e.target.closest(sel);
        if (card) {
            // Tap sur une carte : on toggle son état, on ferme les autres
            const wasActive = card.classList.contains('touch-active');
            const parent = card.closest('.char-showcase, .bonus-grid');
            parent?.querySelectorAll(sel).forEach(c => c.classList.remove('touch-active'));
            if (!wasActive) card.classList.add('touch-active');
        } else {
            // Tap ailleurs : on ferme toutes les cartes actives
            $$('.touch-active').forEach(c => c.classList.remove('touch-active'));
        }
    }, { passive: true });
};
