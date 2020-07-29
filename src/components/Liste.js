import React from 'react';
import '../App.css';

const Liste = (props) => {
    //console.log(props.film);
    return ( 
        <table className='table table-striped'>
            <thead className="thead-dark">
                <tr>
                    <th>Film</th>
                    <th>Date de sortie</th>
                    <th>Heure</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {props.film ? props.film.map((film, index) =>{
                    return(
                        <tr key = {index}>
                            <td className="align-middle">{film.film}</td>
                            <td className="align-middle">{film.date}</td>
                            <td className="align-middle">{film.heure}</td>
                            <td className="align-middle"><img src={process.env.PUBLIC_URL + '/images/'+film.image} width='123' /></td>
                            <td>
                            <button className="btn btn-danger" 
                                onClick={() =>{if(window.confirm('Etes vous sûr de  supprimer'))
                                                {props.deleteFilm(index)
                                              };
                                        }}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                })
                : 'Pas de donnees' }
            </tbody>
        </table>
     );
}
 
export default Liste;