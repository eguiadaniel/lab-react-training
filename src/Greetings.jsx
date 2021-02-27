import React from 'react';

import './Greetings.css';

const Greetings = (props) => {
  if (props.lang === 'de') {
    return (
      <div>
        <h3>Hallo {props.children}</h3>
      </div>
    );
  } else if (props.lang === 'fr') {
    return (
      <div>
        <h3> Bonjour {props.children}</h3>
      </div>
    );
  } else if (props.lang === 'en') {
    return (
      <div>
        <h3> Hello {props.children}</h3>
      </div>
    );
  } else if (props.lang === 'es') {
    return (
      <div>
        <h3> Hola {props.children}</h3>
      </div>
    );
  }
};

export default Greetings;
