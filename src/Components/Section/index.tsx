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
          <div className="feature-item-content">
            <div className='feature-item-container'>
              <img
                className='feature-image'
                src="https://64.media.tumblr.com/6cc01f373079e53dac1014b362920540/f334489a53182dad-69/s250x400/9ad3cf90d11144af762ad57fd33cbfb150114ec6.pnj"
                alt=""
              />
              <h1 className="feature-item__title">Mala Direta</h1>
            </div>

            <p className="feature-item__description">
              Folder de duas dobras elaborado para chamar a atenção de possíveis clientes, despertando neles a curiosidade de conhecer melhor a sua empresa.
            </p>

            <div className='feature-item-container'>
              <img
                className='feature-image'
                src="https://64.media.tumblr.com/cd363ea3fe1d0c977f8717fe18da0bbe/a74196d44e593598-13/s250x400/3d0b388328dbb0a75919248582c6056b64bf99a5.pnj"
                alt=""
              />
              <h1 className="feature-item__title">Perfil Corporativo</h1>
            </div>

            <p className="feature-item__description">
              Livreto de 12 páginas no tamanho A4 que impressiona os clientes, passando a credibilidade que a sua empresa precisa para fechar um negócio.
            </p>

            <div className='feature-item-container'>
              <img
                className='feature-image'
                src="https://64.media.tumblr.com/c2036a3e190a3d405182d1c442cee455/a74196d44e593598-01/s250x400/276c118ba457608e4f05608df34ede9fff068f01.pnj"
                alt=""
              />
              <h1 className="feature-item__title">Material Gráfico</h1>
            </div>

            <p className="feature-item__description">
              Fazemos todo tipo de material gráfico que sua empresa necessitar, dentro de um padrão profissional acima da média do mercado.
            </p>

            <div className='feature-item-container'>
              <img
                className='feature-image'
                src="https://64.media.tumblr.com/e5bb0eba6e08d9f08af93abaac4ac536/d259805793099990-00/s250x400/8142c9d1e84cde9381082e8e15363dd35f5f1f17.pnj"
                alt=""
              />
              <h1 className="feature-item__title">Papel Timbrado</h1>
            </div>

            <p className="feature-item__description">
              Papel de carta que transmite aos clientes uma mensagem de profissionalismo e organização, seguindo o padrão de qualidade dos demais materiais.
            </p>
          </div>

          <img
            className='feature-hero-image'
            src="https://64.media.tumblr.com/19f38b1049af6528948c9a48ad05c74c/969d25c83a3fa691-52/s1280x1920/53d3f7847ea7b710df061ac1f263886c097907e5.pnj"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
