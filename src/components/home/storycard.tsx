import React from 'react'
import { Story } from '@/types/types'

type StoryCardProps = {
    story: Story
}

const StoryCard = ({story}: StoryCardProps) => {
  return (
    <div className="story-card-container">
        <div className="story-card">
            <div className='image'>

            </div>
            <div className='title'><p>{story.title}</p></div>
            <div className='professional-details'>
                <p className='name'>{story.name}</p>
                <p className='profession'>{story.profession}</p>
            </div>
            <div className='story-details'>
                <p className='question'>{story.question}</p>
                <p className='answer'>{story.response}</p>
            </div>
        </div>
    </div>
  )
}

export default StoryCard