import React from 'react';
import './App.css';
import Section from './Components/Section'

import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

register();

function App() {

  const carouselContent = [
    {
      id: 1,
      name: 'Empresa 1',
      url: "https://64.media.tumblr.com/7dfeb73bf2f0e23a35f88dd18d0e07ba/510ca137ea8aef87-93/s1280x1920/7279dba6fa5e00d82443e18329a2d5af34430fc3.pnj",
    },
    {
      id: 2,
      name: 'Empresa 2',
      url: "https://64.media.tumblr.com/7dfeb73bf2f0e23a35f88dd18d0e07ba/510ca137ea8aef87-93/s1280x1920/7279dba6fa5e00d82443e18329a2d5af34430fc3.pnj",
    },
    {
      id: 3,
      name: 'Empresa 3',
      url: "https://64.media.tumblr.com/7dfeb73bf2f0e23a35f88dd18d0e07ba/510ca137ea8aef87-93/s1280x1920/7279dba6fa5e00d82443e18329a2d5af34430fc3.pnj",
    },
    {
      id: 4,
      name: 'Empresa 4',
      url: "https://64.media.tumblr.com/7dfeb73bf2f0e23a35f88dd18d0e07ba/510ca137ea8aef87-93/s1280x1920/7279dba6fa5e00d82443e18329a2d5af34430fc3.pnj",
    },
  ]

  const referenceContent = [
    {
      id: 1,
      name: 'Sr. Síndico',
      owner: 'Rodolfo Furtado Lima',
      description: '"Quando pensei que havia atingido o máximo de qualidade na imagem da minha empresa, a Impávitta fez algo que eu não esperava e ficou maravilhoso!"',
    },
    {
      id: 2,
      name: 'Administradora Ômega',
      owner: 'Jorge Cláudio',
      description: '"A Impávitta foi essencial no início do meu negócio. Me ajudaram a dar uma identidade visual profissional à minha empresa."',
    },
    {
      id: 3,
      name: 'Empresa 3',
      owner: 'Fulano',
      description: 'A longo Text',
    },
    {
      id: 4,
      name: 'Empresa 4',
      owner: 'Fulano',
      description: 'A longo Text',
    },
  ]

  return (
    <div className="App">
      <Section />

      <section className='material-demonstration-section'>
        <div className='carousel-bg'>
        <h1 className='material-demonstration-section__title'>Demonstrações de Material 3D</h1>
          <div className='carousel'>
            <Swiper
            slidesPerView={1}
            pagination={{ clickable: true}}
            navigation  
            >
              {carouselContent.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className='material-demonstration-section__img-container'>
                    <div className='material-demonstration-section__img'>
                      <img 
                        src={item.url}
                        alt='Imagem dos materiais das empresas' 
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> 
      </section>
      
      <h1 className='material-demonstration-section__title'>Conheça a Diretoria</h1>

      <article className='about-us'>
        <img
          className='about-us__perfil-img'
          src="https://64.media.tumblr.com/731a64c4a95093294f34ea847ec624a3/36ad268a37e2a8a6-08/s500x750/57ee05c677ef3bfb61487f500a10dde70781eb21.pnj" 
          alt="Foto de Perfil de Eduardo Rocha" 
        />
        <div className='about-us__content'>
          <div className='about-us__name'>Eduardo Capote</div>
          <div className='about-us__role'>Diretor e Fundador</div>

          <p className='about-us__history'>
            Fundador da empresa, Eduardo Capote possui uma experiência de mais de 20 anos de mercado, 
            sendo mais de 15 anos como Gerente Comercial, além de 15 anos de experiência acadêmica,
            tendo lecionado diversas disciplinas no curso de Administração de Empresas, Marketing e RH, 
            como por exemplo Marketing Estratégico, Marketing Digital, Estratégia Empresarial, Análise de Investimentos, 
            Análise de demonstrativos Financeiros, Gestão de RH, Desenvolvimento e Comportamento Humano, 
            Gestão de Serviços, Liderança, dentre outras.
          </p>
          <p className='about-us__history'>
          A pluralidade de conhecimentos adquiridos ao longo de mais de 20 anos de experiência no mercado, p
          roporciona à <strong>IMPÁVITTA</strong> entender a cultura da empresa e elaborar um mate rial que transmite a 
          essência da organização, passando credibilidade aos potenciais clientes
          </p>   
        </div>

        <div className='about-us__social-media'>
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
        </div>
      </article>
      
      <article className='reference'>
        <h1 className='reference__title'>Depoimentos de Empresas Renomadas que aprovam os serviços da Impávitta:</h1>

        <div className='reference-content'>
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true}}
            navigation  
            >
              {referenceContent.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className='reference-container'>
                    <img 
                      className='reference-container__img'
                      src="https://64.media.tumblr.com/89b15594d8d6ffcdfa2a1ab1ee6a03a6/7488e86fdd1778e8-05/s540x810/6b53696eb52c49f7393c23ee6b013c23bb6448ca.pnj" 
                      alt="Imagem de Escritório" 
                    />
                    <div className='reference-container2'>
                      <div className='reference-container2__name'>
                        {item.name}
                      </div>
                      <div className='reference-container2__owner'>
                        {item.owner}
                      </div>
                      <div className='reference-container2__description'>
                        {item.description}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </article>

      
    </div>
  );
}

export default App;
