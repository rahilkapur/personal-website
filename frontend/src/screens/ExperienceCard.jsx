import React, {useState, useEffect, useCallback} from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAnimate } from "framer-motion";

function ExperienceCard(props) {
    const [cardContent, animateCard] = useAnimate();

    const animateFunc = useCallback(() => {
        animateCard(cardContent.current, {x: [-200, 0], opacity: [0, 1]}, { duration: 0.75});
    }, [cardContent, animateCard])
    useEffect(() => {
        animateFunc()
    }, [animateFunc]);


    return (
        <Card style={{ maxWidth: '500px', margin: '0 auto'}} ref={cardContent}>
        <Card.Body>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <LazyLoadImage 
                        src={props.logo} 
                        alt={`${props.company} logo`} 
                        rounded 
                        style={{ height: '75px' }} 
                    />
                </div>
            <Card.Title><h3>{props.company}</h3></Card.Title>
            <Card.Subtitle><h4>{props.role}</h4></Card.Subtitle>
            <Card.Subtitle><h5>{props.timeline}</h5></Card.Subtitle>
            <Card.Text>
                {props.info}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default ExperienceCard;