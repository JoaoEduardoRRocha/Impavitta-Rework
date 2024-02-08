import React from 'react'
import "./index.css";

const Header: React.FC = () => {
  return (
    <header className='header-container'>
      <nav className='nav-container'>
        <div className='nav-container__logo'>IMPÁVITTA</div>
        <div className='nav-container__links'>
          <div>O que fazemos</div>
          <div>Sobre nós</div>
          <div>Contato</div>
        </div>

        <div className='nav-text-container'>
          <p className='nav-text-container__paragraph'>
            Conquiste clientes com um material altamente profissional.
          </p>
          <p className='nav-text-container__paragraph-second'>
            Saia na frente da concorrência!
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
