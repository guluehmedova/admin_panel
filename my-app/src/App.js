import { AddUser, Layout, UserList } from "./components/index";
import { Login } from "./pages";
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />} path="/*"/>
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
