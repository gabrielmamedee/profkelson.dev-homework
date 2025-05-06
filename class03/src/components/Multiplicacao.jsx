import React from 'react'

const Multiplicacao = (props) => {
  const multiplicacao = props.num1 * props.num2;
  return (
    <div>
        <h1>O resultado de {props.num1} + {props.num2} é igual a {multiplicacao}</h1>
    </div>
  )
}

export default Multiplicacao