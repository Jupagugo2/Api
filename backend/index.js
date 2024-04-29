import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import RoleRoute from "./routes/RoleRoute.js";
import ClaseRoute from "./routes/ClaseRoute.js";
import InasistenciaRoute from "./routes/InasistenciaRoute.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(RoleRoute);
app.use(ClaseRoute);
app.use(InasistenciaRoute);

app.listen(5000, ()=> console.log('Server up and running...'));