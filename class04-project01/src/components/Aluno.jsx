import React from 'react'

const Aluno = ({ nome, email, curso, key }) => {
  return (
    <div key={key}>
        <h3>{nome}</h3>
        <p>{email}</p>
        <p>Curso: {curso}</p>
    </div>
  )
}

export default Aluno