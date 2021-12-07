import './album.css';

import BiblioMompoxImg from '../assets/img/BiblioMompox.jpg';
import CampañaCund_ElTiempoImg from '../assets/img/CampañaCund_ElTiempo.jpg';
import CarrangaKidsImg from '../assets/img/CarrangaKids.jpg';
import ParcheExtremoTunjaImg from '../assets/img/ParcheExtremoTunja.jpg';
import React from 'react';

export function Album() {
  return (
    <div className='containerFotos col-12'>
      <h2>ALBUM</h2>
      <br />
      <br />
      <h3>
        "La música da alma al universo, alas a la mente, vuelos a la
        imaginación,
        <br />
        consuelo a la tristeza y vida y alegría a todas las cosas"
        <br />
        <br />
        Platón
      </h3>
      <br />
      <br />
      <br />
      <div className='imagen'>
        <p>IMAGEN: Bibliobarrio - Mompox</p>
        <img src={BiblioMompoxImg} alt='bibliobarriomompox' />
        <br />
        <br />
        <br />
        <p>
          IMAGEN: Campaña "Haz parte de la banda sonora de sus vidas" -
          Cundinamarca
        </p>
        <img src={CampañaCund_ElTiempoImg} alt='CampañaCund_ElTiempo' />
        <br />
        <br />
        <br />
        <p>IMAGEN: Carranga Kids</p>
        <img src={CarrangaKidsImg} alt='CarrangaKids' />
        <br />
        <br />
        <br />
        <p>IMAGEN: Parche Extremo - Tunja</p>
        <img src={ParcheExtremoTunjaImg} alt='ParcheExtremoTunja' />
      </div>
    </div>
  );
}
