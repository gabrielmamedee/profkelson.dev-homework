import React from 'react'

const SegundosParaHoras = (props) => {
    const horas = props.segundos / 3600;

    const conversaoFormatada = (horas, segundos) => {
        const textoHoras = horas === 1 ? "hora" : "horas"
        const textoSegundos = segundos === 1 ? "segundo" : "segundos"

        return <p>{segundos} {textoSegundos} é igual a {horas} {textoHoras}</p>

    }
  return (
    <div>
        {conversaoFormatada(horas, props.segundos)}
    </div>
  )
}

export default SegundosParaHoras