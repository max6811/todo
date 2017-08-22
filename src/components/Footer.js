
import React from 'react'
import FilterLink from './FilterLink'

const Footer = () =>(
    <div className="footer">
        Mostrar:
        <FilterLink filter="SHOW_TODOS" >Todos</FilterLink> { ' ' }
        <FilterLink filter="SHOW_ACTIVES">Activos</FilterLink> { ' ' }
        <FilterLink filter="SHOW_COMPLETES">Completados</FilterLink>
    </div>
)

export default Footer
