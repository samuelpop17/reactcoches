import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuCoches from './MenuCoches';
import HomeCoches from './HomeCoches';
import DetallesCoches from './DetallesCoches';
import EliminarCoche from './EliminarCoche';
import CrearCoche from './CrearCoche';
import ModificarCoche from './ModificarCoche';


export default class Router extends Component {
  render() {


    function DetalleCocheElement(){
        var { idcoche} = useParams();
          return <DetallesCoches idcoche={idcoche} />
    }
    function EliminarCocheElement(){
        var { idcoche} = useParams();
          return <EliminarCoche idcoche={idcoche} />
    }
    function ModificarCocheElement(){
        var { idcoche} = useParams();
          return <ModificarCoche idcoche={idcoche} />
    }







    return (
        <BrowserRouter>
        <MenuCoches/>
          <Routes>
          <Route path="/" element={<HomeCoches/>}/>
          <Route path="/crear" element={<CrearCoche/>}/>
          <Route path='/detallecoches/:idcoche' element={<DetalleCocheElement/>}></Route> 
          <Route path='/eliminarcoches/:idcoche' element={<EliminarCocheElement/>}></Route> 
          <Route path='/modificarcoche/:idcoche' element={<ModificarCocheElement/>}></Route> 
          
          </Routes>
        </BrowserRouter>
    )
  }
}
