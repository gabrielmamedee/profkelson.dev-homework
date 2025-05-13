import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    const incrementarContador = () => {
        setContador(contador + 1)
    }

    const decrementarContador = () => {
        setContador(contador - 1)
    }

  return (
    <>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementarContador}>Incremantar contador</button>
        <button onClick={decrementarContador}>Decrementar contador</button>
    </>
  )
}

export default HookContador