// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// // const fetch = require("node-fetch"); // If not built-in, install it: npm install node-fetch
// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/get-ingredients", async (req, res) => {
//   const { recipe } = req.body;
//   const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

//   if (!recipe || !GEMINI_API_KEY) {
//     return res.status(400).json({ error: "Missing recipe or API key." });
//   }

//   try {
//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: [{ parts: [{ text: `List ingredients for ${recipe}` }] }],
//         }),
//       }
//     );

//     const data = await response.json();
//     console.log("Gemini API Response:", data);

//     if (data && data.candidates && data.candidates[0].content) {
//       return res.json({
//         ingredients: data.candidates[0].content.parts[0].text,
//       });
//     } else {
//       return res.status(500).json({ error: "Failed to fetch ingredients." });
//     }
//   } catch (err) {
//     console.error("Server error:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Initialize dotenv to load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Initialize the Google GenAI client with API key from .env
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only this origin, or use '*' for all origins
    methods: ["GET", "POST"], // Allow these methods
    allowedHeaders: ["Content-Type"], // Allow these headers
  })
);
// Middleware to parse JSON requests
app.use(express.json());

// Example route to fetch ingredients using Gemini AI model
app.post("/get-ingredients", async (req, res) => {
  const { recipe } = req.body;

  if (!recipe) {
    return res.status(400).json({ error: "Recipe name is required." });
  }

  try {
    // Send a request to the Gemini model to generate content
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // The Gemini model name
      contents: `Generate ingredients for ${recipe} with measurements in grams and liters.Don't give any notices and others`, // The prompt we send to the model
    });

    // If response is valid, return the ingredients
    if (response.text) {
      return res.json({ ingredients: response.text });
    } else {
      return res
        .status(500)
        .json({ error: "Failed to fetch ingredients from AI." });
    }
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/", (req, res) => {
  res.send("✨ GramItRight backend is live and running! ✨");
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
