import React from 'react';
import logo from '../assets/img/logo-DH.png';

function Encabezado (){
    return (
<header className="encabezado">
    <nav id="logo">
        <a href="logo"><img src={logo} alt="Logo Digital House"/></a>
    </nav>
    <nav id="opciones">
        <ul>
            <li><a href="Inicio">Inicio</a></li>
            <li><a href="Nosotros">Nosotros</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
</header>
    )
}
export default Encabezado;