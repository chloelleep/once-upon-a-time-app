'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaDownload, FaFolderOpen, FaPortrait } from "react-icons/fa";
import { useCreateBlockNote } from '@blocknote/react';
import TextEditor from './_components/TextEditor';

type Props = {}

const AuthoringPage = (props: Props) => {
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
    <div>
      <Link href="/">
        <Button><FaArrowLeft /></Button>
      </Link>
      
      <Button type="button" onClick={handleClick}><FaDownload /></Button>
      <Button><FaFolderOpen /></Button>
      <Button><FaPortrait /></Button>

      <TextEditor />
    </div>
  );
};

export default AuthoringPage;

