import express from "express";
import {
    getClases,
    getClaseById,
    createClase,
    updateClase,
    deleteClase
} from "../controllers/ClaseController.js";

const router = express.Router();

router.get('/clases', getClases);
router.get('/clases/:id', getClaseById);
router.post('/clases', createClase);
router.patch('/clases/:id', updateClase);
router.delete('/clases/:id', deleteClase);

export default router;