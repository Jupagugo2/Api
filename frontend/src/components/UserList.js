import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../fb";

const UserList = ({ setUsuario }) => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const cerrarSesion = () => {
    app.auth().signOut().then(() => {
      console.log("Sesión cerrada");
      setUsuario(null); // Actualizar el estado de usuario a null
      navigate('/login'); // Redirigir al inicio de sesión
    }).catch((error) => {
      console.log("Error al cerrar sesión:", error);
    });
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <button onClick={cerrarSesion} className="button is-danger ml-2">
          Cerrar Sesión
        </button>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Role ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.cedula}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.telefono}</td>
                <td>{user.email}</td>
                <td>{user.roleId}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;