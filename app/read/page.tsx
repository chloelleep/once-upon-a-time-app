"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

type Props = {};

const ReadPage = (props: Props) => {
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
    <Suspense>
      <>
        <div className="h-60[px] w-full flex flex-row items-center px-6 bg-green-200">
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
          <main className="w-full h-[90vh] px-48 pt-4 pb-24 bg-green-200">
            <Link href="/home">
              <Button className="bg-emerald-900 my-2">
                <ArrowLeft />
              </Button>
            </Link>
            <div className="w-full h-full border-2 rounded-2xl relative p-4 overflow-hidden bg-white">
              <h1 className="text-center text-2xl">{title}</h1>
              <iframe
                title={title}
                className="text-xl h-full w-full"
                src={storyUrl}
              ></iframe>
            </div>
          </main>
        )}
      </>
    </Suspense>
  );
};

export default ReadPage;
