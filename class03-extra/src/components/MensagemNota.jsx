import React from 'react'

const MensagemNota = ({ nota }) => {

    const resultadoMedia = (valorNota) => {
        if (valorNota >= 7) {
            return <p>Aprovado</p>
        } else if (valorNota >= 5) {
            return <p>Recuperação</p>
        } else {
            return <p>Reprovado</p>
        }
    }

  return (
    <>
        {resultadoMedia(nota)}
    </>
  )
}

export default MensagemNota