import { FaEnvelope, FaPhone, FaIdBadge , FaStackExchange ,FaStar ,FaInfo} from 'react-icons/fa';

export default function ProjectInfo({ project }) {
  return (
    <>
      <h5 className='mt-5'>Es parte del proyecto</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaInfo className='icon' /> {project.name}
        </li>
        <li className='list-group-item'>
          <FaStackExchange className='icon' /> {project.description}
        </li>
        <li className='list-group-item'>
          <FaStar className='icon' /> {project.status}
        </li>
      </ul>
    </>
  );
}
