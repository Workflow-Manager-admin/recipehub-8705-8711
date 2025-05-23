// Mock data for RecipeHub development

export const categories = [
  { id: 1, name: "Breakfast", icon: "☕" },
  { id: 2, name: "Lunch", icon: "🍲" },
  { id: 3, name: "Dinner", icon: "🍽️" },
  { id: 4, name: "Dessert", icon: "🍰" },
  { id: 5, name: "Vegetarian", icon: "🥗" },
  { id: 6, name: "Quick Meals", icon: "⏱️" },
  { id: 7, name: "Baking", icon: "🍞" },
  { id: 8, name: "Healthy", icon: "🥦" }
];

export const recipes = [
  {
    id: 1,
    title: "Classic Pancakes",
    category: 1,
    prepTime: 10,
    cookTime: 15,
    rating: 4.8,
    image: "https://source.unsplash.com/random/300x200/?pancakes",
    description: "Fluffy pancakes that are perfect for breakfast any day of the week.",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 teaspoons baking powder",
      "1 teaspoon salt",
      "1 tablespoon white sugar",
      "1 1/4 cups milk",
      "1 egg",
      "3 tablespoons butter, melted"
    ],
    instructions: [
      "In a large bowl, sift together flour, baking powder, salt, and sugar.",
      "Make a well in the center and pour in milk, egg, and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium-high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
      "Brown on both sides and serve hot with maple syrup."
    ],
    comments: [
      { user: "User123", text: "These were so fluffy and delicious!", rating: 5 },
      { user: "PancakeLover", text: "My family loved these!", rating: 5 }
    ]
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    category: 5,
    prepTime: 15,
    cookTime: 10,
    rating: 4.5,
    image: "https://source.unsplash.com/random/300x200/?stirfry",
    description: "A quick and healthy vegetable stir fry that's perfect for busy weeknights.",
    ingredients: [
      "2 tablespoons vegetable oil",
      "1 onion, sliced",
      "2 bell peppers, sliced",
      "1 cup broccoli florets",
      "1 carrot, julienned",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, grated",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil"
    ],
    instructions: [
      "Heat oil in a large wok or skillet over high heat.",
      "Add onions and stir fry for 2 minutes until translucent.",
      "Add bell peppers, broccoli, and carrots, cook for 3-4 minutes.",
      "Add garlic and ginger, stir for 30 seconds until fragrant.",
      "Pour in soy sauce and sesame oil, toss to coat all vegetables.",
      "Cook for another 2 minutes and serve hot with rice."
    ],
    comments: [
      { user: "HealthyEater", text: "So quick and tasty!", rating: 5 },
      { user: "VeggieFan", text: "Great way to use up vegetables.", rating: 4 }
    ]
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    category: 4,
    prepTime: 15,
    cookTime: 10,
    rating: 4.9,
    image: "https://source.unsplash.com/random/300x200/?cookies",
    description: "Classic chocolate chip cookies that are chewy in the middle and crispy on the edges.",
    ingredients: [
      "1 cup butter, softened",
      "1 cup white sugar",
      "1 cup packed brown sugar",
      "2 eggs",
      "2 teaspoons vanilla extract",
      "3 cups all-purpose flour",
      "1 teaspoon baking soda",
      "2 teaspoons hot water",
      "1/2 teaspoon salt",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Cream together the butter, white sugar, and brown sugar until smooth.",
      "Beat in the eggs one at a time, then stir in the vanilla.",
      "Dissolve baking soda in hot water and add to batter with salt.",
      "Stir in flour and chocolate chips.",
      "Drop by large spoonfuls onto ungreased pans.",
      "Bake for about 10 minutes until edges are nicely browned."
    ],
    comments: [
      { user: "SweetTooth", text: "Best cookie recipe ever!", rating: 5 },
      { user: "BakingFan", text: "My kids can't get enough of these.", rating: 5 }
    ]
  },
  {
    id: 4,
    title: "Spaghetti Bolognese",
    category: 3,
    prepTime: 20,
    cookTime: 40,
    rating: 4.7,
    image: "https://source.unsplash.com/random/300x200/?spaghetti",
    description: "A rich and hearty Italian pasta dish with a meaty tomato sauce.",
    ingredients: [
      "1 pound spaghetti",
      "1 pound ground beef",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 carrot, finely chopped",
      "1 celery stalk, finely chopped",
      "1 can (28 oz) crushed tomatoes",
      "2 tablespoons tomato paste",
      "1/2 cup red wine",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "Grated Parmesan cheese for garnish"
    ],
    instructions: [
      "Cook spaghetti according to package directions; drain.",
      "In a large skillet, cook ground beef over medium heat until browned; drain fat.",
      "Add onion, garlic, carrot, and celery; cook until vegetables are tender.",
      "Stir in crushed tomatoes, tomato paste, red wine, and herbs.",
      "Simmer uncovered for 30 minutes, stirring occasionally.",
      "Season with salt and pepper to taste.",
      "Serve sauce over hot spaghetti and garnish with Parmesan cheese."
    ],
    comments: [
      { user: "PastaLover", text: "Just like my Italian grandmother used to make!", rating: 5 },
      { user: "DinnerChef", text: "Great depth of flavor with the red wine.", rating: 4 }
    ]
  },
  {
    id: 5,
    title: "Avocado Toast",
    category: 1,
    prepTime: 5,
    cookTime: 5,
    rating: 4.6,
    image: "https://source.unsplash.com/random/300x200/?avocadotoast",
    description: "Simple, healthy, and delicious avocado toast with various toppings.",
    ingredients: [
      "2 slices of whole grain bread",
      "1 ripe avocado",
      "1/2 lemon, juiced",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "2 eggs (optional for poached egg topping)"
    ],
    instructions: [
      "Toast the bread until golden and firm.",
      "Remove the pit from the avocado and scoop the flesh into a bowl.",
      "Add lemon juice, salt, and pepper and mash with a fork.",
      "Spread the avocado mixture onto the toast.",
      "Top with red pepper flakes if desired.",
      "For an extra protein boost, add a poached egg on top."
    ],
    comments: [
      { user: "BreakfastFan", text: "So simple but so good!", rating: 5 },
      { user: "HealthyEater", text: "I add everything bagel seasoning to mine.", rating: 4 }
    ]
  },
  {
    id: 6,
    title: "Chicken Curry",
    category: 3,
    prepTime: 15,
    cookTime: 30,
    rating: 4.8,
    image: "https://source.unsplash.com/random/300x200/?curry",
    description: "A flavorful and aromatic chicken curry that's both comforting and satisfying.",
    ingredients: [
      "2 lbs chicken breast, cut into chunks",
      "2 tablespoons vegetable oil",
      "1 onion, finely chopped",
      "3 cloves garlic, minced",
      "1 tablespoon fresh ginger, grated",
      "2 tablespoons curry powder",
      "1 teaspoon turmeric",
      "1 teaspoon cumin",
      "1 can (14 oz) coconut milk",
      "1 cup chicken broth",
      "2 tablespoons tomato paste",
      "Salt to taste",
      "Fresh cilantro for garnish",
      "Cooked rice for serving"
    ],
    instructions: [
      "Heat oil in a large pot over medium heat.",
      "Add onions and cook until soft and translucent.",
      "Add garlic and ginger, cook for another minute until fragrant.",
      "Add curry powder, turmeric, and cumin, stir to toast the spices.",
      "Add chicken and cook until no longer pink on the outside.",
      "Stir in coconut milk, chicken broth, and tomato paste.",
      "Bring to a simmer and cook for 20-25 minutes until chicken is cooked through.",
      "Season with salt to taste.",
      "Garnish with cilantro and serve with rice."
    ],
    comments: [
      { user: "SpiceFan", text: "Perfect level of spice and flavor!", rating: 5 },
      { user: "HomeCook", text: "My go-to curry recipe now.", rating: 5 }
    ]
  }
];

export const collections = [
  {
    id: 1,
    name: "Weeknight Favorites",
    recipes: [2, 4, 6],
    description: "Quick and easy recipes for busy weeknights"
  },
  {
    id: 2,
    name: "Breakfast Ideas",
    recipes: [1, 5],
    description: "Start your day with these delicious breakfast recipes"
  },
  {
    id: 3,
    name: "Sweet Treats",
    recipes: [3],
    description: "Indulgent desserts and sweet treats"
  }
];
