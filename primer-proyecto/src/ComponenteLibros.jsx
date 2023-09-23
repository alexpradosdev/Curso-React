import React, { useEffect, useReducer } from 'react'
import { LibrosReducer } from './LibrosReducer'

export const ComponenteLibros = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("libros"));
    }

    const [libros, dispatch] = useReducer(LibrosReducer,[], init)

    useEffect(() => {
        localStorage.setItem("libros", JSON.stringify(libros));
    })

    const crearLibro = (e) => {
        e.preventDefault();

        let libro = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value
        }

        e.target.titulo.value = '';

        const action = {
            type:'crear',
            payload: libro
        }

        dispatch(action);

    }

    const borrar = (id) => {
        const action = {
            type:'borrar',
            payload: id
        }

        dispatch(action);
    }

    const editar = (e,id) => {
        let libroEdit = {
            id: id,
            titulo: e.target.value
        }

        e.target.value = '';

        const action = {
            type: 'editar',
            payload: libroEdit
        }

        dispatch(action);
    }

  return (
    <div>
        <ul>
            {libros.map((libro) => {
                return(
                    <li key={libro.id}>{libro.titulo}
                    <button onClick={(e) => borrar(libro.id)}>borrar</button>
                    <input type='text' onKeyDown={e=>{
                        if(e.key == 'Enter'){
                            editar(e, libro.id)
                        }
                    }}/></li>
                )
            })}
        </ul>
        <form onSubmit={crearLibro}>
            <input type='text' name='titulo' placeholder='libro' />
            <input type='submit' value='Guardar' />
        </form>
    </div>
  )
}
