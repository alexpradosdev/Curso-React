import React,{useState} from 'react'

export const ComponenteEstado = () => {

    const [ciudad, setCiudad] = useState("Lepe");

    const cambiarCiudad = (e) =>{
        setCiudad(e.target.value);
    }

  return (
    <div>
        {ciudad}<br/>
       <input type='text' onChange={cambiarCiudad} />
    </div>
  )
}
