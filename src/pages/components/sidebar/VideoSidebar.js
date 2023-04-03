import React, { useState } from 'react'
import "./videoSidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import { red } from '@mui/material/colors';

function VideoSidebar({likes, messages, shares, bookmark}) {
  const [liked, setLiked] = useState(false)
  
  function handleLike() {
    setLiked(!liked)
  }
  
  return (
    <div className='videoSidebar'>
      <div 
        className='videoSidebar__options'
        onClick={handleLike}
      >
        {liked ? <FavoriteIcon fontSize='large' sx={{ color: red[500]}} /> : <FavoriteIcon fontSize='large' />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className='videoSidebar__options'>
        <ChatIcon fontSize='large' />
        <p>{messages}</p>
      </div>

      <div className='videoSidebar__options'>
        <BookmarkIcon fontSize='large' />
        <p>{bookmark}</p>
      </div>

      <div className='videoSidebar__options '>
        <WhatsAppIcon className='whats' fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar