import React from 'react'
import Produto from './Produto'

const ListaProdutos = ({ listaDeProdutos}) => {
  return (
    <>
        {
            listaDeProdutos.map((produto, index) => (
                <Produto key={index} nome={produto.nome} preco={produto.preco} categoria={produto.categoria} />
            ))
        }
    </>
  )
}

export default ListaProdutos