import { useContext, useState } from "react"
import { Row } from "react-bootstrap"
import { FaThumbsUp, FaThumbsDown, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import DemoContext from "../utils/DemoContextProvider"

function OneThumb() {
  let [like, setLike] = useState(false)
  let [dislike, setDislike] = useState(false)
  const { video } = useContext(DemoContext)
  console.log(video)

  //   if (video === null) <h3>Please enter Video ID to preview</h3>

  console.log(like)

  return (
    <>
      <Row>
        <h3
          style={{
            display: "flex",
            justifyItems: "left",
            maxWidth: "1300px",
            justifyContent: "space-evenly",
            paddingLeft: "63%",
            paddingBottom: "80px",
            marginTop: "200px",
          }}
        >
          {video && like === false && dislike === false ? (
            <>
              <FaRegThumbsUp className="floating" onClick={() => setLike(true)} />
              <FaRegThumbsDown className="floating" onClick={() => setDislike(true)} />
            </>
          ) : like === true ? (
            <FaThumbsUp className="floating" onClick={() => setLike(false)} />
          ) : dislike === true ? (
            <FaThumbsDown className="floating" onClick={() => setDislike(false)} />
          ) : (
            <h3 style={{ color: "white" }}> Please enter video ID </h3>
          )}
          {/* condition to like and dislike video */}
        </h3>
      </Row>
    </>
  )
}

export default OneThumb
