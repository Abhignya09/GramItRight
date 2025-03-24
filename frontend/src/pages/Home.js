import React from "react";
import "../App.css";

function Home() {
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
        <button className="try-btn">Try It Now</button>
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
      <section className="try-live-section">
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
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Gram It Right | Accuracy in every spoonful.</p>
        <p>About | Contact | Privacy</p>
      </footer>
    </div>
  );
}

export default Home;
