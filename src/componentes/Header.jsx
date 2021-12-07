import { Link, useNavigate } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import encabezadoImg from '../assets/img/encabezado1.jpg';
import logoImg from '../assets/img/logo que nota de futuro.png';
import { useAuthContext } from '../context/auth';

const styles = {
  color: 'rgb(252, 182, 5)',
  textDecoration: 'none',
  fontSize: '30px',
  fontWeight: 'bold',
};

export function Header() {
  const { token, logout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <header className='container-lg header-section'>
      <div className='row align-items-center header-container'>
        <div className='row banner'>
          <img
            className='img-responsive'
            src={encabezadoImg}
            alt='Banner instrumentos'
            style={{ height: 'auto' }}
          />
        </div>

        <div className='d-flex'>
          <div className='col-12  col-lg-1 logo-container'>
            <img
              className='ml-3 logo-container__site-logo '
              src={logoImg}
              alt='Logo Que nota de futuro'
            />
          </div>

          <div className='col-12 col-lg-9 site-title'>
            <h1> ¡QUE NOTA DE FUTURO!</h1>
          </div>
          <div className='col-12 col-lg-2 contadorVisitas'>
            <a
              /*href="https://www.contadorvisitasgratis.com"*/ title='contador para pagina web'
            >
              <img
                src='https://counter10.stat.ovh/private/contadorvisitasgratis.php?c=wk3cbxq7ha8rur949agkaqtkh5ww5bbw'
                border='0'
                title='contador para pagina web'
                alt='contador para pagina web'
              />
            </a>
          </div>
        </div>
        <div>
          <h5>Dona instrumentos para educar a los niños</h5>
        </div>

        <div className='row col-12 col-lg-12'>
          <nav className='nav-list'>
            <ul className='site-nav' style={{ listStyle: 'none' }}>
              {' '}
              <li>
                <Link to='/' style={styles}>
                  HOME
                </Link>
              </li>
              <li className='nav-menu-item'>
                <a href='#services' style={styles}>
                  SERVICIOS
                </a>
              </li>
              <li className='nav-menu-item'>
                <a href='#news' style={styles}>
                  NOTICIAS
                </a>
              </li>
              <li className='nav-menu-item'>
                <a href='#team' style={styles}>
                  EQUIPO UBUNTU
                </a>
              </li>
              <li className='nav-menu-item'>
                <a href='#contact' style={styles}>
                  CONTACTO
                </a>
              </li>
              {token ? (
                <li
                  className='nav-menu-item'
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  <a href='#' style={styles}>
                    SALIR
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
