// App.js
import React, { useState } from "react";
import Slider from "react-slick";
import { Container, Row } from "react-bootstrap";
import EventCard from "./atom/Card";
import Detail from "./atom/Detail";
import EventData from "./atom/EventData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleCardClick = event => {
        setSelectedEvent(event);
    };

    const chunkedEventData = (data, size) => {
        return Array.from({ length: Math.ceil(data.length / size) }, (v, i) =>
            data.slice(i * size, i * size + size)
        );
    };

    const chunkedEvents = chunkedEventData(EventData, 1);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    return (
        <Container>
            <Slider {...settings} className="d-f">
                {chunkedEvents.map((chunk, index) => (
                    <div key={index}>
                        <Row className="justify-content-center">
                            {chunk.map((event, eventIndex) => (
                                <div key={eventIndex}>
                                    <EventCard
                                        imagePath={event.imagePath}
                                        title={event.title}
                                        onClick={() => handleCardClick(event)}
                                    />
                                </div>
                            ))}
                        </Row>
                    </div>
                ))}
            </Slider>
            <Row className="justify-content-center">
                {selectedEvent && <Detail event={selectedEvent} />}
            </Row>
        </Container>
    );
};

export default App;
