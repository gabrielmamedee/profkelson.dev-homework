import React from 'react'
import FilmeDetalhado from './FilmeDetalhado'

const ListaDeFilmesDetalhados = () => {

  const listaDeFilmes = [
    { titulo: "O Poderoso Chefão", genero: "Crime", ano: "1972" },
    { titulo: "Interestelar", genero: "Ficção Científica", ano: "2014" },
    { titulo: "Parasita", genero: "Drama", ano: "2019" }
  ]

  return (
    <>
      <h2>Lista de filmes</h2>
      {
        listaDeFilmes.map((filme, index) => (
          <FilmeDetalhado key={index} titulo={filme.titulo} genero={filme.titulo} ano={filme.ano}/>
        ))
      }
    </>
  )
}

export default ListaDeFilmesDetalhados