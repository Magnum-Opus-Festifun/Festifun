import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Chart from "react-google-charts";

const Detail = ({ event }) => {
    const stockData = [
        ["Date", "Low", "Opening", "Closing", "High"],
        ["Monday", 20, 28, 38, 45],
        ["Tuesday", 31, 38, 55, 66],
        ["Wednesday", 50, 55, 77, 80],
        ["Thursday", 50, 77, 66, 77],
        ["Friday", 15, 66, 22, 68]
    ];

    const stockOptions = {
        legend: "none",
        title: "Stock Prices",
        candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#a52714" },
            risingColor: { strokeWidth: 0, fill: "#0f9d58" },
            maxBoxWidth: "100%"
        }
    };

    const revenueData = [
        ["Category", "Value"],
        ["Total Revenue", event.terjual * event.price],
        ["Total Value", event.stok * event.price]
    ];

    const revenueOptions = {
        pieSliceText: "none",
        legend: "none",
        pieHole: 0.4,
        is3D: false,
        slices: [{ color: "#3366cc" }, { color: "#dc3912" }]
    };

    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <hr />

                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            fontSize: "20px"
                        }}
                    >
                        <p>Price: ${event.price}</p>
                        <p>Stok: {event.stok}</p>
                        <p>Sold out: {event.terjual}</p>
                    </div>
                </Col>
                <Col md={6}></Col>
            </Row>
            <div className="d-f">
                <Row>
                    <Col className="col-6 contain-fluid">
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="300px"
                            data={revenueData}
                            options={revenueOptions}
                        />
                    </Col>
                    <Col className="col-6 contain-fluid">
                        
                        <Chart
                            chartType="CandlestickChart"
                            width="100%"
                            height="300px"
                            data={stockData}
                            options={stockOptions}
                        />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Detail;
