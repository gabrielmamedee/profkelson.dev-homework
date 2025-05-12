import React from 'react'

const CorFavorita = ({ cor }) => {
  return (
    <>
        <div style={{backgroundColor: cor}}>
            <h1>{cor}</h1>
        </div>
    </>
  )
}

export default CorFavorita