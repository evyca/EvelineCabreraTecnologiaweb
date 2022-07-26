import { useState } from 'react';
import { FaCode, FaList } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROGRAMMER } from '../mutations/programmerMutations';
import { GET_PROGRAMMERS } from '../queries/programmerQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function AddClientModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [projectId, setProjectId] = useState('');
    const [cargo, setCargo] = useState('');
  
    const [addProgrammer] = useMutation(ADD_PROGRAMMER, {
      variables: { name, email, projectId, cargo },
      update(cache, { data: { addProgrammer } }) {
        const { programmers } = cache.readQuery({ query: GET_PROGRAMMERS });
        cache.writeQuery({
          query: GET_PROGRAMMERS,
          data: { programmers: [...programmers, addProgrammer] },
        });
      },
    });
  
    // Get Clients for select
    const { loading, error, data } = useQuery(GET_PROJECTS);
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      if (name === '' || email === '' || cargo === '') {
        return alert('por favor llene los campos');
      }
  
      addProgrammer(name, email, projectId, cargo);
  
      setName('');
      setEmail('');
      setCargo('');
      setProjectId('');
    };
  
    if (loading) return null;
    if (error) return 'Algo fallo';
  
    return (
      <>
        {!loading && !error && (
          <>
            <button
              type='button'
              className='btn btn-outline-info'
              data-bs-toggle='modal'
              data-bs-target='#addProgrammerModal'
            >
              <div className='d-flex align-items-center'>
                <FaCode className='icon' />
                <div>Nuevo programador</div>
              </div>
            </button>
  
            <div
              className='modal fade'
              id='addProgrammerModal'
              aria-labelledby='addProgrammerModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='addProgrammerModalLabel'>
                      Nuevo Programador
                    </h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='modal-body'>
                    <form onSubmit={onSubmit}>
                      <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className='mb-3'>
                        <label className='form-label'>Email</label>
                        <input
                          className='form-control'
                          id='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                      <div className='mb-3'>
                        <label className='form-label'>Cargo</label>
                        <select
                          id='cargo'
                          className='form-select'
                          value={cargo}
                          onChange={(e) => setCargo(e.target.value)}
                        >
                          <option value='Junior'>Junior</option>
                          <option value='Senior'>Senior</option>
                          <option value='Lider de proyecto'>Lider de proyecto</option>
                        </select>
                      </div>
  
                      <div className='mb-3'>
                        <label className='form-label'>Proyecto</label>
                        <select
                          id='projectId'
                          className='form-select'
                          value={projectId}
                          onChange={(e) => setProjectId(e.target.value)}
                        >
                          <option value=''>Seleccione Proyecto</option>
                          {data.projects.map((project) => (
                            <option key={project.id} value={project.id}>
                              {project.name}
                            </option>
                          ))}
                        </select>
                      </div>
  
                      <button
                        type='submit'
                        data-bs-dismiss='modal'
                        className='btn btn-primary'
                      >
                        Crear
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
  