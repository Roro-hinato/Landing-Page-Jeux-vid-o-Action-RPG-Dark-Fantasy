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

/* ── PLATEFORMES — PS5, Xbox, Steam uniquement ── */
const PLATFORMS = [
    { id: 'btnPS5',     label: 'PS5 / PS4',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(255, 212, 59)" d="M603 436.3C591.7 450.5 564.2 460.6 564.2 460.6L359.1 534.2L359.1 479.9L510 426.1C527.1 420 529.8 411.3 515.8 406.7C501.9 402.1 476.7 403.4 459.6 409.6L359.1 445.1L359.1 388.7C382.3 380.9 406.2 375.1 434.8 371.9C475.7 367.4 525.7 372.5 565 387.4C609.2 401.4 614.2 422.1 603 436.3zM378.6 343.8L378.6 204.8C378.6 188.5 375.6 173.5 360.3 169.2C348.6 165.4 341.3 176.3 341.3 192.6L341.3 540.5L247.5 510.7L247.5 96C287.4 103.4 345.5 120.9 376.7 131.4C456.2 158.7 483.1 192.7 483.1 269.2C483.1 343.7 437.1 372 378.6 343.8zM75.3 474.2C29.9 461.4 22.3 434.7 43 419.4C62.1 405.2 94.7 394.5 94.7 394.5L229.2 346.7L229.2 401.2L132.4 435.8C115.3 441.9 112.7 450.6 126.6 455.2C140.5 459.8 165.7 458.5 182.8 452.3L229.2 435.4L229.2 484.2C177.6 493.5 127.8 491.5 75.3 474.2z"/></svg>' },
    { id: 'btnXbox',    label: 'Xbox',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(255, 212, 59)" d="M433.9 382.2C478.2 436.5 498.6 481 488.3 500.9C480.4 516 431.6 545.5 395.7 556.8C366.1 566.1 327.3 570.1 295.3 567C257.1 563.3 218.4 549.6 185.2 528C157.3 509.8 151 502.3 151 487.4C151 457.5 183.9 405.1 240.2 345.3C272.2 311.4 316.7 271.6 321.6 272.7C331 274.8 405.9 347.8 433.9 382.2zM252.6 207.8C222.9 180.9 194.5 153.9 166.2 144.4C151 139.3 149.9 139.6 137.5 152.5C108.3 182.9 84 232.2 77.2 274.9C71.8 309.1 71.1 318.7 73 335.4C78.6 385.9 90.3 420.8 113.5 456.3C123 470.9 125.6 473.6 122.8 466.2C118.6 455.2 122.5 428.7 132.3 402.2C146.6 363.2 186.2 289.3 252.6 207.8zM564.2 271.3C547.3 191.3 496.7 141 489.6 141C482.3 141 465.4 147.5 453.6 154.9C430.3 169.4 412.6 186.3 389.3 207.7C431.7 261 491.5 347.1 512.2 410C519 430.7 521.9 451.1 519.6 462.3C517.9 470.8 517.9 470.8 521 466.9C527.1 459.2 540.9 435.6 546.4 423.4C553.8 407.2 561.4 383.2 565 364.7C569.3 342.2 568.9 293.9 564.2 271.3zM205.3 107C253 104.5 315 141.5 319.6 142.4C320.3 142.5 330 138.2 341.2 132.7C405.1 101.6 435.2 106.9 448.6 107.5C384.7 68.2 295.9 57.5 214.7 95.8C191.3 106.9 190.7 107.7 205.3 107z"/></svg>' },
    { id: 'btnSteam',   label: 'Steam',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(255, 212, 59)" d="M568 320C568 457 456.8 568 319.6 568C205.8 568 110 491.7 80.6 387.6L175.8 426.9C182.2 459 210.7 483.3 244.7 483.3C283.9 483.3 316.6 450.9 314.9 409.8L399.4 349.6C451.5 350.9 495.2 308.7 495.2 256.1C495.2 204.5 453.2 162.6 401.5 162.6C349.8 162.6 307.8 204.6 307.8 256.1L307.8 257.3L248.6 343C233.1 342.1 217.9 346.4 205.1 355.1L72 300.1C82.2 172.4 189.1 72 319.6 72C456.8 72 568 183 568 320zM227.7 448.3L197.2 435.7C202.8 447.3 212.5 456.5 224.4 461.5C251.3 472.7 282.2 459.9 293.4 433.1C298.8 420.1 298.9 405.8 293.5 392.8C288.1 379.8 278 369.6 265 364.2C252.1 358.8 238.3 359 226.1 363.6L257.6 376.6C277.4 384.8 286.8 407.5 278.5 427.3C270.2 447.2 247.5 456.5 227.7 448.3zM401.5 193.8C435.9 193.8 463.8 221.7 463.8 256.1C463.8 290.5 435.9 318.4 401.5 318.4C367.1 318.4 339.2 290.5 339.2 256.1C339.2 221.7 367.1 193.8 401.5 193.8zM401.6 302.8C427.4 302.8 448.4 281.8 448.4 256C448.4 230.2 427.4 209.2 401.6 209.2C375.8 209.2 354.8 230.2 354.8 256C354.8 281.8 375.8 302.8 401.6 302.8z"/></svg>' }
];
