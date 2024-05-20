'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaDownload, FaFolderOpen, FaPortrait } from "react-icons/fa";
import { useCreateBlockNote } from '@blocknote/react';
import TextEditor from './_components/TextEditor';
import { BlockNoteView } from '@blocknote/mantine';
import "@blocknote/mantine/style.css";
import { Block} from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";

type Props = {}

const AuthoringPage = (props: Props) => {
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
  return (
    <div className="flex flex-col w-full h-screen items-center p-10">
    <div className="flex flex-row gap-4">
      <Link href="/">
        <Button>
          <FaArrowLeft />
        </Button>
      </Link>
      <Button type="button" onClick={handleClick}><FaDownload /></Button>
      <Button>
        <FaFolderOpen />
      </Button>
      <Button>
        <FaPortrait />
      </Button>
    </div>
    <div className="h-full w-[80vw] m-10 border-2 rounded-lg py-10">
    <BlockNoteView
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

