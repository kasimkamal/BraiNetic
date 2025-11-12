import React from 'react';
import './FlipCard.css';

function FlipCard({ frontTitle, image, contentText, buttonText, buttonLink }) {
  return (
    <div className="card-container">
      <div className="card whitespace-pre-line">
        <div className="front-content">
          <p>{frontTitle}</p>
          <img 
            src={image}
            alt={frontTitle} 
            className="imgfixed-size" 
          />
        </div>

        <div className="content">
          <p>{contentText}</p>
          <a
            href={buttonLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="content-button"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;