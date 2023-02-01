export default function Footer() {
  return (
    <>
    <footer className="main">
        <section className="section-padding footer-mid">
            <div className="container pt-15 pb-20">
                <div className="row">
                    <div className="col">
                        <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                            <div className="logo mb-30">
                                <a href="index.html" className="mb-15"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                                <p className="font-lg text-heading">Awesome grocery store website template</p>
                            </div>
                            <ul className="contact-infor">
                                <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Adresse: </strong> <span>Antananarivo 101 - MADAGASCAR</span></li>
                                <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Contact: </strong><span> +261 34 15 152 62</span></li>
                                <li><img src="assets/imgs/theme/icons/icon-email-2.svg" alt="" /><strong>Email: </strong><span><a href="http://wp.alithemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7407151811343a1107005a171b19"> mg-enchere@gmail.com</a></span></li>
                                <li><img src="assets/imgs/theme/icons/icon-clock.svg" alt="" /><strong>Heure:</strong><span>24/24h</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <h4 className=" widget-title">Notre Société</h4>
                        <ul className="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">A propos</a></li>
                            <li><a href="#">Nos règles et conditions</a></li>
                            <li><a href="#">Contactez-nous</a></li>
                        </ul>
                    </div>
                    <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <h4 className="widget-title">Compte</h4>
                        <ul className="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">Mon Compte</a></li>
                            <li><a href="#">Paramètres</a></li>
                            <li><a href="#">Inscription</a></li>
                        </ul>
                    </div>
                    <div className="footer-link-widget widget-install-app col wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <h4 className="widget-title">Installer l'application avec</h4>
                        <p className="">App Store or Google Play</p>
                        <div className="download-app">
                            <a href="#" className="hover-up mb-sm-2 mb-lg-0"><img className="active" src="assets/imgs/theme/app-store.jpg" alt="" /></a>
                            <a href="#" className="hover-up mb-sm-2"><img src="assets/imgs/theme/google-play.jpg" alt="" /></a>
                        </div>
                        <p className="mb-20">Mode de payement</p>
                        <img className="" src="assets/imgs/theme/payment-method.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <div className="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay="0">
            <div className="row align-items-center">
                <div className="col-12 mb-30">
                    <div className="footer-bottom"></div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <p className="font-sm mb-0">&copy; 2023, <strong className="text-brand">MG-Enchere</strong></p>
                </div>
                <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                    <div className="hotline d-lg-inline-flex mr-30">
                        <img src="assets/imgs/theme/icons/phone-call.svg" alt="hotline" />
                        <p className="font-sm"><span>+261 34 15 152 62 <b>(24/24h)</b></span></p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                    <div className="mobile-social-icon">
                        <h6>Suivez-nous</h6>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}
