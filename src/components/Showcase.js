import Input from "./Input"
import DemoContext from "../utils/DemoContextProvider"
import { useContext } from "react"

function Showcase() {
  const { video } = useContext(DemoContext)
  console.log(video)

  return (
    <>
      <div className="bg">
        {/* video tag does not support URL embedding 
         <h2 className="title">Watch your favourite videos</h2> 
        <video controls="true">
          <source src="https://www.youtube.com/watch?v=ckiaNqOrG5U" type="video/mp4" />
        </video> */}

        <div style={{ marginTop: "150px", marginLeft: "50px" }}>
          <iframe
            style={{
              position: "fixed",
              height: "70vh",
              border: "15px solid #8da9c4",
              width: "120vh",
              frameBorder: "1",
            }}
            src={`https://www.youtube.com/embed/${video}`} //takes videoID from context passed through useEffect and callback function
            frameBorder="600px"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
        <Input />
      </div>
    </>
  )
}

export default Showcase
