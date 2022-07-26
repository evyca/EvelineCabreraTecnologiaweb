import Clients from '../components/Clients';
import Projects from '../components/Projects';
import Programmers from '../components/Programmers';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';
import AddProgrammerModal from '../components/AddProgrammerModal';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
        <AddProgrammerModal />
      </div>
      <Projects />
      <hr />
      <Programmers />
      <hr />
      <Clients />
    </>
  );
}
