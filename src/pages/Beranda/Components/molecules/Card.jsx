// CardComponent.jsx
import React from 'react';

const CardComponent = ({ image, title, price, sourceLink }) => (
  <div className="card">
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Harga: {price}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">
        Source: <a href={sourceLink} target="_blank" rel="noopener noreferrer">Link Referensi Gambar</a>
      </small>
    </div>
  </div>
);

export default CardComponent;
