import React from 'react';

export const Badge = ({ image, title }) => {
  return (
    <div className="badge">
      <img src={image} alt={title} className="big-icon"></img>
      <span>{title}</span>
    </div>
  );
}

