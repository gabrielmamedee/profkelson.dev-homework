import React from 'react'

const SegundosParaMinutos = (props) => {
    const minutos = Math.floor(props.segundos / 60); // resultado: 2
    const segundosRestantes = props.segundos % 60;

    const conversaoFormatada = (minutos, segundosRestantes) => {
        const textoMinutos = minutos > 0 && minutos === 1 ? "minuto" : "minutos"
        const textoSegundos = segundosRestantes > 0 && segundosRestantes === 1 ? "segundo" : "segundos"
        if(segundosRestantes > 0) {
            return <p>{props.segundos} segundos é igual a {minutos} {textoMinutos} e {segundosRestantes} {textoSegundos}</p>
        } else {
            return <p>{props.segundos} segundos é igual a {minutos} {textoMinutos}</p>
        }
    }
  return (
    <div>
        {conversaoFormatada(minutos, segundosRestantes)}
    </div>
  )
}

export default SegundosParaMinutos