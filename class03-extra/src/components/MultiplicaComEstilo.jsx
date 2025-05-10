import React from 'react'

const MultiplicaComEstilo = (props) => {
    const multiplicacao = props.num1 * props.num2
  return (
    <div>
        <p className='multiplicacao'>{props.num1} x {props.num2} é igual a: {multiplicacao}</p>
    </div>
  )
}

export default MultiplicaComEstilo