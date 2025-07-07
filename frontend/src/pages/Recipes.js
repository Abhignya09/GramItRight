import React, { useState } from "react";
import "./Recipes.css"; // for styling

const Recipes = () => {
  const recipes = [
    {
      name: "Chole Bhature",
      description: "Spicy chickpea curry with deep-fried bread.",
      ingredients: {
        "Chole Curry": "1 serving",
        "Dried Chickpeas (Kabuli Chana)": "500g",
        "Water (for soaking)": "2 liters",
        "Tea Bags (Black Tea)": "2 bags",
        "Bay Leaves": "2",
        "Black Cardamoms": "2",
        "Cinnamon Stick": "5 cm",
        Cloves: "4",
        "Black Peppercorns": "10",
        "Vegetable Oil": "60 ml",
        "Onions (finely chopped)": "250g",
        "Ginger-Garlic Paste": "40g",
        "Green Chilies (finely chopped)": "10g",
        "Tomatoes (pureed)": "400g",
        "Turmeric Powder": "5g",
        "Red Chili Powder": "10g",
        "Coriander Powder": "15g",
        "Cumin Powder": "10g",
        "Dried Mango Powder (Amchur)": "5g",
        Salt: "10g",
        "Fresh Coriander Leaves (for garnish)": "20g",
        Bhature: "2 pieces",
        "All-Purpose Flour (Maida)": "250g",
        "Yogurt (plain, full-fat)": "60g",
        "Semolina (Sooji)": "20g",
        Sugar: "5g",
        Salt: "3g",
        "Baking Powder": "2g",
        "Oil (for kneading)": "30 ml",
        "Warm Water (for kneading)": "120 ml",
        "Oil (for deep frying)": "500ml",
      },
    },
    {
      name: "Masala Dosa",
      description: "Crispy rice crepe with spiced potato filling.",
      ingredients: {
        Rice: "200g",
        "Urad dal": "100g",
        Potatoes: "150g",
        Onions: "80g",
        Spices: "10g",
      },
    },
    {
      name: "Paneer Butter Masala",
      description: "Creamy curry with paneer cubes.",
      ingredients: {
        Paneer: "200g",
        Tomatoes: "150g",
        Butter: "50g",
        Cream: "30g",
        Spices: "15g",
      },
    },
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closePopup = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="recipe-page">
      <h1>Popular Indian Recipes</h1>
      <div className="card-container">
        {recipes.map((recipe, index) => (
          <div
            className="recipe-card"
            key={index}
            onClick={() => handleCardClick(recipe)}
          >
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedRecipe.name}</h2>
            <h4>Ingredients (in grams):</h4>
            <ul>
              {Object.entries(selectedRecipe.ingredients).map(
                ([item, qty], idx) => (
                  <li key={idx}>
                    <strong>{item}</strong>: {qty}
                  </li>
                )
              )}
            </ul>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
