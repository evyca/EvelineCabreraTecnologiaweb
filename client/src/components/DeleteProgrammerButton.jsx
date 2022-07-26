import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_PROGRAMMER } from '../mutations/programmerMutations';
import { GET_PROGRAMMERS } from '../queries/programmerQueries';
import { useMutation } from '@apollo/client';

export default function DeleteProgrammerButton({ programmerId }) {
  const navigate = useNavigate();

  const [deleteProgrammer] = useMutation(DELETE_PROGRAMMER, {
    variables: { id: programmerId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROGRAMMERS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteProgrammer}>
        <FaTrash className='icon' /> Delete Programmer
      </button>
    </div>
  );
}
