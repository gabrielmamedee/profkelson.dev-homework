import { useState } from 'react'

const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(null)
    const [listaDeNumeros, setListaDeNumeros] = useState([])

    const sortearNumero = () => {
        if (listaDeNumeros.length >= 6) {
            alert("Já temos 6 números sorteados!")
            return
        }
        let numeroAleatorio = Math.floor(Math.random() * 60) + 1
        setNumeroSorteado(numeroAleatorio) 
        setListaDeNumeros((previousDraw) => [...previousDraw, numeroAleatorio])
    }
  return (
    <div>
        <h2>Sorteador da Mega em React!</h2>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h3>Último número soteado {numeroSorteado}</h3>
        <p>Sorteado: {listaDeNumeros.join(" - ")}</p>
    </div>
  )
}

export default HookMegaSena