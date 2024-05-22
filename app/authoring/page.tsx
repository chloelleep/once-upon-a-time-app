'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import ImageToolboxDialog from './_components/Toolbox';

import {
  FaArrowLeft,
  FaDownload,
  FaFolderOpen,
  FaPortrait,
  FaPencilAlt,
  FaTools,
  FaImages
} from "react-icons/fa";
//import styled from "styled-components";
//import { upload } from 'upload';
//import Uploady from "@rpldy/uploady";
//import UploadButton from "@rpldy/upload-button";

//const App = () => (<Uploady
//destination={{ url: "http://localhost:3000/authoring" }}>
//  <UploadButton/>
//</Uploady>);

import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView, lightDefaultTheme } from '@blocknote/mantine';
import "@blocknote/mantine/style.css";
import { Block} from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";

type Props = {}

const AuthoringPage = (props: Props) => {
  const [toolboxOpen, setToolboxOpen] = useState(false);

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
    //rain
    { imageUrl: 'https://laotiantimes.com/wp-content/uploads/2016/08/rainjpeg.jpg', soundUrl: 'https://cdn.pixabay.com/download/audio/2024/05/14/audio_ec8f1e52ad.mp3?filename=heavy-rain-on-steel-roof-208929.mp3' },
    //duck
    { imageUrl: 'https://th.bing.com/th/id/OIP.UGUgWT7EvzusNcTl-aKKvwHaE8?rs=1&pid=ImgDetMain', soundUrl: 'https://cdn.pixabay.com/audio/2022/03/10/audio_5adfa08633.mp3' },
    //cat
    { imageUrl: 'https://th.bing.com/th/id/R.1d8b77786649f352eca392ca48f348d6?rik=6AlDF0gCYhA0nQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fCute-Baby-Animal-Photo-Free-Download.jpg&ehk=0iddreAFFy0Gw6IM6zCsZ1orEWRLt72nnqUnu6831pA%3d&risl=&pid=ImgRaw&r=0', soundUrl:'https://pixabay.com/sound-effects/cat-98721/' }
  ];



  // Declare hooks inside the functional component
  const [html, setHTML] = useState<string>('');

  // Creates a new editor instance with some initial content.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: 'paragraph',
        content: [
          'Hello, ',
          {
            type: 'text',
            text: 'world!',
            styles: {
              bold: true,
            },
          },
        ],
      },
    ],
  });

  const onChange = async () => {
    // Converts the editor's contents from Block objects to HTML and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHTML(html);
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
  <div className="flex flex-row gap-4">
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
    <Button>
      <FaFolderOpen />
    </Button>
    <Button>
      <FaPortrait />
    </Button>
    <Link href="/Api">
      <Button>
        <FaPencilAlt />
      </Button>
    </Link>
    <Link href="/Image">
      <Button>
        <FaImages />
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
      saveToStorage(editor.document);
    }}
/>
  </div>
  
</div>
  );
};
//<Button type="button" onClick={handleClick}><FaDownload /></Button>
export default AuthoringPage;

