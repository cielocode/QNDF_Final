import React from 'react';

export function Donadores() {
  return (
    <main>
      <div class='container-lg'>
        <div class='row title-container' style={{ color: 'rgb(252, 182, 5) ' }}>
          <center>
            <h2>REGISTRO DE DONACIONES</h2>
          </center>
        </div>
      </div>
      <br />
      <br />
      <form action='form-donador' target='_blank'>
        <div class='row' style={{ marginRight: '40px', marginLeft: '40px' }}>
          <div class='col-12 col-lg-3'>
            <p>
              Tipo Empresa:
              <select name='tipoempresa'>
                <option>Persona Natural</option>
                <option>Persona Juridica</option>
              </select>
              <dr />
            </p>
          </div>
          <div class='col-12 col-lg-3'>
            <p>
              Tipo Documento:
              <select name='tipodocumento'>
                <option>Cédula Ciudadania</option>
                <option>Cédula Extrangeria</option>
                <option>Pasaporte</option>
                <option>Nit</option>
              </select>
            </p>
          </div>
          <div class='col-12 col-lg-6' style={{ position: 'center' }}>
            <p>
              Número de Identificación:{' '}
              <input type='text' name='numeroidentificacion' size='47' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Nombre o Razón Social:{' '}
              <input type='text' name='nombrecompleto' size='45' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Apellidos: <input type='text' name='Apellidos' size='61' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Email: <input type='text' name='Email' size='61' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Dirección: <input type='text' name='direccion' size='61' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Número de teléfono fijo:{' '}
              <input type='text' name='fijo' size='45' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Número de teléfono móvil:{' '}
              <input type='text' name='movil' size='46' />
            </p>
          </div>
          <div>
            <p>
              Deja un mensaje:
              <br />
              <textarea name='mensaje' rows='3' cols='150'></textarea>
            </p>
          </div>
          <hr />
          <div class='col-12 col-lg-6'>
            <p>
              Tipo Instrumento:
              <select name='tipoinstrumento'>
                <option>Cuerda</option>
                <option>Viento</option>
                <option>Percusión</option>
              </select>
              <dr />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Nombre del Instrumento:{' '}
              <input type='text' name='nombreinstrumento' size='47' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Valor del Instrumento:{' '}
              <input type='text' name='valordelinstrumento' size='50' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Número de Factura:{' '}
              <input type='text' name='Apellidos' size='52' />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Estado Instrumento:
              <select name='estadoinstrumento'>
                <option>Nuevo</option>
                <option>Usado</option>
              </select>
              <dr />
            </p>
          </div>
          <div class='col-12 col-lg-6'>
            <p>
              Forma de envío:
              <select name='formadeenvio'>
                <option>Directamente el Donante</option>
                <option>La Fundación lo recoge</option>
              </select>
            </p>
          </div>
          <div class='col-12 col-lg-12'>
            <p>
              Deja alguna información adicional del instrumento:
              <br />
              <textarea name='mensaje' rows='3' cols='150'></textarea>
            </p>
          </div>
          <div>
            <p>
              <input type='submit' value='Enviar información' />
            </p>
          </div>
        </div>
      </form>
    </main>
  );
}
