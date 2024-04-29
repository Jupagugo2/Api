import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditInasistencia = () => {
    const [idClase, setIdClase] = useState("");
    const [nombres, setNombres] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getInasistenciaById();
    }, []);

    const updateInasistencia = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/inasistencias/${id}`, {
                idClase,
                nombres
            });
            navigate("/inasistencias");
        } catch (error) {
            console.log(error);
        }
    };

    const getInasistenciaById = async () => {
        const response = await axios.get(`http://localhost:5000/inasistencias/${id}`);
        setIdClase(response.data.idClase);
        setNombres(response.data.nombres);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateInasistencia}>
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditInasistencia;
