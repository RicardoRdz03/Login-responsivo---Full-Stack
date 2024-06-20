import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registro from "./components/Registro";
import Principal from "./components/Principal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
