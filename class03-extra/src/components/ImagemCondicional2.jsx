import React from 'react'
import  Logo  from '../assets/react.svg'
import  Personagem  from '../assets/personagem.avif'

const ImagemCondicional2 = ({ tipoImagem }) => {

    const redenrizaImagem = (tipoDaImagem) => {
        if(tipoDaImagem === "LOGO") {
            return <img src={Logo} alt="Logo React" />
        } else if (tipoDaImagem === "PERSONAGEM") {
            return <img src={Personagem} alt="Personagem" />
        }
    }

  return (
    <>
        {redenrizaImagem(tipoImagem)}
    </>
)
}

export default ImagemCondicional2