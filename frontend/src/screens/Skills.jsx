import React, {useState, useEffect} from "react";
import SkillCard from "./SkillCard";
import { useAnimate } from "framer-motion";
import BackgroundParticles from "./BackgroundParticles";
import { Container, Row, Col } from "react-bootstrap";
import pythonimg from '../imgs/pythonimg.png';
import javaimg from '../imgs/goodjavaimg.png';
import jsimg from '../imgs/jsimg.png';
import awsimg from '../imgs/aws.png';
import dockerimg from '../imgs/docker.png';
import airflowimg from '../imgs/goodairflowimg.png';
import sparkimg from '../imgs/spark.png';
import cassandraimg from '../imgs/cassandra.png';
import kafkaimg from '../imgs/kafka.png';
import reactimg from '../imgs/react.png';
import pandasimg from '../imgs/pandas.png';
import pytorchimg from '../imgs/pytorch.png';

function Skills() {

    const [librarycontent, animateLibrary] = useAnimate();
    const [languagecontent, animateLanguage] = useAnimate();
    const [languagehead, animateLanguageHead] = useAnimate();

    useEffect(() => {
        animateLibrary(librarycontent.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 1});
        animateLanguage(languagecontent.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 1});
        animateLanguageHead(languagehead.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 1});
    }, [librarycontent, animateLibrary, languagecontent, animateLanguage, languagehead, animateLanguageHead]);

    return (
        <div style={{ position: "relative" }}>
        <BackgroundParticles className="particle" />
        <Container>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12} style={{marginTop: '40px', zIndex: 1, color: '#f5f5dc' }} ref={languagehead}>
                <h2>Languages</h2>
            </Col>
        </Row>
        <Row>
            <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="Python" imgpath={pythonimg}/>
            </Col>
            <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="Java" imgpath={javaimg}/>
            </Col>
            <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="JavaScript" imgpath={jsimg}/>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }} ref={languagecontent}>
            <h2>Technologies</h2>
            </Col>
        </Row>
        <Row>
        <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="AWS" imgpath={awsimg}/>
            </Col>
            <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="Docker" imgpath={dockerimg}/>
            </Col>
            <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="Airflow" imgpath={airflowimg}/>
            </Col>
            <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="Spark" imgpath={sparkimg}/>
            </Col>
            <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="Cassandra" imgpath={cassandraimg}/>
            </Col>
            <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
                <SkillCard language="Kafka" imgpath={kafkaimg}/>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }} ref={librarycontent}>
            <h2>Libraries</h2>
            </Col>
        </Row>
        <Row>
        <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
            <SkillCard language="React" imgpath={reactimg}/>
        </Col>
        <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
            <SkillCard language="Pandas" imgpath={pandasimg}/>
        </Col>
        <Col  xs={10} sm={8} md={6} lg={4} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}>
            <SkillCard language="PyTorch" imgpath={pytorchimg}/>
        </Col>
        </Row>

        </Container>
        </div>
    )

}

export default Skills;