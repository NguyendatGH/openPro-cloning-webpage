import { Route, Routes } from "react-router";
import HomePage from "./page/Home";
import LoginPage from "./page/Login";
import NotFound from "./page/NotFound";
import Admin from "./page/Admin";
function App() {
  return (
    <Routes>
      <Route element={<HomePage></HomePage>} path="/"></Route>
      <Route element={<NotFound></NotFound>} path="/*"></Route>
      <Route element={<LoginPage></LoginPage>} path="/login"></Route>
      <Route element={<Admin></Admin>} path="/Admin"></Route>
    </Routes>
  );
}

export default App;
