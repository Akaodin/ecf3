import React, {Component, Fragment} from 'react';

class Ajout extends Component {
    initFilm = { 
        id:1,
        film:'',
        date:'',
        heure:'',
        image:''
     }
     state = this.initFilm

     modifChamp = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
     }
    
     envoyer = () => {
         console.log(this.state);
         this.props.transmettre(this.state)
     }

    render() { 
        const {film, date, heure, image} = this.state
        return ( 
            <Fragment>
                <div className="text-right">
                    <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus"></i> Ajouter un film</button>
                </div>
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Ajout d'un film</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="film">Film : </label>
                                            <input type="text" onChange={this.modifChamp} value={film} className="form-control" id="film" placeholder="Entrez le nom du film" name="film"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date de sortie : </label>
                                        <input type="text" onChange={this.modifChamp} value={date} className="form-control" id="date" placeholder="Date de sortie du film" name ="date" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="heure">Heure de la séance : </label>
                                        <input type="text" onChange={this.modifChamp} value={heure} className="form-control" id="heure" placeholder="Heure de la prochaine séance" name ="heure" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Image : </label>
                                        <input type="img" onChange={this.modifChamp} value={image}  className="form-control" id="image" placeholder="Ajoutez l'image du film" name ="image" />
                                    </div>
                                    <button type="button" onClick={this.envoyer} className="btn btn-success btn-block" data-dismiss="modal">Ajouter un film</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Ajout;