// Content.jsx
import React from "react";
import { Card } from "react-bootstrap";

const Content = ({ imagePath, title, description, price, stok, terjual, onCardClick }) => {
    const handleCardClick = () => {
        onCardClick({ title, description, price, stok, terjual });
    };

    return (
        <Card style={{ width: "18rem", borderRadius: "20px", margin: "10px" }} onClick={handleCardClick}>
            <Card.Img variant="top" src={imagePath} style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Content;
