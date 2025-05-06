import React from 'react'

const Adicao = (props) => {
  const soma = props.num1 + props.num2  
  return (
    <div>
        <h1>O resultado de {props.num1} + {props.num2} é igual a {soma}</h1>
    </div>
  )
}

export default Adicao