import { useState } from "react"

const HookQuina = () => {
    const [numeroSorteado, setNumeroSorteado] = useState(null)
    const [listaDeSorteados, setListaDeSorteados] = useState([])

    const sortearNumeros = () => {
        let numeroAleatorio = Math.floor(Math.random() * 80) + 1

        if (listaDeSorteados.length >= 5) {
            alert("Ja temos 5 números sorteados!!")
            return
        }

        setNumeroSorteado(numeroAleatorio)
        setListaDeSorteados((listaAnterior) => [...listaAnterior, numeroAleatorio])
    }

  return (
    <div>
        <h2>Sorteador da Quina com React</h2>
        <button onClick={sortearNumeros}>Sortear Número</button>
        <h3>Último número sorteado {numeroSorteado}</h3>
        <p>Sorteados {listaDeSorteados.join(" - ")}</p>
    </div>
  )
}

export default HookQuina