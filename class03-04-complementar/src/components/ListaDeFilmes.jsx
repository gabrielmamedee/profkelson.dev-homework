/*
4. Crie um componente `ListaDeFilmes` que recebe um array de objetos filmes e renderiza vários componentes `Filme`.
*/

import Filme from "./Filme"

const ListaDeFilmes = ({ filmes }) => {
  return (
    <>
    {filmes.map((filme, index) => (
       <div key={index}>
            <Filme titulo={filme.titulo} diretor={filme.diretor} ano={filme.ano} />
       </div> 
    ))}
    </>
  )
}

export default ListaDeFilmes