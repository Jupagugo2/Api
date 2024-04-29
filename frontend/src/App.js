import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { app } from "./fb";
import Home from "./Home";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import RoleList from "./components/RoleList";
import AddRole from "./components/AddRole";
import EditRole from "./components/EditRole";
import ClaseList from "./components/ClaseList";
import AddClase from "./components/AddClase";
import EditClase from "./components/EditClase";
import InasistenciaList from "./components/InasistenciaList";
import AddInasistencia from "./components/AddInasistencia";
import EditInasistencia from "./components/EditInasistencia";
import Logueo from "./components/Logueo";
import ApiTiempo from "./components/ApiTiempo";



function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });

    // Limpiar el efecto cuando se desmonte el componente
    return () => unsubscribe();
  }, []);

  // Si el usuario no está autenticado, redirigir al inicio de sesión
  if (!usuario) {
    return <Logueo setUsuario={setUsuario} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="users/edit/:id" element={<EditUser />} />
        <Route path="edit/:id" element={<EditUser />} />
        <Route path="roles" element={<RoleList />} />
        <Route path="roles/add" element={<AddRole />} />
        <Route path="roles/edit/:id" element={<EditRole />} />
        <Route path="clases" element={<ClaseList />} />
        <Route path="clases/add" element={<AddClase />} />
        <Route path="clases/edit/:id" element={<EditClase />} />
        <Route path="inasistencias" element={<InasistenciaList />} />
        <Route path="inasistencias/add" element={<AddInasistencia />} />
        <Route path="inasistencias/edit/:id" element={<EditInasistencia />} />
        <Route path="/tiempo" element={<ApiTiempo />} />



        <Route path="login" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;