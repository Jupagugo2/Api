import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../fb";

const InasistenciaList = ({ setUsuario }) => {
    const [inasistencias, setInasistencias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getInasistencias();
    }, []);

    const getInasistencias = async () => {
        const response = await axios.get("http://localhost:5000/inasistencias");
        setInasistencias(response.data);
    };

    const deleteInasistencia = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/inasistencias/${id}`);
            getInasistencias();
        } catch (error) {
            console.error(error);
        }
    };

    const cerrarSesion = () => {
        app.auth().signOut().then(() => {
            console.log("Sesión cerrada");
            setUsuario(null);
            navigate('/login');
        }).catch((error) => {
            console.error("Error al cerrar sesión:", error);
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
                            <th>ID Clase</th>
                            <th>Nombres</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inasistencias.map((inasistencia, index) => (
                            <tr key={inasistencia.id}>
                                <td>{index + 1}</td>
                                <td>{inasistencia.idClase}</td>
                                <td>{inasistencia.nombres}</td>
                                <td>
                                    <Link
                                        to={`edit/${inasistencia.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteInasistencia(inasistencia.id)}
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

export default InasistenciaList;
