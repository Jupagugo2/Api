import Inasistencia from "../models/InasistenciaModel.js";

export const getInasistencias = async (req, res) => {
    try {
        const response = await Inasistencia.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);        
    }
};

export const getInasistenciaById = async (req, res) => {
    try {
        const response = await Inasistencia.findOne({
            where:{
                id: req.params.id
            }        
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createInasistencia = async (req, res) => {
    try {
        await Inasistencia.create(req.body);    
        res.status(201).json({msg: "Inasistencia Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateInasistencia = async (req, res) => {
    try {
        await Inasistencia.update(req.body,{
            where:{
                id: req.params.id
            }
        });    
        res.status(200).json({msg: "Inasistencia Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteInasistencia = async (req, res) => {
    try {
        await Inasistencia.destroy({
            where:{
                id: req.params.id
            }
        });    
        res.status(200).json({msg: "Inasistencia Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}