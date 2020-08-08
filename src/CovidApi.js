import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class CovidApi extends Component {
  render() {
    return (
      <Container>
        <Row style={{marginTop: "10px"}}>
          <Col lg={{ span: 6, offset: 3 }}>
            <h1>Covid-19 cases India API</h1>
          </Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
          <Col lg={{ span: 6, offset: 3 }}>
            <a href="https://www.linkedin.com/in/vivek-khanna-02637815b/" rel="noopener noreferrer" target="_blank">Vivek Khanna</a> and I have created APIs to return count of Covid-19 cases in India. The source of our API is <b>Ministry of Health and Family Welfare</b> (<a href="https://www.mohfw.gov.in/" rel="noopener noreferrer" target="_blank">MOHFW</a>).
            The APIs are public and can be used by anyone to create dashboard or for research purposes.
            We have created 2 APIs:
          </Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
          <Col lg={{ span: 6, offset: 3 }}>
            <h3>Statewise Data</h3>
            This API returns the statewise data of total number of cases, total number of casualties and total number of cured patients.
            <br />
            Endpoint: <a href="http://covid-india-cases.herokuapp.com/states/" rel="noopener noreferrer" target="_blank">http://covid-india-cases.herokuapp.com/states/</a>
          </Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
          <Col lg={{ span: 6, offset: 3 }}>
            <h3>State Data Timeline</h3>
            This API returns the timeline data of total number of covid cases statewise
            <br />
            Endpoint: <a href="https://covid-india-cases.herokuapp.com/statetimeline/" rel="noopener noreferrer" target="_blank">https://covid-india-cases.herokuapp.com/statetimeline/</a>
          </Col>
        </Row>

        <Row style={{marginTop: "10px"}}>
          <Col lg={{ span: 6, offset: 3 }}>
          If you need any kind of help/support from our side or have any suggestions please reach out to us at <a href="mailto:j.salil36@gmail.com">j.salil36@gmail.com</a> or <a href="mailto:vivekkhanna987@gmail.com">vivekkhanna987@gmail.com</a>
          </Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
          <Col lg={{ span: 6, offset: 3 }}>
            <h5>Stay Home, Stay Safe</h5>
          </Col>
        </Row>
        
      </Container>

    )
  }
  componentDidMount() {
    document.title = "Covid cases India API";
  }
}
export default CovidApi;