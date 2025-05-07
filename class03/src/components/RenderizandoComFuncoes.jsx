import React from 'react'

const RenderizandoComFuncoes = () => {

    const escolhaDeRenderizacao = (oQueRenderizar) => {
        if (oQueRenderizar === "PB") {
            return <h1>Paraíba</h1>
        } else {
            return <h2>João Pessoa</h2>
        }
    }

  return (
    <div>
        {escolhaDeRenderizacao("PB")}
        {escolhaDeRenderizacao("PE")}
    </div>
  )
}

export default RenderizandoComFuncoes