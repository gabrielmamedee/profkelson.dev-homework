
const AlunoComFragment = ({ nome, email, curso, media }) => {
    const status = media >= 7 ? "Aprovado" : "Reprovado"
   
  return (
    <>
        <h3>{nome}</h3>
        <p>{email}</p>
        <p>Curso: {curso}</p>
        <p>Média: {media.toFixed(1)} - {status}</p>
    </>
  )
}

export default AlunoComFragment