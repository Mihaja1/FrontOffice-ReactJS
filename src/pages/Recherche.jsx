import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Recherche = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/result-search");
    }, []);
    
};
export default Recherche;