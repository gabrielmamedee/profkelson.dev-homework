import React from 'react'

const MilhasParaQuilometros = (props) => {
    const km = props.milhas / 0.621371;
  return (
    <div>
        <h1>{props.milhas}Milhas é o mesmo que {km.toFixed(2)}Km.</h1>
    </div>
  )
}

export default MilhasParaQuilometros