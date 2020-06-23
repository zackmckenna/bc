import React from 'react'
import { Col, Row } from 'react-bootstrap'
const SandBox = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>The Sandbox</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>this is where the fun is</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>What do I have to offer? </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Row with three columns</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ backgroundColor: 'black',  height: '20vmin', width: '20vmin'}}>
          </div>
        </Col>
        <Col>
        <div style={{ backgroundColor: 'black',  height: '20vmin', width: '20vmin'}}>
          </div>
        </Col>
        <Col>
        <div style={{ backgroundColor: 'black',  height: '20vmin', width: '20vmin'}}>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>WHY?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          why not?
        </Col>
      </Row>


    </>
  )
}

export default SandBox
