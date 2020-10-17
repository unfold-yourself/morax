export const MASTERY = Object.freeze({
  FREEDOM: Symbol('freedom'),
  PROSPERITY: Symbol('prosperity'),
  RESISTANCE: Symbol('resistance'),
  DILIGENCE: Symbol('diligence'),
  BALLAD: Symbol('ballad'),
  GOLD: Symbol('gold'),
});

export const masteryInfo = Object.freeze({
  [MASTERY.FREEDOM]: {
    displayName: 'Book of "Freedom"',
    imageSrc: 'images/materials/mastery/teachings_of_freedom.png',
    types: [
      {
        displayName: 'Teachings of "Freedom"',
        imageSrc: 'images/materials/mastery/teachings_of_freedom.png',
        rarity: 2,
      },
      {
        displayName: 'Guide to "Freedom"',
        imageSrc: 'images/materials/mastery/guide_to_freedom.png',
        rarity: 3,
      },
      {
        displayName: 'Philosophies of "Freedom"',
        imageSrc: 'images/materials/mastery/philosophies_of_freedom.png',
        rarity: 4,
      }
    ],
  },
  [MASTERY.PROSPERITY]: {
    displayName: 'Book of "Prosperity"',
    imageSrc: 'images/materials/mastery/teachings_of_prosperity.png',
    types: [
      {
        displayName: 'Teachings of "Prosperity"',
        imageSrc: 'images/materials/mastery/teachings_of_prosperity.png',
        rarity: 2,
      },
      {
        displayName: 'Guide to "Prosperity"',
        imageSrc: 'images/materials/mastery/guide_to_prosperity.png',
        rarity: 3,
      },
      {
        displayName: 'Philosophies of "Prosperity"',
        imageSrc: 'images/materials/mastery/philosophies_of_prosperity.png',
        rarity: 4,
      }
    ],
  },
  [MASTERY.RESISTANCE]: {
    displayName: 'Book of "Resistance"',
    imageSrc: 'images/materials/mastery/teachings_of_resistance.png',
    types: [
      {
        displayName: 'Teachings of "Resistance"',
        imageSrc: 'images/materials/mastery/teachings_of_resistance.png',
        rarity: 2,
      },
      {
        displayName: 'Guide to "Resistance"',
        imageSrc: 'images/materials/mastery/guide_to_resistance.png',
        rarity: 3,
      },
      {
        displayName: 'Philosophies of "Resistance"',
        imageSrc: 'images/materials/mastery/philosophies_of_resistance.png',
        rarity: 4,
      }
    ],
  },
  [MASTERY.DILIGENCE]: {
    displayName: 'Book of "Diligence"',
    imageSrc: 'images/materials/mastery/teachings_of_diligence.png',
    types: [
      {
        displayName: 'Teachings of "Diligence"',
        imageSrc: 'images/materials/mastery/teachings_of_diligence.png',
        rarity: 2,
      },
      {
        displayName: 'Guide to "Diligence"',
        imageSrc: 'images/materials/mastery/guide_to_diligence.png',
        rarity: 3,
      },
      {
        displayName: 'Philosophies of "Diligence"',
        imageSrc: 'images/materials/mastery/philosophies_of_diligence.png',
        rarity: 4,
      }
    ],
  },
  [MASTERY.BALLAD]: {
    displayName: 'Book of "Ballad"',
    imageSrc: 'images/materials/mastery/teachings_of_ballad.png',
    types: [
      {
        displayName: 'Teachings of "Ballad"',
        imageSrc: 'images/materials/mastery/teachings_of_ballad.png',
        rarity: 2,
      },
      {
        displayName: 'Guide to "Ballad"',
        imageSrc: 'images/materials/mastery/guide_to_ballad.png',
        rarity: 3,
      },
      {
        displayName: 'Philosophies of "Ballad"',
        imageSrc: 'images/materials/mastery/philosophies_of_ballad.png',
        rarity: 4,
      }
    ],
  },
  [MASTERY.GOLD]: {
    displayName: 'Book of "Gold"',
    imageSrc: 'images/materials/mastery/teachings_of_gold.png',
    types: [
      {
        displayName: 'Teachings of "Gold"',
        imageSrc: 'images/materials/mastery/teachings_of_gold.png',
        rarity: 2,
      },
      {
        displayName: 'Guide to "Gold"',
        imageSrc: 'images/materials/mastery/guide_to_gold.png',
        rarity: 3,
      },
      {
        displayName: 'Philosophies of "Gold"',
        imageSrc: 'images/materials/mastery/philosophies_of_gold.png',
        rarity: 4,
      }
    ],
  }
});
