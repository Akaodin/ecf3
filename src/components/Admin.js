import React, {Component, Fragment} from 'react';
import Liste from './Liste';


class Admin extends Component {
        state = { 
            datas:[
                {id:1, marque:"Peugeot", modele:"208", pays:"France", image:'208.jpg'},
                {id:2, marque:"Renault", modele:"Clio4", pays:"France", image:'clio4.png'},
                {id:3, marque:"Tesla", modele:"X", pays:"USA", image:'x.jpg'},
                {id:4, marque:"BMW", modele:"M5", pays:"Allemagne", image:'m5.jpg'}
            ]
         }
         
    componentDidMount =()=>{
        if(!localStorage.getItem('dataVoiture')){
            localStorage.setItem('dataVoiture',JSON.
            stringify(this.state.datas));
        }else{
            let voitures = JSON.parse(localStorage.getItem('dataVoiture')); 
            this.setState({datas:voitures});
            }
        }

    removeVoiture = (index) => {
        console.log(index);
        const {datas} = this.state
        this.setState({
        datas: datas.filter((newTab, i) => {
            return i!==index
        })
    }, function(){ // Fonction pour stocker les données dans la page internet
        localStorage.setItem('dataVoiture', JSON.stringify(this.state.datas)) // Clé + Donnée
    })
    }

    addVoiture = (newVoiture) => {
        if(this.state.datas.length != 0){
            newVoiture.id = (this.state.datas[this.state.datas.length-1].id+1)
        }
        this.setState({datas: [...this.state.datas, newVoiture]},
            function(){
                localStorage.setItem('dataVoiture',JSON.stringify(this.state.datas));
            });
    }

    render() { 
        return ( 
            <Fragment>
                <h1 className="bg-secondary text-white text-center">Administration</h1>
                
                <Liste voitures = {this.state.datas} deleteVoiture = {this.removeVoiture}  />
            </Fragment>
         );
    }
}
 
export default Admin;