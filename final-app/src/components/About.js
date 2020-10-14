import React from 'react';
import Select from 'react-select';

function About() {
  return (
    <div className="About">
      Hello About

      <Select options={[{label: 'Rouge', value: 'red'}]} isMulti />
    </div>
  );
}

export default About;
