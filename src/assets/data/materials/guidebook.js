export const GUIDEBOOK = Object.freeze({
  FREEDOM: Symbol('freedom'),
  PROSPERITY: Symbol('prosperity'),
  RESISTANCE: Symbol('resistance'),
  DILIGENCE: Symbol('diligence'),
  BALLAD: Symbol('ballad'),
  GOLD: Symbol('gold'),
});

export const guidebookInfo = Object.freeze({
  [GUIDEBOOK.FREEDOM]: {
    displayName: 'Book of Freedom',
    imageSrc: 'images/materials/guidebook_freedom.png',
  },
  [GUIDEBOOK.PROSPERITY]: {
    displayName: 'Book of Prosperity',
    imageSrc: 'images/materials/guidebook_prosperity.png',
  },
  [GUIDEBOOK.RESISTANCE]: {
    displayName: 'Book of Resistance',
    imageSrc: 'images/materials/guidebook_resistance.png',
  },
  [GUIDEBOOK.DILIGENCE]: {
    displayName: 'Book of Diligence',
    imageSrc: 'images/materials/guidebook_diligence.png',
  },
  [GUIDEBOOK.BALLAD]: {
    displayName: 'Book of Ballad',
    imageSrc: 'images/materials/guidebook_ballad.png',
  },
  [GUIDEBOOK.GOLD]: {
    displayName: 'Book of Gold',
    imageSrc: 'images/materials/guidebook_gold.png',
  }
});
