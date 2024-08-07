import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  // Create a state variable to store the generated text
  const [generatedText, setGeneratedText] = useState("");
  const [prompt, setPrompt] = useState("");
  // Fetch your API_KEY
  const API_KEY = import.meta.env.VITE_API_KEY;

  const genAI = new GoogleGenerativeAI(API_KEY);
  console.log(API_KEY);
  console.log(genAI);
  
  

  async function run() {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt = "Write a story about a magic backpack.";
    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      console.log(text);
      setGeneratedText(text);
      console.log('success');
      
    } catch(err) {
      console.log('error' + err);
      
    }

  }

  return <div>
    <input type="text" placeholder="Enter prompt here..." onChange={(e) => setPrompt(e.target.value)} value={prompt}/>
    <button onClick={run}>Generate</button>
    <div>
      <h2>Generated Text</h2>
      <p>{generatedText}</p>
    </div>
  </div>;
}

export default App;
