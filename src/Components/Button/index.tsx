import React from 'react'
import "./index.css";

const Button: React.FC = () => {

  return (
    <div className='button-container'>
      <a
        className='button-content'
        href='https://api.whatsapp.com/send?phone=552197932-6739&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento.'
        target='a_blank'
      >
        Faça um orçamento
      </a>
    </div>
  );
};

export default Button;
