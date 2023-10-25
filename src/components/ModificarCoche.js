import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export default class ModificarCoche extends Component {
   
    cajaid = React.createRef();
    cajamarca = React.createRef();
    cajamodelo = React.createRef();
    cajaconductor = React.createRef();
    cajaimagen = React.createRef();
   
    modificarDepar = (e) => {
        e.preventDefault();
        var idco = parseInt(this.props.idcoche)
        var marca = this.cajamarca.current.value
        var modelo = this.cajamodelo.current.value
        var conductor = this.cajaconductor.current.value
        var imagen = this.cajaimagen.current.value

        var url = Global.apiCoches + "api/coches/updatecoche"
        console.log(url)
        var coche = {
            idCoche: idco,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }
        console.log(coche)

        axios.put(url, coche).then(response => {
            this.setState({
                status: true
            })
        })

    }




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

        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {

            return (

                <div>
                    <h1>Modificar Departamento id: {this.props.iddepartamento} </h1>
                    <NavLink to={"/"} className="btn btn-success">Volver</NavLink>

                    <form onSubmit={this.handleSubmit} style={{ padding: "10px" }}>
                        <div className="form-group">
                            <label htmlFor="campo1">id Coche</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaid}
                                defaultValue={this.state.coche.idCoche}
                                readOnly

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Marca</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajamarca}
                                defaultValue={this.state.coche.marca}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo3">Modelo</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajamodelo}
                                defaultValue={this.state.coche.modelo}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Conductor</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaconductor}
                                defaultValue={this.state.coche.conductor}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Imagen</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaimagen}
                                defaultValue={this.state.coche.imagen}

                            />
                        </div>



                        <button type="submit" className="btn btn-primary" onClick={this.modificarDepar}>Modificar Coche</button>
                    </form>

                </div>
            )
        }
    }
}
