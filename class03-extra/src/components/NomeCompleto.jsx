import React from 'react'

const NomeCompleto = ({ nome, sobrenome }) => {
  return (
    <>
        <h3>Seu nome completo é: {nome} {sobrenome}</h3>
    </>
  )
}

export default NomeCompleto