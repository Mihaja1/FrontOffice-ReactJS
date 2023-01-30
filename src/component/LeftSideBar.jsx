import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const LeftSideBar = () => {

    const [categories, setCategorie] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/categorie/liste',{
            method : 'GET',
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    setCategorie(data["data"]);
                }
            }
        );
    }, []);
    
    return(
        <>
            <div className="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">
                <div class="sidebar-widget widget-category-2 mb-30">
                    <h5 class="section-title style-1 mb-30">Category</h5>
                    <ul>
                        {categories.map((categorie) => ( 
                                
                            <li key={categorie.idCategorie}>
                                <Link to="#">{categorie.valeur}</Link>
                            </li>
                        ))}
                    </ul>
                </div>       
                

                <div className="sidebar-widget range mb-30">
                    <h5 className="section-title style-1 mb-30">Rechercher par</h5>

                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Prix Min</label>
                            <input type="number" name="prixMin" style={{width:"130px", height:"40px"}}/>
                        </div>
                    </div>
                    
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Prix Max</label>
                            <input type="number" name="prixMin" style={{width:"130px", height:"40px"}}/>
                        </div>
                    </div>

                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Date Min</label>
                            <input type="datetime-local" step="1" name="dateMin" style={{height:"40px"}}/>
                        </div>
                    </div>

                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Date Max</label>
                            <input type="datetime-local" step="1" name="dateMax" style={{height:"40px"}}/>
                        </div>
                    </div>
                    
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Catégories</label>
                            <select name="" id="" className="select-active">
                                {categories.map((c) => ( 
                                    <option value={c.idCategorie}>{c.valeur}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <br />

                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Status</label>
                            <select name="" id="" className="select-active">
                                <option value="">Test</option>
                            </select>
                        </div>
                    </div>

                    <br />

                    <a href="shop-grid-right.html" className="btn btn-sm btn-default">Rechercher</a>
                </div>

                {/* <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                    <h5 className="section-title style-1 mb-30">Les plus récents</h5>
                    start boucle 
                        <div className="single-post clearfix">
                            <div className="image">
                                <img src="assets/imgs/shop/thumbnail-3.jpg" alt="#" />
                            </div>
                            <div className="content pt-10">
                                <h5><a href="shop-product-detail.html">Chen Cardigan</a></h5>
                                <p className="price mb-0 mt-5">$99.50</p>
                                <div className="product-rate">
                                    <div className="product-rating" style={{width: "90%"}}></div>
                                </div>
                            </div>
                        </div>
                    end boucle 
                </div> */}
                    
            </div>
            
        </>
    )
};
export default LeftSideBar;