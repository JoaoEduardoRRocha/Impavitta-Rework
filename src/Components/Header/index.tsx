import React from 'react'
import "./index.css";

const Header: React.FC = () => {
  return (
    <header className='header-container'>
      <nav className='nav-container'>
        <img
          className='nav-container__logo'
          src='https://64.media.tumblr.com/a7deea1f18f6efd83b88b1516c640e3b/97346d27a726b23c-00/s1280x1920/9f7259a744529f93194b727a996a50bf6e038931.pnj'
          alt='Logotipo da Impavitta'
        />
        <div className='nav-container__links'>
          <div>O que fazemos</div>
          <div>Sobre nós</div>
          <div>Contato</div>
        </div>
      </nav>

      <div className='nav-text-container'>
        <p className='nav-text-container__paragraph'>
          <strong>Conquiste</strong> clientes com um material altamente <strong>profissional.</strong>
        </p>
        <p className='nav-text-container__paragraph-second'>
          Saia na frente da <strong>concorrência!</strong>
        </p>
      </div>

      <div className='header-btn-container'>
        <button className='header-btn-container__know-more'>
          Saibe Mais
        </button>
        <button className='header-btn-container__contact-us'>
          Fale Conosco
        </button>
      </div>

      <div>
        <p>
          Profissionais com mais de 20 anos de experiência no mercado de administra ção do Rio de Janeiro e Niterói.
        </p>
      </div>
    </header>
  );
};

export default Header;
