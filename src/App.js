import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import Recherche from "./pages/Recherche";
import ResultSearch from "./pages/ResultSearch";
import Accueil from "./pages/Accueil";
import MesEncheres from "./pages/MesEncheres";
import DetailEnchere from "./component/DetailEnchere";
import Termine from "./pages/Termine";
import EnCours from "./pages/EnCours";
import NonDemarre from "./pages/NonDemarre";
import Historique from "./pages/Historique";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />  
        <Route path="/inscription" element={ <Inscription /> } /> 
        <Route path="/detailEnchere" element={ <DetailEnchere /> } />  
        <Route path="/" element={ <Accueil /> } />
        <Route path="/termine" element={ <Termine /> } />
        <Route path="/encours" element={ <EnCours /> } />
        <Route path="/nondemarre" element={ <NonDemarre /> } />
        <Route path="/recherche" element={ <Recherche/> } />
        <Route path="/result-search" element={ <ResultSearch /> } />
        <Route path="/liste" element={ <MesEncheres /> } />
        <Route path="/historique" element={ <Historique /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
