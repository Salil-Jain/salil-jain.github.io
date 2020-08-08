import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


class HomeComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <h1>Hi, I'm <b>Salil Jain</b></h1>
              <h5>
                I'm a Software Developer and next month I'll be joining <a href="https://www.oracle.com/" rel="noopener noreferrer" target="_blank" class="oracle-link">Oracle</a> as a Member of Technical Staff.{' '}
                {/* <br/> */}
                I love making useful applications from the technologies I learn. 
                <br/>
                Previously I have interned at <a href="https://www.nvidia.com" rel="noopener noreferrer" target="_blank" class="nvidia-link">NVIDIA</a>, <a href="https://www.crunchbase.com/organization/cryptokart" rel="noopener noreferrer" target="_blank" class="cryptokart-link">Cryptokart</a> and <a href="https://www.homingos.com/" rel="noopener noreferrer" target="_blank" class="homingos-link">Homingos</a>.
              </h5>
              {/* <h1> <b>Lorem Ipsum</b></h1>
              <h4>laksnd laksf ladkg lkadjflkan fl anfl knaslkfn laks fnlkasnflak fndlakdnf laksndf laksndlkasndlkas</h4> */}
            </Col>
          </Row>
        </Container>
        <div class="contact-div">
          <a href={process.env.PUBLIC_URL + '/Salil_CV.pdf'} download>  
            <Button variant="primary" size="lg" className="justify-content-md-center resume-button">
              Download Resume
            </Button>
          </a>
          <hr className="hr-center"/>
          <h4><i>Get in touch!</i></h4>
          <a href="https://www.linkedin.com/in/saliljain1/" rel="noopener noreferrer" target="_blank">Linkedin</a>{' '}|{' '}
          <a href="https://github.com/Salil-Jain" rel="noopener noreferrer" target="_blank">GitHub</a>{' '}|{' '}
          <a href="https://twitter.com/salil__jain/" rel="noopener noreferrer" target="_blank">Twitter</a>{' '}|{' '}
          <a href="mailto:j.salil36@gmail.com" rel="noopener noreferrer" target="_blank">Email</a>
        </div>
      </div>
    )
  }
}
export default HomeComponent;