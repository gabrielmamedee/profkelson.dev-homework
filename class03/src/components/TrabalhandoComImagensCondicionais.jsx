import React from 'react'
import LogoReact from '../assets/react.svg'

const TrabalhandoComImagensCondicionais = (props) => {
    const renderizarImagen = (tipo) => {
        if (tipo === "PUBLIC") return <img src="/vite.svg" alt="logo vite" />
        else if (tipo === "ASSET") return <img src={LogoReact} alt="logo react" />
    }
  return (
    <div>
        {renderizarImagen(props.tipo)}
    </div>
  )
}

export default TrabalhandoComImagensCondicionais