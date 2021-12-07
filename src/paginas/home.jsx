import { Link, useNavigate } from 'react-router-dom';

import { Noticias } from '../componentes/Noticias';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import anaMariaImg from '../assets/img/AnaMaria.png';
import bateristaImg from '../assets/img/Bateristamboton.png';
import beneficiariosImg from '../assets/img/beneficiarios.jpg';
import cieloImg from '../assets/img/CieloR.png';
import gislenaImg from '../assets/img/Gislena.png';
import gloriaImg from '../assets/img/GloriaG.png';
import instrumentosImg from '../assets/img/instrumentos.jpg';
import normaImg from '../assets/img/Norma.png';
import { useAuthContext } from '../context/auth';

export function Home() {
  const { login, token, user } = useAuthContext();
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <main>
      <Toaster position='bottom-right' reverseOrder={true} />
      {token ? (
        <div className='container text-center'>
          <h1 className=' text-dark'>
            Bienvenid@ {user?.username} disfruta de la mejor experiencia
          </h1>
          <button
            className='btn btn-primary'
            onClick={() => navigate('/Formulario')}
          >
            Ir a donadores
          </button>
          <button
            style={{ marginLeft: '10px' }}
            className='btn btn-primary'
            onClick={() => navigate('/instrumentos')}
          >
            Ir a instrumentos
          </button>
        </div>
      ) : (
        <form
          className='row form-ingreso'
          onSubmit={(e) => {
            e.preventDefault();
            login(state);
          }}
        >
          <div className='col-12 col-lg-1' />
          <div className='col-12 col-lg-5' style={{ alignItems: 'center' }}>
            <p>
              Ingrese su correo:{' '}
              <input
                type='text'
                id='nombre'
                name='email'
                onChange={handleChange}
                value={state.email}
              />
            </p>
          </div>
          <div className='col-12 col-lg-5'>
            <p>
              Ingrese su clave:{' '}
              <input
                type='password'
                id='clave'
                name='password'
                onChange={handleChange}
                placeholder='*****'
                value={state.password}
              />
            </p>
          </div>
          <div className='col-12 col-lg-1'>
            <button type='submit'>Aceptar</button>
          </div>
        </form>
      )}

      <hr />

      <div className='container-lg'>
        <section id='services' className='services-section'>
          <div className='row title-container'>
            <h2>SERVICIOS</h2>
          </div>
          <div className='row services-info'>
            <article className='col-12 col-md-6 col-lg-4'>
              <img
                className='services-info__imagen'
                src={bateristaImg}
                alt='niño baterista con ollas'
              />
              <h2 className='services-info__title'>
                <Link to='/donadores'>DONACIONES</Link>
              </h2>
              <p className='services-info__text'>
                En este espacio ingresan los donantes para registrarse en la
                Fundación y realizar sus donaciones de de instrumentos
                musicales.
              </p>
            </article>

            <article className='col-12 col-md-6 col-lg-4'>
              <img
                className='services-info__imagen'
                src={instrumentosImg}
                alt='instrumentos musicales'
              />
              <h2 className='services-info__title'>
                <Link to='/instituciones'>INSTITUCIONES EDUCATIVAS</Link>
              </h2>
              <p className='services-info__text'>
                Proximamente iniciaremos inscripciones para las Instituciones
                Educativas interesadas en hacer parte del proyecto “ ¡QUE NOTA
                DE FUTURO! “
              </p>
            </article>

            <article className='col-12 col-md-6 col-lg-4'>
              <img
                className='services-info__imagen'
                src={beneficiariosImg}
                alt='niños con instrumentos'
              />
              <h2 className='services-info__title'>
                <Link to='/album'>ALBUM</Link>
              </h2>
              <p className='services-info__text'>
                Encuentra acá las fotografías de los niños beneficiarios del
                programa disfrutando de los instrumentos y llenando de alegría
                sus vidas.
              </p>
            </article>
          </div>
        </section>
        <hr />
        <section id='news' className='news-section'>
          <div className='row title-container'>
            <h2>NOTICIAS</h2>
          </div>
          <Noticias />
        </section>
        <hr />
        <section id='team' className='team-section'>
          <div className='row title-container'>
            <h2>EQUIPO UBUNTU</h2>
          </div>
          <div id='envoltorioServicios' className='row'>
            <article id='servicio1' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={anaMariaImg} alt='' />
              <center>
                <h3>Ana María Giraldo</h3>
              </center>
              <p>
                Administradora de Empresas Turísticas y Hoteleras, estoy
                estudiando programación porque quiero hacer parte de la cuarta
                revolución industrial, soy una apasionada por la enseñanza por
                que se que el futuro del mundo depende de niños bien preparados
                y sobremodo muy amados.
              </p>
            </article>

            <article id='servicio2' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={gloriaImg} alt='' />
              <center>
                <h3>Gloria Gutiérrez</h3>
              </center>
              <p>
                Diseñadora Gráfica Publicitaria, deseo a través de la
                programación ofrecer opciones creativas a diferentes problemas,
                el proyecto me motivó porque para mis los niños merecen un mejor
                futuro y considero que la música es importante para la vida y
                sirve para expresarse, crear vínculos y fomentar valores.
              </p>
            </article>

            <article id='servicio3' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={gislenaImg} alt='' />
              <center>
                <h3>Adriana Gislena Gil</h3>
              </center>
              <p>
                Especialista en Control de Tiempo, Control de Costos y Control
                de Avance de Proyectos. Experiencia en el Análisis de Sistemas
                de Información. El Proyecto ¡Que Nota de Futuro! me ofrece la
                oportunidad de aplicar mis conocimientos con finalidad social.
              </p>
            </article>
            <article className='col-12 col-lg-2'></article>
            <article id='servicio3' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={cieloImg} alt='' />
              <center>
                <h3>Cielo Rueda</h3>
              </center>
              <p>
                {' '}
                Ingeniero Electrónico, experiencia con Sistemas de Gestión y
                Sistemas de Análisis de Datos. Me motiva desarrollar una
                solución donde se pueda tener centralizada la información de los
                donantes y de los beneficiarios. Educar y culturizar nuestros
                niños y jovenes haran que ellos forgen nuestro futuro.
              </p>
            </article>
            <article id='servicio3' className='col-12 col-md-6 col-lg-4 equipo'>
              <img className='team-info__imagen' src={normaImg} alt='' />
              <center>
                <h3>Norma P. Ceballos</h3>
              </center>
              <p>
                {' '}
                Ingeniera de Software. Me encanta el proyecto porque la música
                abre espacios, alienta esperanzas y facilita cumplir los sueños
                de nuestros pequeños. La ayuda de quien puede ofrecerla con el
                alma es un peldaño más para el crecimiento y proyección de los
                niños artistas.
              </p>
            </article>
            <article className='col-12 col-lg-2'></article>
          </div>
        </section>
      </div>
    </main>
  );
}
