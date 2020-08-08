import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class SingleProject extends Component {
    render() {
        const value = this.props.value;
        const detailList = value.details.map((item) => {
            return <li>{item}</li>
        })
        return (
            <React.Fragment>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <h3>{value.title} (<a href={value.link[1]}>{value.link[0]}</a>)</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <ul>
                            {detailList}
                        </ul>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
export default SingleProject;