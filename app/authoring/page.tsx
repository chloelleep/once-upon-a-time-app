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
  FaTools
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
    { imageUrl: 'https://laotiantimes.com/wp-content/uploads/2016/08/rainjpeg.jpg', soundUrl: 'https://www.epidemicsound.com/track/D8n3lMZZQH/' },
    { imageUrl: 'https://th.bing.com/th/id/OIP.UGUgWT7EvzusNcTl-aKKvwHaE8?rs=1&pid=ImgDetMain', soundUrl: 'https://pixabay.com/sound-effects/075176-duck-quack-40345/' },
    { imageUrl: 'https://th.bing.com/th/id/R.1d8b77786649f352eca392ca48f348d6?rik=6AlDF0gCYhA0nQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fCute-Baby-Animal-Photo-Free-Download.jpg&ehk=0iddreAFFy0Gw6IM6zCsZ1orEWRLt72nnqUnu6831pA%3d&risl=&pid=ImgRaw&r=0', soundUrl:'https://pixabay.com/sound-effects/cat-98721/' }
  ];



  // Declare hooks inside the functional component
  const [html, setHTML] = useState<string>("");

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

  return (
    <div className="flex flex-col w-full h-screen items-center p-10">
    <div className="flex flex-row gap-4">
      <Link href="/">
        <Button>
          <FaArrowLeft />
        </Button>
      </Link>
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
          <Button onClick={handleOpenToolbox}>
          <FaTools />
        </Button>         
      </div>
      <div className="h-full w-[80vw] m-10 border-2 rounded-lg py-10">
      </div>
      <ImageToolboxDialog
        images={images}
        open={toolboxOpen}
        onClose={handleCloseToolbox}
        onSelectImage={handleSelectImage}
      />
      <Button type="button" onClick={handleClick}><FaDownload /></Button>
      <Button>
        <FaFolderOpen />
      </Button>
      <Button>
        <FaPortrait />
      </Button>

    </div>
  );
};
//<Button type="button" onClick={handleClick}><FaDownload /></Button>
export default AuthoringPage;

