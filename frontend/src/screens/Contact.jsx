import React, {useState, useEffect, useRef} from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import BackgroundParticles from "./BackgroundParticles";

function Contact() {

    const [emailName, setEmailName] = useState('');

    const [emailBody, setEmailBody] = useState('');

    async function handleSubmit(e) {
        e?.preventDefault();
        const resp = await fetch('http://localhost:5001/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                emailName,
                emailBody
            })
        })
        if (resp.ok) {
            setEmailBody('');
            setEmailName('');
            alert("Message sent!");
        }
        else {
            alert("Oops! Something went wrong.");
        }
    }

    return (
        <div style={{ position: "relative" }}>
        <BackgroundParticles className="particle" />
        <Container>
            <Row>
            <Col xs={12} sm={12} md={12} lg={12} style={{marginTop: '40px', zIndex: 1, color: '#f5f5dc' }}><h1>Contact Me</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label style={{ color: '#f5f5dc'}}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={emailName} onChange={(e) => setEmailName(e.target.value)} required/>
                        <Form.Label style={{ color: '#f5f5dc'}}>Message</Form.Label>
                        <Form.Control
                                as="textarea"
                                placeholder="Type here"
                                name="message"
                                value={emailBody}
                                onChange={(e) => setEmailBody(e.target.value)}
                                rows={6}
                                required
                            />
                        <Button variant="primary" type="submit" style={{marginTop: '10px'}}>Send</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
    )

}

export default Contact;