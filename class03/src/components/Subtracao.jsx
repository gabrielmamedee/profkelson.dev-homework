import React from 'react'

const Subtracao = (props) => {
  const subtracao = props.num1 - props.num2;
  return (
    <div>
        <h1>O resultado de {props.num1} - {props.num2} é igual a {subtracao}</h1>
    </div>
  )
}

export default Subtracao