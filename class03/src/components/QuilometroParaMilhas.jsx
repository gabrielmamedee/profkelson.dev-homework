import React from 'react'

const QuilometroParaMilhas = (props) => {
    const milhas = props.km * 0.621371;
  return (
    <div>
        <h1>{props.km}Km é o mesmo que {milhas.toFixed(2)}Milhas.</h1>
    </div>
  )
}

export default QuilometroParaMilhas