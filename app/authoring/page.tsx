'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import ImageToolboxDialog from './_components/Toolbox';
import {
  FaArrowLeft,
  FaDownload,
  FaFolderOpen,
  FaPortrait,
  FaPencilAlt,
  FaTools
} from "react-icons/fa";
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView, lightDefaultTheme } from '@blocknote/mantine';
import "@blocknote/mantine/style.css";
import { Block} from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
<<<<<<< HEAD
import Chat from '../Api/page';
=======
import { stringify } from 'querystring';
>>>>>>> 6376e624c53bcff34997a49087325b6b4f58fc03

type Props = {}

const AuthoringPage: React.FC<Props> = (props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | undefined>();

  const handleFolderOpenClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [toolboxOpen, setToolboxOpen] = useState(false);
  const [showChatDialog, setShowChatDialog ] = useState(false);

  const onChatButtonClick = () => {
    setShowChatDialog(true);
  }

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
    { imageUrl: 'https://laotiantimes.com/wp-content/uploads/2016/08/rainjpeg.jpg', soundUrl: 'https://www.epidemicsound.com/track/D8n3lMZZQH/' },
    { imageUrl: 'https://th.bing.com/th/id/OIP.UGUgWT7EvzusNcTl-aKKvwHaE8?rs=1&pid=ImgDetMain', soundUrl: 'https://pixabay.com/sound-effects/075176-duck-quack-40345/' },
    { imageUrl: 'https://th.bing.com/th/id/R.1d8b77786649f352eca392ca48f348d6?rik=6AlDF0gCYhA0nQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fCute-Baby-Animal-Photo-Free-Download.jpg&ehk=0iddreAFFy0Gw6IM6zCsZ1orEWRLt72nnqUnu6831pA%3d&risl=&pid=ImgRaw&r=0', soundUrl:'https://pixabay.com/sound-effects/cat-98721/' }
  ];

  // Declare hooks inside the functional component
  const [html, setHTML] = useState<string>('');

  // Creates a new editor instance with some initial content.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: 'paragraph',
        content: [],
      },
    ],
  });

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
    const blob = new Blob([html], { type: 'text/html' });

    // Create a temporary link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'document.html';

    // Create a URL for the blob
    link.href = URL.createObjectURL(blob);

    // Append the link to the body (this is necessary for the link to work in Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  async function saveToStorage(jsonBlocks: Block[]) {
    // Save contents to local storage. You might want to debounce this or replace
    // with a call to your API / database.
    localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
  }
  return (<div className="flex flex-col w-full h-screen items-center p-10">
  <div className="flex flex-row gap-4"onClick={() => setShowChatDialog(false)}>
    <Link href="/">
      <Button>
        <FaArrowLeft />
      </Button>
    </Link>
    <Button onClick={handleOpenToolbox}>
      <FaTools />
    </Button>
    <Button type="button" onClick={handleClick}>
      <FaDownload />
    </Button>
    <Button onClick={handleFolderOpenClick}>
      <FaFolderOpen />
        <input
          type="file"
          name="textfile"
          style={{ display: 'none' }}
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
        <FaPencilAlt />
      </Button>
    </Link>
  </div>
  
  <ImageToolboxDialog
    images={images}
    open={toolboxOpen}
    onClose={handleCloseToolbox}
    onSelectImage={handleSelectImage}
  />
  <div className="w-full h-full border-2 rounded-lg m-5">
    <BlockNoteView
    theme={lightDefaultTheme}
    className="w-full py-6"
    editor={editor}
    onChange={() => {
      //saveToStorage(editor.document);
      localStorage.setItem("editorContent", JSON.stringify(editor.document));
    }}
/>
  </div>
  <Button className="z-[999] float-right" onClick={() => onChatButtonClick()}>
    AI Chat
  </Button>
  {
    showChatDialog &&
    <div className="w-[400px] h-[50vh] bg-slate-100 z-[999] absolute top-[25vh] left-[50vw] rounded-xl">
      <Chat />
    </div>
  }
  
</div>
  );
};
//<Button type="button" onClick={handleClick}><FaDownload /></Button>
export default AuthoringPage;