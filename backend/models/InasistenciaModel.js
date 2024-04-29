import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Inasistencia = db.define('inasistencias', {
    idClase: DataTypes.INTEGER,
    nombres: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Inasistencia;

(async()=>{
    await db.sync(); 
})();
