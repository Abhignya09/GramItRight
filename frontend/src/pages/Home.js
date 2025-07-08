import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const conversions = {
    flour: {
      cup: 120,
      tablespoon: 7.5,
      teaspoon: 2.5,
    },
    sugar: {
      cup: 200,
      tablespoon: 12.5,
      teaspoon: 4.2,
    },
    butter: {
      cup: 227,
      tablespoon: 14.2,
      teaspoon: 4.7,
    },
    milk: {
      cup: 240,
      tablespoon: 15,
      teaspoon: 5,
    },
  };
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    const pattern = /(\d+\.?\d*)\s*(cup|tablespoon|teaspoon)s?\s+(\w+)/i;
    const match = input.match(pattern);

    if (match) {
      const quantity = parseFloat(match[1]);
      const unit = match[2].toLowerCase();
      const item = match[3].toLowerCase();

      if (conversions[item] && conversions[item][unit]) {
        const grams = quantity * conversions[item][unit];
        setOutput(`${grams} grams`);
      } else {
        setOutput("Sorry, conversion not available for that ingredient.");
      }
    } else {
      setOutput("Invalid input. Try something like '1 cup flour'");
    }
  };
  return (
    <div className="home-container">
      <div className="intro-section">
        <h2>Welcome to RecipeGram Converter 🍰</h2>
        <p>
          This tool helps you convert recipes into precise grams for better
          baking. Convert vague measurements into precise grams using AI.
        </p>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Make Baking Perfect</h1>
        <p className="hero-subtext"></p>
        {/* <button className="try-btn">Try It Now</button> */}
        <button className="try-btn" onClick={() => navigate("/converter")}>
          Try It Now
        </button>
      </section>

      {/* Why Gram It Right */}
      <section className="why-gram">
        <h2>Why Gram It Right?</h2>
        <div className="why-cards-container">
          <div className="why-card">
            <h3>🎯 Precision in Baking</h3>
            <p>Say goodbye to inconsistency and guesswork.</p>
          </div>
          <div className="why-card">
            <h3>⚡ Real-time Conversion</h3>
            <p>Instant conversion from cups, spoons to grams.</p>
          </div>
          <div className="why-card">
            <h3>🤖 AI-backed Results</h3>
            <p>Smart, ingredient-specific conversions with accuracy.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="how-steps-container">
          <div className="how-step">
            <h3>Step 1</h3>
            <p>Paste your recipe or ingredients</p>
          </div>
          <div className="how-step">
            <h3>Step 2</h3>
            <p>AI detects & processes units</p>
          </div>
          <div className="how-step">
            <h3>Step 3</h3>
            <p>Get your results in grams</p>
          </div>
        </div>
      </section>

      {/* Try It Live */}
      {/* <section className="try-live-section">
        <h2>Try It Live</h2>
        <p>Enter an ingredient and see conversion in action!</p>
        <div className="try-live-inputs">
          <input
            type="text"
            placeholder="e.g., 1 cup flour"
            className="ingredient-input"
          />
          <button className="convert-btn">Convert</button>
        </div>
        <div className="conversion-result">Output: 120 grams of flour</div>
      </section> */}
      <div className="try-container">
        <h3>🎯 Try It Live</h3>
        <input
          type="text"
          placeholder="e.g. 1 cup flour"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="try-input"
        />
        <button onClick={handleConvert} className="try-btn">
          Convert
        </button>
        <p className="try-output">{output}</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Gram It Right | Accuracy in every spoonful.</p>
        <p>About | Contact | Privacy</p>
      </footer>
    </div>
  );
}

export default Home;
