"use client";
import Link from "next/link";
import OpenAI from "openai";
import { useState } from "react";
import "./app.css";

function Image() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    dangerouslyAllowBrowser: true,
  });

  const generateImage = async () => {
    setIsLoading(true);
    const res = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    console.log(res.data[0].url);
    setResult(res.data[0].url);
    setIsLoading(false);
  };
  return (
    <>
      <div className="h-60[px] w-full flex flex-row items-center px-6">
        <section className="flex flex-row items-center gap-2">
          <img
            src="/storybook.webp"
            alt="storybook image"
            className="h-[60px]"
          />
          <h1 className="text-xl text-emerald-600"> Once Upon a Time</h1>
        </section>
      </div>
      <div className="app-main">
        <h2>Generate an Image For Your Story</h2>
        <input
          className="app-input"
          placeholder="Type something to generate a picture"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={generateImage}>Generate An Image</button>
        {isLoading && <p>Loading image...</p>}
        {result && (
          <img
            className="result-image w-[50vw]"
            src={result || ""}
            alt="result"
          />
        )}
        <Link href="/ai-api">
          <div
            style={{
              position: "fixed",
              right: 0,
              bottom: 0,
              width: "15%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <button
              style={{
                padding: "6px 12px",
                fontSize: "12px",
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "bold",
                borderRadius: "14px",
                border: "1px solid black",
              }}
            >
              Back to AI Writing tool
            </button>
          </div>
        </Link>
        <Link href="/authoring">
          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "15%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <button
              style={{
                padding: "6px 12px",
                fontSize: "12px",
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "bold",
                borderRadius: "14px",
                border: "1px solid black",
              }}
            >
              Back To Authoring
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Image;
