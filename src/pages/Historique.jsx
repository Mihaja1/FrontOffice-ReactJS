import Footer from "../component/Footer";
import Header from "../component/Header";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Historique() {

    let token = localStorage.getItem("token"); 

    const location = useLocation();
    const  idEnchere = location.state.id;
    const [error, setError] = useState(null);

    const [historique, setHistorique] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/encheres/historiques/'+idEnchere+'/'+token,{
            method : 'GET',
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    setHistorique(data["data"]);
                }
                else{
                    setError(error.message);
                }
            }
        );
    }, []);
    

    return(
        <>
            <Header/>
            <main className="main">

                        <div className="container mb-30 mt-50">
                            <div className="row">
                                <div className="col-xl-10 col-lg-12 m-auto">
                                    <div className="mb-50">
                                        <h1 className="heading-2 mb-10">Historique</h1>
                                    </div>
                                    <div className="table-responsive shopping-summery">
                                        <table className="table table-wishlist">
                                            <thead>
                                                <tr className="main-heading">
                                                    <th scope="col" className="custome-checkbox pl-30">Nom</th>
                                                    <th scope="col" className="custome-checkbox pl-30">Offre</th>
                                                    <th scope="col" className="custome-checkbox pl-30">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <p style={{color: "red"}}>{error}</p>
                                            {historique.map((histo) => { 
                                                return(
                                                    <tr>
                                                        <td className="custome-checkbox pl-30">{histo.utilisateur.nom} {histo.utilisateur.prenom}</td>
                                                        <td className="custome-checkbox pl-30">{histo.prixOffre}</td>
                                                        <td className="custome-checkbox pl-30">{histo.dateOffre}</td>
                                                    </tr>
                                                )
                                            })} 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
            </main>
            <Footer/>
        </>
    );
}