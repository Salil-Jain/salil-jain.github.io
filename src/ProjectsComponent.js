import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleProject from './SingleProject';



class ProjectsComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [
                {
                    title: "Covid-19 cases India API",
                    link: ["Documentation", "/#/covid-india-api"],
                    details: [
                        "Developed API returning Covid cases in India data from MOHFW website",
                        "The API received an average 20k hits per month"
                    ]
                },
                {
                    title: "Memescraper",
                    link: ["GitHub", "https://github.com/Salil-Jain/memescraper"],
                    details: [
                        "Scraping program to download memes from any subreddit",
                        "The script uses python and regex to identify the link and download memes"
                    ]
                },
                {
                    title: "Google Summer of Code - 2018",
                    link: ["Question Tool", "https://github.com/berkmancenter/question_tool"],
                    details: [
                        "Implemented modifications to upvotes and the edit permissions for admins and moderators.",
                        "Worked on improvements to mobile UI/UX",
                        "Performed bug fixes and code refactoring"
                    ]
                },
                {
                    title: "Dukkaan.com",
                    link: ["Finnovatica - 2017", "https://finnovatica.com/Home.aspx"],
                    details: [
                        "Developed a robust online platform for the sale of goods by hyperlocal showrooms",
                        "Project aimed at removing the trust issue between the seller and the consumer, facilitating the growth of local showrooms"
                    ]
                },
                {
                    title: "DilSeDeal",
                    link: ["Sophomores", "https://www.facebook.com/TeamSophoS/"],
                    details: [
                        "Architected a website, devoted to selling second-hand products within colleges, as the sole front-end developer",
                        "Virtually coordinated and remotely designed through GitHub with fellow partner"
                    ]
                }
            ]
        }
    }
    render() {
        const { projectData } = this.state;
        var listItems = projectData.map((item) => {
            return <SingleProject value={item} />;
        })
        return (
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <h1>Projects</h1>
                        <hr/>
                    </Col>
                </Row>
                <React.Fragment>{listItems}</React.Fragment>
            </Container>
        )
    }
    componentDidMount() {
        document.title = "Projects | Salil Jain";
    }
}
export default ProjectsComponents;