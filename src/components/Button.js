import React from 'react';
import PropTypes from 'prop-types'; // <- `Para conseguir usar pro
import './Button.css';

const Button = ({text}) => {
      

  return (
    <div>
         <button >{text}</button>
         
    </div>
  )
}

Button.propTypes = {
    text: PropTypes.string // <- Definindo a validação de props
};

export default Button;