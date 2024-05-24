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
            name: "A wolf's Howl",
            filesource: "/ceccae4a250b2f9f16dd7ee3c90fd05f.jpg"
        },
        {
            name: "Goldilock",
            filesource: "/f3e62d74100ac55b32028b88a63f3d51.jpg"
        },
        {
            name: "Little Red Riding Hood",
            filesource: "/4f26bcbd1a35e8bdecc61d0a1049eaca.jpg"
        },
        {
            name: "Princess and the Frog",
            filesource: "/dcd8feb33bc6b57872b575326a411f62.jpg"
        },
        {
            name: "The Duckling Who Did Not Like Rain",
            filesource: "/bcdc2577fb8311ec7d56e664e96ec868.jpg"
        },
        {
            name: "The Fox and the Giraffe",
            filesource: "/the_giraffe_and_the_fox.aw02.final_lo_res.jpg"
        },
        {
            name: "The Gingerbread Man",
            filesource: "/3bc713a59749b44bfb43c78ea2def8bf.jpg"
        },
        {
            name: "Tooth Fairy",
            filesource: "/74b3b5007d64eb511f55d7b3c9514b72.jpg"
        },
        {
            name: "Wonky Donkey",
            filesource: "/1270878-565411-35.jpg"
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
                    return <div className="flex flex-col items-center pt-5 h-[235px] w-[200px] bg-green-800 rounded-lg shirnk-0">
                        <div className="bg-white h-[150px] w-[150px] rounded-lg shirnk-0">
                            <Link href='/authoring'>
                                <img src={story.filesource} alt={story.name} className="object-cover h-[150px] w-[150px] rounded-lg text-center " />
                                <span style={{ color: 'white', marginTop: '10px', textAlign: 'center' , display: 'block', width: '100%'}}>
                                        {story.name}
                                    </span>
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