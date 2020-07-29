import React, { Fragment } from 'react';

const Accueil = () => {
    const film = JSON.parse(localStorage.getItem('dataFilm'));
    
    let test = false;
    let testV = false;
    if(film){
        test = true;
    }
    if(test && film.length > 0){
        testV = true;
    }
    console.log(film);
    return (
        <Fragment>
                <div className="container text-center">
                    <h1 className="display-4">Films à l'affiche</h1>
                    <p className="lead"></p>
                </div>
            
               
                    <div className="row m-0">
                        {test ? film.map((film, index)=>{
                            return(
                                <div className="col-md-6" key={index}>
                                    <div className="card mb-3">
                                        <div className="text-center">
                                        <img className="card-img-top w-50" src={process.env.PUBLIC_URL + '/images/'+film.image} alt="Card image cap" />
                                        </div>
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">Film : {film.film}</li>
                                                    <li className="list-group-item">Date de sortie : {film.date}</li>
                                                    <li className="list-group-item">Heure de la prochaine séance : {film.heure}</li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            )
                        }):'Pas de films actuellement'
                    }
                    </div>
            
            
        </Fragment>
     );
}
 
export default Accueil;