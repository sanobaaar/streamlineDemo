import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import DemoContext from "./utils/DemoContextProvider"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  //accept videoID to play from the player
  let [video, setVideo] = useState(null)

  useEffect(() => {
    changeVideo()
  }, [])

  const changeVideo = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const videoId = form.elements.videoId.value

      const response = await axios.get("http://localhost:3003/")
      setVideo(videoId)

      console.log(video)
    } catch (error) {
      console.log(error)
    }
  }

  const store = {
    video,
    changeVideo,
  }

  return (
    <DemoContext.Provider value={store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DemoContext.Provider>
  )
}

export default App
