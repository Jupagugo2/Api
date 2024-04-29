import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddInasistencias = () => {
  const [idClase, setIdClase] = useState("");
  const [nombres, setNombres] = useState("");
  const navigate = useNavigate();

  const saveInasistencia = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/inasistencias", {
        idClase,
        nombres
      });
      navigate("/inasistencias");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveInasistencia}>
          <div className="field">
            <label className="label">ID Clase</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={idClase}
                onChange={(e) => setIdClase(e.target.value)}
                placeholder="ID Clase"
              />
            </div>
          </div>   
          <div className="field">
            <label className="label">Nombres</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                placeholder="Nombres"
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

export default AddInasistencias;
