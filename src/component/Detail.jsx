import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import React, { useEffect, useState } from 'react'
import Footer from "./Footer";

const Detail = () => {
    
    const location = useLocation();
    const id = location.state.idEnchere;
    const [imageEnchere, setImageEnchere] = useState([]);
    const [encheres, setVEnchere] = useState();

    useEffect(() => {
        console.log("ito ilay ID  "+ id);
         fetch('http://localhost:8080/detailenchere/detail/'+id,{
             method : 'GET',
             headers : {'Content-Type' : 'application/json'},
         })
         .then(response => response.json())
         .then(data => {
                //var encheres = JSON.stringify(data["enchere"]);
                //console.log("ATOOOOOOOOOOOOOOOOO "+JSON.stringify(data["enchere"]));
                var error = data.error;
                if(error == null){
                    setVEnchere(data["enchere"]);
                    setImageEnchere(data["images"]);
                   
                }   
            }
         );
     },[]);


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
                                                    <span className="zoom-icon"><i className="fi-rs-search"></i></span>
                                                    {/* <div>
                                                        {imageEnchere.map((c) => ( 
                                                            <h1>Nom image {c.nomImage}</h1>
                                                                
                                                        ))}    
                                                    </div> */}
                                                    <div className="product-image-slider">
                                                        <figure className="border-radius-10">
                                                            <img src="assets/imgs/shop/product-16-2.jpg" alt="product image" />
                                                        </figure>
                                                        <figure className="border-radius-10">
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
                                                        </figure>
                                                    </div>
                                                   
                                                    <div className="slider-nav-thumbnails">
                                                        <div><img src="assets/imgs/shop/thumbnail-3.jpg" alt="product image" /></div>
                                                        <div><img src="assets/imgs/shop/thumbnail-4.jpg" alt="product image" /></div>
                                                        <div><img src="assets/imgs/shop/thumbnail-5.jpg" alt="product image" /></div>
                                                        <div><img src="assets/imgs/shop/thumbnail-6.jpg" alt="product image" /></div>
                                                        <div><img src="assets/imgs/shop/thumbnail-7.jpg" alt="product image" /></div>
                                                        <div><img src="assets/imgs/shop/thumbnail-8.jpg" alt="product image" /></div>
                                                        <div><img src="assets/imgs/shop/thumbnail-9.jpg" alt="product image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <div className="detail-info pr-30 pl-30">
                                                    <span className="stock-status out-stock"> Sale Off </span>
                                                    <h2 className="title-detail">{encheres.nom}</h2>
                                                    
                                                    <div className="clearfix product-price-cover">
                                                        <div className="product-price primary-color float-left">
                                                            <span className="current-price text-brand">{encheres.prixEnchere}</span>
                                                            <span className="save-price font-md color3 ml-15">{encheres.taux}</span>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="attr-detail attr-size mb-30">
                                                        <strong class="mr-10">Vendeur: </strong>
                                                        <p class="list-filter size-filter font-small">{encheres.nomVendeur} </p>
                                                    </div>
                                                    <div class="attr-detail attr-size mb-30">
                                                        <strong class="mr-10">Date enchere : </strong>
                                                        <ul class="list-filter size-filter font-small">
                                                            <li><a href="#">{encheres.dateEnchere}</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="attr-detail attr-size mb-30">
                                                        <strong class="mr-10">Duree : </strong>
                                                        <ul class="list-filter size-filter font-small">
                                                            <li><a href="#">{encheres.duree}</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="attr-detail attr-size mb-30">
                                                        <strong class="mr-10">Satut : </strong>
                                                        <ul class="list-filter size-filter font-small">
                                                            <li><a href="#">{encheres.Statut}</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="tab-style3">
                                                <ul className="nav nav-tabs text-uppercase">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">Description</a>
                                                    </li>
                                                </ul>
                                                {/* <div className="tab-content shop_info_tab entry-main-content">
                                                    <div className="tab-pane fade show active" id="Description">
                                                        <div className="">
                                                            <p>{encheres.descriptions}</p>
                                                             
                                                        </div>
                                                    </div>
                                                </div> */}
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
export default Detail;