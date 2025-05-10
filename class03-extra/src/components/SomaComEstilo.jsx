import React from 'react'

const SomaComEstilo = (props) => {
    const soma = props.num1 + props.num2
  return (
    <div>
        <p className='soma'>{props.num1} + {props.num2} é igual a: {soma}</p>
    </div>
  )
}

export default SomaComEstilo