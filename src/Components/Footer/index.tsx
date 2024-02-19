import React from 'react'
import "./index.css";

const Footer: React.FC = () => {
  return (
    <footer className='footer-section'>
      <img
        className='footer-section__logo'
        src="https://64.media.tumblr.com/2f691476c0d8d69c952453a5e64c21ba/318566baa1d46bac-fa/s1280x1920/49f4221f3e57571be5f4c3a938f9463fe839c955.pnj"
        alt="Logo"
      />

      <div className='footer-section__social-media'>
        <div className='footer-section__social-media-title'>
          Nossas redes:
        </div>
        <a
          className='social-footer'
          href="https://www.facebook.com/"
          aria-label="Vai para o facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>

        <a 
          className='social-footer'
          href="https://www.instagram.com/impavitta"
          aria-label="Vai para o Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>

        <a
          className='social-footer'
          href="https://www.linkedin.com/in/imp%C3%A1vitta/"
          aria-label="Vai para o Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>

        <a
          className='social-footer'
          href="https://www.youtube.com/@impavittaconsultoriapessoa1324"
          aria-label="Vai para o facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </div>
    </footer>
  );
};

export default Footer;
