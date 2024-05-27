"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface MessageProps {
  text: string;
  from: string;
  key: number;
}

enum Creator {
  Me = "Me",
  Bot = "Helper",
}

const ChatInput: React.FC<{
  onSend: (input: string) => void;
  disabled: boolean;
}> = ({ onSend, disabled }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        placeholder="Ask ChatGPT a question..."
        style={{
          padding: "10px",
          fontSize: "16px",
          borderColor: "grey",
          borderRadius: "5px",
          width: "100%",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
};

const ChatMessage: React.FC<{ text: string; from: string }> = ({
  text,
  from,
}) => {
  const colorStyles = from === "Me" ? "ml-auto text-sky-700" : "";
  return (
    <div
      className={`${colorStyles} p-4 bg-slate-200 rounded-2xl w-fit min-w-[50px]`}
    >
      <h3 className="text-xl">
        <strong>{from}</strong>
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default function Chat() {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);
  const messageRef = useRef<MessageProps[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_apiKey;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  useEffect(() => {
    messageRef.current = messages;
  }, [messages]);

  const callApi = async (input: string) => {
    setLoading(true);

    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime(),
    };

    setMessages([...messageRef.current, myMessage]);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          max_tokens: 150,
          temperature: 0.7,
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        }),
      });
      const data = await response.json();
      setLoading(false);

      if (data.choices && data.choices.length > 0) {
        const botMessage: MessageProps = {
          text: data.choices[0].message.content.trim(),
          from: Creator.Bot,
          key: new Date().getTime(),
        };
        setMessages([...messageRef.current, botMessage]);
      } else {
        console.error("No response from API");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
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
      <main className="relative max-w-2xl mx-auto">
        <div className="sticky top-0 w-full p-5 px-4 bg-white">
          <h1
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
              borderBottom: "3px solid",
            }}
          >
            AI Writing Tool
          </h1>
          <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
        </div>

        <div className="flex flex-col h-[600px] my-10 px-4 gap-4 overflow-y-scroll">
          {messages.map((msg: MessageProps) => (
            <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
          ))}
          {messages.length === 0 && (
            <p className="text-center text-gray-400">I am at your service</p>
          )}
        </div>

        <Link href="/authoring">
          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "20%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <button
              style={{
                padding: "6px 12px",
                fontSize: "14px",
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "bold",
                borderRadius: "14px",
                border: "1px solid black",
              }}
            >
              Back to Authoring
            </button>
          </div>
        </Link>

        <Link href="/ai-image">
          <div
            style={{
              position: "fixed",
              right: 0,
              bottom: 0,
              width: "20%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <button
              style={{
                padding: "6px 12px",
                fontSize: "14px",
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "bold",
                borderRadius: "14px",
                border: "1px solid black",
              }}
            >
              Generate Images Option
            </button>
          </div>
        </Link>
      </main>
    </>
  );
}
