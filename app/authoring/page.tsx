"use client";
import React from "react";
import TextEditor from "./_components/TextEditor";
import { Button } from "@/components/ui/button";
import ImageToolboxDialog from './_components/Toolbox';
import { useState } from "react";

import {
  FaArrowLeft,
  FaDownload,
  FaFolderOpen,
  FaPortrait,
  FaPencilAlt,
  FaTools
} from "react-icons/fa";
//import styled from "styled-components";
import Link from "next/link";
//import { upload } from 'upload';
//import Uploady from "@rpldy/uploady";
//import UploadButton from "@rpldy/upload-button";

//const App = () => (<Uploady
//destination={{ url: "http://localhost:3000/authoring" }}>
//  <UploadButton/>
//</Uploady>);

type Props = {};

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

  return (
    <div className="flex flex-col w-full h-screen items-center p-10">
      <div className="flex flex-row gap-4">
        <Link href="/">
          <Button>
            <FaArrowLeft />
          </Button>
        </Link>
        <Button>
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
          <Button onClick={handleOpenToolbox}>
          <FaTools />
        </Button>         
      </div>
      <div className="h-full w-[80vw] m-10 border-2 rounded-lg py-10">
        <TextEditor></TextEditor>
      </div>
      <ImageToolboxDialog
        images={images}
        open={toolboxOpen}
        onClose={handleCloseToolbox}
        onSelectImage={handleSelectImage}
      />
    </div>
  );
};
//
export default AuthoringPage;
