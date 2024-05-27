"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

type Props = {};

export const ReadPage = (props: Props) => {
  const params = useSearchParams(); // <-- passed data's in here
  const title = params.get("title");
  const storyUrl = params.get("storyUrl");

  const [content, setContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const iframeRef = useRef(null);

  useEffect(() => {
    const fetchContent = async () => {
      if (storyUrl) {
        const response = await fetch(storyUrl);
        const data = await response.text();
        setContent(data);
      }
    };
    fetchContent();
  }, [storyUrl]);

  useEffect(() => {
    if (content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const text = doc.body.innerText;
      const words = text.split(" ");
      const wordsPerPage = 200; // Adjust the number of words per page
      const numberOfPages = Math.ceil(words.length / wordsPerPage);

      setTotalPages(numberOfPages);
    }
  }, [content]);

  const renderPage = () => {
    if (!content) return "";

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const text = doc.body.innerText;
    const words = text.split(" ");
    const wordsPerPage = 200; // Adjust the number of words per page
    const start = (currentPage - 1) * wordsPerPage;
    const end = start + wordsPerPage;
    const pageContent = words.slice(start, end).join(" ");

    return pageContent;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
      {title && storyUrl && (
        <main className="w-full h-screen px-48 pt-10 pb-24">
          <Link href="/profile">
            <Button className="bg-emerald-900 my-2">
              <ArrowLeft />
            </Button>
          </Link>
          <div className="w-full h-full border-2 rounded-2xl relative overflow-y-scroll p-4">
            <div
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: renderPage() }}
            ></div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-200 p-2 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-200 p-2 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ReadPage;
