import React from 'react'

const MinutosParaSegundos = (props) => {
    const segundos = props.minutos * 60;

    const conversaoFormatada = (segundos, minutos) => {
        const textoSegundos = segundos === 1 ? "segundo" : "segundos"
        const textoMinutos = minutos === 1 ? "minuto" : "minutos"

        return <p>{minutos} {textoMinutos} é igual a {segundos} {textoSegundos}</p>
    }
  return (
    <div>
        {conversaoFormatada(segundos, props.minutos)}
    </div>
  )
}

export default MinutosParaSegundos