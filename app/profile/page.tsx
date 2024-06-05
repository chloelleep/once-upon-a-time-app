"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";

type Props = {};

type StoryType = {
  name: string;
  filesource: string;
  storyUrl: string;
};

const DemoPage = (props: Props) => {
  const storyDataBox = Array(3).fill(0);
  const router = useRouter();
  const linkthing = ("/authoring");

  const StoryFiles = [
    {
      name: "The Brave Little Rabbit",
      filesource: "/braveRabbit.png",
      storyUrl: "/braveRabbit.html",
    },
    {
      name: "The Magic Paintbrush",
      filesource: "/magicBrush.webp",
      storyUrl: "/magicBrush.html",
    },
    {
      name: "The Lost Star",
      filesource: "/05365986-aaa4-46a6-9f08-7a9592e01c82.jpg",
      storyUrl: "/lostStar.html",
    },
  ];

  const handleOnStoryClick = (story: StoryType) => {
    router.push(`/read/?title=${story.name}&storyUrl=${story.storyUrl}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 pt-12">    
      <img
        src={"pfp.jpg"}
        alt={"My Profile"}
        className="object-cover h-[250px] w-[250px] rounded-full mx-auto mb-4 shadow-lg"
      />
      <div className="text-center mb-10">
        <h1 className="text-2x1 font-bold text-gray-800">Bluey's Profile</h1>
      </div>
      <div className="flex flex-wrap gap-10 mt-8 justify-center">
          {StoryFiles.map((story) => {
            return (
              <div className="flex flex-col items-center pt-5 h-[235px] w-[200px] bg-green-700 rounded-lg shirnk-0">
                <div className="bg-white h-[150px] w-[150px] rounded-lg">
                  <button onClick={() => handleOnStoryClick(story)}>
                    <img
                      src={story.filesource}
                      alt={story.name}
                      className="object-cover h-[150px] w-[150px] rounded-lg"
                    />
                    <span
                      style={{
                        color: "white",
                        marginTop: "10px",
                        textAlign: "center",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {story.name}
                    </span>
                  </button>
                </div>
              </div>
            );
            })}
            <div className="flex flex-col items-center pt-5 h-[235px] w-[200px] bg-green-700 rounded-lg shirnk-0">
                <div className="bg-white h-[150px] w-[150px] rounded-lg">
                  <button onClick={() => router.push('/authoring') }>
                    <img
                      src={"plus icon.png"}
                      alt={"plus icon"}
                      className="object-cover h-[150px] w-[150px] rounded-lg"
                      
                    />
                    <span
                      style={{
                        color: "white",
                        marginTop: "10px",
                        textAlign: "center",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {"Add a new story..."}
                    </span>
                  </button>
                </div>
              </div>
        </div>     
    </div>
    );
};
export default DemoPage;
/*
bg-green-700 p-5 rounded-lg shadow-lg max-w-md w-full text-center
<div className="p-5 rounded-lg shadow-lg max-w-md w-full text-center mb-8">
      </div>
<div className="flex flex-col items-center pt-6 h-[200px] w-[200px] bg-green-700 rounded-lg shirnk-0">
        <img
            src={"pfp.jpg"}
            alt={"My Profile"}
            className="object-cover h-[150px] w-[150px] rounded-lg text-center"
        />
    </div>
flex flex-col items-center pt-5 h-[235px] w-[200px] bg-emerald-700 rounded-lg shirnk-0
<div className="h-[200px] w-[200px]">
                <div className="h-screen w-screen flex items-center justify-center">
                  <button onClick={() => router.push('') }>
                    <img
                      src={"pfp.jpg"}
                      alt={"My Profile"}
                      className="w-15 h-15 mx-auto"
                    />
                    <span
                      style={{
                        color: "Black",
                        marginTop: "10px",
                        textAlign: "center",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {"My story"}
                    </span>
                  </button>
                </div>
              </div>
        <div className="w-full h-screen p-24">
        <Link href="/authoring">
          <Button
            className="mb-10 bg-emerald-700"
            style={{ fontSize: "24px", padding: "25px 24px" }}
          >
            {"New Story"}
          </Button>
        </Link>
        <h2
          className="mb-4 text-lg text-emerald-800"
          style={{ fontSize: "24px" }}
        >
          You might want to try...
        </h2>
        <div className="flex flex-wrap gap-10">
          {StoryFiles.map((story) => {
            return (
              <div className="flex flex-col items-center pt-5 h-[235px] w-[200px] bg-emerald-700 rounded-lg shirnk-0">
                <div className="bg-white h-[150px] w-[150px] rounded-lg shirnk-0">
                  <button onClick={() => handleOnStoryClick(story)}>
                    <img
                      src={story.filesource}
                      alt={story.name}
                      className="object-cover h-[150px] w-[150px] rounded-lg"
                    />
                    <span
                      style={{
                        color: "white",
                        marginTop: "10px",
                        textAlign: "center",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {story.name}
                    </span>
                  </button>
                </div>
              </div>
            );
            })}
            <div className="flex flex-col items-center pt-5 h-[235px] w-[200px] bg-emerald-700 rounded-lg shirnk-0">
                <div className="bg-white h-[150px] w-[150px] rounded-lg shirnk-0">
                  <button onClick={() => router.push('/authoring') }>
                    <img
                      src={"plus icon.png"}
                      alt={"plus icon"}
                      className="object-cover h-[150px] w-[150px] rounded-lg"
                      
                    />
                    <span
                      style={{
                        color: "white",
                        marginTop: "10px",
                        textAlign: "center",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {"add a new story"}
                    </span>
                  </button>
                </div>
              </div>
        </div>        
        </div>
        
    </div>
);
*/
