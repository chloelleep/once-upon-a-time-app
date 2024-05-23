import React from 'react'
import NavBar from './_component/NavBar'
import DisplayStory from './_component/DisplayStory';

type Props = {}

const DemoPage = (props: Props) => {
    const dummyData = Array(5).fill(0);
    const dummyStoryFiles = [
        {
            name: "Three Littleb Pigs",
            filesource: "/demo.html"
        },
        {
            name: "demo story",
            filesource: "/demo.html"
        },
        {
            name: "demo story",
            filesource: "/demo.html"
        },
        {
            name: "demo story",
            filesource: "/demo.html"
        }
    ]

  return (
    <div>
        <NavBar></NavBar>
        <div className="bg-emerald-200 w-full h-screen p-24">
            
            <h2 className="text-lg">
                You might want to try
            </h2>
            <div className="flex flex-row gap-10 flex-wrap">
                {
                dummyStoryFiles.map((story) => {
                    return <div className="flex flex-col items-center pt-5 h-[200px] w-[200px] bg-black rounded-lg shirnk-0">
                        <div className="bg-white h-[150px] w-[150px]">
                            <DisplayStory filename={story.filesource} />
                        </div>
                        
                    </div>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default DemoPage