import React, { Component } from 'react';

import Noticia from './NoticiaUI';
import carta from '../assets/img/carta.jpg';
import edumusical from '../assets/img/Educacionmusical.jpg';
import maguare from '../assets/img/maguare.jpg';
import musicoterapia from '../assets/img/musicoterapia.jpg';

export class Noticias extends Component {
  render() {
    return (
      <div className='.container-fluid d-flex justify-contente-center'>
        <div className='row'>
          <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
            <Noticia
              imgsrc={carta}
              title='CARTA ANÓNIMA DE UN PROFESOR DE MÚSICA'
              summary='Valor es lo que necesita la música como herramienta para educar y humanizar. 
                            Dar valor es creer en el proyecto socio-artístico en sí mismo, tomárselo en serio y respetarlo. 
                            La institución educativa y las clases de música integran lo que se denomina una “comunidad artística de aprendizaje”. 
                            La práctica musical refuerza los valores que son elementos integrantes de la “inteligencia emocional”, vital para el éxito personal y social.'
              web='http://musicthinkshout.com/2016/11/02/carta-anonima-de-un-profesor-de-escuela-de-musica-y-reflexion/'
            />
          </div>
          <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
            <Noticia
              imgsrc={maguare}
              title='¡DISFRUTA DE MAGUARÉ!'
              summary='Te invitamos a disfrutar de Maguaré, el portal para niños de la Estrategia Digital en Cultura y 
                            Primera Infancia del Ministerio de Cultura. Cuenta con más de 600 contenidos entre juegos, canciones, videos, 
                            libros y aplicaciones para que los niños de primera infancia, en compañía de un adulto, puedan explorar y divertirse 
                            a través de su voz, su cuerpo, su imaginación, sus movimientos y todos sus sentidos.'
              web='https://www.maguare.gov.co'
            />
          </div>
          <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
            <Noticia
              imgsrc={edumusical}
              title='LA EDUCACIÓN MUSICAL EN COLOMBIA'
              summary='En esta entrevista, Andrés Samper, presidente del Foro Latinoamericano de Educación Musical, FLADEM, 
                            y docente de música de la Pontificia Universidad Javeriana, habla sobre la formación musical en Colombia, 
                            cómo estamos en comparación con América Latina y cuáles son los desafíos que tiene el sistema educativo actual.'
              web='http://www.viajerosdelpentagrama.gov.co/Joomla/index.php/14-comunidad/contenido-valioso/120-la-educacion-musical-en-colombia-desafios-y-realidades-vp'
            />
          </div>
          <div className='col-xs-6 col-sm-6 col-lg-6 col-md-6'>
            <Noticia
              imgsrc={musicoterapia}
              title='¿QUÉ ES LA MUSICOTERAPIA?'
              summary='La Musicoterapia es una terapia que utiliza la música con el objeto de restaurar, mantener e incrementar 
                            la salud mental o física de la persona, estableciendo un espacio de comunicación que permite favorecer tanto 
                            la introspección como la extroversión.'
              web='https://colombia.unir.net/actualidad-unir/musicoterapia/'
            />
          </div>
        </div>
      </div>
    );
  }
}
