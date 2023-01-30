
import { Outlet } from "react-router-dom";
import Accueil from "../Accueil";

import Footer from "../../component/Footer";
import Header from "../../component/Header";

export default function Layout(){
    return (
        <>
            <div class="site-wrap">
                <Header />
                <Accueil />
                <Footer />
            </div>
        </>

    )


}