import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'
export const Inicio = () => {
  return (
    <div className='home'>

        <h1>
            Hola, soy Gonzalo Mendez y soy <strong>estudiante de Programacion Web </strong> en Argentina,
            y ofrezco mis servicios de <strong> Programacion </strong> y desarrollo  en
            todo tipo de proyecto web.
        </h1>

        <h2 className='title'>
          Mis Fines hoy en dia es poder comprender la Programacion al 100% para en el futuro
          poder lograr un puesto mas alto con mejores conocimientos y metodologias en esta carrera. 
          <Link to="/contacto">Contactame</Link>
        </h2>

        <section className='lasts-works'>
          <h2 className='heading'>Algunos de mis proyectos</h2>
          <p>Estos son algunos de mis trabajos de desarrollo web.</p>

          <ListadoTrabajos limite="3" />
        </section>
      </div>
  )
}
