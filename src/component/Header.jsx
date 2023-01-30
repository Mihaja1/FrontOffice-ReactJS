export default function Header() {
  return (
    <header className="header-area header-style-1 header-height-2">
        <div class="header-top header-top-ptb-1 d-none d-lg-block">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-3 col-lg-4">
                        <div class="header-info">
                            <ul>
                                <li><a>mg-enchere@gmail.com</a></li>
                                <li><a>+261 34 15 152 62</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="text-center">
                            <div id="news-flash" class="d-inline-block">
                                <ul>
                                    <li>Votre site de vente aux enchères en ligne</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4">
                        <div class="header-info header-info-right">
                            <ul>
                                <li>
                                    <a class="language-dropdown-active">MADAGASCAR</a>
                                </li>
                                <li>
                                    <a class="language-dropdown-active" href="#">ARIARY</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom header-bottom-bg-color sticky-bar">
            <br />
            <div class="container">
                <div class="header-wrap header-space-between position-relative">
                    <div class="header-nav d-none d-lg-flex">
                        <div className="header-nav d-none d-lg-flex">
                            <div>
                                <a href="#">
                                    <img src="assets/imgs/theme/logo.svg" alt="logo" />
                                </a>
                            </div>
                            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                <nav>
                                    <ul>
                                        <li className="mr-90"></li>
                                        <li className="mr-90">
                                            <a href="index.html"><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} class="svgInject" alt="" src="assets/imgs/theme/icons/home-page.png" /> Accueil</a>
                                        </li>
                                        <li className="mr-90">
                                            <a href="index.html"><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} class="svgInject" alt="" src="assets/imgs/theme/icons/about-us.png" /> A propos</a>
                                        </li>
                                        <li className="mr-90">
                                            <a href="index.html"><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} class="svgInject" alt="" src="assets/imgs/theme/icons/mes-encheres.png" /> Mes enchères</a>
                                        </li>
                                        <li className="mr-90">
                                            <a><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} class="svgInject" alt="" src="assets/imgs/theme/icons/enchere.png" /> Enchères <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><a>En cours</a></li>
                                                <li><a>Non-démarrées</a></li>
                                                <li><a>Terminées </a></li>
                                            </ul>
                                        </li>
                                        <li className="mr-90">
                                            <a><img style={{objectFit:"cover", objectPosition:"center", height:"25px", width:"25px" }} class="svgInject" alt="" src="assets/imgs/theme/icons/icon-user.svg" /> Compte <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="page-account.html"><i className="fi fi-rs-user mr-10"></i>Mon compte</a>
                                                </li>
                                                <li>
                                                    <a href="page-account.html"><i className="fi fi-rs-settings-sliders mr-10"></i>Paramètres</a>
                                                </li>
                                                <li>
                                                    <a href="page-login.html"><i className="fi fi-rs-sign-out mr-10"></i>Se déconnecter</a>
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