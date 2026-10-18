// Menus and restaurant descriptions copied word for word from the current
// kohrusseyresort.com Restaurants page (the Horizon 2024 menu and the Beach Shack menu).
// Spelling is as on the current site, including a few likely typos; see README.

export type MenuItem = {
  name: string;
  /** Price exactly as printed, for example "$15". */
  price: string;
  /** Description lines under the dish name. */
  details?: string[];
};

export type MenuSection = {
  title: string;
  /** Text printed under the section title (a choice of pasta, or a plain list such as side dishes). */
  note?: string;
  items?: MenuItem[];
};

export type Restaurant = {
  /** Used for the anchor links /restaurants#horizon and /restaurants#beach-shack. */
  id: "horizon" | "beach-shack";
  name: string;
  description: string;
  menu: MenuSection[];
};

export const restaurantsIntro = {
  title: "Our Restaurants",
  tagline: "Where every flavor tells a story",
  description:
    "Dine at Koh Russey Resort\u2019s beachfront restaurants. Fresh Khmer cuisine & international dishes crafted by talented chefs on a private island in Cambodia.",
};

export const restaurants: Restaurant[] = [
  {
    "id": "horizon",
    "name": "Horizon Restaurant",
    "description": "Situated at the poolside with the picturesque view of the beach as your background, spend a day at Horizon as they serve a la carte breakfast of your choice from around the world. The atmosphere magically shifts to an evening of elegance when you dine and served International and fine Western Cuisine crafted from fresh farm-to-table ingredients.",
    "menu": [
      {
        "title": "Appetizers",
        "items": [
          {
            "name": "Duck Breast and Lychee Salad",
            "price": "$13",
            "details": [
              "Grilled duck breast, lychee fruit, water celery in soy lime dressing"
            ]
          },
          {
            "name": "Burrata Cheese",
            "price": "$15",
            "details": [
              "Rocket salad and orange juice reduction"
            ]
          },
          {
            "name": "Beef Carpaccio",
            "price": "$15",
            "details": [
              "Thinly sliced beef tenderloin, capers, mixed salad, cherry tomatoes and parmesan cheese with lime-oil dressing"
            ]
          },
          {
            "name": "Seabass Ceviche",
            "price": "$12",
            "details": [
              "Raw seabass marinated with Cambodian herbs, blue cheese and salted egg"
            ]
          },
          {
            "name": "Crispy Vermicelli Salad",
            "price": "$12",
            "details": [
              "Grilled chicken breast, Cambodian herbs, carrots, cucumber, red cabbage with sweet and sour dressing"
            ]
          }
        ]
      },
      {
        "title": "Main course",
        "items": [
          {
            "name": "Pan-Fried Salmon Fillet",
            "price": "$28",
            "details": [
              "With quinoa salad, sauteed green beans and broccoli, lemon-butter sauce"
            ]
          },
          {
            "name": "Pan-Seared Scallops",
            "price": "$32",
            "details": [
              "With mashed potatoes, shitake mushrooms, green beans, white sauce"
            ]
          },
          {
            "name": "Grilled Duck Breast",
            "price": "$22",
            "details": [
              "Slow cooked beetroot, mashed potatoes and broccoli, served with teriyaki sauce"
            ]
          },
          {
            "name": "Duck leg Confit",
            "price": "$26",
            "details": [
              "With caramelized pineapple, apricot puree, and sauteed broccoli"
            ]
          },
          {
            "name": "Grilled Lamb Racks",
            "price": "$38",
            "details": [
              "With mashed potatoes, green beans, shitake mushrooms, carrots, olive and mixed herb dressing"
            ]
          },
          {
            "name": "Grilled Beef Tenderloin",
            "price": "$36",
            "details": [
              "With mashed potatoes, shitake mushrooms and red wine sauce"
            ]
          }
        ]
      },
      {
        "title": "Asian dishes",
        "items": [
          {
            "name": "Tom Yum",
            "price": "$15",
            "details": [
              "Spicy Thai soup with your choice of fish or seafood, served with steamed rice"
            ]
          },
          {
            "name": "Sauteed Seafood with Green Kampot Pepper",
            "price": "$20",
            "details": [
              "Sauteed prawns and squids, green peppercorns, Chinese celery, tomatoes, served with steamed rice"
            ]
          },
          {
            "name": "Steamed Seabass Fillet",
            "price": "$22",
            "details": [
              "Steamed in soy sauce and ginger, served with steamed rice"
            ]
          },
          {
            "name": "Fish Amok",
            "price": "$22",
            "details": [
              "Slow cooked baracuda fish in Cambodian seasonings and coconut cream, served with steamed rice"
            ]
          },
          {
            "name": "Chicken Curry",
            "price": "$18",
            "details": [
              "Slow cooked chicken leg in Cambodian curry spices, served with steamed rice"
            ]
          },
          {
            "name": "Beef Loklak",
            "price": "$20",
            "details": [
              "Wok fried beef cubes, served with pepper-lime dressing and steamed rice"
            ]
          }
        ]
      },
      {
        "title": "Desserts",
        "items": [
          {
            "name": "Seasonal Fresh Fruit Platter",
            "price": "$6"
          },
          {
            "name": "Ice Cream Selections",
            "price": "$8",
            "details": [
              "Select three scoops among: vanilla, chocolate, coco, passion fruit"
            ]
          },
          {
            "name": "Chocolate Brownie",
            "price": "$8",
            "details": [
              "Served with one scoop of ice cream of your choice"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "beach-shack",
    "name": "Beach Shack",
    "description": "Located at the beachside, the thatched-roof Beach Shack is the resort’s casual all-day dining spot, built around a central bar and open grill. Offering something unique and delicious for tastes buds, the menu includes authentic Khmer dishes, Asian favorites, Western comfort food, and fresh seafood from the daily catch cooked to perfection on the grill.",
    "menu": [
      {
        "title": "Salads",
        "items": [
          {
            "name": "Caesar Salad with Chicken",
            "price": "$15",
            "details": [
              "Grilled chicken breast, romaine lettuce, parmesan cheese with Caesar dressing"
            ]
          },
          {
            "name": "Nicoise Salad",
            "price": "$15",
            "details": [
              "Seared tuna, mixed lettuce, potatoes, cherry tomatoes, green beans, topped with boiled egg and honey-mustard dressing"
            ]
          },
          {
            "name": "Seafood and Fungus Salad",
            "price": "$18",
            "details": [
              "Boiled prawns and squids, white raddish, snow fungus, carrots, cucumber, served with sweet and sour dressing"
            ]
          }
        ]
      },
      {
        "title": "Appetizers",
        "items": [
          {
            "name": "Fresh Spring Rolls",
            "price": "$12",
            "details": [
              "Rice paper wraps filled with prawns, pork, fresh green veggies, sweet and sour dip"
            ]
          },
          {
            "name": "Crispy Fried Spring Rolls",
            "price": "$13",
            "details": [
              "Deep-fried wraps filled with prawns, pork, taro, black fungus, carrots, served with sweet and sour sauce"
            ]
          },
          {
            "name": "Crispy Calamari Rings",
            "price": "$12",
            "details": [
              "Flour-coated deep-fried calamari rings, served with tartar sauce"
            ]
          },
          {
            "name": "Fried Chicken Wings",
            "price": "$12",
            "details": [
              "Flour-coated deep-fried chicken wings, served with BBQ sauce"
            ]
          },
          {
            "name": "Crispy Salmon Fins",
            "price": "$12",
            "details": [
              "Flour-coated wok-fried salmon fins, served with Koh Kong sweet and sour sauce"
            ]
          }
        ]
      },
      {
        "title": "Sandwiches, burgers and fried rice",
        "items": [
          {
            "name": "Club Sandwich",
            "price": "$15",
            "details": [
              "Grilled chicken breast, white toast, bacon, tomatoes, lettuce, served with fries"
            ]
          },
          {
            "name": "Ham and Cheese Sandwich",
            "price": "$13",
            "details": [
              "Sliced ham, white toast, emmental cheese, served with fries"
            ]
          },
          {
            "name": "Smoked Salmon Sandwich",
            "price": "$13",
            "details": [
              "Croissant with smoked salmon, tomatoes, mixed lettuce served with fries"
            ]
          },
          {
            "name": "Fish Burger",
            "price": "$13",
            "details": [
              "Pan fried fish fillet, coleslaw, served with fries"
            ]
          },
          {
            "name": "Chicken Burger",
            "price": "$13",
            "details": [
              "Flour-coated deep-fried chicken breast, cheddar cheese, gherkins, served with fries"
            ]
          },
          {
            "name": "Beef Cheese Burger",
            "price": "$16",
            "details": [
              "Beef patty, bacon, cheddar cheese, gherkins, served with fries"
            ]
          },
          {
            "name": "Koh Russey Fried Rice with Chicken, Seafood or Beef",
            "price": "$12",
            "details": [
              "Served with soy sauce and fresh chilli",
              "Additional charge of $3.00 will apply for seafood and beef"
            ]
          },
          {
            "name": "Stir-Fried yellow Noodles with Chicken, Seafood or Beef",
            "price": "$12",
            "details": [
              "Served with soy sauce and fresh chilli",
              "Additional charge of $3.00 will apply for seafood and beef"
            ]
          }
        ]
      },
      {
        "title": "Pasta",
        "note": "Your choice of: Spaghetti, Penne or Fettucine",
        "items": [
          {
            "name": "Carbonara",
            "price": "$13",
            "details": [
              "Creamy sauce with bacon, topped with parmesan cheese and egg yolk"
            ]
          },
          {
            "name": "Bolognese",
            "price": "$13",
            "details": [
              "Slow cooked ground beef and carrots in red wine and tomato sauce"
            ]
          },
          {
            "name": "Seafood",
            "price": "$15",
            "details": [
              "Prawns, squids, cooked with onions and tomato sauce, parmesan cheese toppings"
            ]
          }
        ]
      },
      {
        "title": "On the grill",
        "items": [
          {
            "name": "Squids – 220g",
            "price": "$18"
          },
          {
            "name": "Prawns – 220g",
            "price": "$20"
          },
          {
            "name": "Fish of the Day – 220g",
            "price": "$18"
          },
          {
            "name": "Lamb – 220g",
            "price": "$25"
          },
          {
            "name": "Beef – 220g",
            "price": "$22"
          }
        ]
      },
      {
        "title": "Side dishes",
        "note": "Sauteed vegetables, Green salad, French fries, Mashed potatoes"
      },
      {
        "title": "Sauces",
        "note": "Red wine sauce, BBQ sauce, Herb olive oil sauce, Cambodian pepper and lime dressing"
      },
      {
        "title": "Sweets",
        "items": [
          {
            "name": "Seasonal Fruit Platter",
            "price": "$6"
          },
          {
            "name": "Ice Cream Selections",
            "price": "$8",
            "details": [
              "Select three scoops among: vanilla, chocolate, coco, passion fruit"
            ]
          },
          {
            "name": "Chocolate Brownie",
            "price": "$8",
            "details": [
              "Served with one scoop of ice cream of your choice"
            ]
          }
        ]
      }
    ]
  }
];
