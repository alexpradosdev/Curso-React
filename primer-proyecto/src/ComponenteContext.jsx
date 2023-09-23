import React, { useContext } from 'react'
import { CiudadContextProvider } from './CiudadContextProvider'


export const ComponenteContext = () => {
    const {ciudadState, setCiudad} = useContext(CiudadContextProvider)

    const modificarCiudad = (e) => {
        e.preventDefault();

        const ciudad = {
            nombre: e.target.nombre.value,
            provincia: e.target.provincia.value,
            pais: e.target.pais.value
        }

        setCiudad(ciudad)
    }

  return (
    <div>
        {ciudadState.nombre}
        <form onSubmit={modificarCiudad}>
            <input type='text' name='nombre' placeholder='ciudad'/>
            <input type='text' name='provincia' placeholder='provincia'/>
            <input type='text' name='pais' placeholder='pais'/>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
