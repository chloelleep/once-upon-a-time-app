'use client'
import React from 'react'
import TextEditor from './_components/TextEditor'
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaDownload, FaFolderOpen, FaPortrait } from "react-icons/fa";
import styled from "styled-components";
import Link from 'next/link'
//import { upload } from 'upload';
//import Uploady from "@rpldy/uploady";
//import UploadButton from "@rpldy/upload-button";

//const App = () => (<Uploady
    //destination={{ url: "http://localhost:3000/authoring" }}>
  //  <UploadButton/>
//</Uploady>);
type Props = {}

const AuthoringPage = (props: Props) => {
  return (
    <div>
      <Link href="/">
        <Button><FaArrowLeft/></Button>
      </Link>
    <Button><FaDownload/></Button>
    <Button><FaFolderOpen/></Button>
    <Button><FaPortrait/></Button>
    
    <TextEditor></TextEditor>    
    
    </div>
    
  )
}
//    
export default AuthoringPage