import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import ProgrammerCard from './ProgrammerCard';
import { GET_PROGRAMMERS } from '../queries/programmerQueries';

export default function Programmers() {
  const { loading, error, data } = useQuery(GET_PROGRAMMERS);

  if (loading) return <Spinner />;
  if (error) return <p>Upss algo salio mal</p>;

  return (
    <>
    <p className='fw-bolder'>PROGRAMADORES</p>
      {data.programmers.length > 0 ? (
        <div className='row mt-4'>
          {data.programmers.map((programmer) => (
            <ProgrammerCard key={programmer.id} programmer={programmer} />
          ))}
        </div>
      ) : (
        <p>No Programadores</p>
      )}
    </>
  );
}
