/*
3. Crie um componente `Filme` que recebe `titulo`, `diretor` e `ano` como props e exibe essas informações em uma `<div>`.
 */

const Filme = ({ titulo, diretor, ano }) => {
  return (
    <>
        <h3>{titulo}</h3>
        <p>Diretor: {diretor}</p>
        <p>Ano: {ano}</p>
    </>
  )
}

export default Filme