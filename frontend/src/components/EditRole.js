import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditRole = () => {
    const [nombre, setNombre] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getRoleById();
    }, []);

    const updateRole = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/roles/${id}`, {
                nombre
            });
            navigate("/roles");
        } catch (error) {
            console.log(error);
        }
    };
    const getRoleById = async () => {
        const response = await axios.get(`http://localhost:5000/roles/${id}`);
        setNombre(response.data.nombre);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateRole}>
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditRole;
