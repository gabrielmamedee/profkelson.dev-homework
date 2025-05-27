/*
1. Crie um componente chamado `OlaUsuario` que recebe uma prop `nome` e renderiza a frase: "Olá, NOME! Seja bem-vindo(a)!" em uma tag `<h1>`.
 */

const OlaUsuario = ({ nome }) => {
  return (
    <>
        <h1>Olá, {nome}! Seja bem-vindo(a)!</h1>
    </>
  )
}

export default OlaUsuario