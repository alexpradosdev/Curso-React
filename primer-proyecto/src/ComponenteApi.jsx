import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'

export const ComponenteApi = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/1')
    const {datosApi} = useFetch(url)

    const obtenerId = (e) => {
        const id = e.target.value;
        setUrl('https://pokeapi.co/api/v2/pokemon/'+id)
    }

  return (
    <div>
        {datosApi.name}<br/>
        <input type='number' onChange={obtenerId} />
    </div>
  )
}
