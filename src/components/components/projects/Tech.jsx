import React from 'react';

const Tech = ({ techs }) => {
  return (
    <div className="flex items-start mt-5 border-l-2 border-green-500 pointer-events-none pl-3">
  <div className="flex flex-col">
    <h4 className="text-sm mb-2 text-green-500">TECH</h4>
    <ul className="grid grid-flow-col grid-rows-3 gap-4 list-none">
      {techs.map((tech, index) => (
        <li key={index} className="smt:text-xs text-white mb-1">
          {tech}
        </li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default Tech;
