import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EnchereList from "../component/EnchereList";
import Footer from "../component/Footer";
import Header from "../component/Header";
import LeftSideBar from "../component/LeftSideBar";
import ListCategorie from "../component/ListCategorie";

const ResultSearch = () => {

    const [encheres, setEncheres] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/encheres/recherches',{
            method : 'POST',
            body : JSON.stringify(JSON.parse(localStorage.getItem('conditions'))),
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    setEncheres(data["data"]);
                }
            }
        );
    }, []);

    return(
        <>
        <Header></Header>
        <main className="main">
            <div className="container mb-30">
                <div className="row flex-row-reverse">
                    <div className="col-lg-4-5">
                        
                        <section className="product-tabs section-padding position-relative">
                            <div className="section-title style-2">
                                <h3>Résultat de votre recherche</h3>
                                <ListCategorie></ListCategorie>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                                    <div className="row product-grid-4">
                                        <EnchereList encheres={encheres}></EnchereList>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <LeftSideBar></LeftSideBar>
                </div>
            </div>
        </main>
        <Footer></Footer>
        </>
    )
};
export default ResultSearch;