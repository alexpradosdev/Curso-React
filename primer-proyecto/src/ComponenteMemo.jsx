import React, { useMemo, useState } from 'react'

export const ComponenteMemo = () => {

    const [saludo, setSaludo] = useState('hola');
    const [arrayNumeros, setArrayNumeros] = useState([1,2,3,4,5]);

    const saludar = () => {
        if (saludo == 'hola')
        {
            setSaludo('adios');
        }
        else
        {
            setSaludo('hola');
        }
    }

    const mostrarArray = () => {useMemo(() => {
        for(let i=0; i<arrayNumeros.length; i++){
            setTimeout(() => {
                console.log(arrayNumeros[i]);
            }, i*1000);
        }
    },[arrayNumeros])
}

    const cambiarArray = () => {
        setArrayNumeros([6,7,8,9,10]);
    }
    

  return (
    <div>
        {saludo}<br/>
        {mostrarArray()}

        <button onClick={saludar}>Saludo</button>
        <button onClick={cambiarArray}>Cambiar Array</button>
    </div>
  )
}
