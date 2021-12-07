import './Formulario.css';

import { Col, Container } from 'reactstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

import React from 'react';
import { useAuthContext } from '../context/auth';

const INITIAL_STATE = {
  tipoid: '',
  nombreCompleto: '',
  correo: '',
  fijo: '',
  celular: '',
  direccion: '',
  activo: false,
  identificacion: '',
  clave: '',
};

export function Formulario() {
  const [state, setState] = React.useState(INITIAL_STATE);
  const [donadores, setDonadores] = React.useState([]);
  const { user } = useAuthContext();

  React.useEffect(() => {
    fetchDonadores();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const fetchDonadores = () => {
    fetch('http://localhost:4000/api/donadores')
      .then((res) => res.json())
      .then(setDonadores);
  };

  const deleteDonador = (id) => {
    if (window.confirm('Realmente desea eliminar el Donador?')) {
      fetch(`http://localhost:4000/api/donadores/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((_) => {
          toast.success('Donador eliminado!');
          fetchDonadores();
        });
    }
  };

  const editDonador = (id) => {
    fetch(`http://localhost:4000/api/donadores/${id}`)
      .then((res) => res.json())
      .then((data) => setState({ ...state, ...data }));
  };

  const agregarDonador = (e) => {
    e.preventDefault();
    if (state._id) {
      fetch(`http://localhost:4000/api/donadores/${state._id}`, {
        method: 'PUT',
        body: JSON.stringify(state),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json)
        .then((data) => {
          toast.success('Donador actualizado');
          setState(INITIAL_STATE);
          fetchDonadores();
        });
    } else {
      fetch('http://localhost:4000/api/donadores', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Donador creado');
          fetchDonadores();
          setState(INITIAL_STATE);
        });
    }
  };

  return (
    <Container style={{ marginTop: '30em' }} className='form-donador'>
      <Toaster position='bottom-right' reverseOrder={true} />
      <Col sm='12'>
        <h4>Nuevo Donador</h4>
        <form onSubmit={agregarDonador} className='row g-3'>
          <div className='col-md-4'>
            <label className='form-label'>ID</label>
            <select
              className='form-select'
              name='tipoid'
              onChange={handleChange}
              value={state.tipoid}
            >
              <option>Seleccion...</option>
              <option value='CC'>CC</option>
              <option value='CE'>CE</option>
              <option value='RUT'>RUT</option>
              <option value='NIT'>NIT</option>
            </select>
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Identificación</label>
            <input
              type='text'
              className='form-control'
              name='identificacion'
              onChange={handleChange}
              value={state.identificacion}
            />
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Contraseña</label>
            <input
              type='password'
              className='form-control'
              name='clave'
              onChange={handleChange}
              value={state.clave}
            />
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Nombre completo</label>
            <input
              type='text'
              className='form-control'
              name='nombreCompleto'
              onChange={handleChange}
              value={state.nombreCompleto}
            />
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Teléfono</label>
            <input
              type='text'
              className='form-control'
              name='fijo'
              onChange={handleChange}
              value={state.fijo}
            />
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Celular</label>
            <input
              type='text'
              className='form-control'
              name='celular'
              onChange={handleChange}
              value={state.celular}
            />
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              className='form-control'
              name='correo'
              onChange={handleChange}
              value={state.correo}
            />
          </div>
          <div className='col-12'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='gridCheck'
                name='activo'
                onChange={(e) => {
                  const { name, checked } = e.target;
                  setState({ ...state, [name]: checked });
                }}
                checked={state.activo}
              />
              <label className='form-check-label' htmlFor='gridCheck'>
                Activado
              </label>
            </div>
          </div>

          <div className='col-md-6'>
            <label className='form-label'>Dirección</label>
            <input
              type='text'
              className='form-control'
              name='direccion'
              onChange={handleChange}
              value={state.direccion}
            />
          </div>

          <div className='col-12 mb-4'>
            <button
              type='submit'
              className='btn btn-primary'
              style={{ marginRight: '0.5em' }}
            >
              Guardar
            </button>
            <button
              type='button'
              className='ml-1 btn btn-info'
              onClick={() => setState(INITIAL_STATE)}
            >
              Limpiar
            </button>
          </div>
        </form>
      </Col>
      {user?.roles?.[0].name === 'admin' && (
      <Col sm='10'>
        <h4>Lista de donadores</h4>
        <table className='table table-responsive '>
          <thead>
            <tr>
              <th>ID</th>
              <th>Identificacion</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Activado</th>
              <th>Fijo</th>
              <th>Celular</th>
              <th>Correo</th>
              <th>Direccion</th>
            </tr>
          </thead>
          <tbody>
            {donadores.map((donador) => {
              return (
                <tr key={donador._id}>
                  <td>{donador.tipoid}</td>
                  <td>{donador.identificacion}</td>
                  <td>{donador.nombreCompleto}</td>
                  <td>{donador.rol}</td>
                  <td className='text-center'>
                    {donador.activo ? (
                      <FaCheckCircle className='text-success' />
                    ) : (
                      <FaTimesCircle className='text-danger' />
                    )}
                  </td>
                  <td>{donador.fijo}</td>
                  <td>{donador.celular}</td>
                  <td>{donador.correo}</td>
                  <td>{donador.direccion}</td>

                  
                    <td className='d-flex'>
                      <button
                        onClick={() => editDonador(donador._id)}
                        type='button'
                        style={{ marginRight: '.5em' }}
                        className='btn btn-info'
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deleteDonador(donador._id)}
                        type='button'
                        className='btn btn-danger'
                      >
                        Borrar
                      </button>
                    </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </Col>
      )}
    </Container>
  );
}
