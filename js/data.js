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
      text: 'Des guerriers trempés dans l\'acier et la douleur. Chaque amélioration forge des combattants capables d\'affronter les horreurs qui rôdent au-delà des murs.' },
    { name: 'Atelier d\'Alchimie',
      img: 'images/citadelle/alchimie.webp',
      text: 'Distillats de venin draconique, élixirs de régénération, poisons qui corrompent l\'âme. L\'alchimie est l\'arme silencieuse qui renverse les batailles impossibles.' },
    { name: 'Forge Draconique',
      img: 'images/citadelle/forge.webp',
      text: 'Dans les flammes de l\'essence draconique, le métal ordinaire devient légende. Chaque arme forgée ici porte en elle un fragment de l\'âme d\'un dragon vaincu.' },
    { name: 'Bibliothèque des Anciens',
      img: 'images/citadelle/bibliotheque.webp',
      text: 'Des parchemins maudits. Des rituels oubliés. Des prophéties que les dieux ont voulu effacer. Chaque page déchiffrée vous rapproche de la vérité — ou de la folie.' }
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
      desc: 'Là où les dragons primordiaux ont été pétrifiés, la terre saigne encore du feu. Des gardiens en fusion protègent les secrets les plus anciens de Valdrakhar.' },
    { badge: 'Grand Nord',       name: 'Toundra Éternelle',
      img: 'images/zones/permafrost.webp',
      desc: 'Un désert de glace où le temps semble figé. Les tribus de chasseurs y survivent avec des esprits anciens. Des ossements de créatures gigantesques affleurent du permafrost.' },
    { badge: 'Zone finale', name: 'Cité Suspendue',
      img: 'images/zones/citesuspendue.webp',
      desc: 'Une cité flottant entre les nuages, tenue par une magie que personne ne comprend plus. Le cœur du mystère de Valdrakhar s\'y trouve — et le dragon le plus ancien y dort.' }
];

/* ── §6 BONUS — 4 récompenses early access ── */
const BONUSES = [
    { cat: 'Cosmétique',         name: 'Armure du Brise-Chaîne',
      img: 'images/bonuses/armure.webp',
      desc: 'Forgée dans les cendres draconiques. Jamais vendue, jamais reproduite après la sortie officielle.' },
    { cat: 'Accès prioritaire',  name: 'Early Access — 14 jours',
      img: 'images/bonuses/accesanticipe.webp',
      desc: 'Jouez 14 jours avant tout le monde. Votre légende s\'écrit avant la leur. Irréversible.',
      featured: true, ribbon: 'EXCLUSIF' },
    { cat: 'Monture',            name: 'Dragon de Cendre',
      img: 'images/bonuses/dragon.webp',
      desc: 'Né des braises du Grand Murmure. Il ne reconnaît qu\'un maître — celui qui a scellé le Pacte.' },
    { cat: 'Familier',           name: 'Bébé Dragon Rouge',
      img: 'images/bonuses/bebedragon.webp',
      desc: 'Sorti de l\'œuf des Pics de l\'Aube. Petit, mais porteur d\'un destin de flammes et de gloire.' }
];

/* ── PLATEFORMES — logos officiels (Simple Icons CDN) + SVG inline pour Xbox/Windows
       (Microsoft a fait retirer ses marques de Simple Icons en 2024) ── */
const PLATFORMS = [
    { id: 'btnApple',   label: 'App Store',    logo: 'https://cdn.simpleicons.org/appstore/c8bdb0' },
    { id: 'btnAndroid', label: 'Google Play',  logo: 'https://cdn.simpleicons.org/googleplay/c8bdb0' },
    { sep: true },
    { id: 'btnPS5',     label: 'PS5 / PS4',    logo: 'https://cdn.simpleicons.org/playstation/c8bdb0' },
    { id: 'btnXbox',    label: 'Xbox',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.1 14.5l-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.1 2.1 2.1 2.1-1.4 1.4-2.1-2.1-2.1 2.1z"/></svg>' },
    { id: 'btnSteam',   label: 'Steam',        logo: 'https://cdn.simpleicons.org/steam/c8bdb0' },
    { id: 'btnWin',     label: 'Windows',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5.5L10.5 4.5V11.5H3M11.5 4.5L21 3V11.5H11.5M3 12.5H10.5V19.5L3 18.5M11.5 12.5H21V21L11.5 19.5"/></svg>' },
    { id: 'btnMac',     label: 'Mac',          logo: 'https://cdn.simpleicons.org/apple/c8bdb0' }
];
