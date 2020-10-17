export const FORGERY = Object.freeze({
  DECARABIAN: Symbol('decarabian'),
  WOLF: Symbol('wolf'),
  GLADIATOR: Symbol('gladiator'),
  GUYUN: Symbol('guyun'),
  ELIXIR: Symbol('elixir'),
  AEROSIDERITE: Symbol('aerosiderite'),
});

export const forgeryInfo = Object.freeze({
  [FORGERY.DECARABIAN]: {
    displayName: 'Decarabian',
    imageSrc: 'images/materials/forgery/tile_of_decarabians_tower.png',
    types: [
      {
        displayName: 'Tile of Decarabian\'s Tower',
        imageSrc: 'images/materials/forgery/tile_of_decarabians_tower.png',
        rarity: 2,
      },
      {
        displayName: 'Debris of Decarabian\'s City',
        imageSrc: 'images/materials/forgery/debris_of_decarabians_city.png',
        rarity: 3,
      },
      {
        displayName: 'Fragment of Decarabian\'s Epic',
        imageSrc: 'images/materials/forgery/fragment_of_decarabians_epic.png',
        rarity: 4,
      },
      {
        displayName: 'Scattered Piece of Decarabian\'s Dream',
        imageSrc: 'images/materials/forgery/scattered_piece_of_decarabians_dream.png',
        rarity: 5,
      }
    ],
  },
  [FORGERY.WOLF]: {
    displayName: 'Boreal Wolf',
    imageSrc: 'images/materials/forgery/boreal_wolfs_milk_tooth.png',
    types: [
      {
        displayName: 'Boreal Wolf\'s Milk Tooth',
        imageSrc: 'images/materials/forgery/boreal_wolfs_milk_tooth.png',
        rarity: 2,
      },
      {
        displayName: 'Boreal Wolf\'s Cracked Tooth',
        imageSrc: 'images/materials/forgery/boreal_wolfs_cracked_tooth.png',
        rarity: 3,
      },
      {
        displayName: 'Boreal Wolf\'s Broken Fang',
        imageSrc: 'images/materials/forgery/boreal_wolfs_broken_fang.png',
        rarity: 4,
      },
      {
        displayName: 'Boreal Wolf\'s Nostalgia',
        imageSrc: 'images/materials/forgery/boreal_wolfs_nostalgia.png',
        rarity: 5,
      }
    ],
  },
  [FORGERY.GLADIATOR]: {
    displayName: 'Dandelion Gladiator',
    imageSrc: 'images/materials/forgery/fetters_of_the_dandelion_gladiator.png',
    types: [
      {
        displayName: 'Fetters of the Dandelion Gladiator',
        imageSrc: 'images/materials/forgery/fetters_of_the_dandelion_gladiator.png',
        rarity: 2,
      },
      {
        displayName: 'Chains of the Dandelion Gladiator',
        imageSrc: 'images/materials/forgery/chains_of_the_dandelion_gladiator.png',
        rarity: 3,
      },
      {
        displayName: 'Shackles of the Dandelion Gladiator',
        imageSrc: 'images/materials/forgery/shackles_of_the_dandelion_gladiator.png',
        rarity: 4,
      },
      {
        displayName: 'Dream of the Dandelion Gladiator',
        imageSrc: 'images/materials/forgery/dream_of_the_dandelion_gladiator.png',
        rarity: 5,
      }
    ],
  },
  [FORGERY.GUYUN]: {
    displayName: 'Guyun',
    imageSrc: 'images/materials/forgery/luminous_sands_from_guyun.png',
    types: [
      {
        displayName: 'Luminous Sands from Guyun',
        imageSrc: 'images/materials/forgery/luminous_sands_from_guyun.png',
        rarity: 2,
      },
      {
        displayName: 'Lustrous Stone from Guyun',
        imageSrc: 'images/materials/forgery/lustrous_stone_from_guyun.png',
        rarity: 3,
      },
      {
        displayName: 'Relic from Guyun',
        imageSrc: 'images/materials/forgery/relic_from_guyun.png',
        rarity: 4,
      },
      {
        displayName: 'Divine Body from Guyun',
        imageSrc: 'images/materials/forgery/divine_body_from_guyun.png',
        rarity: 5,
      }
    ],
  },
  [FORGERY.ELIXIR]: {
    displayName: 'Elixir',
    imageSrc: 'images/materials/forgery/mist_veiled_lead_elixir.png',
    types: [
      {
        displayName: 'Mist Veiled Lead Elixir',
        imageSrc: 'images/materials/forgery/mist_veiled_lead_elixir.png',
        rarity: 2,
      },
      {
        displayName: 'Mist Veiled Mercury Elixir',
        imageSrc: 'images/materials/forgery/mist_veiled_mercury_elixir.png',
        rarity: 3,
      },
      {
        displayName: 'Mist Veiled Gold Elixir',
        imageSrc: 'images/materials/forgery/mist_veiled_gold_elixir.png',
        rarity: 4,
      },
      {
        displayName: 'Mist Veiled Primo Elixir',
        imageSrc: 'images/materials/forgery/mist_veiled_primo_elixir.png',
        rarity: 5,
      }
    ],
  },
  [FORGERY.AEROSIDERITE]: {
    displayName: 'Aerosiderite',
    imageSrc: 'images/materials/forgery/bit_of_aerosiderite.png',
    types: [
      {
        displayName: 'Grain of Aerosiderite',
        imageSrc: 'images/materials/forgery/grain_of_aerosiderite.png',
        rarity: 2,
      },
      {
        displayName: 'Piece of Aerosiderite',
        imageSrc: 'images/materials/forgery/piece_of_aerosiderite.png',
        rarity: 3,
      },
      {
        displayName: 'Bit of Aerosiderite',
        imageSrc: 'images/materials/forgery/bit_of_aerosiderite.png',
        rarity: 4,
      },
      {
        displayName: 'Chunk of Aerosiderite',
        imageSrc: 'images/materials/forgery/chunk_of_aerosiderite.png',
        rarity: 5,
      }
    ],
  }
});
