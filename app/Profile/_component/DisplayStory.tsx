import React from 'react'

type Props = {
    filename: string
}

const DisplayStory = (props: Props) => {

    const fileSource = props.filename

  return (
    <div>
        <iframe src={fileSource} title="story" />
    </div>
  )
}

export default DisplayStory