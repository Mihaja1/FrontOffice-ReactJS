export default function Footer() {
  return (
    <>
    <footer class="main">
        <section class="section-padding footer-mid">
            <div class="container pt-15 pb-20">
                <div class="row">
                    <div class="col">
                        <div class="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                            <div class="logo mb-30">
                                <a href="index.html" class="mb-15"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                                <p class="font-lg text-heading">Awesome grocery store website template</p>
                            </div>
                            <ul class="contact-infor">
                                <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Adresse: </strong> <span>Antananarivo 101 - MADAGASCAR</span></li>
                                <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Contact: </strong><span> +261 34 15 152 62</span></li>
                                <li><img src="assets/imgs/theme/icons/icon-email-2.svg" alt="" /><strong>Email: </strong><span><a href="http://wp.alithemes.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7407151811343a1107005a171b19"> mg-enchere@gmail.com</a></span></li>
                                <li><img src="assets/imgs/theme/icons/icon-clock.svg" alt="" /><strong>Heure:</strong><span>24/24h</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <h4 class=" widget-title">Notre Société</h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">A propos</a></li>
                            <li><a href="#">Nos règles et conditions</a></li>
                            <li><a href="#">Contactez-nous</a></li>
                        </ul>
                    </div>
                    <div class="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <h4 class="widget-title">Compte</h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">Mon Compte</a></li>
                            <li><a href="#">Paramètres</a></li>
                            <li><a href="#">Inscription</a></li>
                        </ul>
                    </div>
                    <div class="footer-link-widget widget-install-app col wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <h4 class="widget-title">Installer l'application avec</h4>
                        <p class="">App Store or Google Play</p>
                        <div class="download-app">
                            <a href="#" class="hover-up mb-sm-2 mb-lg-0"><img class="active" src="assets/imgs/theme/app-store.jpg" alt="" /></a>
                            <a href="#" class="hover-up mb-sm-2"><img src="assets/imgs/theme/google-play.jpg" alt="" /></a>
                        </div>
                        <p class="mb-20">Mode de payement</p>
                        <img class="" src="assets/imgs/theme/payment-method.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <div class="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay="0">
            <div class="row align-items-center">
                <div class="col-12 mb-30">
                    <div class="footer-bottom"></div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <p class="font-sm mb-0">&copy; 2023, <strong class="text-brand">MG-Enchere</strong></p>
                </div>
                <div class="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                    <div class="hotline d-lg-inline-flex mr-30">
                        <img src="assets/imgs/theme/icons/phone-call.svg" alt="hotline" />
                        <p class="font-sm"><span>+261 34 15 152 62 <b>(24/24h)</b></span></p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                    <div class="mobile-social-icon">
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
