import React from 'react'

const SaudacaoHorario = ({ hora }) => {
    const renderizaSaudacao = (horario) => {
        if (horario < 12) {
            return <p>Bom dia!</p>
        } else if (horario >= 12 && horario < 18) {
            return <p>Boa tarde!</p>
        } else if (horario >= 18) {
            return <p>Boa noite!</p>
        }
    }
  return (
    <>
        {renderizaSaudacao(hora)}
    </>
  )
}

export default SaudacaoHorario