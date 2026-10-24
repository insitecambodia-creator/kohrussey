# Content fixes

Typos and slips corrected in the text copied from the current kohrusseyresort.com pages. Nothing else in the
wording was changed. To undo one, edit the file named in each section (the text lives in `src/lib/`).

Left exactly as written on purpose:

- The three guest reviews on the homepage (`src/lib/content.ts`). They are quotes, so "esp breakfast" and "etc. etc." stay.
- Dish and place names that have more than one accepted spelling, such as "Loklak" and "Pétanque".
- Wording that is awkward but not wrong.

## Restaurants
File: `src/lib/menus.ts`

| Before | After | Times |
| --- | --- | --- |
| a la carte breakfast | à la carte breakfast | 1 |
| when you dine and served International | when you dine and are served International | 1 |
| tastes buds | taste buds | 1 |
| Fettucine | Fettuccine | 1 |
| Nicoise Salad | Niçoise Salad | 1 |
| white raddish | white radish | 1 |
| emmental cheese | Emmental cheese | 1 |
| shitake | shiitake | 3 |
| Sauteed | Sautéed | 3 |
| sauteed | sautéed | 2 |
| baracuda | barracuda | 1 |
| Duck leg Confit | Duck Leg Confit | 1 |
| Stir-Fried yellow Noodles | Stir-Fried Yellow Noodles | 1 |
| chocolate, coco, passion fruit | chocolate, coconut, passion fruit | 2 |
| Slow cooked | Slow-cooked | 4 |
| Pan fried fish fillet | Pan-fried fish fillet | 1 |
| Wok fried beef cubes | Wok-fried beef cubes | 1 |
| tomatoes, mixed lettuce served with fries | tomatoes, mixed lettuce, served with fries | 1 |

## Villas & Pavilions
File: `src/lib/accommodations.ts`

| Before | After | Times |
| --- | --- | --- |
| 1- Bedroom Garden Pool Villa | 1-Bedroom Garden Pool Villa | 1 |
| private 15 sqm pool | private 15sqm pool | 1 |

## Activities
File: `src/lib/activities.ts`

| Before | After | Times |
| --- | --- | --- |
| title: "Khmer Cooking class" | title: "Khmer Cooking Class" | 1 |
| flavours | flavors | 1 |
| 1.2 Km | 1.2 km | 1 |
| Kayaking, Stand-Up paddle boarding, Snorkeling, Fishing, Isl… | Kayaking, stand-up paddle boarding, snorkeling, fishing, isl… | 1 |
| toes inthe pool | toes in the pool | 1 |
| Imagine…a blanket | Imagine… a blanket | 1 |
| andwatch | and watch | 1 |
| andbring | and bring | 1 |
| toone of | to one of | 1 |
| makes it daily descent | makes its daily descent | 1 |
| and canapes. | and canapés. | 1 |
| ofthe Gulf | of the Gulf | 1 |
| withbushes | with bushes | 1 |
| patternsthat | patterns that | 1 |
| toenjoy | to enjoy | 1 |
| experience…a bamboo | experience… a bamboo | 1 |
| blessing…you can | blessing… you can | 1 |
| Shack,while | Shack, while | 1 |
| alate afternoon | a late afternoon | 1 |
| one -or two- person kayaks | one- or two-person kayaks | 1 |
| Discover Koh Takiev | Discover Koh Ta Kiev | 1 |
| Koh Takiev Hiking | Koh Ta Kiev Hiking | 1 |

## FAQ
File: `src/lib/faq.ts`

| Before | After | Times |
| --- | --- | --- |
| island. as you will see | island, as you will see | 1 |
| share is similar sounding | share its similar sounding | 1 |
| most notorious island; | most notorious islands; | 1 |
| Alila Villa? / the Alila Villa brand | Alila Villas? / the Alila Villas brand | 2 |
| Airport, The airport code | Airport. The airport code | 1 |
| On the other hand villas is a more | On the other hand, villas are a more | 1 |
| Villas come is three | Villas come in three | 1 |
| accomodation here | accommodation here | 1 |
| many various ways | many different ways | 1 |
| You can book our website or our partner. by contacting | You can book on our website or through our partner, or by contacting | 1 |
| for safety reason only | for safety reasons only | 1 |
| In normal situation, | In normal situations, | 1 |
| off limit. | off limits. | 1 |
| Koh Rong Salem | Koh Rong Samlem | 1 |
| then a 30 minutes speed boat | then a 30-minute speed boat | 1 |
| "Koh Russey" (straight quotes) | “Koh Russey” (curly quotes, as elsewhere) | 3 |

## Reviews & Media Mentions
File: `src/lib/reviews.ts`

| Before | After | Times |
| --- | --- | --- |
| Tentyl Resorts | Rentyl Resorts | 1 |
| Resort( | Resort ( | 1 |

## Promotions
File: `src/lib/content.ts`

| Before | After | Times |
| --- | --- | --- |
| Chat on Whatsapp | Chat on WhatsApp | 1 |

## Contact, Weddings, Corporate retreat

No wording changes in the page text. In the forms, two labels that were garbled in the saved pages ("Email* *" became "Email *"; the stray labels "have you our" and "Phone Name did" were dropped) and the plain "First" / "Last" captions became the placeholders "First Name" / "Last Name".

## About us
File: `src/lib/about.ts`

| Before | After | Times |
| --- | --- | --- |
| Check Out our villas | Check out our villas | 1 |

## Getting here
File: `src/lib/getting-here.ts`

| Before | After | Times |
| --- | --- | --- |
| scheduled shared round trip speed boat transfers is directly operated | scheduled shared round-trip speedboat transfers are directly operated | 1 |
| an international destination. Elevate your journey | an international destination, elevate your journey | 1 |

## Judgement calls

- "coco" in the ice cream flavours became "coconut" (chocolate is already listed, so it was not cocoa). Change it back if "coco" was intended.
- "Koh Takiev" in two activity titles became "Koh Ta Kiev", the spelling the paragraphs already use.
- "flavours" became "flavors" to match the American spelling used everywhere else on the site.
- Hyphens were added to compound adjectives ("slow-cooked", "pan-fried", "wok-fried") to match "Deep-fried" and "Flour-coated" elsewhere in the menus.
- The list of resort activities was set in one consistent lower-case style.
- FAQ: "Alila Villa" became "Alila Villas" (the brand's name) and "Koh Rong Salem" became "Koh Rong Samlem", the spelling used in the rest of the answer.
- FAQ: the "Map of the region" button points to the Getting here page, the nearest match now that the old map page redirects there.
- Reviews: the links are kept as on the old page. The first one (retalkasia.com) goes to an image on thesun.my, and "The Luxe Voyager" goes to a fivestaralliance.com page. Both look like mistakes on the old site; check them. The source name "www.retalkasia.com" was left as written (it may be meant to be "retailasia.com").
- Getting here: the old page has a hidden block (set to hide on every screen size) with "From Sihanoukville", "From Sihanoukville Airport" (a taxi, 35 min, $25; no buses; a 120 min walk, free), "From KOS Airport" and "From Phnom Penh Airport" (the last two are empty). It was left out because visitors never see it on the old site. Say if you want it shown.
- Getting here: the earlier page had a table of seasonal shuttle times (Green Season and High Season, with the return times from the resort) taken from the old homepage. The saved "How to get to Koh Russey Island" page only gives the departure times 13h30 and 14h30, so the page now follows that and the table was removed to avoid two different schedules. It is in the git history (`shuttles` in `src/lib/content.ts`, before the commit that added the About and Getting here pages) if you want it back, in which case please confirm which times are right.
- Getting here and About us: the embedded Google maps are not copied (they load Google's scripts and cookies). "The map" button opens the Ream Lounge on Google Maps, and the About page shows the resort's map image, which opens Google Maps when clicked.
- About us: the old page says "50 luxurious pavilions and 13 private pool villas". It is copied as written, but the Villas page lists three kinds of pavilion and four of villa, so check the numbers.
- About us: the phone number here (+855 96 2141 888) differs from the one in the header (+855 81 222 921). Both are copied as on the old site.
- Offers: the old page says there are no active promotions. The all-inclusive villa section from the homepage was kept below it, because the homepage banner links here. Remove it if it is no longer offered.

## Text written for the new site

Everything above is wording copied from the old site. These texts are new, written from facts already in the copied text:

- Villas page overview, under "Pavilions" and "Villas" (`accommodationsOverviewText` in `src/lib/accommodations.ts`): what sets a pavilion apart from a villa. It uses only the sizes, bed, terrace/balcony, private pool, cabana, living and dining area, kitchen and guest numbers already given for each entry. It also implies pavilions have no private pool of their own (none is mentioned for them), so confirm that.
- The "Page not found" page (`src/pages/404.astro`).
- The facts with icons under each room's name on the Villas page (`facts` in `src/lib/accommodations.ts`): size, bed, view, pool and so on, each taken from that room's own text. The 2-Bedroom villa shows "2 bedrooms" and not a guest number, because the booking engine shows a different number of guests from the "up to 4" in the text; settle which is right.
- Sentences for the forms (`src/components/EnquiryForm.astro`): the messages after sending, "Please choose at least one option." and the hidden "Contact form" heading on the contact page.
- Reviews page meta description (`src/lib/reviews.ts`).
- About us: the small heading above the title is shown as plain small capitals rather than as a heading, and "Contact details" is a hidden heading for screen readers.
- Photos standing in until the originals are added: About us uses the beach-at-sunset aerial in place of the staff photo (`staff02.webp`) and the pavilions among the trees in place of `Koh-Russey-Resort_room_footer01`; Getting here uses the resort aerial in place of the helicopter photo (`helistar`) and the island map in place of `GET-TO-THE-ISLAND`.
