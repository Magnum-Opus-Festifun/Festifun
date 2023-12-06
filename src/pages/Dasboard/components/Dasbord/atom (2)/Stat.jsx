// Stat.jsx
import React from "react";

function Stat({ selectedCard }) {
    const sisa = selectedCard.stok - selectedCard.terjual;
    const totalPenghasilan = selectedCard.price * selectedCard.terjual;

    return (
        <div>
            <h2>Selected Event</h2>
            {selectedCard.title && (
                <div>
                    <p>Title: {selectedCard.title}</p>
                    <p>Description: {selectedCard.description}</p>
                    <p>Price: ${selectedCard.price}</p>
                    <p>Stok: {selectedCard.stok} lembar</p>
                    <p>Terjual: {selectedCard.terjual} lembar</p>
                    <p>Sisa: {sisa} lembar</p>
                    <p>Total Penghasilan: ${totalPenghasilan}</p>
                </div>
            )}
        </div>
    );
}

export default Stat;
