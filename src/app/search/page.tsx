"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function StockAnalysisPage() {
  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

const handleAnalyze = async () => {
  if (!question.trim()) {
    setError("Please enter a question about a stock, sector, or market trend.");
    return;
  }

  setLoading(true);
  setError("");
  setResult("");

  try {
    const response = await axios.post<{
      question: string;
      result: string;
      status: string;
    }>(
      "https://indian-stock-analysis-977121587860.asia-south1.run.app/analyze-stock",
      { question }
    );

    console.log("API Response:", response.data);
    setResult(response.data.result || "No analysis available for this query.");
  } catch (err) {
    console.error(err);
    setError("Failed to fetch stock analysis. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <VantaFog />
      <div className="max-w-5xl mx-auto p-6 mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          Ask the <AuroraText>Stock Market Expert</AuroraText>
        </h1>
        <p className="text-gray-600">
          Get instant, AI-powered insights about Indian stocks, sectors, and market trends — in English or Hindi — using real-time data and expert analysis.
        </p>

        {/* Input Field */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="p-4 border rounded-md"
            placeholder='Example: "Tell me about Reliance stock"'
          />
        </div>

        {/* Analyze Button */}
        <RainbowButton
          variant="outline"
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Get Stock Analysis"}
        </RainbowButton>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Display Results */}
        {result && (
          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold">📊 Analysis</h2>
            <div className="border p-4 rounded-md shadow-sm bg-white whitespace-pre-wrap">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
