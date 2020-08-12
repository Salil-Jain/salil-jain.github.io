import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class NoMatchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            freeMoney: false
        };
        this.activatefreeMoney = this.activatefreeMoney.bind(this);
    }

    activatefreeMoney() {
        console.log('here');
        this.setState({
            freeMoney: true
        })
    }

    render() {
      const { freeMoney } = this.state;
      return (
        <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} style={{textAlign: "center"}}>
            <h1 style={{fontSize: "4em"}}>404<br />Page Not Found</h1>
            <a href="/">
                <Button variant="primary" size="lg" className="justify-content-md-center resume-button" style={{margin: "10px"}}>
                Home
                </Button>
            </a>
            <Button variant="primary" size="lg" className="justify-content-md-center resume-button" onClick={this.activatefreeMoney} style={{margin: "10px"}}>
              Get Free Money
            </Button>
          </Col>
        </Row>
        { freeMoney &&
        <Row>
            <Col lg={{ span: 6, offset: 3 }} style={{textAlign: "center", marginTop: "50px"}}>
                <img src="https://i.kym-cdn.com/photos/images/original/000/112/643/meme-president-astley.jpg" alt="free-money" width="100%"/>
            </Col>
        </Row>
        }
      </Container>
      )
    }
    componentDidMount() {
        document.title = "Page Not Found | Salil Jain";
    }
}
export default NoMatchPage;