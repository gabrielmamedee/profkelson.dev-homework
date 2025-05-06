import React from 'react'

const Livro = (props) => {
  return (
    <div>
        <h2>{props.titulo}</h2>
        <p>Autor: {props.autor}. Ano-{props.ano}</p>
    </div>
  )
}

export default Livro