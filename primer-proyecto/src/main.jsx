import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { MiPrimerComponente } from './MiPrimerComponente'
import { ComponenteArray } from './ComponenteArray'
import { ComponenteProps } from './ComponenteProps'
import { ComponenteEventos } from './ComponenteEventos'
import { ComponenteEstado } from './ComponenteEstado'
import { ComponenteEffect } from './ComponenteEffect'
import { ComponenteFetch } from './ComponenteFetch'
import { ComponenteForm } from './ComponenteForm'
import { RutasGenerales } from './RutasGenerales'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RutasGenerales/>
    {/*<MiPrimerComponente />
    <ComponenteArray />
    <ComponenteProps ciudad="Lepe" provincia="Huelva" codPost={21440} >
      <h1>ESPAÑA</h1>
    </ComponenteProps>
    <ComponenteEventos/>
    <ComponenteEstado />
    <ComponenteEffect />
    <ComponenteFetch /> 
<ComponenteForm />*/}
  </>
)
