import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LeftSideBar = () => {

    const [categories, setCategorie] = useState([]);

    const [status, setStatus] = useState([]);

    const navigate = useNavigate();

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
                    setStatus(data["status"]);
                }
            }
        );
    }, []);

    const [prixMin, setPrixMin] = useState('');
    const [prixMax, setPrixMax] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [idCategorie, setIdCategorie] = useState('');
    const [idStatus, setIdStatus] = useState('');
    const [nom, setNom] = useState('');

    function rechercher() {

        var condition = {
            "nom" : nom,
            "prixMin" : prixMin,
            "prixMax" : prixMax,
            "dateMin" : dateDebut,
            "dateMax" : dateFin,
            "idCategorie" : idCategorie,
            "status" : idStatus
        };
        localStorage.setItem("conditions",JSON.stringify(condition));
        navigate("/recherche");
    }
    
    return(
        <>
            <div className="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">
                <div className="sidebar-widget widget-category-2 mb-30">
                    <h5 className="section-title style-1 mb-30">Catégories</h5>
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
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Nom</label>
                            <input type="text" name="nom" style={{width:"170px", height:"40px"}} value={nom} onChange={(event) => setNom(event.target.value)}/>
                        </div>
                    </div>

                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Prix Min</label>
                            <input type="number" name="prixMin" style={{width:"145px", height:"40px"}} value={prixMin} onChange={(event) => setPrixMin(event.target.value)}/>
                        </div>
                    </div>
                    
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Prix Max</label>
                            <input type="number" name="prixMax" style={{width:"145px", height:"40px"}} value={prixMax} onChange={(event) => setPrixMax(event.target.value)}/>
                        </div>
                    </div>

                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Date Min</label>
                            <input type="datetime-local" step="1" name="dateMin" style={{width:"215px", height:"40px"}} value={dateDebut} onChange={(event) => setDateDebut(event.target.value)}/>
                        </div>
                    </div>

                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Date Max</label>
                            <input type="datetime-local" step="1" name="dateMax" style={{width:"215px", height:"40px"}} value={dateFin} onChange={(event) => setDateFin(event.target.value)}/>
                        </div>
                    </div>
                    
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <label className="fw-900 mr-10" for="exampleCheckbox31">Catégories</label>
                            <select name="idCategorie" className="select-active" onChange={(event) => setIdCategorie(event.target.value)}>
                                <option value={idCategorie}>Choisir...</option>
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
                            <select name="status" className="select-active" onChange={(event) => setIdStatus(event.target.value)}>
                                <option value={idStatus}>Choisir...</option>
                                {status.map((s) => ( 
                                    <option value={s.idStatus}>{s.valeur}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <br />

                    <a className="btn btn-sm btn-default" onClick={rechercher}>Rechercher</a>
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