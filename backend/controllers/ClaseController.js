import Clase from "../models/ClaseModel.js";

export const getClases = async (req, res) => {
    try {
        const response = await Clase.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getClaseById = async (req, res) => {
    try {
        const response = await Clase.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createClase = async (req, res) => {
    try {
        await Clase.create(req.body);
        res.status(201).json({ msg: "Clase Created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateClase = async (req, res) => {
    try {
        await Clase.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Clase Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteClase = async (req, res) => {
    try {
        await Clase.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Clase Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};