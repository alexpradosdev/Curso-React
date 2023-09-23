import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const ComponenteForm = () => {

    
    const ciudadurl = useParams();

    const objurl = {
        ciudad: ciudadurl.ciudad,
        provincia: '',
        pais: ''
    }

    const [Estadociudad, setCiudad] = useState(objurl);
    const redigir = useNavigate();
    const divForm = useRef();

    const recibidoForm = e => {

        e.preventDefault();

        let objForm = {
            ciudad: e.target.ciudad.value,
            provincia: e.target.provincia.value,
            pais: e.target.pais.value
        }
      
            setCiudad(objForm);
            let url = '/form/'+objForm.ciudad;
            redigir(url);

            divForm.current.classList.add('divForm');


    }

  return (
    <div ref={divForm}>
        <h2>EJEMPLO FORMULARIOS</h2>
        <h3>La ciudad es {Estadociudad.ciudad}</h3>
        <h3>La provincia es {Estadociudad.provincia}</h3>
        <h3>El pais es {Estadociudad.pais}</h3>

        <form onSubmit={recibidoForm}>
            <input type='text' name='ciudad' placeholder='ciudad'/>
            <input type='text' name='provincia' placeholder='provincia'/>
            <input type='text' name='pais' placeholder='país'/>
            <input type='submit'/>
        </form>
    </div>
  )
}
