import React from 'react';

function TechItem(props) {
  return (
    <li>
      {props.tech}
      <button onClick={props.onDelete} type="button">Remover</button>
    </li>
  )
}

export default TechItem;