import { useEffect } from "react";
import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useNavigate, Link } from "react-router-dom";
import ListCategorie from "../component/ListCategorie";
import EnchereList from "../component/EnchereList";
import LeftSideBar from "../component/LeftSideBar";
import Status from "../component/Status";

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
            fetch('https://ws-deploiement-enchere-production.up.railway.app/encheres/listeEnchere/'+token,{
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
                                        <h3>Liste de mes enchères</h3>
                                        <ListCategorie></ListCategorie>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                                            <div className="row product-grid-4">
                                                <p style={{color: "red"}}>{error}</p>
                                                {enchere?.map((e) => {
                                                    return(
                                                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                                            <div className="product-cart-wrap mb-30">
                                                                <div className="product-img-action-wrap">
                                                                    <div className="product-img product-img-zoom">
                                                                        <a href="shop-product-right.html">
                                                                            <img className="default-img" src={`data:image/${e?.oneImage?.format};base64,${e?.oneImage?.nomImage}`} alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="product-action-1">
                                                                        <Link to={"/detailEnchere"} state={{ idEnchere : e.idEnchere}} aria-label="Voir détail"><i className="fi-rs-eye"></i></Link>
                                                                    </div>
                                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                                        <Status status={e.statusEnchere}></Status>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content-wrap">
                                                                    <div className="product-category">
                                                                        <a href="shop-grid-right.html">{e.categorie}</a>
                                                                    </div>
                                                                    <h2><Link to={"/detailEnchere"} state={{ idEnchere : e.idEnchere}}>{e.nom}</Link></h2>
                                                                    <div>
                                                                        <span className="font-small text-muted">Par <a style={{color:"#0baf9a"}}>{e.nomVendeur} {e.prenomVendeur}</a></span>
                                                                    </div>
                                                                    <div>
                                                                        <span className="font-small text-muted"><a style={{color:"#253D4E"}}>{ (e.dateEnchere).replace("T", " à ") }</a></span>
                                                                    </div>
                                                                    <div className="product-card-bottom">
                                                                        <div className="product-price">
                                                                            <span className="font-small ml-5" style={{color:"#0baf9a"}}>{e.prixEnchere} Ar</span>
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