import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "./Pages/Introduce";
import DuAn from "./Pages/DuAn";
import Clients from "./Pages/Clients";
import Contract from "./Pages/Contract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/gioi-thieu/" element={<Introduce/>}></Route>
        <Route path="/du-an/" element={<DuAn/>}></Route>
        <Route path="/khach-hang/" element={<Clients/>}></Route>
        <Route path="/lien-he/" element={<Contract/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
