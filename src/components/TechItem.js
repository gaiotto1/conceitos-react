import React from 'react';
import PropTypes from 'prop-types';

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

// validando o tipo da props
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;