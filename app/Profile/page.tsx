import React from 'react'
import NavBar from './_component/NavBar'
import DisplayStory from './_component/DisplayStory';
import { Button } from '@/components/ui/button';
import Link from 'next/dist/client/link';

type Props = {}

const DemoPage = (props: Props) => {
    const dummyData = Array(10).fill(0);
    const dummyStoryFiles = [
        {
            name: "Three Little Pigs",
            filesource: "/9ed53026f3c86535be9b9e36efc6a123.jpg"

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
        <div className="bg-green-100 w-full h-screen p-24">
        
      <Link href="/authoring">
          <Button className="mb-4 bg-green-800">{"New Story"}</Button>
        </Link>
            <h2 className="mb-4 text-lg text-green 800">
                You might want to try...
            </h2>
            <div className="flex flex-row gap-10 flex-wrap">
                {
                dummyStoryFiles.map((story) => {
                    return <div className="flex flex-col items-center pt-5 h-[200px] w-[200px] bg-green-800 rounded-lg shirnk-0">
                        <div className="bg-white h-[150px] w-[150px] rounded-lg shirnk-0">
                            <Link href='/authoring'>
                                <img src={story.filesource} alt={story.name} className="object-cover h-[150px] w-[150px] rounded-lg" />
                            </Link>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    </div>
  )
}
//<img src="9ed53026f3c86535be9b9e36efc6a123.jpg"></img>
export default DemoPage