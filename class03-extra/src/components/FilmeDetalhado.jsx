import React from 'react'

const FilmeDetalhado = ({ titulo, genero, ano }) => {
  return (
    <div>
        <h4>Titulo: {titulo}</h4>
        <p>Genero: {genero}</p>
        <p>Ano: {ano}</p>
    </div>
  )
}

export default FilmeDetalhado