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

## Judgement calls

- "coco" in the ice cream flavours became "coconut" (chocolate is already listed, so it was not cocoa). Change it back if "coco" was intended.
- "Koh Takiev" in two activity titles became "Koh Ta Kiev", the spelling the paragraphs already use.
- "flavours" became "flavors" to match the American spelling used everywhere else on the site.
- Hyphens were added to compound adjectives ("slow-cooked", "pan-fried", "wok-fried") to match "Deep-fried" and "Flour-coated" elsewhere in the menus.
- The list of resort activities was set in one consistent lower-case style.
