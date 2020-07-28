import React from 'react';
import '../App.css';

const Liste = (props) => {
    //console.log(props.voitures);
    return ( 
        <table className='table table-striped'>
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Marque</th>
                    <th>Modèle</th>
                    <th>Pays</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {props.voitures ? props.voitures.map((voitures, index) =>{
                    return(
                        <tr key = {index}>
                            <td className="align-middle">{voitures.id}</td>
                            <td className="align-middle">{voitures.marque}</td>
                            <td className="align-middle">{voitures.modele}</td>
                            <td className="align-middle">{voitures.pays}</td>
                            <td className="align-middle"><img src={process.env.PUBLIC_URL + '/images/'+voitures.image} width='123' /></td>
                            <td>
                            <button className="btn btn-danger" 
                                onClick={() =>{if(window.confirm('Etes vous sûr de  supprimer'))
                                                {props.deleteVoiture(index)
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