import React, { useContext } from 'react'
import { CiudadContextProvider } from './CiudadContextProvider';

export const MiPrimerComponente = () => {
//CODIGO JS

const {ciudadState} = useContext(CiudadContextProvider);
let numero = 2;

  return (
      <>
          <div>
              <h1>AQUI ESTÁ EL NÚMERO: {numero} Y AQUÍ ESTÁ LA CIUDAD: {ciudadState.nombre} </h1>
          </div>
      </>
  )
}
