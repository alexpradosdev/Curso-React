import React from 'react'

export const ComponenteEventos = () => {

    const pulsar = () =>{
        alert("Has pulsado el botón");
    }

  return (
    <div>
        <button onClick={pulsar}>
            Pulsa aquí
        </button>
    </div>
  )
}
