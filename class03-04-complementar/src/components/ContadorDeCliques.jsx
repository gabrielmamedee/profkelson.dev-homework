/*
15. Crie um contador chamado `ContadorDeCliques` com um botão que incrementa um contador de cliques.
*/
import { useState } from "react"

const ContadorDeCliques = () => {
    const [cliques, setCliques] = useState(null)
  return (
    <>
        <button onClick={() => setCliques((valorAnterior) => valorAnterior + 1)}>cliques: {cliques}</button>
    </>
  )
}

export default ContadorDeCliques