/*
16. Crie um componente `SorteadorDeNumeros` que sorteia um número de 1 a 100 e exibe na tela cada vez que clicar no botão "Sortear".
*/
import { useState } from "react"

const SorteadorDeNumeros = () => {
    const [numero, setNumero] = useState(null)

    const sorteiaNumeroAleatoria = () => {
        return Math.floor(Math.random() * 100) + 1
    }
  return (
    <>
        <h3>Número sorteado: {numero}</h3>
        <button onClick={() => setNumero(sorteiaNumeroAleatoria)}>Sortear Número</button>
    </>
  )
}

export default SorteadorDeNumeros