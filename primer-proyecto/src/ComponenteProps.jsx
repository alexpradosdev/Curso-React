import React from 'react'
import {PropTypes} from 'prop-types'


export const ComponenteProps = ({ciudad="Lepe",provincia,codPost,children}) => {
  return (
    <>
          <div>{ciudad}</div>
          <div>{provincia}</div>
          <div>{codPost}</div>
          <div>{children}</div>
    </>
  )
}

ComponenteProps.propTypes={
    ciudad:PropTypes.string.isRequired,
    provincia:PropTypes.string,
    codPost:PropTypes.number
}




