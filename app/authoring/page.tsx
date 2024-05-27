"use client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageToolboxDialog from "./_components/Toolbox";
import {
  FaArrowLeft,
  FaDownload,
  FaFolderOpen,
  FaPortrait,
  FaRobot,
  FaPencilAlt,
  FaTools,
  FaImages,
} from "react-icons/fa";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView, lightDefaultTheme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Block, PartialBlock, BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import Chat from "../Api/page";
import { stringify } from "querystring";
import { ArrowRight } from "lucide-react";

type Props = {};

const AuthoringPage: React.FC<Props> = (props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | undefined>();

  const handleFolderOpenClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [toolboxOpen, setToolboxOpen] = useState(false);
  const [showChatDialog, setShowChatDialog] = useState(false);

  const onChatButtonClick = () => {
    setShowChatDialog(true);
  };

  const handleOpenToolbox = () => {
    setToolboxOpen(true);
  };

  const handleCloseToolbox = () => {
    setToolboxOpen(false);
  };

  const handleSelectImage = (image: string) => {
    console.log("Selected image:", image);
    // You can add logic here to handle the selected image
  };

  const images = [
    {
      imageUrl:
        "https://laotiantimes.com/wp-content/uploads/2016/08/rainjpeg.jpg",
      soundUrl:
        "https://cdn.pixabay.com/download/audio/2024/05/14/audio_ec8f1e52ad.mp3?filename=heavy-rain-on-steel-roof-208929.mp3",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.UGUgWT7EvzusNcTl-aKKvwHaE8?rs=1&pid=ImgDetMain",
      soundUrl: "https://cdn.pixabay.com/audio/2022/03/10/audio_5adfa08633.mp3",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/R.1d8b77786649f352eca392ca48f348d6?rik=6AlDF0gCYhA0nQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fCute-Baby-Animal-Photo-Free-Download.jpg&ehk=0iddreAFFy0Gw6IM6zCsZ1orEWRLt72nnqUnu6831pA%3d&risl=&pid=ImgRaw&r=0",
      soundUrl: "https://cdn.pixabay.com/audio/2022/03/21/audio_9fd39ce300.mp3",
    },
  ];

  // Declare hooks inside the functional component
  const [html, setHTML] = useState<string>("");

  async function saveToStorage(jsonBlocks: Block[]) {
    // Save contents to local storage. You might want to debounce this or replace
    // with a call to your API / database.
    localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
  }

  async function loadFromStorage() {
    // Gets the previously stored editor contents.
    const storageString = localStorage.getItem("editorContent");
    return storageString
      ? (JSON.parse(storageString) as PartialBlock[])
      : undefined;
  }

  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | "loading"
  >("loading");

  useEffect(() => {
    loadFromStorage().then((content) => {
      setInitialContent(content);
    });
  }, []);

  // Creates a new editor instance with some initial content.
  const editor = useMemo(() => {
    if (initialContent === "loading") {
      return undefined;
    }
    return BlockNoteEditor.create({ initialContent });
  }, [initialContent]);

  if (editor === undefined) {
    return "Loading content...";
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const htmlContent = e.target?.result as string;
        const blocks = await editor.tryParseHTMLToBlocks(htmlContent);
        editor.replaceBlocks(editor.document, blocks);
      };
      reader.readAsText(file);
    }
  };

  const handleClick = async () => {
    // Convert BlockNote content into HTML
    const html = await editor.blocksToHTMLLossy(editor.document);

    // Create a blob from the HTML content
    const blob = new Blob([html], { type: "text/html" });

    // Create a temporary link element
    const link = document.createElement("a");

    // Set the download attribute with a filename
    link.download = "document.html";

    // Create a URL for the blob
    link.href = URL.createObjectURL(blob);

    // Append the link to the body (this is necessary for the link to work in Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col w-full h-screen items-center p-10">
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
      <div className="flex flex-row gap-4">
        <Link href="/">
          <Button>
            <FaArrowLeft />
          </Button>
        </Link>
        <Button onClick={handleOpenToolbox}>
          <FaPencilAlt />
        </Button>
        <Button type="button" onClick={handleClick}>
          <FaDownload />
        </Button>
        <Button onClick={handleFolderOpenClick}>
          <FaFolderOpen />
          <input
            type="file"
            name="textfile"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </Button>
        <Link href="/profile">
          <Button>
            <FaPortrait />
          </Button>
        </Link>
        <Link href="/Api">
          <Button>
            <FaRobot/>
          </Button>
        </Link>
      </div>

      <ImageToolboxDialog
        images={images}
        open={toolboxOpen}
        onClose={handleCloseToolbox}
        onSelectImage={handleSelectImage}
      />
      <div className="w-[90vw] h-full border-2 rounded-lg m-5">
        <BlockNoteView
          theme={lightDefaultTheme}
          className="w-full py-6"
          editor={editor}
          onChange={() => {
            saveToStorage(editor.document);
            //loadFromStorage();
            localStorage.setItem(
              "editorContent",
              JSON.stringify(editor.document)
            );
          }}
        />
      </div>
      <Button
        className="z-[999] float-right mb-6"
        onClick={() => onChatButtonClick()}
      >
        AI Chat
      </Button>
      {showChatDialog && (
        <div className="w-full h-screen flex flex-col items-center justify-center z-[99999] fixed">
          <div className="w-[400px] h-[500px] relative rounded-xl border-2 overflow-x-scroll">
            <Chat />
          </div>
          <Button
            className="relative bottom-20"
            onClick={() => setShowChatDialog(false)}
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
};
export default AuthoringPage;
