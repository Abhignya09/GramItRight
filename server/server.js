import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ THIS IS THE IMPORTANT PART:
const corsOptions = {
  origin: "*", // or use ["http://localhost:3000", "https://your-netlify-site.netlify.app"]
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // 👈 handle preflight requests
// END OF CORS

app.use(express.json());

// 👇 Google GenAI Setup
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// 👇 Your Routes
app.post("/get-ingredients", async (req, res) => {
  const { recipe } = req.body;

  if (!recipe) {
    return res.status(400).json({ error: "Recipe name is required." });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate ingredients for ${recipe} with measurements in grams and liters. Don't give any notices or extras.`,
    });

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

// 👇 PORT for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
