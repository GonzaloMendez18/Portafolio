import React from 'react';
import {Routes, Route, BrowserRouter, NavLink, Navigate} from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Proyecto } from '../components/Proyecto';
import { Servicios } from '../components/Servicios';
import { Footer } from '../layout/Footer';
import { HeaderNav } from '../layout/HeaderNav';

export const MisRutas = () => {
  return (
    <div>
        <BrowserRouter>
            {/*HEADER Y NAVEGACION*/}
            <HeaderNav/>

            {/*CONTENIDO PRINCIPAL*/}
            <section className='content'>

              <Routes>
                  <Route path='/' element={<Navigate to="/inicio"/>}/>
                  <Route path='/inicio' element={<Inicio/>}/>
                  <Route path='/portafolio' element={<Portafolio/>}/>
                  <Route path='/servicios' element={<Servicios/>}/>
                  <Route path='/curriculum' element={<Curriculum/>}/>
                  <Route path='/contacto' element={<Contacto/>}/>
                  <Route path='/proyecto/:id' element={<Proyecto/>}/>
                  <Route path='*' element={
                    <div className='page'>
                        <h1 className='heading'>Error 404</h1>
                    </div>    
                    }/>
              
              </Routes>
            
            </section>



            {/*FOOTER*/}
            <Footer/>

        </BrowserRouter>
    </div>
  )
}
