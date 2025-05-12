import React from 'react'

const ContatoUsuario = ({ nome, email, telefone }) => {
  return (
    <>
        <div>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <p>Telefone: {telefone}</p>
        </div>
    </>
)
}

export default ContatoUsuario