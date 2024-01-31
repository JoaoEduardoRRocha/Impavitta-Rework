import React from 'react';
import './App.css';
import Section from './Components/Section'

function App() {
  return (
    <div className="App">
      <Section />

      <section className='material-demonstration-section'>
        <h1 className='material-demonstration-section__title'>Demonstrações de Material 3D</h1>

        <div className='material-demonstration-section__img-container'>
          <img
            className='material-demonstration-section__img'
            src="https://64.media.tumblr.com/2b23aba20e4392b477cf470b9ca3d31e/cb30910051b1dbc6-6e/s540x810/62835c624806b343541d9c754fbe7ab6f95dc31b.pnj" 
            alt="Foto de capa Imovest" 
          />
          <img 
            className='material-demonstration-section__img'
            src="https://64.media.tumblr.com/7dfeb73bf2f0e23a35f88dd18d0e07ba/510ca137ea8aef87-93/s1280x1920/7279dba6fa5e00d82443e18329a2d5af34430fc3.pnj" 
            alt="Foto de capa Ferreira Rodrigues" 
          />
        </div>
      </section>

    </div>
  );
}

export default App;
