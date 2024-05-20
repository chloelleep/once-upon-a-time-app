'use client'
import { useState } from "react";
import OpenAI from "openai";
import "./app.css";
import Link from 'next/link'

function Image() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState('');
    /*const openai = new OpenAI({
        apiKey: process.env.API_KEY, 
      });
    const generateImage = async () => {
        const res = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
          });
          console.log( res.data[0].url);

    };*/
    return (
        <div  className="app-main">
            <h2>Generate an Image For Your Story</h2>
            <input className="app-input"
            placeholder="Type something to generate a picture"
            onChange={(e) => setPrompt(e.target.value)}
            />
            <button /*onClick={generateImage}*/>Generate An Image</button>
            <Link href="/Api">
                <div style={{ position: 'fixed', right: 0, bottom: 0, width: '15%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px' }}>
                    <button style={{ padding: '6px 12px', fontSize: '12px', backgroundColor: 'transparent', color: 'black', fontWeight: 'bold', borderRadius: '14px', border: '1px solid black' }}>Back to AI Writing tool</button>
                </div>
             </Link>
            <Link href="/authoring">
                <div style={{ position: 'fixed', left: 0, bottom: 0, width: '15%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px' }}>
                   <button style={{ padding: '6px 12px', fontSize: '12px', backgroundColor: 'transparent', color: 'black', fontWeight: 'bold', borderRadius: '14px', border: '1px solid black' }}>Back To Authoring</button>
                </div>
    </Link>

            {result.length >0 ? <img className="result-image" src={result|| ""} alt="result" /> : <></>}
        </div>
    )
}

export default Image;