import { useEffect } from "react";
import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useNavigate, Link } from "react-router-dom";
import ListCategorie from "../component/ListCategorie";
import EnchereList from "../component/EnchereList";
import LeftSideBar from "../component/LeftSideBar";

export default function MesEncheres() {

    const token = localStorage.getItem("token");
    const [enchere, setEnchere] = useState([]);
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const getEncheres = () => {
        console.log(token)
        if(token == null) {
            navigate("/login");
        } else {
            fetch('http://localhost:8080/encheres/listeEnchere/'+token,{
                method : 'GET',
                headers : {'Content-Type' : 'application/json'},
            })
            .then(response => response.json())
            .then(data => {
                    var error = data.error;
                    if( error == null ){
                        setEnchere(data["data"]);
                    }
                    else{
                        setError(error.message);
                    }
                }
            );
        }
    }

    useEffect(() => {
        getEncheres();
    },[])

    return(
        <>
            <Header/>
                <main className="main">
                    <div className="container mb-30">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-4-5">
                                
                                <section className="product-tabs section-padding position-relative">
                                    <div className="section-title style-2">
                                        <h3>Liste des enchères</h3>
                                        <ListCategorie></ListCategorie>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                                            <div className="row product-grid-4">
                                                <p style={{color: "red"}}>{error}</p>
                                            {enchere.map((e) => {
                                                return(
                                                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                                            <div className="product-cart-wrap mb-30">
                                                                <div className="product-img-action-wrap">
                                                                    <div className="product-img product-img-zoom">
                                                                        <a href="shop-product-right.html">
                                                                            <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                                                                            <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="product-action-1">
                                                                        <a aria-label="Voir détail" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content-wrap">
                                                                    <div className="product-category">
                                                                        <a href="shop-grid-right.html">{e.categorie}</a>
                                                                    </div>
                                                                    <h2><a href="shop-product-right.html">{e.nom}</a></h2>
                                                                    <div className="product-rate-cover">
                                                                        <span className="font-small ml-5 text-muted">Date: {e.dateEnchere} </span>
                                                                    </div>
                                                                    <div>
                                                                        <span className="font-small text-muted">By <a>{e.nomVendeur} {e.prenomVendeur}</a></span>
                                                                    </div>
                                                                    <div className="product-card-bottom">
                                                                        <div className="product-price">
                                                                            <span>{e.prixEnchere} Ar</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Link to={"/historique"} state={{id: e.idEnchere}}><button style={{height: "40px",marginLeft: "25px"}} className="btn btn-heading btn-block hover-up">Historique</button></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <LeftSideBar></LeftSideBar>
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    )
}