import React from 'react'

const MensagemEmoji = ({ mensagem, emoji}) => {
  return (
    <>
        <h2>{mensagem} + {emoji}</h2>
    </>
  )
}

export default MensagemEmoji