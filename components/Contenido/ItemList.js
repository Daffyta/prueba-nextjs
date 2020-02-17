import React from'react';

const Child = props => (
  <ul>
    { props.items.map((item, index) => (
      <li key={index}>
        <span>
          <small>{item.text}</small>
        </span>
        <span>
          <small>
            <a value={index} onClick={() => props.remove(item.id)}>x</a>
          </small>
        </span>
      </li>
    ))}
  </ul>
);

export default Child;