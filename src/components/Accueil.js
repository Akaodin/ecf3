import React, { Fragment } from 'react';

const Accueil = () => {
    const voitures = JSON.parse(localStorage.getItem('dataVoiture'));
    
    let test = false;
    let testV = false;
    if(voitures){
        test = true;
    }
    if(test && voitures.length > 0){
        testV = true;
    }
    console.log(voitures);
    return (
        <Fragment>
                <div className="container text-center">
                    <h1 className="display-4">Films à l'affiche</h1>
                    <p className="lead"></p>
                </div>
            
               
                    <div className="row m-0">
                        {test ? voitures.map((voitures, index)=>{
                            return(
                                <div className="col-md-6" key={index}>
                                    <div className="card mb-3">
                                        <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/'+voitures.image} alt="Card image cap" />
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">Marque : {voitures.marque}</li>
                                                    <li className="list-group-item">Modèle : {voitures.modele}</li>
                                                    <li className="list-group-item">Pays : {voitures.pays}</li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            )
                        }):'Pas de voiture disponible'
                    }
                    </div>
            
            
        </Fragment>
     );
}
 
export default Accueil;