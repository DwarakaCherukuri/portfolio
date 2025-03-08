import React from 'react';
import './ShootingStars.css';

const ShootingStars = () => {
  // Keeping the original count of 50 stars
  const stars = Array.from({ length: 50 }, (_, index) => (
    <div key={index} className={`star star-${index + 1}`}></div>
  ));

  return <div className="stars">{stars}</div>;
};

export default ShootingStars;