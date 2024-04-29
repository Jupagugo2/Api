import express from "express";
import { 
    getInasistencias, 
    getInasistenciaById, 
    createInasistencia, 
    updateInasistencia, 
    deleteInasistencia 
} from "../controllers/InasistenciaController.js";

const router = express.Router();

router.get('/inasistencias', getInasistencias);
router.get('/inasistencias/:id', getInasistenciaById);
router.post('/inasistencias', createInasistencia);
router.patch('/inasistencias/:id', updateInasistencia);
router.delete('/inasistencias/:id', deleteInasistencia);

export default router;
