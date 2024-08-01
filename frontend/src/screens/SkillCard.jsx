import React, {useState, useEffect} from "react";
import { Card, Image } from "react-bootstrap";
import { useAnimate } from "framer-motion";

function SkillCard(props) {
    const [cardContent, animateCard] = useAnimate();
    useEffect(() => {
        animateCard(cardContent.current, {x: [-170, 0], opacity: [0, 1]}, { duration: 0.75});
    }, [cardContent, animateCard]);


    return (
        <Card className="skill-card" ref={cardContent} style={{ backgroundColor: '#f8f9fa', color: '#000', borderRadius: '10px', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '180px', height: '220px', margin: '10px auto' }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
                <Image src={props.imgpath} alt={props.imgalt} rounded style={{ height: '80px', width: '80px' }} />
            </div>
            <h3 style={{ color: '#000', textAlign: 'center', margin: '10px 0' }}>{props.language}</h3>
        </Card>
    )
}

export default SkillCard;