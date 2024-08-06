import React, {useState, useEffect, useMemo} from "react";
import me from '../imgs/IMG_5960.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../index.css'
import { useAnimate } from "framer-motion";
import ParticleScreen from "./Particles";
function Landing() {
    const langs = ['Hello', "Bonjour", "Hola", 'Hallo', "नमस्ते", "今日は", "안녕하세요"];
    const [langIndex, setLangIndex] = useState(0);
    const [langScope, langAnimate] = useAnimate();
    const [text, textAnimate] = useAnimate();

    useEffect(() => {
        textAnimate(text.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 1});
      }, [text, textAnimate]);
    useEffect(() => {
        const interval = setInterval(() => {
            if (langIndex === langs.length - 1) {
                setLangIndex(0);
            }
            else {
                setLangIndex(langIndex => langIndex + 1)
            }
        }, 3000);
        langAnimate(langScope.current, { x: [-10, 0], opacity: [0, 1],  }, { duration: 1 });
        return () => clearInterval(interval);
    }, [langIndex, langScope, langAnimate])

        return (

            <div style={{ position: "relative" }}>
                <ParticleScreen className="particle"/>
                <Container fluid >
                    <Row>
                        <Col xs={4} sm={6} md={8} lg={10} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}><h1 ref={langScope}>{langs[langIndex]}</h1></Col>
                    </Row>
                    <Row>
                        <Col xs={4} sm={6} md={8} lg={10} style={{ position: "relative", zIndex: 1, color: '#f5f5dc' }}><h2 ref={text}>I'm Rahil Kapur, a software engineer.</h2></Col>
                    </Row>
                </Container>
            </div>
        )

}

export default Landing;