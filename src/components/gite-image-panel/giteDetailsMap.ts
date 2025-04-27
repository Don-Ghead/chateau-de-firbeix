export interface GiteListingDetails {
  name: string
  airbnbListingId: string
  mainImageHref: string
  galleryImagesHref: string[]
  about?: string
}

export type Gite = 'oiseaux' | 'papillons' | 'both'

export const giteDetailsMap: Record<Gite, GiteListingDetails> = {
  papillons: {
    name: 'Les Papillons',
    airbnbListingId: '1152638998497049453',
    mainImageHref: '/images/home-gallery/pool-amenity.jpg',
    galleryImagesHref: [],
    about:
      'Gite Les Papillons caters for 6 people. The grounds offer a large heated pool w/shower, shaded deck lounge area, petanque pitch, tree house & games barn (table tennis, babyfoot, darts). All facilities shared with guests from 2nd gite.\n' +
      'Short walk to village park set around a small lake (licensed fishing).\n' +
      'Drive times: N21 North - Chalus: bakeries/large supermarket 5/7 mins. LImoges airport 35 mins. Limoges 45 mins. N21 South - Thiviers 25 mins, Brantome 45 mins, Periguex 1 hr\n' +
      'The space\n' +
      'Chateau de Firbeix is located in the Périgord-Limousin Natural Regional Park, just off the N21. A rural setting on the Haute Vienne/Dordogne border by the river Dronne.\n' +
      '\n' +
      "Around the pool, the garden grounds at the front of the property are home to a host of varied and mature trees, some rare. Surrounded by nature often all you can hear are the birds, or at certain times of year night brings the frog chorus. You might be lucky enough to spot a deer or two, and of course insects including beautiful butterfiles & dragonflies abound. The star laden night sky can be an incredible sight to behold when it's clear, which is often.\n" +
      '\n' +
      "Lounge by the pool under the bamboo covered pergola, offering a little shade during the day and a relaxing social space with lights at night. Enjoy games of Pétanque (boules) in the early evening sun - if you've never played be warned it's addictive!. Escape to the shade and chill out in or by the treehouse up the hill from the pool.\n" +
      '\n' +
      'If you are looking for relaxing break with friends and/or family with an informal feel in amongst nature we look forward to welcoming you.\n' +
      'Guest access\n' +
      'You have full and open access from the Gite to the chateau grounds/gardens. Private / inaccessible areas will be marked.\n' +
      'Important: Open access to pool, woods and road may not be suitable for young children.\n' +
      'Other things to note\n' +
      'The gite is adjacent to another which may be occupied by other guests. You can see more detail on this under our listing 2 Gites - Chateau de Firbeix',
  },
  oiseaux: {
    name: 'Les Oiseaux',
    airbnbListingId: '1149504662827110246',
    mainImageHref: '/images/home-gallery/chateau-explore-area.jpg',
    galleryImagesHref: [],
    about:
      'Gite with disabled access/PMR caters for 6 people. The grounds offer a large heated pool w/shower, shaded deck lounge area, petanque pitch, tree house & games barn (table tennis, babyfoot, darts). All facilities shared with guests from 2nd gite.\n' +
      'Short walk to village park set around a small lake (licensed fishing).\n' +
      'Drive times: N21 North - Chalus: bakeries/large supermarket 5/7 mins. LImoges airport 35 mins. Limoges 45 mins. N21 South - Thiviers 25 mins, Brantome 45 mins, Periguex 1 hr\n' +
      'The space\n' +
      'Chateau de Firbeix is located in the Périgord-Limousin Natural Regional Park, just off the N21. A rural setting on the Haute Vienne/Dordogne border by the river Dronne.\n' +
      '\n' +
      "Around the pool, the garden grounds at the front of the property are home to a host of varied and mature trees, some rare. Surrounded by nature often all you can hear are the birds, or at certain times of year night brings the frog chorus. You might be lucky enough to spot a deer or two, and of course insects including beautiful butterfiles & dragonflies abound. The star laden night sky can be an incredible sight to behold when it's clear, which is often.\n" +
      '\n' +
      "Lounge by the pool under the bamboo covered pergola, offering a little shade during the day and a relaxing social space with lights at night. Enjoy games of Pétanque (boules) in the early evening sun - if you've never played be warned it's addictive!. Escape to the shade and chill out in or by the treehouse up the hill from the pool.\n" +
      '\n' +
      'If you are looking for relaxing break with friends and/or family with an informal feel in amongst nature we look forward to welcoming you.\n' +
      'Guest access\n' +
      'You have full and open access from the Gite to the chateau grounds/gardens. Private / inaccessible areas will be marked.\n' +
      'Important: Open access to pool, woods and road may not be suitable for young children.\n' +
      'Other things to note\n' +
      'The gite is adjacent to another which may be occupied by other guests. You can see more detail on this under our listing 2 Gites - Chateau de Firbeix',
  },
  both: {
    name: 'Combined',
    airbnbListingId: '1144913778842846108',
    mainImageHref: '/images/home-gallery/french-2.jpg',
    galleryImagesHref: [],
    about:
      '2 Gites side by side to rear right of Chateau building. Each gite caters for 6 people. Ideal for extended group of friends/family. The grounds offer a large heated pool w/shower, shaded deck lounge area, petanque pitch, tree house & barn games space\n' +
      'Short walk to village park set around a small lake (licensed fishing).\n' +
      'Drive times: N21 North - Chalus: bakeries/large supermarket 5/7 mins. LImoges airport 35 mins. Limoges 45 mins. N21 South - Thiviers 25 mins, Brantome 45 mins, Periguex 1 hr\n' +
      'The space\n' +
      'Chateau de Firbeix is located in the Périgord-Limousin Natural Regional Park, just off the N21. A rural setting on the Haute Vienne/Dordogne border by the river Dronne.\n' +
      '\n' +
      "Around the pool, the garden grounds at the front of the property are home to a host of varied and mature trees, some rare. Surrounded by nature often all you can hear are the birds, or at certain times of year night brings the frog chorus. You might be lucky enough to spot a deer or two, and of course insects including beautiful butterfiles & dragonflies abound. The star laden night sky can be an incredible sight to behold when it's clear, which is often.\n" +
      '\n' +
      "Lounge by the pool under the bamboo covered pergola, offering a little shade during the day and a relaxing social space with lights at night. Enjoy games of Pétanque (boules) in the early evening sun - if you've never played be warned it's addictive!. Escape to the shade and chill out in or by the treehouse up the hill from the pool.\n" +
      '\n' +
      'If you are looking for relaxing break with friends and/or family with an informal feel in amongst nature we look forward to welcoming you.\n' +
      'Guest access\n' +
      'You have full and open access from the Gites to the chateau grounds/gardens. Private / inaccessible areas will be marked.\n' +
      'Important: Open access to pool, woods and road may not be suitable for voung children.\n' +
      'Other things to note\n' +
      'Gites are also listed separately:\n' +
      '\n' +
      'Gite Les Oiseaux - Chateau Firbeix\n' +
      'Gite LesPapillons/ChateauFirbeix',
  },
}
