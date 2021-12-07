import { FaGithub } from 'react-icons/fa';
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

export function Footer() {
  return (
    <footer id='contact' className='footer-section'>
      <div className='row justify-content-space-evenly'>
        <article className='col-12 offset-md-1 col-md-5'>
          <h2>Contacto</h2>

          <p>Centro Mariano de Alfabetización</p>
          <p>Vereda la Esmeralda km7 Escuela Pbro. Emilio Botero</p>
          <p>Teléfono. 317 669 43 97</p>
          <p />
          <a
            href='https://github.com/AyniCreations/QueNotadeFuturo.git'
            target='_blank'
          >
            <FaGithub style={{ fontSize: '2em' }} />
          </a>
        </article>
        <article className='col-12 offset-md-1 col-md-5'>
          <h2>EQUIPO UBUNTU</h2>

          <p>
            <a
              className='text-white'
              href='http://t.me/anagir10'
              target='_blank'
            >
              Ana María Giraldo: Product Owner
            </a>{' '}
          </p>
          <p>
            <a
              className='text-white'
              href='http://t.me/agisgil'
              target='_blank'
            >
              Adriana Gislena Gil: Team Development
            </a>
          </p>
          <p>
            <a
              className='text-white'
              href='http://t.me/cielorueda'
              target='_blank'
            >
              {' '}
              Cielo A. Rueda: Team Development
            </a>{' '}
          </p>
          <p>
            <a
              className='text-white'
              href='http://t.me/GloriaBGG'
              target='_blank'
            >
              Gloria B. Gutiérrez: Team Development
            </a>
          </p>
          <p>
            <a
              className='text-white'
              href='http://t.me/Normape2201'
              target='_blank'
            >
              Norma P. Ceballos: Team Development{' '}
            </a>
          </p>
        </article>
      </div>
    </footer>
  );
}
