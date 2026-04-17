/* ═══════════════════════════════════════════════
   DATA — toutes les données répétitives du site
   Modifier ici pour changer le contenu sans toucher au HTML
═══════════════════════════════════════════════ */
'use strict';

/* ── §3 COMPAGNONS ── */
const COMPANIONS = [
    {
        cls: 'Archère des Cendres', name: 'Seraphel',
        img: 'images/companions/Seraphel.webp',
        quote: 'Je n\'ai plus de dieu à servir.<br>Seulement des cibles à abattre.',
        bars: [['Précision', 92], ['Furtivité', 78], ['Endurance', 55]],
        tags: ['Distance', 'Éclaireur'],
        featured: false
    },
    {
        cls: 'Paladin Brisé', name: 'Yrdan l\'Exilé',
        img: 'images/companions/yrdan.webp',
        quote: 'L\'honneur est un luxe que<br>les morts ne peuvent s\'offrir.',
        bars: [['Défense', 96], ['Force', 84], ['Magie', 30]],
        tags: ['Tank', 'Soutien']
    },
    {
        cls: 'Tisseuse d\'Ombres', name: 'Vael',
        img: 'images/companions/vael.webp',
        quote: 'Le vide entre les ombres est<br>l\'endroit le plus sûr qui soit.',
        bars: [['Magie', 98], ['Infiltration', 88], ['Résistance', 42]],
        tags: ['Magie noire', 'Illusion'],
        featured: true
    },
    {
        cls: 'Guerrier d\'Acier', name: 'Dorn le Forgé',
        img: 'images/companions/dorn.webp',
        quote: 'On ne survit pas à quarante<br>batailles par hasard.',
        bars: [['Force', 99], ['Forge', 75], ['Vitesse', 48]],
        tags: ['Corps à corps', 'Forgeron']
    },
    {
        cls: 'Mage de l\'Éveil', name: 'Emrys le Vieux',
        img: 'images/companions/emrys.webp',
        quote: 'J\'ai vu la fin du monde.<br>Deux fois. C\'était prévisible.',
        bars: [['Arcane', 100], ['Alchimie', 90], ['Combat', 18]],
        tags: ['Arcane', 'Alchimie']
    }
];

/* ── §4 CITADELLE — 4 bâtiments (boutons à gauche, details à droite au click) ── */
const CITADELLE = [
    { name: 'Salle d\'Entraînement',
      img: 'images/citadelle/entrainement.webp',
      text: 'Améliorer votre personnage en construisant la Zone d\'Entraînement. Entrainer vos compagnons et peut être aurait vous une chance de térasser les Dragons!' },
    { name: 'Atelier d\'Alchimie',
      img: 'images/citadelle/alchimie.webp',
      text: 'Construiser l\'Atelier d\'Alchimie pour pouvoir confectionner de puissant élixir magique qui vous seront bien utiles en combat! Potions de soin, poisons mortel, vous avez le choix!' },
    { name: 'Forge Draconique',
      img: 'images/citadelle/forge.webp',
      text: 'Grâce à la Forge Draconique, forger de puissants équipements en écailles de Dragons! Armures, Epées, Arcs... Equiper vous comme vous le souhaiter!' },
    { name: 'Bibliothèque des Anciens',
      img: 'images/citadelle/bibliotheque.webp',
      text: 'La Bibliothèque des Anciens regorge de secret! Anciens parchemins magiques, vieux livres antiques! Vous en apprendrez plus sur l\'histoire de Dragonia et du reveil des Dragons!' }
];

/* ── §2 GAMEPLAY — 4 systèmes de jeu (carrousel) ── */
const GAMEPLAY = [
    { name: 'Monde Ouvert Sans Limites',
      img: 'images/gameplay/mondeouvert.webp',
      desc: 'Des Plaines de Cendre aux sommets glacés des Pics de l\'Aube — explorez un continent entier sans chargement, sans frontière invisible. Chaque recoin cache un secret, chaque ruine une histoire.',
      tags: ['Exploration', 'Liberté', 'Découverte'] },
    { name: 'Combat Impitoyable',
      img: 'images/gameplay/combat.webp',
      desc: 'Acier, magie et essence draconique — maîtrisez trois piliers du combat. Chaque boss est colossal aux mécaniques uniques. Aucune grâce accordée aux imprudents.',
      tags: ['Action', 'Stratégie', 'Boss Fights'] },
    { name: 'Âmes & Chroniques',
      img: 'images/gameplay/pnj.webp',
      desc: 'Chaque PNJ porte un destin tragique. Vos choix de dialogue modifient le monde de manière irrémédiable — une rancune mal gérée peut fermer une quête pour toujours. 200+ objectifs vous attendent.',
      tags: ['Narration', 'Choix moral', 'Conséquences'] },
    { name: 'Éveil Draconique',
      img: 'images/gameplay/dragons.webp',
      desc: 'Absorbez l\'essence des dragons vaincus. Débloquez des pouvoirs interdits qui redéfinissent votre style — flammes primordiales, téléportation d\'ombre, armure de cristal. Votre éveil est unique.',
      tags: ['Progression', 'Pouvoirs', 'Personnalisation'] }
];

/* ── §5 MONDE — 8 zones du carrousel ── */
const ZONES = [
    { badge: 'Zone de départ', name: 'Plaines de Cendre',
      img: 'images/zones/plaine.webp',
      desc: 'Les terres calcinées où votre légende prend naissance. Des ruines de villages jonchent des plaines sans fin, balayées par des vents chargés de cendres. C\'est ici que tout commence.' },
    { badge: 'Zone mystique', name: 'Forêt des Murmures',
      img: 'images/zones/foret.webp',
      desc: 'Une forêt vivante et consciente. Ses arbres millénaires murmurent des secrets aux imprudents. Des créatures d\'ombre y ont élu domicile depuis le Grand Murmure.' },
    { badge: 'Haute altitude', name: 'Pics de l\'Aube',
      img: 'images/zones/pic.webp',
      desc: 'Là où les dieux ont jadis posé leurs pieds. Les cimes enneigées abritent des sanctuaires anciens gardés par des colosses de pierre que rien ne peut arrêter.' },
    { badge: 'Littoral maudit', name: 'Côte des Naufragés',
      img: 'images/zones/rivage.webp',
      desc: 'Mille naufrages hantent ces rivages. Les vagues charrient des reliques d\'empires engloutis. Pirates fantômes et bêtes des abysses se disputent ces terres maudites.' },
    { badge: 'Souterrain maudit', name: 'Cryptes de Valdûr',
      img: 'images/zones/crypte.webp',
      desc: 'Un labyrinthe de cryptes qui s\'étend sous tout le continent. Des armées entières y ont été englouties. Des rois oubliés y règnent encore sur leurs légions d\'ossements animés.' },
    { badge: 'Zone volcanique', name: 'Gouffre de Braise',
      img: 'images/zones/gouffre.webp',
      desc: 'Là où les dragons primordiaux ont été pétrifiés, la terre saigne encore du feu. Des gardiens en fusion protègent les secrets les plus anciens de Dragonia.' },
    { badge: 'Grand Nord',       name: 'Toundra Éternelle',
      img: 'images/zones/permafrost.webp',
      desc: 'Un désert de glace où le temps semble figé. Les tribus de chasseurs y survivent avec des esprits anciens. Des ossements de créatures gigantesques affleurent du permafrost.' },
    { badge: 'Ciel de cendres', name: 'Cité Suspendue',
      img: 'images/zones/citesuspendue.webp',
      desc: 'Une cité flottant entre les nuages, tenue par une magie que personne ne comprend plus. Le cœur du mystère de Dragonia s\'y trouve — et le dragon le plus ancien y dort.' }
];

/* ── §6 BONUS — 4 récompenses early access ── */
const BONUSES = [
    { cat: 'Cosmétique',         name: 'Armure du Brise-Chaîne',
      img: 'images/bonuses/armure.webp',
      desc: 'Forgée à partir d\'écailles de Dragons. Commencer votre aventure avec un équipement de départ unique!.' },
    { cat: 'Accès prioritaire',  name: 'Early Access',
      img: 'images/bonuses/accesanticipe.webp',
      desc: 'Accés anticipé de 2 semaines avant la sortie officielle!',
      featured: true, ribbon: 'EXCLUSIF' },
    { cat: 'Monture',            name: 'Dragon de Cendre',
      img: 'images/bonuses/dragon.webp',
      desc: 'Né des braises du Grand Murmure. Il ne reconnaît qu\'un maître — celui qui a scellé le Pacte.' },
    { cat: 'Familier',           name: 'Bébé Dragon Rouge',
      img: 'images/bonuses/bebedragon.webp',
      desc: 'Sorti de l\'œuf des Pics de l\'Aube. Petit, mais porteur d\'un destin de flammes et de gloire.' }
];

/* ── PLATEFORMES — tous en SVG inline (zéro requête CDN externe) ── */
const PLATFORMS = [
    { id: 'btnApple',   label: 'App Store',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>' },
    { id: 'btnAndroid', label: 'Google Play',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.61.41L15.09 7l-2.92 2.93L3.08 .81C3.2.54 3.38.41 3.61.41zm-.53.66v21.86l9.03-9.03L3.08 4.87v-3.8zM20.58 10.35l-3.55-2.02L13.96 11.4l3.07 3.07 3.55-2.02c.56-.32.56-1.17 0-2.1zM3.08 23.19c.13.27.31.4.53.4L15.09 17l-2.92-2.93L3.08 23.19z"/></svg>' },
    { sep: true },
    { id: 'btnPS5',     label: 'PS5 / PS4',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 3.5v13.7l4.5 1.4V6.2c0-1.3-.4-2.5-2.1-3C10.5 2.8 9.5 3 9.5 3v.5zm8.2 11.4c-1.2.8-3.5 1.3-3.5 1.3v3l5.5-2c.6-.3.8-.6.5-.9-.3-.3-1.3-.8-2.5-.4zm-14.4 2c-.8.5-.6 1.2.6 1.5 1.4.4 2.9.2 4.3-.3l.3-.1v-2.8l-2 .7c-.8.3-2.2.6-3.2 1z"/></svg>' },
    { id: 'btnXbox',    label: 'Xbox',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.1 14.5l-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.1 2.1 2.1 2.1-1.4 1.4-2.1-2.1-2.1 2.1z"/></svg>' },
    { id: 'btnSteam',   label: 'Steam',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49l3.32-4.78c-.03 0-.05-.01-.08-.01-1.39 0-2.52-1.13-2.52-2.52s1.13-2.52 2.52-2.52 2.52 1.13 2.52 2.52c0 .49-.14.94-.38 1.33L18.14 12H22c0-5.52-4.48-10-10-10zm3.5 10c-1.38 0-2.5-1.12-2.5-2.5S14.12 7 15.5 7 18 8.12 18 9.5 16.88 12 15.5 12z"/></svg>' },
    { id: 'btnWin',     label: 'Windows',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5L10.5 4.5V11.5H3M11.5 4.5L21 3V11.5H11.5M3 12.5H10.5V19.5L3 18.5M11.5 12.5H21V21L11.5 19.5"/></svg>' },
    { id: 'btnMac',     label: 'Mac',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>' }
];
