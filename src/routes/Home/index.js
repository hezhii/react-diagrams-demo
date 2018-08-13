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
        <li>
          <Link to="custom-link">Custom Link</Link>
        </li>
        <li>
          <Link to="clone">Clone</Link>
        </li>
        <li>
          <Link to="grid">Grid</Link>
        </li>
        <li>
          <Link to="lock">Lock</Link>
        </li>
        <li>
          <Link to="limit-points">Limit Points</Link>
        </li>
        <li>
          <Link to="listeners">Listeners</Link>
        </li>
        <li>
          <Link to="performance">Performance</Link>
        </li>
        <li>
          <Link to="serialize">Serialize</Link>
        </li>
        <li>
          <Link to="zoom-to-fit">Zoom To Fit</Link>
        </li>
        <li>
          <Link to="mutate-graph">MutateGraph</Link>
        </li>
      </ul>
    </div>
  );
}