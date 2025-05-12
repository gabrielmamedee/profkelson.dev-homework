import React from 'react'

const ListaDeFrutas = ({ frutas }) => {

  return (
    <>  
        <ul>
        {
            frutas.map((fruta, index) => (
                <li key={index}>{fruta}</li>
            ))
        }
        </ul>
    </>
  )
}

export default ListaDeFrutas