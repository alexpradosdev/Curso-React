export const LibrosReducer = (estado, action) => 
{
    switch (action.type) {
        case 'crear':
            return [...estado, action.payload]

        case 'borrar':
            return estado.filter((libro) =>{
                return(
                    libro.id !== action.payload
                )
            } )

        case 'editar':
            let elementoArray = estado.findIndex((libro) =>{
                return (libro.id === action.payload.id)
            })
            estado[elementoArray] = action.payload;
            return [...estado]

        default:
          estado;
    }
}