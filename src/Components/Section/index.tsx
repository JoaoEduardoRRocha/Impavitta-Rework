import React from 'react'
import "./index.css";

const Section: React.FC = () => {
  return (
    <section className='feature-section'>
      <h1 className='feature-section__title'>
        Por que você deveria nos escolher para sua melhor experiência
      </h1>

      <div className='feature'>
        <div className="feature-item">
          <img 
            className="feature-item__image"
            src="https://64.media.tumblr.com/fffb7ac39a48612787f1d0c1398c4c9b/479adf28ff0a46db-63/s250x400/86c7e053a9158f2156b6fca6b583298fac0aa204.pnj" 
            alt="Número 1 com um adorno roxo" 
          />
        </div>
        
        <div className="feature-item-2">
          <h1 className="feature-item-2__title">Mala Direto Eficaz</h1>
          <p className="feature-item-2__description">
            Folder de duas dobras elaborado para chamar a atenção de possíveis clientes, despertando neles a curiosidade de conhecer melhor a sua empresa.
          </p>
        </div>

        <img
          className='hero-image'
          src="https://64.media.tumblr.com/19f38b1049af6528948c9a48ad05c74c/969d25c83a3fa691-52/s1280x1920/53d3f7847ea7b710df061ac1f263886c097907e5.pnj" 
          alt="" 
        />
      </div>

      


    </section>
  );
};

export default Section;