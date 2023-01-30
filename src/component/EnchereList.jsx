const EnchereList = ({encheres}) => {
    
    
    console.log("Eto "+JSON.stringify(encheres));
    return(
        <>
            {encheres.map((enchere) => {
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
                                    <a href="shop-grid-right.html">{enchere.categorie}</a>
                                </div>
                                <h2><a href="shop-product-right.html">{enchere.nom}</a></h2>
                                <div className="product-rate-cover">
                                    <span className="font-small ml-5 text-muted">Date: {enchere.dateEnchere} </span>
                                </div>
                                <div>
                                    <span className="font-small text-muted">By <a>{enchere.nomVendeur} {enchere.prenomVendeur}</a></span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span>{enchere.prixEnchere} Ar</span>
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
