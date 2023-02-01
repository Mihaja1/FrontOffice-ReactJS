import { useState } from "react";
import { useNavigate } from "react-router-dom";
import enchere from "../img/enchere.jpeg";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Login(){

    const [email, setEmail] = useState("Rakoto@gmail.com");
    const [mdp, setMdp] = useState("123LAZA");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function authentificate(e) {
        e.preventDefault();

        var utilisateur = {
            "email": email,
            "motDePasse": mdp
        }

        fetch('http://localhost:8080/utilisateur/loginUser',{
            method : 'POST',
            body : JSON.stringify(utilisateur),
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then((value)=>{
            if (value.token) {
                localStorage.setItem("token", value.token.tokenValues);
                return navigate("/liste");
            } else if (value.error) {
                setError(value.error.message);
            }
        })

    }

    return (
        <>
            <Header />
            <main className="main pages">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                                        <img style={{height: "350px"}} className="border-radius-15" src={enchere} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-8">
                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h1 className="mb-5">Login</h1>
                                                    <p className="mb-30">Vous n'avez pas de compte? <a href="page-register.html">Inscrivez-vous</a></p>
                                                </div>
                                                <form onSubmit={authentificate}>
                                                    <div className="form-group">
                                                        <input type="text" required="" name="email" value={email} onChange={(e) => (setEmail(e.target.value))} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input required="" type="password" name="password" value={mdp} onChange={(e) => setMdp(e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-heading btn-block hover-up">Se connecter</button>
                                                    </div>
                                                    <p style={{color: "red"}}>{error}</p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>

    )

}