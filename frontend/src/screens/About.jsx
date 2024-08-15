import React, {useState, useEffect} from "react";
import { useAnimate } from "framer-motion";
import { Col, Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import me from '../imgs/IMG_5960.jpg';
import "../App.css";
import BackgroundParticles from "./BackgroundParticles";

function About() {
    const [scope, animate] = useAnimate();
    
    const [aboutScope, aboutAnimate] = useAnimate();

    const [pScope, pAnimate] = useAnimate();

    

    useEffect(() => {
        pAnimate(pScope.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 1});
        aboutAnimate(aboutScope.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 1});
        animate(scope.current, { x: [-200, 0], opacity: [0, 1], rotate: [180, 0] }, { duration: 1 });
    }, [aboutAnimate, aboutScope, pScope, pAnimate, scope, animate]);
    return (
        <div style={{ position: "relative" }}>
        <BackgroundParticles className="particle" />
        <Container fluid>
        <Row>
            <Col xs={4} sm={6} md={8} lg={7} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }} ref={aboutScope}><h2 >About me</h2> </Col>
        </Row>
        <Row>
        <Col xs={4} sm={6} md={8} lg={7} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }} ref={pScope}><p>Hi! I'm a recent graduate from UW-Madison where I studied Computer Science and Data Science. 
        With over five years of programming experience, I'm passionate about continuing my journey of learning and exploring new technologies! I'm interested in Big Data Systems, Artificial Intelligence, and Web Development. My main focus right now is to learn more data intensive applications. I'm also excited to start my career as a Software Development Engineer at <a href="https://aws.amazon.com/?nc2=h_lg">AWS</a>!</p>
        <p>When I'm not at my computer, I enjoy working out, playing guitar, hanging out with my friends, video games, and watching basketball. </p>
        </Col>
        <Col xs={8} sm={6} md={2} lg={2} style={{ position: "relative" }}><Image ref={scope} src={me} style={{height: '300px', width: '300px'}}alt="Image of Rahil" roundedCircle className="circle-img"/></Col>
        </Row>
        </Container>
    </div>
    )

}

export default About;