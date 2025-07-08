import React, { useState } from "react";
// import "./Converter.css"; // Add this line to import the external CSS

function Converter() {
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [error, setError] = useState("");
  // fetch(`${process.env.REACT_APP_BACKEND_URL}/get-ingredients`)

  const fetchIngredients = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/get-ingredients`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ recipe }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      // Check if 'ingredients' exist in response
      if (data.ingredients) {
        setIngredients(data.ingredients);
        setError(""); // Clear previous errors
      } else {
        throw new Error("No ingredients found.");
      }
    } catch (error) {
      console.error("Error fetching ingredients:", error);
      setError("Could not retrieve ingredients. Please try again.");
    }
  };

  return (
    <div className="converter-container">
      <h2 className="title">Recipe Ingredient Finder</h2>
      <h6>Make sure to provide the quantity for better results</h6>
      <br></br>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter recipe name"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          className="input-field"
        />
        <button onClick={fetchIngredients} className="find-button">
          Find Ingredients
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
      {ingredients && (
        <div className="output-wrapper">
          <pre className="ingredients-display">{ingredients}</pre>
          <button
            className="copy-button"
            onClick={() => navigator.clipboard.writeText(ingredients)}
          >
            📋 Copy
          </button>
        </div>
      )}

      {/* {ingredients && <pre className="ingredients-display">{ingredients}</pre>} */}
    </div>
  );
}

export default Converter;
