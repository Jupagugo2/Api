import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    cedula: DataTypes.NUMBER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync(); 
})();