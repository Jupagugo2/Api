import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Clase = db.define('clases', {
    idUser: DataTypes.STRING,
    grupo: DataTypes.STRING,
    asignatura: DataTypes.STRING,
    temaDictado: DataTypes.STRING,
    horario: DataTypes.STRING,
    salon: DataTypes.STRING,
    canEstudiante: DataTypes.NUMBER
}, {
    freezeTableName: true
});

export default Clase;

(async () => {
    await db.sync();
})();
