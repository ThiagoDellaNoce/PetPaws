import React from 'react';
import styles from './style.css'

const inputizinhoStyles = {
  borderTopLeftRadius: 7,
  borderBottomLeftRadius: 7,
  width: 300,
  height: 45,
  boxShadow: 'none !important'
}

function Inputizinho() {
  return(
    <input id='tiraOutline' className="form-control border-right-0" style={inputizinhoStyles} type="text" placeholder="Buscar pets" aria-label="Search" />
  )
}

export default Inputizinho;