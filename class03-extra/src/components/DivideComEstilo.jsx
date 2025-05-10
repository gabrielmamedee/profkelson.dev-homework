import React from 'react'

const DivideComEstilo = (props) => {
    const divisao = props.num1 / props.num2
  return (
    <div>
        <p className='divisao'>{props.num1} dividido por {props.num2} é igual a: {divisao}</p>
    </div>
  )
}

export default DivideComEstilo