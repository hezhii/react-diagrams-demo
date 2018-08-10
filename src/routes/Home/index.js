import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Demos of React Diagrams</h1>
      <ul>
        <li>
          <Link to="simple">Simple</Link>
        </li>
        <li>
          <Link to="simple-flow">Simple Flow</Link>
        </li>
        <li>
          <Link to="custom-node">Custom Node</Link>
        </li>
      </ul>
    </div>
  );
}