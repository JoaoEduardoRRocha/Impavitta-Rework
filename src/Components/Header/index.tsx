import React from 'react'
import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";

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
        <div className='nav-container__links'>
          <div>O que fazemos</div>
          <div>Sobre nós</div>
          <div>Contato</div>
        </div>
      

        <div>
          <RxHamburgerMenu
            className='nav-container__btn-nav-close'
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
        <button className='header-btn-container__know-more'>
          Saibe Mais
        </button>
        <button className='header-btn-container__contact-us'>
          Fale Conosco
        </button>
      </div>

      <div>
        <p className='header-phrase'>
          Profissionais com mais de <span>20 anos de experiência</span> no mercado de administra ção do <span>Rio de Janeiro</span> e <span>Niterói</span>.
        </p>
      </div>

      <div className="header-slide">
        <div className="header-slide__img-slide">
        </div>
      </div>
    </header>
  );
};

export default Header;
