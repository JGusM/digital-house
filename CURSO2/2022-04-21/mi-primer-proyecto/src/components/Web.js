import React from 'react';
import Encabezado from './Encabezado';
import Banner from './Banner';
import Producto from './Producto';
import Footer from './Footer'


function Web(){
  return (
    <div className="container">
     <h1>Bienvenido a nuestro primer proyecto en React</h1>
      <Encabezado/>
      <Banner/>
      <Producto/>
      <Footer/>
    </div>
  )

}
export default Web;