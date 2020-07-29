import React, {Component, Fragment} from 'react';
import Liste from './Liste';
import Ajout from './Ajout'


class Admin extends Component {
        state = { 
            datas:[
                {id:1, film:"Joker", date:"21 Janvier", heure:"14H30", image:'joker.jpg'},
                {id:2, film:"Interstellar", date:"2 Fevrier", heure:"15H50", image:'interstellar.jpg'},
                {id:3, film:"Inception", date:"32 Mars", heure:"23H10", image:'inception.jpg'},
                {id:4, film:"Avatar", date:"26 Aout", heure:"9H45", image:'avatar.jpg'}
            ]
         }
         
    componentDidMount =()=>{
        if(!localStorage.getItem('dataFilm')){
            localStorage.setItem('dataFilm',JSON.
            stringify(this.state.datas));
        }else{
            let film = JSON.parse(localStorage.getItem('dataFilm')); 
            this.setState({datas:film});
            }
        }

    removeFilm = (index) => {
        console.log(index);
        const {datas} = this.state
        this.setState({
        datas: datas.filter((newTab, i) => {
            return i!==index
        })
    }, function(){ // Fonction pour stocker les données dans la page internet
        localStorage.setItem('dataFilm', JSON.stringify(this.state.datas)) // Clé + Donnée
    })
    }

    addFilm = (newFilm) => {
        if(this.state.datas.length != 0){
            newFilm.id = (this.state.datas[this.state.datas.length-1].id+1)
        }
        this.setState({datas: [...this.state.datas, newFilm]},
            function(){
                localStorage.setItem('dataFilm',JSON.stringify(this.state.datas));
            });
    }

    render() { 
        return ( 
            <Fragment>
                <h1 className="bg-secondary text-white text-center">Administration</h1>
                <Ajout transmettre = {this.addFilm} />
                <Liste film = {this.state.datas} deleteFilm = {this.removeFilm}  />
            </Fragment>
         );
    }
}
 
export default Admin;