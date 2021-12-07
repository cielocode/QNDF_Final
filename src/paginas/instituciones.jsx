import './instituciones.css';

import React from 'react';
import boyImg from '../assets/img/boy.webp';

export function Instituciones() {
  return (
    <div className='container-body  col-12'>
      <div>
        <h2>INSTITUCIONES EDUCATIVAS RURALES</h2>
        <br />
        <h6>
          El proyecto “Que nota de futuro” tiene como objetivo formar personas
          integrales mediante la praxis artística de la música, fortaleciendo la
          convivencia y cultura social desde, con y para los niños, los
          adolescentes, los jóvenes y sus familias a través del conocimiento de
          la música y su disfrute.
        </h6>
        <br />
        <h6>
          Los estudiantes de las distintas instituciones rurales hacen parte de
          las actividades colectivas en iniciación musical e instrumental,
          lenguaje musical, técnica instrumental, práctica coral y expresión
          corporal que son el punto de partida para impulsar la cultura rural
          logrando que los estudiantes sean actores activos con perspectiva
          transformadora.
        </h6>
        <br />
        <h6>
          La música se integra al programa educativo mostrando la diversidad y
          pluralidad de los territorios y fortaleciendo las competencias en el
          ser, el saber y el hacer, los cuales se nutren de las relaciones
          socio-afectivas que se crean a través del convivir en la diversidad y
          la singularidad compartida en un ámbito socio-cultural rural.
        </h6>
        <br />
        <h6>
          La fundación “que nota de futuro” cuenta con un inventario de
          instrumentos y un listado de donantes que necesita integrar a las
          instituciones educativas por medio de una aplicación web donde todos
          los usuarios puedan realizar sus transacciones.
        </h6>

        <br />
        <br />
        <center>
          <img src={boyImg} alt='niño solitario' />
        </center>
        <br />
        <br />
        <br />

        <h2>INSCRIBETE A NUESTRO PROGRAMA MUSICAL</h2>
        <br />
        <h6>* Registrar la institucion educativa en el formulario.</h6>
        <h6>* ¿Cuál es su proyecto musical?</h6>
        <h6>* Número de estudiantes interesados.</h6>
        <h6>* Número y tipo de instrumentos.</h6>
      </div>
    </div>
  );
}
