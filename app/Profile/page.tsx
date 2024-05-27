"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import NavBar from "./_component/NavBar";
import { useRouter } from "next/navigation";

type Props = {};

type StoryType = {
  name: string;
  filesource: string;
  storyUrl: string;
};

const DemoPage = (props: Props) => {
  const storyDataBox = Array(10).fill(0);
  const router = useRouter();

  const StoryFiles = [
    {
      name: "Three Little Pigs",
      filesource: "/9ed53026f3c86535be9b9e36efc6a123.jpg",
      storyUrl: "/ThreeLittlePigs.html",
    },
    {
      name: "A wolf's Howl",
      filesource: "/ceccae4a250b2f9f16dd7ee3c90fd05f.jpg",
      storyUrl: "/A wolf's Howl.html",
    },
    {
      name: "Goldilock",
      filesource: "/f3e62d74100ac55b32028b88a63f3d51.jpg",
      storyUrl: "/Goldilocks.html",
    },
    {
      name: "Little Red Riding Hood",
      filesource: "/4f26bcbd1a35e8bdecc61d0a1049eaca.jpg",
      storyUrl: "/Little Red Riding Hood.html",
    },
    {
      name: "Princess and the Frog",
      filesource: "/dcd8feb33bc6b57872b575326a411f62.jpg",
      storyUrl: "/Princess and the Frog.html",
    },
    {
      name: "The Duckling Who Did Not Like Rain",
      filesource: "/bcdc2577fb8311ec7d56e664e96ec868.jpg",
      storyUrl: "/The Duckling who did not like rain.html",
    },
    {
      name: "The Fox and the Giraffe",
      filesource: "/the_giraffe_and_the_fox.aw02.final_lo_res.jpg",
      storyUrl: "/The Fox and the Giraffe.html",
    },
    {
      name: "The Gingerbread Man",
      filesource: "/3bc713a59749b44bfb43c78ea2def8bf.jpg",
      storyUrl: "/The Gingerbread Man.html",
    },
    {
      name: "Tooth Fairy",
      filesource: "/74b3b5007d64eb511f55d7b3c9514b72.jpg",
      storyUrl: "/Tooth Fairy.html",
    },
    {
      name: "Wonky Donkey",
      filesource: "/1270878-565411-35.jpg",
      storyUrl: "/Wonky Donkey.html",
    },
  ];

  const handleOnStoryClick = (story: StoryType) => {
    router.push(`/read/?title=${story.name}&storyUrl=${story.storyUrl}`);
  };

  return (
    <div>
      <NavBar></NavBar>
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
        <div className="flex flex-row gap-10 flex-wrap">
          {StoryFiles.map((story) => {
            return (
              <div className="flex flex-col items-center pt-5 h-[235px] w-[200px] bg-emerald-700 rounded-lg shirnk-0">
                <div className="bg-white h-[150px] w-[150px] rounded-lg shirnk-0">
                  <button onClick={() => handleOnStoryClick(story)}>
                    <img
                      src={story.filesource}
                      alt={story.name}
                      className="object-cover h-[150px] w-[150px] rounded-lg text-center "
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
        </div>
      </div>
    </div>
  );
};
export default DemoPage;
