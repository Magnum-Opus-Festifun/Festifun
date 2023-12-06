// Grafik.jsx
import React from "react";
import { Bar } from "react-chartjs-2";

function Grafik({ data }) {
    const chartData = {
        labels: data.map((event) => event.title),
        datasets: [
            {
                label: "Stok Terjual",
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(75,192,192,0.6)",
                hoverBorderColor: "rgba(75,192,192,1)",
                data: data.map((event) => event.terjual),
            },
            {
                label: "Sisa Stok",
                backgroundColor: "rgba(255,99,132,0.4)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.6)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: data.map((event) => event.stok - event.terjual),
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Grafik Penjualan dan Sisa Stok</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
}

export default Grafik;
