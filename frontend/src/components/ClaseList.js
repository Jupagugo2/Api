import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../fb";

const ClaseList = ({ setUsuario }) => {
    const [clases, setClases] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getClases();
    }, []);

    const getClases = async () => {
        const response = await axios.get("http://localhost:5000/clases");
        setClases(response.data);
    };

    const deleteClase = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/clases/${id}`);
            getClases();
        } catch (error) {
            console.log(error);
        }
    };

    const cerrarSesion = () => {
        app.auth().signOut().then(() => {
            console.log("Sesión cerrada");
            setUsuario(null);
            navigate('/login');
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
                            <th>ID Usuario</th>
                            <th>Grupo</th>
                            <th>Asignatura</th>
                            <th>Tema de Dictado</th>
                            <th>Horario</th>
                            <th>Salón</th>
                            <th>Cant. Estudiantes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clases.map((clase, index) => (
                            <tr key={clase.id}>
                                <td>{index + 1}</td>
                                <td>{clase.idUser}</td>
                                <td>{clase.grupo}</td>
                                <td>{clase.asignatura}</td>
                                <td>{clase.temaDictado}</td>
                                <td>{clase.horario}</td>
                                <td>{clase.salon}</td>
                                <td>{clase.canEstudiante}</td>
                                <td>
                                    <Link
                                        to={`edit/${clase.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteClase(clase.id)}
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

export default ClaseList;
