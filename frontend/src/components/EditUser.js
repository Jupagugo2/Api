import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        cedula,
        nombre,
        apellido,
        telefono,
        email,
        password,
        roleId
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setCedula(response.data.cedula);
    setNombre(response.data.nombre);
    setApellido(response.data.apellido);
    setTelefono(response.data.telefono);
    setEmail(response.data.email);
    setRoleId(response.data.roleId);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>

          <div className="field">
            <label className="label">Cedula</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                placeholder="Cedula"
              />
            </div>
          </div>

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
            <label className="label">Apellido</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Teléfono</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Teléfono"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Role ID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={roleId}
                onChange={(e) => setRoleId(e.target.value)}
                placeholder="Role ID"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
