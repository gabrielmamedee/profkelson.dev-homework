import React from 'react'

const AnimalFavorito = ({ animal }) => {
    const renderizaAnimalFavorito = (animalFav) => {
        if (animalFav === "cachorro") {
            return <h2>🐶 Eu amo cachorros!</h2>
        } else if (animalFav === "gato") {
            return <h2>🐱 Eu amo gatos!</h2>
        } else {
            return <h2>🐾 Amo todos os animais!</h2>
        }
    }
  return (
    <>
        {renderizaAnimalFavorito(animal)}
    </>
  )
}

export default AnimalFavorito