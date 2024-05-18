"use client";
import React from "react";
import TextEditor from "./_components/TextEditor";
import { Button } from "@/components/ui/button";
import {
  FaArrowLeft,
  FaDownload,
  FaFolderOpen,
  FaPortrait,
} from "react-icons/fa";
import styled from "styled-components";
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
      </div>
      <div className="h-full w-[80vw] m-10 border-2 rounded-lg py-10">
        <TextEditor></TextEditor>
      </div>
    </div>
  );
};
//
export default AuthoringPage;
