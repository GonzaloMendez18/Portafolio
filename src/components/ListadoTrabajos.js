import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = ({limite}) => {
  return (
    
      <section className='works'>
        {
          trabajos.slice(0,limite).map(trabajos => {
            return(
              <article key={trabajos.id} className='work-item'>
              <div className='mask'>
                <img src={"/images/" + trabajos.id + ".png"}/>
              </div>
              <span>{trabajos.categorias}</span>
              <h2><Link to={"/proyecto/" + trabajos.id}>{trabajos.nombre}</Link></h2>
              <h3>{trabajos.tecnologias}</h3>
            </article>
              );
            })
          }
        </section>
  )
}
