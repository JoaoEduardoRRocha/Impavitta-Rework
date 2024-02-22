import React from 'react'
import "./index.css";

const Header: React.FC = () => {

  return (
    <header className='header-container'>
      <nav className='nav-container'>
        <div>
          <img
            className='nav-container__logo'
            src='https://64.media.tumblr.com/a7deea1f18f6efd83b88b1516c640e3b/97346d27a726b23c-00/s1280x1920/9f7259a744529f93194b727a996a50bf6e038931.pnj'
            alt='Logotipo da Impavitta'
          />
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
        <a
          className='header-btn-container__contact-us'
          href='https://api.whatsapp.com/send?phone=552197932-6739&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento.'
          aria-label="Vai para o Whatsapp"
          target="_blank"
          rel="noopener noreferrer">
          Fale Conosco
        </a>
      </div>

      <div className="header-slide">
        <div className="header-slide__img-slide">
        </div>
      </div>
    </header>
  );
};

export default Header;
