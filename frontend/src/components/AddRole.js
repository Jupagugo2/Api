import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRole = () => {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  const saveRole = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/roles", {
        nombre

      });
      navigate("/roles");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveRole}>
          <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
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

export default AddRole;

    