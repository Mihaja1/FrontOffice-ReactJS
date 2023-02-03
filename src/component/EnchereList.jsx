import { Link } from "react-router-dom";
import Status from "./Status";

const EnchereList = ({encheres}) => {
    return(
        <>
            {encheres.map((enchere) => {
                return(
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src={`data:image/${enchere?.oneImage?.format};base64,${enchere?.oneImage?.nomImage}`} alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <Link to={"/detailEnchere"} state={{ idEnchere : enchere.idEnchere}} aria-label="Voir détail"><i className="fi-rs-eye"></i></Link>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <Status status={enchere.statusEnchere}></Status>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">{enchere.categorie}</a>
                                </div>
                                <h2><Link to={"/detailEnchere"} state={{ idEnchere : enchere.idEnchere}}>{enchere.nom}</Link></h2>
                                <div>
                                    <span className="font-small text-muted">Par <a style={{color:"#0baf9a"}}>{enchere.nomVendeur} {enchere.prenomVendeur}</a></span>
                                </div>
                                <div>
                                    
                                    <span className="font-small text-muted">
                                        <a style={{color:"#253D4E"}}>
                                            { (enchere.dateEnchere).replace("T", " à ") }
                                        </a>
                                    </span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span className="font-small ml-5" style={{color:"#0baf9a"}}>{enchere.prixEnchere} Ar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            })}
        </>
    )
};
export default EnchereList;
