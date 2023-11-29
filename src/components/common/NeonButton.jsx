import React from 'react';

const NeonButton = (props) => {
  return (
    <a href={`#${props.section}`} className="animate-pulse neon-button cursor-pointer">
      <span className="neon-text">{props.text}</span>
      <span className="arrow text-2xl">&#x2193;</span>
    </a>
  );
};

export default NeonButton;
