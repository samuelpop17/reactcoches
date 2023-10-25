import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


export default class DetallesCoches extends Component {
   
   
    state = {
        coche: {},
        status: false
    }
   
    findCoche = () => {

        var url = Global.apiCoches + "api/coches/FindCoche/" + this.props.idcoche
        console.log(url)
        axios.get(url).then((response) => {
            this.setState({
                coche: response.data,
                statGet: true
            })

            

        })

    }
    componentDidMount = () => {
        this.findCoche();
    }
   
   
   
    render() {
        return (
            <div>
                <h1>Detalles Coche con id: {this.props.idcoche}</h1>
                

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>IDcoche</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Imagen</th>




                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr >

                            <td>{this.state.coche.idCoche}</td>
                            <td>{this.state.coche.marca}</td>
                            <td>{this.state.coche.modelo}</td>
                            <td>{this.state.coche.conductor}</td>
                            <td><img src={this.state.coche.imagen} style={{height:"150px"}}/></td>



                        </tr>

                    </tbody>
                </table>
                <br></br>
                <NavLink to={"/"} className="btn btn-success">Volver</NavLink>
            </div>
        )
    }
}
