import { Route, Routes } from "react-router";
import NotFound from "./page/notFound/NotFound";
import HomePage from "./page/Home/Home";
import Login from "./page/Login/Login";
import { Register } from "./page/Register/Register";
import { Admin } from "./page/Admin/Admin";
function App() {
  return (
    <Routes>
      <Route element={<HomePage></HomePage>} path="/"></Route>
      <Route element={<NotFound></NotFound>} path="/*"></Route>
      <Route element={<Login></Login>} path="/login"></Route>
      <Route element={<Register></Register>} path="/register"></Route>
      <Route element={<Admin></Admin>} path="/Admin"></Route>
    </Routes>
  );
}

export default App;
