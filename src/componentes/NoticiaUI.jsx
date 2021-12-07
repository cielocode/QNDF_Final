import './noticia-style.css';

import React from 'react';

const Noticia = (props) => {
  return (
    <div
      className='noticia text-center animate__animated animate__fadeInUp'
      shadow
    >
      <div className='overflow'>
        <img src={props.imgsrc} alt='' className='noticia-img-top' />
      </div>
      <div className='noticia-body text-dark'>
        <h4 className='noticia-title'>
          <a href={props.web}> {props.title}</a>
        </h4>
        <p className='noticia-text text-secondary'> {props.summary}</p>
      </div>
    </div>
  );
};

export default Noticia;
