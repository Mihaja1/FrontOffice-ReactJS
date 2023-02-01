import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const DetailEnchere = () => {

    const [enchere, setEnchere] = useState();
    const [images, setImages] = useState([]);
    const [historiques, setHistoriques] = useState([]);

    const location = useLocation();

    const idenchere = location.state.idEnchere;

    useEffect(()=>{
        console.log("Eto "+idenchere);
        fetch('http://localhost:8080/encheres/'+idenchere,{
            method : 'GET',
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    setEnchere(data["enchere"]);
                    setImages(data["images"]);
                    setHistoriques(data["historiques"]);
                    console.log(JSON.stringify(data["historiques"]));
                }
            }
        );
    }, []);

    const [offre, setOffre] = useState();
    const [error, setError] = useState();

    function rencherir(){
        let tokenValues = localStorage.getItem("token");
        const offres = {
            idEnchere : enchere?.idEnchere,
            prixOffre : offre
        }
        fetch('http://localhost:8080/offres/rencherir/'+tokenValues,{
            method : 'POST',
            body : JSON.stringify(offres),
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    setHistoriques(data["data"]);
                }
                else{
                    setError(error);
                }
            }
        );
    }

    return(
        <>
            <Header></Header>
                <main className="main">
                    <div className="container mb-30">
                        <div className="row">
                            <div className="col-xl-11 col-lg-12 m-auto">
                                <div className="row">
                                    <div className="col-xl-9">
                                        <div className="product-detail accordion-detail">
                                            <div className="row mb-50 mt-30">
                                                <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                                    <div className="detail-gallery">
                                                        <div className="product-image-slider">
                                                            <figure className="border-radius-10">
                                                                <img src="assets/imgs/shop/product-16-2.jpg" alt="product image" />
                                                            </figure>
                                                            {/* <figure className="border-radius-10">
                                                                <img src="assets/imgs/shop/product-16-1.jpg" alt="product image" />
                                                            </figure>
                                                            <figure className="border-radius-10">
                                                                <img src="assets/imgs/shop/product-16-3.jpg" alt="product image" />
                                                            </figure>
                                                            <figure className="border-radius-10">
                                                                <img src="assets/imgs/shop/product-16-4.jpg" alt="product image" />
                                                            </figure>
                                                            <figure className="border-radius-10">
                                                                <img src="assets/imgs/shop/product-16-5.jpg" alt="product image" />
                                                            </figure>
                                                            <figure className="border-radius-10">
                                                                <img src="assets/imgs/shop/product-16-6.jpg" alt="product image" />
                                                            </figure>
                                                            <figure className="border-radius-10">
                                                                <img src="assets/imgs/shop/product-16-7.jpg" alt="product image" />
                                                            </figure> */}
                                                        </div>
                                                        {/* <div className="slider-nav-thumbnails">
                                                            <div><img src="assets/imgs/shop/thumbnail-3.jpg" alt="product image" /></div>
                                                            <div><img src="assets/imgs/shop/thumbnail-4.jpg" alt="product image" /></div>
                                                            <div><img src="assets/imgs/shop/thumbnail-5.jpg" alt="product image" /></div>
                                                            <div><img src="assets/imgs/shop/thumbnail-6.jpg" alt="product image" /></div>
                                                            <div><img src="assets/imgs/shop/thumbnail-7.jpg" alt="product image" /></div>
                                                            <div><img src="assets/imgs/shop/thumbnail-8.jpg" alt="product image" /></div>
                                                            <div><img src="assets/imgs/shop/thumbnail-9.jpg" alt="product image" /></div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-xs-12">
                                                    <div className="detail-info pr-30 pl-30">
                                                        <h2 className="title-detail">{enchere?.nom}</h2>
                                                        <div className="short-desc mb-30">
                                                            <br />
                                                            <p className="font-lg">{enchere?.descriptions}</p>
                                                        </div>
                                                        
                                                        <div className="font-xs">
                                                            <ul className="mr-50 float-start">
                                                                <li className="mb-5">Type: <span className="text-brand"> {enchere?.categorie}</span></li>
                                                                <li className="mb-5">Status:<span className="text-brand"> {enchere?.statusEnchere}</span></li>
                                                                <li>Commission: <span className="text-brand"> {enchere?.taux} %</span></li>
                                                            </ul>
                                                            <ul className="float-start">
                                                                <li className="mb-5">Par: <span className="text-brand"> {enchere?.nomVendeur} {enchere?.prenomVendeur}</span></li>
                                                                <li className="mb-5">Date: <span className="text-brand"> {((enchere?.dateEnchere)?.replace("T"," à "))}</span></li>
                                                                <li>Prix:<span className="in-stock text-brand ml-5"> {enchere?.prixEnchere} Ar</span></li>
                                                            </ul>
                                                        </div>
                                                        <div className="detail-extralink mb-50">
                                                            <div className="product-extra-link2">
                                                                <br />
                                                                <input valeu={offre} onChange={(event) => setOffre(event.target.value)} className="mr-5" type="number" style={{width: "200px" }}/>
                                                                <button onClick={rencherir} className="mb-5 button button-add-to-cart">Enchérir</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {error?.code} {error?.message}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="tab-style3">
                                                    <ul className="nav nav-tabs text-uppercase">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">Offres</a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content shop_info_tab entry-main-content">
                                                        <div className="tab-pane fade show active" id="Description">
                                                            <div className="comment-list m-auto">
                                                                {historiques?.map((h) => ( 
                                                                    <div className="single-comment justify-content-between d-flex">
                                                                        <div className="user justify-content-between d-flex">
                                                                            <div className="desc">
                                                                                <a className="font-heading text-brand">{h?.utilisateur?.nom} {h?.utilisateur?.prenom}</a>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <span className="font-xs text-muted">{h?.dateOffre?.replace("T", " à ")} </span>
                                                                                    </div>
                                                                                </div><div className="d-flex justify-content-between mb-50">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <span className="font-xs text-muted">{h?.prixOffre} Ar</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer></Footer>
        </>
    )
};
export default DetailEnchere;