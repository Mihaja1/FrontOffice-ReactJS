import { Link } from "react-router-dom";
import LeftSideBar from "../component/LeftSideBar";
import ListCategorie from "../component/ListCategorie";
import { useState, useEffect } from "react";
import EnchereList from "../component/EnchereList";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Termine = () => {

    const [encheres, setEncheres] = useState([]);

    useEffect(()=>{
        fetch('https://ws-deploiement-enchere-production.up.railway.app/v_enchere/listeEncheresTermine',{
            method : 'GET',
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    setEncheres(data["data"]);
                }
            }
        );
    }, []);
    
    return(
        <>
        <Header></Header>
        <main className="main">
            <div className="container mb-30">
                <div className="row flex-row-reverse">
                    <div className="col-lg-4-5">
                        
                        <section className="product-tabs section-padding position-relative">
                            <div className="section-title style-2">
                                <h3>Liste des enchères terminées</h3>
                                <ListCategorie></ListCategorie>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                                    <div className="row product-grid-4">
                                        <EnchereList encheres={encheres}></EnchereList>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <LeftSideBar></LeftSideBar>
                </div>
            </div>
        </main>
        <Footer></Footer>
        </>
    )
};
export default Termine;