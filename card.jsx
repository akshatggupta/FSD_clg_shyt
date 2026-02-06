import React from 'react';
import './Card.css';

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

Card.defaultProps = {
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  title: 'Modern Card Design',
  description: 'This is a simple and elegant CSS card with smooth hover effects and responsive design.',
  buttonText: 'Learn More',
  onButtonClick: () => console.log('Button clicked!')
};

export default Card;
