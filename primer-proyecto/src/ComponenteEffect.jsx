import React,{useEffect, useState} from 'react'

export const ComponenteEffect = () => {
    const [nombre, setNombre] = useState("Juan");
    const [apellido, setApellido] = useState("Pérez");

    useEffect(() => {
        console.log("Se ha cargado el componente o ha habido cambios en él");
    },[])

    useEffect(() => {
        console.log("Se ha cargado el componente o ha habido cambios en él");
    },[nombre])

    const cambiarNombre = (e) =>{
        setNombre(e.target.value);
    }

    const cambiarApellido = (e) =>{
        setApellido("Gómez");
    }



  return (
    <div>
        <h2>Usando el useEffect</h2>
        {nombre}<br/>
       <input type='text' onChange={cambiarNombre} />
          <button onClick={cambiarApellido}>
              Cambiar Apellido
          </button><br/>
       {apellido}
    </div>
  )
}
