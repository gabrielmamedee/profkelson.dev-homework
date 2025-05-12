import React from 'react'

const MensagemClima = ({ tipoClima }) => {

    const renderizaClima = (clima) => {
        if (clima === "sol") {
            return <p>Dia ensolarado ☀️</p>
        } else if (clima === "chuva") {
            return <p>Leve seu guarda-chuva ☔</p>
        } else if (clima === "nublado") {
            return <p>Dia nublado ⛅</p>
        }
    }

  return (
    <>
        {renderizaClima(tipoClima)} 
    </>
  )
}

export default MensagemClima