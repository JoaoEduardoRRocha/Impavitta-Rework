import React from 'react'
import "./index.css";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className='footer-section'>
        <div className='footer-section__social-media'>
          <a 
            href="https://www.facebook.com/"
            aria-label="Vai para o facebook"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              size={40} 
            />
          </a>

          <a 
            href="https://www.facebook.com/"
            aria-label="Vai para o facebook"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagramSquare
              size={40} 
            />
          </a>

          <a 
            href="https://www.facebook.com/"
            aria-label="Vai para o facebook"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={40} 
            />
          </a>

          <a 
            href="https://www.facebook.com/"
            aria-label="Vai para o facebook"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare
              size={40} 
            />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
