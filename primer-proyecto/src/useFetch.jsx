import { useState, useEffect } from "react";

export const useFetch = (url) => {
    
    const [datosApi, setDatosApi] = useState({});

    useEffect(() => {
        obtenerDatos();
    },[url])

    const obtenerDatos = async() => {
        const peticion = await fetch(url);
        const datos = await peticion.json();

        setDatosApi(datos)
    }

    return {
        datosApi
  }
}
