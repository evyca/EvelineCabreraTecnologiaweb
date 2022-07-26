import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ProjectInfo from '../components/Projectinfo';
import DeleteProgrammerButton from '../components/DeleteProgrammerButton';
import EditProgrammerForm from '../components/EditProgrammerForm';
import { useQuery } from '@apollo/client';
import { GET_PROGRAMMER } from '../queries/programmerQueries';

export default function Programmer() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROGRAMMER, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Ocurrio un error</p>;

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>

          <h1>{data.programmer.name}</h1>
          <p>{data.programmer.email}</p>

          <h5 className='mt-3'>Cargo</h5>
          <p className='lead'>{data.programmer.cargo}</p>

          <ProjectInfo project={data.programmer.project} />

          <EditProgrammerForm programmer={data.programmer} />

          <DeleteProgrammerButton programmerId={data.programmer.id} />
        </div>
      )}
    </>
  );
}
