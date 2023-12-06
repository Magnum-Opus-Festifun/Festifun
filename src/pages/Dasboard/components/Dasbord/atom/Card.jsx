// Card.js
import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";

const EventCard = ({ imagePath, title, onClick }) => {
  return (
    <BootstrapCard
      style={{
        width: "13rem",
        borderRadius: "20px",
        margin: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <BootstrapCard.Img
        variant="top"
        src={imagePath}
        style={{
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default EventCard;
