import React from 'react'

const StatusConexao = ({ online }) => {

    const statusConexao = online ? "Conectado ✅" : "Desconectado ❌"

  return (
    <>
        <h2>Status da conexão: {statusConexao}</h2>
    </>
  )
}

export default StatusConexao