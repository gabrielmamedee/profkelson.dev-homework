import React from 'react'

const HorasParaSegundos = (props) => {
    const segundos = props.horas * 3600

    const conversaoFormatada = (segundo, horas) => {
        const textoSegundos = segundo === 1 ? "segundo" : "segundos" 
        const textoHoras = horas === 1 ? "hora" : "horas"

        return <p>{horas} {textoHoras} é igual a {segundo} {textoSegundos}</p>
    }

  return (
    <div>
        {conversaoFormatada(segundos, props.horas)}
    </div>
  )
}

export default HorasParaSegundos