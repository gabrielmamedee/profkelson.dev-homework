import React from 'react'

const SubtraiComEstilo = (props) => {
    const subtracao = props.num1 - props.num2
  return (
    <div>
        <p className='subtracao'>{props.num1} - {props.num2} é igual a: {subtracao}</p>
    </div>
  )
}

export default SubtraiComEstilo