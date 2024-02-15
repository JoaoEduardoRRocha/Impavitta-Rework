import React, { useState } from 'react';
import './App.css';
import Section from './Components/Section'
import Footer from './Components/Footer'
import Modal from './Components/Modal'
import Header from './Components/Header'

import { IoIosClose } from "react-icons/io";
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare, FaPlay } from "react-icons/fa";

register();

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [btnClass, setBtnClass] = useState('btn-play');
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const handleOpenModal = (url: string) => {
    setBtnClass('btn-play.open');
    setCurrentVideoUrl(url);
    setIsModalOpen(true);
    console.log('open')
  };

  const handleCloseModal = () => {
    setBtnClass('btn-play');
    setCurrentVideoUrl('');
    setIsModalOpen(false);
    console.log('close')
  };

  const carouselContent = [
    {
      id: 1,
      name: 'Ferreira Rodrigues',
      url: "https://64.media.tumblr.com/f8b95dc1e34f02e567d7e17defe1143f/7791e34b24a8236e-f5/s640x960/1b84b084ca5fcb526a97cee18413f451ed087a20.pnj",
      videoUrl: 'https://va.media.tumblr.com/tumblr_s8fbmfiuGD1a5im12_720.mp4',
    },
    {
      id: 2,
      name: 'Senhor Síndico',
      url: "https://64.media.tumblr.com/472b366009c2e38bffa32ac0e309b8bc/fdf61758cc664729-a7/s640x960/e212bb6f132cba9154745592b3eea5efeb8f00de.pnj",
      videoUrl: 'https://va.media.tumblr.com/tumblr_s8fdjdOTFX1a5im12_720.mp4',
    },
    {
      id: 3,
      name: 'CtrolR$indicos',
      url: "https://64.media.tumblr.com/02d03b721a62a97fbceee869a36d2419/6ed7360450f251c3-e9/s640x960/fd69169f4fcec413d3b53683712f11acdc7c5583.pnj",
      videoUrl: 'https://va.media.tumblr.com/tumblr_s8fdlnOMBv1a5im12_720.mp4',
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
      name: 'Administradora Sifra',
      owner: 'Dr. Francisco Nazareth',
      description: 'Eu recomendo a Impávitta para sua empresa. São muito profissionais e vão ajudar a alavancar o seu negócio',
    },
    {
      id: 4,
      name: 'Ferreira & Rodrigues',
      owner: 'Dr. Fellipe Ferreira',
      description: 'Contratei os serviços da Impávitta e não me arrependi. Pelo contrário. Fiquei muito satisfeito com o material que fizeram para a minha empresa!',
    },
  ]

  return (
    <>
      <div className="App">
        <Header />
        <Section />

        <section className='material-demonstration-section'>
          <div className='carousel-bg'>
            <h1 className='material-demonstration-section__title'>Demonstrações de Material 3D</h1>
            <div className='carousel'>
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
              >
                {carouselContent.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className='material-demonstration-section__img-container'>
                      <div className='material-demonstration-section__img'>
                        <button className='material-demonstration-section__btn-show-modal'>
                          {!isModalOpen && (
                            <FaPlay
                              className={btnClass}
                              size={40}
                              onClick={() => handleOpenModal(item.videoUrl)}
                            />
                          )}
                          <img
                            src={item.url}
                            alt='Imagem dos materiais das empresas'
                          />
                        </button>
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
              roporciona à <span>IMPÁVITTA</span> entender a cultura da empresa e elaborar um mate rial que transmite a
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
        </article>

        <article className='reference'>
          <h1 className='reference__title'>Depoimentos de Empresas Renomadas que aprovam os serviços da Impávitta:</h1>

          <div className='reference-content'>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
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

        <Footer></Footer>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className='container-btn-close'>
            <div
              className='btn-close'
              onClick={handleCloseModal}
            >
              <IoIosClose
                size={40}
                className='btn-close-border'
              />
            </div>
            <Modal url={currentVideoUrl} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
