import { Button, Form, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import DemoContext from "../utils/DemoContextProvider"
import OneThumb from "./OneThumb"

function Input() {
  const { changeVideo } = useContext(DemoContext)

  return (
    <>
      <Col>
        <Row>
          <OneThumb />
        </Row>
        <Row className="input">
          <h4 style={{ color: "white", marginBottom: "10px" }}>Video ID</h4>
          {/* function call to change the video when ID is submitted into the form */}
          <Form onSubmit={changeVideo}>
            <Form.Control
              required
              type="text"
              name="videoId"
              placeholder="Please enter video ID"
              style={{ width: "300px", border: "10px", marginBottom: "15px" }}
            />
            <Button
              style={{ backgroundColor: "#8da9c4", color: "black", padding: "10px", outline: "#8da9c4" }}
              type="submit"
            >
              Change
            </Button>
          </Form>
        </Row>
      </Col>
    </>
  )
}

export default Input
