import React, { useEffect, useState } from 'react'

export const ComponenteFetch = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{
        llamadaApi();
    },[])

    const llamadaApi = async () =>{
        const peticion = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const {results} = await peticion.json();

        setPokemons(results);
    }

  return (
    <div>
        <h2>Haciendo un Fetch</h2>
        <ul>
        {pokemons.map(pokemon =>{
            return(
               
                    <li key = {pokemon.url}>{pokemon.name}</li>
                
            )
        })}
        </ul>
    </div>
  )
}
