import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"
import { NavLink } from 'react-router-dom'
export default class HomeCoches extends Component {
 
 state={
    coches:[],
    status:false
 }
 
    loadCoches = () => {
        
        
        var url=Global.apiCoches+"api/coches"
        console.log(url)
        axios.get(url).then((response) => {
          this.setState({
            coches: response.data,
            status:true
          })
    
    
    
        })
      }

    componentDidMount = () => {
        this.loadCoches();
      }
 
 
 
    render() {

        if(this.state.status==false){
            return(<div>
                <img src={Global.imagenLoading} style={{width:"250px"}}/>
            </div>)
        }

    return (
        <div>
        <h1>Home Coches</h1>

        <table className="table table-striped">
          <thead>
            <tr>

              <th>ID Coche</th>
              <th>Marca</th>
              <th>Detalles</th>
              <th>Eliminar</th>
              <th>Modificar</th>


              
            </tr>
          </thead>
          <tbody>
            {this.state.coches.map((coche,index) => (
              <tr key={index}>

                <td>{coche.idCoche}</td>
                <td>{coche.marca}</td>
                <td>{<NavLink to={"/detallecoches/"+coche.idCoche} className="btn btn-primary">Detalles</NavLink>}</td>
                <td>{<NavLink to={"/eliminarcoches/"+coche.idCoche} className="btn btn-danger">Eliminar</NavLink>}</td>
                <td>{<NavLink to={"/modificarcoche/"+coche.idCoche} className="btn btn-warning">Modificar</NavLink>}</td>

                
                </tr>
            ))}
          </tbody>
        </table>


      </div>
    )
    
  }
}
