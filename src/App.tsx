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

    </div>
  );
}

export default App;
