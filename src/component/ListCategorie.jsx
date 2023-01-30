import { useState, useEffect } from "react";

const ListCategorie = () => {

    const [categories, setCategorie] = useState([]);

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
                }
            }
        );
    }, []);
    
    return(
        <>
            <ul className="nav nav-tabs links" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">Catégories</button>
                </li>
                {categories.map((c) => ( 
                    
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">{c.valeur}</button>
                    </li>
                ))}
            </ul>
        </>
    )
};
export default ListCategorie;