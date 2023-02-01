import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {

    var token = localStorage.getItem("token");
    const navigate = useNavigate();

    function deconnect(e) {
        e.preventDefault();

        fetch('http://localhost:8080/utilisateur/'+token,{
            method : 'GET',
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                console.log(data);
                localStorage.removeItem("token");
                navigate("/login");
            }
        );

    }

    // useEffect(() => {
    //     if(token != null) {
    //         document.getElementById("deconnexion").style.display = block;
    //     } else{
    //         document.getElementById("deconnexion").style.display = none;
    //     }
        
    // }, [])

  return (
    <header className="header-area header-style-1 header-height-2">
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4">
                        <div className="header-info">
                            <ul>
                                <li><a>mg-enchere@gmail.com</a></li>
                                <li><a>+261 34 15 152 62</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4">
                        <div className="text-center">
                            <div id="news-flash" className="d-inline-block">
                                <ul>
                                    <li>Votre site de vente aux enchères en ligne</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="header-info header-info-right">
                            <ul>
                                <li>
                                    <a className="language-dropdown-active">MADAGASCAR</a>
                                </li>
                                <li>
                                    <a className="language-dropdown-active" href="#">ARIARY</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
            <br />
            <div className="container">
                <div className="header-wrap header-space-between position-relative">
                    <div className="header-nav d-none d-lg-flex">
                        <div className="header-nav d-none d-lg-flex">
                            <div>
                                <a href="#">
                                    <img src="assets/imgs/theme/logo.svg" alt="logo" />
                                </a>
                            </div>
                            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                <nav>
                                    <ul>
                                        <li className="mr-60"></li>
                                        <li className="mr-60">
                                            <Link to="/"><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} className="svgInject" alt="" src="assets/imgs/theme/icons/home-page.png" /> Accueil</Link>
                                        </li>
                                        <li className="mr-60">
                                            <a href="index.html"><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} className="svgInject" alt="" src="assets/imgs/theme/icons/about-us.png" /> A propos</a>
                                        </li>
                                        <li className="mr-60">
                                            <Link to="/liste"><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} className="svgInject" alt="" src="assets/imgs/theme/icons/mes-encheres.png" /> Mes enchères</Link>
                                        </li>
                                        <li className="mr-60">
                                            <a><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} className="svgInject" alt="" src="assets/imgs/theme/icons/enchere.png" /> Enchères <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><Link to="/encours">En cours</Link></li>
                                                <li><Link to="/nondemarre">Non-démarrées</Link></li>
                                                <li><Link to="/termine">Terminées </Link></li>
                                            </ul>
                                        </li>
                                        <li className="mr-60">
                                            <a><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} className="svgInject" alt="" src="assets/imgs/theme/icons/icon-user.svg" /> Compte <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/login"><i className="fi fi-rs-user mr-10"></i>Mon compte</Link>
                                                </li>
                                                <li>
                                                    <a href="page-account.html"><i className="fi fi-rs-settings-sliders mr-10"></i>Paramètres</a>
                                                </li>
                                                <li id="deconnexion">
                                                    <Link to="/head" onClick={deconnect}><i className="fi fi-rs-sign-out mr-10"></i>Se déconnecter</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <br />
        </div>
    </header>
  );
}
