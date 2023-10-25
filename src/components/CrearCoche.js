import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export default class CrearCoche extends Component {
    cajaid = React.createRef();
    cajamarca = React.createRef();
    cajamodelo = React.createRef();
    cajaconductor = React.createRef();
    cajaimagen = React.createRef();


    state = {
        status: false
    }

    insertCoche = (e) => {
        e.preventDefault();
        var idco = parseInt(this.cajaid.current.value)
        var marca = this.cajamarca.current.value
        var modelo = this.cajamodelo.current.value
        var conductor = this.cajaconductor.current.value
        var imagen = this.cajaimagen.current.value

        var url = Global.apiCoches + "/api/Coches/InsertCoche"

        var coche = {
            idCoche: idco,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

console.log(coche)
        axios.post(url, coche).then(response => {
            this.setState({
                status: true
            })
        })

    }

    render() {

        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div>
                    <h1>Create Coches</h1>


                    <form onSubmit={this.handleSubmit} style={{ padding: "10px" }}>
                        <div className="form-group">
                            <label htmlFor="campo1">id Coche</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaid}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Marca</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajamarca}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo3">Modelo</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajamodelo}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Conductor</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaconductor}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Imagen</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaimagen}

                            />
                        </div>



                        <button type="submit" className="btn btn-primary" onClick={this.insertCoche}>Crear Coche</button>
                    </form>


                </div>
            )
        }

    }
}
