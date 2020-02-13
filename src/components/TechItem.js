import React from 'react';

function TechItem({tech, ondelete}) {
  return (
    <li>
      {tech}
      <button onClick={ondelete} type="button">Remover</button>
    </li>
  )
}

// quando o tech não for informado ele vai preencher a props.tech com a string 'oculto'
TechItem.defaultProps = {
  tech: 'Oculto'
}

export default TechItem;