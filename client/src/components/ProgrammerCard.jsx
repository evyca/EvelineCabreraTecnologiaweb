export default function ProgrammerCard({ programmer }) {
    return (
      <div className='col-md-4'>
        <div className='card mb-3'>
          <div className='card-body bg-light'>
            
              <h5 className='card-title'>{programmer.name}</h5>
              <p className="card-text">{programmer.email}-<b>{programmer.cargo}</b></p>
              <a className='btn btn-primary' href={`/programmers/${programmer.id}`}>
                View
              </a>
                     
          </div>
        </div>
      </div>
    );
  }
  