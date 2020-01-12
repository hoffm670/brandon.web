import React from 'react';
import { Badge } from '../badge/badge';

export const IconDisplay = ({ icons }) => {
  return (
    <div className="icon-display">
      {Object.keys(icons).map((value, index) => {
        return <div key={index} className="icon-group">
          <span>{value}</span>
          <div className="icon-row">
            {icons[value].map((icon, index) => {
              return <Badge image={"icons/" + icon.src} title={icon.title} />
            })}
          </div>
        </div>
      })}
    </div>
  );
}

