import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

import db from "./config/firebase";
import Video from "./pages/Video";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  let maxHeight
  if(window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }
  
  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__videos">
        {videos.map((item, index) => {
          return (
            <Video
              key={index}
              likes={item.likes}
              messages={item.messages}
              bookmark={item.bookmark}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
