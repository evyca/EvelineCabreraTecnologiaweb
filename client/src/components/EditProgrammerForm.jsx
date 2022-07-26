import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PROGRAMMER } from "../queries/programmerQueries";
import { UPDATE_PROGRAMMER } from "../mutations/programmerMutations";

export default function EditProgrammerForm({ programmer }) {
  const [name, setName] = useState(programmer.name);
  const [email, setEmail] = useState(programmer.email);
  const [cargo, setCargo] = useState(programmer.cargo);
  
  const [updateProgrammer] = useMutation(UPDATE_PROGRAMMER, {
    variables: { id: programmer.id, name, email, cargo },
    refetchQueries: [{ query: GET_PROGRAMMER, variables: { id: programmer.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !cargo) {
      return alert("Porfavor llene los campos");
    }

    updateProgrammer(name, email, cargo);
  };

  return (
    <div className="mt-5">
      <h3>Actualizar programador detalle</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cargo</label>
          <select
            id="cargo"
            className="form-select"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          >
            <option value="yunior">Yunior</option>
            <option value="senior">Senior</option>
            <option value="lider_proyecto">Lider de proyecto</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
}
