// src/pages/About.js
import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-page-container">
      <section className="about-page-hero">
        <h1>About Us</h1>
        <p>
          Your trusted companion in the kitchen for precise baking measurements.
        </p>
      </section>
      <div className="secondary">
        <section className="about-page-section1">
          <h2>What We Do</h2>
          <ul>
            <li>🔸 Convert Recipe Measurements with Precision</li>
            <li>🔸 AI-Backed Ingredient Recognition</li>
            <li>🔸 Simple and User-Friendly Interface</li>
          </ul>
        </section>

        <section className="about-page-section2">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ Accuracy You Can Trust</li>
            <li>✅ Saves Time & Effort</li>
            <li>✅ No More Baking Fails</li>
            <li>✅ Continuously Improving AI Models</li>
          </ul>
        </section>

        <section className="about-page-section">
          <h2>Our Vision</h2>
          <p>
            To become the go-to digital assistant for every home baker and chef
            who values precision. We aim to expand our tools further – covering
            conversions for cooking, nutrition analysis, and more smart kitchen
            utilities.
          </p>
        </section>

        <section className="about-page-section">
          <h2>Join Us on This Journey</h2>
          <p>
            Try our tool, share your feedback, and help us make baking a
            science-backed art for everyone. Let’s make{" "}
            <em>"a pinch of this and a spoon of that"</em> a thing of the past.
          </p>
        </section>
      </div>
      <footer className="about-page-footer">
        <p>© 2025 Gram It Right | Accuracy in every spoonful.</p>
        <p>About | Contact | Privacy</p>
      </footer>
    </div>
  );
}

export default About;
