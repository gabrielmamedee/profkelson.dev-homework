import React from 'react'
import Livro from './Livro'

const ListaDeLivros = () => {
    const livros = [
        { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1994 },
        { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1961 },
        { titulo: "1984", autor: "George Orwell", ano: 1991 }
    ]

  return (
    <div>
        {
            livros.map((livro, index) => (
                <Livro key={index} titulo={livro.titulo} autor={livro.autor} ano={livro.ano} />
            ))
        }
    </div>
  )
}

export default ListaDeLivros