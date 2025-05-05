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
      '<p>Gite Les Papillons caters for 6 people. The grounds offer a large heated pool w/shower, shaded deck lounge area, petanque pitch, tree house & games barn (table tennis, babyfoot, darts). All facilities shared with guests from 2nd gite.</p>' +
      '<p>Short walk to village park set around a small lake (licensed fishing).</p>' +
      '<p>Drive times: N21 North - Chalus: bakeries/large supermarket 5/7 mins. LImoges airport 35 mins. Limoges 45 mins. N21 South - Thiviers 25 mins, Brantome 45 mins, Periguex 1 hr</p>' +
      '<h3>The space</h3>' +
      '<p>Chateau de Firbeix is located in the Périgord-Limousin Natural Regional Park, just off the N21. A rural setting on the Haute Vienne/Dordogne border by the river Dronne.</p>' +
      "<p>Around the pool, the garden grounds at the front of the property are home to a host of varied and mature trees, some rare. Surrounded by nature often all you can hear are the birds, or at certain times of year night brings the frog chorus. You might be lucky enough to spot a deer or two, and of course insects including beautiful butterfiles & dragonflies abound. The star laden night sky can be an incredible sight to behold when it's clear, which is often.</p>" +
      "<p>Lounge by the pool under the bamboo covered pergola, offering a little shade during the day and a relaxing social space with lights at night. Enjoy games of Pétanque (boules) in the early evening sun - if you've never played be warned it's addictive!. Escape to the shade and chill out in or by the treehouse up the hill from the pool.</p>" +
      '<p>If you are looking for relaxing break with friends and/or family with an informal feel in amongst nature we look forward to welcoming you.</p>' +
      '<h3>Guest access</h3>' +
      '<p>You have full and open access from the Gite to the chateau grounds/gardens. Private / inaccessible areas will be marked.</p>' +
      '<p><strong>Important:</strong> Open access to pool, woods and road may not be suitable for young children.</p>' +
      '<h3>Other things to note</h3>' +
      '<p>The gite is adjacent to another which may be occupied by other guests. You can see more detail on this under our listing 2 Gites - Chateau de Firbeix</p>',
  },
  oiseaux: {
    name: 'Les Oiseaux',
    airbnbListingId: '1149504662827110246',
    mainImageHref: '/images/home-gallery/chateau-explore-area.jpg',
    galleryImagesHref: [],
    about:
      '<p>Gite with disabled access/PMR caters for 6 people. The grounds offer a large heated pool w/shower, shaded deck lounge area, petanque pitch, tree house & games barn (table tennis, babyfoot, darts). All facilities shared with guests from 2nd gite.</p>' +
      '<p>Short walk to village park set around a small lake (licensed fishing).</p>' +
      '<p>Drive times: N21 North - Chalus: bakeries/large supermarket 5/7 mins. LImoges airport 35 mins. Limoges 45 mins. N21 South - Thiviers 25 mins, Brantome 45 mins, Periguex 1 hr</p>' +
      '<h3>The space</h3>' +
      '<p>Chateau de Firbeix is located in the Périgord-Limousin Natural Regional Park, just off the N21. A rural setting on the Haute Vienne/Dordogne border by the river Dronne.</p>' +
      "<p>Around the pool, the garden grounds at the front of the property are home to a host of varied and mature trees, some rare. Surrounded by nature often all you can hear are the birds, or at certain times of year night brings the frog chorus. You might be lucky enough to spot a deer or two, and of course insects including beautiful butterfiles & dragonflies abound. The star laden night sky can be an incredible sight to behold when it's clear, which is often.</p>" +
      "<p>Lounge by the pool under the bamboo covered pergola, offering a little shade during the day and a relaxing social space with lights at night. Enjoy games of Pétanque (boules) in the early evening sun - if you've never played be warned it's addictive!. Escape to the shade and chill out in or by the treehouse up the hill from the pool.</p>" +
      '<p>If you are looking for relaxing break with friends and/or family with an informal feel in amongst nature we look forward to welcoming you.</p>' +
      '<h3>Guest access</h3>' +
      '<p>You have full and open access from the Gite to the chateau grounds/gardens. Private / inaccessible areas will be marked.</p>' +
      '<p><strong>Important:</strong> Open access to pool, woods and road may not be suitable for young children.</p>' +
      '<h3>Other things to note</h3>' +
      '<p>The gite is adjacent to another which may be occupied by other guests. You can see more detail on this under our listing 2 Gites - Chateau de Firbeix</p>',
  },
  both: {
    name: 'Combined',
    airbnbListingId: '1144913778842846108',
    mainImageHref: '/images/home-gallery/french-2.jpg',
    galleryImagesHref: [],
    about:
      '<p>2 Gites side by side to rear right of Chateau building. Each gite caters for 6 people. Ideal for extended group of friends/family. The grounds offer a large heated pool w/shower, shaded deck lounge area, petanque pitch, tree house & barn games space</p>' +
      '<p>Short walk to village park set around a small lake (licensed fishing).</p>' +
      '<p>Drive times: N21 North - Chalus: bakeries/large supermarket 5/7 mins. LImoges airport 35 mins. Limoges 45 mins. N21 South - Thiviers 25 mins, Brantome 45 mins, Periguex 1 hr</p>' +
      '<h3>The space</h3>' +
      '<p>Chateau de Firbeix is located in the Périgord-Limousin Natural Regional Park, just off the N21. A rural setting on the Haute Vienne/Dordogne border by the river Dronne.</p>' +
      "<p>Around the pool, the garden grounds at the front of the property are home to a host of varied and mature trees, some rare. Surrounded by nature often all you can hear are the birds, or at certain times of year night brings the frog chorus. You might be lucky enough to spot a deer or two, and of course insects including beautiful butterfiles & dragonflies abound. The star laden night sky can be an incredible sight to behold when it's clear, which is often.</p>" +
      "<p>Lounge by the pool under the bamboo covered pergola, offering a little shade during the day and a relaxing social space with lights at night. Enjoy games of Pétanque (boules) in the early evening sun - if you've never played be warned it's addictive!. Escape to the shade and chill out in or by the treehouse up the hill from the pool.</p>" +
      '<p>If you are looking for relaxing break with friends and/or family with an informal feel in amongst nature we look forward to welcoming you.</p>' +
      '<h3>Guest access</h3>' +
      '<p>You have full and open access from the Gites to the chateau grounds/gardens. Private / inaccessible areas will be marked.</p>' +
      '<p><strong>Important:</strong> Open access to pool, woods and road may not be suitable for voung children.</p>' +
      '<h3>Other things to note</h3>' +
      '<p>Gites are also listed separately via their respective pages above</p>' +
      '</ul>',
  },
}
