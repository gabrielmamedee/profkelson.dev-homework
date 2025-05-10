import React from 'react'

const FilmeDetalhado = (props) => {
  return (
    <div>
        <h4>Titulo: {props.titulo}</h4>
        <p>Genero: {props.genero}</p>
        <p>Ano: {props.ano}</p>
    </div>
  )
}

export default FilmeDetalhado