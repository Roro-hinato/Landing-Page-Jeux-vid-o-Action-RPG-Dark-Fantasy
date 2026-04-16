/* ═══════════════════════════════════════════════
   RENDER — génère les sections répétitives depuis data.js
═══════════════════════════════════════════════ */
'use strict';

/* ── Helpers ── */
const html = (strings, ...values) => strings.reduce((acc, s, i) => acc + s + (values[i] ?? ''), '');
const mount = (selector, markup) => { const el = document.querySelector(selector); if (el) el.innerHTML = markup; };

/* ── §3 COMPAGNONS ── */
const renderCompanions = () => {
    const markup = COMPANIONS.map((c, i) => html`
        <div class="char-card${c.featured ? ' char-featured' : ''}" data-char="${i}">
            <div class="char-bg" style="background-image:url('${c.img}')"></div>
            <div class="char-glow"></div>
            <div class="char-base">
                <div class="char-class">${c.cls}</div>
                <h3>${c.name}</h3>
            </div>
            <div class="char-panel">
                <p class="char-quote">${c.quote}</p>
                <div class="char-bars">
                    ${c.bars.map(([label, val]) => `
                    <div class="char-bar">
                        <span>${label}</span>
                        <div class="bar-track"><div class="bar-fill" style="--p:${val}"></div></div>
                        <span class="bar-val">${val}</span>
                    </div>`).join('')}
                </div>
                <div class="char-tags">${c.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
        </div>
    `).join('');
    mount('#charShowcase', markup);
};

/* ── §4 CITADELLE — boutons à gauche, contenu initial à droite ── */
const renderCitadelle = () => {
    // Liste de boutons (gauche)
    const btnMarkup = CITADELLE.map((c, i) => html`
        <button class="cit-btn${i === 0 ? ' active' : ''}" data-cit="${i}">${c.name}</button>
    `).join('');
    mount('#citButtons', btnMarkup);

    // Panneau details (droite) — initialement le premier bâtiment
    const first = CITADELLE[0];
    mount('#citDetails', html`
        <h3>${first.name}</h3>
        <div class="orn-rule"></div>
        <p>${first.text}</p>
    `);
};

/* ── §2 GAMEPLAY — slides du carrousel ── */
const renderGameplay = () => {
    const markup = GAMEPLAY.map((g, i) => html`
        <div class="gp-slide${i === 0 ? ' gp-active' : ''}">
            <div class="gp-slide-bg" style="background-image:url('${g.img}')"></div>
            <div class="gp-slide-overlay"></div>
            <div class="gp-slide-content">
                <h3 class="gp-slide-title">${g.name}</h3>
                <p class="gp-slide-desc">${g.desc}</p>
                <div class="gp-slide-tags">${g.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
        </div>
    `).join('');
    mount('#gpSlides', markup);
};

/* ── §5 MONDE — slides ── */
const renderZones = () => {
    const markup = ZONES.map((z, i) => html`
        <div class="zs-slide${i === 0 ? ' zs-active' : ''}">
            <div class="zs-slide-bg" style="background-image:url('${z.img}')"></div>
            <div class="zs-slide-overlay"></div>
            <div class="zs-slide-content">
                <div class="zs-slide-badge">${z.badge}</div>
                <h3 class="zs-slide-title">${z.name}</h3>
                <p class="zs-slide-desc">${z.desc}</p>
            </div>
        </div>
    `).join('');
    mount('#zonesSlides', markup);
};

/* ── §6 BONUS — cartes horizontales (image gauche, infos droite) ── */
const renderBonuses = () => {
    const markup = BONUSES.map(b => html`
        <div class="bonus-card${b.featured ? ' bonus-featured' : ''}">
            ${b.ribbon ? `<div class="bonus-ribbon">${b.ribbon}</div>` : ''}
            <div class="bonus-thumb" style="background-image:url('${b.img}')"></div>
            <div class="bonus-info">
                <span class="bonus-cat">${b.cat}</span>
                <strong class="bonus-name">${b.name}</strong>
                <p class="bonus-desc">${b.desc}</p>
            </div>
        </div>
    `).join('');
    mount('#bonusGrid', markup);
};

/* ── PLATEFORMES — utilise soit <img> (logo URL) soit SVG inline (fallback) ── */
const renderPlatforms = () => {
    const markup = PLATFORMS.map(p => {
        if (p.sep) return `<div class="plat-sep"></div>`;
        const graphic = p.logo
            ? `<img src="${p.logo}" alt="${p.label} logo" loading="lazy">`
            : p.svg;
        return html`
            <button class="plat-ico-btn modal-trigger" id="${p.id}" title="${p.label}">
                ${graphic}
                <span>${p.label}</span>
            </button>`;
    }).join('');
    mount('#platIcons', markup);
};

/* ── INIT ── */
const renderAll = () => {
    renderGameplay();
    renderCompanions();
    renderCitadelle();
    renderZones();
    renderBonuses();
    renderPlatforms();
};
