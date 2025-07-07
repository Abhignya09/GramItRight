import React, { useState } from "react";
import "./Recipes.css"; // for styling

const Recipes = () => {
  const recipes = [
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
