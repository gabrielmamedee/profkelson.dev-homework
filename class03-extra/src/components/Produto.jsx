import React from 'react'

const Produto = ({ nome, preco, categoria }) => {
  return (
    <>
        <div>
            <p>{nome}</p>
            <p>Preço: {preco}</p>
            <p>Categoria: {categoria}</p>
        </div>
    </>
  )
}

export default Produto