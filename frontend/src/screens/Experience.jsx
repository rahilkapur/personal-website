import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BackgroundParticles from "./BackgroundParticles";
import { useAnimate } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import awslogo from '../imgs/awslogo.jpeg';
import amazonlogo from '../imgs/amazonlogo.jpeg';
import dSilologo from '../imgs/dSilo.png';
function Experience() {

    const [headingText, setHeadingText] = useAnimate();

    const [experienceCard, setExperience] = useAnimate();


    useEffect(() => {
        setHeadingText(headingText.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 1});
        setExperience(experienceCard.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 1});
    }, [setHeadingText, headingText, setExperience, experienceCard]);

    const experiences= [
        {
        company: "AWS",
        role: "Software Developer",
        timeline: "September 2024-Present",
        info: "",
        logo: awslogo
        },
        {
        company: "Amazon",
        role: "Software Developer Intern",
        timeline: "May 2023 - August 2023",
        info: "Created a trigger based data workflow template to mitigate my team's reliance on scheduled based workflows. Implemented a custom Apache Airflow CDK template to avert data delays, and reduce support tickets. Enhanced functionality between AWS services and Airflow, including the creation of IAM operators to automate the process of provisioning roles to Apache Airflow",
        logo: amazonlogo
        },
        {
            company: "dSilo",
            role: "Software Engineer Intern",
            info: "Integrated and developed a Python application with Azure functionality to OCR non-searchable PDFs into an Azure storage blob that has convertede 1,000+ PDFs.",
            logo: dSilologo
        }
    ]


    return (
        <div style={{ position: "relative" }}>
        <BackgroundParticles className="particle" />
        <Container>
        <Row>
            <Col  xs={6} sm={8} md={10} lg={12} style={{ position: "relative", zIndex: 1, color: '#f5f5dc',  marginTop: '100px', marginBottom: '60px'}}><h2 ref={headingText}>Experience</h2></Col>
        </Row>
        {experiences.map((experience, ind) => (
                    <Row key={ind} className="justify-content-center" style={{ marginBottom: '50px' }}ref={experienceCard}>
                        <Col className="mx-auto" style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                            <ExperienceCard logo={experience.logo} company={experience.company} role={experience.role} timeline={experience.timeline} info={experience.info}/>
                        </Col>
                    </Row>
                ))}
        </Container>
        </div>
    )

}

export default Experience;