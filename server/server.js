// server.js
import express from "express";
import cors from "cors";
import { OpenAI } from "openai";

const KEY = ""

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || KEY });

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const completion = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages,
		});

    res.json({ response: completion.choices[0].message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

