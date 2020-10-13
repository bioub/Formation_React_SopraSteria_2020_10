import React from 'react';

function Hello({ name = 'Romain', age = 30 }) {
  return (
    <div className="Hello">
      Hello <span>{name}</span>, I have {age}
    </div>
  );
}

export default Hello;
