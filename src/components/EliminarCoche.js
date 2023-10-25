import React, { Component } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Swal from 'sweetalert2';

export default class EliminarCoche extends Component {
    state = {
        status: false
    }

    deletecoche = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esta acción.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                var url = Global.apiCoches + "/api/coches/deletecoche/" + this.props.idcoche;

                axios.delete(url).then(response => {
                    this.setState({
                        status: true
                    });
                    Swal.fire(
                        'Eliminado!',
                        'El coche ha sido eliminado.',
                        'success'
                    );
                });
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.status === true &&
                    (<Navigate to="/" />)
                }
                <h1>EliminarDepartamento</h1>
                <h1>¿Quieres eliminar este departamento, con id: {this.props.iddepartamento}?</h1>
                <button className="btn btn-danger" onClick={this.deletecoche}>Eliminar</button>
                <NavLink to={"/"} className="btn btn-success">Volver</NavLink>
            </div>
        )
    }
}
