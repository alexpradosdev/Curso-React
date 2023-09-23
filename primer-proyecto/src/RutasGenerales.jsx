import React from 'react'
import {useState} from 'react'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import { MiPrimerComponente } from './MiPrimerComponente'
import { ComponenteArray } from './ComponenteArray'
import { ComponenteProps } from './ComponenteProps'
import { ComponenteEventos } from './ComponenteEventos'
import { ComponenteEstado } from './ComponenteEstado'
import { ComponenteEffect } from './ComponenteEffect'
import { ComponenteFetch } from './ComponenteFetch'
import { ComponenteForm } from './ComponenteForm'
import { Componente404 } from './Componente404'
import { ComponenteMemo } from './ComponenteMemo'
import { CiudadContextProvider } from './CiudadContextProvider'
import { ComponenteContext } from './ComponenteContext'
import { ComponenteApi } from './ComponenteApi'
import { ComponenteLibros } from './ComponenteLibros'


export const RutasGenerales = () => {

    const ciudad = {
        nombre:'',
        provincia:'',
        pais:''
    }

    const [ciudadState, setCiudad] = useState(ciudad)


  return (
    
    <BrowserRouter>
        
        <nav>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/array'}>Ejemplo Arrays</NavLink></li>
                <li><NavLink to={'/props'}>Ejemplo Props</NavLink></li>
                <li><NavLink to={'/eventos'}>Ejemplo Eventos</NavLink></li>
                <li><NavLink to={'/estado'}>Ejemplo Estado</NavLink></li>
                <li><NavLink to={'/effect'}>Ejemplo Effect</NavLink></li>
                <li><NavLink to={'/fetch'}>Ejemplo Fetch</NavLink></li>
                <li><NavLink to={'/form'}>Ejemplo Form</NavLink></li>
            </ul>
        </nav>
            <CiudadContextProvider.Provider value={{ciudadState, setCiudad}}>
              <Routes>
                  <Route path='/' element={<MiPrimerComponente />} />
                  <Route path='/primer' element={<MiPrimerComponente />} />
                  <Route path='/array' element={<ComponenteArray />} />
                  <Route path='/props' element={
                      <ComponenteProps ciudad="Lepe" provincia="Huelva" codPost={21440} >
                          <h1>ESPAÑA</h1>
                      </ComponenteProps>} />
                  <Route path='/eventos' element={<ComponenteEventos />} />
                  <Route path='/estado' element={<ComponenteEstado />} />
                  <Route path='/effect' element={<ComponenteEffect />} />
                  <Route path='/fetch' element={<ComponenteFetch />} />
                  <Route path='/form' element={<ComponenteForm />} />
                  <Route path='/form/:ciudad' element={<ComponenteForm />} />
                  <Route path='*' element={<Componente404 />} />
                  <Route path='/memo' element={<ComponenteMemo />} />
                  <Route path='/context' element={<ComponenteContext />} />
                  <Route path='/api' element={<ComponenteApi />} />
                  <Route path='/libros' element={<ComponenteLibros />} />
              </Routes>
            </CiudadContextProvider.Provider>
        
    </BrowserRouter>











  )
}
