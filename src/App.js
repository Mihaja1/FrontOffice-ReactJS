import {BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Header from "./component/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import MesEncheres from "./pages/MesEncheres";
import Historique from "./pages/Historique";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />  
        <Route path="/inscription" element={ <Inscription /> } />  
        <Route path="/" element={ <Layout /> } >
          <Route path="home" element={ <Home /> } />
        </Route>
        <Route path="/liste" element={<MesEncheres/>}></Route>
        <Route path="/historique" element={<Historique/>}></Route>
        <Route path="/head" element={<Header/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
