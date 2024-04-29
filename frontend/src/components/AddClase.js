import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddClase = () => {
  const [idUser, setIdUser] = useState("");
  const [grupo, setGrupo] = useState("");
  const [asignatura, setAsignatura] = useState("");
  const [temaDictado, setTemaDictado] = useState("");
  const [horario, setHorario] = useState("");
  const [salon, setSalon] = useState("");
  const [canEstudiante, setCanEstudiante] = useState("");
  const navigate = useNavigate();

  const saveClase = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/clases", {
        idUser,
        grupo,
        asignatura,
        temaDictado,
        horario,
        salon,
        canEstudiante
      });
      navigate("/clases");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveClase}>
          <div className="field">
            <label className="label">ID Usuario</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={idUser}
                onChange={(e) => setIdUser(e.target.value)}
                placeholder="ID Usuario"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Grupo</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={grupo}
                onChange={(e) => setGrupo(e.target.value)}
                placeholder="Grupo"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Asignatura</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={asignatura}
                onChange={(e) => setAsignatura(e.target.value)}
                placeholder="Asignatura"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Tema de Dictado</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={temaDictado}
                onChange={(e) => setTemaDictado(e.target.value)}
                placeholder="Tema de Dictado"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Horario</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                placeholder="Horario"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Salón</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={salon}
                onChange={(e) => setSalon(e.target.value)}
                placeholder="Salón"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Cantidad de Estudiantes</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={canEstudiante}
                onChange={(e) => setCanEstudiante(parseInt(e.target.value))}
                placeholder="Cantidad de Estudiantes"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClase;
