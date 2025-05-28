/*
17. Crie um componente `SorteadorDeDados` que simula o lançamento de um dado (1 a 6) e armazena os resultados em um array.
*/
import { useState } from "react"

const SorteadorDeDados = () => {
    const [resoltadoDoLancamento, setResoltadoDoLancamento] = useState(null)
    const [listaDeValores, setListaDeValores] = useState([])

    const sortearNumero = () => {
        return Math.floor(Math.random() * 6) + 1
    }

    const lancarDado = () => {
        let numero = sortearNumero()
        setResoltadoDoLancamento(numero)
        setListaDeValores((valorAnterior) => [...valorAnterior, numero])
    }

  return (
    <>  
        <h3>Resultado so Dado: {resoltadoDoLancamento}</h3>
        <button onClick={lancarDado}>Lançar Dado</button>
        <p>{listaDeValores.join(' - ')}</p>
    </>
  )
}

export default SorteadorDeDados